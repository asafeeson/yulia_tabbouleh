<script lang="ts">
	import type { Snippet } from 'svelte';
	import WiSunrise from '~icons/wi/sunrise';
    interface Props {
        icon: any;
        title: string;
        text: string;
    }
	let { icon, title, text }: Props = $props();
</script>

<article class="flex flex-col gap-4">
	<WiSunrise aria-hidden="true" focusable="false" role="image"></WiSunrise>
    <h4>{title}</h4>
    <p>{text}</p>
</article>

