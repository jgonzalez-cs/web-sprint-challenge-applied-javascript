// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement("div"); // instantiation of a div
    header.classList.add("header"); // adding class attribute

    const date = document.createElement("span");
    date.classList.add("date");
    date.innerHTML = "MARCH 28, 2020";

    const heading = document.createElement("h1");
    heading.innerHTML = "Lambda Times"

    const temp = document.createElement("span");
    temp.innerHTML = "98°"

    header.appendChild(date) // append elements to header
    header.appendChild(heading)
    header.appendChild(temp)

    return header; // return the header
}
const newHeader = Header()

document.querySelector("div.header-container").appendChild(newHeader)

/* <div class="header-container"> */