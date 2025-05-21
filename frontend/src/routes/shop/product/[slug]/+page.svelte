<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<h1>Страница продукта</h1>

<ul>
	{#each data.product.options as option}
		<li>
			<h3>{option.title}</h3>
			<ul>
				{#each option.values as value}
					<li>
						{value.value} \ {value.id}
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>
