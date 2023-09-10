import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + `/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		<meta
			name="description"
			content="Abyss is the best and most modern proxy to avoid modern censorship."
		/>
		<title>Abyss</title>
		<link rel="stylesheet" id="default-theme" href="/assets/themes/main.css" />
		<script>
			/* eslint-disable @typescript-eslint/no-this-alias */
			// OP TAB SYSTEM V2.0.0

			// CREDITS:
			// Code-Alt - Main Developer

			// LICENSE:
			/*

			Copyright (c) 2023 Code-Alt
			
			Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the "Software"), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:

			The above copyright notice and this permission notice shall be included in
			all copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			THE SOFTWARE.

*/

			// DOCS:

			// here are some prerequisites:
			// you must have a tab container, a btn container, a tab template, and a btn template, and a search bar.
			// btw this might be hard to set up, set up your own classes and CSS until you find it satisfactory.

			// new TabSystem() - Initializes the TabSystem class, used for holding all the information about the tab system, and it's functions.
			// TabSystem.addTab(tab) - Adds a tab to the tab system. Returns the tab.
			// TabSystem.getTabTemplate() - Returns the tab template.
			// TabSystem.getBtnTemplate() - Returns the tab button template.
			// TabSystem.createTabBtn(id) - Creates a tab button with the specified id. Returns the tab button.
			// TabSystem.createTabFrame(id) - Creates a tab frame with the specified id. Returns the tab frame.
			// TabSystem.setActiveTab(tab) - Sets the active tab to the specified tab.
			// TabSystem.getActiveTab() - Returns the active tab.
			// TabSystem.getTabs() - Returns all tabs.
			// TabSystem.getTabCount() - Returns the amount of tabs.
			// TabSystem.genRanId() - Generates a random id. Returns the id.
			// TabSystem.deleteTab(tab, force) - Deletes the specified tab. If force is true, it will delete the tab even if it's the last tab.
			// TabSystem.deleteTabs(tabs, force) - Deletes the specified tabs. If force is true, it will delete the tabs even if it's the last tab.
			// TabSystem.deleteAllTabs() - Deletes all tabs.
			// TabSystem.deleteAllTabsExcept(tab) - Deletes all tabs except the specified tab.
			// TabSystem.deleteAllTabsExceptThese(tabs) - Deletes all tabs except the specified tabs.
			// new Tab() - Initializes the Tab class, used for holding all the information about the tab frame and the button used to activate it.
			// Tab.getConnectedElement() - Returns the connected element.
			// Tab.getTabElement() - Returns the tab element.
			// Tab.setTabElement(tabElement) - Sets the tab element.
			// Tab.setConnectedElement(connectedElement) - Sets the connected element.

			var dp = 'Starting Page';
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			var conf = {};
			var mainTS;
			var _OPTabSys_callbacks = {
				tabChange: [],
				tabAdd: [],
				tabDelete: []
			};

			class TabSystem {
				constructor(object) {
					this.config = {
						tabContainer: object.tabContainer || document.getElementById('tabContainer'),
						tabTemplate: object.tabTemplate || document.getElementById('tabTemplate'),
						btnTemplate: object.btnTemplate || document.getElementById('btnTemplate'),
						tabBtnContainer: object.tabBtnContainer || document.getElementById('tabBtnContainer'),
						URLBar: object.URLBar || document.getElementById('adrbar'),
						tabActiveColor: object.tabActiveColor || '#484848',
						tabInactiveColor: object.tabInactiveColor || '#444444d2',
						defaultPlaceholder: object.defaultPlaceholder || 'Starting Page',
						closePlaceholder: object.closePlaceholder || 'No tab open'
					};
					conf = this.config;
					dp = this.config.defaultPlaceholder;
					this.tabs = [];
					this.tabCount = 0;
					this.activeTab = null;
					this.config.tabTemplate.style.display = 'none';
					this.config.btnTemplate.style.display = 'none';
					mainTS = this;
				}

				on(event, callback) {
					switch (event) {
						case 'tabChange':
							if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};
							if (_OPTabSys_callbacks.tabChange == null) _OPTabSys_callbacks.tabChange = [];
							_OPTabSys_callbacks.tabChange.push(callback);
							break;
						case 'tabAdd':
							if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};
							if (_OPTabSys_callbacks.tabAdd == null) _OPTabSys_callbacks.tabAdd = [];
							_OPTabSys_callbacks.tabAdd.push(callback);
							break;
						case 'tabDelete':
							if (_OPTabSys_callbacks == null) _OPTabSys_callbacks = {};
							if (_OPTabSys_callbacks.tabDelete == null) _OPTabSys_callbacks.tabDelete = [];
							_OPTabSys_callbacks.tabDelete.push(callback);
							break;
						default:
							return console.error('Invalid event!');
					}
				}

				addTab(tab) {
					this.tabs.push(tab);
					this.tabCount++;
					if (_OPTabSys_callbacks != null) {
						if (_OPTabSys_callbacks.tabAdd != null) {
							for (var i = 0; i < _OPTabSys_callbacks.tabAdd.length; i++) {
								_OPTabSys_callbacks.tabAdd[i](tab);
							}
						}
					}
					return tab;
				}

				getTabTemplate() {
					return this.config.tabTemplate;
				}

				getBtnTemplate() {
					return this.config.btnTemplate;
				}

				createTabBtn(id) {
					const btn = this.getBtnTemplate().cloneNode(true);
					if (id == null) id = '';
					btn.id = id;
					btn.style = btn.style.toString().replace(/display:( )*none(;){0,1}/g, '');
					this.config.tabBtnContainer.appendChild(btn);
					return btn;
				}

				createTabFrame(id) {
					const frame = this.getTabTemplate().cloneNode(true);
					if (id == null) id = '';
					frame.id = id;
					frame.style.display = 'none';
					this.config.tabContainer.appendChild(frame);
					return frame;
				}

				setActiveTab(tab) {
					if (_OPTabSys_callbacks != null) {
						if (_OPTabSys_callbacks.tabChange != null) {
							for (var i = 0; i < _OPTabSys_callbacks.tabChange.length; i++) {
								_OPTabSys_callbacks.tabChange[i](tab);
							}
						}
					}
					if (!this.tabs.includes(tab) && tab != null) {
						this.addTab(tab);
					}
					if (this.activeTab != null) {
						this.activeTab.getConnectedElement().style.background = this.config.tabInactiveColor;
						this.activeTab.setSearchBarContent(this.config.URLBar.value);
						this.activeTab.setPlaceholder(this.config.URLBar.placeholder);
					}
					this.config.URLBar.value = '';
					if (tab != null && tab.getSearchBarContent()) {
						this.config.URLBar.value = tab.getSearchBarContent();
					}
					this.activeTab = tab;
					if (tab != null && this.activeTab.getPlaceholder()) {
						this.config.URLBar.placeholder = this.activeTab.getPlaceholder();
					}
					if (this.activeTab == null) {
						this.config.URLBar.placeholder = this.config.closePlaceholder;
					}
					for (var t = 0; t < this.tabs.length; t++) {
						if (this.tabs[t] == tab && tab != null) {
							if (this.tabs[t].tabElement != null) {
								this.tabs[t].tabElement.style.display = 'initial';
							}
							if (this.tabs[t].connectedElement != null) {
								this.tabs[t].connectedElement.style.backgroundColor = this.config.tabActiveColor;
							}
						} else {
							if (this.tabs[t].tabElement != null && tab != null) {
								this.tabs[t].tabElement.style.display = 'none';
							}
							if (this.tabs[t].connectedElement != null && tab != null) {
								this.tabs[t].connectedElement.style.backgroundColor = this.config.tabInactiveColor;
							}
						}
					}
				}

				getActiveTab() {
					return this.activeTab;
				}

				getTabs() {
					return this.tabs;
				}

				getTabCount() {
					return this.tabCount;
				}

				genRanId() {
					return Date.now() + Math.floor(Math.random() * 1000000000);
				}

				deleteTab(tab, force) {
					for (var i = 0; i < this.tabs.length; i++) {
						if (this.tabs[i] == tab) {
							if (this.tabs[i] == this.activeTab) {
								if (this.tabs[i - 1] != null) {
									this.setActiveTab(this.tabs[i - 1]);
								} else if (this.tabs[i + 1] != null) {
									this.setActiveTab(this.tabs[i + 1]);
								} else {
									if (force != true) {
										return alert("You can't delete the last tab!");
									} else {
										this.setActiveTab(null);
									}
								}
							}
							this.tabs[i].connectedElement.remove();
							this.tabs[i].tabElement.remove();
							this.tabs.splice(i, 1);
							this.tabCount--;
							if (_OPTabSys_callbacks != null) {
								if (_OPTabSys_callbacks.tabDelete != null) {
									for (var tC = 0; tC < _OPTabSys_callbacks.tabDelete.length; tC++) {
										_OPTabSys_callbacks.tabDelete[tC](this.activeTab);
									}
								}
							}
							break;
						}
					}
				}

				deleteTabs(tabs) {
					const tabsToDelete = tabs.slice();
					for (let i = 0; i < tabsToDelete.length; i++) {
						const tab = tabsToDelete[i];
						if (tab === this.activeTab) {
							if (this.tabs[i - 1]) {
								this.setActiveTab(this.tabs[i - 1]);
							} else if (this.tabs[i + 1]) {
								this.setActiveTab(this.tabs[i + 1]);
							} else {
								this.setActiveTab(null);
							}
						}
						tab.connectedElement.remove();
						tab.tabElement.remove();
						this.tabs.splice(this.tabs.indexOf(tab), 1);
						this.tabCount--;
					}
					if (_OPTabSys_callbacks?.tabDelete) {
						_OPTabSys_callbacks.tabDelete.forEach((callback) => callback(this.activeTab));
					}
				}

				deleteAllTabs() {
					this.deleteTabs(this.tabs);
				}

				deleteAllTabsExcept(tab) {
					const tabsToDelete = this.tabs.slice();
					tabsToDelete.splice(tabsToDelete.indexOf(tab), 1);
					this.deleteTabs(tabsToDelete);
				}

				deleteAllTabsExceptThese(tabs) {
					const tabsToDelete = this.tabs.slice();
					tabsToDelete.forEach((tab) => {
						if (tabs.includes(tab)) {
							tabsToDelete.splice(tabsToDelete.indexOf(tab), 1);
						}
					});
					this.deleteTabs(tabsToDelete);
				}

				getConfig() {
					return this.config;
				}
			}

			class Tab {
				constructor(connectedElement, tabFrame, searchBarContent, placeholder) {
					this.connectedElement = connectedElement || mainTS.createTabBtn(mainTS.genRanId());
					this.tabElement = tabFrame || mainTS.createTabFrame(mainTS.genRanId());
					if (searchBarContent == null) searchBarContent = '';
					this.searchBarContent = searchBarContent;
					if (placeholder == null) placeholder = dp;
					this.placeholder = placeholder;
					this.connectedElement.addEventListener('click', () => {
						if (window.tryClose) {
							mainTS.deleteTab(this, window.allowForce);
							window.tryClose = false;
							return;
						}
						mainTS.setActiveTab(this);
					});
				}

				getConnectedElement() {
					return this.connectedElement;
				}

				getTabElement() {
					return this.tabElement;
				}

				setTabElement(tabElement) {
					this.tabElement = tabElement;
				}

				setConnectedElement(connectedElement) {
					this.connectedElement = connectedElement;
				}

				setSearchBarContent(searchBarContent) {
					this.searchBarContent = searchBarContent;
				}

				getSearchBarContent() {
					return this.searchBarContent;
				}

				findFirstIFrame() {
					return this.tabElement.querySelector('iframe');
				}

				hasIFrame() {
					if (this.findIFrame() != null) {
						return true;
					} else {
						return false;
					}
				}

				setPlaceholder(placeholder) {
					this.placeholder = placeholder;
				}

				getPlaceholder() {
					return this.placeholder;
				}
			}

			window.TabSystem = TabSystem;
			window.Tab = Tab;
			window.allowForce = true;
		<\/script>
		` + head + `
	</head>
	<body data-sveltekit-preload-data="hover">
		<script>
			class ThemeSystem {
				constructor() {
					this.config = {}; // is there even a need for this
					this.themes = [];
					this.themeCount = 0;
					this.activeTheme = null;
					this.lastTheme = null;
				}

				getThemeFromName(name) {
					for (let i = 0; i < this.themes.length; i++) {
						if (this.themes[i].getName() == name) {
							return this.themes[i];
						}
					}
				}

				addTheme(theme) {
					for (let i = 0; i < this.themes.length; i++) {
						if (this.themes[i].getName() == theme.getName()) {
							console.error('A theme with the name ' + theme.getName() + ' already exists!');
							return;
						}
					}
					if (this.lastTheme != theme) {
						this.themes.push(theme);
						this.themeCount++;
					}
					return theme;
				}

				setActiveTheme(theme) {
					if (this.activeTheme != null) {
						this.activeTheme.disable();
					}
					this.activeTheme = theme;
					this.activeTheme.apply();
				}

				getActiveTheme() {
					return this.activeTheme;
				}

				getThemes() {
					return this.themes;
				}

				getThemeCount() {
					return this.themeCount;
				}

				genRanId() {
					return (
						Math.random().toString(36).substring(2, 15) +
						Math.random().toString(36).substring(2, 15)
					);
				}

				deleteTheme(theme) {
					if (this.themeCount > 1 || force == true) {
						for (let i = 0; i < this.themes.length; i++) {
							if (this.themes[i].id == theme.id) {
								this.themes.splice(i, 1);
								this.themeCount--;
								if (this.activeTheme.id == theme.id) {
									this.setActiveTheme(this.themes[0]);
								}
							}
						}
					}
				}

				deleteThemes(themes) {
					if (this.themeCount > 1) {
						for (let i = 0; i < themes.length; i++) {
							this.deleteTheme(themes[i]);
						}
					}
				}

				genCSS(css) {
					var style = document.createElement('style');
					style.innerHTML = css;
					style.disabled = true;
					document.head.appendChild(style);
					return style;
				}

				genCSSFile(url, enabled) {
					for (let i = 0; i < this.themes.length; i++) {
						if (this.themes[i].getCSSElem() && this.themes[i].getCSSElem().href == url) {
							console.error('A theme with the url ' + url + ' already exists!');
							return;
						}
					}
					var link = document.createElement('link');
					link.rel = 'stylesheet';
					link.href = url;
					document.head.appendChild(link);
					link.disabled = true;
					if (enabled) link.disabled = false;
					return link;
				}

				getConfig() {
					return this.config;
				}
			}

			class Theme {
				constructor(elem, name) {
					if (typeof elem == 'object') {
						this.csselem = elem;
					} else {
						this.url = elem;
					}
					this.store = elem;
					this.name = name;
					// check for a duplicate theme
					for (let i = 0; i < tHs.getThemes().length; i++) {
						if (tHs.getThemes()[i].getName() == this.name) {
							console.error('A theme with the name ' + this.name + ' already exists!');
							delete this;
							return;
						}
					}
				}

				apply() {
					if (typeof this.store == 'object') {
						this.csselem.disabled = false;
					} else {
						this.csselem = tHs.genCSSFile(this.url, true);
					}
				}

				disable() {
					if (typeof this.store == 'object') {
						this.csselem.disabled = true;
					} else {
						this.csselem.remove();
						this.csselem = null;
					}
				}

				setName(name) {
					this.name = name;
				}

				getName() {
					return this.name;
				}

				getURL() {
					return this.url;
				}

				setURL(url) {
					this.url = url;
				}

				getCSSElem() {
					return this.csselem;
				}

				setCSSElem(elem) {
					this.csselem = elem;
				}
			}

			window.tHs = new ThemeSystem();

			var darkTheme = new Theme(document.getElementById('default-theme'), 'Abyss Default'); // this sucks
			tHs.addTheme(darkTheme);
			tHs.setActiveTheme(darkTheme);

			function themeSwitch(sel) {
				tHs.setActiveTheme(tHs.getThemeFromName(sel.value));
				document.querySelectorAll('select').forEach((e) => {
					e.value = sel.value;
				});
			}
			function handleAutocomplete(data) {
				var datalist = document.getElementById('autofill-results');
				datalist.innerHTML = '';
				data[1].forEach((element) => {
					var option = document.createElement('option');
					option.value = element;
					datalist.appendChild(option);
				});
			}
			const recordKeys = (elem, timeLimit) => {
				if (!elem) return;
				elem.placeholder = 'Press a key...';
				window.panicKeys = null;
				let savePush = [];
				let firstKeyHit = false;
				const keydownHandler = (e) => {
					if (!firstKeyHit) {
						firstKeyHit = true;
						setTimeout(() => {
							document.removeEventListener('keydown', keydownHandler);
							window.panicKeys = savePush;
						}, timeLimit);
					}
					savePush.push(e.key);
					elem.placeholder = 'Selected Panic Keys: ' + savePush.join(' + ');
				};
				document.addEventListener('keydown', keydownHandler);
			};
			const cloakTitle = (title) => {
				if (title.trim() == '') {
					title = 'Abyss';
				}
				document.title = title;
				localStorage.setItem('title', title);
			};

			let savedFavicon;
			if (document.querySelector("link[rel*='icon']")) {
				savedFavicon = document.querySelector("link[rel*='icon']").href;
			}

			const cloakFavicon = (url) => {
				if (url.trim() == '') {
					url = savedFavicon;
				}
				let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
				link.type = 'image/x-icon';
				link.rel = 'shortcut icon';
				link.href = url;
				document.getElementsByTagName('head')[0].appendChild(link);
				localStorage.setItem('favicon', url);
			};

			const cloakURL = (url) => {
				if (url.trim() == '') {
					url = 'https://google.com';
				}
				window.panicURL = url;
				localStorage.setItem('panicURL', url);
			};

			window.panicURL = localStorage.getItem('panicURL') || 'https://google.com';
			window.panicKeys = null;

			// record keys and when one happens, listen for another in quick succession, and if it matches the array, redirect to panicURL
			let hitKeys = [];
			let hitKeyRetention = false;
			const keydownHandler = (e) => {
				if (window.panicKeys == null) return;
				if (!hitKeyRetention) {
					hitKeyRetention = true;
					setTimeout(() => {
						hitKeyRetention = false;
						hitKeys = [];
					}, 1000);
				}
				hitKeys.push(e.key);
				if (hitKeys.length >= window.panicKeys.length) {
					let hitKeysSet = new Set(hitKeys);
					let panicKeysSet = new Set(window.panicKeys);
					if (
						new Set([...hitKeysSet].filter((x) => panicKeysSet.has(x))).size === panicKeysSet.size
					) {
						window.open(window.panicURL);
					}
				}
			};
			document.addEventListener('keyup', keydownHandler);

			if (localStorage.getItem('title')) {
				document.title = localStorage.getItem('title');
			}

			if (localStorage.getItem('favicon')) {
				let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
				link.type = 'image/x-icon';
				link.rel = 'shortcut icon';
				link.href = localStorage.getItem('favicon');
				document.getElementsByTagName('head')[0].appendChild(link);
			}

			const updateGames = async () => {
				// TODO make this work

				await fetch('/assets/games.json')
					.then((data) => data.json())
					.then((data) => {
						let allButton = document.createElement('button');
						allButton.innerText = 'All';
						allButton.className = 'all';
						allButton.title = 'All';
						document.querySelector('.gameCategoryButtons').appendChild(allButton);
						for (let i = 0; i < Object.keys(data).length; i++) {
							let category = Object.keys(data)[i];
							let categoryButton = document.createElement('button');
							categoryButton.innerText = category;
							categoryButton.className = category;
							categoryButton.title = category;
							document.querySelector('.gameCategoryButtons').appendChild(categoryButton);
							for (let j = 0; j < data[category].length; j++) {
								let game = data[category][j];
								let gameCard = createGameCard(game.name, game.image, game.url);
								gameCard.classList.add(category);
								document.querySelector('.gameCategories').appendChild(gameCard);
							}
						}
					});
			};

			const createGameCard = (name, image, url) => {
				let gC = document.getElementById('abyssCardTemplate')?.cloneNode(true);
				gC.removeAttribute('id');
				gC.style.display = 'inline-block';
				gC.querySelector('img').setAttribute('src', image);
				gC.querySelector('img').setAttribute('alt', name);
				gC.querySelector('h1').innerText = name;
				gC.querySelector('a').href = url;
				return gC;
			};
		<\/script>
		<div style="display: contents">` + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "fuza4"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
