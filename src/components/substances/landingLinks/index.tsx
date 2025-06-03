"use client";

import { useRouter } from "next/navigation";
import { AtomsButton } from "@/components/atoms/button";

export const SubstancesLandingLinks = () => {
  const items = {
    badges: {
      title: "Badges",
      href: "/badges",
    },
    buttons: {
      title: "Buttons",
      href: "/buttons",
    },
    cards: {
      title: "Cards",
      href: "/cards",
    },
    tables: {
      title: "Tables",
      href: "/tables",
    },
  };

  const router = useRouter();

  return (
    <div className="grid grid-cols-6 gap-4">
      {Object.entries(items).map(([key, value]) => {
        return (
          <AtomsButton
            key={key}
            variant="link"
            onClick={() => router.push(value.href)}
          >
            {value.title}
          </AtomsButton>
        );
      })}
    </div>
  );
};
