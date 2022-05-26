import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

type Props = {
    image: string,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown',
}

export default function CharacterCard(props: Props) {
    const {image, gender, species, status, name} = props

    return <Grid item xs={12} sm={6} md={4} lg={3}
                 display={"flex"} justifyContent={"center"}>
        <Card sx={{maxWidth: 300}}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    height={"300px"}
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        species: {species}, gender: {gender}, status: {status}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
}