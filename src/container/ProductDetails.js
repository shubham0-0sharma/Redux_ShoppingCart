import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { removeSelected,selectedProduct } from "../redux/actions/productActions";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";


const ProductDetails = () => {
  const {id}  = useParams()

  const product  = useSelector(state => state.product)
  const dispatch = useDispatch()


  const fetchproductDetails = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=> {
      console.log("err",err)
    })
   
    dispatch(selectedProduct(res.data))
    
  }
  useEffect(() => {
    if(id && id !== "")
    fetchproductDetails();
    return () => dispatch(removeSelected());
  }, [id]);

  const { title, image, description ,price, category} = product;
  return (
      <Box
          sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}
      >
          <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="140"
                      image={image}
                      alt="product image"
                      sx={{ height: "200px", width: "200px" }}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {description}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h5">
                          {price}$
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h6">
                          {category}
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
      </Box>
  );
}

export default ProductDetails