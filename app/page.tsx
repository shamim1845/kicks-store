import Banner from "@/components/feature/Home/Banner";
import Tagline from "../components/feature/Home/Tagline";
import NewDrops from "@/components/feature/Home/NewDrops";
import Categories from "@/components/feature/Home/Categories";
import Reviews from "@/components/feature/Home/Reviews";

export default function Home() {
  return (
    <div className="page_container">
      <Tagline />
      <Banner />
      <NewDrops />
      <Categories />
      <Reviews />
    </div>
  );
}
