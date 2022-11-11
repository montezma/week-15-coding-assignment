const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses"; 


class HousesApi {
    get = async () => {
        //try is to see if it working cause it's an network request.
        try {
            //makes request
            const resp = await fetch(HOUSES_ENDPOINT); 
            // waits from get request then converts to json
            const data = await resp.json();
            //returns the data 
            return data; 
            //catch it to see if it errors out it logs the error.
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