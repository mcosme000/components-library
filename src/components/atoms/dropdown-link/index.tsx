import Link from "next/link";

interface AtomsDropdownLinkProps {
  href?: string;
  children: React.ReactNode;
}
export const AtomsDropdownLink = ({
  href,
  children,
}: AtomsDropdownLinkProps) => {
  return (
    <Link
      className="px-2 py-1 rounded-lg hover:bg-slate-100 hover:cursor-pointer"
      href={href ? href : ""}
    >
      {children}
    </Link>
  );
};
