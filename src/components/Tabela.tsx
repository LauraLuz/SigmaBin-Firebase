import Lixeira from "../core/Lixeira"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    lixeiras: Lixeira[]
    lixeiraSelecionada?: (lixeira: Lixeira) => void
    lixeiraExcluida?: (lixeira: Lixeira) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.lixeiraExcluida || props.lixeiraSelecionada

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4 text-sm">Código</th>
                <th className="text-left p-4 text-sm">Tipo</th>
                <th className="text-left p-4 text-sm">Capacidade</th>
                <th className="text-left p-4 text-sm">Local</th>
                {exibirAcoes ? <th className="p-4 text-sm">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.lixeiras?.map((lixeira, i) => {
            return (
                <tr key={lixeira.id}
                    className={`${i % 2 === 0 ? 'bg-yellow-100' : 'bg-yellow-50'} `}>
                    <td className="text-left p-4 border-r-4 border-yellow-200 text-sm">{lixeira.codigo}</td>
                    <td className="text-left p-4 border-r-4 border-yellow-200 text-sm">{lixeira.tipo}</td>
                    <td className="text-left p-4 border-r-4 border-yellow-200 text-sm">{lixeira.capacidade}</td>
                    <td className="text-left p-4 border-r-4 border-yellow-200 text-sm">{lixeira.local}</td>
                    {exibirAcoes ? renderizarAcoes(lixeira) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(lixeira: Lixeira) {
        return (
            <td className="flex justify-center">
                {props.lixeiraSelecionada ?  (
                    <button onClick={() => props.lixeiraSelecionada?.(lixeira)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-yellow-200
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.lixeiraExcluida ? (
                <button onClick={() => props.lixeiraExcluida?.(lixeira)}className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-yellow-200
                `}>
                    {IconeLixo}
                </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-yellow-500 to-yellow-800 
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody> 
        </table>
    )
}