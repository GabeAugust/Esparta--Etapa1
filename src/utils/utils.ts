type Person = { name: string; city: string };

export function groupByCity(people: Person[]): Record<string, string[]> {
  people.forEach((person) => {
    if (typeof person.name !== "string" || typeof person.city !== "string") {
      throw new Error("Entrada inválida");
    }
  });

  const peopleCity = people.map((person) => person.city);
  const uniqueCities = new Set(peopleCity);
  const cities: string[] = [...uniqueCities];
  const groupedByCity: Record<string, string[]> = {};

  cities.map((city) => {
    groupedByCity[city] = people
      .filter((person) => person.city == city)
      .map((person) => person.name);
  });

  return groupedByCity;
}

export function canFormPalindrome(text: string): boolean {
  if (text === "") return true;

  const characters = text
    .toLowerCase()
    .replace(/[\s.,!?;:]/g, "")
    .split("");

  const oddChars = new Set<string>();

  characters.forEach((char) => {
    if (oddChars.has(char)) {
      oddChars.delete(char); 
    } else {
      oddChars.add(char); 
    }
  });

  return oddChars.size <= 1;
}

export function standardizeNames(names: string[]): string[] {
  if (names.length == 0) {
    return [];
  }

  const standardNames: string[] = names.map((name) => {
    return name
      .trim()
      .split(/\s+/)
      .map(
        (word) =>
          word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  });

  return standardNames;
}

