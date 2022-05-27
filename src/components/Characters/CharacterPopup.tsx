import {Card, CardContent, CardMedia, Modal, Typography} from "@mui/material";
import {Character} from "../../models/Character";

type Props = {
    open: boolean,
    handleClose: () => void,
    character: Character
}

export function CharacterPopup(props: Props) {
    const {open, handleClose, character} = props


    return <Modal
        open={open}
        onClose={handleClose}>
        <Card sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            padding: '10px'
        }}>
            <CardMedia
                component={"img"}
                height={"300px"}
                width={'300px'}
                image={character.image}
                alt={character.name}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                </Typography>
                <Typography>species: {character.species}</Typography>
                {character.type && <Typography>type: {character.type}</Typography>}
                <Typography>gender: {character.gender}</Typography>
                <Typography>status: {character.status}</Typography>
                <Typography>origin: {character.origin.name}</Typography>
                <Typography>location: {character.location.name}</Typography>
                <Typography>appearance in episodes: {character.episode.length}</Typography>
            </CardContent>
        </Card>

    </Modal>
}