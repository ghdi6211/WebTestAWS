import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch"
import Word from "./Word"

const Day = () => {
    const day = Number(useParams().day)

    const words =useFetch(`http://localhost:3002/words?day=${day}`)

    return (
        <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Lodding...</span>}
        <table>
            <tbody>
                {words.map(word => (
                   <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Day