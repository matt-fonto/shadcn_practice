import { getCharacters } from "@/services/getCharacters";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const characters = await getCharacters();

  if (!characters) {
    notFound();
  }

  return (
    <main className="p-6">
      <div className="responsive-grid gap-x-4">
        {characters.results.map((character) => (
          <Card
            key={character.id}
            className="shadow-lg rounded-lg overflow-hidden"
          >
            <CardHeader className="flex flex-col items-center bg-gray-100 p-4 border-b border-gray-300">
              <CardTitle className="text-lg font-semibold">
                {character.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {character.species}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-center text-sm mb-4">{character.status}</p>
              <img
                src={character.image}
                alt={character.name}
                className="rounded-md shadow-md w-full"
              />
            </CardContent>
            <CardFooter className="bg-gray-100 p-4 border-t border-gray-300">
              <p className="text-center text-sm">{character.location.name}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
