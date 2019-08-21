const data = {
    getPOIData(){
        return fetch("http://localhost:8088/interests?_expand=place")
            .then(response => response.json())
            .then(parsedPlaces => console.log(parsedPlaces))
    }
}