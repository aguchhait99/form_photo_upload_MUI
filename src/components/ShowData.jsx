import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ClipLoader } from "react-spinners";
import { getUserData } from "../services/API";

const ShowData = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const imgUrl = "https://tureappservar.onrender.com";

  const getData = async () => {
    const response = await getUserData();
    setUser(response?.data?.data);
    setLoading(false);
    console.log("data", response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <ClipLoader
          color="#36d7b7"
          size={100}
          cssOverride={{ marginLeft: "700px", marginTop: "200px" }}
        />
      ) : (
        <Container sx={{ mt: 12 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {user?.map((item) => {
              return (
                <>
                  <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="400"
                        image={`${imgUrl}/${item.photo}`}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Email: {item.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Phone: {item.phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          City: {item.city}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ShowData;
