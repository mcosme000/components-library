import { MoleculesHeader } from "@/components/molecules/header";
import { MoleculesReactTable } from "@/components/molecules/table/react-table";

export default function TablesPage() {
  return (
    <main>
      <MoleculesHeader title="Buttons" backIcon />
      <div className="flex flex-col min-h-screen gap-4">
        <h1 className="text-xl font-bold">Molecules React Table</h1>
        <MoleculesReactTable />
      </div>
    </main>
  );
}
