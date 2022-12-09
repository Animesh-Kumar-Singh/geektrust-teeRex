import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ handleAddToCart,data}) => {

  
  const addToCart= ()=>{
    handleAddToCart(data,data.id)
  }
  return (
    <Card className="card" >
      <Typography><strong>{data.name}</strong></Typography>
       <CardMedia
        component="img"
        image={`${data.imageURL}`}
        />
      <CardContent >
        
        <div className="CardContent">
        <Typography><strong>Rs{data.price}</strong></Typography>
        <Button 
        onClick={addToCart}
        sx={{width:"50%"}} variant="contained" size="small">ADD TO CART</Button>
        </div>
      </CardContent>
        

    </Card>
  );
};

export default ProductCard;


// if(price === filterData[i]){
//   if(gender === filterData[i]){
//       if(type === filterData[i]){
//           if(color == filterData[i]){
//               return element
//           }else
//           return element;
//       }else
//       return element;
//   }else
//    return element;
// }else if(gender === filterData[i]){
//   if(type === filterData[i]){
//       if(color == filterData[i]){
//           return element
//       }else
//       return element;
//   }else
//   return element;
// }else if(type=== filterData[i]){
//   if(color == filterData[i]){
//           return element
//       }else
//       return element;
// }else if(color === filterData[i] ){
//   return element
// }