<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './UI/Image.svelte';
	import UilCart from '~icons/uil/cart';
	import SolarHamburgerMenuBold from '~icons/solar/hamburger-menu-bold';
	import SolarCloseSquareBold from '~icons/solar/close-square-bold';
	import Logo from '$lib/components/icons/Logo.svelte';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import CartSvg from '$lib/components/icons/CartSvg.svelte';

	let { children }: { children?: Snippet } = $props();

	let showMobileMenu = $state(false);

	const menuData = {
		desktop: [
			{ name: 'Все товары', url: '/' },
			{ name: 'Футболки', url: '/' },
			{ name: 'Шопперы', url: '/' },
			{ name: 'Стикеры', url: '/' }
		],
		mobile: [
			{ name: 'Все товары', url: '/' },
			{ name: 'Футболки', url: '/' },
			{ name: 'Шопперы', url: '/' },
			{ name: 'Стикеры', url: '/' },
			{ name: 'Оплата и доставка', url: '/' },
			{ name: 'Отзывы', url: '/' },
			{ name: 'Контакты', url: '/' }
		]
	};
</script>

<header class="bg-cedar-leaves-bright flex min-h-[10dvh] w-full flex-col">
	<div
		class=" flex-1/3 mx-auto flex h-full w-full max-w-[1216px] flex-grow justify-between px-6 text-white lg:px-0"
	>
		<!-- menu -->
		<nav class="flex-1/3 hidden items-center md:flex">
			<ul class="flex md:gap-2">
				{#each menuData.desktop as menu}
					<li>
						<a
							href={menu.url}
							class="hover:text-green-default font-oswald font-medium uppercase transition-colors"
							>{menu.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		<!-- logotype -->
		<a href="/" class="md:flex-1/3 flex items-center justify-start md:justify-center">
			<figure class="">
				<Logo className="h-10 w-auto"></Logo>
			</figure>
		</a>
		<!-- login & basket -->
		<div class="text-asphalt md:flex-1/3 hidden items-center justify-end gap-2 md:flex md:gap-4">
			<div class="font-oswald font-normal text-white">
				<a href="/" class="hover:font-bold transition-all">ВХОД</a>&nbsp;/&nbsp;<a href="/" class="hover:font-bold transition-all">РЕГИСТРАЦИЯ</a>
			</div>
			<a href="/" class="group relative flex aspect-square h-10 w-10 items-center justify-center">
				<UilCart
					class="text-green-dark  z-1 transition-color text-xl duration-300 group-hover:text-white"
				></UilCart>
				<CartSvg></CartSvg>
				<span
					class="group-hover:bg-green-default absolute inset-0 aspect-square origin-center scale-0 rounded-lg transition-all duration-300 group-hover:scale-100"
				></span>
			</a>
		</div>
		<button
			class="flex items-center justify-center md:hidden"
			onclick={() => (showMobileMenu = true)}
		>
			<SolarHamburgerMenuBold class="text-green-default text-4xl "></SolarHamburgerMenuBold>
		</button>
	</div>

	{#if showMobileMenu}
		<div
			class="z-100 bg-asphalt fixed left-0 top-0 flex h-dvh w-full flex-col justify-between p-12"
			transition:fly={{ delay: 250, duration: 600, x: 0, y: 500, opacity: 0.1, easing: quintOut }}
		>
			<button class="flex w-full items-center justify-end" onclick={() => (showMobileMenu = false)}>
				<SolarCloseSquareBold class="text-light-gray text-4xl"></SolarCloseSquareBold>
			</button>
			<!-- menu -->
			<nav>
				<ul
					class="font-oswald text-light-gray flex flex-col items-end justify-between gap-8 text-4xl font-medium uppercase"
				>
					{#each menuData.mobile as menu}
						<li>
							<a href={menu.url} class="active:text-green-default transition-colors">{menu.name}</a>
						</li>
					{/each}
				</ul>
			</nav>
			<!-- login & basket -->
			<div class="space-y-6">
				<hr class="text-light-gray" />
				<div class="flex items-center justify-end gap-4 text-white">
					<div>
						<a href="/" class="font-oswald font-bold text-white">ВХОД</a>&nbsp;/&nbsp;<a
							href="/"
							class="font-oswald font-bold">РЕГИСТРАЦИЯ</a
						>
					</div>
					<a
						href="/"
						class="bg-green-default group relative flex aspect-square h-14 w-14 items-center justify-center rounded-xl"
					>
						<UilCart class="  z-1 transition-color text-xl duration-300 group-hover:text-white"
						></UilCart>
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>

<style>
</style>
