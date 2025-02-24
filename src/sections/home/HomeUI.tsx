import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import Button from "../../components/Button";
import { UserFilterCards } from "../../hooks/UseFilterCards";
const HomeUI: React.FC = () => {
  const { filtercard, PriceRangeFilter, resetfilter } = UserFilterCards();


  return (
    <>
      <Box sx={{ display: "flex", gap: "4px" }}>
        <Button label="10$-500$" bgcolor="green" color="white" onclick={() => PriceRangeFilter(10, 500)} />
        <Button label="500$-2000$" bgcolor="blue" color="white" onclick={() => PriceRangeFilter(500, 2000)} />
        <Button label="2000$-40000$" bgcolor="yellow" color="white" onclick={() => PriceRangeFilter(2000, 40000)} />
        <Button label="reset" bgcolor="red" color="white" onclick={resetfilter}/>
          
      </Box>
      <Grid container spacing={3}>
        {filtercard.map((cart) =>
          cart.products.map((product: any) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: 2,
                  boxShadow: 3,
                  height: "500px",
                }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={product.thumbnail}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.price}
                    <Typography component="span" color="success.main">
                      {" "}
                      -{product.discountPercentage}%
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ⭐⭐⭐⭐
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default HomeUI;
