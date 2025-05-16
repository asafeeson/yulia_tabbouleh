<script lang="ts">
	import FiveStars from './FiveStars.svelte';
	import Image from './Image.svelte';
	interface Props {
		image?: string;
		title?: string;
		description?: string;
		price?: string | number;
		url?: string;
	}

	let {
		title,
		description,
		url,
		image = 'https://picsum.photos/224/358',
		price = '0'
	}: Props = $props();
</script>

<div class="aspect-16/10 flex flex-col gap-1.5" itemscope itemtype="https://schema.org/Product">
	<a href={url} itemprop="url">
		<Image src={image} classImage="max-h-80 w-full"></Image>
	</a>
	<div class="px-1">
		<h4 itemprop="name">{title}</h4>
		{#if description}
			<p>{description}</p>
		{/if}
		<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
			<meta itemprop="priceCurrency" content="RUB">
			<span itemprop="price">{price}</span>
		</div>
		<FiveStars></FiveStars>
	</div>
</div>
