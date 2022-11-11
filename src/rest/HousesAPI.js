const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses"; 


class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT); 
            const data = await resp.json();
            return data; 
        } catch(e) {
            console.log("get request didnt work",e)
        }
    }

    put = async(house) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`,{
                method: 'PUT', 
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(house), 
            })
            return await resp.json(); 
        } catch(e){
            console.log("Put request error",e)
        }
    }

}

export const housesApi = new HousesApi()