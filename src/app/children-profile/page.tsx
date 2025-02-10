import { ChildProfileCard } from "@/components/child-profile-card";

const children = [
  {
    id: "123445",
    childName: "Nguyễn Văn An",
    dateOfBirth: "01/01/2020",
    fatherName: "Nguyễn Văn Bình",
    motherName: "Trần Thị Cúc",
    status: "active",
  },
  {
    id: "123446",
    childName: "Phạm Thị Dung",
    dateOfBirth: "15/03/2019",
    fatherName: "Phạm Văn Em",
    motherName: "Lê Thị Phương",
    status: "active",
  },
  {
    id: "123447",
    childName: "Trần Văn Giàu",
    dateOfBirth: "22/07/2021",
    fatherName: "Trần Văn Hùng",
    motherName: "Nguyễn Thị Lan",
    status: "inactive",
  },
];

export default function ChildrenList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Danh sách trẻ em
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-1 w-20 rounded bg-gradient-to-r from-blue-400 to-purple-400" />
            <p className="text-gray-600">Tổng số: {children.length} trẻ</p>
          </div>
        </div>

        <div className="grid gap-6">
          {children.map((child) => (
            <ChildProfileCard key={child.id} {...child} />
          ))}
        </div>
      </div>
    </div>
  );
}
