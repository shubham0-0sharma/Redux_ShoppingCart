import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setProducts } from "../redux/actions/productActions"
import ProductComponent from "./ProductComponent"
import { Box } from "@mui/material"



const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchproducts = async() =>{
    const res = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
      console.log("Error",err);

    });
    dispatch(setProducts(res.data));

  }
  useEffect(() => {
    fetchproducts();
    
 
  }, []);
  
  return (
      <Box sx={{ display: "flex", flexDirection: "row" }}>
          <ProductComponent />
      </Box>
  );
}

export default ProductListing