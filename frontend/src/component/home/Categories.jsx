import { Button, makeStyles, TableBody, TableCell, TableHead, TableRow,Table } from "@material-ui/core";
import { Link } from "react-router-dom";
import { categories } from "../../constents/data";
const useStyle=makeStyles({
    create:{
margin:20,
background:'#6495ED',
color:'#fff',
width:"86%",
    },
    table:{
        border:'1px solid rgb(224,224,224,1)'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})

const Categories = () => {
    const classes=useStyle();
    return ( 
        <>
         <Link className={classes.link} to='/create'><Button varient='contained'className={classes.create}>Create Blog</Button></Link>

         <Table className={classes.table}>
         <TableHead>
             <TableRow>
                <Link to="/" className={classes.link}> <TableCell style={{cursor:'pointer'}}>
                     All Categories
                 </TableCell></Link>
             </TableRow> 
         </TableHead>
         <TableBody>
           {
               categories.map(category => (
                   <TableRow>
                      <Link to={`/${category}`} className={classes.link}><TableCell style={{cursor:'pointer'}}>{category}</TableCell> </Link> 
                   </TableRow>
               ))
           }
         </TableBody>
         </Table>
        </>
     );
}
export default Categories;