import { Button, Toolbar, Typography } from "@mui/material"
import './appbar.css'

function AppBar() {
    return (<div className="container">
        <Toolbar className="toolbar">
            <div className="half-1">
                <img src='https://logopng.com.br/logos/ifood-43.png' className="logo-ifood"/>
                <Typography href="#" className="link">Entregador</Typography>
                <Typography href="#" className="link">Restaurante e Mercado</Typography>
                <Typography href="#" className="link">Carreiras</Typography>
                <Typography href="#" className="link">iFood Card</Typography>
            </div> 
            <div className="half-2">
                <Typography href="#" className="link redtxt">criar conta</Typography>
                <Button className="btn btn_red" variant="contained">Entrar</Button>
            </div>


        </Toolbar>
    </div>)
}

export default AppBar