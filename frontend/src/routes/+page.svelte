<script lang="ts">
	import type { PageData } from './$types';
	import MenuItem from '$lib/components/MenuItem.svelte';
	import Link from '$lib/components/shop/UI/Link.svelte';

	const { data }: { data: PageData } = $props();
</script>

<h1>Это главная страница сайта</h1>
<br />
<MenuItem></MenuItem>
<br />

<div>
  <Link href="/blog">Go to BLOG</Link>
  <Link href="/shop" className="bg-emerald-500 hover:bg-emerald-400 px-10 py-2.5">Go to SHOP</Link>
</div>
