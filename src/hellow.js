import axios from "axios"

const hello = () => {
    const ondata = () => {
        const axioSet = axios.create({
            baseURL:"http://localhost:4000",
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8'
            },
            responseType:'json',
            responseEncoding:'json'
        })
        const res=axioSet.get('/api/info');
        console.log(res.data);
    }
    return (
        <>
            <button onClick={ondata}>button</button>
        </>
    )
}

export default hello