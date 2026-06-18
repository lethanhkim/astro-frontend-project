import HeroBannerSection from "../components/sections/sectionHeroBanner.astro";
import AboutSection from "../components/sections/sectionAboutUs.astro";
import PortfolioSection from "../components/sections/sectionPortfolios.astro";
import GallerySection from "../components/sections/sectionGallery.astro";
import ClientSay from "../components/sections/sectionClientSay.astro";
import CtaBanner from "../components/sections/sectionCTABanner.astro";
import HeroAboutSection from "../components/sections/sectionHeroAbout.astro";
import SurfaceAbout from "../components/sections/sectionSurfaceAbout.astro";
import FeaturedBanner from "../components/sections/sectionFeaturedBanner.astro";
import SectionShowcase from "../components/sections/sectionShowcase.astro";
import ProductsSection from "../components/sections/sectionProducts.astro";
// import BannerSection from "../components/sections/sectionAboutUs.astro";
import ModuleSection from "../components/sections/sectionModule.astro";
import NewsletterSection from "../components/sections/sectionNewsletter.astro";

export const sectionMapper = {
  "block.section-hero-banner": HeroBannerSection,
  "block.section-about-us": AboutSection,
  "block.section-featured": PortfolioSection,
  "block.section-gallery": GallerySection,

  "block.section-hero-about": HeroAboutSection,
  "block.section-surface-about": SurfaceAbout,
  "block.section-featured-banner": FeaturedBanner,
  "block.section-showcase": SectionShowcase,

  "block.section-client-say": ClientSay,
  "block.section-cta-banner": CtaBanner,

  "block.section-collections": ProductsSection,
  "block.section-module": ModuleSection,
  "block.section-subscribe": NewsletterSection,
};