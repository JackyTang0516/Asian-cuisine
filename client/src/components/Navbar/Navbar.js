import React, {useState, useEffect} from "react";
import { Link, useLocation} from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import decode from 'jwt-decode';
import useStyles from './styles';
import memoriesLogo from '../../images/food.png';
import memoriesText from '../../images/title.png';

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const classes =useStyles(); 
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();



    const logout = () => {
        dispatch({type:'LOGOUT'});
        navigate('/');
        setUser(null);
    };

    useEffect(()=>{
        const token = user?.token;
        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);
    return(
      <AppBar className= {classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
            <img src={memoriesText} alt="icon" height="60px"/>
            <img className= {classes.image} src={memoriesLogo} alt="icon" height="80px"/>

        </Link>
        <Toolbar className={classes.toolbar}>
            {user ?.result? (//login successfully
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}

        </Toolbar>
      </AppBar>
    );
};
export default Navbar;