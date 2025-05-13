<script lang="ts">
	import type { PageData } from './$types';
	import MenuItem from '$lib/components/MenuItem.svelte';
	import Link from '$lib/components/shop/Link.svelte';

	const { data }: { data: PageData } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<br />
<MenuItem></MenuItem>
<br />

<div>
  <Link href="/blog">Go to BLOG</Link>
  <Link href="/shop" className="bg-emerald-500 px-4 py-2 hover:bg-emerald-400">Go to SHOP</Link>
</div>
