import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getDataById } from '../../../request/request';
import Card from '../../../component/card';

const property = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const { id } = router.query; 

    const styles = {
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#333', // Color del texto del botón
        },
    }

    const back = () => {
        router.push('/')
    }

    const fetchData = async (idProperty) => {
        try {
          setLoading(true)
          const response = await getDataById(idProperty); 
          setData(response.data.data[0]);
          setLoading(false)
        } catch (err) {
          console.error('Error fetching data:', err);
          setLoading(false);
        } finally {
          setLoading(false);
        }
    };

    useEffect(()=>{
        setLoading(true)
        if(id){
            fetchData(id);
        }
    },[id])

    return (
        <div>
        {!loading?
            <div>
                <button onClick={back} style={styles.closeButton} >Regresar</button>
                <Card data={data} />
            </div>
        :<h1>Cargando espere un momento</h1>}
        </div>
    );
};

export default property;