import { MoleculesDropdown } from "@/components/molecules/dropdown";

export const OrganismsDropdownHeader = () => {
  const items = [
    { label: "Profile", value: "1" },
    { label: "Settings", value: "2" },
    { label: "Logout", value: "3" },
  ];

  return <MoleculesDropdown items={items} />;
};
