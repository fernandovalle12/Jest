describe('string', function() {
  it('retorna o tamanho de uma string', function() {
    const str = 'teste';
    expect(str.length).toBe(5); // IMPLEMENTE
  });

  it('retorna o segundo char de uma string', function() {
    const str = 'abcde';
    expect(str[1]).toBe('b'); 
  });

  it('retorna o os 5 primeiros chars de uma string', function() {
    const str = 'abcdefghi';
    expect(str.slice(0,5)).toBe('abcde'); 
  });

  it('retorna a concatenação de duas strings', function() {
    const str_one = 'Hello';
    const str_two = ' World!';

    expect(`${str_one}${str_two}`).toBe('Hello World!'); 
  });

  it('retorna a interpolação de duas strings', function() {
    const str_one = 'Hello';
    const str_two = 'World';

    expect(str_one + ` ` + str_two + `!`).toBe('Hello World!'); 
  });

  it('replace uma parte da string', function() {
    const str = 'Hello, World!';
    const replace = str.replace(/World/, 'Student')

    expect(replace).toBe('Hello, Student!'); // IMPLEMENTE
  });

  it('split uma string', function() {
    const str = 'Isso é uma string';

    expect(str.split(' ')).toEqual(['Isso', 'é', 'uma', 'string']); // IMPLEMENTE
  });

  it('lower case uma string', function() {
    const str = 'ISSO É UMA STRING';

    expect(str.toLowerCase()).toBe('isso é uma string'); // IMPLEMENTE
  });

  it('upper case uma string', function() {
    const str = 'isso é uma string';

    expect(str.toUpperCase()).toBe('ISSO É UMA STRING'); // IMPLEMENTE
  });
});
