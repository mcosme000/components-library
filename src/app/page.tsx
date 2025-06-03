import { SubstancesLandingLinks } from "./components/substances/landingLinks";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col items-center sm:items-start">
        <SubstancesLandingLinks />
      </main>
    </div>
  );
}
