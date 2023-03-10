import React,{useContext} from 'react';
import AuthContext from '../Store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const Ctx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={Ctx.onLogout}>Log-OUT</Button>
    </Card>
  );
};

export default Home;
