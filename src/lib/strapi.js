const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function getHomeData() {
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

export async function getPortfolios() {
  const url = `${STRAPI_URL}/api/portfolios?populate=*`;

  const response = await fetch(url);
  const json = await response.json();

  return json.data;
}


export function getMediaURL(url) {
  if (!url) return '';

  if (url.startsWith('http')) {
    return url;
  }

  return `${STRAPI_URL}${url}`;
}
export async function getAboutData() {

  const response = await fetch(
    `${STRAPI_URL}/api/about?populate[sections][populate]=*`
  );

  const json = await response.json();

  return json.data;
}

export async function getCollectionData() {

  const response = await fetch(
    `${STRAPI_URL}/api/collection?populate[sections][populate]=*`
  );

  const json = await response.json();
  console.log(response,"kim");

  return json.data;
}

export async function getHomeSeo() {
  const response = await fetch(
    `${STRAPI_URL}/api/home?populate=*`
  );

  const json = await response.json();

  return json.data;
}

export async function getGlobalData() {
  const response = await fetch(
    `${STRAPI_URL}/api/global?populate[header_item][populate]=*&populate[footer_item][populate]=*`
  );

  const json = await response.json();

  return json.data;
}

export async function getHomeDataWithGallery() {
  const url =
    `${STRAPI_URL}/api/home?populate[sections][populate]=*&populate[sections][on][block.section-gallery][populate][gallery][populate]=*`;

  const response = await fetch(url);
  const json = await response.json();

  return json.data;
}

export async function getFilters() {
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
    materials: materials.data,
  };
}
export async function getProducts(filters = {}) {
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

export async function getProduct(slug) {
    const params = new URLSearchParams();

    params.append("populate", "*");
    params.append("filters[slug][$eq]", slug);

    const res = await fetch(
        `${STRAPI_URL}/api/products?${params.toString()}`
    );

    const { data } = await res.json();

    return data[0] || null;
}
export async function getSectionModuleData() {

    const response = await fetch(
        `${STRAPI_URL}/api/collection?populate[sections][on][block.section-module][populate][products][populate]=*`
    );

    const json = await response.json();

    return json.data;
}