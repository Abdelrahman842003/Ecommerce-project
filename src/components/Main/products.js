import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../Header/styleHeader.css";
import {
  Button,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCard } from "../../redux/cartSlice";
import { useState } from "react";
import "./mainStyle.css";
import { fetchTiming } from "../../redux/productSlice";
export default function MediaCard() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const [product, setProduct] = useState(
    useSelector((state) => state.products)
  );
  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };
  const getProductCategory = (catName) => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    dispatch(fetchTiming());
    getCategories();
  }, []);
  return (
    <>
      <div className="toggle">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
         
          {categories.map((category) => (
            <ToggleButton
              onClick={() => {
                getProductCategory(category);
              }}
              key={category}
              sx={{
                cursor: "pointer",
                color: theme.palette.text.main,
                opacity: alignment === category ? 1 : 0.5, // تغيير الشفافية بناءً على التحديد
              }}
              className="ToggleButton"
              value={category}
              aria-label="left aligned"
              color="info"
            >
              {category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div className="pro">
        {product.map((product) => {
          return (
            <Card key={product.id} sx={{ width: 250, mt: 8 }}>
              <CardMedia
                className="CardMedia"
                sx={{
                  height: 280,
                  width: 210,
                  position: "relative",
                  right: " -20px ",
                }}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography
                    sx={{
                      borderRadius: 5,
                      fontSize: "16px",
                      fontWeight: "bold",
                      height: 100,
                      width: 200,
                      overflow: "hidden",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "18px", color: theme.palette.info.main }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    ${product.price}
                  </Typography>
                </Stack>

                <Typography
                  sx={{ color: theme.palette.text.main }}
                  variant="body2"
                  color="text.secondary"
                >
                  {product.category}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={() => {
                    dispatch(addToCard(product));
                  }}
                  size="large"
                  sx={{
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                >
                  <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                  Add To Cart
                </Button>

                <Rating
                  name="half-rating"
                  color={theme.palette.info.main}
                  defaultValue={2.6}
                  precision={1}
                  size="medium"
                />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}
