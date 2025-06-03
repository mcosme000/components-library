import { AtomsButton } from "@/components/atoms/button";
import { MoleculesHeader } from "@/components/molecules/header";

export default function ButtonsPage() {
  return (
    <main>
      <MoleculesHeader title="Buttons" backIcon />
      <div className="flex items-center justify-items-center min-h-screen gap-4">
        <AtomsButton variant="primary">Primary</AtomsButton>
        <AtomsButton variant="secondary">Secondary</AtomsButton>
        <AtomsButton variant="destructive">Destructive</AtomsButton>
        <AtomsButton variant="warning">Warning</AtomsButton>
        <AtomsButton variant="success">Success</AtomsButton>
        <AtomsButton variant="outline">Outline</AtomsButton>
        <AtomsButton variant="link">Link</AtomsButton>
      </div>
    </main>
  );
}
