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
import { useActionState, useRef } from "react";

// Định nghĩa type cho dữ liệu gốc từ API
const images = [
  "https://vnvc.vn/wp-content/uploads/2024/10/banner-uu-dai-vac-xin-zona-than-kinh-mb.jpg",
  "https://vnvc.vn/wp-content/uploads/2025/02/banner-vnvc-tang-cuong-gio-hoat-dong-mb.jpg",
  "https://vnvc.vn/wp-content/uploads/2025/01/le-ky-ket-hop-tac-thiet-ke-nha-may-vac-xin-vnvc.jpg",
];

async function increment(
  states: { success: string; isLoading: boolean },
  formData: FormData
) {

  console.log(" Data",); 
  console.log("formData", formData.get("name"));
  console.log(states);
  return { success: `Đăng ký thành công`, isLoading: false };
}
export default function Home() {
  const [state, formAction] = useActionState(increment, {
    success: "",
    isLoading: false,
  });
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="bg-white">
      <form action={formAction} className="flex justify-center">
        <input
          type="text"
          name="name"
          required
          className="border-2 border-gray-300 p-2"
        />
        {state.success && <p style={{ color: "red" }}>{state.success}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2">
          Submit
        </button>
      </form>
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
      <Products />
    </div>
  );
}
