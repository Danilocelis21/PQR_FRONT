import { Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import './header.css'
import TrofeoIcon from '@mui/icons-material/EmojiEvents';
import * as React from 'react';




const Header = () =>{

    

    const navigate = useNavigate();

    return(
        <Grid container spacing={5} className="header">
            <Grid item xs={3} className="gridIcono">
                <TrofeoIcon style={{color:'bisque', width:'80px', height:'60', paddingLeft:'40px'}}/>
                <Typography variant="h6" style={{color:'bisque'}}>
                    Tienda Max Sport
                </Typography>
            </Grid>
            <Grid className="botones">
                <Button id="boton1">Inicio Sesion</Button>
            </Grid>
            <Grid className="botones">
                <Button id='boton2'>Registrarse</Button>
            </Grid>
            
            <Grid className="botones">
                <Button onClick={() =>navigate('/pqrs')} id='boton3'> PQRS</Button>
            </Grid>
        </Grid>
    )
}

export default Header;
