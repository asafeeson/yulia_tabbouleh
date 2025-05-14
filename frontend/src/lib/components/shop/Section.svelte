<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		sectionWidth?: string;
		contentWidth?: string;
		contentHeight?: string;
		sectionHeight?: string;
		sectionClass?: string;
		contentClass?: string;
		contentFlexClass?: string;
		sectionBackgound?: string;
	}

	let {
		children,
		contentWidth = 'max-w-[1216px]',
		contentHeight = 'h-auto',
		sectionWidth = 'w-full',
		sectionHeight = 'h-auto',
		sectionClass = '',
		contentClass = '',
		contentFlexClass = 'flex items-center justify-center mx-auto',
		sectionBackgound = ''
	}: Props = $props();
</script>

<section
	class="w-full overflow-clip md:justify-start {sectionWidth} {sectionHeight} {sectionClass} {sectionBackgound}"
	id="section-content-wrapper"
>
	<div
		id="section-content"
		class={contentFlexClass + ' ' + contentWidth + ' ' + contentHeight + ' ' + contentClass}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</section>

<style>
</style>
