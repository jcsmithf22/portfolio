<script lang="ts">
	import { fly } from "svelte/transition";
	import { inview } from "svelte-inview";

	let isInView: boolean[] = [];
</script>

<div
	class="w-full bg-blue-600 text-center py-20"
	use:inview={{ unobserveOnEnter: true }}
	on:change={({ detail }) => {
		isInView[0] = detail.inView;
	}}
>
	{#if isInView[0]}
		<h1 in:fly="{{y: -10, delay: 100}}" class='text-8xl font-bold mb-12'>Welcome to my portfolio</h1>
		<p in:fly="{{y: -10, delay: 400 }}" class='text-2xl font-semibold'>Take a look at all the awesome products</p>
	{/if}
</div>
