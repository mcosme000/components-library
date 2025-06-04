"use client";

import { AtomsDropdownLink } from "@/components/atoms/dropdown-link";
type Item = {
  label: string;
  value: string;
};

interface MoleculesDropwDown {
  items: Item[];
}

export const MoleculesDropdown = ({ items }: MoleculesDropwDown) => {
  return (
    <div className="flex flex-col absolute bg-white top-12 right-0 rounded-lg border border-slate-200 w-40">
      {items.map((item) => (
        <AtomsDropdownLink key={item.value} href={item.value}>
          {item.label}
        </AtomsDropdownLink>
      ))}
    </div>
  );
};
