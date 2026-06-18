import { c as createComponent } from './astro-component_BxHKVi6-.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from './entrypoint_DMYQYn1-.mjs';
import { b as getProducts, c as getProduct, $ as $$Layout } from './Layout_6rhHWhwR.mjs';
import { marked } from 'marked';

async function getStaticPaths() {
  const products = await getProducts();
  return products.map((product) => ({
    params: {
      slug: product.slug
    }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const product = await getProduct(Astro2.params.slug);
  const html = marked(product.content || "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Collection" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="single"> <div class="container"> <h1>${product.title}</h1> ${product.featured_image && renderTemplate`<img${addAttribute(`${"https://nice-beef-8685fc168d.strapiapp.com"}${product.featured_image.url}`, "src")}${addAttribute(product.title, "alt")}>`} ${product.content && renderTemplate`<div>${unescapeHTML(html)}</div>`} </div> </section> ` })}`;
}, "C:/Users/steve/astro-frontend/src/pages/product/[slug].astro", void 0);
const $$file = "C:/Users/steve/astro-frontend/src/pages/product/[slug].astro";
const $$url = "/product/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
