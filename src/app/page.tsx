import Image from "next/image";
import Header from "./componenets/Header";
import HeroSection from "./componenets/HeroSection";
import LatestQuestions from "./componenets/LatestQuestions";
import TopContributers from "./componenets/TopContributers";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <div className="flex justify-center lg:flex-row flex-col-reverse gap-2 mb-4">
      <LatestQuestions/>
      <TopContributers/>
      </div>
    </main>
  );
}
