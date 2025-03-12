"use client";
import { getMyChildrenId } from "@/api/childrenApi";
import { VaccinationCard } from "@/components/vaccination-card";
import { Children } from "@/lib/children";
import { User, Calendar,  } from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// Dữ liệu mẫu cho các mũi tiêm
const vaccinations = [
  {
    id: 1,
    vaccineName: "Vắc-xin 6 trong 1 (DPT-HepB-Hib-IPV)",
    date: "15/03/2020",
    dose: "Liều 1/3",
    doctor: "Bs. Nguyễn Văn X",
    location: "Trung tâm Y tế Quận 1",
    nextDose: "15/05/2020",
  },
  {
    id: 2,
    vaccineName: "Vắc-xin Rotavirus",
    date: "01/04/2020",
    dose: "Liều 1/2",
    doctor: "Bs. Trần Thị Y",
    location: "Bệnh viện Nhi Đồng 1",
    nextDose: "01/06/2020",
  },
  {
    id: 3,
    vaccineName: "Vắc-xin Sởi - Quai bị - Rubella (MMR)",
    date: "10/01/2021",
    dose: "Liều duy nhất",
    doctor: "Bs. Lê Văn Z",
    location: "Trung tâm Tiêm chủng VNVC",
  },
];

export default function ChildVaccinationDetails() {
  const [children, setChildren] = useState<Children | null>(null);
  const { id } = useParams<{ id: string }>();
  const fetchChildrenId = useCallback(async () => {
    try {
      const response = await getMyChildrenId(id);
      setChildren(response.result);
    } catch (error) {
      console.error(error);
    }
  }, [id]);
  console.log(children);

  useEffect(() => {
    fetchChildrenId();
  }, [fetchChildrenId]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-5xl font-bold">
                {children?.fullname?.charAt(0).toUpperCase()}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {children?.fullname}
                </h1>
                <p className="text-gray-600 mb-4">Mã số: {children?.userId}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={20} />
                    <span>Ngày sinh: {children?.birthDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={20} />
                    <span>Giới tính: {children?.gender}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={20} />
                    <span>
                      Phụ huynh: {children?.relatives[0]?.fullname}(
                      {children?.relatives[0]?.relationshipType})
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={20} />
                    <span>Điện thoại: {children?.parentPhone}</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Lịch sử tiêm chủng
        </h2>

        <div className="space-y-4">
          {vaccinations.map((vaccination) => (
            <VaccinationCard key={vaccination.id} {...vaccination} />
          ))}
        </div>
      </div>
    </div>
  );
}
