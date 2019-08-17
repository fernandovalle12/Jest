describe("Orientação a Objetos", function() {
  class Pessoa {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    fullname() {
      return `${this.firstname}` + ` ` + `${this.lastname}`
    }
  }
  // IMPLEMENTE a classe Pessoa que recebe dois parâmetros: firstname e lastname no construtor
  // e implemente o método fullname() que retorna o nome completo

  it("retorna o nome completo Willian Gibson", function() {
    var pessoa = new Pessoa("Willian", "Gibson");

    expect(pessoa.fullname()).toBe("Willian Gibson");
  });

  it("retorna o nome completo Douglas Adams", function() {
    var pessoa = new Pessoa("Douglas", "Adams");

    expect(pessoa.fullname()).toBe("Douglas Adams");
  });
});
