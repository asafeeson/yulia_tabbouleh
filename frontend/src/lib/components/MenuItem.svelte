<script lang="ts">
	import EdgeLeftSvg from './SVG/EdgeLeft.svelte';
	import EdgeRightSvg from './SVG/EdgeRight.svelte';
	interface Props {
		name: string;
		url: string;
	}

	let { name, url }: Props = $props();

	const classEdgeLeft = 'top-0 h-2 absolute';
	const classEdgeRight = 'top-0 h-2 absolute';
</script>

<a href={url} class="px-5 py-0">
	<span class="relative">
		<span
			class="absolute -inset-1 flex items-center justify-between bg-amber-500"
			aria-hidden="true"
		>
			<EdgeLeftSvg className="h-full bg-red-500 p-0 -left-1" />
			<span class="flex-grow"></span>
			<EdgeRightSvg className="h-full bg-blue-500" />
		</span>
		<span class="font-oswald hover:text-green-default relative px-5 font-extrabold text-black"
			>Главная</span
		>
	</span>
</a>

<div class="mkdf-position-left-inner bg-amber-300">
	<nav
		class="mkdf-main-menu mkdf-drop-down mkdf-divided-left-part mkdf-default-nav realtive flex h-full w-full flex-row"
	>
		<ul id="menu-divided-left" class="clearfix">
			<li
				id="nav-menu-item-3886"
				class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3802 current_page_item mkdf-active-item narrow"
			>
				<a href="http://co31834.tw1.ru/" class=" current">
					<span class="mkdf-menu-item-holder">
						<span class="mkdf-active-hover">
							<EdgeLeftSvg className={classEdgeLeft} />
							<span class="mkdf-active-hover-middle">
								<EdgeRightSvg className={classEdgeRight} />
							</span>
						</span>
						<span class="item_outer">
							<span class="font-oswald hover:text-green-default font-extrabold text-white"
								>Главная</span
							>
						</span>
					</span>
				</a>
			</li>
			<li
				id="nav-menu-item-3623"
				class="menu-item menu-item-type-post_type menu-item-object-page narrow"
			>
				<a href="http://co31834.tw1.ru/tury/" class="">
					<span class="mkdf-menu-item-holder"
						><span class="mkdf-active-hover"
							><EdgeLeftSvg className="top-0 absolute h-1" /><span class="mkdf-active-hover-middle"
							></span><EdgeRightSvg className="top-0 absolute h-1" /></span
						><span class="item_outer"><span class="item_text">Туры</span></span></span
					></a
				>
			</li>
			<li
				id="nav-menu-item-3785"
				class="menu-item menu-item-type-post_type menu-item-object-page narrow"
			>
				<a href="http://co31834.tw1.ru/uslugi/" class=""
					><span class="mkdf-menu-item-holder"
						><span class="mkdf-active-hover"
							><EdgeLeftSvg className="top-0 absolute h-1" /><span class="mkdf-active-hover-middle"
							></span><EdgeRightSvg className="top-0 absolute h-1" /></span
						><span class="item_outer"><span class="item_text">Услуги</span></span></span
					></a
				>
			</li>
			<li
				id="nav-menu-item-3795"
				class="menu-item menu-item-type-post_type menu-item-object-page narrow"
			>
				<a href="http://co31834.tw1.ru/ekskursii-2/" class=""
					><span class="mkdf-menu-item-holder"
						><span class="mkdf-active-hover"
							><EdgeLeftSvg className="top-0 absolute h-1" /><span class="mkdf-active-hover-middle"
							></span><EdgeRightSvg className="top-0 absolute h-1" /></span
						><span class="item_outer"><span class="item_text">Экскурсии</span></span></span
					></a
				>
			</li>
		</ul>
	</nav>
</div>

<style>
	.slide-bg {
		background-image: linear-gradient(
			to right,
			rgba(59, 130, 246, 0),
			rgb(59, 130, 246)
		); /* Начальный градиент прозрачный слева */
		background-size: 200% 100%; /* Фон в два раза шире элемента */
		background-position: 0% 0%; /* Начальное положение слева */
		transition: background-position 0.3s ease-in-out; /* Плавный переход */
	}

	.slide-bg:hover {
		background-position: 100% 0%; /* Конечное положение справа */
	}
</style>
