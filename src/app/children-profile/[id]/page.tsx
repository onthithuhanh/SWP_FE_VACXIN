 
import { VaccinationCard } from "@/components/vaccination-card";
import { User, Calendar, MapPin, Phone } from "lucide-react";

// Dữ liệu mẫu cho đứa trẻ
const childData = {
  id: "123445",
  name: "Nguyễn Văn An",
  dateOfBirth: "01/01/2020",
  gender: "Nam",
  address: "123 Đường ABC, Quận XYZ, TP.HCM",
  parentName: "Nguyễn Văn B",
  parentPhone: "0123456789",
};

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-5xl font-bold">
                {childData.name.charAt(0)}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {childData.name}
                </h1>
                <p className="text-gray-600 mb-4">Mã số: {childData.id}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={20} />
                    <span>Ngày sinh: {childData.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={20} />
                    <span>Giới tính: {childData.gender}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={20} />
                    <span>Địa chỉ: {childData.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={20} />
                    <span>Phụ huynh: {childData.parentName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={20} />
                    <span>Điện thoại: {childData.parentPhone}</span>
                  </div>
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
