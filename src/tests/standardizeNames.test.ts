import { standardizeNames } from "../utils/utils";

describe("standardizeNames", () => {
  it("deve retornar array vazio quando entrada for vazia", () => {
    expect(standardizeNames([])).toEqual([]);
  });

  it("deve colocar primeira letra maiúscula e o resto minúscula", () => {
    expect(standardizeNames(["ana", "PEDRO", "LUiza"])).toEqual([
      "Ana",
      "Pedro",
      "Luiza",
    ]);
  });

  it("deve tratar acentos corretamente", () => {
    expect(standardizeNames(["JOÃO", "CATARINA"])).toEqual([
      "João",
      "Catarina",
    ]);
  });

  it("deve normalizar espaços extras", () => {
    expect(standardizeNames(["  maria   clara "])).toEqual([
      "Maria Clara",
    ]);
  });

  it("deve manter string vazia caso entrada seja string vazia", () => {
    expect(standardizeNames(["", "ana"])).toEqual(["", "Ana"]);
  });

  it("não deve alterar ordem original dos nomes", () => {
    expect(standardizeNames(["CATARINA", "joão", "MaRiA"])).toEqual([
      "Catarina",
      "João",
      "Maria",
    ]);
  });
});