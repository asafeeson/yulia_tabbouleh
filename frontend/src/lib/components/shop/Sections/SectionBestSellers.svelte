<script lang="ts">
	import type { ProductDTO } from '@medusajs/types';
	import HeroBannerWithCta from '../HeroBannerWithCTA.svelte';
	import ProductMiniCard from '../ProductMiniCard.svelte';
	import Link from '../UI/Link.svelte';
	import Section from './Section.svelte';
	let { products }: { products: ProductDTO[] } = $props();
</script>

<Section contentFlexClass="flex flex-col items-stretch mx-auto py-12 gap-12 md:px-0 px-6">
	<div class="flex flex-col items-center justify-center gap-3">
		<h2>За каждым образом скрыта история...</h2>
		<p>Для каждого продукта я описала историю и смысл изображения в карточке товара</p>
	</div>
	<div class="flex flex-col gap-6 lg:flex-row">
		<HeroBannerWithCta
			extraClass="lg:flex-1/3 relative flex flex-col h-[600px] lg:h-auto rounded-3xl overflow-hidden"
		>
			<div class="flex-grow"></div>
			<div class="flex flex-col gap-6 px-6 pb-12">
				<h4 class="text-white">Важный баннер о чем-то классном</h4>
				<Link href="/shop/catalogue">Каталог</Link>
			</div>
		</HeroBannerWithCta>
		<ul class="lg:flex-2/3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each products as product}
				<li>
					<ProductMiniCard
						image={product.thumbnail ?? ''}
						title={product.title}
						price={product.variants[0].calculated_price}
					></ProductMiniCard>
				</li>
			{/each}
		</ul>
	</div>
</Section>

<style>
</style>
