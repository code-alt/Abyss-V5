<script lang="ts">
	import Footer from './footer.svelte';
	import './main.css';
  import { onMount } from 'svelte';

  onMount(async () => {
  })
</script>

<svelte:head>
	<title>Abyss</title>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
	</style>
</svelte:head>

<header>
  <h1>Abyss</h1>
  <div class="links">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="javascript:void(0)">Games</a>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="javascript:void(0)">Settings</a>
  </div>
  <div id="urlbar">
    <input type="url" id="adrbar" placeholder="Type here to search..." />
    <button id="addTab">
      +
    </button>
  </div>
</header>

<Footer />

<div id="startPageTemplate">
	<div class="mainStartContain" />
	<div class="adSpot" />
</div>
