<script lang="ts">
	import Footer from './footer.svelte';
	import './main.css';
  imp
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
    <a href="/">Games</a>
    <a href="/+about">Settings</a>
  </div>
  <div id="urlbar">
    <input type="url" id="adrbar" />
  </div>
</header>

<div id="startPageTemplate">
	<div class="mainStartContain" />
	<div class="adSpot" />
</div>
