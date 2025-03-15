import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CustomButton from "../../components/Button";
import SearchCard from "../../components/SearchCard";
import { useSearchCard } from "../../hooks/UserSearchCard";
import { useDispatch } from "react-redux";
import { AddCart} from "../../store/CardSystem";
// import Loader from "../../components/Loader";
const HomeUI: React.FC = () => {
  const {
    combinedData,
    PriceRangeFilter,
    resetfilter,
    ShowSearchCard,
    SetShowSearchCard,
  } = useSearchCard();
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
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
            width="145px"
            color="white"
            onclick={() => PriceRangeFilter(10, 500)}
          />
          <CustomButton
            label="500$-2000$"
            bgcolor="#094651"
            width="145px"
            color="white"
            onclick={() => PriceRangeFilter(500, 2000)}
          />
          <CustomButton
            label="2000$-40000$"
            bgcolor="#f6963d"
            width="145px"
            color="white"
            onclick={() => PriceRangeFilter(2000, 40000)}
          />
          <CustomButton
            label="reset"
            bgcolor="#E50046"
            width="145px"
            color="white"
            onclick={resetfilter}
          />
        </Box>
        <SearchCard
          ShowSearchCard={ShowSearchCard}
          SetShowSearchCard={SetShowSearchCard}
        />
      </Box>
      {combinedData.length == 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            color: "#E50056",
            marginTop: "10px",
          }}
        >
          Loading..
        </Typography>
      ) : (
        <Grid container spacing={3} marginTop={3}>
          {combinedData.map((cart) =>
            cart.products.map((product: any) => (
              <Grid
                container
                item
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                justifyContent="center"
                alignItems="center"
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: 2,
                    boxShadow: 3,
                    maxHeight: 545,
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
                      ${product.price}{" "}
                      <Typography component="span" color="success.main">
                        {" "}
                        -{product.discountPercentage}%{" "}
                      </Typography>
                    </Typography>
                    <CustomButton
                      label="Add to Cart"
                      bgcolor="#2b2a2a"
                      color="white"
                      width="100%"
                      onclick={() => dispatch(AddCart(product))}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      )}
    </>
  );
};

export default HomeUI;
