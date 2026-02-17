import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Joseph Mbugua";
const SITE_URL = (
  import.meta.env.VITE_SITE_URL ||
  "https://joseph-personal-portfolio.vercel.app/"
).replace(/\/+$/, "");
const DEFAULT_IMAGE = `${SITE_URL}/Profile.jpg`;

const seoByRoute = {
  "/": {
    title: "Joseph Mbugua | Junior Systems Engineer & Backend Engineer",
    description:
      "Portfolio of Joseph Mbugua, focused on systems administration, networking, backend engineering, and Odoo ERP solutions.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Joseph Mbugua Gitau",
      jobTitle: "Junior Systems Engineer",
      url: SITE_URL,
      sameAs: ["https://github.com/mbuguag", "https://linkedin.com/in/mbuguag"],
      knowsAbout: [
        "Windows Server",
        "Networking",
        "Java Spring Boot",
        "REST APIs",
        "Odoo ERP",
      ],
    },
  },
  "/about": {
    title: "About | Joseph Mbugua",
    description:
      "Learn about Joseph Mbugua's background in systems engineering, backend development, network support, and enterprise operations.",
  },
  "/skills": {
    title: "Skills | Joseph Mbugua",
    description:
      "Technical skills across systems infrastructure, Cisco networking, backend engineering, databases, ERP, and DevOps tools.",
  },
  "/projects": {
    title: "Projects | Joseph Mbugua",
    description:
      "Selected projects in enterprise backend development, Odoo platforms, and real-world systems integrations.",
  },
  "/resume": {
    title: "Resume | Joseph Mbugua",
    description:
      "Professional experience, education, certifications, and key projects of Joseph Mbugua.",
  },
  "/contact": {
    title: "Contact | Joseph Mbugua",
    description:
      "Contact Joseph Mbugua for systems engineering, backend development, and enterprise software opportunities.",
  },
};

const upsertMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

const upsertLinkTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("link");
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

const upsertJsonLd = (data) => {
  let script = document.head.querySelector('script[type="application/ld+json"][data-seo="true"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "true");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

export default function SeoManager() {
  const { pathname } = useLocation();
  const cleanPath = pathname || "/";
  const seo = seoByRoute[cleanPath] || seoByRoute["/"];

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
    const pageTitle = seo.title.includes(SITE_NAME) ? seo.title : `${seo.title} | ${SITE_NAME}`;

    document.title = pageTitle;

    upsertMetaTag('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    upsertMetaTag('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });
    upsertMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMetaTag('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });
    upsertMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: pageTitle,
    });
    upsertMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: seo.description,
    });
    upsertMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: DEFAULT_IMAGE,
    });
    upsertMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: pageTitle,
    });
    upsertMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seo.description,
    });
    upsertMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: DEFAULT_IMAGE,
    });

    upsertLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    if (seo.jsonLd) {
      upsertJsonLd(seo.jsonLd);
    } else {
      const script = document.head.querySelector('script[type="application/ld+json"][data-seo="true"]');
      if (script) {
        script.remove();
      }
    }
  }, [cleanPath, seo]);

  return null;
}
