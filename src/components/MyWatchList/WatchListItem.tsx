import {WatchItem} from '../../models/WatchItem'
import {useTypedDispatch} from '../../store/store'
import {changeItemStatusAction, deleteItemAction} from '../../store/watchList/listActions'
import TodoItem from '../library/TodoItem'

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

    return (
        <TodoItem
            id={item.id}
            text={item.text}
            isDone={item.isWatched}
            changeStatus={changeStatus}
            deleteItem={deleteItem}
        />
    )
}
