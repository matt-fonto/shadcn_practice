import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <Card className="shadow-xl rounded-xl overflow-hidden transform transition-transform hover:scale-105">
      <CardHeader className="flex flex-col items-center bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
        <Avatar className="border-2 border-gray-300 shadow-md">
          <AvatarImage src={character.image} alt={character.name} />
          <AvatarFallback>
            <Badge className="bg-red-500 text-white p-2">
              {character.name.slice(0, 2)}
            </Badge>
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl font-bold text-gray-800 ml-4">
          {character.name}
        </CardTitle>

        <CardDescription className="text-sm mt-2">
          {character.species}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 text-center flex flex-col">
        <p>{character.status}</p>
        <p>{character.location.name}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href={"/"}>
          <Button>View Character</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
