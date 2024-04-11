import { Button, Toolbar, Typography } from "@mui/material"
import './card.css'

function Card() {
    return (<div className="container-card">
        <div className="card-row">
            <div className="card-restaurante">
                <div className="txt-card">
                <p>Restaurante</p>
                <div className="ver-opcoes">Ver opções ></div>
                </div>
                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png"></img>
            </div>
            <div className="card-mercado">
                <div className="txt-card">
                <p>Mercado</p>
                <div className="ver-opcoes" style={{background: "#9eb53e"}}>Ver opções ></div>
                </div>
                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/market.png"></img>
            </div>
        </div>
        <div className="card-row">
            <div className="card-bebidas">
                <img className="card-img" src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/drinks.png"></img>
                <div className="card-txt">
                    <p>Bebidas</p>
                    <img src="https://i.imgur.com/LJcWokk.png"/>
                </div>
            </div>
            <div className="card-farmacia">
                <img className="card-img" src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/pharmacy.png"></img>
                <div className="card-txt">
                    <p>Farmácia</p>
                    <img src="https://i.imgur.com/LJcWokk.png"/>
                </div>
            </div>
            <div className="card-petshop">
                <img className="card-img" src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/petshop.png"></img>
                <div className="card-txt">
                    <p>Pet shop</p>
                    <img src="https://i.imgur.com/LJcWokk.png"/>
                </div>
            </div>
        </div>
        <div className="linha"/>
    </div>
    )
}

export default Card