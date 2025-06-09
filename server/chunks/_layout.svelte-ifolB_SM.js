import { x as push, E as store_get, F as attr_class, G as attr, I as unsubscribe_stores, z as pop, J as current_component, K as spread_attributes, M as escape_html, N as getContext, O as stringify } from './index-BIOYGULa.js';
import './client-ysh9z5eC.js';
import { g as getIconContext } from './context-CIYqVsWA.js';
import './exports-CbhJovf4.js';

function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function List($$payload, $$props) {
  push();
  const ctx = getIconContext();
  let { children, $$slots, $$events, ...props } = $$props;
  let weight = props.weight ?? ctx.weight ?? "regular";
  let color = props.color ?? ctx.color ?? "currentColor";
  let size = props.size ?? ctx.size ?? "1em";
  let mirrored = props.mirrored ?? ctx.mirrored ?? false;
  function svgAttr(obj) {
    let { weight: weight2, color: color2, size: size2, mirrored: mirrored2, ...attrs } = obj;
    return attrs;
  }
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: size,
      height: size,
      fill: color,
      transform: mirrored ? "scale(-1, 1)" : void 0,
      viewBox: "0 0 256 256",
      ...svgAttr(ctx),
      ...svgAttr(props)
    },
    null,
    void 0,
    void 0,
    3
  )}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><rect width="256" height="256" fill="none"></rect>`;
  if (weight === "bold") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M216,64V192H40V64Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Navbar($$payload, $$props) {
  push();
  var $$store_subs;
  let currentPath;
  let mobileMenuOpen = false;
  onDestroy(() => {
  });
  currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<nav class="border-sSlate-200 sticky top-0 z-50 border-b bg-white"><div class="container mx-auto px-4"><div class="flex h-16 items-center justify-between"><div class="flex items-center space-x-8"><a href="/" class="text-sSlate-800 hover:text-oOrange-500 text-xl font-bold transition-colors">ASIMOV.Directory</a> <div class="hidden items-center space-x-6 md:flex"><a href="/"${attr_class(`text-sm font-medium transition-colors ${stringify(currentPath === "/" ? "text-oOrange-500" : "text-gGray-500 hover:text-sSlate-800")}`)}>Sources</a> <a href="/modules"${attr_class(`text-sm font-medium transition-colors ${stringify(currentPath === "/modules" ? "text-oOrange-500" : "text-gGray-500 hover:text-sSlate-800")}`)}>Modules</a></div></div> <div class="md:hidden"><button type="button" class="text-gGray-500 hover:text-sSlate-800 transition-colors" aria-label="Toggle mobile menu"${attr("aria-expanded", mobileMenuOpen)}>`;
  {
    $$payload.out += "<!--[!-->";
    List($$payload, { size: 24 });
  }
  $$payload.out += `<!--]--></button></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></nav> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  Navbar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-ifolB_SM.js.map
