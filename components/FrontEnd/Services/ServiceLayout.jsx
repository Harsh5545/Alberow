import WebDevelopmentTemplate from "./ServicesTemplates/WebDevelopmentTemplate";
import DigitalMarketingTemplate from "./ServicesTemplates/DigitalMarketingTemplate";
import UiUxDesignTemplate from "./ServicesTemplates/UiUxDesignTemplate";
import EcommerceTemplate from "./ServicesTemplates/EcommerceTemplate";
import SeoTemplate from "./ServicesTemplates/SeoTemplate";
import DefaultTemplate from "./ServicesTemplates/DefaultTemplate";



export default function ServiceLayout({ service }) {
  // Choose the appropriate template based on service slug
  switch (service.slug) {
    case "web-development":
      return <WebDevelopmentTemplate service={service} />;
    case "digital-marketing":
      return <DigitalMarketingTemplate service={service} />;
    case "ui-ux-design":
      return <UiUxDesignTemplate service={service} />;
    case "ecommerce":
      return <EcommerceTemplate service={service} />;
    case "seo":
      return <SeoTemplate service={service} />;
    default:
      return <DefaultTemplate service={service} />;
  }
}