<script lang="ts">
	import FiveStars from './UI/FiveStars.svelte';
	import Image from './UI/Image.svelte';
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

<div class="flex flex-col gap-1.5" itemscope itemtype="https://schema.org/Product">
	<a href={url} itemprop="url" class="cursor-pointer">
		<Image src={image} classImage="w-full"></Image>
	</a>
	<div class="space-y-2 md:px-1 px-4">
		<h6 itemprop="name">{title}</h6>
		{#if description}
			<p>{description}</p>
		{/if}
		<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
			<meta itemprop="priceCurrency" content="RUB" />
			<span itemprop="price">{price}</span>
		</div>
		<FiveStars></FiveStars>
	</div>
</div>
