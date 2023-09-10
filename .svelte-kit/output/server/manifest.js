export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/games.json","assets/images/amongus.png","assets/images/logo.png","assets/news.json","assets/themes/main.css","assets/themes.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.a150cd28.js","app":"_app/immutable/entry/app.5e887439.js","imports":["_app/immutable/entry/start.a150cd28.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.72a57411.js","_app/immutable/entry/app.5e887439.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.42cf63c6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
