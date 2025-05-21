import type { PageServerLoad } from './$types';
import { getMedusaClient } from '$lib/medusa';

export const load: PageServerLoad = async ({ params }) => {
	const medusa = await getMedusaClient();
	const { products } = await medusa.store.product.list({ handle: params.slug });
    
	console.log(products);
	return {
		product: !products.length ? [] : products[0]
	};
};
