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

	interface Props {
		productsBestSellers: any[];
		children?: Snippet;
	}

	let { children, productsBestSellers }: Props = $props();
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
		sectionHeight="max-h-[900px]"
		sectionClass="flex flex-col py-4"
		contentClass="py-10 px-10 lg:px-0"
		contentFlexClass="relative flex flex-col flex-grow gap-6 mx-auto"
	>
		<div class="flex flex-col gap-6 text-white">
			<h2>Я давно мечтала создать собственную коллекцию...</h2>
			<p>
				Ещё живя в Ливане, я с завистью наблюдала за местными брендами, искусно оформленными
				арабской вязью, которая подчёркивала особенный колорит страны, свободу ливанцев и их
				неутолимую жажду жизни. Арабская вязь на принтах местных марок казалась мне настоящим
				произведением искусства, которое рассказывает истории улиц, гор и моря. У меня было
				множество идей – я до мелочей представляла сочные, яркие иллюстрации, продуманные сочетания
				цветов и типографику, которая отражала бы вдохновение и смелость. Но нестабильность
				обстановки в стране и экономическая неопределённость того времени не давали никакой
				гарантии, что проект сможет увидеть свет: никто не знал, что будет дальше. И вот в моей
				жизни случились неожиданные перемены – я внезапно вернулась в Москву. Сейчас я понимаю:
				может быть, это было мой ма́ктуб, так было предопределено, я просто иду как предначертано.
				Когда-то мактуб привел меня в Ливан, а теперь дал возможность осуществить мечту,
				вынашиваемую годами.
			</p>
		</div>
		<!-- <div class="flex flex-grow"></div> -->
		<ul class="flex flex-wrap justify-between gap-6 text-white md:flex-nowrap">
			<li>
				<FeaturesBlock
					icon=""
					title="Заголовок"
					text="Это длинный или не очень длинный, может быть даже короткий текст"
				></FeaturesBlock>
			</li>
			<li>
				<FeaturesBlock
					icon=""
					title="Заголовок"
					text="Это длинный или не очень длинный, может быть даже короткий текст"
				></FeaturesBlock>
			</li>
			<li>
				<FeaturesBlock
					icon=""
					title="Заголовок"
					text="Это длинный или не очень длинный, может быть даже короткий текст"
				></FeaturesBlock>
			</li>
		</ul>
		<MaktubSvg
			className="absolute inset-0 w-full"
			letterColor="var(--color-cedar-leaves-dark)"
		></MaktubSvg>
	</Section>
</main>
<Footer></Footer>

<style>
</style>
