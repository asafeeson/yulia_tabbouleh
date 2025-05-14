<script lang="ts">
	import type { MetaDataLink } from '$lib/types';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		className?: string;
		text?: string;
		title?: string;
		ariaLabel?: string;
		itemprop?: 'url' | 'sameAs' | 'mainEntiriyOfPage' | 'contentUrl' | 'thumbnailUrl' | 'about';
		rel?: string;
		target?: '_balnk' | '_self' | '_parent' | '_top';
		isExternal?: boolean;
		metaData?: MetaDataLink[];
		children: Snippet;
	}

	let {
		href,
		className = 'bg-green-default text-white hover:bg-green-800',
		ariaLabel,
		text,
		title,
		itemprop = 'url',
		target = '_self',
		rel,
		isExternal = false,
		metaData,
		children
	}: Props = $props();
</script>

<span itemscope itemtype="https://schema.org/WebPage">
	<a
		{href}
		title={title || text}
		{target}
		rel={isExternal ? 'noopener noreferrer' : rel}
		aria-label={ariaLabel || text}
		{itemprop}
		class={className + " " + "px-10 py-2.5 transition-all"}
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
	{#if metaData}
		{#each metaData as meta}
			<meta itemprop={meta.itemprop} content={meta.content} />
		{/each}
	{/if}
</span>
