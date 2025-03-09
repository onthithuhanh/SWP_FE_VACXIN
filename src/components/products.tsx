"use client";
import { getVaccines } from "@/api/vacxin";
import { Product } from "@/lib/product";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
// Định nghĩa type cho dữ liệu gốc từ API

export default function Products() {
  // Sử dụng type đã định nghĩa
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await getVaccines();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl pb-2 font-bold tracking-tight text-gray-900">
            DANH MỤC VẮC XIN
          </h2>
          <Link
            href="/product"
            className="text-blue-500 hover:underline"
          >
            tất cả sản phẩm
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <img
                alt={product.image}
                src={product.image}
                className="aspect-[3/4] w-full bg-gray-200 group-hover:opacity-75 sm:aspect-auto h-36"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`/product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    Dạng vắc xin:{product.categoryName}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {product.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
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
