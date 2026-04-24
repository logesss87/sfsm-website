import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyChooseUs />
      <ServicesGrid />
    </div>
  );
}
