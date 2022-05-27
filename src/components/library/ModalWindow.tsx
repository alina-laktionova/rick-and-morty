import {Card, CardContent, CardMedia, Modal} from "@mui/material";

type Props = {
    image: string,
    name: string,
    cardContent: JSX.Element,
    open: boolean,
    handleClose: () => void,
}

export default function ModalWindow(props: Props) {
    const {open, cardContent, image, name, handleClose} = props

    return <Modal
        open={open}
        onClose={handleClose}>
        <Card sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            padding: '10px',
            width: '300px'
        }}>
            <CardMedia
                component={"img"}
                height={"300px"}
                width={'300px'}
                image={image}
                alt={name}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {cardContent}
            </CardContent>
        </Card>

    </Modal>
}