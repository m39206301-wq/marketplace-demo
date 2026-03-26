import { useEffect } from "react";

const BASE_TITLE = "Jiantie — Beautiful Invitation Templates";
const BASE_URL = "https://jiantie.com";

/**
 * Dynamically update <title> and inject JSON-LD structured data.
 *
 * @param {Object} options
 * @param {"home"|"category"|"preview"} options.screen
 * @param {Object|null} options.category
 * @param {Object|null} options.template
 */
export function useSEO({ screen, category, template }) {
  useEffect(() => {
    // ── 1. document.title ──
    let title = BASE_TITLE;
    if (screen === "category" && category) {
      title = `${category.name} Templates — ${category.count.toLocaleString()}+ Designs | Jiantie`;
    } else if (screen === "preview" && template && category) {
      title = `${template.name} | ${category.name} Template | Jiantie`;
    }
    document.title = title;

    // ── 2. JSON-LD ──
    removeExistingJsonLd();

    const scripts = buildJsonLd(screen, category, template);
    scripts.forEach(data => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.setAttribute("data-jiantie-seo", "true");
      el.textContent = JSON.stringify(data);
      document.head.appendChild(el);
    });

    return () => {
      removeExistingJsonLd();
    };
  }, [screen, category, template]);
}

function removeExistingJsonLd() {
  document.querySelectorAll('script[data-jiantie-seo]').forEach(el => el.remove());
}

function buildJsonLd(screen, category, template) {
  const scripts = [];

  // Website schema — always present
  scripts.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jiantie",
    "url": BASE_URL,
    "description": "Beautiful invitation templates for every occasion — H5, Video, and Image formats.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });

  if (screen === "category" && category) {
    // BreadcrumbList
    scripts.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": category.name, "item": `${BASE_URL}/${category.slug}` },
      ],
    });

    // CollectionPage
    scripts.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${category.name} Templates`,
      "description": `${category.count.toLocaleString()}+ ${category.name} invitation templates in H5, Video, and Image formats.`,
      "url": `${BASE_URL}/${category.slug}`,
      "numberOfItems": category.count,
    });
  }

  if (screen === "preview" && template && category) {
    // BreadcrumbList
    scripts.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": category.name, "item": `${BASE_URL}/${category.slug}` },
        { "@type": "ListItem", "position": 3, "name": template.name, "item": `${BASE_URL}/${category.slug}/${template.id}` },
      ],
    });

    // Product schema
    scripts.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": template.name,
      "description": `${template.style} style ${category.name} template in ${template.format.toUpperCase()} format.`,
      "url": `${BASE_URL}/${category.slug}/${template.id}`,
      "brand": { "@type": "Brand", "name": "Jiantie" },
      "offers": {
        "@type": "Offer",
        "price": template.price === "Free" ? "0" : template.price.replace("$", ""),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": template.likes,
      },
    });
  }

  return scripts;
}
