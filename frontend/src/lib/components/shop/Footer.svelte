<script lang="ts">
	import type { Snippet } from 'svelte';
	import Logo from '../SVG/Logo.svelte';

</script>

<footer class="bg-asphalt text-light-gray min-h-[30dvh] w-full">
	<div class="mx-auto max-w-[1216px] space-y-6 px-6 py-10 lg:px-0">
		<div class="flex items-start justify-between">
			<div class="flex-1/3 flex items-start justify-start">
				<figure class="flex items-center justify-start">
					<Logo className="h-10 w-auto" textColor="white"></Logo>
				</figure>
			</div>
			<div class="flex-1/3 flex justify-between">
				<nav>
					<ul class="space-y-2">
						<li><a href="/" itemprop="url" class="hover:text-white">Футболки</a></li>
						<li><a href="/" itemprop="url" class="hover:text-white">Шопперы</a></li>
						<li><a href="/" itemprop="url" class="hover:text-white">Стикеры</a></li>
					</ul>
				</nav>
			</div>
			<div class="flex-1/3 flex justify-between"></div>
		</div>
		<hr class="text-wolf-gray" />
		Сделано &nbsp;<a href="https://asafeeson.dev" target="_blank" rel="noopener noreferrer"
			>asafeeson.dev</a
		>
	</div>
</footer>

<style>
</style>
