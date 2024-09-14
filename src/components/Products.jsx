import React,{useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import imageArray from "./ImageArray";

function Products(){
    
    return (
        <div className="container col-xxl-10 px-4 py-5 d-flex justify-content-around flex-wrap">
            {imageArray.map((item)=>(
                <Link key={item.src} to="/products" >
                <Card sx={{ maxWidth: 250,backgroundColor:"#ede3ee" }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="5%"
                    image={item.src}
                    alt="shirt"
                    onMouseOver={(e)=>e.target.src=item.hov}
                    onMouseOut={(e)=>e.target.src=item.src}
                    />
                    <CardContent>
                    <Typography variant="h5" component="div">
                        {item.title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Link>
            ))}
            
        </div>
    );
}

export default Products;