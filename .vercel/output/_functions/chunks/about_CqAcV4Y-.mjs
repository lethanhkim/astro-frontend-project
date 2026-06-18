import { c as createComponent } from './astro-component_BxHKVi6-.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_DMYQYn1-.mjs';
import { g as getAboutData, $ as $$Layout } from './Layout_6rhHWhwR.mjs';
import { $ as $$DynamicSections, s as sectionMapper } from './sectionMapper_CTE6SLBi.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const aboutData = await getAboutData();
  const sections = aboutData.sections;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DynamicSections", $$DynamicSections, { "sections": sections, "components": sectionMapper })} ` })}`;
}, "C:/Users/steve/astro-frontend/src/pages/about.astro", void 0);

const $$file = "C:/Users/steve/astro-frontend/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
