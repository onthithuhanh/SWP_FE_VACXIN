"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Facebook, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/lib/post";
import { useParams } from "next/navigation";
import { getPostById } from "@/api/postApi";
import { useCallback, useEffect, useState } from "react";

export default function PostId() {
  const [product, setProduct] = useState<Post>();
  const { id } = useParams<{ id: string }>();
  const fetchProduct = useCallback(async () => {
    try {
      const response = await getPostById(id);
      setProduct(response?.result);
    } catch (error) {
      console.error(error);
    }
  }, [id]);
  console.log(product);
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Trang chủ
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link href="/tin-tuc" className="hover:text-blue-600">
            Tin tức hoạt động
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className="text-gray-400">{product?.title}</span>
        </nav>

        {/* Article */}
        <article className="rounded-lg border bg-white p-6">
          <h1 className="mb-6 text-2xl font-bold text-blue-800 md:text-3xl">
            {product?.title}
          </h1>

          {/* Author Info */}
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/placeholder.svg"
              alt="Author"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{product?.author?.fullname}</p>
              <p className="text-sm text-gray-500">{product?.createdAt}</p>
            </div>
            <div className="ml-auto flex items-center gap-2"></div>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            <p className="mb-4 text-gray-600 italic">
              Cụ bà Nguyễn Thị Trâm, gần 100 tuổi vẫn minh mẫn, khỏe mạnh, cẩn
              thận ghi chép tỉ mỉ các thông tin về lịch tiêm chủng, hiệu quả
              phòng ngừa và độ tuổi tiêm vắc xin sốt xuất huyết tại buổi tư vấn
              kiến thức phòng ngừa bệnh sốt xuất huyết và các bệnh hô hấp do Hệ
              thống tiêm chủng VNVC tổ chức.
            </p>

            <div className="my-6">
              <Image
                src={product?.imageUrl || "/placeholder.svg"}
                alt="Cụ bà tham gia buổi tư vấn"
                width={800}
                height={450}
                className="rounded-lg"
              />
            </div>

            {product?.content}
          </div>

          {/* Social Share */}
          <div className="mt-6 flex items-center gap-4 border-t pt-6">
            <span className="text-sm text-gray-500">Chia sẻ:</span>
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4 text-blue-600" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4 text-blue-400" />
            </Button>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-blue-800">
            BÀI VIẾT CÙNG CHỦ ĐỀ
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <Image
                  src="/img/a1.png"
                  alt="VNVC thông báo lịch nghỉ Tết"
                  width={400}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <h3 className="mb-2 font-semibold hover:text-blue-600">
                  <Link href="#">
                    VNVC thông báo lịch nghỉ Tết Nguyên Đán Ất Tỵ 2025
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Thông tin về lịch nghỉ Tết và hoạt động của hệ thống tiêm
                  chủng VNVC trong dịp Tết Nguyên Đán.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Image
                  src="/img/a1.png"
                  alt="VNVC tăng cường giờ làm"
                  width={400}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <h3 className="mb-2 font-semibold hover:text-blue-600">
                  <Link href="#">
                    VNVC tăng cường giờ làm việc phục vụ lượt tiêm vắc xin cao
                    đột biến
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Nhằm phục vụ khách hàng tốt hơn trong thời điểm nhu cầu tiêm
                  chủng tăng cao.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <Image
                  src="/img/a1.png"
                  alt="VNVC đón tiếp đoàn học sinh"
                  width={400}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <h3 className="mb-2 font-semibold hover:text-blue-600">
                  <Link href="#">
                    VNVC đón tiếp nhiều đoàn học sinh, sinh viên đến tham quan
                    và học tập
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Chương trình tham quan học tập giúp nâng cao nhận thức về tầm
                  quan trọng của việc tiêm chủng.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
