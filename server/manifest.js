const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BT7zS01v.js",app:"_app/immutable/entry/app.CDuW08sR.js",imports:["_app/immutable/entry/start.BT7zS01v.js","_app/immutable/chunks/CXNh630z.js","_app/immutable/chunks/MbAMBqiB.js","_app/immutable/entry/app.CDuW08sR.js","_app/immutable/chunks/MbAMBqiB.js","_app/immutable/chunks/DfV_J1m2.js","_app/immutable/chunks/BMwUlJvc.js","_app/immutable/chunks/B2b3fUC1.js","_app/immutable/chunks/DTY0XJ20.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DRtr8atn.js')),
			__memo(() => import('./chunks/1-ag2CcPe4.js')),
			__memo(() => import('./chunks/2-BmTj4HWi.js')),
			__memo(() => import('./chunks/3-BIesC114.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/modules",
				pattern: /^\/api\/modules\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D7GhPQlr.js'))
			},
			{
				id: "/modules",
				pattern: /^\/modules\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
