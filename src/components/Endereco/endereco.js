import { Button, Toolbar, Typography } from "@mui/material"
import './endereco.css'

function Endereco() {
    return (<div>
        <div className="main">
        <h1>Faça mercado no iFood</h1>
        <h2>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</h2>
        <div className="endereco">
            <div className="pesquisa">
                <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-rouge.png"/>
                <p>Em qual endereço você está?</p>
            </div>
            <div className="botao">
                <p>Ver mercados próximos</p>
            </div>
        </div>
        <div className="categorias">
            <div>Frios</div>
            <div>Laticínios</div>
            <div>Feira</div>
            <div>Bebidas</div>
            <div>Doces</div>
            <div>Massas frescas</div>
            <div>Limpeza</div>
        </div>
        <div className="categorias">
            <div>Padaria</div>
            <div>Higiene</div>
            <div>Congelados</div>
            <div>Carnes</div>
            <div>Cerveja</div>
        </div>
    </div>
    <div className="barra"/>
    </div>)
}

export default Endereco