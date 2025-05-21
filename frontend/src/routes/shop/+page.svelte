<script lang="ts">
	import ShopMainPage from '$lib/components/shop/Pages/ShopMainPage.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>


<ShopMainPage productsBestSellers={data.productsBestSellers}></ShopMainPage>