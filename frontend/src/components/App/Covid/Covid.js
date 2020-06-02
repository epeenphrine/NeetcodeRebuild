import React, { setState, useEffect}from 'react'

export default function Covid() {
    const [global, setGlobal] = setState({
        data: {}
    })
    const [states, setStates] = setState([])
    const [data, setData] = []

    function getAPI() {
        const res =  fetch('https://api.covid19api.com/summary').then(resp => resp.json())
        .catch(e => console.log(e))

        console.log(res)

        setGlobal({
           data: res 
        })
    } 

    useEffect(() => {
        getAPI();
        console.log("something happen");
    }, []);

    return (
        <div>
            
        </div>
    )
}
