import { c as createComponent } from './astro-component_BxHKVi6-.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_DMYQYn1-.mjs';
import 'clsx';
import { f as getMediaURL, h as getPortfolios, i as getHomeDataWithGallery, r as renderScript, j as getFilters, b as getProducts, k as getSectionModuleData } from './Layout_6rhHWhwR.mjs';

const $$DynamicSections = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DynamicSections;
  const { sections = [], components = {} } = Astro2.props;
  return renderTemplate`${sections.map((section) => {
    const Component = components[section.__component];
    return Component ? renderTemplate`${renderComponent($$result, "Component", Component, { ...section })}` : null;
  })}`;
}, "C:/Users/steve/astro-frontend/src/components/dynamicSections.astro", void 0);

const $$SectionHeroBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionHeroBanner;
  const {
    heading_title,
    background_image,
    button
  } = Astro2.props;
  const title = heading_title?.title;
  const sub_title = heading_title?.sub_title;
  const baseUrl = "http://localhost:1337";
  const imageUrl = background_image?.url ? `${baseUrl}${background_image.url}` : null;
  const sectionStyle = imageUrl ? `background-image: url('${imageUrl}'); background-size: cover; background-position: center;` : "";
  return renderTemplate`${maybeRenderHead()}<section class="hero-banner"${addAttribute(sectionStyle, "style")} data-astro-cid-uuw3nugu> <div class="container" data-astro-cid-uuw3nugu> <div class="row min-vh-100 align-items-center" data-astro-cid-uuw3nugu> <div class="col-xl-8" data-astro-cid-uuw3nugu> <span class="sub-title" data-astro-cid-uuw3nugu>${sub_title}</span> <h1 data-astro-cid-uuw3nugu>${title}</h1> ${button && button.map((btn) => renderTemplate`<a${addAttribute(btn.btn_link, "href")}${addAttribute(`btn btn-${btn.variant}`, "class")}${addAttribute(btn.target ? "_blank" : "_self", "target")} data-astro-cid-uuw3nugu> ${btn.btn_text} </a>`)} </div> </div> </div> <div class="banner-shape" data-negative="false" data-astro-cid-uuw3nugu> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none" data-astro-cid-uuw3nugu> <path class="shape-fill" style="opacity:0.33;" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z" data-astro-cid-uuw3nugu></path> <path class="shape-fill" style="opacity:0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z" data-astro-cid-uuw3nugu></path> <path class="shape-fill" style="opacity:0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z" data-astro-cid-uuw3nugu></path> <path class="shape-fill" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z" data-astro-cid-uuw3nugu></path> </svg> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionHeroBanner.astro", void 0);

const $$SectionAboutUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionAboutUs;
  const STRAPI_URL = "https://nice-beef-8685fc168d.strapiapp.com";
  const {
    heading_title,
    sub_title,
    description,
    about_img,
    muti_image,
    button,
    background_color
  } = Astro2.props;
  const imgUrl = about_img?.url ? `${STRAPI_URL}${about_img.url}` : null;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`about-section section ${background_color}`, "class")} data-astro-cid-yhxhgcc3> <div class="container" data-astro-cid-yhxhgcc3> <div class="row" data-astro-cid-yhxhgcc3> <!-- Cột hiển thị nội dung --> <div class="heading col-md-5" data-astro-cid-yhxhgcc3> <h3 class="sub-title" data-astro-cid-yhxhgcc3>${sub_title}</h3> <h2 class="heading-title" data-astro-cid-yhxhgcc3>${heading_title}</h2> <p class="des" data-astro-cid-yhxhgcc3>${description}</p> <!-- Hiển thị các button --> <div class="mt-4" data-astro-cid-yhxhgcc3> ${button && button.map((btn) => renderTemplate`<a${addAttribute(btn.btn_link, "href")}${addAttribute(`btn btn-${btn.variant} me-2`, "class")}${addAttribute(btn.target ? "_blank" : "_self", "target")} data-astro-cid-yhxhgcc3> ${btn.btn_text} </a>`)} </div> </div> <div class="col-md-7" data-astro-cid-yhxhgcc3> <div class="wp-img-right" data-astro-cid-yhxhgcc3> ${imgUrl && renderTemplate`<img${addAttribute(imgUrl, "src")}${addAttribute(heading_title, "alt")} class="img-fluid" data-astro-cid-yhxhgcc3>`} </div> <div class="wp-multi-img" data-astro-cid-yhxhgcc3> ${muti_image?.map((img) => renderTemplate`<div class="surface-image" data-astro-cid-yhxhgcc3> <img${addAttribute(getMediaURL(img.url), "src")}${addAttribute(img.alternativeText || img.name, "alt")} loading="lazy" data-astro-cid-yhxhgcc3> </div>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionAboutUs.astro", void 0);

const $$SectionPortfolios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionPortfolios;
  const portfolios = await getPortfolios();
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="portfolio-section" data-astro-cid-jmix5nbk> <div class="container" data-astro-cid-jmix5nbk> <h2 class="heading-text" data-astro-cid-jmix5nbk> ${title} </h2> <div class="row" data-astro-cid-jmix5nbk> <div class="col-lg-7" data-astro-cid-jmix5nbk> ${portfolios[0] && renderTemplate`<article class="portfolio-item featured-post" data-astro-cid-jmix5nbk> <a class="thumnail"${addAttribute(`/portfolio/${portfolios[0].slug}`, "href")} data-astro-cid-jmix5nbk> <img${addAttribute(getMediaURL(portfolios[0].image.url), "src")}${addAttribute(portfolios[0].title, "alt")} data-astro-cid-jmix5nbk> </a> <a class="post-title-link"${addAttribute(`/portfolio/${portfolios[0].slug}`, "href")} data-astro-cid-jmix5nbk><h3 class="post-title" data-astro-cid-jmix5nbk>${portfolios[0].title}</h3></a> <p class="post-des" data-astro-cid-jmix5nbk>${portfolios[0].description}</p> </article>`} </div> <div class="col-lg-5" data-astro-cid-jmix5nbk> <div class="row" data-astro-cid-jmix5nbk> ${portfolios.slice(1, 3).map((item) => renderTemplate`<div class="col-12" data-astro-cid-jmix5nbk> <article class="portfolio-item small-post" data-astro-cid-jmix5nbk> <a class="thumnail"${addAttribute(`/portfolio/${item.slug}`, "href")} data-astro-cid-jmix5nbk> <img${addAttribute(getMediaURL(item.image.url), "src")}${addAttribute(item.title, "alt")} data-astro-cid-jmix5nbk> </a> <a class="post-title-link"${addAttribute(`/portfolio/${item.slug}`, "href")} data-astro-cid-jmix5nbk> <h3 class="post-title" data-astro-cid-jmix5nbk>${item.title}</h3></a> </article> </div>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionPortfolios.astro", void 0);

const $$SectionGallery = createComponent(async ($$result, $$props, $$slots) => {
  const homeData = await getHomeDataWithGallery();
  const gallerySection = homeData.sections.find(
    (section) => section.__component === "block.section-gallery"
  );
  const title = gallerySection?.title;
  const gallery = gallerySection?.gallery;
  return renderTemplate`${maybeRenderHead()}<section class="gallery-section section" data-astro-cid-3llfgsaa> <div class="container" data-astro-cid-3llfgsaa> <h2 class="heading-text" data-astro-cid-3llfgsaa>${title}</h2> <div class="row" data-astro-cid-3llfgsaa> ${gallery?.image?.map((item) => renderTemplate`<div${addAttribute(gallery.column || "col-lg-4", "class")} data-astro-cid-3llfgsaa> <div class="gallery-item" data-astro-cid-3llfgsaa> <a${addAttribute(getMediaURL(item.url), "href")} class="glightbox" data-gallery="home-gallery" data-astro-cid-3llfgsaa> <img${addAttribute(getMediaURL(item.url), "src")}${addAttribute(item.alternativeText || item.name, "alt")} loading="lazy" data-astro-cid-3llfgsaa> </a> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/steve/astro-frontend/src/components/sections/sectionGallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionGallery.astro", void 0);

const $$SectionClientSay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionClientSay;
  const { title, sub_title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="client-say-section section" data-astro-cid-y2hk23ic> <div class="container" data-astro-cid-y2hk23ic> <div class="row" data-astro-cid-y2hk23ic> <!-- Cột hiển thị nội dung --> <div class="heading col-md-12" data-astro-cid-y2hk23ic> <div class="material-symbols-outlined text-taupe text-4xl mb-stack-lg" data-icon="format_quote" data-astro-cid-y2hk23ic>format_quote</div> <h2 class="heading-title" data-astro-cid-y2hk23ic>${title}</h2> <p class="des" data-astro-cid-y2hk23ic>${sub_title}</p> </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionClientSay.astro", void 0);

const $$SectionCTABanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionCTABanner;
  const { heading_title, button } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="cta-banner-section section" data-astro-cid-64vw36dn> <div class="container" data-astro-cid-64vw36dn> <div class="row" data-astro-cid-64vw36dn> <div class="heading col-md-12" data-astro-cid-64vw36dn> <span class="sub-title" data-astro-cid-64vw36dn> ${heading_title?.sub_title} </span> <h2 class="heading-title" data-astro-cid-64vw36dn> ${heading_title?.title} </h2> <p class="description" data-astro-cid-64vw36dn> ${heading_title?.description} </p> ${button?.map((item) => renderTemplate`<a${addAttribute(item.btn_link, "href")}${addAttribute(`btn btn-${item.variant}`, "class")}${addAttribute(item.target ? "_blank" : "_self", "target")} data-astro-cid-64vw36dn> ${item.btn_text} </a>`)} </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionCTABanner.astro", void 0);

const $$SectionHeroAbout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionHeroAbout;
  const STRAPI_URL = "https://nice-beef-8685fc168d.strapiapp.com";
  const {
    heading_title,
    about_img_right
  } = Astro2.props;
  const title = heading_title?.title;
  const sub_title = heading_title?.sub_title;
  const description = heading_title?.description;
  const imgUrl = about_img_right?.url ? `${STRAPI_URL}${about_img_right.url}` : null;
  return renderTemplate`${maybeRenderHead()}<section class="hero-about-section section" data-astro-cid-enxc5jum> <div class="container" data-astro-cid-enxc5jum> <div class="row" data-astro-cid-enxc5jum> <!-- Cột hiển thị nội dung --> <div class="heading col-md-5" data-astro-cid-enxc5jum> <h3 class="sub-title" data-astro-cid-enxc5jum>${sub_title}</h3> <h2 class="heading-title" data-astro-cid-enxc5jum>${title}</h2> <p class="des" data-astro-cid-enxc5jum>${description}</p> </div> <div class="col-md-2" data-astro-cid-enxc5jum></div> <div class="col-md-5" data-astro-cid-enxc5jum> <div class="wp-img-right" data-astro-cid-enxc5jum> ${imgUrl && renderTemplate`<img${addAttribute(imgUrl, "src")}${addAttribute(title, "alt")} class="img-fluid" data-astro-cid-enxc5jum>`} </div> </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionHeroAbout.astro", void 0);

const $$SectionSurfaceAbout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionSurfaceAbout;
  const {
    background_color,
    heading_title,
    button,
    surface_img
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`surface-about section bg-${background_color || "light"}`, "class")} data-astro-cid-wdisig7g> <div class="container" data-astro-cid-wdisig7g> <div class="row align-items-center" data-astro-cid-wdisig7g> <div class="col-lg-6" data-astro-cid-wdisig7g> <span class="sub-title" data-astro-cid-wdisig7g> ${heading_title?.sub_title}</span> <h2 class="heading-title" data-astro-cid-wdisig7g> ${heading_title?.title} </h2> <p class="description" data-astro-cid-wdisig7g> ${heading_title?.description} </p> ${button && renderTemplate`<a${addAttribute(button.btn_link, "href")}${addAttribute(`btn btn-${button.variant}`, "class")}${addAttribute(button.target ? "_blank" : "_self", "target")} data-astro-cid-wdisig7g> ${button.btn_text} <span class="material-symbols-outlined text-sm" data-icon="east" data-astro-cid-wdisig7g>east</span> </a>`} </div> <div class="col-lg-6" data-astro-cid-wdisig7g> <div class="surface-images" data-astro-cid-wdisig7g> ${surface_img?.map((img) => renderTemplate`<div class="surface-image" data-astro-cid-wdisig7g> <img${addAttribute(getMediaURL(img.url), "src")}${addAttribute(img.alternativeText || img.name, "alt")} loading="lazy" data-astro-cid-wdisig7g> </div>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionSurfaceAbout.astro", void 0);

const $$SectionFeaturedBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionFeaturedBanner;
  const { heading_title, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="featured-banner section" data-astro-cid-z7ufr3fw> <div class="container" data-astro-cid-z7ufr3fw> <div class="row align-items-center" data-astro-cid-z7ufr3fw> <div class="col-lg-7" data-astro-cid-z7ufr3fw> ${image?.url && renderTemplate`<img${addAttribute(getMediaURL(image.url), "src")}${addAttribute(image.alternativeText || heading_title?.title, "alt")} class="img-fluid" data-astro-cid-z7ufr3fw>`} </div> <div class="col-lg-5" data-astro-cid-z7ufr3fw> ${heading_title?.sub_title && renderTemplate`<span class="sub-title" data-astro-cid-z7ufr3fw> ${heading_title.sub_title} </span>`} <h2 class="heading-title" data-astro-cid-z7ufr3fw> ${heading_title?.title} </h2> <p class="description" data-astro-cid-z7ufr3fw> ${heading_title?.description} </p> </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionFeaturedBanner.astro", void 0);

const $$SectionShowcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionShowcase;
  const {
    top_left_infor,
    center_title,
    center_image,
    bottom_left_image,
    top_right_image,
    bottom_right_text,
    background_color
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`material-showcase section bg-${background_color || "grey"}`, "class")} data-astro-cid-z3zcycdc> <div class="container" data-astro-cid-z3zcycdc> <div class="material-grid" data-astro-cid-z3zcycdc> <div class="material-info" data-astro-cid-z3zcycdc> <span class="material-number" data-astro-cid-z3zcycdc> ${top_left_infor?.number} </span> <h3 class="material-title" data-astro-cid-z3zcycdc> ${top_left_infor?.title} </h3> <p class="material-des" data-astro-cid-z3zcycdc> ${top_left_infor?.description} </p> </div> <div class="material-main-image" data-astro-cid-z3zcycdc> <img${addAttribute(getMediaURL(center_image?.url), "src")}${addAttribute(center_title, "alt")} data-astro-cid-z3zcycdc> <h2 class="main-title" data-astro-cid-z3zcycdc> ${center_title} </h2> </div> <div class="material-top-image" data-astro-cid-z3zcycdc> <img${addAttribute(getMediaURL(top_right_image?.url), "src")} alt="" data-astro-cid-z3zcycdc> </div> <div class="material-bottom-image" data-astro-cid-z3zcycdc> <img${addAttribute(getMediaURL(bottom_left_image?.url), "src")} alt="" data-astro-cid-z3zcycdc> </div> <div class="material-quote" data-astro-cid-z3zcycdc> <p data-astro-cid-z3zcycdc>${bottom_right_text}</p> </div> </div> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionShowcase.astro", void 0);

const $$SectionProducts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionProducts;
  const {
    categories = [],
    designers = [],
    materials = []
  } = await getFilters();
  const { heading_title } = Astro2.props;
  const title = heading_title?.title;
  const subTitle = heading_title?.sub_title;
  const description = heading_title?.description;
  console.log("URL:", Astro2.url.href);
  const category = Astro2.url.searchParams.get("category");
  const designer = Astro2.url.searchParams.get("designer");
  const material = Astro2.url.searchParams.get("material");
  console.log({
    category,
    designer,
    material
  });
  const products = await getProducts({
    category,
    designer,
    material
  });
  console.log("Products:", products);
  function buildFilterUrl(type, value) {
    const search = new URLSearchParams(
      Astro2.url.searchParams
    );
    if (value) {
      search.set(type, value);
    } else {
      search.delete(type);
    }
    return `${Astro2.url.pathname}?${search.toString()}`;
  }
  return renderTemplate`${maybeRenderHead()}<section class="product-section section" data-astro-cid-duoqm3hw> <div class="container" data-astro-cid-duoqm3hw> <div class="heading right" data-astro-cid-duoqm3hw> <div class="heading-left" data-astro-cid-duoqm3hw> ${subTitle && renderTemplate`<h3 class="sub-title" data-astro-cid-duoqm3hw> ${subTitle} </h3>`} ${title && renderTemplate`<h2 class="heading-title" data-astro-cid-duoqm3hw> ${title} </h2>`} </div> ${description && renderTemplate`<p class="des" data-astro-cid-duoqm3hw> ${description} </p>`} </div> <div class="product-filters" data-astro-cid-duoqm3hw> <!-- CATEGORY --> <div class="filter-item" data-astro-cid-duoqm3hw> <button class="filter-toggle" data-astro-cid-duoqm3hw>
CATEGORY
<span class="material-symbols-outlined text-[14px]" data-astro-cid-duoqm3hw>expand_more</span> </button> <div class="filter-dropdown" data-astro-cid-duoqm3hw> <a${addAttribute(buildFilterUrl(
    "category",
    null
  ), "href")} data-astro-cid-duoqm3hw>
All Categories
</a> ${categories.map((item) => renderTemplate`<a${addAttribute(buildFilterUrl(
    "category",
    item.slug
  ), "href")}${addAttribute([
    {
      active: category === item.slug
    }
  ], "class:list")} data-astro-cid-duoqm3hw> ${item.category_name} </a>`)} </div> </div> <!-- MATERIAL --> <div class="filter-item" data-astro-cid-duoqm3hw> <button class="filter-toggle" data-astro-cid-duoqm3hw>
MATERIAL
<span class="material-symbols-outlined text-[14px]" data-astro-cid-duoqm3hw>expand_more</span> </button> <div class="filter-dropdown" data-astro-cid-duoqm3hw> <a${addAttribute(buildFilterUrl(
    "material",
    null
  ), "href")} data-astro-cid-duoqm3hw>
All Materials
</a> ${materials.map((item) => renderTemplate`<a${addAttribute(buildFilterUrl(
    "material",
    item.slug
  ), "href")}${addAttribute([
    {
      active: material === item.slug
    }
  ], "class:list")} data-astro-cid-duoqm3hw> ${item.name} </a>`)} </div> </div> <!-- DESIGNER --> <div class="filter-item" data-astro-cid-duoqm3hw> <button class="filter-toggle" data-astro-cid-duoqm3hw>
DESIGNER
<span class="material-symbols-outlined text-[14px]" data-astro-cid-duoqm3hw>expand_more</span> </button> <div class="filter-dropdown" data-astro-cid-duoqm3hw> <a${addAttribute(buildFilterUrl(
    "designer",
    null
  ), "href")} data-astro-cid-duoqm3hw>
All Designers
</a> ${designers.map((item) => renderTemplate`<a${addAttribute(buildFilterUrl(
    "designer",
    item.slug
  ), "href")}${addAttribute([
    {
      active: designer === item.slug
    }
  ], "class:list")} data-astro-cid-duoqm3hw> ${item.name} </a>`)} </div> </div> </div> </div> <div class="products-grid container" data-astro-cid-duoqm3hw> ${products.length > 0 ? products.map((product) => renderTemplate`<article class="product-card group" data-astro-cid-duoqm3hw> <a${addAttribute(`/product/${product.slug}`, "href")} class="product-link" data-astro-cid-duoqm3hw> <div class="product-image" data-astro-cid-duoqm3hw> ${product.image && renderTemplate`<img${addAttribute(getMediaURL(
    product.image.url
  ), "src")}${addAttribute(product.title, "alt")} data-astro-cid-duoqm3hw>`} <div class="product-overlay" data-astro-cid-duoqm3hw> <span class="view-btn" data-astro-cid-duoqm3hw>
View Details
</span> </div> </div> <div class="product-heading" data-astro-cid-duoqm3hw> <h3 class="product-title" data-astro-cid-duoqm3hw> ${product.title} </h3> <span class="" data-astro-cid-duoqm3hw>Inquire</span> </div> <div class="product-meta" data-astro-cid-duoqm3hw> ${product.designers?.length > 0 && renderTemplate`<p class="product-designer" data-astro-cid-duoqm3hw>
Designer: ${product.designers.map(
    (designer2) => designer2.name
  ).join(", ")} </p>`} ${product.materials?.length > 0 && renderTemplate`<p class="product-material" data-astro-cid-duoqm3hw>
Material: ${product.materials.map(
    (material2) => material2.name
  ).join(", ")} </p>`} </div> </a> </article>`) : renderTemplate`<p data-astro-cid-duoqm3hw>No products found.</p>`} </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionProducts.astro", void 0);

const $$SectionModule = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionModule;
  const {
    heading_title,
    background_image,
    button
  } = Astro2.props;
  const sectionData = await getSectionModuleData();
  const moduleSection = sectionData.sections.find(
    (section) => section.__component === "block.section-module"
  );
  const products = moduleSection?.products ?? [];
  const title = heading_title?.title ?? moduleSection?.heading_title?.title;
  const description = heading_title?.description ?? moduleSection?.heading_title?.description;
  const imageUrl = background_image?.url ? getMediaURL(background_image.url) : moduleSection?.background_image?.url ? getMediaURL(
    moduleSection.background_image.url
  ) : null;
  const sectionStyle = imageUrl ? `
        background-image: url('${imageUrl}');
        background-size: cover;
        background-position: center;
      ` : "";
  return renderTemplate`${maybeRenderHead()}<section class="module-section section container"${addAttribute(sectionStyle, "style")} data-astro-cid-hsajsa6o> <div class="module-overlay" data-astro-cid-hsajsa6o></div> <div class="module-top" data-astro-cid-hsajsa6o> <div class="heading" data-astro-cid-hsajsa6o> ${title && renderTemplate`<h1 data-astro-cid-hsajsa6o>${title}</h1>`} ${description && renderTemplate`<p data-astro-cid-hsajsa6o>${description}</p>`} ${button?.map((btn) => renderTemplate`<a${addAttribute(btn.btn_link, "href")}${addAttribute(`btn btn-${btn.variant}`, "class")}${addAttribute(btn.target ? "_blank" : "_self", "target")} data-astro-cid-hsajsa6o> ${btn.btn_text} </a>`)} </div> </div> </section> <div class="products-section" data-astro-cid-hsajsa6o> <div class="products-grid container" data-astro-cid-hsajsa6o> ${products.length > 0 ? products.map((product) => {
    const productImage = product.image?.url ? getMediaURL(product.image.url) : null;
    return renderTemplate`<article class="product-card group" data-astro-cid-hsajsa6o> <a${addAttribute(`/product/${product.slug}`, "href")} class="product-link" data-astro-cid-hsajsa6o> <div class="product-image" data-astro-cid-hsajsa6o> ${productImage && renderTemplate`<img${addAttribute(productImage, "src")}${addAttribute(product.title, "alt")} data-astro-cid-hsajsa6o>`} <div class="product-overlay" data-astro-cid-hsajsa6o> <span class="view-btn" data-astro-cid-hsajsa6o>
View Details
</span> </div> </div> <div class="product-heading" data-astro-cid-hsajsa6o> <h3 class="product-title" data-astro-cid-hsajsa6o> ${product.title} </h3> <span class="inquire" data-astro-cid-hsajsa6o>
Inquire
</span> </div> <div class="product-meta" data-astro-cid-hsajsa6o> ${product.designers?.length > 0 && renderTemplate`<p class="product-designer" data-astro-cid-hsajsa6o>
Designer:${" "} ${product.designers.map(
      (designer) => designer.name
    ).join(", ")} </p>`} ${product.materials?.length > 0 && renderTemplate`<p class="product-material" data-astro-cid-hsajsa6o>
Material:${" "} ${product.materials.map(
      (material) => material.name
    ).join(", ")} </p>`} </div> </a> </article>`;
  }) : renderTemplate`<p data-astro-cid-hsajsa6o>No products selected.</p>`} </div> </div>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionModule.astro", void 0);

const $$SectionNewsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionNewsletter;
  const {
    heading_title,
    newsletter
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="subscribe" data-astro-cid-iqq3lrvr> <div class="container" data-astro-cid-iqq3lrvr> <div class="heading" data-astro-cid-iqq3lrvr> ${heading_title?.title && renderTemplate`<h2 data-astro-cid-iqq3lrvr>${heading_title.title}</h2>`} ${heading_title?.description && renderTemplate`<p data-astro-cid-iqq3lrvr>${heading_title.description}</p>`} </div> <form class="subscribe-form" data-astro-cid-iqq3lrvr> <input type="email"${addAttribute(newsletter?.placeholder, "placeholder")}${addAttribute(newsletter?.title, "aria-label")} data-astro-cid-iqq3lrvr> <button type="submit" data-astro-cid-iqq3lrvr> ${newsletter?.button_text} </button> </form> </div> </section>`;
}, "C:/Users/steve/astro-frontend/src/components/sections/sectionNewsletter.astro", void 0);

const sectionMapper = {
  "block.section-hero-banner": $$SectionHeroBanner,
  "block.section-about-us": $$SectionAboutUs,
  "block.section-featured": $$SectionPortfolios,
  "block.section-gallery": $$SectionGallery,

  "block.section-hero-about": $$SectionHeroAbout,
  "block.section-surface-about": $$SectionSurfaceAbout,
  "block.section-featured-banner": $$SectionFeaturedBanner,
  "block.section-showcase": $$SectionShowcase,

  "block.section-client-say": $$SectionClientSay,
  "block.section-cta-banner": $$SectionCTABanner,

  "block.section-collections": $$SectionProducts,
  "block.section-module": $$SectionModule,
  "block.section-subscribe": $$SectionNewsletter,
};

export { $$DynamicSections as $, sectionMapper as s };
