import { useEffect, useState } from 'react'

interface Data {
    msg: string
}

function App() {
    const [data, setData] = useState<Data>({ msg: '' })
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5500')
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])
    return <h1>{data.msg}</h1>
}

export default App
