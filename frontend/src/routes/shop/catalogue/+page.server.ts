import { getMedusaClient } from '$lib/medusa';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const queryFilter = new Object();
	const collectionHandle = url.searchParams.get('collection');
	const categoryHandle = url.searchParams.get('category');
	const medusa = await getMedusaClient();

	if (collectionHandle) {
		const { collections } = await medusa.store.collection.list({ handle: collectionHandle });
		if (collections.length) {
			queryFilter.collection_id = collections[0].id;
		}
	}

	if (categoryHandle) {
		const { product_categories } = await medusa.store.category.list({ handle: categoryHandle });
		if (product_categories.length) {
			queryFilter.category_id = product_categories[0].id;
		}
	}

	queryFilter.order = '-created_at';
	const { products } = await medusa.store.product.list(queryFilter);

	return {
		products
	};
};
