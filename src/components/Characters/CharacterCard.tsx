import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Character} from "../../models/Character";
import {useState} from "react";
import ModalWindow from "../library/ModalWindow";

type Props = {
    character: Character
}

export default function CharacterCard(props: Props) {
    const {character} = props

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const charInfo: JSX.Element = <>
        <Typography variant="h5" textAlign={'center'}>
            {character.name}
        </Typography>
        <Typography>status: {character.status}</Typography>
        <Typography>gender: {character.gender}</Typography>
        <Typography>species: {character.species}</Typography>
    </>

    return <>
        <Grid item xs={12} sm={6} md={4} lg={3}
              display={"flex"} justifyContent={"center"}>
            <Card sx={{maxWidth: 300}}
                  onClick={handleOpen}>
                <CardActionArea>
                    <CardMedia
                        component={"img"}
                        height={"300px"}
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '10px'
                    }}>
                        {charInfo}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <ModalWindow image={character.image} name={character.name} open={open} handleClose={handleClose}
                     cardContent={<>
                         {charInfo}
                         {character.type && <Typography>type: {character.type}</Typography>}
                         <Typography>origin: {character.origin.name}</Typography>
                         <Typography>location: {character.location.name}</Typography>
                         <Typography>appearance in episodes: {character.episode.length}</Typography>
                     </>}/>
    </>
}