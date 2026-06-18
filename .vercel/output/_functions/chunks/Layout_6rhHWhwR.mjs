import { c as createComponent } from './astro-component_BxHKVi6-.mjs';
import 'piccolore';
import { o as createRenderInstruction, m as maybeRenderHead, h as addAttribute, r as renderTemplate, p as renderHead, n as renderComponent, q as renderSlot } from './entrypoint_DMYQYn1-.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const STRAPI_URL = "https://nice-beef-8685fc168d.strapiapp.com";
async function getHomeData() {
  const url = `${STRAPI_URL}/api/home?populate[sections][populate]=*`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Fetch failed: ${response.status} ${response.statusText}`
    );
  }
  const json = await response.json();
  return json.data;
}
async function getPortfolios() {
  const url = `${STRAPI_URL}/api/portfolios?populate=*`;
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}
function getMediaURL(url) {
  if (!url) return "";
  if (url.startsWith("http")) {
    return url;
  }
  return `${STRAPI_URL}${url}`;
}
async function getAboutData() {
  const response = await fetch(
    `${STRAPI_URL}/api/about?populate[sections][populate]=*`
  );
  const json = await response.json();
  return json.data;
}
async function getCollectionData() {
  const response = await fetch(
    `${STRAPI_URL}/api/collection?populate[sections][populate]=*`
  );
  const json = await response.json();
  console.log(response, "kim");
  return json.data;
}
async function getHomeSeo() {
  const response = await fetch(
    `${STRAPI_URL}/api/home?populate=*`
  );
  const json = await response.json();
  return json.data;
}
async function getGlobalData() {
  const response = await fetch(
    `${STRAPI_URL}/api/global?populate[header_item][populate]=*&populate[footer_item][populate]=*`
  );
  const json = await response.json();
  return json.data;
}
async function getHomeDataWithGallery() {
  const url = `${STRAPI_URL}/api/home?populate[sections][populate]=*&populate[sections][on][block.section-gallery][populate][gallery][populate]=*`;
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}
async function getFilters() {
  const [categoriesRes, designersRes, materialsRes] = await Promise.all([
    fetch(`${STRAPI_URL}/api/categories`),
    fetch(`${STRAPI_URL}/api/designers`),
    fetch(`${STRAPI_URL}/api/materials`)
  ]);
  const categories = await categoriesRes.json();
  const designers = await designersRes.json();
  const materials = await materialsRes.json();
  return {
    categories: categories.data,
    designers: designers.data,
    materials: materials.data
  };
}
async function getProducts(filters = {}) {
  const params = new URLSearchParams();
  params.append("populate", "*");
  if (filters.category) {
    params.append(
      "filters[categories][slug][$eq]",
      filters.category
    );
  }
  if (filters.designer) {
    params.append(
      "filters[designers][slug][$eq]",
      filters.designer
    );
  }
  if (filters.material) {
    params.append(
      "filters[materials][slug][$eq]",
      filters.material
    );
  }
  const res = await fetch(
    `${STRAPI_URL}/api/products?${params.toString()}`
  );
  const { data } = await res.json();
  return data || [];
}
async function getProduct(slug) {
  const params = new URLSearchParams();
  params.append("populate", "*");
  params.append("filters[slug][$eq]", slug);
  const res = await fetch(
    `${STRAPI_URL}/api/products?${params.toString()}`
  );
  const { data } = await res.json();
  return data[0] || null;
}
async function getSectionModuleData() {
  const response = await fetch(
    `${STRAPI_URL}/api/collection?populate[sections][on][block.section-module][populate][products][populate]=*`
  );
  const json = await response.json();
  return json.data;
}

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const globalData = await getGlobalData();
  const header = globalData.header_item;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-hpnw4vwy> <div class="container" data-astro-cid-hpnw4vwy> <nav class="navbar navbar-expand-lg" data-astro-cid-hpnw4vwy> <!-- LOGO --> ${header?.logo?.url ? renderTemplate`<a class="navbar-brand" href="/" data-astro-cid-hpnw4vwy> <img${addAttribute(getMediaURL(header.logo.url), "src")}${addAttribute(header.logo_text, "alt")} data-astro-cid-hpnw4vwy> </a>` : renderTemplate`<a class="navbar-brand logo-text" href="/" data-astro-cid-hpnw4vwy> ${header?.logo_text} </a>`} <!-- MENU --> <ul class="navbar-nav" data-astro-cid-hpnw4vwy> ${header?.menu?.map((item) => renderTemplate`<li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link"${addAttribute(item.link, "href")} data-astro-cid-hpnw4vwy> ${item.title} </a> </li>`)} </ul> <!-- CTA --> </nav> </div> </header>`;
}, "C:/Users/steve/astro-frontend/src/components/header.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const globalData = await getGlobalData();
  const footer = globalData.footer_item?.[0];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-k2f5zb5c> <div class="container" data-astro-cid-k2f5zb5c> <div class="flex flex-col md:flex-row justify-between items-center px-grid-margin-desktop py-stack-lg gap-stack-md max-w-[1440px] mx-auto" data-astro-cid-k2f5zb5c> <div class="footer-top" data-astro-cid-k2f5zb5c> <a class="footer-logo" href="" data-astro-cid-k2f5zb5c> ${footer.logo_text} </a> <div class="footer-bottom" data-astro-cid-k2f5zb5c> <p data-astro-cid-k2f5zb5c> ${footer.copyright_text} </p> </div> </div> <ul class="footer-menu" data-astro-cid-k2f5zb5c> ${footer?.menu_links?.map((item) => renderTemplate`<li data-astro-cid-k2f5zb5c> <a${addAttribute(item.link, "href")} data-astro-cid-k2f5zb5c> ${item.title} </a> </li>`)} </ul> <ul class="footer-social" data-astro-cid-k2f5zb5c> ${footer?.social_item?.map((item) => renderTemplate`<li data-astro-cid-k2f5zb5c> <a${addAttribute(item.links, "href")}${addAttribute(item.title, "aria-label")} data-astro-cid-k2f5zb5c> <span class="material-symbols-outlined"${addAttribute(item.title, "data-icon")} data-astro-cid-k2f5zb5c> ${item.title} </span> </a> </li>`)} </ul> </div> </div> </footer>`;
}, "C:/Users/steve/astro-frontend/src/components/footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { seo = {} } = Astro2.props;
  return renderTemplate`<html lang="vi"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${seo?.meta_title || "BlissHaven"}</title><meta name="description"${addAttribute(seo?.meta_description || "", "content")}><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/Users/steve/astro-frontend/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/steve/astro-frontend/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getCollectionData as a, getProducts as b, getProduct as c, getHomeData as d, getHomeSeo as e, getMediaURL as f, getAboutData as g, getPortfolios as h, getHomeDataWithGallery as i, getFilters as j, getSectionModuleData as k, renderScript as r };
