import {  Grid } from "@material-ui/core";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";
import { getAllPosts } from "../../service/api";

const Home = () => {
    const params=useParams();
    const [p,setP]=useState([]);

    useEffect(async()=>{
        const data= await getAllPosts();
        // console.log(data);
        let arr=[]
        if(params.filter){
           console.log(params.filter)
           data.filter((item)=>{
               if(item.categories==params.filter){
                  arr.push(item)
               }
           })
           setP(arr);
        }
        else{
            setP(data)
        }
        

     },[params.filter]);

    return ( 
        <>
        <Banner/>
        <Grid container>
            <Grid item lg={2} xs={12} sm={2}>
            <Categories/>
            </Grid>
            <Grid container item lg={10} xs={12} sm={10} >
             <Posts p={p}/> 
            </Grid>
        </Grid>
        </>
     );
}
 
export default Home;