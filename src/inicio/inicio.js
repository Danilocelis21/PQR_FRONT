import './inicio.css'
import Header from "../header/header"
import Footer from '../footer/footer'
import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import peticion from '../imagenes/peticion1.png'
import quejas from '../imagenes/quejas1.jpg'
import { useNavigate} from 'react-router-dom'
import reclamos from '../imagenes/reclamo1.jpg'


const Inicio = () =>{


    const navigate = useNavigate();

    return(
        <>
        <div>

        {Header()}
        <Grid container spacing={1} style={{ paddingLeft:'30px' ,border:'solid',borderRadius:'20px',marginTop:'70px', marginLeft:'25%', width:'800px', height: '300px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Grid>
                <Typography variant='h3' style={{marginBottom:'30px'}}>
                    PQRS
                </Typography>
            </Grid>
            <Grid>
                <Typography variant='body1'>
                El Sistema de Peticiones, Quejas, Reclamos y Sugerencias PQRS es una 
                herramienta que nos permite conocer las inquietudes y manifestaciones 
                que tienen nuestros grupos de interés para que tengamos la oportunidad de 
                fortalecer nuestro servicio y seguir en el camino hacia la excelencia operativa.
                </Typography>
            </Grid>            
        </Grid>

        <Grid container spacing={2} id='contendor1'>
            <Grid item xs={4} style={{marginLeft:'10%'}}>
            <Typography variant='h4' style={{marginBottom:'15px'}}>
                Peticiones
            </Typography>
                <img src={peticion} id='imagenPeticiones'></img>
                <Typography variant='body1' style={{marginLeft:'10px', textAlign:'justify'}}>
                    Siempre hay una oportunidad para mejorar la calidad de nuestro servicio y 
                    la calidad de  nuestra relación con nuestros usuarios, con la excelencia que 
                    se merecen.
                </Typography>

            </Grid>
            <Grid item xs={4} style={{marginLeft:'10%'}}>
            <Typography variant='h4' style={{marginBottom:'15px'}}>
                Quejas
            </Typography>
                <img src={quejas} id='imagenQuejas'></img>
                <Typography variant='body1' style={{marginLeft:'10px', textAlign:'justify'}}>
                    Siempre hay una oportunidad para mejorar la calidad de nuestro servicio y 
                    la calidad de  <br></br> nuestra relación con nuestros usuarios, con la excelencia que 
                    se merecen.
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={3} id='contendor2'>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} >
            <Typography variant='h4' style={{marginBottom:'15px'}}>
                Reclamos
            </Typography>
                <img src={reclamos} id='imagenReclamos'></img>
                <Typography variant='body1' style={{marginLeft:'10px', textAlign:'justify'}}>
                    Siempre hay una oportunidad para mejorar la calidad de nuestro servicio y 
                    la calidad de  nuestra relación con nuestros usuarios, con la excelencia que 
                    se merecen.
                </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>

        <Grid container>
            <Grid item xs={5.5}></Grid>
            <Grid item xs={4}>
                <Button onClick={() => navigate('/formulario')} id='botonPqr'>Generar PQR</Button>
            </Grid>
        </Grid>
        
        

        {Footer()}
        
        </div>
        </>
    )
}


export default Inicio