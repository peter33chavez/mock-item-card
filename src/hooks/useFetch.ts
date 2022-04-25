import axios from "axios";
import {useState, useEffect} from "react"


// fetching all list items or single item. 


export const useFetch = (fetchUrl: string ) => {
    const [fetchData, setFetchData] = useState<any>({data: null, loading: false});
    useEffect(() => {
        setFetchData({data: null, loading: true});
        axios.get(fetchUrl)
        .then(response => {
            setFetchData({data: response.data, loading: false});
        })
        .catch(err => {
          console.log(err)
        })    
      },[fetchUrl])

      return fetchData;
}