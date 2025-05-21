<script lang="ts">
	import type { Snippet } from 'svelte';
	import Section from './Section.svelte';
	import CategoryBanner from './CategoryBanner.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<Section contentClass="gap-6" contentFlexClass="flex flex-col md:flex-row mx-auto" sectionClass="py-12" sectionBackgound="bg-cedar-leaves-dark">
	<CategoryBanner backgroundImageSrc="/shirt_category.png" title="Футболки" subtitle="Супер крутые футболки от Юли и Ливана"></CategoryBanner>
	<CategoryBanner backgroundImageSrc="/shirt_category.png" title="Шопперы" subtitle="Супер крутые футболки от Юли и Ливана"></CategoryBanner>
</Section>
