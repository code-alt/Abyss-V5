<script lang="ts">
	/** define @global TabSystem, Tab */
	import Footer from './footer.svelte';
	import './main.css';
	import { onMount } from 'svelte';
	const quotes = [
		'"faulty flaunts"',
		'Run by the best.',
		'The best.',
		'Updated to v5!',
		'The best proxy.',
		'Only The Best',
		'Join our discord server!',
		'Made for you',
		'Made for the masses...'
	];

  	let createNewTab: () => void;
	let quote = quotes[Math.floor(Math.random() * quotes.length)];

	onMount(() => {
			let quoteElem = document.getElementById('quote');
			if (quoteElem) {
				quoteElem.innerText = quote;
				quoteElem.removeAttribute('id');
			}
			const ts = new TabSystem({
				tabContainer: document.getElementById('tabContainer'),
				tabBtnContainer: document.getElementById('tabsBar'),
				btnTemplate: document.getElementById('tabBtnTemplate'),
    			tabTemplate: document.getElementById('tabTemplate'),
    			URlBar: document.getElementById('adrbar'),
    			tabActiveColor: "#333",
    			tabInactiveColor: "#111",
    			defaultPlaceholder: "Type here to search...",
    			closePlaceholder: "No tap open, click the + to open a new tab...",
			});
			let tb = document.getElementById("tabsBar");
			if (tb) {
				tb.addEventListener("wheel", (evt) => {
					evt.preventDefault();
					if (evt.deltaY >= -15 && evt.deltaY <= 15 && tb) {
						tb.scrollLeft += evt.deltaY * 40;
					} else {
						if (!tb) return; // fuck off eslint
						tb.scrollLeft += evt.deltaY * 5;
					}
				}, { passive: false });
			}
    		createNewTab = () => {ts.setActiveTab(ts.addTab(new Tab()))}
    		ts.setActiveTab(ts.addTab(new Tab()))
			ts.on('tabAdd', (tab: any) => {
			tab.getTabElement().querySelector("i").innerText = quote;
				quote = quotes[Math.floor(Math.random() * quotes.length)];
			});
	});

	const updateNews = () => { // fetches /assets/news.json
		fetch("/assets/news.json").then((data) => data.json()).then((data) => {
			
		});
	};
</script>

<svelte:head>
	<title>Abyss</title>
	<style>
    @font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2") format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2") format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2") format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2") format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2") format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2") format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2") format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2") format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKOzY.woff2") format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2") format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKOzY.woff2") format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKOzY.woff2") format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2") format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2") format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2") format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2") format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2") format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2") format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2") format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2") format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2") format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2") format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2") format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2") format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2") format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2") format('woff2');unicode-range:U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:url("https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2") format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}
  </style>
</svelte:head>

<header>
	<h1>Abyss</h1>
	<div class="links">
		<p>Games</p>
		<p>Settings</p>
	</div>
	<div id="urlbar">
		<input type="url" id="adrbar" placeholder="Type here to search..." />
		<button id="addTab" on:click={createNewTab()}>+</button>
	</div>
	<div id="tabsBar" />
</header>

<div id="tabContainer" />

<div id="tabTemplate" style="display: none;">
	<div class="tabFrame">
		<div class="mainStartContain">
			<div class="imageContain">
				<img
				alt="Abyss Logo"
				src=""
				/>
				<div>
					<h1>Abyss</h1>
					<i id="quote">Tagline Quote</i>
				</div>
			</div>
		</div>
		<div class="abyssNews">
			<h1>News</h1>
			<p class="abyssNewsText">Loading...</p>
			<hr />
			<h1>Featured Games</h1>
			<p class="abyssFeatGamesText">Loading...</p>
			<div class="abyssFeatGames">
			</div>
		</div>
		<div class="adSpot" />
	</div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button id="tabBtnTemplate" class="tabBtn" style="display:none">
	<span class="tabTitle">New Tab</span>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span class="tabClose" onclick="window.tryClose=true">x</span>
</button>

<Footer />