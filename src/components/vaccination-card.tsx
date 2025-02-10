"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Syringe,
  Calendar,
  User,
  MapPin,
} from "lucide-react";

interface VaccinationCardProps {
  vaccineName: string;
  date: string;
  dose: string;
  doctor: string;
  location: string;
  nextDose?: string;
}

export function VaccinationCard({
  vaccineName,
  date,
  dose,
  doctor,
  location,
  nextDose,
}: VaccinationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <Syringe className="text-blue-500" />
          <div>
            <h3 className="font-semibold text-lg text-blue-600">
              {vaccineName}
            </h3>
            <p className="text-gray-600 text-sm">Ngày tiêm: {date}</p>
          </div>
        </div>
        <div className="text-blue-500">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 bg-blue-50 border-t border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-500" size={18} />
              <div>
                <p className="text-sm text-gray-600">Liều lượng:</p>
                <p className="font-medium">{dose}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <User className="text-blue-500" size={18} />
              <div>
                <p className="text-sm text-gray-600">Bác sĩ:</p>
                <p className="font-medium">{doctor}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-500" size={18} />
              <div>
                <p className="text-sm text-gray-600">Địa điểm:</p>
                <p className="font-medium">{location}</p>
              </div>
            </div>
            {nextDose && (
              <div className="flex items-center gap-2">
                <Calendar className="text-green-500" size={18} />
                <div>
                  <p className="text-sm text-gray-600">Mũi tiêm tiếp theo:</p>
                  <p className="font-medium text-green-600">{nextDose}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
