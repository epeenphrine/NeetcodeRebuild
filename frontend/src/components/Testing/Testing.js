import React, {useState, useEffect} from 'react'

export default function Testing() {
    const [api, setApi] = useState(
        {
            data: {}
        }
    )

    async function getAPI() {
        const res = await fetch('http://192.168.86.31:1500/proxy/project')
            .then(resp => resp.json()).catch((err) => console.log(err))
        setApi({
            data: res
        })
    }

    useEffect(() => {
        getAPI()
    }, [])
    const items = api.data.map(item => {
        return (
            <h1>{item.project}</h1>
        )
    })
    return (
        <div>
        </div>
    )
}
