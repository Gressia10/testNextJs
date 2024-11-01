import axios from "axios";

async function getData(currentPage, title) {
    try {
        let token = 'zV3vIT6ZS2Dtpu4rTwCbICIR0e6mJOFBfFfCq6vUel4COEBhNZ'
        const response = await axios.post(`/api/inmuebles?tk=${token}&page=${currentPage}`,{tituloInmueble:title},{
            'Content-Type': 'application/json'
        });
        return(response);
    } catch (error) {
        return(error);
    }
}

async function getDataById(id){
    try {
        let token = 'zV3vIT6ZS2Dtpu4rTwCbICIR0e6mJOFBfFfCq6vUel4COEBhNZ'
        const response = await axios.get(`/api/inmueble/${id}?tk=${token}`,{
            'Content-Type': 'application/json'
        });
        return(response);
    } catch (error) {
        return(error);
    }
}

export {
    getData,
    getDataById
}