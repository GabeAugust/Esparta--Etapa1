import { canFormPalindrome } from "../utils/utils";

describe("canFormPalindrome", () => {
  it("deve retornar true para string vazia", () => {
    expect(canFormPalindrome("")).toBe(true);
  });

  it("deve ignorar maiúsculas e minúsculas (case-insensitive)", () => {
    expect(canFormPalindrome("Tact Coa")).toBe(true); // "taco cat"
    expect(canFormPalindrome("RaceCar")).toBe(true);  // "racecar"
  });

  it("deve retornar false quando não for possível formar palíndromo", () => {
    expect(canFormPalindrome("codigo")).toBe(false);
    expect(canFormPalindrome("abcde")).toBe(false);
  });

  it("deve retornar true para strings que podem formar palíndromo", () => {
    expect(canFormPalindrome("aab")).toBe(true);  // "aba"
    expect(canFormPalindrome("civic")).toBe(true); 
    expect(canFormPalindrome("ivicc")).toBe(true); 
  });

  it("deve ignorar espaços e pontuação", () => {
    expect(canFormPalindrome("Never odd, or even!")).toBe(true);
    expect(canFormPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });

  it("deve lidar com letras acentuadas", () => {
    // Aqui depende da escolha: tratar "á" como letra válida distinta
    expect(canFormPalindrome("aáa")).toBe(true); // pode virar "aáa"
    expect(canFormPalindrome("ãb")).toBe(false); // não dá palíndromo
  });
});