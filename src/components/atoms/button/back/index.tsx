"use client";

import { AtomsButton } from "@/components/atoms/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const AtomsButtonBack = () => {
  const router = useRouter();
  return (
    <AtomsButton variant="outline" onClick={() => router.back()}>
      <ChevronLeft size={14} className="text-black" />
    </AtomsButton>
  );
};
