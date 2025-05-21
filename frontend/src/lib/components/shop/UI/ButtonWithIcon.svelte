<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Link.svelte';

	interface Props {
		href: string;
		children: Snippet;
	}

	let { href, children }: Props = $props();
</script>

<div class="flex px-10 py-2.5">
	<Button {href}>{@render children()}</Button>
</div>

<style>
</style>
