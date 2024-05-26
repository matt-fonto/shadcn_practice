import { CharacterCard } from "@/components/custom/CharacterCard";
import { getCharacters } from "@/services/getCharacters";
import { notFound } from "next/navigation";

export default async function Home() {
  const characters = await getCharacters();

  if (!characters) {
    notFound();
  }

  return (
    <main className="p-6">
      <div className="responsive-grid gap-x-4">
        {characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
}
