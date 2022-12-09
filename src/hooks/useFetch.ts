import axios from "axios";
import { addToData } from "features/dataSlice";
import {useState, useEffect} from "react"
import { useDispatch } from "react-redux";


// fetching all list items or single item. 


export const useFetch = (fetchUrl: string ) => {
    const [fetchData, setFetchData] = useState<any>({data: null, loading: false});
    const dispatch = useDispatch();

    useEffect(() => {
        setFetchData({data: null, loading: true});
        axios.get(fetchUrl)
        .then(response => {
            setFetchData({data: response.data, loading: false});
            if(response.data.length > 1){
                dispatch(addToData(response.data));
            }
        })
        .catch(err => {
          console.log(err)
        })    
      },[fetchUrl])

      return fetchData;
}