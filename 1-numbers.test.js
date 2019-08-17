describe('typeof', function() {
  function typeOf(item) {
      return typeof item
  }

  it('typeof integer', function() {
    expect(typeOf(10)).toBe('number');
  });

  it('typeof float', function() {
    expect(typeOf(10.0)).toBe('number');
  });

  it('typeof string', function() {
    expect(typeOf('test')).toBe('string');
  });
});

describe('adição', function() {
  it('retorna o valor da adição de inteiros', function() {
    const value = 2; 
    expect(value + 5).toBe(7);
  });

  it('retorna o valor da adição de floats', function() {
    const value = 3.141;
    expect(value + 1.0).toBe(4.141);
  });

  it('retorna o valor da "adição" entre uma string e um inteiro', function() {
    const value = '1'; 
    expect(value + 1).toBe('11');
  });

  it('retorna o valor da "adição" entre uma string e um float', function() {
    const value = '1'; 
    expect(value + 1.1).toBe('11.1');
  });
});

describe('subtração', function() {
  it('retorna o valor da subtração de inteiros', function() {
    const value = 2; 
    expect(value - 5).toBe(-3);
  });

  it('retorna o valor da subtração de floats', function() {
    const value = 4.141;
    expect(value - 1.0).toBe(3.141);
  });

  it('retorna o valor da "subtração" entre uma string e um inteiro', function() {
    const value = -'1'; 
    expect(value + 1).toBe(0);
  });
});

describe('módulo', function() {
  it('retorna o valor do módulo', function() {
    const result = 10 % 9; 
    expect(result).toBe(1);
  });
});

describe('desafio', function() {
  it('retorna o valor total da soma realizada em um for', function() {
    var result = 0;
    for (var i = 0; i <= 5; i++) {
      result = result + i;
    }

    expect(result).toBe(15);
  });
});
