<script lang="ts">
	import Logo from '../SVG/Logo.svelte';

	const menuData = {
		menuOne: [
			{ name: 'Футболки', url: '/' },
			{ name: 'Шопперы', url: '/' },
			{ name: 'Стикеры', url: '/' }
		],
		menuTwo: [
			{ name: 'Отзывы', url: '/' },
			{ name: 'Оплата и доставка', url: '/' },
			{ name: 'Контакты', url: '/' }
		],
		menuThree: [
			{ name: 'Политика конфиденциальности', url: '/' },
			{ name: 'Условия использования', url: '/' }
		]
	};
</script>

<footer class="bg-asphalt text-light-gray flex min-h-[30dvh] w-full">
	<div
		class="mx-auto flex max-w-[1216px] flex-grow flex-col justify-between space-y-6 px-6 pb-4 pt-10 lg:px-0"
	>
		<div class="flex flex-wrap items-center justify-between px-6 md:items-start lg:px-0">
			<div
				class="md:flex-1/4 mb-2 flex w-full flex-col items-center justify-start gap-2 lg:mb-0 lg:items-start"
			>
				<figure class="flex items-center justify-start">
					<Logo className="h-10 w-auto" textColor="white"></Logo>
				</figure>
				<p>© Юля Таббуле, 2025</p>
			</div>
			<div
				class="lg:flex-3/4 flex w-full flex-col items-center justify-center space-y-2 md:flex-row md:justify-around md:space-y-0"
			>
				<nav class="w-full">
					<ul class="space-y-2 text-center">
						{#each menuData.menuOne as menu}
							<li><a href={menu.url} itemprop="url" class="hover:text-white">{menu.name}</a></li>
						{/each}
					</ul>
				</nav>
				<nav class="w-full">
					<ul class="space-y-2 text-center">
						{#each menuData.menuTwo as menu}
							<li><a href={menu.url} itemprop="url" class="hover:text-white">{menu.name}</a></li>
						{/each}
					</ul>
				</nav>
				<nav class="w-full">
					<ul class="space-y-2 text-center">
						{#each menuData.menuThree as menu}
							<li><a href={menu.url} itemprop="url" class="hover:text-white">{menu.name}</a></li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
		<div>
			<hr class="text-wolf-gray mb-2" />
			<p class="text-center text-sm">
				Сделано фулл-стек разработчиком&nbsp;<a
					href="https://asafeeson.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="font-bold">asafeeson.dev</a
				>
			</p>
		</div>
	</div>
</footer>

<style>
</style>
