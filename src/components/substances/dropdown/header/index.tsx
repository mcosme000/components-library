"use client";

import { AtomsButton } from "@/components/atoms/button";
import { OrganismsDropdownHeader } from "@/components/organisms/dropdown/header";
import { useState } from "react";

export const SubstancesDropdownHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-fit bg-slate-200">
      <AtomsButton onClick={() => setIsOpen(!isOpen)} variant="success">
        Header dropdown
      </AtomsButton>
      {isOpen && <OrganismsDropdownHeader />}
    </div>
  );
};
