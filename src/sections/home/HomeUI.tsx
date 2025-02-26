// HomeUI.tsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { UserFilterCards } from "../../hooks/UseFilterCards";
import { useSearchCard } from "../../hooks/UserSearchCard";
import CustomButton from "../../components/Button";
import SearchCard from "../../components/SearchCard";

const HomeUI: React.FC = () => {
  // Price filter hook
  const { filtercard, PriceRangeFilter, resetfilter } = UserFilterCards();
  // Search hook
  const { ShowSearchCard, SetShowSearchCard, SearchProduct } = useSearchCard();

  const searchResults = SearchProduct();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <CustomButton
            label="10$-500$"
            bgcolor="#10d264"
            color="white"
            onclick={() => PriceRangeFilter(10, 500)}
          />
          <CustomButton
            label="500$-2000$"
            bgcolor="#094651"
            color="white"
            onclick={() => PriceRangeFilter(500, 2000)}
          />
          <CustomButton
            label="2000$-40000$"
            bgcolor="#f6963d"
            color="white"
            onclick={() => PriceRangeFilter(2000, 40000)}
          />
          <CustomButton
            label="Reset"
            bgcolor="#E50046"
            color="white"
            onclick={resetfilter}
          />
        </Box>
        {/* Search input component */}
        <SearchCard searchquery={ShowSearchCard} setsearchquery={SetShowSearchCard} />
      </Box>

      {/* Section for Price-Filtered Products */}
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Price Filtered Products
        </Typography>
        <Grid container spacing={3}>
          {filtercard.map((cart: any) =>
            cart.products.map((product: any) => (
              <Grid
                item
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
      </Box>

      {/* Section for Search Results */}
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Search Results
        </Typography>
        <Grid container spacing={3}>
          {searchResults.map((item: any) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  image={item.thumbnail}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${item.price}
                    <Typography component="span" color="success.main">
                      {" "}
                      -{item.discountPercentage}%
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ⭐⭐⭐⭐
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomeUI;
