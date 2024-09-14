import React,{useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imageArray from "./ImageArray";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function ProductList(){
    return (
        <div className="container col-xxl-10 px-4 py-5 d-flex justify-content-around flex-wrap">
            <ImageList cols={4} >
            {imageArray.map((item) => (
                <ImageListItem key={item.img}>
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
                    {/* <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: happy</span>}
                    position="below"
                    /> */}
                        <h6 >{item.title}</h6>
                        <h6>Price : <strong className="strongPrice"><CurrencyRupeeIcon />{item.price}</strong></h6>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Link>
                </ImageListItem>
            ))}
            </ImageList>
        </div>
    );
}

export default ProductList;