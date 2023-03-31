import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { AppContext } from "../context/AppConext";

export default function ChampionCard() {

    const {setFavChamp} = useContext(AppContext)

    const removeFromFirebase = async () => {
        await deleteDoc(doc(db, "users", auth.currentUser.uid, "champions", ))
        props.currentTeam()
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.champion.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.champion.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           <small>{props.champion.title}</small> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.champion.lore}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={removeFromFirebase} variant="contained" size="small" color="primary">
          Remove
        </Button>
        <Button
          onClick={()=> setFavChamp(props.champion.name)}
          variant='contaied'
          color='warning'
        >
          Add as Favorite
        </Button>
      </CardActions>
    </Card>
  );
}