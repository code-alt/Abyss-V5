import{s as qt,n as ht,o as Mt,i as Vt}from"../chunks/scheduler.e108d1fd.js";import{S as Jt,i as jt,g as s,h as l,y as g,a as v,f as a,s as u,r as Gt,j as S,c as m,z as Rt,u as Wt,k as f,A as Dt,l as H,x as o,v as Yt,B as Qt,d as _t,t as $t,w as te}from"../chunks/index.42cf63c6.js";const ee=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ne(U){let e,A='<a href="https://discord.gg/goabyss">Discord</a> <a href="https://github.com/Abyss-Services">GitHub</a> <a href="https://intoabyss.org/apply">Apply for Staff</a> <p>Copyright Abyss Services 2023</p>';return{c(){e=s("footer"),e.innerHTML=A},l(d){e=l(d,"FOOTER",{"data-svelte-h":!0}),g(e)!=="svelte-kalc7d"&&(e.innerHTML=A)},m(d,P){v(d,e,P)},p:ht,i:ht,o:ht,d(d){d&&a(e)}}}class Ae extends Jt{constructor(e){super(),jt(this,e,null,ne,qt,{})}}const{document:Lt}=ee;function oe(U){let e,A,d,P="Settings",I,n,$,tt,X,h,r,i,p="Theme",y,b,R,E,Ft="Select from a list:",mt,W,L,O,St="Default (Dark Abyss)",pt,q,wt='<h1>Tab Customize</h1> <h2>Tab Title</h2> <input type="text" placeholder="Enter Text" onchange="cloakTitle(this.value)"/> <br/> <h2>Tab Icon</h2> <input type="text" placeholder="Enter URL" onchange="cloakFavicon(this.value)"/>',yt,J,Ct='<h1>Panic Key</h1> <h2>Panic Keybind</h2> <input type="text" readonly="" placeholder="Enter key" onclick="recordKeys(this, 500)"/> <br/> <h2>Panic Key URL</h2> <input type="text" placeholder="Enter URL (defaults to Google)" onchange="cloakURL(this.value)"/>',nt,w,zt='<div class="gameCategoryButtons"></div> <div class="gameCategories"></div>',At,C,Tt="<center><br/> <br/> <br/> <h1>This is an invalid Abyss route, please create a new tab and continue searching.</h1></center>",ot,j,Ot=`@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2')
				format('woff2');
			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2')
				format('woff2');
			unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2')
				format('woff2');
			unicode-range: U+1F00-1FFF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2')
				format('woff2');
			unicode-range: U+0370-03FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2')
				format('woff2');
			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
				U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2')
				format('woff2');
			unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020,
				U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 300;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2')
				format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
				U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
				U+FFFD;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2')
				format('woff2');
			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKOzY.woff2')
				format('woff2');
			unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2')
				format('woff2');
			unicode-range: U+1F00-1FFF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKOzY.woff2')
				format('woff2');
			unicode-range: U+0370-03FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKOzY.woff2')
				format('woff2');
			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
				U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2')
				format('woff2');
			unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020,
				U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2') format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
				U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
				U+FFFD;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2')
				format('woff2');
			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2')
				format('woff2');
			unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2')
				format('woff2');
			unicode-range: U+1F00-1FFF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2')
				format('woff2');
			unicode-range: U+0370-03FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2')
				format('woff2');
			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
				U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2')
				format('woff2');
			unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020,
				U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2')
				format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
				U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
				U+FFFD;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2')
				format('woff2');
			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2')
				format('woff2');
			unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2')
				format('woff2');
			unicode-range: U+1F00-1FFF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2')
				format('woff2');
			unicode-range: U+0370-03FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2')
				format('woff2');
			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
				U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2')
				format('woff2');
			unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020,
				U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}
		@font-face {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2')
				format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
				U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
				U+FFFD;
		}`,at,F,D,kt="Abyss",bt,M,xt='<p id="gameLink">Games</p> <p id="settingsLink">Settings</p>',vt,x,V,Ut,B,Bt="+",gt,et,st,Y,lt,Q,rt,k,Nt='<div class="tabFrame mainStart"><div class="mainStartContain"><div class="imageContain"><img alt="Abyss Logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAH0CAYAAACdADL8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAFbRSURBVHgB7d0JfE13+j/wx9KV0tIiam9sEZHIYglprLEvGbEGLZ1SNKWdaf9D9Tf1K1PUlJZqa2YYDEWtFYQgNNYkErGE0CAkqKWotkw13//zZO7xuzXaknxv7jnnft6vV3pvgyz3nnOe832+z/f5EgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8l2IEALcFBgY+8OOPPz5469atx0qXLv3IQw89JB8PlSpV6pESJUrkPxYvXrzkY489VvrBBx98mD1i/NtixYqpq1evXsnLy8t/lM/Jo+PzV/nfqa+//vpKyZIl88qVK3c5ISHhFgHAzyAogUcICwtrWKtWrXr8UbNq1arV+KPG008/XbVy5crVOFg8wAHoUcdfLYpzQt35icuXL1/ggHU2Ozv7xJkzZ06fYDk5OaePscTExP0E4CEQlMBOinXu3LlZ7dq1ferUqVO/AZPnXl5eVcjax7o6e/ZsDsenQ5mZmUcPHTp04PDhwwcuXbq0LyUl5UcCsBEEJbCsjh07hjZp0iSsYcOGfgEBAYHVqlWrySm2kr/1765du3YlKysrkwOWL6fjHiWT+O67777lAdJRHr1V5fRexXv4J+rIkSMHJUBxcNq7Z8+enZs3b04iAAtDUAJLqFGjxuOtW7fu0LRp09BmzZq1qF+/vu+vBaCb7MCBAyknT56UDBhfu48cdaTGco4fP37B29v7oYMHD16V+SIyCQmWZcuWfUKec4B9glONT1evXr0WD/h8a9asWYd/Zh8OpH4cSH/pZ1Y/sYyMjPTdu3cn7tixYxsHq638OnxDABaBoASmJAUHPALqynNBbVu0aBHOF+N69AvHK6e2Tu/bt28Pjxj28wV4Pweb9NTU1FO/9vUHDBjQZeHChV+QuSj+uTouWrQo7tf+kp+fXxUeGTaREaKvr68/Pw+qUKFC5bt9PfkPB+UMDlBbeRS10fE7KwIAgF8XHh7uP3ny5P/hgLLn1q1bP6q7uHHjxk1OUyVMnz79fwcNGtTT39//cSoAvvDPUya0ePHiuVQAHKgqyOsxY8aMd5KSkr7k1+mHu319eV3l9Zs0adL/a9WqVSMCAID/07dv387z58//9Pz587l8zcy78yLKF9fvExIS1vFF9PVOnTo1IT2KXb169ZoyoYsXL35NepTs0KFDs4kTJ77Br996fh1v3OXb5eXk5Jzi1392ZGRkKwIA8ETR0dE9VqxYsYgDwzd3uzBzCi7pww8//EuXLl1a8F8vTpr16tWrvTKxbt26hZF+JXv27Nl65syZ78pc292+L78fl3kEOQcBCgBsT0ZEfMH7x90CkYyG4uLiVo4ePfo5nh95ilxMRmbKxD766KNp5GIyLzVmzJih8fHxX9wl1Zcn7xOnEv8WFRXVmgAA7KBZs2b1Zs2aNVVSRHdeeOWit3z58vkDBw7sREXs0qVLV5SJZWdnf0VFq9iQIUN6Llmy5B/Xr1+/M62Zn+LjObyJISEhNQkAwEp8fHwefOWVV4ampqbuVXfMEcmIiNN28zh914HcROallGZ8Ib+p9MpzZxHCc8891zU2NnapvF93/lxJSUmJo0aNiiYAADMLDAx8RtJid0vPJSYmbuILWf8aNWo8TG42Y8aMSUqzCRMmvPkdUxrx3M8UcvOSDS8vr0dHjBgxQKr17vz55H2ePXv2e2FhYfUJAMAspGiBg84WdceoSBaqTpky5U0eOVUiE+Gf64zSjOfBqu/cuTNBaZSZmXmETETmoKTc/Pz58+fu+FHzZF7KHWlYAIB8kqJ7/fXXR0irHuer061bt/KkYKFPnz7tyYTatm0boDRLTk7eK1+bL9h/UXrlhYaGNiDzKS4Ljzdt2rT6zp+Xj4cjY8eOHUkAAEVBuixMnjz5z3em6GR7hvfff39CkyZNqpCJvffee/+rNJs0adKb8rWHDBnSW2n29ttv/5FMjI8Hr48//ngqv//fOv/cPJrK4VHy2Lp16z5GAAC68cioHF983r+zdFhGSjExMYPJBWuJXIFTYseUXnlNmzbNn1Px9/evrTSTzhZkDQ/ICElGSs4/vxRK8LzTFG9v7zIEAFBYtWrVKivFC3e2/NmxY0f8888/350shINGDaUZX4SdS7cfdMF8VV6jRo2eJguRuSVZ/Oz8SxjBqaAtoQDAw0kHbVnAeefISKrounXrFkoWJKkwpdlf//rXiU7fosSsWbMmK83eeuut18iCIiMjw/h4iXP+XYzgJDc7BADwW6pUqfLI3eaMJBh17dq1KVlYcnLyHqVZ+/btf9aLT9YWKc1kCwqyMCkukTVPzr+TLNDlmwRLBlsAKCI8N/TCpUuXLjhfPCQYde/evTlZXEBAQGWlGafqcu/yrUrk5ubmKI04dXpL9pIii5PgxMfTRuffTQoipNURAQAYoqKiOmRmZh52vljIqn07BCPDuHHjYpRmH3744Xt3+VYl586dO0tpxjcMz5NNOOacnBvC5vH/J5t1GQEAFBGZQN+0aVOs88XvxIkTx4cNG9aHbCYhIWGz0uyX5tb69+8foe6yBUdhxMXFrSGbGTp0aKQssHb6NfPWrl27TMrMCQA8SjFpteNcUSdzSOPHj48hG5LWRr+0YWBB/caeRw/cuW6nsOTnl+ITsp+SPIodJRs3Gr+rFENIJxACAPvju/hOfHea5XSxy1uwYMHH0uOMbEqahyrNZAuOX/mWxeXPlWbDhw/vSzZVr1698gsXLpzt/PtKp3QZdRIA2I9slS0pIOWUVpJ5I0/YDjs+Pn6D0kw2Cfy17xkdHd1ZabZu3boVZHPS3FXml5x+7bzly5cvbNiw4RMEAPYgHRecS7xld1FHFwZPUNI5NaSDtFSi3+5gUewu2z4UyvXr178li3TOKKzXXnvtBecUqKRLR44cOZAAwLpkdCQl3c4Xts8++2yOj49PafIQw4YN66c0W7JkycJ7+d6xsbGfK82kESp5CBkdrVixYoHTr58nnUR8fX0rEgBYi8yjOO8gmpOTc7pfv37tyMNw6mex0mzIkCG/u5fvLftHKc1ke3LyMIMHD+4mx6/xGsgIFJsMAliE3F1u2LBBthS4PXf06aef/pX/qCR5nuKS8lIayQWRv26Je/nmsr2H7qo/ScOSZyoxd+7cmU4vRd6aNWs+k0bBBADm1Ldv3zaSezfOWr67zO7du3cr8lD8u7dVmsXFxX1xPz+Do7hEKx7xum0reXfr0aNH+JkzZ84ar4V0hJDPEQCYy5w5c2Yop9ERp3k+lb2PyIMtWrTo70oznmy/rwIR6cSgNOOR74fkwWRO9M65JtmWnQDA/UJCQmqmp6fvM85OSe8MHTq0BwHxa3FVaSQd0+93PZekl3Sn8Hh0cIGAXnzxxSinCse81NTU3QEBAU8RALjHCy+80Me5mGHXrl3bZBEiQX6aR2mWkJCwiQogJSVlh9IsPDzcn0CCfiVZb2e8LnI+eFKFIoBZFJcUjnKk6+RO/L333nuL4DZO5/xVaSbtcKgA3nrrrZeVZrJvE4GhxMyZM991enny+PWZSgDgerL2SEZExtknW01ERUW1JviZ7Ozs00qzgqaGZF2N0tyglX+/bIKfkS7jfD7cXiTOI9uNcr4QALhGhw4dgqWizjjpOG2xs06dOk8S/Ez79u0DlWayQSAVAs93aN9gkFN4vgQ/Ix3G+bW+3aZI+jy2a9cuiABAr5deeinauW2NrNngTxcj+C8zZsx4R2k2YcKE16kQ+N+/qjSbOnXqBIK7kkXGxusk5w3Pv/YiANDj/fff/4vTCXYTO3X+OtkTSumVJ3tPUSHwqKae0uzAgQP7CX4RzwGOcOp7mMdB/M8EAIWzYcOGVcZFSEqB7bQbrCu0bNnSR2nGF/800iAzM/Og0oznuaoT/CI+X1ryPNNF4/WKi4tbRQBw/6RdEOfG9xon02HGF6DKBL9q4sSJf1KaTZs2TUuabObMmROVZuPHj3+V4FdJ2XhWVlam8ZpJU1dvb+8yBAD3hidrqzlvE7158+ZYT+/OcK+Sk5P3Ks1CQ0MbkAZt27ZtqDTjG5ckgt8kuw/LeWS8brKBILqNA9yDTp06NeE0Xa5x8sybN8+jW8rcDxlJKs2ktJw0ys3NPav0ypORAMG9KL5kyZJ/Gi9cTk7OKb7hqEsAcHdRUVHtnCvsJk+ePI7gnr399tuvKc2mT5/+Lmn00UcfTVOavf766yMI7hmfV+ON1046QPB59ywBwM8NGjSou/RWkxNFOjTExMRgl837tHv37i+VXnnt27dvQhp16dKlhdJs27Zt8QT3ZezYsSP5PMt//eRGsFevXuEEAP8xZMiQvkbTTjlBZMsFgvsiE9dKM1c1Pr3ElEZy7FSpUuURgvsSHR3dmc+32+edbCZIAJ6O79jGKEcLGtyxFdzo0aOfU5otWLDAJbu8Llq06FOl2ciRIzGyLgA+39rweZc/ZJLgPmzYsH4E4KmcA5LktqWNEEGBxMfHb1CauWrzONmWXmnuhbdx48a1BAUivSP5/Lu9Bca4ceNiCMDTOAckqbZDQCo4Kfc15uN0cfW24/L1lUYF2esJ/o9UvXJguuF4OfP4/HyFADzFHQEpRzbqIyiwUaNGRSvNOMX2D3KhlStX/ktpNmjQoJ4EBdalS5cQ5xHTiBEjBhGA3fGBLnMftwNS06ZNaxAUSmxs7EqlWf/+/TuRCw0ZMuR3SrNly5YtICgUR2DKHzHJHNNzzz2HXZzBvqKjo7sZVXYyhyQr/AkKq7hT000t+L35llzcgT08PLykC1KOVwgKzRGYvpPXVM5X7FcGtuRYGPuD46KHogZN+vTp01FpJiMvKgJxcXGuGOFFEBRaZGRkmFGVJ1WxCExgK7Jg0ujU4FiH1IpAi8WLF89VmhVVWTCncvspzVw9F+ZJJBAZo3C5kcSmimAL0lxVtiyXA1tSAQhIenHK6qrSSEazUs1HRcDPz6+Ukc7VRY41Am0GDhzYyej8IHPA2F4dLE0ahMp2zMYF48UXX4wi0EY6XyjNtmzZsp6KkCvWV2HPLb1kU03jtZXzuVatWmUJwIrS09P3GQfzpEmTCrWdNvy3BQsWfKI0Gzly5GAqQmPHjn1ZaTZ79uy/Emjl3MQ1KSkpkQCshu+A1zpdJN4j0I7TKVp7yLG8OnXqPElFSPb0UZrx3XwOgXY8f/l34zXesGHDagKwig8//PA94+At6nSQp5DqRaXZnj17dpAbOO8wrEvbtm0DCLRzvtmcPn36RAIwu1dfffX3xkF74MCBwwQuMWPGjHeUZm+99dZr5Abjx48frTSbNWvWVAJXKJaRkZHmeJnzpJsIAZhVt27dwoy1SDk5Oeel0IHAJWRHWKWZu96v5s2bP6M0N2jNZAQuISlXTh2fl9dZlnhERESEEIDZNGrU6GljG3NZdIcD1XWkE4bSLDk5eRe5UXp6+kGlGbb6dp2uXbs2dboBPYVScTCbkjwvsMe4GAwfPrwvgctMmzbtf5RmkyZNGktuJPMTSjN3pSM9Bafqb+/hhYo8MBXnrgIzZ86cQuBSx44dO6o0a9asmTe5UVhYWH2lGd8oJRO41Jw5c943Xm9+PoMA3O3ll18eYhyU27Zt20LgUj4+PpWUZllZWSfJBHie7IzSTNLKBC7FqV8jS5KHnWvBrVq0aFHHKa+cwxPlTxG41IQJE/6gNHvvvff+l0zgww8//IvSjFN4YwhcSta28Xzy1/J6S4887I8GbsN32JlyIHJg+jdauxQNp7tSbdq3bx9IJhAREdFYaeautVeepkePHuFGj7yMjIz95OKtTwD+y6JFi26v7pa7dwKXc0XqjlNmJ8lEcnNzv1YaScNXft3KEbjc5MmTxxmv+/z58z8lgKLi2DU0f13J9u3bNxEUiXHjxo1Qmkn3DTKRuXPnzlaaxcTEPE9QJHbs2BHveNnznnvuuUgCcDW5W5e8sRx1586du+zv7/84QZFISEiIU5r17NnTVJu39evXr4PSbOPGjWsJioTMK1+9evWyvO78+E39+vW9CMCVEhMTtxgne2RkJPZGKjolXLD30DdkQrr3iOLX7ZaXl9ejBEWiT58+7Y3XftOmTbEE4Cpvvvnma8bBNm/evI8IisyIESMGKM14XnAemdDixYv/pjRDqXLRcn4Px48f/yoB6BYWFtbQKP/OzMzMIlTXFCnptq40i4qKakcmFB0d3Vlp7oUXGxu7iqDIcJr/waysrFPy2kt/PHcvzgb7KWZs2McH2E2zlBB7kGJyYiuNOEN2hcyruO7fl+dBvyUoUnKduOWoE09KSkJpPujz9ttvv2Gc3FOmTHmToEgNHz68t9Js2bJlC8jE1q1bt0JpxnMdHQmK1KxZsyYbrz+n/7GQGQovICCgupG2y8jIOEpQ5JYvX/4vpdnQoUOjyMR4DqiP0ozn0P5BUNSKcbr/uLz+UrWL7Wyg0Jyr7dq1axdEUOQ41XZNaSQ3GfxlS5CJhYeHl9RdbShVfQRFzrFLcv4cIbZRh0J55ZVXhhonNKrt3KN3795tlWZxcXFfkAXwz7lKada/f/8IgiK3cOHC24uiUQkJBdKwYcMnjE37ZBdZQrWdW0jKSWlmlS2sx4wZ87zS7G9/+9t0giJXpUqVR+Q6Iu+BbAqIdWNw32RkZJzIZp9/sDPOOH2rNJLUXWBg4ANkAT4+PqV1p/DkRovALZznCWfPnv1XArhXjg3X8nPAsbGxywncomfPns8qzRISEjaShbiiK3qrVq0aEbgFz1FvlvdAbjaaNm1anwDuhdOapJ+wSZr78N3ke0qz119/fQRZiHQDUJphd2T3CQoKqmWMfiVAEcBvGT58+O12NlOnTp1A4DbZ2dmnlV55vr6+FclC5KZIacavazaB2/BNwbvG8fjiiy/2J4BfYxQ38OM5/t/iBG7Rtm3bAKUZp8J2kwWlpqYmKc3Cw8N9CdzC29v7IWOnWtkolOC/4MLrMGnSpDcrVKiQ32resY10HoFbdOnSpRdpZtX5wTVr1nxGmvHri+IdNzl+/PjNv/zlL6/L85o1a9aeOHHinwjgTrIvktG54QAjcCu+g8xWmsleWGRBLVu29FGaybwpgVtlZmZmyHsh+y5JA1cCcPbpp59+aJyw3bp1CyVwG1dchPk+I52s63arGo3yAgMDsQGdG0VGRoYqR5XvRx99NI0ADCEhITWNURJKwN2P06j/T2k2bdo0KxetFJOKOaWZI0UNbpSYmLhR3gupyENfPLht9erVS40TVdYoEbiVKyb2Q0NDG5CFtW7d2k9pxq/zXgK3ateunb/xfsjGgATgSBXlD6FXrlz5LwK3kpJtpVl2drYtuhjk5uaeV3rl8d35UwRutWbNmkXyZshoqUmTJlUIPJuxbw2n7240bdq0BoFbTZgw4Q9Ks/fff/8vZAM87zBVafbGG28MI3Cr4ODgSsaCWoyWPJzzKAkHgzns2bNnh9IsIiKiMdlA7969WynNNm/eHEvgdosWLfpY3g8JTihA8WCxsbEr5UCQLc75QKhG4FbSmV1pximvc2QfxS9duvSN0kgugrKYk8CtpHOHY+d03CB7qmbNmnkrxyjps88+m0PgdjExMYOVZgsWLLDTe1vcFVt5jBgxYgCB23Ew+kTeD8wteai5c+fe3nQrNDS0LoHbcSppndIsMjKyFdlIv379OijNrLLpod01b968unLcKM+fP/8TAs/B6YoyWJdkLrLHkaRRlUZXr169QjYk25orjeRcwKZz5sA3Zmsc78n34eHhJclDeVzvuz/84Q9vP/TQQw/L83fffXc8gdtxuqI3vydaW62sW7duJdnQli1b1pJGci5ERES0J3C7GTNmTJZHfk8e6dixI3rieQrpNSV3Izt27EggMAWj6ESnPn362PJCO3To0Eil2dKlS+cTmMLu3bu3yHvC16nLBPY3duzYMcaJOGDAgC4EZlBC0hVKo+vXr18jm6pSpcojul8vuVEjMIVRo0b1V/+ZW8qT5wT2dvjw4XQ5CbOysk4SmEJ0dHRnpZksiiYbi4uLW6M069+/fwRBkZJ+d3L8S7/HVatWLeHr0gmjNFykpqZacg8wuEdRUVG3K5fGjRsXQ2AKixYt+rvSbOTIkQPJxqSMW2km7wOBy8jGijzyiZbOHNu2bdtw8eJF2egv7zfeljzsWmBjPG+xSt5lTn38WKNGjYcJTIFTR9eURlJNZvcFoVItZ7Sm0eUSIyi0unXrPtajR49wnip4WRbCZmRkpDveq98KQHfF831zCexHhsnGSfzJJ5/8lcAUevfu3VZpFh8fv4E8QGJi4ialGe7K748scn3++ee7T5s27X8SEhLW5+bmyuaUeaqAAehu5Lol3U7Ig3hELfzgwYNjSpQokf+78t3LpwSm0LVr1z6kmad0e+eR/4rQ0NC2pFGHDh0i16xZs4Pgv3Tq1KkJj8B9OED4+fr6NuYb3WDH0pJi5EJy3erbt++LBw4cmExgH3wHc1ruOpKTk7GHjImcP3/+gtIrz8/PrxR5gDp16jypNN6Ri+zs7JPk4WQ7D0m/TZw48Y3Vq1cvzsrKytSdKr1f/DMcI7APThFFGG+u3SfArUTuPJVmu3fv/pI8iCs2RJQNBclDtGjRok4Big/conv37s3JQ9g+fTdgwIAX5PHmzZu3tm7duoTAFNq3b9+NNFu3bt0q8iCcqlzk7+8fRBr97ne/G7Bly5Z0shEfH58Ha9SoESAptwYNGjTiFFzj2rVr1y+K9Jsu/fv3H8Yjt50E1iZVWEafO5S8mgunis4ovfJkCwDyILLlitIsMzPzCFmYFDUNGjSo59SpU//M826f83GWpUw6+rkfUqVasWJFj0hN21pMTMyLxpvas2fPZwlMQVJESjOeL9xDHognwFOVZk2bNq1PFhAREREyevTo5+bMmfP+rl27thktxOxKUo3kAWydvuMhb/4c0tmzZ89wqmMbgSnwfNLvSLONGzeuJg/EqbZYX19ff9KoXbt2HXl+LoNMglNvjzdu3DiAR4ZNOftRz8/PL0DSb0ZFrafo0qVL1MyZMxcSWBOfqBWVY9g+Y8aMdwhM4zBTmjVv3vwZ8kDSKUBpTk9JAQW5iWzAOWzYsD6y9keKD86fP39W2SD9poNUAWKbEQv785///CfjzeRJ9UACUwgODq6qNF9kshh5MJ43yVaa8ajEi1xI5nulAvONN94YNn/+/NlJSUlf6m40a0djxowZSjZn2+EvD3W7y+Pp06fPcGonhcAU+H3pTZornr744ovPyIOtXr16Kc83vEYaccDol5KSoqX7iRQfcOYisH79+g0k1ciaVq1atRpZpPLNTPj8iXz//fdRtGU1cpenHHfj06dPn0hgGsnJybuVZh06dAgmD8aZAO1rvuR9ogJsAhoaGtpA1gPOmTNnRmJi4hZH8QHSb5pICs9TFojbivO+SREREY0JTMHHx6eS0owzVzkEdOnSJa2VZ7KFAr9fpX/p+8mFUSpax40bN2rZsmXzMjIy9hem8Sjcu5iYmMFkY7ZM3/GdY0d55NRdblxc3D4CU+jRo0cUacapu0UE8josHjx48EukSYkSJaQKr8/hw4f/zum2Gpx9COb0m29QUFDTOnXq1OcJ9yqOv4oUXBHr3Llzjw8++OCfBNYg21IYC2Y//PDD9whMY9u2bfFKM3S2/o8+ffp0VJrJ6Eu2elFgKlIQQmAdQ4YM6Wu8eXxn3obAFORmwQV7AF0gyCfVbDx/c0uBbTmlR/MGDhzYiWzqvicyza5t27Yd5JFP0BsHDx5MJDAFWTCre7Ejp2a/IMh3/Pjxm7GxsUjpWJ+Sj8uXL3/NmYV1H3/88ZSXXnqpX2hoqHfVqlXL3rx589/858Vc0TvSLGw3p9SmTZv28iiboMmJSmAKvXr10t4iZdWqVWiw62T79u1b+vXrN4TAMn766adb2dnZXx04cCCZP/alp6enZmZmpqalpV25299PSEiIi4iI6MbXOduOlGwVlFq3bt24QoUKleR5fHy8R3WMNrkSzZs3DyeNrl27dmXp0qWbyEOFhITUrF+/fmNfX99GPj4+DQMCAlp4eXk9SWBGMvqRnQpu7N+/f++RI0cO82PyoUOHDvJo/772ePvyyy83SVCSQhPZeoNvvjPJZmwVlMLDw2WUlF8NtGXLlo0EpsDzfD0c2wRos3HjxrX8kEf2V7xz585Na9euzbHHp5H0fZNFqGXKlHmcwLTOnj177vDhwyk84tnLwWe/jIBSUlKyqZA2bNiw5p133vmAnxZ79tlnOyAomVxYWFhreTxx4kQ2HwRnCEyBL6qRpNn69ettNxKWXU9r1qzpK41HpeGov79/cK1atbw9rfGohShOv/2UkZGRLqk3fjzkCEApPHVwjVxAAltubu65ypUre7Vs2VIKuT4gm7HVGoPr169fK1Wq1GPz5s375Pnnnx9OYArG+0KaSBrk4YcfloWdP5FFSeqFU2+N69Wr11CCj2w8V44R1v2YFqeMr/PoZx+PfnZzEErjj/2cTjtMRWzRokWf8tzh7yWFXbZs2SfIZmxzB9axY8dQvvDlr0DfsWNHPIEpREVFtdYZkMTOnTsTyCIBSXY9rVq1qn9QUFBIgwYN8rdc4AAUoDudCdrkz/9wtiW/+ODgwYNpHIgO8fO9PAL6mkyAU3ZbJShxCrds27ZtG/L8+QGyEdsEJb7zlNRd/l3m9u3bEwhMoWfPngNIs88//3wxmZC0UeIUXJAUHvDoJ4SDTxAHJNkNF6Mfk3IUH+w5evSo5N5k9CNBaP/JkydvkEklJCRsdTwt1qxZs3YISibVpEmT5vJ47NixrMzMzIsEpqB7PokvIj/ySbmC3KxOnTpP+vn5NWrcuHEwB6GAkJAQqX6rTGBG+aOfr7/++tyRI0fSk5OTd/F14mgS4zmar8hiOGieO3369Cm+4anetGlTue5p6eZuFrYJSsHBwU3lcffu3ZsJTKFHjx7huqvE+P39kk/K61SEeELZp1GjRo05EPlK9RuPgAJ5+qc8gSnJ2h8OOoel4IBHQOkceFJ4BJSelZV1lWyC4+k2DkqD+GY8jGzGFkFJLhqSX5XnchdEYAodOnToTpqtW7duObmIMf8jzUdl3ofngCQQ1cf8jynlj354sv8qj344A7d/H9+spEslnCc0Yd6zZ8/2yMjIgeXLl3+Sj9dqOsrNzcIWQUkWDpIjb89vzk4CU+jUqVMv0kxXUJITWSreOPD4OxafNuX0m+y2ivkfk5Iddg8ePJgkgUcWn/K5LoHoHHkgHintNp7zaKklvxb/IpuwRVCSyiZ5vHLlyg87duw4SuB27dq1k0n+KqQRn3ipfFE6T/dJtt329vb2kTkgKcOuX79+Qyw+NS0lxQeSfktNTU3i9NuhtLQ0GQklnzlz5geCfFu3bj0krxOP4h+ReU3+FIKSmfBdbqA8cg4ZoySTkG2bSbPY2Nhf7XXHI58nnnnmmUYhISGy+LQezwMF1apVqy4Wn5rX5cuXr/CNxh5H+i2NA1Eqp6aOEfwmaVnEx/qzstSAbMQOJ2sJ2XxMnvDBnUpgCj179hxImq1Zs2a+46mUwtbloONvLD7lY8C/QoUKTxGYUX7nA86+neCYs5dHPwc5/bSXR0OHCjLyhf+QQC5BiW/Kg8lGLB+UwsLC/ErINpls7969uwncTpqF6k7dfffddz/ExMRMkAZwPCJqzmkLAnPi9+q6LDp1tN45yCOggxs2bJBzUxFow5mhZHmUQpzmzZs/s3PnTsuVt9+N5YOSVEmRY3I6kxG4Xffu3fuSZqVKlXpk0KBBLxCYytmzZ89zAEqWhqP8mN8Dzoprf6xIXnPjOc+VNkFQMgnOp/rJI9+d/XT69OnjBG7XsWNH7VV3YB4XLlw4N2zYsEGchkvhUZDs++MJ3dpNZ/v27Uc4K5rHiaLiModKNmH5nWfrMHk8ceLE0TNnztwicCtHq53GBLZVrly5J48cOSJpucuEgOROSubl5AnfnPuSTVg+KMkUgzxy2iCJHxCU3CgwMPCZMWPG/InA1qSasWfPnr0Ja7rcjmcs8oNSvXr1GpBNWD19V9LLy0saXtLx48elhTwmUotGSU7RBcni07p16zaQFKq/v38QOh+YknFOaA0g4eHh7SZNmjSDwK0c1z2qVq1aLbIJSwclPjH8jef85mBtgz5yAcu/mMnGc3wXFsgTqdLzTRafBsgJ4Kh4xJ2y+aizjO+g8xuPSvcD/jiwZs2aXeXLl9dWMt+6desIviF8lL/V9wRuw+9zhjzK+RgaGtpgx44dh8jiLB2U+C5dJvfyL6BfffVVkW+2ZTdyUPOIp7EEHln75dh4Do1HzSf/hkHW/kjnA1mfl56enibVb/v370+5W+PRjRs3ru7Xr5+26kVJ4UVGRv5u1qxZCwjcxhGU8o+HWgxByc34PXjGeH7jxo0sgnvi7e1dhgN6Iw5A0nTUn4NQfv83dD4wr2uM502l2/U+WXyaxhISEvbTPaas165d+7nOoCS6devWG0HJvZwqjovxeS036V+QxVn6IlS1atVq8ih71qekpPxI8F+k8SgHnkA/Pz9/GflwAAqsXLmyF4EZ5QcYvtBI49F9sgBVRkBM1gCdpkJYtGhR3OzZs78tU6aMtl2An3322bZVqlR5BD3p3IenLW7Ktuj8vj5Rs2bN2mQDlg5KPLdRQx75JD5JQBERESGcdvNxBB8/2XpB91bkoM/Nmzf/zfM9+2UEJLueSvDhY1l2Pv03ucDmzZtje/bsqW1hsxS2tG3btuO8efPcvumiJ5PlMI0aNWr69NNPVycbsHpQqimPp06d8qgiByk+qF69eoPg4OAmMvcjox9OZdZG+s2UfrbrqaPzQRoHodTExMQi7UASGxu7QmdQEh07doxEUHKv7OzsLAlKfD30Jhuw9EWM01BV5ZHTd6fIplq0aFFHtlvgUU8j2fVUApAsXiQwJSk+yMrKOiajHw5CB5KTk3fv378/zQy7nvJI6QvZlVXnzUuHDh26ELgVB6WT8sjTGZXJBiwblHhivpzRiJXfFMv3fOK5nwc4Px8sRQeObbdl3x8/2S+FwKwUp06+4gCUunfv3sTdu3fv4gt/EpnUyZMnb8THx6/jNG830kR2fO7Tp0/HJUuWrCdwi3PnzuXKI18rHvL29n5I5pnIwiwblJ588smKxnNOjZwlC5FWPByEGjsq3wIkAPFdjqQise7HpGT+h4NPsqz7kfkffp62bt066dL8E1nI2rVrl3BQ6koaj7XOnTv3QlByn7Nnz+YYzytVqlSdg5KlG1NbNih5eXlVNZ5zUPqaTKp169Z+EnSM9Fu9evUayd0lIQCZ0e35H9lywbH4VHq8pe7atcsWzX45KK2YPn36TzpTeByUevDDUAK3uHjx4u3rH18XpdgBQckd+MU38qcqJyfnHLlZrVq1ysqmczL6Mcqva9eu7YPiA/Pi+RVpaJkh8z/S9UC23OZ5oP2ORqO2JCk8TjN+GRoa2oo04TnOchyYWsbGxn5JUOTOnz+f63harCwji7PsBdMx2Z/fzYEvIheoCAUFBdWSUY905uU0XHOe+2lUgRFGP2alnDaek84H+2X9z9atW2U/Go/rcr1+/foVOoOS6NixYw8EJffgm4zbhV5ON+uWZdmgZPTx4ouNTOq5Kq9fnPPvQUbng7p169bn0VAIig/M7fTp02c4+OzhuZ99HHz2S/k1yyXIx3NhS955550PSONNVLdu3fqMGjXqNYIi06RJk9oBAQF+3t7e9Y3P8XXR8m3BrDxSyn/xL1++fJ6cGogWlKz94RGPUXwg6beQmjVr2qbzrs3kv9c3b968Iek2GfUcPXr0kFTB8fMUSVER/CIO0BfS0tL28s1WE9KkatWqT7dt2zYgPj4+lUCrGjVqPMzXJpkWaOTj48P3xY3y56bvdnPM89WPk8VZNig99thj+blTHil9xw8P8sc9l0GGh4f7cvCRNT9SfCBBKNAOb6ad8c3HN5x228vzPvs4XZsmj3YpPnCHFStWLNIZlETPnj37IygVDk8HeHHgCeKg48s3yrJEJIADvtGp4TdHtk8ysjjLBqXHmTxeunRJyiHvGpA43faYBB/peiCPUnwga39QfGBesrgzKysrU+Z9ZHfTpKSk3V999dVBHgGZtsLSijZs2LBywoQJ00ljCq99+/ay/umPBPekZcuWPhx4msgISK5PHIz8CluZ++ijj6LQwV3Kli2bH5S+//77b+WR39zK/ObKxnN+js4HQTzpV43AMqT5G7+PQWSxtT9WxMH+tGx1IdkC0oTnNmqHhobW3bFjx1GC2zj99njjxo0DeGQaLJtiyhKR2rVr13PFzbEdel1aNihx1i4/GIWEhIRfv379W34zShNYGk/ALyUEpCKzZcuWdTqDEivWpk2bLp4clKQrP99YhXD6rWFQUFBTDj4Ni7Irf+nSpcuQxVm2hDkxMTGO78raE9hGkyZN6u7du9fSC/+sRHZudpTFa5OamrqPRwWBZH8lOnbsGOxYGuLP0wINZHpAOqeTG6+rJ0+e/KpmzZqWbsyKuRUwhRMMAaloJSQkpEn5PE+kVyFNeJTQuFGjRk/v378/h2zC0RYsWIoPHIvjg6oxM85NP/jgg4+SxVk5KGGhahGSOzDZavvw4cMpfGIGdevWLYo0+uKLLz4jKHL8ui8aMWLE66RRly5dfsfHygdkQVJ8wEE1f2kIByNfqVC0Ulswnsaw/BpKBCUw3F77k5aWticjI+PQkSNHDsm2CxcuXEh23tmXn+8gzWJjY5cTFLnPP/9cgpJUzGk7n3r27Dlg4sSJpg5KPNop9cwzzwRx4GnIgUdKsAN4/qeOI/0GbmTZCztPpsY3b968DUFBKUfj0f1G41H+SNm5c+ev7k0lqRkOWmdII04hnZZ0CIFbXLp06YLOPbqkrJ8v+k/wqPo6mYAUH/B8T5Bj9CNBqEnlypUrkQ1vbKUAzOrFDpYdKSmlMFK6N0o2nnM0Hk2TnU8PHZIB0P6Ugmw8J6kZ0mzt2rXLCNyGU3jLBg8e/BJpInMtrVq16slBaQEVsQ4dOsjcj5RdB3IA4vjjH+hJbcHsUIWMQgebuXbt2rccfJJk3x9+TJfuB/Hx8ftJU+PRdu3aad9plFN3qwjcJi4ubo3OoCS6d+/eZ9asWS4LSnXq1HlSFp02btw4f2NM2Z2ZB9s1sTDe+qxcEr45NDS0NXmm/Pkfznply8Zz0v1AOmDzKGifK6ueJA+/b9++KzpP/MuXL18tX748Wjy52dWrV6/xhL62hZeyLQgfL2V0pPCaNWvmzWljmfeR1Fswp+ICZbsMgrtRxYoVK04WhrsKC7h58+YPMvKRoCPBh58f5nmdlDNnzvxARahly5aRuu9EN27cuJLA7Xi0uqxfv35DSBM+Torx8dKVg9Lie/030nhUGo5y4AlxjH4CeERUz91rf6BoISiZh7Hr6XnpfC1Vb9IGRuaAdu/enUEmIFVVpJk0BiVwu/Xr16/SGZQEp/CiPvnkk7sGpeDg4Kr169cPkobIUnzQoEGDQE6/yW7SCD6FIPPHZHGWDUo3btwo0lGCLt+ws2fPnvrqq6+O5uTknBL8/2eOHj16zPH8ezIhvnhUCQsL07ox3Em2bNmyTQRut2vXro187H3t5eVVgTRp3bp155deemlwpUqVnuSA412lSpVq1atXr1G5cuVqPCFfihCAtLt+/fo1sjgEJdcwKt4OGSk3mffhwJNiljLZ+9W3b9/oBx544EHSaOnSpfMITOH48eN5y5cvX6Bzoz5Ouz340UcfzSMoMkaDaiuzbFCStRBkEteuXbsqFW/8sU8WnMpOp/Hx8QfIRrp27dqXNEMpuKn8yEFpIXaPtbZbjCzO8l3Ci5jKzs6Wlv/JjtGPyyvezEB6f/Gksx9pdPr06dwvv/zyMIFpSC88Pr6zsZDZuqQjC1mcZYNSsWLFCrX9+W+RN9dR8SYpNyk8SJf/mHXOx5X69OkjBQ5a8/8rVqwo8oWV8N+k4q1BgwbB/v7++RvNlS5dGuX5JidZIr53OCk3xHxtSuUMTcro0aPHhYSEPHv16tVvyOIsG5Q0vfhGxVt+u52UlJTdmUwq3nji9whBvs6dO2ttvipiY2M/JyhSHHhqNGrUKFD2UJKKN2m9o7NDOGh1uxcl3wvv5fnoDJ4WSJe5aT539vIf/SxNFxMT86Y8XmdkcR5VEi53GEbxAU/sHk1KStrDc0AH+OMSwV0FBAQ8FRgYGEIa5ebmnt20aVMygasUb9OmTSAHHQk+jWTPH9nvp0yZMhgFmZfiLEwO3xMflF6UPALKb4bMN8pf3cs/fvzxx/MXE1+5cgXVd+7yW3cEPOd0TXq9SdEBB6H9PBI6wBfCFHLcgcC9adWqVVfSnLpDR3B9jK22g4KCmtWuXbu+LDjlx7pot2Natytz+fok16Y0DkDpaWlp+wrSi9JQtmzZJ+Tx+++//44szrIH7o+M/hNgivGk+QlptyOdrvlNPiDD3Hu9w4Bf161bN+1Vdxs2bFhBcN9atGhRRxaZctCpJ1tt8+gnoEKFCk8RmNa1a9euyLVJKnOlEbJkZlxRmVuuXLn8LdcvX76MOSV3+TdzPFXVqlWrRaCdt7f3Q3wh1LpgVhrGrlixYivBrynWqVMnabUTwCk4abcTyAGo4UOMwIyMXpRyc5zCwSdNsjR8YyyFCOfIxThF+yAfGvn97jgoXSCLs3L6zhimFuOLZxmeI7J8LtVsIiIieutOA6HA4ed4zq6yBB3p9cYBKECajtasWfMZQrcD07qzF6Wk4Xj0n0RuUrJkydtdODgoXSSLs2xQunDhwtfG8/Lly9fgoJROoFVkZGQ0abZq1SqP7XXnvNU2B6DG0u26DCMwo9uVuZxykzmfZCk+MGNlbsWKFSsZz8+dO3eWLM6yQen8+fO3h8Wcvqu4Z88eAq2Kh4aGtiSNZMHz0qVL48nm6tat+xgHHtnpVCrf8vf6kSIEFB+Yl1TmZmVlHZX029GjRw9JZa7c6PL/m36OplKlSsZISV25cuVrsjjLniQXL1683UXhqaee0tZEEv4jOjq6o+4dOzdt2vQF2YzMu3HKLbhJkyahzZo1e5bz+429vLwqEpiV4puj6zzvs09GPTL3Ix9bt27dTxblfP3Lzs62fIGXZYMS38mcNp5L52ECrbp27dqbNOO8+1qyMGP+RzofONJvjR2LTzH/Y1KnT58+JdVvUvXG9ksVXEpKSjbZSOXKlfMXQEupOacYL5PFWTqdcOnSpYs8n/QUvylVCbTq0KFDN9JIVqbzfNIasohWrVo1ku4HMv/DKTh59CtVqlRpAjPKX/sjXVkchQf5+5HxR3JRb4TpDnxTXlMeZf6LbMDSQUlKMB1BqSaBNr169Wqje/V/YmLiNp4HNN3Cvlq1apWVjgfBwcH5i0+lBBvzP+Yma3E4+OyV+R9pu8OpuIOe3NyX08X5DXRPnTqVRTZg6ROP86enZOvkmjVr1iXQJjIysj9pZoYdZps2bVqD53zy1/xIEOLHxhUqVHiSwIzyRz98jp/gwGOUXqdxGi4lNTXV8mtxdOIbq/zrH48KT5ANWDoonThxIv/OgEdKKHTQKCIiojtpJJVNPJ+0mopO8U6dOgXLnI80H5VFqI7Fp1oLN0AfSe+mpaUlSTswDkCpPDdycP369bsJfhPfWOV3c8jKyrJFFxurB6X8N4EvNg9zCqZCenq65csh3Y0DUki5cuXKk0Z79uzZUZi+Xr9G9npq3LhxoHS95o8APg6CeOQs6VwUH5hYcnLynm3btm1yajyKrvwFEBQUVItTzSXoP3u9nSQbsHRQctwZ5C9y4yGsD4JS4XXt2jWSNFu3bt0q0iAsLEwajkrVWyPpfuBYfCpzXwhAFrN3794v//CHP7xFaJBcKDz/aXT/UF999ZUtArulg1JmZubtN6FBgwa+q1atSiAoFFc0YOU0zH2VgvOIp3TdunWl9Y6MfPz5uZ+MhFB8YB8dO3aUFPEfCQrlmWeeqWc857TnQbIBS5/kR48ezb127dpVvlsuW6NGjdoEhdK+ffvAqlWrVieNOC2zd9++fcd/6c+Dg4OrSudrGf2wYA4+fl5eXsbGcxgB2RRnWGu3aNGiUWJiomUXrZqB3KzJoyyPsUv5u+XvPI8dO3YkMDBQ2vg3JCiUzp07/440i42NNbapKMZfvxmPehpIAJLGowEBAcEyH0gIPmZze9fTI0eOyJqf1EqVKlXhm5aupFG7du3aIygVDl/3/OWR3ydbjJJs4Z///OccxfhO4QpBoXA69LjSbMeOHQknTpw4fuvWLQWmlXf+/PmzCQkJ66ZNmzbuhRde6N6sWTNv52MjNDS0gdIsNTUVDSsL6fr16z/Ka/npp59+SDZh+ZESX0gPyWO5cuXK8l2DV0ZGhuW75LoDj1qqOyZNtWrevPmzBGZh7Hp6mO3n9PfBe208yjcXh04zTu9q657i7+8fzCnbp3kklkNw3zhD5FWqVKn8a7hdihyE5YOS7DZLjh1oOTVUF0GpYKKiovoR2Ip0ZZfGo3zR32dsPLdly5YCb/GyZs2az0aOHKmzOKFY9+7d+/LPN43gvvn5+YUYz3nUiTVdZsETfeUk/SBD2IkTJ75BUCDJycm7FViRHPt50h1aNlCcMmXKmwMGDOgiI1/SrG3btgFKMznuCAqEU63/YxwDZCOWHylJV1zOKpzkrELNBg0aNCa4L1Jxx2mUJpwKaEJgelJ8IOk3p22396enp6ecPHnyBrlYfHx86tmzZ895eXlVIk342AtE2r1gjOvdkSNHDpGN2GLdx759+5IkKDVu3LgFwV1Jx4tnnnnGNygoSHq+NahXr55/nTp16pUoUQKVb+aTX/0mZb4HDx5MkX1/+OZL5n1SeW7nKLlRXFzc8ueee24kaSJrzyIiIjpyUPoHwX2Rc1ke+fiwVQWjLYKS5Mw5N92bA5OX7PrJE7jfkgdr1qxZPdl2wdvbu540HuUA5OdoPIoAZEKOXU8zpfGozJHKCIjTWimZmZkXyWTWrVu3goPSCNJ4LHXs2LHn9OnTEZTugxQ5lC9fPr+ZcEpKiq1SoLYISo68dP7dZdOmTcM4KMWSB6hRo8bDsk5Btl6QjedY09q1a9d5iBGYkZL0G99E7ZWGo5J6kwakVmo8umzZsi3Xrl27UqZMmSdIkzZt2nSoUqXKI56w95Euvr6+weRoL2S3IgdbBKUvvvhim5S6SmNCKTP95z//abugJHdGPOIJlAAkfd9k8WnNmjWNvldgQjz/ksuBJ0lScPyRLmk4O+x6KqOlvn37DiVNJIXHmY5es2bNWkBwT/jmO3+qQm5yNm3alEw2YpteYpJvl4DEqSvLr4tp2bKlD6ffGsuupzz6CeHRUCO+My1DYEb5I/RTp059tXfv3kQ5DiX9dvz4cZkLMt2mhjqsWbPmc51BSXTq1CkSQenecVDKv85JmT/ZjG3usmfPnv3X4cOHj+E7hx8efvhh2bba9GWS0ni0Tp06QY0bNw7iwOMrHbCx66m5OeZ/jvLFYJ8sPpXUcVpa2n5Xbc1hVlevXv2W75O0bQ8vd/x83j5K6Bp+L0rcYrJjBc/FTRkzZoytlsLY5uK3Z8+eRA5Ko2Ujt27dujXju7kdZCIhISE1ZdTj7e1dX0Z0PAoK8vLywuaE5qW+++6767L4VNJu/CjzP+lxcXH7CGR7+zge3WjrlSg9EKOjozstXLjQI+aDCyMqKurZ/2yhRJSUlLSNbMY2QWnXrl2bjOehoaHh7gxKslEej3r8pAKubt269fkxBI1HzU3WunHwST5y5MgBCUB2mf9xldWrVy/RGZSEfD0Epd/G17dW8iij9tzc3I1kM7a6SPKFZJ8UAchOp8ZEoCtx6u1JHgE1cdr1NLhatWpVkX4zrfzebzzi2e+Y+8l/LKrFp3bCI/6HOIBf13msS1Vf2bJltVX12ZVU28mCd9k+XrIvZDO2unju3LlzmwSloKCgpk899VTpCxcuXCdNwsPDfXnUI5v+BEkQku/j2DYcox+Tunz58iXpfOCY/znEJ7MsPrXV6nd3OX78+M3Nmzev17mdhewi3L9//4hFixbFEdyVLAORHZfl+ZYtW2w3ShK2Ckpbt27dPGzYsFekNLxNmzbPfvbZZ+voPidO5U3nu4/msj8T83cUH9RxpN/AhCSNkZ2dfUIqkaTyTfb/4dGQVL99TeAynCJf5oI9lnogKP0yvq51coxO87eFIRuy3V3+rVu3/s1v2gMff/zx+y+99NKrv/Z3pWmlzPtw4Gkk1W8y+qlatWoNwujHtKRKiwc8e3nkk87BJ00q4NatW4d9edyAU3hlOIV3uYQx664Bj26/KV++fDmCu+KA/fd+/foNkQ7wpUuXfpwsUGV8v2x38d20aVNs27ZtO/Kd8+nqzPHpknxHJ7ud8rSPXyPpfsABqHGpUqW0lbSCVvmj27NMig+kAu7w4cMH+HkSO01gGsnJybtk52fSqFWrVgEJCQm2W3+jw/nz569WqFChzMaNG9dGRERoHaWahe0m5L/88st4CUrVmKw8r1mzpjen33zReNS8JP0mna+l4EAKDyQNl5KSkoy2M+a3cuXKf+kOSlFRUQMQlP5b69atpYdl/iL6uLi4dQTW4O/vX8OxxwyYT97Vq1e/SUxM3PzRRx9NGzFixCApICGwLE6BV1aazzfOcmAn2ruYOHHin4zzSHbsJbCOEydOHFfgbnnS+UA2nps0adL/GzhwYFdOnVYhsB2e40tSmnEKrxHBz/DrvEdeG5lTJRuz5XoaTtut5LvwPxAUCSk+kNJrnvSWztdpBw8eTOX3QJpE/kRge5zCW8QZiiDSSLai2bp1q632CSoM2Q9NOsHIc35dNhFYC99lBSqk8IpKnq+vb1UCjxUUFFRLaWbHRqOFMWHChFeN8022pSewHs5LZylwOU4loBccUGZm5hGlWWBgYDWCfFLlKK+JXNfI5oqTTa1Zs2YpgctJqpTA423cuHEVaSbbWRDkp+6MCsfly5cvIZuzbVBatWqV7d+8++SSLQHi4uK0X4zAelasWLGINB9jkZGRAwioV69e0cbz9evXf05gXTzUPaM8U96NGzd+kOIDWQE+duzYkcOGDeun9JfuniEABynlVpoFBAQ8RR5OGrDKa5GVlZVJHsC2IyWxcuXK+WRvcmeqLl26dGH79u1xM2bMmMTBZ0BYWJj/ww8//Ig0buzfv//QSZMmzXr66ae9SHMHD747XkgADpzK1Z4y79ixY1/yYC1atKjl7++f3wn8s88+m0dgbSEhIXWUjarwbt269SNPKB9cvXr1ookTJ77Bw/o293onmZKSskNp1r59+yYE4NC5c+eWSjO7Nh29V9OnT/9fx0uR5+PjU4nA+lyxsM/FJIhK+u37PXv2JMybN+/DmJiY5/mOUSY6CzSyldXfSrOcnJxcArgDj9q/URrJjZiXl9ej5KFyc3MvyOuwe/fu7eQhbL8Z3cKFCz/RvbBPM3X27NkcWaV95MgR6XydLruepqWlnSRNpN09aRYbG7ucAO7Ax8WygQMH/p40kW0aevbs2eujjz6yeyr+v/Tu3bsVB+Qn5fn8+fP/QWAPPOQtLXdbygSk+EB2x126dOn8sWPHvtKjR482tWrVKksulpCQEKc04589nADuIJv0Kc0pc+mITR5o7dq1y+T3v379+jX+X23bg4AJSBBQRezq1atXtm3btoHv8KaOHDlyYMuWLf3IDapUqfKIpAKVRvK7EcAvkKa7SiO5qZTNN8mD+Pn5lTLO28WLF88lsBdXTMA65MkJI6Wasi7KaDwqnZPJJEaNGhWtNJMycwL4BUuWLPmn0mzo0KFR5EHefvvtMY5fPS8iIiKEwH4yMjLSVSHJncuuXbu2cX539htvvPFShw4dmpHJy+rj4uLWKM2ioqLaEcAvGDBgQBel2YoVKxaTB8nNzT0vv7ek+wnsKSYmZvB9nAN5fFCc5bmYTVOnTp0wZMiQ3rJPE1lPCd2pO85vf08AvyIwMPABPu5uKo04JXiNPAQH9Y7G7/3aa6+9SGBPUlbKB/bVOw92Tr8pHkUdkXknHjL/UYoP6tWrV55sQFKJSjNPu2OFgpH2U0qzfv36dSAPwDfD6+X3lbk5AntbsGDBx8YBPm3atAmO4gPbbpO+bNmyBUqzYcOG9SGA3zBixIh+SjNPmMsMDQ2tqxzVi7NmzZpKYG+SgjPKw/kA/5TsrZjuKihOydzw8fF5kAB+g6TwdC/FuMTI5owiEVk+gr5/HkK25zYusN7e3rZ906UYQWm2ZcuW9QRwj+R4UZrZeX1c3bp1H+PLUv4oia9THrsljK0bst7N7Nmzp/ODeoj9/ve/H0E21bNnT+2NLD///HPMJ8E927x5s/abmIiIiG5kU6NHjx7PlyWZTlDvvvvu/xB4jsTExM1yN8Lpres1atR4nGzo4sWLXyuNJBUjd3IEcI+kgagUEumUnZ19muzpdqUsX5+2EniWvn37dlaOycQpU6a8RTYji+2UZnyibCGA+5SampqsNGvdunVjspnJkyePc/x6eX369OlC4HmOHTuWIUeAlIlLKx6ykZkzZ05Rmo0bN24UAdynt956a4zSTI5vshm+DH0rv9uBAwdSCTzTyJEjByvHaGns2LEvk41IikNphr1coCACAwO9lOYGrVlZWV+RjcjO0MbvFh0d3YPAc0nPOjkQzp8/f6EounUXBU7dNVaaJScn7yaAAuK7/zSlWWhoaAOyhxJ8/cmV3wmjpP/wuOo7Z++9994keaxQocKTw4cPf4VsoH379l1Js3Xr1n1OAAXEx4/2vbf45qsz2QDPab/B1x8vfqp4XultAsjIyDggdykyt2SH6jLZLl3plccpmGoEUEAyqlGayY7SZHGy19uNGzfyFxhjlAS3SQ5X/V8l3ptkYY5tz7Xm7znIZRBAIfE8Z47SzExbxBTE7NmzJxu/C+aS4Gek3FkODGnt4efnV4EsauLEiX9SmkmPQAIopJkzZ76rNJPKPrIoHiWVM9YlJSQkbCQAZ926dQtTjhHG4sWL/0YWlZycvEdpJoUTBFBIbdu2bag04+N9F1nUypUrjd2w88LDw30J4E48GbtCjhBZgd6sWbN6ZDGuKL3llEsuAWhibFyni3QZadiw4RNkMWFhYbWN32H16tXLCOBuZDLf6GosbYjIYsaPHz9aaYbW+aDT3LlzP1aaxcTEPE8Wk5SUlCg/u0wXyM0kAfySOXPmfGAc7DzxaKmSU+mXpfTK69ixY1MC0KR3794RSrONGzeuJQsZOnRoD+Nn//jjj6cTwK+pUaPGw8YeRFlZWSf4UyXJAmRXXRfsXXORADSTJshKIznu5fgnizjP5OeWBbMEcC9Gjx79nHLMzUiTRLKAESNGDFCaLViwYA4BaCa7xyrNhg0b1o8sYObMmZOMn3nkyJEDCeBepaSk7JADh3O+/5a1P2Ry8fHxG5RmnGppSwCa9e/fX3sKzwob4klxA19PbsrPm5qaupcA7ke7du2CjHTY5s2bvyAT8/b2fsg42HWR7hYE4CJGilwXKRggkzPmfOVntVHfPihK8+fP/1Q50ngvvvhiFJnU8OHDeyvNJMVCAC5iLL/QacCAAabdg+iVV16JNn7OTz/99EMCKAgZgeTk5JySA4kn/c/7+Pg8SCa0fPnyfynNrFZ5CNbCc0B9lGaLFy+eSybk5+dXyihu4OtJNgEUxqBBg7orx2iJRw+fkgldv379mtLIkQopRgAuEh4eXlJ3tSinBK+RCa1YsWKh40fM4+tJTwIorLi4uFXGgW+2yf+oqKh2SjOrrfsAa+LzaqXSTIooyESGDBnSzfjZODgtIgAdAgMDy/Jd2GU5sGT4zf//AJmEpCyUZqNGjYomABeLiYkZqDSbN2/eR2QSjrTd1/JzyZokO2yLAyYiF2r1fw1bPyGTkJSF0ohTdzdkLo0AXKxKlSqP6E7h5ebmniWTcE7b/f73v+9NALpxumGNcgQmHpa7PTfco0ePcKVZQkLCJgIoItLlW2km3cjJzV566aXbhRwrV678jABcQfY/uXjxYv5wXNZZ1KlT50lyI+c+fbq88sorQwmgiIwdO/ZlpdmsWbMmkxs575Mk6X7ZXZYAXKVPnz7tlWO0JBsDkhvp3gZAfi8rb3AI1uPYbkWr7OzsM+RGu3btSjDOp549ez5LAK4mPeGME2DChAl/IDeQjfeUZrt3704kgCK2b9++FKWZuzomvPfee28aP4NkMgigqGRmZh6WA082BOQAEUJFbPr06ROVZhxgXyeAIiZbmivN5PygIta9e/fmcj0Q6enp+wigKIWFhdV3yhvnSPknFSHZEVbplRcQEFCZAIpYUFBQLaV5x+QDBw7spyLk7+//OF8GLsj3lutC8+bNqxNAUXv11VeHGSdTfHx8kS04lYCoNEPXYnAnzjxkKs2Cg4OrUhFJSEiIM77viBEjniMAd5FyT+NgfPfdd8dSEZg4ceIbSrNJkyYVyc8OcDczZ86cojSTtCAVgffff3+C8T3N2n8PPIh0d3CaX/pRqvPIxXhUs0dpFh4e7ksAbtKqVatGSrOiGP0PGDCgvfH9MjIyDhCAGXBgqmY0RZV2RK6cm5GSbaUZz0+ZZhU8eC45DpVmrlziIF/bmFeWdYshISHlCcAsoqOjOyjH/NKJEyeO86eKkwtICbrSjNMPfyEAN5s9e/Z7SrNx48aNIheQDAkH0dOOb5PXq1cvl2dIAO4bzynJGoX8wLRhw4bV5AJ79uzZoTSTNU8E4GZSUq0027x5cyy5gHNhA8/HvkkAZiXByDhYefL2XdJIyk6V5tLZnJycXAIwiUuXLmndJl3meWXvJtJo3rx5Hxpff82aNZ8TgNnxhGe6cdD+8Y9/fJE0GT169HNKszlz5swgAJNYsGDB35RmOrdiefvtt28v9N29e/d2ArCChg0bPmFso853arciIyNbkQbbtm3boDTT9bMB6NC/f/9OSjPp7k8a9O3btw2fzvmZCp5POiH7rBGAVXDKoJ5RmSOPbdu2DaBCkBSE8fV0ucoIwGSuXLnyg9KIz5sfKlasWKiOKzzf1YS/zr/l60mlbfPmzZ8hAKvp1auX3FnlH8jnz58/5+vrW5EKaMSIEQOUZljoB2a0bNmyBUqzIUOGFHiTPelkbsx1SYCLiopqRwBW9dprr72gHMUJPOTPkr1WqACcCyh0wckFZjRw4MCuSrMVK1YspgIICAh4ymn9VN6LL77YnwCsbsqUKW8pR2DKzMzMKMCmXyV0p+44BfEtAZiQbJMuIxKlkSxupfsk56lz42OUfoOtOHp75Qem3bt3f0n3sbg2Ojq6s9KM7xwXEYBJxcXFfaE0kyKK+/kZDhw4cLtJ7NSpU98hALtZs2bNUuUITAkJCRvv9d/x3I/2Mtnhw4f3JQCT4jnUQUqzRYsW/eNevz/fOO4y/t2CBQvu+d8BWM7mzZvXGQd7fHz8unv5N5J6UBpxauSmt7f3QwRgUnJ83rp16yel0SV2L99706ZNsca/iY2N/YIA7O4uganYL/3d3r17t1Wauzhs2bJlPQGYnLQIUpp169Yt7Fe+ZQk+H9cYf5e//xYC8BTOgUnuzH7p73Hq4BOlmc4V7gCuMm7cuBFKM2n6erfvVaNGjYfvCEibCcDTyIjFOAn4hJDRS4k7/8758+e1bnsuHSakuokATK5OnTpPSu86pdEpduf3kYC0a9eueOPvYIQEHs15xOTopXU7MHXo0KGZ0iwxMXErAVhEampqstJMNhQ0vr60BOPvsdP4MwQkAPp5YMrMzDwkd4jyeVdsEc0pkRgCsIi33nrrNaXZrFmzJsvXlk36+Hw7YHx+3bp1KGoAMKxevXqZ+r/OD5nSkkg6QCi98ly5Ky6Abo0aNXpaaXbs2LGjjRs39ubz6yvjc9LaiADg5+bMmfOBcgQm3WXgIjk5eRcBWEx6evpBpRmfX7fnqoyREwDcxeTJk8crzSXghrfffvuPBGAxjnPCFfKmTJmC1kEAv2Xs2LEjdVcdieDg4KoEYDGhoaENlP4btbyYmJjBBAD3pnfv3q0uXrz4tdJE8ugEYFE8/3NaaSLNjZ9//vkuBAD3R6qDsrKyjioNpk2bNoEALIrnfaYqDTi4ZYeFhdUmACg4DXsp5bVr1y6IACwqPDzcXxVSYmLi9gJsGwMAdzN16tQ/qwLim8MTBGBxubm5F1QBLVq0aA4BgF7R0dHdOB/+7/s8H1HyCrYwd+7cWeo+ScHQ+PHjRxMAuEbLli397nfSt1OnTk0IwOKioqJa389xL2v9evToEU4A4Fr16tUrv23bti33cmLe6x4yAFbAgebqvRz3WVlZxwIDA6sRABSdOXPmzPitk3PBggV/IwCb4Lmhv//WMS9bqfNfLU4AUPReffXV3/M80w+/dIL26tWrIwHYRP/+/Tv90rEuOypPmjRpLAGAe3Xo0CH4bs1bJadOADbDx/XNO491TtedlLJxAgDzWLFixULnE/XAgQNp3t7eDxGATdStW/exzMzMn92ALV68eC4BgDm98MILvZw7jPMI6mzXrl1bE4DFceouIicn54JzJmDo0KGRBADmJnsmJSYmblZOTSznzp37Mf9RSQKwmMDAwAdk8avT4ChPupz4+/s/TgBgHa+99tqL0nzSadR07rnnnsOdJVhGnz592p85c+as8+ho1KhR0QQA1sR3mU/yqOlna5qWL1++0MfHpxwBmJQcn3FxcSvuHB2hdx2ATcio6dKlSxecymd/GDdu3CgCMJnx48fHfPvtt9edR0cjR44cSABgL3L3uWLFisXOc01Sode9e/fmBOBmfBy2zMzMPOY8OuK5pH/InBIBgH1FRka2ysjISHdO6a1Zs+YzPvm9CKCI+fv714iNjV3ufDxycDqEmyUADyPdk50LIfj5jdmzZ0+pUaPGwwTgYrKGTo63W7duKedU3ZtvvvkKAYBnkonjZcuWzXNO6Z1nmG8CFyo2ceLENzgAfWccc7LFhPS149H6owQAEBoaWjcpKSnxjuCU++qrrw4hAE1GjBjRL4c5zxtJdWh4eHg9AgC404ABA7qkp6fvuyO/n+FYG1KMAArgpZde6p/F7jiuDvP8ZlsCAPgNxaQEl0dKOc4jJ6mMevnll58jBCe4R45g9JVzMOL/P4oFsABQIDy3NMIRnJRTWu/c2LFjX+Y/LkEAd/Dy8np0woQJf8jOzj5zRzDK5GDUnwAACkuCkMwxOV9kLl26dHHGjBnv1KlT50kCjydLCqZMmTL2zt1hHcEIIyMA0O+11157QdaQOF90pDuEVE7xZLUvgcdp165d0OLFi/8mFXTOBQwSjEaMGDGIAABcLTo6ultSUtIO5zknsXfv3u3Dhw/vTWB7UknHx8BO9XN5O3bsiJdtJggAoKi1bds2IDY29nPnRbiO1N6FDz744F2MnuylSZMmtWfOnDnJec8uIaOkpUuXzm3durUfAQC4myx6fP/99yfcWbEnZP2TrHeqUqXKIwSW4+Pj8+CYMWOeT0tL23XnqCg7Oztr8uTJ4/z8/EoRAIAZyVqnTZs2xd4ZnGQ0tXr16sWc+utMKCs3u2LPP/9897Vr1y67Y64of1S0bdu2DYMHD+5GAABWIdVY06dPnyh303cGKE7/XF60aNHHvXr1CicwjYEDB3Zavnz5P/n9uXKXUdFXMipq2LDhEwQAYGWyLYFUaEkwujNAXb9+/RpfCOdL2XDFihWRBipC3t7eZUaMGDFA5gXvLOWW90nerwULFnzM718TAgCwI07vdZQmsBKM7gxQkhravXv31kmTJr0uRRQE2rVq1arRhAkTXpVKyVvOLbqdAtGKFSsWyPtEAACeRNJFssbJUc2Vd8cFMr97xJIlS/4ZExPzPKcDnyG4b0FBQbX49RvMo9GFsuBZ/TcJRN/I+yDzgQTgZphwBlPo0aNHeLt27TryR5fatWvXd3z6Z8dnbm5uzs6dO+P4Ln/Xnj17dmzfvj2D4GdCQ0MbtGAhISGhTZs2bVOZ3eWvqSNHjhzYvHnz+g0bNqxeu3btLgIwCQQlMB0fH59KERERnTnV1O7ZZ59tX6ZMmcfpLsfqd999d/3gwYPJqampe5OTk/fwhfbQjh07jpKH4NhTx9fX179Ro0ZB/v7+TQICApo+9NBDD97lr+a3heKAvoVtWL9+/fKjR49+SwAmhKAEphcWFla7ZcuW7Zo1a9aKP8LKlSv3FP3CscuB6saxY8fSOUClHT58+MDx48eP8vNMDlynyKI4dVmtevXqz3DgaSSjSOZXr169xr8QgIT6+uuvz/L83HYeUSayjTyqPEYAFoCgBJYjF2kOTi34Ih3Cz5vKRZov0LKN+y8ezz/99JPKzs4+zgHrSE5OzqkzZ86ckg3n5PHcuXPneV7lDAewm1TEZFFxpUqVvCpWrPi0l5dXxapVq1bnjFuVmjVrPlOrVq3a1apV8y5RokTJX/kS6ubNmzcOHDiQmpaWlrx///4kHi1u4SCcSwAWhKAEtiC753L6KpgDVRAHKd+6dev6lS9f3uhgfi/HueJR1rc8wsjlVNfXMvl/+fLli/K5K1euXJXGs9evX7/6ww8/8NMbN4sXL17s+++//+HHH3+8qZQqxtSDDz748COPPPJwXl6eeuyxx0rz3ylZlpUuXfox/rNH5Ofh/31cPsfPK7DKpUqVeuxefz75j6ThOGWZkpGRceDQoUNp6enpSRgFgZ0gKIFtyd4+PJJqLCMOVodTYDwAqSmjj5qOeao7ueN8UHd+4tq1a1dOnDhx9NSpUyeysrKOnzx5UkZ4h9etW5dMADaHoAQeq0mTJlU4XebNIxYvTqFV5MdKPIJ56vHHH3/yqaeeqsCB6wkeyZTmgU05R3qwQCS9JiMuaVTLo6tvL168eEFGYmfPnj0jI58LFy6c5xRiLqcST/I80EkC8GAISgD3wcfHR9Jy+Z0nOC33yAMPPPCo8WecyvueU3w/8J8rDj5X3TFHBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAED/HwshhURyb3XxAAAAAElFTkSuQmCC"/> <div><h1>Abyss</h1> <i id="quote">Tagline Quote</i></div></div></div> <div class="abyssNews"><h1>News</h1> <p class="abyssNewsText">Loading...</p> <hr/> <h1>Featured Games</h1> <p class="abyssFeatGamesText">Loading...</p> <div class="abyssFeatGames">Loading...</div></div> <div class="adSpot"></div></div>',ft,z,Kt='<img class="abyssCardImage" alt="Game Image"/> <h1 class="abyssCardTitle"></h1> <br/> <a class="gameCardButton" target="_blank">Play</a>',it,T,Zt='<span class="tabTitle">New Tab</span> <span class="tabClose" onclick="window.tryClose=true">x</span>',ct,G,dt,Et,Ht;return G=new Ae({}),{c(){e=s("div"),A=s("center"),d=s("h1"),d.textContent=P,I=u(),n=s("br"),$=u(),tt=s("br"),X=u(),h=s("div"),r=s("div"),i=s("h1"),i.textContent=p,y=u(),b=s("br"),R=u(),E=s("h2"),E.textContent=Ft,mt=u(),W=s("div"),L=s("select"),O=s("option"),O.textContent=St,pt=u(),q=s("div"),q.innerHTML=wt,yt=u(),J=s("div"),J.innerHTML=Ct,nt=u(),w=s("div"),w.innerHTML=zt,At=u(),C=s("div"),C.innerHTML=Tt,ot=u(),j=s("style"),j.textContent=Ot,at=u(),F=s("header"),D=s("h1"),D.textContent=kt,bt=u(),M=s("div"),M.innerHTML=xt,vt=u(),x=s("div"),V=s("input"),Ut=u(),B=s("button"),B.textContent=Bt,gt=u(),et=s("div"),st=u(),Y=s("datalist"),lt=u(),Q=s("div"),rt=u(),k=s("div"),k.innerHTML=Nt,ft=u(),z=s("div"),z.innerHTML=Kt,it=u(),T=s("button"),T.innerHTML=Zt,ct=u(),Gt(G.$$.fragment),this.h()},l(t){e=l(t,"DIV",{id:!0,style:!0,class:!0});var c=S(e);A=l(c,"CENTER",{style:!0});var N=S(A);d=l(N,"H1",{class:!0,"data-svelte-h":!0}),g(d)!=="svelte-14vw6gi"&&(d.textContent=P),I=m(N),n=l(N,"BR",{}),$=m(N),tt=l(N,"BR",{}),X=m(N),h=l(N,"DIV",{class:!0});var _=S(h);r=l(_,"DIV",{class:!0});var K=S(r);i=l(K,"H1",{"data-svelte-h":!0}),g(i)!=="svelte-175k23d"&&(i.textContent=p),y=m(K),b=l(K,"BR",{}),R=m(K),E=l(K,"H2",{"data-svelte-h":!0}),g(E)!=="svelte-1ctlc6d"&&(E.textContent=Ft),mt=m(K),W=l(K,"DIV",{class:!0});var Pt=S(W);L=l(Pt,"SELECT",{id:!0,onchange:!0});var It=S(L);O=l(It,"OPTION",{"data-svelte-h":!0}),g(O)!=="svelte-1eqsxxh"&&(O.textContent=St),It.forEach(a),Pt.forEach(a),K.forEach(a),pt=m(_),q=l(_,"DIV",{class:!0,"data-svelte-h":!0}),g(q)!=="svelte-rlc9rr"&&(q.innerHTML=wt),yt=m(_),J=l(_,"DIV",{class:!0,"data-svelte-h":!0}),g(J)!=="svelte-eki8la"&&(J.innerHTML=Ct),_.forEach(a),N.forEach(a),c.forEach(a),nt=m(t),w=l(t,"DIV",{id:!0,style:!0,class:!0,"data-svelte-h":!0}),g(w)!=="svelte-krm8cl"&&(w.innerHTML=zt),At=m(t),C=l(t,"DIV",{id:!0,style:!0,class:!0,"data-svelte-h":!0}),g(C)!=="svelte-fyklvi"&&(C.innerHTML=Tt),ot=m(t);const Xt=Rt("svelte-1i3zh95",Lt.head);j=l(Xt,"STYLE",{"data-svelte-h":!0}),g(j)!=="svelte-17qp8zr"&&(j.textContent=Ot),Xt.forEach(a),at=m(t),F=l(t,"HEADER",{});var Z=S(F);D=l(Z,"H1",{"data-svelte-h":!0}),g(D)!=="svelte-10jxu3a"&&(D.textContent=kt),bt=m(Z),M=l(Z,"DIV",{class:!0,"data-svelte-h":!0}),g(M)!=="svelte-1bsi530"&&(M.innerHTML=xt),vt=m(Z),x=l(Z,"DIV",{id:!0});var ut=S(x);V=l(ut,"INPUT",{list:!0,type:!0,id:!0,placeholder:!0}),Ut=m(ut),B=l(ut,"BUTTON",{id:!0,"data-svelte-h":!0}),g(B)!=="svelte-1kkjdq7"&&(B.textContent=Bt),ut.forEach(a),gt=m(Z),et=l(Z,"DIV",{id:!0}),S(et).forEach(a),Z.forEach(a),st=m(t),Y=l(t,"DATALIST",{id:!0}),S(Y).forEach(a),lt=m(t),Q=l(t,"DIV",{id:!0}),S(Q).forEach(a),rt=m(t),k=l(t,"DIV",{id:!0,style:!0,"data-svelte-h":!0}),g(k)!=="svelte-10rwuts"&&(k.innerHTML=Nt),ft=m(t),z=l(t,"DIV",{class:!0,id:!0,style:!0,"data-svelte-h":!0}),g(z)!=="svelte-fwt3do"&&(z.innerHTML=Kt),it=m(t),T=l(t,"BUTTON",{id:!0,class:!0,style:!0,"data-svelte-h":!0}),g(T)!=="svelte-k74wj0"&&(T.innerHTML=Zt),ct=m(t),Wt(G.$$.fragment,t),this.h()},h(){f(d,"class","settingsHeader"),O.__value="Abyss Default",Dt(O,O.__value),f(L,"id","themeSelect"),f(L,"onchange","themeSwitch(this)"),f(W,"class","settingCardButtons"),f(r,"class","abyssCard"),f(q,"class","abyssCard"),f(J,"class","abyssCard"),f(h,"class","settingCards"),H(A,"overflow","auto"),f(e,"id","settings-temp"),H(e,"overflow","auto"),H(e,"display","none"),f(e,"class","extFrame"),f(w,"id","games-temp"),H(w,"display","none"),f(w,"class","extFrame"),f(C,"id","invalid-temp"),H(C,"display","none"),f(C,"class","extFrame"),f(M,"class","links"),f(V,"list","autofill-results"),f(V,"type","url"),f(V,"id","adrbar"),f(V,"placeholder","Type here to search..."),f(B,"id","addTab"),f(x,"id","urlbar"),f(et,"id","tabsBar"),f(Y,"id","autofill-results"),f(Q,"id","tabContainer"),f(k,"id","tabTemplate"),H(k,"display","none"),f(z,"class","abyssCard gameVar"),f(z,"id","abyssCardTemplate"),H(z,"display","none"),f(T,"id","tabBtnTemplate"),f(T,"class","tabBtn"),H(T,"display","none")},m(t,c){v(t,e,c),o(e,A),o(A,d),o(A,I),o(A,n),o(A,$),o(A,tt),o(A,X),o(A,h),o(h,r),o(r,i),o(r,y),o(r,b),o(r,R),o(r,E),o(r,mt),o(r,W),o(W,L),o(L,O),o(h,pt),o(h,q),o(h,yt),o(h,J),v(t,nt,c),v(t,w,c),v(t,At,c),v(t,C,c),v(t,ot,c),o(Lt.head,j),v(t,at,c),v(t,F,c),o(F,D),o(F,bt),o(F,M),o(F,vt),o(F,x),o(x,V),o(x,Ut),o(x,B),o(F,gt),o(F,et),v(t,st,c),v(t,Y,c),v(t,lt,c),v(t,Q,c),v(t,rt,c),v(t,k,c),v(t,ft,c),v(t,z,c),v(t,it,c),v(t,T,c),v(t,ct,c),Yt(G,t,c),dt=!0,Et||(Ht=Qt(B,"click",function(){Vt(U[0]())&&U[0]().apply(this,arguments)}),Et=!0)},p(t,[c]){U=t},i(t){dt||(_t(G.$$.fragment,t),dt=!0)},o(t){$t(G.$$.fragment,t),dt=!1},d(t){t&&(a(e),a(nt),a(w),a(At),a(C),a(ot),a(at),a(F),a(st),a(Y),a(lt),a(Q),a(rt),a(k),a(ft),a(z),a(it),a(T),a(ct)),a(j),te(G,t),Et=!1,Ht()}}}function ae(){setTimeout(console.log.bind(console,"%cAbyss Version 5","background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:30px;")),setTimeout(console.log.bind(console,"%cIf you are seeing this, the main script system has loaded.","background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:24px;")),setTimeout(console.log.bind(console,"%cIf you encounter an error, contact the development team on our discord. DM the info below.","background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:16px;")),setTimeout(console.log.bind(console,"%cDo not share output to anyone but trusted Abyss developers with a role in the server! Someone may steal your info.","background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:16px;"));let U=navigator.onLine,e=navigator.userAgent,A,d=window.location.href;e.match(/chrome|chromium|crios/i)?A="Chrome":e.match(/firefox|fxios/i)?A="Firefox":e.match(/safari/i)?A="Safari":e.match(/opr\//i)?A="Opera":e.match(/edg/i)?A="Edge":A="Browser not detected!",setTimeout(console.log.bind(console,`%c Information: 
 Online: ${U} 
 URL: ${d} 
 Browser: ${A} 
 UA: ${e}`,"background: grey;color:white;padding:5px;line-height: 26px; border-radius: 5px;font-size:12px;"))}function se(U){var e=document.getElementById("themeSelect"),A=document.createElement("option");A.value=U,A.innerText=U,e.appendChild(A)}async function le(){await fetch("/assets/themes.json").then(U=>U.json()).then(U=>{for(var e=0;e<U.length;e++){var A=U[e].name,d=U[e].url;console.log("%cDEV:%c Found %c"+A+" %c"+d,"font-weight: bold","font-weight: normal","font-weight: bold","font-weight: normal"),tHs.addTheme(new Theme(d,A)),se(A)}})}function re(U,e,A){const d=['"faulty flaunts"',"Run by the best.","The best.","Updated to v5!","The best proxy.","Only The Best","Join our discord server!","Made for you","Made for the masses..."];let P,I=d[Math.floor(Math.random()*d.length)],n;Mt(async()=>{var r;document.getElementById("adrbar").addEventListener("input",()=>{clearTimeout(r);var y=document.getElementById("adrbar").value;r=setTimeout(()=>{if(document.getElementById("adrbar").value!==""&&(document.getElementById("autocompleteScript")&&document.getElementById("autocompleteScript").remove(),y===document.getElementById("adrbar").value)){var b=document.createElement("script");b.id="autocompleteScript",b.src="https://suggestqueries.google.com/complete/search?client=firefox&q="+document.getElementById("adrbar").value+"&callback=handleAutocomplete",document.body.appendChild(b)}},0)});let i=document.getElementById("quote");i&&(i.innerText=I,i.removeAttribute("id")),ae(),await le(),await $(),await updateGames(),document.getElementById("adrbar").addEventListener("keydown",y=>{if(y.key==="Enter"){if(y.preventDefault(),document.getElementById("adrbar").value==="")return;X(document.getElementById("adrbar").value),document.getElementById("adrbar").value}}),n=new TabSystem({tabContainer:document.getElementById("tabContainer"),tabBtnContainer:document.getElementById("tabsBar"),btnTemplate:document.getElementById("tabBtnTemplate"),tabTemplate:document.getElementById("tabTemplate"),URlBar:document.getElementById("adrbar"),tabActiveColor:"#333",tabInactiveColor:"#111",defaultPlaceholder:"Type here to search...",closePlaceholder:"No tap open, click the + to open a new tab..."}),document.getElementById("gameLink").addEventListener("click",()=>{X("abyss://games")}),document.getElementById("settingsLink").addEventListener("click",()=>{X("abyss://settings")});let p=document.getElementById("tabsBar");p&&p.addEventListener("wheel",y=>{if(y.preventDefault(),y.deltaY>=-15&&y.deltaY<=15&&p)p.scrollLeft+=y.deltaY*40;else{if(!p)return;p.scrollLeft+=y.deltaY*5}},{passive:!1}),A(0,P=()=>{n.setActiveTab(n.addTab(new Tab))}),n.setActiveTab(n.addTab(new Tab)),n.on("tabAdd",y=>{y.getTabElement().querySelector("i").innerText=I,I=d[Math.floor(Math.random()*d.length)]}),h()});const $=async()=>{await fetch("/assets/news.json").then(r=>r.json()).then(r=>{document.querySelectorAll(".abyssNewsText").forEach(i=>{i.innerHTML=r.content}),document.querySelectorAll(".abyssFeatGamesText").forEach(i=>{i.innerHTML=r.gamesContent}),document.querySelectorAll(".abyssFeatGames").forEach(i=>{i.innerHTML="";for(let p=0;p<r.includeGames.length;p++)i.appendChild(createGameCard(r.includeGames[p].name,r.includeGames[p].image,r.includeGames[p].url))})})},tt=()=>{n.setActiveTab(n.addTab(new Tab))},X=async r=>{if(r.trim()!="")if(n.getActiveTab()==null&&tt(),n.getActiveTab().getTabElement().querySelector(".mainStart").style.display="none",/^(abyss:)(\/)*[a-z]*/.test(r))switch(r=r.replace(/^(abyss:)(\/)*/,""),document.getElementById("adrbar").value="",r){case"newtab":document.getElementById("adrbar").placeholder=n.getConfig().defaultPlaceholder,n.getActiveTab().getTabElement().querySelectorAll(".extFrame")&&n.getActiveTab().getTabElement().querySelectorAll(".extFrame").forEach(b=>{b.remove()}),n.getActiveTab().findFirstIFrame()&&n.getActiveTab().findFirstIFrame().remove(),n.getActiveTab().getTabElement().querySelector(".mainStart").style.display="initial",n.getActiveTab().getConnectedElement().querySelector("span").innerText="New Tab";return;case"games":document.getElementById("adrbar").placeholder="Abyss Games (abyss://games)",n.getActiveTab().getTabElement().querySelectorAll(".extFrame")&&n.getActiveTab().getTabElement().querySelectorAll(".extFrame").forEach(b=>{b.remove()});var i=document.getElementById("games-temp").cloneNode(!0);i.id="",i.style.display="initial",i.querySelector(".gameCategoryButtons").querySelectorAll("button").forEach(b=>{b.addEventListener("click",()=>{var R;i.querySelector(".gameCategoryButtons").querySelectorAll("button").forEach(E=>{E.style.background="#111"}),b.style.background="#212121",b.className!="all"?(i.querySelector(".gameCategories").querySelectorAll("div").forEach(E=>{E.style.display="none"}),(R=i.querySelector(".gameCategories"))==null||R.querySelectorAll("."+b.className).forEach(E=>{E.style.display="inline-block"})):i.querySelector(".gameCategories").querySelectorAll("div").forEach(E=>{E.style.display="inline-block"})})}),n.getActiveTab().getTabElement().appendChild(i),n.getActiveTab().getConnectedElement().querySelector("span").innerText="Games";return;case"settings":document.getElementById("adrbar").placeholder="Abyss Settings (abyss://settings)",n.getActiveTab().getTabElement().querySelectorAll(".extFrame")&&n.getActiveTab().getTabElement().querySelectorAll(".extFrame").forEach(b=>{b.remove()});var p=document.getElementById("settings-temp").cloneNode(!0);p.id="",p.style.display="initial",p.querySelector("#themeSelect").removeAttribute("id"),n.getActiveTab().getTabElement().appendChild(p),n.getActiveTab().getConnectedElement().querySelector("span").innerText="Settings";return;default:n.getActiveTab().getTabElement().querySelectorAll(".extFrame")&&n.getActiveTab().getTabElement().querySelectorAll(".extFrame").forEach(b=>{b.remove()});var y=document.getElementById("invalid-temp").cloneNode(!0);y.id="",y.style.display="initial",n.getActiveTab().getTabElement().appendChild(y),n.getActiveTab().getConnectedElement().querySelector("span").innerText="Invalid";return}else n.getActiveTab().findFirstIFrame()&&n.getActiveTab().findFirstIFrame().remove()},h=()=>{};return[P]}class ce extends Jt{constructor(e){super(),jt(this,e,re,oe,qt,{})}}export{ce as component};
