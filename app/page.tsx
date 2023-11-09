import Image from "next/image";
import ProductsList from "./ProductsList";
import Banner from "@/components/molecules/Banner";
import Hero from "@/components/molecules/Hero";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Hero />
      <ProductsList />
    </main>
  );
}
