import Banner from "@/components/feature/Home/Banner";
import Tagline from "../components/feature/Home/Tagline";
import NewDrops from "@/components/feature/Home/NewDrops";

export default function Home() {
  return (
    <div className="page_container">
      <Tagline />
      <Banner />
      <NewDrops />
    </div>
  );
}
