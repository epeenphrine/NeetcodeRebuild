const something = fetch(
    `http://localhost:2000/flask/scrape/twitter?handle=realDonaldTrump`, {
    method: "GET",
    mode: "no-cors",
})
    .then(res =>
        res.json()).then(data => {
            this.setState({
                states_data: data
            })
        }).catch(() => console.log("couldn't get key"))

console.log(something)