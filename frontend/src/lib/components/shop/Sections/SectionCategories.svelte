<script lang="ts">
	import type { Snippet } from 'svelte';
	import Section from './Section.svelte';

	interface Props {
		sectionBackground?: string;
		children?: Snippet
	}

	let { children, sectionBackground = "bg-cedar-leaves-dark" }: Props = $props();
</script>

<Section
	contentClass="gap-6"
	contentFlexClass="flex flex-col md:flex-row mx-auto px-4 lg:px-0"
	sectionClass="relative py-12 overflow-hidden"
	{sectionBackground}
>
	{#if children}
		{@render children()}
	{/if}
</Section>
