const factory = {
    createTripCard () {
        return `
        <section id="trip__card">
            <div id="interest__container">
            </div>
            <div>
                <button id="addArticle__button">+</button>
            </div>
        </section>
        `
    },
    createPOICard (interestObj) {
        return `
        <div id="POI__container--${interest.placeId}>
            <h2>${interestObj.place.name}</h2>
            <p>${interestObj.place.description}</p>
            <p>${interest.cost}</p>
            <p>${interest.place.review}</p>
        </div>
        `
    }
}

export default factory
