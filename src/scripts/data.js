const data = {
    getPlaceData(){
        return fetch("http://localhost:8088/interests?_expand=places")
            .then(response => response.json())
    }
}