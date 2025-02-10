"use client";

import { useState } from "react";
import { VaccineCard } from "@/components/vaccine-card";
import { SelectedVaccines } from "@/components/selected-vaccines";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const vaccines = [
  {
    name: "VẮC XIN SHINGRIX PHÒNG BỆNH ZONA THẦN KINH",
    origin: "GSK (Bỉ)",
    disease: "Zona thần kinh",
    price: 3890000,
  },
  {
    name: "VẮC XIN PHÒNG BỆNH SỐT XUẤT HUYẾT QDENGA",
    origin: "Takeda (Germany)",
    disease: "Sốt xuất huyết",
    price: 1390000,
  },
  {
    name: "VẮC XIN PRIORIX PHÒNG BỆNH SỞI - QUAI BỊ",
    origin: "GSK (Bỉ)",
    disease: "Sởi - quai bị - rubella",
    price: 495000,
  },
];

export default function Vaccines() {
  const [selectedVaccines, setSelectedVaccines] = useState<typeof vaccines>([]);

  const toggleSelection = (vaccine: (typeof vaccines)[0]) => {
    const index = selectedVaccines.findIndex((v) => v.name === vaccine.name);
    if (index === -1) {
      setSelectedVaccines([...selectedVaccines, vaccine]);
    } else {
      setSelectedVaccines(
        selectedVaccines.filter((v) => v.name !== vaccine.name)
      );
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-[#1a237e] text-2xl font-bold">
          THÔNG TIN SẢN PHẨM VẮC XIN
        </h1>
        <div className="flex-1 max-w-md ml-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="search"
              placeholder="Tìm kiếm tên vắc xin.."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[#1a237e]"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-sm text-gray-600 mb-2 block">
          Hiển thị theo
        </label>
        <Select defaultValue="all">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Tất cả" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="price-asc">Giá tăng dần</SelectItem>
            <SelectItem value="price-desc">Giá giảm dần</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {vaccines.map((vaccine) => (
              <VaccineCard
                key={vaccine.name}
                {...vaccine}
                isSelected={selectedVaccines.some(
                  (v) => v.name === vaccine.name
                )}
                onSelect={() => toggleSelection(vaccine)}
              />
            ))}
          </div>
        </div>

        <div>
          <SelectedVaccines
            vaccines={selectedVaccines}
            onRemove={(index) => {
              setSelectedVaccines(
                selectedVaccines.filter((_, i) => i !== index)
              );
            }}
          />
        </div>
      </div>
    </main>
  );
}
