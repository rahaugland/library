import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Link as RouterLink} from "react-router-dom";
import {collection, where} from "typesaurus";
import {makeStyles} from "@material-ui/core/styles";
import firebase from 'firebase';
import NavBar from "./components/NavBar"

function Home(){
    return (
        <NavBar />
    )
} export default Home