import LixeiraRepositorio from "../../core/LixeiraRepositorio";
import Lixeira from "../../core/Lixeira";
import firebase from "../config";

export default class ColecaoLixeira implements LixeiraRepositorio {

    #conversor = {
        toFirestore(lixeira: Lixeira) {
            return {
                codigo: lixeira.codigo,
                tipo: lixeira.tipo,
                capacidade: lixeira.capacidade,
                local: lixeira.local
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Lixeira {
            const dados = snapshot.data(options)
            return new Lixeira(dados.codigo, dados.tipo, dados.capacidade, dados.local, snapshot.id)
        }
    }

    async salvar(lixeira: Lixeira): Promise<Lixeira> {
        if(lixeira?.id) {
            await this.colecao().doc(lixeira.id).set(lixeira)
            return lixeira
        } else {
            const docRef = await this.colecao().add(lixeira)
            const doc = await docRef.get()
            return doc.data()
        }
        return null
    }

    async excluir(lixeira: Lixeira): Promise<void> {
        return this.colecao().doc(lixeira.id).delete()
    }

    async obterTodos(): Promise<Lixeira[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('lixeiras')
            .withConverter(this.#conversor)
    }
}