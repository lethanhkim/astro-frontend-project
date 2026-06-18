import { c as createComponent } from './astro-component_BxHKVi6-.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_DMYQYn1-.mjs';
import { d as getHomeData, e as getHomeSeo, $ as $$Layout } from './Layout_6rhHWhwR.mjs';
import { $ as $$DynamicSections, s as sectionMapper } from './sectionMapper_CTE6SLBi.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homeData = await getHomeData();
  const homeSeo = await getHomeSeo();
  const sections = homeData.sections;
  const seo = homeSeo.SEO;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seo }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DynamicSections", $$DynamicSections, { "sections": sections, "components": sectionMapper })} ` })}`;
}, "C:/Users/steve/astro-frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/steve/astro-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
