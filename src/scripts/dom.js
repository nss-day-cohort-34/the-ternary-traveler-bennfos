import factory from "./factory.js"

const dom = {
    renderTripCard () {
        const tripsContainer = document.querySelector("#trips__container")
        let tripCardHTML = factory.createTripCard()
        tripsContainer.innerHTML += tripCardHTML
    }
}

export default dom