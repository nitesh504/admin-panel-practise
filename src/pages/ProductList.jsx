import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import Product from './Product';
const ProductList = ({title, imgsrc}) => {
   
    return (
      
      <Card style={{backgroundColor:'blue', width:'200px'}}>
        <CardHeader title={title}/>
        <CardContent>
            <Typography variant="body1">
                <img style={{height:'100px', width:'100px'}} src={imgsrc} alt="motorbike" />
               
            </Typography>
        </CardContent>
      </Card>
      
    );
};

export default ProductList;
