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
		client: {start:"_app/immutable/entry/start.Bh8bTh4W.js",app:"_app/immutable/entry/app.C9kfvbH6.js",imports:["_app/immutable/entry/start.Bh8bTh4W.js","_app/immutable/chunks/B0zyp_Kb.js","_app/immutable/chunks/MbAMBqiB.js","_app/immutable/entry/app.C9kfvbH6.js","_app/immutable/chunks/MbAMBqiB.js","_app/immutable/chunks/DfV_J1m2.js","_app/immutable/chunks/BMwUlJvc.js","_app/immutable/chunks/B2b3fUC1.js","_app/immutable/chunks/DTY0XJ20.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-6VbnM5XP.js')),
			__memo(() => import('./chunks/1-DsuY4xsj.js')),
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
				endpoint: __memo(() => import('./chunks/_server.ts-DrcbWote.js'))
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
