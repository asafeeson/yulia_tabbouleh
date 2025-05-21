<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<h1>Это каталог продукции</h1>
<ul>
	{#each data.products as product}
		<li>
			ID: <a href="product/{product.handle}" class="text-amber-500">{product.id}</a><br />
			Категория: {product.categories}<br />
			Коллекция: {product.collection}<br />
			Заголовок: {product.title}<br />
			Подзаголовок: {product.subtitle}<br />
			Handle: {product.handle}<br />
			{#if product.images}
				<ul class="flex gap-1">
					{#each product.images as image, i (image.id)}
						<li>
							<img src={image.url} alt={image.id} srcset="" width="200px" />
						</li>
					{/each}
				</ul>
			{/if}
		</li>
	{/each}
</ul>
