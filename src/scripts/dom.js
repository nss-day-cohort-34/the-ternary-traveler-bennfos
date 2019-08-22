import factory from "./factory.js"

const dom = {
    renderTripCard () {
        const tripsContainer = document.querySelector("#trips__container")
        let interestId = 1
        let tripCardHTML = factory.createTripCard(interestId++, interestId++, interestId++)
        tripsContainer.innerHTML += tripCardHTML
    },
    renderInterestCard (domRef, interestHTML) {
        domRef.innerHTML = interestHTML
    }
    // renderInterestCard2 (interestObj) {
    //     const interestContainer = document.querySelector(`#interest--${interestObj.id}`)
    //     interest2HTML = factory.createPOICard(interestObj)
    //     interestContainer.innerHTML = interest2HTML
    // },
    // renderInterestCard3 (interestObj) {
    //     const interestContainer = document.querySelector(`#interest--${interestObj.id}`)
    //     interest3HTML = factory.createPOICard(interestObj)
    //     interestContainer.innerHTML = interest3HTML
    // }
}

export default dom