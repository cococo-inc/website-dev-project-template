import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import NewsSection from "@/components/sections/NewsSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { getCompanyInfo, getNewsList, getServicesList } from "@/lib/microcms";

export default async function Home() {
  const [company, newsData, servicesData] = await Promise.all([
    getCompanyInfo(),
    getNewsList(4),
    getServicesList(),
  ]);

  return (
    <>
      <Hero />
      <About company={company} />
      <Services services={servicesData.contents} />
      <NewsSection newsList={newsData.contents} />
      <ContactCTA />
    </>
  );
}
