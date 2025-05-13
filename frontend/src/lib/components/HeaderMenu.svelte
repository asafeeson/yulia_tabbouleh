<script lang="ts">
import type { Snippet } from 'svelte';

let { children }:{ children:Snippet } = $props();

</script>

<nav>
    
</nav>

<div>
  {@render children()}
</div>

<style>

</style>