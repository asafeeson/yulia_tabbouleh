<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<footer class="bg-asphalt text-light-gray w-full min-h-[30dvh]">
	<div class="max-w-[1216px] mx-auto py-10 space-y-6">
		<h3>Юля Tabbouleh</h3>
		<nav>
			<ul class="space-y-2">
				<li><a href="/" itemprop="url" class="hover:text-white">Футболки</a></li>
				<li><a href="/" itemprop="url" class="hover:text-white">Шопперы</a></li>
				<li><a href="/" itemprop="url" class="hover:text-white">Стикеры</a></li>
			</ul>
		</nav>
		{#if children}
			{@render children()}
		{/if}
	</div>
</footer>

<style>
</style>
