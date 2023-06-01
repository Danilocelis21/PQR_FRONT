import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

const Footer = () =>{

    const iconoFacebook = <FacebookIcon style={{fontSize:'60px', width:'60px', height:'60px', }}/>
    const iconoInstagram = <InstagramIcon style={{fontSize:'60px', width:'60px', height:'60px'}}/>
    const iconoLinkdin = <LinkedInIcon style={{fontSize:'60px', width:'60px', height:'60px'}}/>

    const redes = ({direccion, icono, text}) =>{
        return(
            <Grid item xs={2}>
                <Button className="iconoRedes">
                <a href={direccion} target="_blank" rel="noreferrer" style={{color:"bisque"}}>
                    {icono}
                </a>
                        
                </Button>
                    <Typography variant="h6" style={{color:'bisque'}}>
                        {text}
                    </Typography>
            </Grid>
        )
        
    }
    return(
        <Grid container spacing={4} className="container3"  >
            <Typography variant="h3" style={{width:'100%', color:'bisque', textAlign:'center', paddingBottom:'40px'}}>
                Redes Sociales
            </Typography>
            <Grid item xs={3}></Grid>
            {redes({text:'Facebook', icono:iconoFacebook})}
            {redes({text:'Instagram', icono: iconoInstagram})}
            {redes({ text:'Linkdin', icono:iconoLinkdin})}
            
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default Footer;