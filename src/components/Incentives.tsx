import Image from "next/image";

const incentives = [
  {
    name: "Đảm bảo an toàn",
    imageSrc: "/img/a2.png",
    description:
      "Chúng tôi đảm bảo tất cả các loại vacxin đều được kiểm định và chứng nhận an toàn cho trẻ nhỏ.",
  },
  {
    name: "Tận tâm chăm sóc",
    imageSrc: "/img/a1.png",
    description:
      "Đội ngũ y bác sĩ của chúng tôi luôn tận tâm chăm sóc và tư vấn cho bạn về các loại vacxin phù hợp nhất.",
  },
  {
    name: "Dịch vụ chuyên nghiệp",
    imageSrc: "/img/a3.jpg",
    description:
      "Chúng tôi cung cấp dịch vụ chuyên nghiệp, đảm bảo quá trình tiêm chủng diễn ra an toàn và hiệu quả.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Chúng tôi xây dựng dịch vụ dựa trên sự an toàn của trẻ nhỏ
                </h2>
                <p className="mt-4 text-gray-500">
                Tại Vacxin cho trẻ nhỏ, chúng tôi cam kết mang đến những loại vacxin an toàn và hiệu quả nhất cho con bạn. Sự an toàn và sức khỏe của trẻ nhỏ luôn là ưu tiên hàng đầu của chúng tôi.
                </p>
            </div>
            <Image
              width={500}
              height={500}
              alt=""
              src="/img/a2.png"
              className="aspect-[3/2] w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <Image
                    alt=""
                    width={500}
                    height={500}
                    src={incentive.imageSrc}
                    className="size-16"
                  />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
