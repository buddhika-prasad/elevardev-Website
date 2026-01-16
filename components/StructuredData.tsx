export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ElevarDev",
    url: "https://elevardev.com",
    logo: "https://elevardev.com/logo.png",
    description: "Custom software development, web applications, mobile apps, and SaaS products. Serving clients globally from Sri Lanka.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressRegion: "Sri Lanka",
    },
    sameAs: [
      "https://linkedin.com/company/elevardev",
      "https://github.com/elevardev",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "hello@elevardev.com",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ElevarDev",
    url: "https://elevardev.com",
    description: "Scalable digital products that elevate businesses",
    publisher: {
      "@type": "Organization",
      name: "ElevarDev",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    provider: {
      "@type": "Organization",
      name: "ElevarDev",
    },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://elevardev.com/contact",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}


