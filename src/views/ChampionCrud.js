import React from 'react'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, setDoc, collection, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';
import ChampionCard from '../components/ChampionCard';


const theme = createTheme();

export default function SignIn() {

    const [champion,setChampion] = useState('')
    const [championData, setChampionData] = useState({})
    const [team, setTeam] = useState([])
    
    const getChampionData = async (name) => {
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion/${name}.json`)
        const data = await response.json()
        console.log(data)
        
        const image = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${name}.png`)

        setChampionData({
            name: name,
            title: data.data[name].title,
            lore: data.data[name].lore,
            type: data.data[name].tags[0],
            image: image.url
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(champion)
        const championTitle = champion[0].toUpperCase() + champion.slice(1,).toLowerCase()
        getChampionData(championTitle)
    };


    useEffect(()=>{
        const addChampionToFirebase = async () => {
            await setDoc(doc(db, "users", auth.currentUser.uid, "champions", championData.type), {
                name: championData.name,
                title: championData.title,
                lore: championData.lore,
                image: championData.image,
                type: championData.type
            })
        }

        if(Object.keys(championData).length > 0){
            addChampionToFirebase()
        }
        console.log(teamArr)
        currentTeam()
    }, [championData])


    // fucntion to see team of current user
    const currentTeam = async () => {
        const teamArr = []
        const subColRef = collection(db, "users", auth.currentUser.uid, "champions")
        onSnapshot(subColRef, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                teamArr.push(doc.data())
            })
            setTeam(teamArr)
            console.log(team)
        })
    }

    currentTeam()

  return (
    <ThemeProvider theme={theme}>
      {team.length > 0 ? <p>{team[0].title}</p> : <p>no team</p>}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img src='https://mcdn.wallpapersafari.com/medium/96/43/2iV0HB.jpg'/>
          <Typography component="h1" variant="h5">
            LoL Champion Builder
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="champion"
              label="Champion"
              name="champion"
              onChange={(event) => {setChampion(event.target.value)}}
              autoFocus
            />
            <Button
                // onClick={getChampionData}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
              Add to Team
            </Button>
            <Button
                onClick={currentTeam}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
              View Team
            </Button>
            <Grid container>
            </Grid>
          </Box>
          {team.map((champion) => {
            return(
              <ChampionCard champion={champion} currentTeam={currentTeam}/>
            )
          })}
        </Box>
      </Container>
    </ThemeProvider>
  );
}