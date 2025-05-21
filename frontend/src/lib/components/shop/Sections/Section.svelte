<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		outsideContent?: Snippet;
		sectionWidth?: string;
		contentWidth?: string;
		contentHeight?: string;
		sectionHeight?: string;
		sectionClass?: string;
		contentClass?: string;
		contentFlexClass?: string;
		sectionBackground?: string;
	}

	let {
		children,
		outsideContent,
		contentWidth = 'max-w-[1216px]',
		contentHeight = '',
		sectionWidth = 'w-full',
		sectionHeight = 'h-auto',
		sectionClass = '',
		contentClass = '',
		contentFlexClass = 'flex items-center justify-center mx-auto',
		sectionBackground: sectionBackground = ''
	}: Props = $props();
</script>

<section
	class="w-full overflow-clip md:justify-start {sectionWidth ?? sectionWidth} {sectionHeight ??
		sectionHeight} {sectionClass ?? sectionClass} {sectionBackground ?? sectionBackground}"
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
	{#if outsideContent}
		{@render outsideContent()}
	{/if}
</section>

<style>
</style>
