import {Checkbox, IconButton, ListItem, ListItemText, Typography} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

type Props = {
    id: string
    text: string
    isDone: boolean
    changeStatus: (id: string, isDone: boolean) => void
    deleteItem: (id: string) => void
}

export default function TodoItem(props: Props) {
    const {id, text, isDone, changeStatus, deleteItem} = props

    return (
        <ListItem>
            <Checkbox checked={isDone} onChange={() => changeStatus(id, !isDone)} />
            <ListItemText
                primary={
                    <Typography variant="body1" sx={{textDecoration: isDone ? 'line-through' : 'none'}}>
                        {text}
                    </Typography>
                }
            />
            <IconButton onClick={() => deleteItem(id)}>
                <DeleteOutlineIcon />
            </IconButton>
        </ListItem>
    )
}
