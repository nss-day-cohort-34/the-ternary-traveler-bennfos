import factory from "./factory.js"

const dom = {
    renderTripsContainer () {
        const tripsContainer = document.querySelector("#tripsContainer")
        let tripCardHTML = factory.createTripCard()
        tripsContainer.innerHTML += tripCardHTML
    }
}

export default dom