// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then(promise => {
        // console.log(promise.data.topics) // how to access the topics inside of promise object - must use .data first
        
        promise.data.topics.forEach(topic => { // append each topic to the div.topics element
            // var tab = tabMaker(topic)
            var newTab = document.createElement("div")
            newTab.classList.add("tab")
            newTab.innerHTML = topic
            document.querySelector("div.topics").appendChild(newTab) // append that tab to the div with the class name "topics"
        })
    })
    .catch(error => {
        // handle the error
        console.log(error)
    })

// data.topics.forEach(topic => { // append each topic to the div.topics element
//     var tab = tabMaker(topic)
//     document.querySelector("div.topics").appendChild(tab)
// })

// function tabMaker(string) {
//     var newTab = document.createElement("div") // create a div
//     newTab.classList.add("tab") // give it the class attribute of tab
//     newTab.textContent = string // give that tab the content
// }

