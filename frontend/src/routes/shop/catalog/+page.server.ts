import { getMedusaClient } from '$lib/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const medusa = await getMedusaClient();
	const { products } = await medusa.store.product.list();
	return {
		products
	};
};
