const data = {
    getAllPOIs() {
        return fetch ("http://localhost:8088/interests?_expand=place")
            .then(response => response.json())
    },

    getPOIData(interestId){
        return fetch(`http://localhost:8088/interests/${interestId}?_expand=place`)
            .then(response => response.json())
    },
    deleteInterest(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    updateFormFields(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}?_expand=place`)
        .then(response => response.json())
    },
    editInterest(updatedObject, interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}?_expand=place`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(response => response.json())
    },
    saveInterest(updatedObject, interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}?_expand=place`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(response => response.json())
    }
}

export default data