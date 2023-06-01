import './pqrs.css'
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const Pqrs = () => {

    

    const [show, setShow] = useState(true)
    const [saveButton, setSaveButton] = useState(true)
    const [showAlert, setAlert] = useState(false)
    const [showAlertError, setAlertError] = useState(false)
    const [showAlertCedula, setAlertCedula] = useState(false)
    const [showAlertNombre, setAlertNombre] = useState(false)
    const [showAlertApellido, setAlertApellido] = useState(false)
    const [showAlertCelular, setAlertCelular] = useState(false)
    const [showAlertFijo, setAlertFijo] = useState(false)
    const [showAlertCorreo, setAlertCorreo] = useState(false)
    const [showAlertTituloPqr, setAlertTituloPqr] = useState(false)
    const [showAlertTipoTikect, setAlertTipoTikect] = useState(false)
    const [showAlertDescripcion, setAlertDescripcion] = useState(false)
    const [showAlertEstado, setAlertEstado] = useState(false)
    const [showAlertEliminar, setAlertEliminar] = useState(false)
    const [showAlertActualizar, setAlertActualizar] = useState(false)
    const [data, setData] = useState([])
    const [idPQRS, setIdPQRS] = useState(0)
    const [cedula, setCedula] = useState(0)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [celular, setCelular] = useState(0)
    const [fijo, setFijo] = useState(0)
    const [correo, setCorreo] = useState("")
    const [tituloPqr, setTituloPqr] = useState("")
    const [tipoTikect, setTipoTikect] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [estado, setEstado] = useState("")


    const onCedulaChange = event => setCedula(event.target.value)
    const onNombreChange = event => setNombre(event.target.value)
    const onApellidoChange = event => setApellido(event.target.value)
    const onCelularChange = event => setCelular(event.target.value)
    const onFijoChange = event => setFijo(event.target.value)
    const onCorreoChange = event => setCorreo(event.target.value)
    const onTituloPqrChange = event => setTituloPqr(event.target.value)
    const onTipoTikectChange = event => setTipoTikect(event.target.value)
    const onDescripcionChange = event => setDescripcion(event.target.value)
    const onEstadoChange = event => setEstado(event.target.value)
    
    const getData = async () => {
    try {
        const {data: response} = await axios.get('http://localhost:3000/PQRS')
        setData(response)
    } catch (error) {
        console.log(error.message)
    }
}

useEffect(() => {
    getData()
    validateErrrorNombre()
})

const  validateErrrorNombre = () => {
    if(nombre.length > 0) {
        setAlertNombre(false)
    }
}

const showForm = () =>{
    if (show){
        setShow(false)
        setSaveButton(true)
    }
}

const cancel = () =>{
    if (!show){
        setCedula(0)
        setNombre("")
        setApellido("")
        setCelular(0)
        setFijo(0)
        setCorreo("")
        setTituloPqr("")
        setTipoTikect("")
        setDescripcion("")
        setEstado("")
        setShow(true)
        setAlertError(false)
    }
}

const showTable = () =>{
    if (cedula === 0){
        setAlertError(true)
        setAlertCedula(true)
    } 
    if (nombre === ""){
        setAlertError(true)
        setAlertNombre(true)
    } 
    if (apellido === ""){
        setAlertError(true)
        setAlertApellido(true)
    }
    if(celular === 0){
        setAlertError(true)
        setAlertCelular(true)
    }
    if(fijo === 0){
        setAlertError(true)
        setAlertFijo(true)
    }
    if(correo === ""){
        setAlertError(true)
        setAlertCorreo(true)
    }
    if(tituloPqr === ""){
        setAlertError(true)
        setAlertTituloPqr(true)
    }
    if(tipoTikect === ""){
        setAlertError(true)
        setAlertTipoTikect(true)
    }
    if(descripcion === ""){
        setAlertError(true)
        setAlertDescripcion(true)
    }
    if(estado === ""){
        setAlertError(true)
        setAlertEstado(true)
    }
    else{
        axios.post('http://localhost:3000/agregar', {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        celular: celular,
        fijo:fijo,
        correo: correo,
        tituloPqr: tituloPqr,
        tipoTikect:tipoTikect,
        descripcion: descripcion,
        estado: estado
    }).then((response) => {
        setCedula(0)
        setNombre("")
        setApellido("")
        setCelular(0)
        setFijo(0)
        setCorreo("")
        setTituloPqr("")
        setTipoTikect("")
        setDescripcion("")
        setEstado("")
        
        setShow(true)
        setAlert(true)
        setAlertError(false)
        setAlertCedula(false)
        setAlertNombre(false)
        setAlertApellido(false)
        setAlertCelular(false)
        setAlertFijo(false)
        setAlertCorreo(false)
        setAlertTituloPqr(false)
        setAlertTipoTikect(false)
        setAlertDescripcion(false)
        setAlertEstado(false)
        getData()
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    }
}

const showData = ((object) => {
    setSaveButton(false)
    setIdPQRS(object.idPQRS)
    setCedula(object.cedula)
    setNombre(object.nombre)
    setApellido(object.apellido)
    setCelular(object.celular)
    setFijo(object.fijo)
    setCorreo(object.correo)
    setTituloPqr(object.tituloPqr)
    setTipoTikect(object.tipoTikect)
    setDescripcion(object.descripcion)
    setEstado(object.estado)
    setShow(false)
})

const update = () => {
    if (cedula === 0){
        setAlertError(true)
        setAlertCedula(true)
    } 
    if (nombre === ""){
        setAlertError(true)
        setAlertNombre(true)
    } 
    if (apellido === ""){
        setAlertError(true)
        setAlertApellido(true)
    }
    if(celular === 0){
        setAlertError(true)
        setAlertCelular(true)
    }
    if(fijo === 0){
        setAlertError(true)
        setAlertFijo(true)
    }
    if(correo === ""){
        setAlertError(true)
        setAlertCorreo(true)
    }
    if(tituloPqr === ""){
        setAlertError(true)
        setAlertTituloPqr(true)
    }
    if(tipoTikect === ""){
        setAlertError(true)
        setAlertTipoTikect(true)
    }
    if(descripcion === ""){
        setAlertError(true)
        setAlertDescripcion(true)
    }
    if(estado === ""){
        setAlertError(true)
        setAlertEstado(true)
    }
    else{
        axios.put(`http://localhost:3000/actualizar/${idPQRS}`, {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            celular: celular,
            fijo:fijo,
            correo: correo,
            tituloPqr: tituloPqr,
            tipoTikect:tipoTikect,
            descripcion: descripcion,
            estado: estado
    }).then(() => {
        setCedula(0)
        setNombre("")
        setApellido("")
        setCelular(0)
        setFijo(0)
        setCorreo("")
        setTituloPqr("")
        setTipoTikect("")
        setDescripcion("")
        setEstado("")
        setShow(true)
        setAlertActualizar(true)
        setAlert(true)
        setAlertError(false)
        setAlertCedula(false)
        setAlertNombre(false)
        setAlertApellido(false)
        setAlertCelular(false)
        setAlertFijo(false)
        setAlertCorreo(false)
        setAlertTituloPqr(false)
        setAlertTipoTikect(false)
        setAlertDescripcion(false)
        setAlertEstado(false)
        getData()
    })
    }
}

const eliminar = (() =>{
    axios.delete(`http://localhost:3001/eliminar/${idPQRS}`,{
        cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            celular: celular,
            fijo:fijo,
            correo: correo,
            tituloPqr: tituloPqr,
            tipoTikect:tipoTikect,
            descripcion: descripcion,
            estado: estado
    }).then(() =>{
    setAlertEliminar(true)
    setCedula(0)
    setNombre("")
    setApellido("")
    setCelular(0)
    setFijo(0)
    setCorreo("")
    setTituloPqr("")
    setTipoTikect("")
    setDescripcion("")
    setEstado("")
    setShow(true)
    setAlert(false)
    setAlertError(false)
    setAlertCedula(false)
    setAlertNombre(false)
    setAlertApellido(false)
    setAlertCelular(false)
    setAlertFijo(false)
    setAlertCorreo(false)
    setAlertTituloPqr(false)
    setAlertTipoTikect(false)
    setAlertDescripcion(false)
    setAlertEstado(false)
    getData()
    })
})

    return (
    <Box sx={{ width: 1000,
        height: 1000,
        p: 2,
        ml:12,
        flexGrow: 3, 
        backgroundColor: '#D4D4D4'}}>
        {show &&
        <Grid container spacing={2}>
            { showAlert &&
            <Grid item xs={10} sx={{mb:2,}}>
                <Alert value={showAlert}  severity="success">
                    PQR creada correctamente 
                </Alert>
            </Grid>
            }
            { showAlertEliminar &&
            <Grid item xs={10} sx={{mb:2,}}>
                <Alert value={showAlertEliminar}  severity="success">
                    PQR eliminado correctamente 
                </Alert>
            </Grid>
            }
            { showAlertActualizar &&
            <Grid item xs={10} sx={{mb:2,}}>
                <Alert value={showAlertActualizar}  severity="success">
                    PQR actualizada correctamente
                </Alert>
            </Grid>
            }
        <Grid item xs={3}>
            <Button onClick={() => {showForm()}} variant="contained" color="success">Agregar</Button>
        </Grid>
        <Grid item xs={12}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500, pl: 2, }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id PQR</TableCell>
                        <TableCell align="left">cedula</TableCell>
                        <TableCell align="left">Nombre</TableCell>
                        <TableCell align="left">apellido</TableCell>
                        <TableCell align="left">Celular</TableCell>
                        <TableCell align="left">Fijo</TableCell>
                        <TableCell align="left">Correo</TableCell>
                        <TableCell align="left">Titulo PQR</TableCell>
                        <TableCell align="left">Tipo PQR</TableCell>
                        <TableCell align="left">Descripcion</TableCell>
                        <TableCell align="left">Estado</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                        {data.map((row) => (
                    <TableRow 
                        key={row.idPQRS}
                        onClick={() => {showData(row)}}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{row.idPQRS}</TableCell>
                        <TableCell  align="left">{row.cedula}</TableCell>
                        <TableCell align="left">{row.nombre}</TableCell>
                        <TableCell align="left">{row.apellido}</TableCell>
                        <TableCell align="left">{row.celular}</TableCell>
                        <TableCell align="left">{row.fijo}</TableCell>
                        <TableCell align="left">{row.correo}</TableCell>
                        <TableCell align="left">{row.tituloPqr}</TableCell>
                        <TableCell align="left">{row.tipoTikect}</TableCell>
                        <TableCell align="left">{row.descripcion}</TableCell>
                        <TableCell align="left">{row.estado}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </Grid>
        </Grid>
        }
        {!show && 
            <Box
            component="form"
            noValidate
            autoComplete="off"
            justifyContent="center"
        >
            <Grid sx={{mt:12,}} container id="formulario">
                {
                showAlertError && 
                <Grid item xs={10} sx={{mb:2,}}>
                    <Alert value={showAlertError}  severity="error">
                    Debes de llenar los campos que esten vacios. 
                    </Alert>
                </Grid>
                }
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Cedula" 
                    variant="outlined" 
                    error={showAlertCedula}
                    onChange={onCedulaChange}  
                    value={cedula} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    error={showAlertNombre}
                    onChange={onNombreChange}  
                    value={nombre} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Apellido" 
                    variant="outlined" 
                    error={showAlertApellido}
                    onChange={onApellidoChange}  
                    value={apellido} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}} >
                <TextField id="outlined-basic" 
                    label="Celular" 
                    variant="outlined" 
                    error={showAlertCelular}
                    onChange={onCelularChange}  
                    value={celular} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Fijo" 
                    variant="outlined" 
                    error={showAlertFijo}
                    onChange={onFijoChange}
                    value={fijo} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Correo" 
                    variant="outlined" 
                    error={showAlertCorreo}
                    onChange={onCorreoChange}
                    value={correo} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Titulo PQR" 
                    variant="outlined" 
                    error={showAlertTituloPqr}
                    onChange={onTituloPqrChange}  
                    value={tituloPqr} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Tipo Tikect" 
                    variant="outlined" 
                    error={showAlertTipoTikect}
                    onChange={onTipoTikectChange}  
                    value={tipoTikect} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Descripcion" 
                    variant="outlined" 
                    error={showAlertDescripcion}
                    onChange={onDescripcionChange}  
                    value={descripcion} />
            </Grid>
            <Grid item xs={3} style={{marginBottom:'20px'}}>
                <TextField id="outlined-basic" 
                    label="Estado" 
                    variant="outlined" 
                    error={showAlertEstado}
                    onChange={onEstadoChange}  
                    value={estado} />
            </Grid>

            </Grid>
            <Grid sx={{mt:6,}} container justifyContent="center" >
                <Grid item  sx={{mr:2,}} >
                    <Button onClick={() => {cancel()}} variant="contained" color="error">Cancelar</Button>
                </Grid>
            {
                saveButton &&
                <Grid item  xs={2}>
                    <Button onClick={() => {showTable()}} variant="contained" color="success">Guardar</Button>
                </Grid>
            }
            {
                !saveButton &&
                <Grid item  xs={2}>
                    <Button onClick={() => {update()}} variant="contained" color="success">Actualizar</Button>
                </Grid>
            }
            {
                !saveButton &&
                <Grid item  xs={2}>
                    <Button onClick={() => {eliminar()}} variant="contained" color="error" >Eliminar</Button>
                </Grid>
            }
            </Grid>
        </Box>
    }
    </Box>
)
}

export default Pqrs;