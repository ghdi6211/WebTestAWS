import { useHistory } from "react-router-dom"
import useFetch from "../Hooks/useFetch";

const CreateDay = () => {
    const days = useFetch('http://localhost:3002/days')
    const history = useHistory();
    const addDay = (e) =>{
        fetch('http://localhost:3002/days', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                day: days.length+1
            })
        }).then(res => {
            if(res.ok) {
                alert('Day 추가 완료')
                history.push('/')
            }
        })
    }


    return (
        <>
            <h3>현재 일수: {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </>
    )
}

export default CreateDay