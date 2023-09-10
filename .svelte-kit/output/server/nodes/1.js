

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.192a5654.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.42cf63c6.js","_app/immutable/chunks/singletons.72a57411.js"];
export const stylesheets = [];
export const fonts = [];
