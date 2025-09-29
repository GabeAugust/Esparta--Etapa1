import { groupByCity } from '../utils/utils';

type Person = { name: string; city: string };

describe('groupByCity', () => {
  it('deve agrupar pessoas pela cidade mantendo a ordem', () => {
    const people: Person[] = [
      { name: 'Carlos', city: 'São Paulo' },
      { name: 'Maria', city: 'Rio de Janeiro' },
      { name: 'João', city: 'São Paulo' },
      { name: 'Ana', city: 'Belo Horizonte' },
      { name: 'Pedro', city: 'Rio de Janeiro' },
    ];

    const expected = {
      'São Paulo': ['Carlos', 'João'],
      'Rio de Janeiro': ['Maria', 'Pedro'],
      'Belo Horizonte': ['Ana'],
    };

    expect(groupByCity(people)).toEqual(expected);
  });

  it('deve retornar objeto vazio para array vazio', () => {
    expect(groupByCity([])).toEqual({});
  });

  it('deve criar arrays de tamanho 1 para cidades únicas', () => {
    const people: Person[] = [
      { name: 'Lucas', city: 'Curitiba' },
    ];
    const expected = {
      'Curitiba': ['Lucas'],
    };
    expect(groupByCity(people)).toEqual(expected);
  });

  it('deve agrupar corretamente pessoas não consecutivas da mesma cidade', () => {
    const people: Person[] = [
      { name: 'Alice', city: 'Recife' },
      { name: 'Bob', city: 'Salvador' },
      { name: 'Carol', city: 'Recife' },
      { name: 'Dave', city: 'Salvador' },
    ];

    const expected = {
      'Recife': ['Alice', 'Carol'],
      'Salvador': ['Bob', 'Dave'],
    };

    expect(groupByCity(people)).toEqual(expected);
  });

  it('deve tratar cidades com capitalização distinta como diferentes', () => {
    const people: Person[] = [
      { name: 'Eve', city: 'fortaleza' },
      { name: 'Frank', city: 'Fortaleza' },
    ];

    const expected = {
      'fortaleza': ['Eve'],
      'Fortaleza': ['Frank'],
    };

    expect(groupByCity(people)).toEqual(expected);
  });


  it('deve lançar erro se algum item não for do tipo Person', () => {
    const invalidPeople: any[] = [
      { name: 'Alice', city: 'Recife' },
      { name: 'Bob' },            // inválido, falta city
      { name: 'Carol', city: 'Recife' },
    ];

    expect(() => groupByCity(invalidPeople as Person[])).toThrow(
      /Entrada inválida/
    );
  });
});