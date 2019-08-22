//add points of interests for the next set of three places she will be visiting.
//add a new point of interest in one of her destinations so she can have a list of places she needs to visit when she travels.
//edit the point of interest by adjusting the cost and adding a review.
//be able to delete points of interest from her list.
//an alert to to confirm the delete action

import dom from "./dom.js"
import data from "./data.js"
import factory from "./factory"

dom.renderTripCard()


const getExistingPOIs = () => {
    data.getAllPOIs()
        .then(interests => {
            console.log(interests)
            interests.forEach(interest => {
                console.log(interest)
                const interestHTML = factory.createPOICard(interest)
                const domRef = document.querySelector(`#interest--${interest.id}`)
                dom.renderInterestCard(domRef, interestHTML)
                domRef.addEventListener("click", event => {
                    if (event.target.id.startsWith("delete--")) {
                        const interestToDelete = event.target.id.split("--")[1]
                        data.deleteInterest(interestToDelete)
                        domRef.innerHTML = `
                            <section id="inputContainer">
                            <input type="hidden" id="interestId" value="">
                                <fieldset>
                                    <label for="name">Name</label>
                                    <input id="nameInput" type="text">
                                </fieldset>
                                <fieldset>
                                    <label for="description">Description</label>
                                    <textarea id="descriptionInput"></textarea>
                                </fieldset>
                                <fieldset>
                                    <label for="cost">Cost</label>
                                    <input id="costInput" type="text">
                                </fieldset>
                                <fieldset>
                                    <label for="review">Review</label>
                                    <textarea id="reviewInput"></textarea>
                                </fieldset>
                            </section>
                            <section>
                                <button id="saveInterest__button">Save</button>
                            </section>
                        `
                    } else if (event.target.id.startsWith("edit--")) {
                        const interestToEditId = event.target.id.split("--")[1]
                        domRef.innerHTML = `
                            <section id="inputContainer">
                            <input type="hidden" id="interestId" value="">
                                <fieldset>
                                    <label for="name">Name</label>
                                    <input id="placeNameInput" type="text">
                                </fieldset>
                                <fieldset>
                                    <label for="name">Name</label>
                                    <input id="interestNameInput" type="text">
                                </fieldset>
                                <fieldset>
                                    <label for="description">Description</label>
                                    <textarea id="descriptionInput"></textarea>
                                </fieldset>
                                <fieldset>
                                    <label for="cost">Cost</label>
                                    <input id="costInput" type="text">
                                </fieldset>
                                <fieldset>
                                    <label for="review">Review</label>
                                    <textarea id="reviewInput"></textarea>
                                </fieldset>
                            </section>
                            <section>
                                <button id="saveInterest__button">Save</button>
                            </section>
                        `
                        const hiddenArticleId = document.getElementById("interestId")
                        const placeNameInput = document.querySelector("#placeNameInput")
                        const interestNameInput = document.querySelector("#interestNameInput")
                        const descriptionInput = document.querySelector("#descriptionInput")
                        const costInput = document.querySelector("#costInput")
                        const reviewInput = document.querySelector("#reviewInput")
                        data.updateFormFields(interestToEditId)
                            .then(interest => {
                            hiddenArticleId.value = interest.id
                            placeNameInput.value = interest.place.name
                            interestNameInput.value = interest.name
                            descriptionInput.value = interest.description
                            costInput.value = interest.cost
                            reviewInput.value = interest.review
                            console.log(hiddenArticleId.value)
                })

                    }

                    })
            })
        })
}




getExistingPOIs()
