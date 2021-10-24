export default class Lixeira {
    #id: string
    #codigo: number
    #tipo: string
    #capacidade: string
    #local: string

    constructor(codigo: number, tipo: string, capacidade: string, local: string, id: string = null){
        this.#codigo = codigo
        this.#tipo = tipo
        this.#id = id
        this.#capacidade = capacidade
        this.#local = local
    }

    static vazio() {
        return new Lixeira(0, '', '', '')
    }

    get id() {
        return this.#id
    }

    get codigo() {
        return this.#codigo
    }
    
    get tipo() {
        return this.#tipo
    }

    get capacidade() {
        return this.#capacidade
    }
    
    get local() {
        return this.#local
    }
}