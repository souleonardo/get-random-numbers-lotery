import React, { useState } from 'react'
import './style.css'

function PaginaInicial() {
  /*Retorna a primeira rodada de números*/ 
  const [numeroAleatorio, setNumeroAleatorio,] = useState(0)
  const [numeroAleatorio1, setNumeroAleatorio1] = useState(0)
  const [numeroAleatorio2, setNumeroAleatorio2] = useState(0)
  const [numeroAleatorio3, setNumeroAleatorio3] = useState(0)
  const [numeroAleatorio4, setNumeroAleatorio4] = useState(0)
  const [numeroAleatorio5, setNumeroAleatorio5] = useState(0)
/*Retorna a segunda rodada de números*/ 
  const [numeroAleatorio6, setNumeroAleatorio6] = useState(0)
  const [numeroAleatorio7, setNumeroAleatorio7] = useState(0)
  const [numeroAleatorio8, setNumeroAleatorio8] = useState(0)
  const [numeroAleatorio9, setNumeroAleatorio9] = useState(0)
  const [numeroAleatorio10, setNumeroAleatorio10] = useState(0)
  const [numeroAleatorio12, setNumeroAleatorio12] = useState(0)
  
  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio(novoNumero)

    const novoNumero1 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio1(novoNumero1)

    const novoNumero2 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio2(novoNumero2)

    const novoNumero3 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio3(novoNumero3)

    const novoNumero4 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio4(novoNumero4)

    const novoNumero5 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio5(novoNumero5)
    
/*Segunda rodada*/

    const novoNumero6 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio6(novoNumero6)

    const novoNumero7 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio7(novoNumero7)

    const novoNumero8 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio8(novoNumero8)

    const novoNumero9 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio9(novoNumero9)

    const novoNumero10 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio10(novoNumero10)

    const novoNumero12 = Math.floor(Math.random() * (60 - 1) + 1)
    setNumeroAleatorio12(novoNumero12)

  }

  return (
    <div className="conteudo-centralizado">
      <h3>Jovens, Copiem seu número da sorte<span>&#129310;</span>:</h3>
      <h1>
        {numeroAleatorio}, 
        {numeroAleatorio1}, 
        {numeroAleatorio2}, 
        {numeroAleatorio3}, 
        {numeroAleatorio4}, 
        {numeroAleatorio5}
      </h1>

      <h1>
        {numeroAleatorio6},
         {numeroAleatorio7},
          {numeroAleatorio8},
           {numeroAleatorio9},
            {numeroAleatorio10},
             {numeroAleatorio12}
      </h1>

      <div className="area-botao">
        <label>Clique no botão abaixo para gerar um número aleatório :</label>

        <button className="Button" onClick={gerarNumero}>
          Gerar número
        </button>
        <p className='warning'>*Por enquanto, só geramos 2 jogos por vez</p>
      </div>
    </div>
  )
}

export default PaginaInicial
