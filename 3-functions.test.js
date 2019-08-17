describe('Funções', function() {
  it('Implemente uma função chamada add que recebe dois parâmtros e retorna a soma deles', function() {

    function add(a,b){
      return a + b;
    }
    expect(add(1, 2)).toBe(3);
  });
});
