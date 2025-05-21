<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		IconSvg: Component;
		title: string;
		text: string;
	}
	let { IconSvg, title, text }: Props = $props();
</script>

<article class="flex flex-col gap-4 p-6">
	<div class="flex flex-row md:flex-col md:gap-0 gap-3 items-center">
		<figure class="flex items-center justify-center">
			<IconSvg />
		</figure>
		<h5 class="md:text-center text-left">{title}</h5>
	</div>
	<p class="md:text-center text-left text-sm">{text}</p>
</article>
