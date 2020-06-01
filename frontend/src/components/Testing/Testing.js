import React, {useState, useEffect} from 'react'

export default function Testing() {
    const [api, setApi] = useState(
        {
            data: [] 
        }
    )

     function getAPI() {
        const res = [
            "united states",
            "china",
            "korea",
            "japan"
        ] 

        console.log(res)
        setApi({
            data: res
        })
    }

    useEffect(() => {
        getAPI()
    }, [])

    const items = api.data.map(item => {
        return (
            <h1>{item}</h1>
        )
    })

    const filter = api.data.filter( item => item.includes("chin")).map(filtereditem => (
    <h1>{filtereditem}</h1>
    ))

    return (
        <div>
            {filter}
        </div>
    )
}
