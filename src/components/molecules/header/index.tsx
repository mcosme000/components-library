import { AtomsButtonBack } from "@/components/atoms/button/back";

interface MoleculesHeaderProps {
  title: string;
  backIcon?: boolean;
}

export const MoleculesHeader = ({ title, backIcon }: MoleculesHeaderProps) => {
  return (
    <div className="h-40 flex items-center gap-4 text-gray-600">
      {backIcon && <AtomsButtonBack />}
      <h1 className="text-xl font-bold">{title}</h1>
      {backIcon}
    </div>
  );
};
