export default class Porta {
    #numero
    #temPresente
    #selecionada
    #aberta

    constructor(numero, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }
    get temPresente() {
        return this.#temPresente
    }
    get selecionada() {
        return this.#selecionada
    }
    get aberta() {
        return this.#aberta
    }
}

// Abaixo um exemplo de classe (que precisa usar o "this" o tempo todo pra referenciar a estrutura)
// A utilização da hashtag indica que é um atributo privado, não pode ser acessado fora do escopo, a não ser com a utilização de algum método (função), ou criar um getter

/* 
class Pessoa {
    #nome

    constructor(nome) {
        this.#nome = nome
    }

    // Retornando como função
    retornaNome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    // Utilizando um getter
    get nome() {
        return this.#nome
    }

}

const p1 = new Pessoa("Edu")
p1.nome = "Zé" // Isso só funciona porque criamos um setter

console.log(p1.retornaNome())
console.log(p1.nome)
 */