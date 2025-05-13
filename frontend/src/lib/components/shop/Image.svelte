<script lang="ts">
	import type { MetaDataImg } from '$lib/types';
	import type { Snippet } from 'svelte';

	interface Props {
		src: string;
		alt?: string;
		srcset?: string;
		sizes?: string;
		title?: string;
		loading?: 'lazy' | 'eager';
		caption?: string;
		className?: string;
		width?: number | string;
		height?: number | string;
		decoding?: 'sync' | 'async' | undefined;
		metaData?: MetaDataImg[];
	}

	let {
		src,
		alt,
		srcset,
		sizes,
		title,
		loading = 'lazy',
		caption,
		className,
		width,
		height,
		decoding = 'async',
		metaData
	}: Props = $props();
</script>

<figure itemscope itemtype="https://schema.org/ImageObject" class={className}>
	<img
		{src}
		{alt}
		{srcset}
		{sizes}
		{title}
		{loading}
		{width}
		{height}
		aria-label={alt}
		aria-describedby={caption ? 'image-caption' : undefined}
		itemprop="image"
		{decoding}
	/>
	{#if caption}
		<figcaption id="image-caption" itemprop="caption">{caption}</figcaption>
	{/if}

	{#if metaData}
		{#each metaData as meta}
			<meta itemprop={meta.itemprop} content={meta.content} />
		{/each}
	{/if}
</figure>
