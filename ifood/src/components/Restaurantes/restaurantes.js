import { Button, Toolbar, Typography } from "@mui/material"
import './restaurantes.css'

function Restaurantes() {
    return (<div className="main-res">
        <h1>Os melhores restaurantes</h1>
        <div className="restaurante">
            <div className="restaurante-div">
                <img className="logo" src="https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/Logo%20McDonald_MCDON_DRIV15.jpg?imwidth=128"/>
                <div className="txt-restaurante">
                    <p>Mcdonald's</p>
                    <p className="txt">Lanches</p>
                </div>
                <img className="verificado" src="https://i.imgur.com/NBGIn1m.png"/>
            </div>
            <div className="restaurante-div">
                <img className="logo" src="https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/201910292243_94aaf166-84cc-4ebf-a35d-d223be34d01f.png?imwidth=128"/>
                <div className="txt-restaurante">
                    <p>Coco bambu</p>
                    <p className="txt">Frutos Do Mar</p>
                </div>
                <img className="verificado" src="https://i.imgur.com/NBGIn1m.png"/>
            </div>
            <div className="restaurante-div">
                <img className="logo" src="https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/d4a3984f-2b73-4f46-99df-1d6bc79ff293/202001031317_CXpO_i.png?imwidth=128"/>
                <div className="txt-restaurante">
                    <p>China in Box</p>
                    <p className="txt">Chinesa</p>
                </div>
                <img className="verificado" src="https://i.imgur.com/NBGIn1m.png"/>
            </div>
            <div className="restaurante-div">
                <img className="logo" src="https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/201801231937__HABIB_VERDE.jpg?imwidth=128"/>
                <div className="txt-restaurante">
                    <p>Habib's</p>
                    <p className="txt">Lanches</p>
                </div>
                <img className="verificado" src="https://i.imgur.com/NBGIn1m.png"/>
            </div>
            <div className="restaurante-div">
                <img className="logo" src="https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/201906182008_2b157a73-7564-4733-94c1-8d0376e7bb39.png?imwidth=128"/>
                <div className="txt-restaurante">
                    <p>Outback Steakhouse</p>
                    <p className="txt">Lanches</p>
                </div>
                <img className="verificado" src="https://i.imgur.com/NBGIn1m.png"/>
            </div>
        </div>
        <div className="cupons">
            <img src="https://static.ifood-static.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-1.png"/>
            <img src="https://static.ifood-static.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-2.png"/>
            <img src="https://static.ifood-static.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-3.png"/>
        </div>
    </div>)
}

export default Restaurantes