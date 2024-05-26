const { RICK_AND_MORTY_API } = process.env;

export async function getCharacters(): Promise<
  CharacterFetchResult | undefined
> {
  const url = `${RICK_AND_MORTY_API}/character`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  return response.json();
}
