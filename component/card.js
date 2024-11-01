import { useState } from 'react';

const Card = (props) => {
    const { data } = props; 
    const [typeDescription, setTypeDescripcion]=useState(1)

    const styles = {
        card: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid #f0f0f0',
          backgroundColor: '#f0f0f0', 
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '850px', 
          margin: '20px auto', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
          textAlign: 'center',
          margin: '0 0 10px 0',
        },
        content: {
          textAlign: 'center',
        },
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', 
            margin: '10px 0', 
        },
        image: {
            width: '250px', 
            height: '200px', 
        },
    };

    const type = () =>{
        if(typeDescription == 1){
            setTypeDescripcion(2)
        }else if(typeDescription == 2){
            setTypeDescripcion(1)
        }
        
    }

    return (
        <div style={styles.card}>
            <h1 style={styles.title}>Detalles de la Propiedad</h1>
            <div>
                <div style={styles.imageContainer}>
                    <img src={data.imagenPortada} alt={data.idInmueble} style={styles.image} />
                </div>
                <p style={styles.content}>Titulo: {data.tituloInmueble}</p>
                <div style={styles.content}>
                Descripcion:
                <p style={styles.content}> {typeDescription == 1?data.descripcionSEO:data.descriptionLarga} </p>
                <p onClick={type} style={{...styles.content, textDecoration: 'underline'}}>{typeDescription == 1?"Ver Mas +":"Ver menos -"}</p>
                </div>
                <p style={styles.content}>Precio Venta: {data.precioVenta}</p>
                <p style={styles.content}>Precio Renta: {data.precioRenta}{data.monedaRenta}</p>
                <p style={styles.content}>Nro de Habitaciones: {data.nroHabitaciones}</p>
                <p style={styles.content}>Nro de Baños: {data.nroBanios}</p>
                <p style={styles.content}>Nro de Estacionamientos: {data.nroEstacionamientos}</p>
                <p style={styles.content}>Provincia: {data.provincia}</p>
                <p style={styles.content}>Municipio: {data.municipio}</p>
                <p style={styles.content}>Localidad: {data.localidad}</p>
                <p style={styles.content}>Nombre del Agente: {data.nombreAgente}</p>
                <p style={styles.content}>Telefono del Agente: {data.telefonoAgente}</p>
                <p style={styles.content}>Correo del Agente: {data.correoAgente}</p>
                <div style={styles.imageContainer}>
                    {data.imagenesGaleria?data.imagenesGaleria.map((img)=>(
                        <img src={img} alt={data.idInmueble} style={styles.image} />
                    )):""}
                    
                </div>
            </div>
        </div> 
    );
};

export default Card;