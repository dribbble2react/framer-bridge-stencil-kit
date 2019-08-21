import { url } from "framer/resource";

export let StencilComponents =
  "https://unpkg.com/stencil-framer-components/dist/framerxcomponents.js";

function localStencilComponentsURL() {
  if (url().includes("/node_modules/")) {
    return url("../../stencil-framer-components/dist/framerxcomponents.js");
  } else {
    return url(
      "node_modules/stencil-framer-components/dist/framerxcomponents.js"
    );
  }
}

export const localStencilComponents = localStencilComponentsURL();
