import React from 'react';
import { Card, CardContent, CardMedia, Grid,Typography } from '@mui/material';
import { useGetProduct } from '../../hooks/UseCardFetch';
import Loader from '../../components/Loader'
const HomeUI: React.FC = () => {
  const { GetData, isPending, isError, error } = useGetProduct();

  if (isPending) return <Loader/>
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <Grid container spacing={3}>
      {GetData.map((cart) =>
        cart.products.map((product:any) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, height: "500px" }}>
              <CardMedia component="img" height="350" image={product.thumbnail} alt={product.title} />
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
                    {" "} -{product.discountPercentage}%
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
  );
};

export default HomeUI;
