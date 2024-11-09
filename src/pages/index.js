import Header from "@/components/Header";
import HeroLayout from "@/components/HeroLayout";
import ServiceProvider from "@/components/ServiceProvider";
import DreamUniversity from "@/components/DreamUniversity";
import Webinar from "@/components/Webinar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "@/components/Testimonial";
import UpdatesKC from "@/components/UpdatesKC";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroLayout />
      <ServiceProvider />
      <DreamUniversity />
      <Webinar />
      <Testimonial />
      <UpdatesKC />
      <Footer />
    </div>
  );
}
