import { Button, Toolbar, Typography } from "@mui/material"
import './card.css'

function Card() {
    return (<div className="container-card">
        <div className="card-row">
            <div className="card-restaurante">
                <p>Restaurante</p>
                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png"></img>
            </div>
            <div className="card-mercado">
                <p>Mercado</p>
                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/market.png"></img>
            </div>
        </div>
        <div className="card-row">
            <div className="card-bebidas">
                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/drinks.png"></img></div>
            <div className="card-farmacia">
                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/pharmacy.png"></img></div>
            <div className="card-petshop">
                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/petshop.png"></img></div>
        </div>
    </div>
    )
}

export default Card