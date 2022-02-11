import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";

export default function Home() {
  
  //Criando um gerenciador de estado
  const [portas, setPortas] = useState(criarPortas(4, 2))

  function renderizarPorta() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  console.log(criarPortas(3, 2))
  
  return (
    <div style={{display: "flex"}}>
      {renderizarPorta()}
    </div>
  )
}
