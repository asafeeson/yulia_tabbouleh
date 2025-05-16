<script lang="ts">
	import type { Snippet } from 'svelte';
	import Section from './Section.svelte';
	import CategoryBanner from './CategoryBanner.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<Section contentClass="gap-6" contentFlexClass="flex flex-col md:flex-row mx-auto">
	<CategoryBanner backgroundImageSrc="/shirt_category.png" title="Категория товаров типа футболки"></CategoryBanner>
	<CategoryBanner backgroundImageSrc="/shirt_category.png" title="Категория товаров типа шопперы"></CategoryBanner>
</Section>
