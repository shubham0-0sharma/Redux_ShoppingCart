
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import { CardActionArea } from "@mui/material";


const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category, description } = product;
        return (
            <div key={title}>
                <Link
                    to={`product-details/${id}`}
                    style={{ textDecoration: "none" }}
                >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={image}
                                alt="product image"
                                sx={{
                                    height: "300px",
                                    width: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {description}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h5"
                                >
                                    {price}$
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h6"
                                >
                                    {category}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        );
    });

    return (
        <Box sx={{ display: "flex", flexDirection: "row"  , flexWrap:"wrap"}}>
            {renderList}
        </Box>
    );
};

export default ProductComponent;
