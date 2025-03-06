"use client"
import { getMyChildren } from "@/api/childrenApi";
import { ChildProfileCard } from "@/components/child-profile-card";
import { Children } from "@/lib/children";
import { useCallback, useEffect, useState } from "react";

export default function ChildrenList() {
  const [children, setChildren] = useState<Children[]>([]);
  const fetchChildren = useCallback(async () => {
    try {
      const response = await getMyChildren();
      setChildren(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchChildren();
  }, [fetchChildren]);
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
            <ChildProfileCard key={child.userid} {...child} />
          ))}
        </div>
      </div>
    </div>
  );
}
