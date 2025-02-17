"use client"; 
import { Product } from "@/lib/product";
import Link from "next/link";
import { useEffect, useState } from "react";
// Định nghĩa type cho dữ liệu gốc từ API

export default function Products() {
  // Sử dụng type đã định nghĩa
  const [products, setProducts] = useState<Product[]>([
    {
      id: 0,
      images: [
        {
          id: 0,
          image:
            "https://vnvc.vn/wp-content/uploads/2021/07/vaccine-vaxigrip-tetra.jpg",
          created_at: "",
        },
      ],
      is_deleted: false,
      name: "Vắc xin Vaxigrip Tetra (Pháp)",
      price: 0,
      description: "",
      quantity: 0,
      slug: "",
      created_at: "",
      is_active: false,
      category: { id: 0, name: "", slug: "", is_deleted: false },
      selected: false,
    },
  ]);

  useEffect(() => {
 
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl pb-2 font-bold tracking-tight text-gray-900">
          DANH MỤC VẮC XIN
        </h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <img
                alt={product.name}
                src={product.images?.[0].image}
                className="aspect-[3/4] w-full bg-gray-200 group-hover:opacity-75 sm:aspect-auto h-36"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`/product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {product.category.name}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
