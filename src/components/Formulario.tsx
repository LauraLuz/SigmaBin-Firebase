import { useState } from "react"
import Entrada from "./Entrada"
import Lixeira from "../core/Lixeira"
import Botao from "../components/Botao"

interface FormularioProps {
    lixeira: Lixeira
    lixeiraMudou?: (lixeira: Lixeira) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.lixeira?.id ?? null
    const [codigo, setCodigo] = useState(props.lixeira?.codigo ?? 0)
    const [tipo, setTipo] = useState(props.lixeira?.tipo ?? '')
    const [capacidade, setCapacidade] = useState(props.lixeira?.capacidade ?? '')
    const [local, setLocal] = useState(props.lixeira?.local ?? '')
    return (
        <div className='h-screen'>
            {id ? (
            <Entrada
                somenteLeitura
                texto="Código"
                valor={id}    
            />
            ) : false}
            <Entrada
                texto="Código" 
                valor={codigo}
                valorMudou={setCodigo}
                className="mb-5"
            />
            <Entrada  
                texto="Tipo" 
                valor={tipo}
                valorMudou={setTipo}
                className="mb-5"
            />
            <Entrada  
                texto="Capacidade"  
                valor={capacidade}
                valorMudou={setCapacidade}
                className="mb-5"
            />
            <Entrada  
                texto="Local"  
                valor={local}
                valorMudou={setLocal}
            />
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.lixeiraMudou?.(new Lixeira(codigo, tipo, capacidade, local, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}