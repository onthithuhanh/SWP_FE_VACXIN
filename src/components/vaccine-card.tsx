interface VaccineCardProps {
  name: string;
  origin: string;
  disease: string;
  price: number;
  isSelected?: boolean;
  onSelect: () => void;
}

export function VaccineCard({
  name,
  origin,
  disease,
  price,
  isSelected,
  onSelect,
}: VaccineCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-sky-50 p-4">
        <h3 className="text-[#1a237e] font-medium text-lg leading-tight mb-2">
          {name}
        </h3>
        <div className="text-gray-600 text-sm">Nguồn gốc: {origin}</div>
        <div className="text-gray-600 text-sm mb-2">{disease}</div>
        <div className="flex items-center gap-2 text-[#1a237e] font-medium">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
          </svg>
          {new Intl.NumberFormat("vi-VN").format(price)} VND
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-3">
          Phòng bệnh:
          <div className="mt-1">{disease}</div>
        </div>
        <button
          onClick={onSelect}
          className={`w-full py-2 px-4 rounded text-center font-medium transition-colors
            ${
              isSelected
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-[#1a237e] text-white hover:bg-[#272f7f]"
            }`}
        >
          {isSelected ? "ĐÃ CHỌN" : "CHỌN"}
        </button>
      </div>
    </div>
  );
}
