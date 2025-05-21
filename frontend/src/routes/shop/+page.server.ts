import type { PageServerLoad } from './$types';
import { getMedusaClient } from '$lib/medusa';

export const load: PageServerLoad = async (event) => {
	const medusa = await getMedusaClient();
	const { products } = await medusa.store.product.list({limit: 6, order: "-created_at"});
	return {
		productsBestSellers: products
	};
};
