// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:

function cardMaker(articleObj) {
    const card = document.createElement("div");
    card.classList.add("card")

    const title = document.createElement("div");
    title.classList.add("headline");
    title.innerHTML = articleObj.headline;

    const authorDiv = document.createElement("div");
    authorDiv.classList.add("author");

    const authorImg = document.createElement("div");
    authorImg.classList.add("img-container");

    const img = document.createElement("img");
    img.src = articleObj.authorPhoto;

    const name = document.createElement("span");
    name.innerHTML = articleObj.authorName

    card.appendChild(title);
    card.appendChild(authorDiv);

    authorDiv.appendChild(authorImg);
    authorDiv.appendChild(name);

    authorImg.appendChild(img);

    return card;
}
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(response => {
        response.data.articles.javascript.forEach(str => {
            var newCard = cardMaker(str);
            document.body.appendChild(newCard);
        })
        response.data.articles.bootstrap.forEach(str => {
            var newCard = cardMaker(str);
            document.body.appendChild(newCard);
        })
        response.data.articles.jquery.forEach(str => {
            var newCard = cardMaker(str);
            document.body.appendChild(newCard);
        })
        response.data.articles.node.forEach(str => {
            var newCard = cardMaker(str);
            document.body.appendChild(newCard);
        })
        response.data.articles.technology.forEach(str => {
            var newCard = cardMaker(str);
            document.body.appendChild(newCard);
        })
        const click = document.querySelector(".card")
        const headline = document.querySelector(".headline")

        click.addEventListener("click", function(event) {
            console.log(headline)
        })
        // click.addEventListener("click", function(event) {
        //     var headline = querySelectorAll(".headline")
        //     console.log(headline)
        // })
    })
