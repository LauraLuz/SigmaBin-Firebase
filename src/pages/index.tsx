import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Lixeira from '../core/Lixeira'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import LixeiraRepositorio from '../core/LixeiraRepositorio'
import ColecaoLixeira from '../backend/db/ColecaoLixeiras'
import firebase from 'firebase'

export default function Home() {

  const repo: LixeiraRepositorio = new ColecaoLixeira()

  const [lixeira, setLixeira] = useState<Lixeira>(Lixeira.vazio())
  const [lixeiras, setLixeiras] = useState<Lixeira[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  useEffect(obterTodos, [])
  
  function obterTodos() {
    repo.obterTodos().then(lixeiras => {
      setLixeiras(lixeiras)
      setVisivel('tabela')
    })

  }

  function lixeiraSelecionada(lixeira: Lixeira) {
    setLixeira(lixeira)
    setVisivel('form')
  }

  async function lixeiraExcluida(lixeira: Lixeira) {
    await repo.excluir(lixeira)
    obterTodos()
  }

  function novaLixeira() {
    setLixeira(Lixeira.vazio())
    setVisivel('form')
  }

  async function salvarLixeira(lixeira: Lixeira) {
    await repo.salvar(lixeira)
    obterTodos()
  }

  return (
    
    <div className={`
      flex flex-col h-screen
      bg-gradient-to-r from-yellow-500 to bg-yellow-700
      text-white
    `}>
      <Layout titulo="Lixeiras Cadastradas">
        {visivel === 'tabela' ? (
        <>
          <div className="flex justify-start">
            <Botao cor="green" className="mb-4" 
            onClick={novaLixeira}>
              Nova Lixeira
            </Botao>
          </div>
          <Tabela lixeiras={lixeiras}
            lixeiraSelecionada={lixeiraSelecionada}
            lixeiraExcluida={lixeiraExcluida}
          />
        </>
        ) : (
          <Formulario 
            lixeira={lixeira}
            lixeiraMudou={salvarLixeira}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
    
  )
}

