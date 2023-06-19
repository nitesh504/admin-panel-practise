import React, { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 9,
      Description: "neetesh",
    },
    {
      id: 10,
      Description: "neetesh",
    },
  ]);
  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((response) => response.json())
      .then((data) => setProducts(data.entries))
      .catch((error) => console.error(error));
  }, []);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell>Description </TableCell>
            <TableCell> Price </TableCell>
            <TableCell> Quantity </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.Auth}</TableCell>
              <TableCell>{product.Description}</TableCell>
              <TableCell>{product.Link}</TableCell>
              <TableCell>{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
