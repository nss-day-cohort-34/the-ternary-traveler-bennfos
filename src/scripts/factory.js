const factory = {
    createTripCard (interestId1, interestId2, interestId3) {
        return `
        <section class="trip__card">
        <div id=interest--${interestId1} class="interest__card">

        </div>
        <div id=interest--${interestId2} class="interest__card">

        </div>
        <div id=interest--${interestId3} class="interest__card">

        </div>
        `
    },
    createPOICard (interestObj) {
        return `
        <div id="POI__container--${interestObj.placeId}">
            <h2>${interestObj.place.name}</h2>
            <h3>${interestObj.name}</h3>
            <p>${interestObj.description}</p>
            <p>Cost: $${interestObj.cost}</p>
            <p>Review: ${interestObj.review}</p>
        </div>
        <button id="edit--${interestObj.id}">Edit</button>
        <button id="delete--${interestObj.id}">Delete</button>
        `
    }
}

export default factory
