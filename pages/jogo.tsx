import styles from "../styles/jogo.module.css"
import Porta from "../components/Porta"
import { useState } from "react"
import { atualizarPortas, criarPortas } from "../functions/portas"
import Link from "next/link"

export default function Jogo() {
    //Criando um gerenciador de estado
    const [portas, setPortas] = useState(criarPortas(5, 2))
    
    function renderizarPorta() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} 
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    
    console.log(criarPortas(3, 2))
    
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPorta()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <a className={styles.botao}>Voltar</a>
                </Link>
            </div>
        </div>
    )
}