import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface DataType {
    message: string
}

const Card = styled.div`
    background-color: #3887be;
    padding: 1em;
`
const H1 = styled.div`
    margin: 0;
    font-size: 16px;
    font-weight: 800;
`

function App() {
    const [data, setData] = useState<DataType>({ message: '' })

    useEffect(() => {
        fetch('http://localhost:5500/')
            .then((res) => res.json())
            .then((data) => {
                console.log('Received data:', data)
                setData(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, [])

    const handleClick = () => {
        setData({ message: 'loading' })
    }

    return (
        <Card>
            <button onClick={handleClick}>Fetch</button>
            <H1>{data.message}</H1>
        </Card>
    )
}

export default App
