// import * as React from "react";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { useTheme } from "@mui/material";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect } from "react";

// export default function ToggleButtons() {
//   const [alignment, setAlignment] = React.useState("left");
//   const theme = useTheme();

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };
//   const [product,setProduct] = useState(useSelector((state) => state.products));

//   const [categories, setCategories] = useState([]);

//   const getCategories = () => {
//     fetch(`https://fakestoreapi.com/products/categories`)
//       .then((res) => res.json())
//       .then((json) => setCategories(json));
//   };
//   const getProductCategory = (catName) => {
//     fetch(`https://fakestoreapi.com/products/category/${catName}`)
//       .then((res) => res.json())
//       .then((json) => setProduct(json));
//   };

//   useEffect(() => {
//     getCategories();
//   }, []);

//   return (
//     <>
//       <ToggleButtonGroup
//         value={alignment}
//         exclusive
//         onChange={handleAlignment}
//         aria-label="text alignment"
//       >
//         {categories.map((category) => (
//           <ToggleButton
//             key={category}
//             onClick={() => {
//               getCategories(category);
//             }}
//             sx={{
//               color: theme.palette.text.main,
//               opacity: alignment === category ? 1 : 0.5, // تغيير الشفافية بناءً على التحديد
//             }}
//             className="ToggleButton"
//             value={category}
//             aria-label="left aligned"
//             color="info"
//           >
//             {category}
//           </ToggleButton>
//         ))}
//       </ToggleButtonGroup>
//     </>
//   );
// }