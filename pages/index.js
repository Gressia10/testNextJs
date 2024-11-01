import { useEffect, useState } from 'react';
import { getData } from '../request/request';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import SearchBar from '../component/searchBar';

export default function Home() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage]=useState(1)
  const [search, setSearch] = useState('');

  const fetchData = async (page, text) => {
    try {
      setLoading(true)
      const response = await getData(page,text); 
      setData(response.data.data);
      setTotalPage(response.data.meta.pagination.total)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching data:', err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const backButton = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const nextButton = () =>{
    if(currentPage < totalPage){
      setCurrentPage(currentPage + 1)
    }
  }

  const searchChange = (event) => {
    setSearch(event.target.value); // Actualiza el estado con el nuevo valor
  };
  
  const searchButton = () => {
    fetchData(currentPage,search);
  };

  useEffect(()=>{
    fetchData(currentPage,search);
  },[currentPage])

  return (
    <div className={styles.container}>
      <Head>
        <title>Mi Página</title>
        <meta name="description" content="Página para búsqueda de propiedades inmobiliarias" />
        <meta content="initial-scale=1, maximum-scale=1, user-scalable=0" name="viewport" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="Test de inmuebles" />
        <meta property="og:description" content="Busquedas de inmuebles." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <p className={styles.description}>
          Lista de Inmuebles
        </p>

        <div className={styles.grid}>
          <SearchBar 
            search={search}
            onSearchChange={searchChange}
            onSearch={searchButton}
            loading={loading}
          />
          <div style={{width: '100%',overflowX: 'auto'}}>
          <table style={{'overflow-y':'scroll', 'border-collapse': 'collapse'}}>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Precio de venta</th>
                <th>Precio de renta</th>
                <th>Nro Habitaciones</th>
                <th>Nro Baños</th>
                <th>Nro Estacionamientos</th>
                <th>Provincia</th>
                <th>Municipio</th>
                <th>Localidad</th>
                <th>Imagen</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!loading?data.map((data)=>(
                <tr key={data.idInmueble}>
                  <td>{data.tituloInmueble}</td>
                  <td>{data.precioVenta}{data.monedaVenta}</td>
                  <td>{data.precioRenta}{data.monedaRenta}</td>
                  <td>{data.nroHabitaciones}</td>
                  <td>{data.nroBanios}</td>
                  <td>{data.nroEstacionamientos}</td>
                  <td>{data.provincia}</td>
                  <td>{data.municipio}</td>
                  <td>{data.localidad}</td>
                  <td><img src={data.imagenPortada} alt={data.idInmueble} style={{ widtd: '50px', height: '80px' }} /></td>
                  <td>
                    <Link href={`/propiedad/${data.idInmueble}/${data.slug}`}>
                      Ver Detalles de la Propiedad
                    </Link>
                  </td>
                </tr>
              )):<p>Cargando</p>}
            </tbody>
          </table>
          </div>
          <button disabled={currentPage === 1 || loading} onClick={backButton}>Anterior</button>
          <p>Pagina {currentPage} de {totalPage}</p>
          <button disabled={currentPage === totalPage || loading} onClick={nextButton}>Siguiente</button>
        </div>
        
      </main>
      <footer>
      
      </footer>

      <style jsx>{`
        
        footer {
          width: 200%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        table, th, td {
          border: 1px solid #c1c1c1;
          border-collapse: collapse;
        }
        table {
          width: 100%; /* Asegura que la tabla ocupe el 100% del ancho de su contenedor */
          border-collapse: collapse;
        }
        th, td {
          padding: 10px;1
        }
        button{
          margin: 10px;
          padding: 8px;
          border-radius: 5px;
          border: 0px;
          background: #e7e7e7;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>
    </div>
  );
}
