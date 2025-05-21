<script lang="ts">
	import type { Snippet } from 'svelte';
	import SectionCategories from '../Sections/SectionCategories.svelte';
	import HeroSection from '../Sections/HeroSection.svelte';
	import FeaturesBlock from '../FeaturesBlock.svelte';
	import Link from '../UI/Link.svelte';
	import Section from '../Sections/Section.svelte';
	import Footer from '../Footer.svelte';
	import Header from '../Header.svelte';
	import CategoryBanner from '../CategoryBanner.svelte';
	import MaktubSvg from '../../icons/MaktubSvg.svelte';
	import SectionBestSellers from '../Sections/SectionBestSellers.svelte';
	import SectionNewArrivals from '../Sections/SectionNewArrivals.svelte';
	import Image from '../UI/Image.svelte';
	import BrushSvg from '$lib/components/icons/BrushSvg.svelte';
	import BeakerSvg from '$lib/components/icons/BeakerSvg.svelte';
	import ScissorsSvg from '$lib/components/icons/ScissorsSvg.svelte';
	import SwatchSvg from '$lib/components/icons/SwatchSvg.svelte';

	interface Props {
		productsBestSellers: any[];
		children?: Snippet;
	}

	let { children, productsBestSellers }: Props = $props();
	let showAllText = $state<Boolean>(false);
</script>

<Header></Header>
<main>
	<HeroSection backgroundImageSrc="/hero_famous_lebanes.webp" urlButton="/shop/catalog"
	></HeroSection>
	<SectionCategories>
		<CategoryBanner
			backgroundImageSrc="/shirt_category.png"
			title="Футболки"
			subtitle="Супер крутые футболки от Юли из Ливана"
			className="z-1"
			linkUrl="/shop/catalogue?category=sweatshirts"
		></CategoryBanner>
		<CategoryBanner
			backgroundImageSrc="/shirt_category.png"
			title="Шопперы"
			subtitle="Супер крутые футболки от Юли из Ливана"
			className="z-1"
			linkUrl="/shop/catalogue?category=shoppers"
		></CategoryBanner>
		<MaktubSvg className="absolute inset-0 w-full h-full"></MaktubSvg>
	</SectionCategories>
	<!-- Best Sellers Section -->
	<SectionBestSellers products={productsBestSellers}></SectionBestSellers>
	<!-- Best Collections Section -->
	<SectionCategories sectionBackground="bg-cedar-leaves-bright">
		<CategoryBanner
			backgroundImageSrc="/shirt_category.png"
			title="Арабистика"
			subtitle="Принты с вязью на ливанском диалекте"
			className="z-1"
			linkUrl="/shop/catalogue?collection=arabistika"
		></CategoryBanner>
		<CategoryBanner
			backgroundImageSrc="/shirt_category.png"
			title="Вкусняшки"
			subtitle="Принты с ливанскими вкусняшками"
			className="z-1"
			linkUrl="/shop/catalogue?collection=foodprints"
		></CategoryBanner>
		<MaktubSvg
			className="absolute inset-0 w-full h-full"
			letterColor="var(--color-cedar-leaves-dark)"
		></MaktubSvg>
	</SectionCategories>
	<!-- New arrivals section -->
	<SectionNewArrivals products={productsBestSellers}></SectionNewArrivals>
	<!-- History and features section -->
	<Section
		sectionBackground="bg-cedar-leaves-bright"
		sectionHeight=""
		sectionClass="relative flex flex-col pt-12 pb-6"
		contentClass="relative"
		contentFlexClass="z-1 flex flex-col flex-grow gap-6 mx-auto px-6 md:px-0"
	>
		<div class="flex flex-col gap-6 text-white md:w-2/3">
			<h2 class="md:w-2/3">Я давно мечтала создать собственную коллекцию...</h2>
			<Image src="/bw_yulia.png" classFigure="md:hidden visible -mx-6"></Image>
			<button onclick={() => showAllText = !showAllText} class="text-left md:hidden w-fit h-fit">
				{#if !showAllText}
					<p class="line-clamp-7">
						Ещё живя в Ливане, я с завистью наблюдала за местными брендами, искусно оформленными
						арабской вязью, которая подчёркивала особенный колорит страны, свободу ливанцев и их
						неутолимую жажду жизни. Арабская вязь на принтах местных марок казалась мне настоящим
						произведением искусства, которое рассказывает истории улиц, гор и моря.
					</p>
				{:else}
					<p >
						Ещё живя в Ливане, я с завистью наблюдала за местными брендами, искусно оформленными
						арабской вязью, которая подчёркивала особенный колорит страны, свободу ливанцев и их
						неутолимую жажду жизни.<br /><br />Арабская вязь на принтах местных марок казалась мне настоящим
						произведением искусства, которое рассказывает истории улиц, гор и моря.<br /><br />У меня было
						множество идей – я до мелочей представляла сочные, яркие иллюстрации, продуманные
						сочетания цветов и типографику, которая отражала бы вдохновение и смелость.<br /><br />Но
						нестабильность обстановки в стране и экономическая неопределённость того времени не
						давали никакой гарантии, что проект сможет увидеть свет: никто не знал, что будет
						дальше.<br /><br />И вот в моей жизни случились неожиданные перемены – я внезапно вернулась в
						Москву.<br /><br />Сейчас я понимаю: может быть, это было мой ма́ктуб, так было предопределено, я
						просто иду как предначертано. Когда-то мактуб привел меня в Ливан, а теперь дал
						возможность осуществить мечту, вынашиваемую годами.
					</p>
				{/if}
			</button>

			<div class="hidden gap-2 md:flex">
				<div class="space-y-2">
					<p>
						Ещё живя в Ливане, я с завистью наблюдала за местными брендами, искусно оформленными
						арабской вязью, которая подчёркивала особенный колорит страны, свободу ливанцев и их
						неутолимую жажду жизни.
					</p>
					<p>
						Арабская вязь на принтах местных марок казалась мне настоящим произведением искусства,
						которое рассказывает истории улиц, гор и моря.
					</p>
					<p>
						У меня было множество идей – я до мелочей представляла сочные, яркие иллюстрации,
						продуманные сочетания цветов и типографику, которая отражала бы вдохновение и смелость.
					</p>
				</div>
				<div class="space-y-2">
					<p>
						Но нестабильность обстановки в стране и экономическая неопределённость того времени не
						давали никакой гарантии, что проект сможет увидеть свет: никто не знал, что будет
						дальше.
					</p>

					<p>И вот в моей жизни случились неожиданные перемены – я внезапно вернулась в Москву.</p>

					<p>
						Сейчас я понимаю: может быть, это было мой ма́ктуб, так было предопределено, я просто иду
						как предначертано. Когда-то мактуб привел меня в Ливан, а теперь дал возможность
						осуществить мечту, вынашиваемую годами.
					</p>
				</div>
			</div>
		</div>
		<ul
			class="bg-cedar-leaves-dark/50 flex flex-wrap justify-center rounded-3xl text-white backdrop-blur-sm md:flex-nowrap md:justify-between lg:mx-0"
		>
			<li class="md:flex-1/4">
				<FeaturesBlock
					IconSvg={BrushSvg}
					title="Дизайн"
					text="Эксклюзивные восточные принты и арабская вязь — каждая футболка украшена авторским дизайном, вдохновлённым вайбом прекрасного Ливана. Городом символом -  духа свободы и жажды жизни."
				></FeaturesBlock>
			</li>
			<li
				class="border-cedar-leaves-dark h-0 w-28 border border-t-0 md:h-28 md:w-0 md:self-center md:border-l-0"
			></li>
			<li class="md:flex-1/4">
				<FeaturesBlock
					IconSvg={BeakerSvg}
					title="Печать"
					text="Экологичная стойкая печать — краски не выгорают и не трескаются даже после множества стирок, сохраняя насыщенные цвета и чёткость линий."
				></FeaturesBlock>
			</li>
			<li
				class="border-cedar-leaves-dark h-0 w-28 border border-t-0 md:h-28 md:w-0 md:self-center md:border-l-0"
			></li>
			<li class="md:flex-1/4">
				<FeaturesBlock
					IconSvg={SwatchSvg}
					title="Ткань"
					text="Премиальный хлопок — мягкий, дышащий и прочный материал, который сохраняет форму и комфорт в любой обстановке."
				></FeaturesBlock>
			</li>
			<li
				class="border-cedar-leaves-dark h-0 w-28 border border-t-0 md:h-28 md:w-0 md:self-center md:border-l-0"
			></li>
			<li class="md:flex-1/4">
				<FeaturesBlock
					IconSvg={ScissorsSvg}
					title="Крой"
					text="Эргономичный крой — универсальный силуэт, грамотно скроенный для любой фигуры, особый крой полочки и спинки делает эту модель свободной и неординарной. Обеспечивает свободу движений и выглядит стильно."
				></FeaturesBlock>
			</li>
		</ul>
		<Image src="/bw_yulia.png" classFigure="absolute -z-1 -right-[10%] md:inline-block hidden"
		></Image>
		{#snippet outsideContent()}
			<MaktubSvg
				className="absolute md:w-full md:h-[80%] md:top-0 -left-[calc(75vh-10%)] md:left-0 overflow-visible"
				letterColor="var(--color-cedar-leaves-dark)"
			></MaktubSvg>
		{/snippet}
	</Section>
</main>
<Footer></Footer>

<style>
</style>
