import { x as push, z as pop, R as fallback, S as copy_payload, T as assign_payload, U as bind_props, M as escape_html, V as ensure_array_like, G as attr, K as spread_attributes } from './index-BIOYGULa.js';
import { g as getIconContext } from './context-CIYqVsWA.js';

function X($$payload, $$props) {
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
    $$payload.out += `<path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function AmazonLogo($$payload, $$props) {
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
    $$payload.out += `<path d="M252,168v32a12,12,0,0,1-24,0v-3.09C215.56,208.41,180.25,236,128,236c-64.6,0-103.3-42.18-104.92-44A12,12,0,1,1,40.92,176c.3.33,33.48,36,87.08,36,42.65,0,72.34-22.58,82.87-32H208a12,12,0,0,1,0-24h32A12,12,0,0,1,252,168ZM156,86.08V84A32,32,0,0,0,97.17,66.55a12,12,0,0,1-20.11-13.1A56,56,0,0,1,180,84v92a12,12,0,0,1-23.85,1.81A56,56,0,1,1,156,86.08ZM156,132a32,32,0,1,0-32,32A32,32,0,0,0,156,132Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M168,132a44,44,0,1,1-44-44A44,44,0,0,1,168,132Z" opacity="0.2"></path><path d="M248,168v32a8,8,0,0,1-16,0V187.31l-2.21,2.22C226.69,192.9,189.44,232,128,232c-62.84,0-100.38-40.91-101.95-42.65A8,8,0,0,1,38,178.65C38.27,179,72.5,216,128,216s89.73-37,90.07-37.36a3.85,3.85,0,0,1,.27-.3l2.35-2.34H208a8,8,0,0,1,0-16h32A8,8,0,0,1,248,168ZM160,94.53V84A36,36,0,0,0,91.92,67.64a8,8,0,0,1-14.25-7.28A52,52,0,0,1,176,84v92a8,8,0,0,1-16,0v-6.53a52,52,0,1,1,0-74.94ZM160,132a36,36,0,1,0-36,36A36,36,0,0,0,160,132Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M152,136a24,24,0,1,1-24-24A24,24,0,0,1,152,136Zm80-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-80-24v0a40,40,0,1,0,0,64v0a8,8,0,0,0,16,0V104A40,40,0,0,0,94.13,82.71a8,8,0,0,0,13.54,8.52A24,24,0,0,1,152,104Zm44.81,65.61a8,8,0,0,0-11.2,1.58,72,72,0,0,1-115.22,0,8,8,0,1,0-12.78,9.62,88,88,0,0,0,140.78,0A8,8,0,0,0,196.81,169.61Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M246,168v32a6,6,0,0,1-12,0V182.48l-5.66,5.66C225.6,191.15,188.86,230,128,230c-62,0-98.92-40.27-100.46-42a6,6,0,1,1,8.92-8c.34.37,35.09,38,91.54,38s91.2-37.64,91.55-38l.21-.22,5.76-5.76H208a6,6,0,0,1,0-12h32A6,6,0,0,1,246,168ZM162,99.56V84A38,38,0,0,0,90.14,66.73a6,6,0,1,1-10.68-5.46A50,50,0,0,1,174,84v92a6,6,0,0,1-12,0V164.44a50,50,0,1,1,0-64.88ZM162,132a38,38,0,1,0-38,38A38,38,0,0,0,162,132Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M248,168v32a8,8,0,0,1-16,0V187.31l-2.21,2.22C226.69,192.9,189.44,232,128,232c-62.84,0-100.38-40.91-101.95-42.65A8,8,0,0,1,38,178.65C38.27,179,72.5,216,128,216s89.73-37,90.07-37.36a3.85,3.85,0,0,1,.27-.3l2.35-2.34H208a8,8,0,0,1,0-16h32A8,8,0,0,1,248,168ZM160,94.53V84A36,36,0,0,0,91.92,67.64a8,8,0,0,1-14.25-7.28A52,52,0,0,1,176,84v92a8,8,0,0,1-16,0v-6.53a52,52,0,1,1,0-74.94ZM160,132a36,36,0,1,0-36,36A36,36,0,0,0,160,132Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M244,168v32a4,4,0,0,1-8,0V177.66l-9.1,9.1C224.52,189.37,188.3,228,128,228c-61.08,0-97.45-39.64-99-41.32A4,4,0,0,1,35,181.32c.35.39,35.63,38.68,93,38.68s92.68-38.29,93-38.68l.14-.15,9.17-9.17H208a4,4,0,0,1,0-8h32A4,4,0,0,1,244,168Zm-80-62.49V84A40,40,0,0,0,88.36,65.82a4,4,0,1,1-7.12-3.64A48,48,0,0,1,172,84v92a4,4,0,0,1-8,0V158.49a48,48,0,1,1,0-53ZM164,132a40,40,0,1,0-40,40A40,40,0,0,0,164,132Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Briefcase($$payload, $$props) {
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
    $$payload.out += `<path d="M100,100a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,100ZM236,68V196a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V68A20,20,0,0,1,40,48H76V40a28,28,0,0,1,28-28h48a28,28,0,0,1,28,28v8h36A20,20,0,0,1,236,68ZM100,48h56V40a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4ZM44,72v35.23A180.06,180.06,0,0,0,128,128a180,180,0,0,0,84-20.78V72ZM212,192V133.94A204.27,204.27,0,0,1,128,152a204.21,204.21,0,0,1-84-18.06V192Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M224,118.31V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V118.31h0A191.14,191.14,0,0,0,128,144,191.08,191.08,0,0,0,224,118.31Z" opacity="0.2"></path><path d="M104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112ZM232,72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8ZM40,72v41.62A184.07,184.07,0,0,0,128,136a184,184,0,0,0,88-22.39V72ZM216,200V131.63A200.25,200.25,0,0,1,128,152a200.19,200.19,0,0,1-88-20.36V200H216Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M106,112a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,112ZM230,72V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72A14,14,0,0,1,40,58H82V48a22,22,0,0,1,22-22h48a22,22,0,0,1,22,22V58h42A14,14,0,0,1,230,72ZM94,58h68V48a10,10,0,0,0-10-10H104A10,10,0,0,0,94,48ZM38,72v42.79A186,186,0,0,0,128,138a185.91,185.91,0,0,0,90-23.22V72a2,2,0,0,0-2-2H40A2,2,0,0,0,38,72ZM218,200V128.37A198.12,198.12,0,0,1,128,150a198.05,198.05,0,0,1-90-21.62V200a2,2,0,0,0,2,2H216A2,2,0,0,0,218,200Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M108,112a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,112ZM228,72V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V72A12,12,0,0,1,40,60H84V48a20,20,0,0,1,20-20h48a20,20,0,0,1,20,20V60h44A12,12,0,0,1,228,72ZM92,60h72V48a12,12,0,0,0-12-12H104A12,12,0,0,0,92,48ZM36,72v44a188,188,0,0,0,92,24,188,188,0,0,0,92-24V72a4,4,0,0,0-4-4H40A4,4,0,0,0,36,72ZM220,200V125.1A196.06,196.06,0,0,1,128,148a196,196,0,0,1-92-22.9V200a4,4,0,0,0,4,4H216A4,4,0,0,0,220,200Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function ChartLineUp($$payload, $$props) {
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
    $$payload.out += `<path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0v99l43.51-43.52a12,12,0,0,1,17,0L128,127l43-43H160a12,12,0,0,1,0-24h40a12,12,0,0,1,12,12v40a12,12,0,0,1-24,0V101l-51.51,51.52a12,12,0,0,1-17,0L96,129,44,181v15H224A12,12,0,0,1,236,208Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M224,64V208H32V48H208A16,16,0,0,1,224,64Z" opacity="0.2"></path><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v76.69l34.34-34.35a8,8,0,0,1,11.32,0L128,132.69,172.69,88H144a8,8,0,0,1,0-16h48a8,8,0,0,1,8,8v48a8,8,0,0,1-16,0V99.31l-50.34,50.35a8,8,0,0,1-11.32,0L104,131.31l-40,40V176H200a8,8,0,0,1,0,16Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V161.52l53.76-53.76a6,6,0,0,1,8.48,0L128,135.51,185.52,78H160a6,6,0,0,1,0-12h40a6,6,0,0,1,6,6v40a6,6,0,0,1-12,0V86.48l-61.76,61.76a6,6,0,0,1-8.48,0L96,120.49l-58,58V202H224A6,6,0,0,1,230,208Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V166.34l57.17-57.17a4,4,0,0,1,5.66,0L128,138.34,190.34,76H160a4,4,0,0,1,0-8h40a4,4,0,0,1,4,4v40a4,4,0,0,1-8,0V81.66l-65.17,65.17a4,4,0,0,1-5.66,0L96,117.66l-60,60V204H224A4,4,0,0,1,228,208Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Check($$payload, $$props) {
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
    $$payload.out += `<path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z" opacity="0.2"></path><path d="M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Copy($$payload, $$props) {
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
    $$payload.out += `<path d="M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M216,40V168H168V88H88V40Z" opacity="0.2"></path><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function FacebookLogo($$payload, $$props) {
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
    $$payload.out += `<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function FileJs($$payload, $$props) {
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
    $$payload.out += `<path d="M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H180a12,12,0,0,0,0,24h20a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160Zm-4.22,139.85a24.75,24.75,0,0,1-10.95,18.06c-6,4-13.27,5.15-19.73,5.15a63.75,63.75,0,0,1-16.23-2.21,12,12,0,0,1,6.46-23.12c6.81,1.86,15,1.61,16.39.06a2.48,2.48,0,0,0,.21-.71c-1.94-1.23-6.83-2.64-9.88-3.52-5.39-1.56-11-3.18-15.75-6.27-7.62-4.92-11.21-12.45-10.11-21.2a24.45,24.45,0,0,1,10.69-17.75c6.06-4.09,14.17-5.84,24.1-5.18A68.53,68.53,0,0,1,143,142a12,12,0,0,1-6.1,23.21c-6.36-1.63-13.62-1.51-16.07-.33a79.5,79.5,0,0,0,7.91,2.59c5.48,1.58,11.68,3.37,16.8,6.82C153.33,179.55,157,187.55,155.78,196.82ZM84,152v38a30,30,0,0,1-60,0,12,12,0,0,1,24,0,6,6,0,0,0,12,0V152a12,12,0,0,1,24,0Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Zm-12.19,145a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A61.14,61.14,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM80,152v38a26,26,0,0,1-52,0,8,8,0,0,1,16,0,10,10,0,0,0,20,0V152a8,8,0,0,1,16,0Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H164a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h28a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.58,20.58,0,0,1,9-14.95c11.85-8,30.72-3.31,32.84-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57,4.57,0,0,0-2,3.67c-.11.9-.13,1.09,1.12,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150,179,147.81,196.31ZM80,152v37.41c0,14.22-11.18,26.26-25.41,26.58A26,26,0,0,1,28,190.37,8.17,8.17,0,0,1,35.31,182,8,8,0,0,1,44,190.22a8.89,8.89,0,0,0,4,8c7.85,4.82,16-.75,16-8.2V152.27A8.17,8.17,0,0,1,71.47,144,8,8,0,0,1,80,152Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2H176a6,6,0,0,0,0,12h24a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM145.83,196.06a18.89,18.89,0,0,1-8.31,13.81c-4.82,3.19-10.87,4.14-16.36,4.14a58.89,58.89,0,0,1-14.68-2,6,6,0,0,1,3.23-11.56c3.71,1,15.58,3.11,21.19-.62a6.85,6.85,0,0,0,3-5.34c.58-4.43-2.08-6.26-14.2-9.76-9.31-2.69-23.37-6.75-21.57-20.94a18.61,18.61,0,0,1,8.08-13.54c11.11-7.49,29.18-3,31.21-2.48a6,6,0,0,1-3.06,11.6c-3.78-1-15.85-3-21.45.84a6.59,6.59,0,0,0-2.88,5.08c-.41,3.22,2.14,4.78,13,7.91C132.92,176.09,147.84,180.4,145.83,196.06ZM78,152v38a24,24,0,0,1-48,0,6,6,0,0,1,12,0,12,12,0,0,0,24,0V152a6,6,0,0,1,12,0Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Zm-12.19,145a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM80,152v38a26,26,0,0,1-52,0,8,8,0,0,1,16,0,10,10,0,0,0,20,0V152a8,8,0,0,1,16,0Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H176a4,4,0,0,0,0,8h24a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM143.84,195.8a17,17,0,0,1-7.43,12.41c-4.39,2.91-10,3.77-15.22,3.77A57.89,57.89,0,0,1,107,210.11a4,4,0,0,1,2.15-7.7c4.22,1.17,16.56,3.29,22.83-.88a8.94,8.94,0,0,0,3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94-9.68-2.8-21.72-6.28-20.14-18.77a16.66,16.66,0,0,1,7.22-12.13c4.56-3.07,11-4.36,19.1-3.82a61.33,61.33,0,0,1,10.48,1.61,4,4,0,0,1-2.05,7.74c-4.29-1.13-16.81-3.12-23.06,1.11a8.51,8.51,0,0,0-3.75,6.49c-.66,5.17,3.89,7,14.42,10.08C132.26,178,145.64,181.84,143.84,195.8ZM76,152v38a22,22,0,0,1-44,0,4,4,0,0,1,8,0,14,14,0,0,0,28,0V152a4,4,0,0,1,8,0Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Globe($$payload, $$props) {
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
    $$payload.out += `<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm78.36,64H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM216,128a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM128,43a115.27,115.27,0,0,1,26,45H102A115.11,115.11,0,0,1,128,43ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48Zm50.35,61.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54C151,194.2,134.33,212.52,128,218.61ZM94.82,156a140.42,140.42,0,0,1,0-56h66.36a140.42,140.42,0,0,1,0,56ZM128,37.39c6.33,6.09,23,24.41,31.27,54.61H96.73C105,61.8,121.67,43.48,128,37.39ZM169.41,100h46.23a92.09,92.09,0,0,1,0,56H169.41a152.65,152.65,0,0,0,0-56Zm43.25-8h-45a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92ZM117.54,36.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6ZM40.36,100H86.59a152.65,152.65,0,0,0,0,56H40.36a92.09,92.09,0,0,1,0-56Zm3,64h45a129.39,129.39,0,0,0,29.19,55.4A92.25,92.25,0,0,1,43.34,164Zm95.12,55.4A129.39,129.39,0,0,0,167.65,164h45A92.25,92.25,0,0,1,138.46,219.4Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function GoogleLogo($$payload, $$props) {
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
    $$payload.out += `<path d="M228,128a100,100,0,1,1-22.86-63.64,12,12,0,0,1-18.51,15.28A76,76,0,1,0,203.05,140H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"></path><path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,184A80,80,0,1,1,181.34,68.37a8,8,0,0,1-10.67,11.92A64,64,0,1,0,191.5,136H128a8,8,0,0,1,0-16h72a8,8,0,0,1,8,8A80.09,80.09,0,0,1,128,208Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M222,128a94,94,0,1,1-21.49-59.82,6,6,0,1,1-9.25,7.64A82,82,0,1,0,209.78,134H128a6,6,0,0,1,0-12h88A6,6,0,0,1,222,128Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M220,128a92,92,0,1,1-21-58.55,4,4,0,0,1-6.17,5.1A84,84,0,1,0,211.91,132H128a4,4,0,0,1,0-8h88A4,4,0,0,1,220,128Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function GraphicsCard($$payload, $$props) {
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
    $$payload.out += `<path d="M232,44H16A12,12,0,0,0,4,56V208a12,12,0,0,0,24,0V196H44v12a12,12,0,0,0,24,0V196H84v12a12,12,0,0,0,24,0V196h16v12a12,12,0,0,0,24,0V196h84a20,20,0,0,0,20-20V64A20,20,0,0,0,232,44Zm-4,128H28V68H228Zm-52-12a40,40,0,1,0-40-40A40,40,0,0,0,176,160Zm0-56a16,16,0,1,1-16,16A16,16,0,0,1,176,104ZM80,160a40,40,0,1,0-40-40A40,40,0,0,0,80,160Zm0-56a16,16,0,1,1-16,16A16,16,0,0,1,80,104Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M232,56H16V184H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56ZM80,152a32,32,0,1,1,32-32A32,32,0,0,1,80,152Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,176,152Z" opacity="0.2"></path><path d="M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm0,128H24V64H232Zm-56-16a40,40,0,1,0-40-40A40,40,0,0,0,176,160Zm-24-40a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,176,144,24,24,0,0,1,152,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,176,96,24,24,0,0,1,200,120ZM80,160a40,40,0,1,0-40-40A40,40,0,0,0,80,160ZM56,120a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,80,144,24,24,0,0,1,56,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,80,96,24,24,0,0,1,104,120Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm-20,72a35.81,35.81,0,0,1-5.53,19.16L156.84,89.53A36,36,0,0,1,212,120Zm-96,0a35.81,35.81,0,0,1-5.53,19.16L60.84,89.53A36,36,0,0,1,116,120ZM80,156a36,36,0,0,1-30.47-55.16l49.63,49.63A35.81,35.81,0,0,1,80,156Zm60-36a35.81,35.81,0,0,1,5.53-19.16l49.63,49.63A36,36,0,0,1,140,120Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M232,50H16a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V190H42v18a6,6,0,0,0,12,0V190H74v18a6,6,0,0,0,12,0V190h20v18a6,6,0,0,0,12,0V190H232a14,14,0,0,0,14-14V64A14,14,0,0,0,232,50Zm2,126a2,2,0,0,1-2,2H22V62H232a2,2,0,0,1,2,2ZM176,82a38,38,0,1,0,38,38A38,38,0,0,0,176,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L162.36,97.88A26,26,0,0,1,202,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,150,120ZM80,82a38,38,0,1,0,38,38A38,38,0,0,0,80,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L66.36,97.88A26,26,0,0,1,106,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,54,120Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm0,128H24V64H232Zm-56-16a40,40,0,1,0-40-40A40,40,0,0,0,176,160Zm-24-40a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,176,144,24,24,0,0,1,152,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,176,96,24,24,0,0,1,200,120ZM80,160a40,40,0,1,0-40-40A40,40,0,0,0,80,160ZM56,120a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,80,144,24,24,0,0,1,56,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,80,96,24,24,0,0,1,104,120Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M232,52H16a4,4,0,0,0-4,4V208a4,4,0,0,0,8,0V188H44v20a4,4,0,0,0,8,0V188H76v20a4,4,0,0,0,8,0V188h24v20a4,4,0,0,0,8,0V188H232a12,12,0,0,0,12-12V64A12,12,0,0,0,232,52Zm4,124a4,4,0,0,1-4,4H20V60H232a4,4,0,0,1,4,4ZM176,84a36,36,0,1,0,36,36A36,36,0,0,0,176,84Zm-28,36a27.89,27.89,0,0,1,5.58-16.76l39.18,39.18A28,28,0,0,1,148,120Zm50.42,16.76L159.24,97.58a28,28,0,0,1,39.18,39.18ZM80,84a36,36,0,1,0,36,36A36,36,0,0,0,80,84ZM52,120a27.89,27.89,0,0,1,5.58-16.76l39.18,39.18A28,28,0,0,1,52,120Zm50.42,16.76L63.24,97.58a28,28,0,0,1,39.18,39.18Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function House($$payload, $$props) {
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
    $$payload.out += `<path d="M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"></path><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function InstagramLogo($$payload, $$props) {
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
    $$payload.out += `<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function LinkedinLogo($$payload, $$props) {
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
    $$payload.out += `<path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z" opacity="0.2"></path><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function MagnifyingGlass($$payload, $$props) {
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
    $$payload.out += `<path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2"></path><path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Rocket($$payload, $$props) {
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
    $$payload.out += `<path d="M156,228a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,228ZM128,116a16,16,0,1,0-16-16A16,16,0,0,0,128,116Zm99.53,40.7-12.36,55.63a19.9,19.9,0,0,1-12.88,14.53A20.16,20.16,0,0,1,195.6,228a19.87,19.87,0,0,1-12.29-4.27L157.17,204H98.83L72.69,223.74A19.87,19.87,0,0,1,60.4,228a20.16,20.16,0,0,1-6.69-1.15,19.9,19.9,0,0,1-12.88-14.53L28.47,156.7a20.1,20.1,0,0,1,4.16-17.14l27.83-33.4A127,127,0,0,1,69.11,69.7c13.27-33.25,37-54.1,46.64-61.52a20,20,0,0,1,24.5,0c9.6,7.42,33.37,28.27,46.64,61.52a127,127,0,0,1,8.65,36.46l27.83,33.4A20.1,20.1,0,0,1,227.53,156.7ZM101.79,180h52.42c19.51-35.7,23-69.78,10.39-101.4C154.4,53,136.2,35.9,128,29.12,119.8,35.9,101.6,53,91.4,78.6,78.78,110.22,82.28,144.3,101.79,180Zm-22.55,8.72a168,168,0,0,1-16.92-47.3l-10,12,10.58,47.64Zm124.43-35.31-10-12a168,168,0,0,1-16.92,47.3l16.33,12.33Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z" opacity="0.2"></path><path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224Zm71.62-68.17-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83Zm-139.23,34Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM140,100a12,12,0,1,0-12,12A12,12,0,0,0,140,100Zm68,52.36-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M150,224a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,224ZM128,110a10,10,0,1,0-10-10A10,10,0,0,0,128,110Zm93.67,45.4L209.31,211A14,14,0,0,1,187,219l-27.79-21H96.82L69,219a14,14,0,0,1-22.34-8L34.33,155.4a14.06,14.06,0,0,1,2.91-12l29-34.76a121.28,121.28,0,0,1,8.48-36.71c12.72-31.88,35.52-51.88,44.73-59a14,14,0,0,1,17.16,0c9.21,7.12,32,27.12,44.73,59a121.28,121.28,0,0,1,8.48,36.71l29,34.76A14.06,14.06,0,0,1,221.67,155.4ZM98.26,186h59.48c21.93-38.46,26.12-75.33,12.43-109.62-11.95-30-34.35-48.87-40.93-54a2,2,0,0,0-2.48,0c-6.58,5.09-29,24-40.93,54C72.14,110.67,76.33,147.54,98.26,186ZM87,190.4c-12-21.49-18.9-42.6-20.62-63.19L46.46,151.08a2,2,0,0,0-.42,1.71l12.37,55.64a2,2,0,0,0,3.2,1.13l.13-.11Zm122.57-39.32-19.89-23.87c-1.72,20.59-8.6,41.7-20.62,63.19l25.23,19,.13.11a2,2,0,0,0,3.2-1.13L210,152.79A2,2,0,0,0,209.54,151.08Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M148,224a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,224ZM128,108a8,8,0,1,0-8-8A8,8,0,0,0,128,108Zm91.72,47L207.35,210.6a11.9,11.9,0,0,1-7.72,8.71,12.17,12.17,0,0,1-4,.69,11.94,11.94,0,0,1-7.43-2.6L159.85,196H96.15L67.81,217.4a11.94,11.94,0,0,1-7.43,2.6,12.17,12.17,0,0,1-4-.69,11.9,11.9,0,0,1-7.72-8.71L36.28,155a12,12,0,0,1,2.5-10.28l29.35-35.23c3.3-53.33,41.83-86.68,52.52-94.94a12,12,0,0,1,14.7,0c10.69,8.26,49.22,41.61,52.52,94.94l29.35,35.23A12,12,0,0,1,219.72,155ZM97.11,188h61.78C214.07,92.49,145,32.05,130.46,20.84a4,4,0,0,0-4.92,0C111,32.05,41.93,92.49,97.11,188Zm-7.52,2.93C75.12,165.56,68.93,142.52,68,122.06L44.92,149.8a4,4,0,0,0-.83,3.43l12.36,55.63a4,4,0,0,0,6.41,2.26l.09-.07ZM211.08,149.8,188,122.06c-.89,20.46-7.08,43.5-21.55,68.87l26.64,20.12.09.07a4,4,0,0,0,6.41-2.26l12.36-55.63A4,4,0,0,0,211.08,149.8Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function ShoppingBag($$payload, $$props) {
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
    $$payload.out += `<path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM76,88a12,12,0,0,1,24,0,28,28,0,0,0,56,0,12,12,0,0,1,24,0A52,52,0,0,1,76,88Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-88,96A48.05,48.05,0,0,1,80,88a8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0A48.05,48.05,0,0,1,128,136Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM174,88a46,46,0,0,1-92,0,6,6,0,0,1,12,0,34,34,0,0,0,68,0,6,6,0,0,1,12,0Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM172,88a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function TwitterLogo($$payload, $$props) {
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
    $$payload.out += `<path d="M251.09,67.41A12,12,0,0,0,240,60H211.82a52.73,52.73,0,0,0-43.67-24,50.85,50.85,0,0,0-36.6,14.85A51.87,51.87,0,0,0,116,88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12,12,0,0,0-20.47,7.38C22.52,125.1,53.48,162.72,70.89,178.05,56.4,192.83,36,200.68,35.8,200.76A12,12,0,0,0,30,218.66C32,221.55,43.44,236,80,236c72.25,0,132.7-55.26,139.6-126.63l28.88-28.88A12,12,0,0,0,251.09,67.41ZM199.52,95.52a11.93,11.93,0,0,0-3.49,7.72C192.14,164.23,141.18,212,80,212a90.78,90.78,0,0,1-12.49-.79C78,204.55,89.72,195.07,98,182.66a12,12,0,0,0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37,94.4,96,110.79,126,115.84A12,12,0,0,0,140,104V88a28,28,0,0,1,8.41-20.07A27.07,27.07,0,0,1,167.86,60a28.83,28.83,0,0,1,25.82,16.81,12,12,0,0,0,11,7.19H211Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M240,72l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12s32-12,48-36c0,0-55.15-32-47.22-120,0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24Z" opacity="0.2"></path><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.65,48.65,0,0,0,168.1,40a46.87,46.87,0,0,0-33.74,13.7A47.87,47.87,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.3,47.79,9.57,79.77,22,98.18a110.92,110.92,0,0,0,21.89,24.2C61.43,195.2,37.45,204.41,37.2,204.51a8,8,0,0,0-3.85,11.93c.74,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.68,0,129.72-54.42,135.76-124.44l29.9-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.52-6.25,27.56-17,37.88-32.48a8,8,0,0,0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54,124.11,48,100.38,48,73.09c16,13,45.25,33.18,78.69,38.8A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.89,30.89,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M245.54,69.71A6,6,0,0,0,240,66H208.4a46.6,46.6,0,0,0-40.33-24,44.93,44.93,0,0,0-32.31,13.12A45.92,45.92,0,0,0,122,88v8.66c-42-10-76.6-44.52-77-44.88A6,6,0,0,0,34.8,55.46c-4.25,47.22,9.42,78.75,21.64,96.89a107.71,107.71,0,0,0,23.07,25c-15.49,19-41.34,28.89-41.62,29a6,6,0,0,0-2.88,9C36,216.83,45.78,230,80,230c69.88,0,128.23-54,133.82-123.34l30.42-30.41A6,6,0,0,0,245.54,69.71ZM203.76,99.76a6,6,0,0,0-1.75,3.86C197.93,167.76,144.33,218,80,218c-14,0-22.76-2.41-28.06-4.8,11.3-5.68,29.72-16.88,41.05-33.87a6,6,0,0,0,.85-4.67A6,6,0,0,0,91,170.82c-.13-.08-13.13-7.86-25-25.72C52,124,45.31,98.43,46,68.88c14.88,12.6,45.57,35.09,81,41a6,6,0,0,0,7-5.92V88a34,34,0,0,1,10.19-24.34A33.05,33.05,0,0,1,167.93,54c13.43.17,26,8.37,31.24,20.4a6,6,0,0,0,5.5,3.6h20.84Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M243.7,70.47A4,4,0,0,0,240,68H207.2a44.57,44.57,0,0,0-39.15-24,42.76,42.76,0,0,0-30.88,12.55A43.85,43.85,0,0,0,124,88V99.16c-43.65-9.39-80-45.6-80.39-46a4,4,0,0,0-4.19-.95,4,4,0,0,0-2.63,3.41c-4.2,46.62,9.27,77.71,21.31,95.59A103.68,103.68,0,0,0,82.35,177c-15.68,20.49-43.46,31.13-43.75,31.24a4,4,0,0,0-1.93,6c.27.4,2.79,4,9.54,7.36C54.73,225.84,66.1,228,80,228c69.09,0,126.73-53.56,131.89-122.23l30.94-30.94A4,4,0,0,0,243.7,70.47Zm-38.53,30.7a4,4,0,0,0-1.16,2.58C199.85,168.94,145.38,220,80,220c-17.85,0-27.63-3.89-32.5-6.87,10.37-4.82,31.45-16.34,43.83-34.91a4,4,0,0,0,.56-3.12A3.93,3.93,0,0,0,90,172.55c-.13-.08-13.39-8-25.52-26.15C54,130.71,42.39,104.11,44.19,64.65c13.17,11.62,45.48,37,83.15,43.3a4,4,0,0,0,4.66-4V88a36,36,0,0,1,10.79-25.76A35,35,0,0,1,168,52c14.2.18,27.49,8.86,33.06,21.61A4,4,0,0,0,204.67,76h25.67Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function YoutubeLogo($$payload, $$props) {
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
    $$payload.out += `<path d="M170.49,117.91l-56-36A12,12,0,0,0,96,92v72a12,12,0,0,0,18.49,10.09l56-36a12,12,0,0,0,0-20.18ZM120,142V114l21.81,14Zm118.21-73.5a28.05,28.05,0,0,0-16.93-19.14C186.4,35.91,131.29,36,128,36s-58.4-.09-93.28,13.38A28.05,28.05,0,0,0,17.79,68.52C15.15,78.72,12,97.32,12,128s3.15,49.28,5.79,59.48a28.05,28.05,0,0,0,16.93,19.14C68.21,219.55,120.36,220,127.37,220h1.26c7,0,59.16-.45,92.65-13.38a28.05,28.05,0,0,0,16.93-19.14c2.64-10.2,5.79-28.8,5.79-59.48S240.85,78.72,238.21,68.52ZM215,181.46a4,4,0,0,1-2.34,2.77C182.78,195.76,132.27,196,128.32,196h-.39c-.53,0-53.64.17-84.56-11.77A4,4,0,0,1,41,181.46c-1.88-7.24-5-23.82-5-53.46s3.15-46.22,5-53.46a4,4,0,0,1,2.34-2.77C74.29,59.83,127.39,60,127.92,60h.15c.54,0,53.64-.17,84.56,11.77A4,4,0,0,1,215,74.54c1.88,7.24,5,23.82,5,53.46S216.85,174.22,215,181.46Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z" opacity="0.2"></path><path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M163.33,123l-48-32A6,6,0,0,0,106,96v64a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM118,148.79V107.21L149.18,128ZM232.4,70a22,22,0,0,0-13.28-15C185,41.79,130.27,42,128,42s-57-.21-91.16,13A22,22,0,0,0,23.6,70C21.05,79.89,18,98,18,128s3.05,48.11,5.6,58a22,22,0,0,0,13.28,15C71,214.21,125.72,214,128,214h.71c6.91,0,58-.44,90.45-13a22,22,0,0,0,13.28-15c2.55-9.87,5.6-27.93,5.6-58S235,79.89,232.4,70ZM220.78,183a10,10,0,0,1-6,6.86C182.78,202.19,128.58,202,128,202s-54.71.2-86.75-12.17a10,10,0,0,1-6-6.86C32.84,173.78,30,156.78,30,128s2.84-45.78,5.22-55a10,10,0,0,1,6-6.86C72.06,54.26,123.53,54,127.76,54H128c.54,0,54.71-.2,86.75,12.17a10,10,0,0,1,6,6.86c2.38,9.19,5.22,26.19,5.22,55S223.16,173.78,220.78,183Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M162.22,124.67l-48-32A4,4,0,0,0,108,96v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM116,152.53V103.47L152.79,128Zm114.46-82A20,20,0,0,0,218.4,56.85C184.6,43.79,130.27,44,128,44S71.4,43.79,37.6,56.85A20,20,0,0,0,25.54,70.52C23,80.27,20,98.16,20,128s3,47.73,5.54,57.48A20,20,0,0,0,37.6,199.15C71.4,212.21,125.73,212,128,212h.71c6.89,0,57.58-.43,89.72-12.85a20,20,0,0,0,12.06-13.67C233,175.72,236,157.84,236,128S233,80.27,230.46,70.52Zm-7.74,113a12,12,0,0,1-7.21,8.22C183.14,204.19,128.57,204,128,204s-55.11.19-87.48-12.31a12,12,0,0,1-7.21-8.22C30.87,174.17,28,157,28,128s2.87-46.17,5.28-55.47a12,12,0,0,1,7.21-8.22C72.86,51.81,127.43,52,128,52s55.11-.2,87.48,12.31a12,12,0,0,1,7.21,8.22C225.13,81.83,228,99,228,128S225.13,174.17,222.72,183.47Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function SourceCard($$payload, $$props) {
  push();
  let IconComponent, hasRdf, hasJson, firstSource, displayedSources, hasMore;
  let sources = fallback($$props["sources"], () => [], true);
  let dataset = $$props["dataset"];
  let copiedStates = {};
  function getSourceIcon(dataset2) {
    const iconComponents = {
      Airbnb: House,
      Amazon: AmazonLogo,
      Facebook: FacebookLogo,
      Instagram: InstagramLogo,
      LinkedIn: LinkedinLogo,
      "X (Twitter)": TwitterLogo,
      YouTube: YoutubeLogo,
      Google: GoogleLogo,
      Indeed: Briefcase,
      eBay: ShoppingBag,
      Crunchbase: Rocket,
      Walmart: ShoppingBag,
      Yahoo: ChartLineUp
    };
    return iconComponents[dataset2] || Globe;
  }
  function getDomainFromUrl(url) {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  }
  IconComponent = getSourceIcon(dataset);
  hasRdf = sources.some((s) => s.rdf);
  hasJson = sources.some((s) => s.json);
  firstSource = sources[0];
  displayedSources = sources.slice(0, 2);
  hasMore = sources.length > 2;
  if (sources.length > 0 && firstSource) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(displayedSources);
    $$payload.out += `<div class="group border-sSlate-200 hover:border-sSlate-300 relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:shadow-md"><div class="p-6 pb-4"><div class="mb-3 flex items-start justify-between"><div class="flex items-center space-x-3"><div class="from-sSlate-100 to-sSlate-200 text-sSlate-700 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br"><!---->`;
    IconComponent?.($$payload, { size: 24 });
    $$payload.out += `<!----></div> <div><h3 class="text-sSlate-900 group-hover:text-oOrange-600 font-semibold transition-colors">${escape_html(dataset)}</h3> <p class="text-gGray-500 text-sm">${escape_html(getDomainFromUrl(firstSource.url_prefix))}</p></div></div> <div class="flex items-center space-x-4"><div class="flex items-center space-x-2">`;
    if (hasJson) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">`;
      FileJs($$payload, { size: 14 });
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (hasRdf) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-purple-600">`;
      GraphicsCard($$payload, { size: 14 });
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="text-right"><div class="text-sSlate-800 text-lg font-bold">${escape_html(sources.length)}</div> <div class="text-gGray-400 -mt-1 text-xs">endpoint${escape_html(sources.length !== 1 ? "s" : "")}</div></div></div></div> <div class="mb-4 flex items-center justify-between"><div class="flex items-center space-x-2"><div class="h-2 w-2 rounded-full bg-green-500"></div> <span class="text-gGray-500 text-xs">Live endpoints</span></div> `;
    if (hasMore && true) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="text-oOrange-500 hover:text-oOrange-600 text-xs font-medium transition-colors">View all ${escape_html(sources.length)}</button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div> <div class="px-6 pb-6"><div class="space-y-1"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let source = each_array[index];
      $$payload.out += `<div class="group/endpoint border-sSlate-100 bg-sSlate-50/50 hover:border-sSlate-200 relative flex items-center rounded-lg border p-3 transition-all hover:bg-white hover:shadow-sm"><div class="mr-3 min-w-0 flex-1"><code class="text-sSlate-700 block truncate font-mono text-sm">${escape_html(source.url_prefix)}</code></div> <div class="flex items-center space-x-2"><div class="flex items-center space-x-1">`;
      if (source.json) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="h-1.5 w-1.5 rounded-full bg-blue-500" title="JSON"></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (source.rdf) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="h-1.5 w-1.5 rounded-full bg-purple-500" title="RDF"></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div> <button class="border-sSlate-200 text-gGray-500 hover:text-sSlate-700 hover:border-sSlate-300 flex h-8 w-8 items-center justify-center rounded-lg border bg-white opacity-0 transition-all group-hover/endpoint:opacity-100" title="Copy endpoint">`;
      if (copiedStates[`${dataset}-${index}`]) {
        $$payload.out += "<!--[-->";
        Check($$payload, { size: 14, class: "text-green-600" });
      } else {
        $$payload.out += "<!--[!-->";
        Copy($$payload, { size: 14 });
      }
      $$payload.out += `<!--]--></button></div></div>`;
    }
    $$payload.out += `<!--]--> `;
    if (hasMore && true) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex items-center justify-center py-2"><div class="text-gGray-400 flex items-center space-x-2"><div class="bg-gGray-300 h-1 w-1 rounded-full"></div> <div class="bg-gGray-300 h-1 w-1 rounded-full"></div> <div class="bg-gGray-300 h-1 w-1 rounded-full"></div> <span class="text-xs">+${escape_html(sources.length - 2)} more</span></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { sources, dataset });
  pop();
}
function SearchBar($$payload, $$props) {
  let value = fallback($$props["value"], "");
  let placeholder = fallback($$props["placeholder"], "Search data sources...");
  $$payload.out += `<div class="relative"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">`;
  MagnifyingGlass($$payload, { class: "text-gGray-400 h-4 w-4" });
  $$payload.out += `<!----></div> <input${attr("value", value)} type="text"${attr("placeholder", placeholder)} class="border-sSlate-200 focus:ring-oOrange-500 focus:border-oOrange-500 text-sSlate-800 placeholder-gGray-400 block w-full rounded-lg border bg-white py-3 pr-10 pl-10 transition-colors focus:ring-2"/> `;
  if (value) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button aria-label="Clear search" class="text-gGray-400 hover:text-sSlate-600 absolute inset-y-0 right-0 flex items-center pr-3 transition-colors">`;
    X($$payload, { class: "h-4 w-4" });
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { value, placeholder });
}
function SourcesGrid($$payload, $$props) {
  push();
  let groupedSources, filteredGroups, totalSources, totalEndpoints;
  let sources = fallback($$props["sources"], () => [], true);
  let loading = fallback($$props["loading"], false);
  let error = fallback($$props["error"], null);
  let searchQuery = "";
  groupedSources = sources.reduce(
    (acc, source) => {
      if (!acc[source.dataset]) {
        acc[source.dataset] = [];
      }
      acc[source.dataset].push(source);
      return acc;
    },
    {}
  );
  filteredGroups = Object.entries(groupedSources).filter(([dataset, sources2]) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return dataset.toLowerCase().includes(query) || sources2.some((source) => source.url_prefix.toLowerCase().includes(query) || source.dataset.toLowerCase().includes(query));
  });
  totalSources = filteredGroups.length;
  totalEndpoints = filteredGroups.reduce((sum, [, sources2]) => sum + sources2.length, 0);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="w-full space-y-6"><div class="max-w-md">`;
    SearchBar($$payload2, {
      placeholder: "Search data sources and endpoints...",
      get value() {
        return searchQuery;
      },
      set value($$value) {
        searchQuery = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    if (!loading && !error) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex items-center justify-between"><div class="text-gGray-500 text-sm">`;
      if (searchQuery) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `Found <span class="text-sSlate-800 font-medium">${escape_html(totalSources)}</span> sources with <span class="text-sSlate-800 font-medium">${escape_html(totalEndpoints)}</span> endpoints`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `Showing <span class="text-sSlate-800 font-medium">${escape_html(totalSources)}</span> sources with <span class="text-sSlate-800 font-medium">${escape_html(totalEndpoints)}</span> endpoints`;
      }
      $$payload2.out += `<!--]--></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (error) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="rounded-lg border border-red-200 bg-red-50 p-6 text-center"><p class="mb-2 font-medium text-red-600">Failed to load data sources</p> <p class="text-sm text-red-500">${escape_html(error)}</p></div>`;
    } else if (loading) {
      $$payload2.out += "<!--[1-->";
      const each_array = ensure_array_like([...Array(12).keys()]);
      $$payload2.out += `<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        each_array[$$index];
        $$payload2.out += `<div class="border-sSlate-200 overflow-hidden rounded-lg border bg-white p-6 shadow-sm"><div class="mb-4 flex items-start justify-between"><div class="flex items-center space-x-3"><div class="bg-gGray-100 h-10 w-10 animate-pulse rounded-lg"></div> <div><div class="bg-gGray-100 mb-1 h-4 w-24 animate-pulse rounded"></div> <div class="bg-gGray-100 h-3 w-16 animate-pulse rounded"></div></div></div> <div class="bg-gGray-100 h-4 w-8 animate-pulse rounded"></div></div> <div class="bg-gGray-100 mb-4 h-3 w-full animate-pulse rounded"></div> <div class="flex items-center justify-between"><div class="flex space-x-3"><div class="bg-gGray-100 h-3 w-12 animate-pulse rounded"></div> <div class="bg-gGray-100 h-3 w-12 animate-pulse rounded"></div></div> <div class="bg-gGray-100 h-3 w-8 animate-pulse rounded"></div></div></div>`;
      }
      $$payload2.out += `<!--]--></div>`;
    } else if (filteredGroups.length === 0) {
      $$payload2.out += "<!--[2-->";
      $$payload2.out += `<div class="border-sSlate-200 bg-sSlate-100 rounded-lg border p-12 text-center">`;
      if (searchQuery) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<p class="text-sSlate-600 mb-2 font-medium">No sources found</p> <p class="text-sSlate-400 text-sm">Try adjusting your search terms</p>`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `<p class="text-sSlate-600 mb-2 font-medium">No data sources found</p> <p class="text-sSlate-400 text-sm">Check back later for available sources</p>`;
      }
      $$payload2.out += `<!--]--></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      const each_array_1 = ensure_array_like(filteredGroups);
      $$payload2.out += `<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let [dataset, sources2] = each_array_1[$$index_1];
        SourceCard($$payload2, { sources: sources2, dataset });
      }
      $$payload2.out += `<!--]--></div>`;
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { sources, loading, error });
  pop();
}
function _page($$payload, $$props) {
  push();
  let sources = [];
  let loading = true;
  let error = null;
  $$payload.out += `<div class="bg-gGray-100 min-h-screen"><div class="container mx-auto px-4 py-8"><div class="mb-8"><h1 class="text-sSlate-800 mb-4 text-4xl font-bold">Data Sources</h1> <p class="text-gGray-500 max-w-2xl text-lg">Explore our comprehensive collection of supported data sources and endpoints for structured
				data extraction</p></div> `;
  SourcesGrid($$payload, { sources, loading, error });
  $$payload.out += `<!----></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CDTD7kb3.js.map
