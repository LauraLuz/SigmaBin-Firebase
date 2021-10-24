import Lixeira from "./Lixeira";

export default interface LixeiraRepositorio {
    salvar(lixeira: Lixeira): Promise<Lixeira>
    excluir(lixeira: Lixeira): Promise<void>
    obterTodos(): Promise<Lixeira[]>
}