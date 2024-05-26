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
        <div className="flex justify-between items-center">
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
        </div>
        <CardDescription className="text-sm text-gray-500 mt-2">
          <Badge
            variant="secondary"
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            {character.species}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <p className="text-base font-medium text-gray-600 mb-2">
          {character.status}
        </p>
        <p className="text-sm text-gray-500">{character.location.name}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 p-6 border-t border-gray-200 flex justify-center">
        <Link href={"/"}>
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Character
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
