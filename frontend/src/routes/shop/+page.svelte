<script lang="ts">
	import CategoryBanner from '$lib/components/shop/CategoryBanner.svelte';
	import ShopMainPage from '$lib/components/shop/ShopMainPage.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>


<ShopMainPage></ShopMainPage>