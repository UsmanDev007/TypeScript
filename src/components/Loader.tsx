import { Card, CardContent, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function Animations() {
  return (
    <Grid container spacing={3} marginTop={3}>
      {[1, 2, 3, 4].map((index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
            <Skeleton variant="rectangular" height={200} animation="wave" />
            <CardContent>
              <Skeleton variant="text" height={30} width="80%" animation="wave" />
              <Skeleton variant="text" height={20} width="60%" animation="wave" />
              <Skeleton variant="text" height={20} width="40%" animation="wave" />
            </CardContent>
            <Skeleton variant="rectangular" height={200} animation="wave" />
            <CardContent>
              <Skeleton variant="text" height={30} width="80%" animation="wave" />
              <Skeleton variant="text" height={20} width="60%" animation="wave" />
              <Skeleton variant="text" height={20} width="40%" animation="wave" />
            </CardContent>
            <Skeleton variant="rectangular" height={200} animation="wave" />
            <CardContent>
              <Skeleton variant="text" height={30} width="80%" animation="wave" />
              <Skeleton variant="text" height={20} width="60%" animation="wave" />
              <Skeleton variant="text" height={20} width="40%" animation="wave" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
