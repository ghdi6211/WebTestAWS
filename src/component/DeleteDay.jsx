import { useState } from "react"
import { useHistory } from "react-router-dom"
import useFetch from "../Hooks/useFetch"

const DeleteDay = () => {
    const days = useFetch('http://localhost:3002/days')
    const words = useFetch(`http://localhost:3002/words?day=${days.length}`)
    const [day, setDay] = useState(days.length)
    const history = useHistory();
    const delDay = () => {
        if (window.confirm('삭제 하시겠습니까?')) {
            for (let i = 0; i < words.length; i++) {
                fetch(`http://localhost:3002/words/${words[i].id}`, {
                    method: 'DELETE',
                    // eslint-disable-next-line no-loop-func
                })
            }
        }
        fetch(`http://localhost:3002/days/${days.length}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                setDay(day)
                history.push('/')
            }
        })
    }
    return (
        <>
            <h2>현재 일수: {days.length}일</h2>
            <button onClick={delDay}>Day 삭제</button>
        </>
    )
}
export default DeleteDay