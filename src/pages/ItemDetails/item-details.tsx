import { Header, ItemContainer, Loading } from "./item-details.style"
import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CustomButton, FormatItemDetails } from "components";

const fetchData = (url: string) => {
  // setSingleItemLoading(false);
    return axios.get(url)
    .then(({data}) => {
        return data;
    })
    .catch(err => {
      console.log(err)
    }) 
    // .finally(() => {
    //   setSingleItemLoading(false)
    // })
}

export const ItemDetails: React.FC = () => {
  const {id} = useParams();
  const ITEM_BY_ID_URL: string = `http://localhost:3001/items/${id}`; 
  const [singleItem, setSingleItem] = useState<any>({});
  const [singleItemLoading, setSingleItemLoading] = useState<boolean>(false);

  useEffect(() => {
    // setSingleItemLoading(false);
    // axios.get(ITEM_BY_ID_URL)
    // .then(response => {
    //     console.log(response.data)
    //     setSingleItem(response.data);
    // })
    // .catch(err => {
    //   console.log(err)
    // }) 
    // .finally(() => {
    //   setSingleItemLoading(false)
    // })

    fetchData(ITEM_BY_ID_URL)
    .then(item => {
      setSingleItem(item);
    })
  },[])
  console.log(singleItem);
  return (
    <>
    {singleItemLoading ? (
      <Loading>
        <p>Loading...</p>
      </Loading>
    ) : (
      <ItemContainer>
        <Header>
          <CustomButton styletype="back" name="Back to Marketplace" />
        </Header>
        <FormatItemDetails itemDetails={singleItem} /> 
      </ItemContainer>
    )}
    </>
  )
}

