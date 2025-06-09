import { x as push, z as pop, R as fallback, M as escape_html, U as bind_props, V as ensure_array_like, K as spread_attributes, G as attr, W as attr_style, O as stringify, F as attr_class } from './index-BIOYGULa.js';
import { g as getIconContext } from './context-CIYqVsWA.js';

function Calendar($$payload, $$props) {
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
    $$payload.out += `<path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm60-80v56a12,12,0,0,1-24,0V143.32a12,12,0,0,1-9.37-22l16-8A12,12,0,0,1,112,124Zm61.49,33.88L163.9,168H168a12,12,0,0,1,0,24H136a12,12,0,0,1-8.71-20.25L155.45,142a4,4,0,0,0,.55-2,4,4,0,0,0-7.47-2,12,12,0,0,1-20.78-12A28,28,0,0,1,180,140a27.77,27.77,0,0,1-5.64,16.86A10.63,10.63,0,0,1,173.49,157.88Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-98-90v64a6,6,0,0,1-12,0V129.71l-7.32,3.66a6,6,0,1,1-5.36-10.74l16-8A6,6,0,0,1,110,120Zm59.57,29.25L148,178h20a6,6,0,0,1,0,12H136a6,6,0,0,1-4.8-9.6L160,142a10,10,0,1,0-16.65-11A6,6,0,1,1,133,125a22,22,0,1,1,36.62,24.26Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212ZM108,120v64a4,4,0,0,1-8,0V126.47l-10.21,5.11a4,4,0,0,1-3.58-7.16l16-8A4,4,0,0,1,108,120Zm60,28-24,32h24a4,4,0,0,1,0,8H136a4,4,0,0,1-3.2-6.4l28.78-38.37A11.88,11.88,0,0,0,164,136a12,12,0,0,0-22.4-6,4,4,0,0,1-6.92-4A20,20,0,0,1,172,136,19.79,19.79,0,0,1,168,148Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function CaretDown($$payload, $$props) {
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
    $$payload.out += `<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Star($$payload, $$props) {
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
    $$payload.out += `<path d="M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z" opacity="0.2"></path><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function Users($$payload, $$props) {
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
    $$payload.out += `<path d="M125.18,156.94a64,64,0,1,0-82.36,0,100.23,100.23,0,0,0-39.49,32,12,12,0,0,0,19.35,14.2,76,76,0,0,1,122.64,0,12,12,0,0,0,19.36-14.2A100.33,100.33,0,0,0,125.18,156.94ZM44,108a40,40,0,1,1,40,40A40,40,0,0,1,44,108Zm206.1,97.67a12,12,0,0,1-16.78-2.57A76.31,76.31,0,0,0,172,172a12,12,0,0,1,0-24,40,40,0,1,0-10.3-78.67,12,12,0,1,1-6.16-23.19,64,64,0,0,1,57.64,110.8,100.23,100.23,0,0,1,39.49,32A12,12,0,0,1,250.1,205.67Z"></path>`;
  } else if (weight === "duotone") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<path d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z" opacity="0.2"></path><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>`;
  } else if (weight === "fill") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path>`;
  } else if (weight === "light") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<path d="M112.6,158.43a58,58,0,1,0-57.2,0A93.83,93.83,0,0,0,5.21,196.72a6,6,0,0,0,10.05,6.56,82,82,0,0,1,137.48,0,6,6,0,0,0,10-6.56A93.83,93.83,0,0,0,112.6,158.43ZM38,108a46,46,0,1,1,46,46A46.06,46.06,0,0,1,38,108Zm211,97a6,6,0,0,1-8.3-1.74A81.8,81.8,0,0,0,172,166a6,6,0,0,1,0-12,46,46,0,1,0-17.08-88.73,6,6,0,1,1-4.46-11.14,58,58,0,0,1,50.14,104.3,93.83,93.83,0,0,1,50.19,38.29A6,6,0,0,1,249,205Z"></path>`;
  } else if (weight === "regular") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>`;
  } else if (weight === "thin") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `<path d="M107.19,159a56,56,0,1,0-46.38,0A91.83,91.83,0,0,0,6.88,197.81a4,4,0,1,0,6.7,4.37,84,84,0,0,1,140.84,0,4,4,0,1,0,6.7-4.37A91.83,91.83,0,0,0,107.19,159ZM36,108a48,48,0,1,1,48,48A48.05,48.05,0,0,1,36,108Zm212,95.35a4,4,0,0,1-5.53-1.17A83.81,83.81,0,0,0,172,164a4,4,0,0,1,0-8,48,48,0,1,0-17.82-92.58,4,4,0,1,1-3-7.43,56,56,0,0,1,44,103,91.83,91.83,0,0,1,53.93,38.86A4,4,0,0,1,248,203.35Z"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function ModuleCard($$payload, $$props) {
  push();
  let module = $$props["module"];
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  function getLanguageColor(language) {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      Go: "#00ADD8",
      Rust: "#dea584",
      PHP: "#4F5D95"
    };
    return colors[language || ""] || "#6a7ca2";
  }
  $$payload.out += `<div class="group border-sSlate-200 hover:border-sSlate-300 relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"><div class="mb-4 flex items-start justify-between"><div class="flex items-center space-x-3"><img${attr("src", module.owner.avatar_url)}${attr("alt", module.owner.login)} class="h-8 w-8 rounded-full"/> <div><h3 class="text-sSlate-800 group-hover:text-oOrange-500 font-medium transition-colors">${escape_html(module.name)}</h3> <p class="text-gGray-400 text-sm">${escape_html(module.owner.login)}</p></div></div> <div class="text-gGray-400 flex items-center space-x-1">`;
  Star($$payload, { size: 16 });
  $$payload.out += `<!----> <span class="text-sm font-medium">${escape_html(module.stargazers_count)}</span></div></div> <p class="text-gGray-500 mb-4 line-clamp-2 text-sm leading-relaxed svelte-1t45kdx">${escape_html(module.description || "No description available")}</p> `;
  if (module.topics.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(module.topics.slice(0, 3));
    $$payload.out += `<div class="mb-4 flex flex-wrap gap-2"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let topic = each_array[$$index];
      $$payload.out += `<span class="bg-sSlate-100 text-sSlate-600 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">${escape_html(topic)}</span>`;
    }
    $$payload.out += `<!--]--> `;
    if (module.topics.length > 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="bg-gGray-100 text-gGray-400 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">+${escape_html(module.topics.length - 3)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="text-gGray-400 flex items-center justify-between text-xs"><div class="flex items-center space-x-4">`;
  if (module.language) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center space-x-1"><div class="h-3 w-3 rounded-full"${attr_style(`background-color: ${stringify(getLanguageColor(module.language))}`)}></div> <span>${escape_html(module.language)}</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (module.contributors_count) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center space-x-1">`;
    Users($$payload, { size: 12 });
    $$payload.out += `<!----> <span>${escape_html(module.contributors_count)}</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="flex items-center space-x-1">`;
  Calendar($$payload, { size: 12 });
  $$payload.out += `<!----> <span>Updated ${escape_html(formatDate(module.updated_at))}</span></div></div> <a${attr("href", module.html_url)} target="_blank" rel="noopener noreferrer" class="absolute inset-0 z-10"${attr("aria-label", `View ${stringify(module.name)} on GitHub`)}></a></div>`;
  bind_props($$props, { module });
  pop();
}
function ModuleCardSkeleton($$payload) {
  $$payload.out += `<div class="border-sSlate-200 overflow-hidden rounded-lg border bg-white p-6 shadow-sm"><div class="mb-4 flex items-start justify-between"><div class="flex items-center space-x-3"><div class="bg-gGray-100 h-8 w-8 animate-pulse rounded-full"></div> <div><div class="bg-gGray-100 mb-1 h-4 w-24 animate-pulse rounded"></div> <div class="bg-gGray-100 h-3 w-16 animate-pulse rounded"></div></div></div> <div class="bg-gGray-100 h-4 w-8 animate-pulse rounded"></div></div> <div class="mb-4 space-y-2"><div class="bg-gGray-100 h-3 w-full animate-pulse rounded"></div> <div class="bg-gGray-100 h-3 w-3/4 animate-pulse rounded"></div></div> <div class="mb-4 flex space-x-2"><div class="bg-gGray-100 h-5 w-16 animate-pulse rounded-full"></div> <div class="bg-gGray-100 h-5 w-20 animate-pulse rounded-full"></div> <div class="bg-gGray-100 h-5 w-12 animate-pulse rounded-full"></div></div> <div class="flex items-center justify-between"><div class="flex items-center space-x-4"><div class="bg-gGray-100 h-3 w-16 animate-pulse rounded"></div> <div class="bg-gGray-100 h-3 w-8 animate-pulse rounded"></div></div> <div class="bg-gGray-100 h-3 w-20 animate-pulse rounded"></div></div></div>`;
}
function ModulesGrid($$payload, $$props) {
  push();
  let modules = fallback($$props["modules"], () => [], true);
  let loading = fallback($$props["loading"], false);
  let error = fallback($$props["error"], null);
  const skeletonCount = 12;
  $$payload.out += `<div class="w-full">`;
  if (error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="rounded-lg border border-red-200 bg-red-50 p-6 text-center"><p class="mb-2 font-medium text-red-600">Failed to load modules</p> <p class="text-sm text-red-500">${escape_html(error)}</p></div>`;
  } else if (loading) {
    $$payload.out += "<!--[1-->";
    const each_array = ensure_array_like([...Array(skeletonCount).keys()]);
    $$payload.out += `<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      ModuleCardSkeleton($$payload);
    }
    $$payload.out += `<!--]--></div>`;
  } else if (modules.length === 0) {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<div class="border-sSlate-200 bg-sSlate-100 rounded-lg border p-12 text-center"><p class="text-sSlate-600 mb-2 font-medium">No modules found</p> <p class="text-sSlate-400 text-sm">Try adjusting your search or filters</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array_1 = ensure_array_like(modules);
    $$payload.out += `<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let module = each_array_1[$$index_1];
      ModuleCard($$payload, { module });
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { modules, loading, error });
  pop();
}
function SortDropdown($$payload, $$props) {
  push();
  let selectedOption;
  let value = fallback($$props["value"], "relevant");
  let onChange = $$props["onChange"];
  let isOpen = false;
  const sortOptions = [
    {
      value: "relevant",
      label: "Most Relevant",
      description: "Best match"
    },
    {
      value: "popular",
      label: "Most Popular",
      description: "Most stars"
    },
    {
      value: "newest",
      label: "Newest",
      description: "Recently created"
    },
    {
      value: "updated",
      label: "Recently Updated",
      description: "Latest activity"
    }
  ];
  function handleClickOutside(event) {
    const target = event.target;
    if (!target.closest(".sort-dropdown")) {
      isOpen = false;
    }
  }
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
  }
  selectedOption = sortOptions.find((option) => option.value === value) || sortOptions[0];
  $$payload.out += `<div class="sort-dropdown relative"><button type="button" class="text-sSlate-700 border-sSlate-200 hover:bg-sSlate-50 focus:ring-oOrange-500 flex w-full items-center justify-between gap-2 rounded-lg border bg-white px-4 py-2.5 text-sm font-medium transition-colors focus:border-transparent focus:ring-2 focus:outline-none"><div class="flex cursor-pointer items-center space-x-2"><span class="text-gGray-500">Sort by:</span> <span class="text-sSlate-800">${escape_html(selectedOption.label)}</span></div> `;
  CaretDown($$payload, {
    size: 16,
    class: `text-gGray-400 transition-transform duration-200 ${stringify(isOpen ? "rotate-180" : "")}`
  });
  $$payload.out += `<!----></button> `;
  if (isOpen) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(sortOptions);
    $$payload.out += `<div class="border-sSlate-200 absolute right-0 z-50 mt-2 w-64 rounded-lg border bg-white shadow-lg"><div class="py-2"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let option = each_array[$$index];
      $$payload.out += `<button type="button"${attr_class(`hover:bg-sSlate-50 w-full px-4 py-3 text-left transition-colors ${stringify(value === option.value ? "bg-sSlate-100" : "")}`)}><div class="flex items-center justify-between"><div><div class="text-sSlate-800 text-sm font-medium">${escape_html(option.label)}</div> <div class="text-gGray-500 mt-0.5 text-xs">${escape_html(option.description)}</div></div> `;
      if (value === option.value) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="bg-oOrange-500 h-2 w-2 rounded-full"></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div></button>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { value, onChange });
  pop();
}
function _page($$payload, $$props) {
  push();
  let modules = [];
  let loading = true;
  let error = null;
  let currentSort = "relevant";
  async function loadModules(sort = "relevant") {
    try {
      loading = true;
      error = null;
      const params = new URLSearchParams();
      params.set("sort", sort);
      const response = await fetch(`/api/modules?${params}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to load modules");
      }
      modules = data.modules;
      currentSort = sort;
    } catch (err) {
      console.error("Error loading modules:", err);
      error = err instanceof Error ? err.message : "Failed to load modules";
      modules = [];
    } finally {
      loading = false;
    }
  }
  function handleSortChange(newSort) {
    if (newSort !== currentSort) {
      loadModules(newSort);
    }
  }
  $$payload.out += `<div class="bg-gGray-100 min-h-screen"><div class="container mx-auto px-4 py-8"><div class="mb-8"><h1 class="text-sSlate-800 mb-4 text-4xl font-bold">ASIMOV Modules</h1> <p class="text-gGray-500 max-w-2xl text-lg">Discover and explore our collection of modules from the ASIMOV ecosystem</p></div> <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div class="flex justify-end">`;
  SortDropdown($$payload, {
    value: currentSort,
    onChange: handleSortChange
  });
  $$payload.out += `<!----></div> <div class="text-gGray-500 text-sm">`;
  if (!loading && !error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${escape_html(modules.length)} module${escape_html(modules.length !== 1 ? "s" : "")} found`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> `;
  ModulesGrid($$payload, { modules, loading, error });
  $$payload.out += `<!----></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BWinz7iL.js.map
