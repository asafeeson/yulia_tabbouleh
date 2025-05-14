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

<div class="flex flex-col gap-4">
	<WiSunrise></WiSunrise>
    <h5>{title}</h5>
    <p>{text}</p>
</div>

