import {WatchItem} from "../../models/WatchItem";
import {Checkbox, IconButton, ListItem, ListItemText, Typography} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useTypedDispatch} from "../../store/store";
import {changeItemStatusAction, deleteItemAction} from "../../store/watchList/listActions";


type Props = {
    item: WatchItem
}

export default function WatchListItem(props: Props) {
    const {item} = props

    const dispatch = useTypedDispatch()

    function changeStatus(id: string, isWatched: boolean) {
        dispatch(changeItemStatusAction(id, isWatched))
    }

    function deleteItem(id: string) {
        dispatch(deleteItemAction(id))
    }

    return <ListItem>
        <Checkbox checked={item.isWatched}
                  onChange={() => changeStatus(item.id, !item.isWatched)}/>
        <ListItemText primary={
            <Typography variant={"body1"}
                        sx={{textDecoration: item.isWatched ? 'line-through' : 'none'}}>
                {item.text}
            </Typography>
        }/>
        <IconButton onClick={() => deleteItem(item.id)}>
            <DeleteOutlineIcon/>
        </IconButton>
    </ListItem>
}