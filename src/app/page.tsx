"use client";
import CategoryPreviews from "@/components/CategoryPreviews";
import Products from "@/components/products";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Posts from "@/components/post";

// Định nghĩa type cho dữ liệu gốc từ API
const images = [
  "https://vnvc.vn/wp-content/uploads/2024/10/banner-uu-dai-vac-xin-zona-than-kinh-mb.jpg",
  "https://vnvc.vn/wp-content/uploads/2025/02/banner-vnvc-tang-cuong-gio-hoat-dong-mb.jpg",
  "https://vnvc.vn/wp-content/uploads/2025/01/le-ky-ket-hop-tac-thiet-ke-nha-may-vac-xin-vnvc.jpg",
];

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl lg:px-8 mt-4">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full p-4"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis ">
                <CardContent className="aspect-[16/5] relative">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="rounded-lg  "
                  />
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
      <CategoryPreviews />
      <Posts />
      <Products />
    </div>
  );
}
