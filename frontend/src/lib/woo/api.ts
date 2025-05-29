import axios from 'axios';
import type { AxiosInstance } from 'axios';
import CryptoJS from 'crypto-js';
import qs from 'qs';
import { WOO_CONSUMER_KEY, WOO_CONSUMER_SECRET, WOO_BACKEND_URL } from '$env/static/private';
import type { WooProduct } from '../wooTypes';

const WOOCOMMERCE_URL = WOO_BACKEND_URL!;
const WOOCOMMERCE_CONSUMER_KEY = WOO_CONSUMER_KEY!;
const WOOCOMMERCE_CONSUMER_SECRET = WOO_CONSUMER_SECRET!;

class WooCommerceAPI {
	private static instance: WooCommerceAPI;
	private client: AxiosInstance;

	private constructor() {
		this.client = axios.create({
			baseURL: `${WOOCOMMERCE_URL}/wp-json/wc/v3`,
			headers: {
				'Content-Type': 'application/json'
			},
			paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'brackets' })
		});
	}

	public static getInstance(): WooCommerceAPI {
		if (!WooCommerceAPI.instance) {
			WooCommerceAPI.instance = new WooCommerceAPI();
		}
		return WooCommerceAPI.instance;
	}

	private getOAuthParams(method: string, endpoint: string, params: Record<string, any> = {}) {
		const url = `${WOOCOMMERCE_URL}/wp-json/wc/v3${endpoint}`;
		const oauth = {
			oauth_consumer_key: WOOCOMMERCE_CONSUMER_KEY,
			oauth_nonce: CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex),
			oauth_signature_method: 'HMAC-SHA256',
			oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
			oauth_version: '1.0'
		};
		const allParams: Record<string, any> = { ...params, ...oauth };
		const baseParams = Object.keys(allParams)
			.sort()
			.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(allParams[key])}`)
			.join('&');
		const baseString = [
			method.toUpperCase(),
			encodeURIComponent(url),
			encodeURIComponent(baseParams)
		].join('&');
		const signingKey = `${WOOCOMMERCE_CONSUMER_SECRET}&`;
		const signature = CryptoJS.HmacSHA256(baseString, signingKey).toString(CryptoJS.enc.Base64);
		return { ...allParams, oauth_signature: signature };
	}

	private async request(
		method: 'get' | 'post' | 'put' | 'delete',
		endpoint: string,
		data?: any,
		params?: Record<string, any>
	) {
		const oauthParams = this.getOAuthParams(method, endpoint, params);
		return this.client.request({
			method,
			url: endpoint,
			params: oauthParams,
			data
		});
	}

	// Get all products
	async getProducts(params?: Record<string, any>): Promise<WooProduct[]> {
		const res = await this.request('get', '/products', undefined, params);
		return res.data;
	}

	// Get a single product by ID
	async getProduct(id: number): Promise<WooProduct> {
		const res = await this.request('get', `/products/${id}`);
		return res.data;
	}

	// Create a new product
	async createProduct(data: Record<string, any>) {
		const res = await this.request('post', '/products', data);
		return res.data;
	}

	// Update a product by ID
	async updateProduct(id: number, data: Record<string, any>) {
		const res = await this.request('put', `/products/${id}`, data);
		return res.data;
	}

	// Delete a product by ID
	async deleteProduct(id: number, force = true) {
		const res = await this.request('delete', `/products/${id}`, undefined, { force });
		return res.data;
	}
}

export default WooCommerceAPI.getInstance();
