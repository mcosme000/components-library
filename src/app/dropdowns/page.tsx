import { MoleculesHeader } from "@/components/molecules/header";
import { SubstancesDropdownHeader } from "@/components/substances/dropdown/header";

export default function DropdownsPage() {
  return (
    <main>
      <MoleculesHeader title="Dropdowns" backIcon />
      <div className="flex items-center justify-items-center min-h-screen gap-4">
        <SubstancesDropdownHeader />
      </div>
    </main>
  );
}
