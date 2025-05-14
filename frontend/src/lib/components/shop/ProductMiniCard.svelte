<script lang="ts">
	import FiveStars from './FiveStars.svelte';
	import Image from './Image.svelte';
	interface Props {
		image?: string;
		title?: string;
		price?: string | number;
	}

	let { title, image = 'https://picsum.photos/224/358', price = '0' }: Props = $props();
</script>

<div class="aspect-16/10 flex flex-col gap-1.5">
    <Image src={image} classImage="max-h-80 w-full"></Image>
	<div class="px-1">
        <h4>{title}</h4>
		<p>{price}</p>
		<FiveStars></FiveStars>
	</div>
</div>
