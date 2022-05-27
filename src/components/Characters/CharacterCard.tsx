import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Character} from "../../models/Character";
import {useState} from "react";
import {CharacterPopup} from "./CharacterPopup";

type Props = {
    character: Character
}

export default function CharacterCard(props: Props) {
    const {character} = props

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <Typography variant="h5" textAlign={'center'}>
                            {character.name}
                        </Typography>
                        <Typography>species: {character.species}</Typography>
                        <Typography>gender: {character.gender}</Typography>
                        <Typography>status: {character.status}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <CharacterPopup open={open} character={character} handleClose={handleClose}/>
    </>
}