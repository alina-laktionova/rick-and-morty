import {TodoItem} from "../../models/TodoItem";
import {Checkbox, IconButton, ListItem, ListItemText, Typography} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useTypedDispatch} from "../../store/store";
import {changeItemStatusAction, deleteItemAction} from "../../store/watchList/listActions";


type Props = {
    item: TodoItem
}

export default function TodoListItem(props: Props) {
    const {item} = props

    const dispatch = useTypedDispatch()

    function changeStatus(id: string, isWatched: boolean) {
        dispatch(changeItemStatusAction(id, isWatched))
    }

    function deleteItem(id: string) {
        dispatch(deleteItemAction(id))
    }

    return <ListItem>
        <Checkbox checked={item.isDone}
                  onChange={() => changeStatus(item.id, !item.isDone)}/>
        <ListItemText primary={
            <Typography variant={"body1"}
                        sx={{textDecoration: item.isDone ? 'line-through' : 'none'}}>
                {item.text}
            </Typography>
        }/>
        <IconButton onClick={() => deleteItem(item.id)}>
            <DeleteOutlineIcon/>
        </IconButton>
    </ListItem>
}