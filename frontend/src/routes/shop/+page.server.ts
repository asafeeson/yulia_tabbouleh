import type { PageServerLoad } from './$types';
import woo from '$lib/woo/api';

export const load: PageServerLoad = async (event) => {
	
	const products = await woo.getProducts();
	return {
		productsBestSellers: products
	};
};
// export const load: PageServerLoad = async (event) => {
// 	const medusa = await getMedusaClient();
// 	const { products } = await medusa.store.product.list({limit: 6, order: "-created_at"});
// 	return {
// 		productsBestSellers: products
// 	};
// };
