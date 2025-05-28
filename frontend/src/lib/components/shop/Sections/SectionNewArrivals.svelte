<script lang="ts">
	import type { ProductDTO } from '@medusajs/types';
	import ProductMiniCard from '../ProductMiniCard.svelte';
	import Section from './Section.svelte';
	import type { WooProduct } from '$lib/woo/types/products';
	let { products }: { products: WooProduct[] } = $props();
</script>

<Section contentFlexClass="flex flex-col items-stretch mx-auto py-12 md:px-0 px-6 gap-12">
	<div class="flex flex-col items-center justify-center gap-3">
		<h2>Новые поступления</h2>
		<p>Новые поступления или скоро на вот-воте будут...</p>
	</div>
	<div class="flex flex-col gap-6 lg:flex-row">
		<ul class="lg:flex-2/3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each products as product}
				<li>
					<ProductMiniCard
						image={product.images[0].src ?? ''}
						title={product.name}
						price={product.price}
					></ProductMiniCard>
				</li>
			{/each}
		</ul>
	</div>
</Section>

<style>
</style>
