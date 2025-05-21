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
		isSkeleton?: boolean;
		metaData?: MetaDataLink[];
		children: Snippet;
	}

	let {
		href,
		ariaLabel,
		text,
		title,
		itemprop = 'url',
		target = '_self',
		rel,
		isExternal = false,
		isSkeleton = false,
		metaData,
		children
	}: Props = $props();

	let classBaseButton = 'px-8 py-4 transition-all font-oswald font-bold uppercase w-fit';
	let classBold =
			'relative text-white bg-cedar-leaves-bright overflow-hidden group ' + classBaseButton,
		classSkeleton = 'relative border text-white overflow-hidden group ' + classBaseButton;
</script>

<div itemscope itemtype="https://schema.org/WebPage" class={isSkeleton ? classSkeleton : classBold}>
	<a
		{href}
		title={title || text}
		{target}
		rel={isExternal ? 'noopener noreferrer' : rel}
		aria-label={ariaLabel || text}
		{itemprop}
	>
		<span class="z-1 relative">
			{#if children}
				{@render children()}
			{/if}
		</span>
		<span
			class="from-cedar-leaves-shadow absolute inset-0 z-0 origin-left scale-x-0 transform bg-gradient-to-r to-transparent transition-transform duration-500 group-hover:scale-x-100"
		></span>
	</a>
	{#if metaData}
		{#each metaData as meta}
			<meta itemprop={meta.itemprop} content={meta.content} />
		{/each}
	{/if}
</div>
