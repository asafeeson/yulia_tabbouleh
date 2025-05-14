<script lang="ts">
	import type { Snippet } from 'svelte';
	import Section from './Section.svelte';
	import CategoryBanner from './CategoryBanner.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<Section contentClass="gap-6">
	<CategoryBanner backgroundImageSrc="https://picsum.photos/400/201"></CategoryBanner>
	<CategoryBanner backgroundImageSrc="https://picsum.photos/400/200"></CategoryBanner>
</Section>
