/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
var boolHighlight = false;

function toggleHighlight() {
  var item = document.getElementById("second-paragraph");
  boolHighlight = !boolHighlight
  if(boolHighlight === true){
    item.classList.add("highlight");
  } else {
    item.classList.remove("highlight");
  }
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  var itemList = document.getElementById("create-list");
  var arrayList = ["apple", "banana", "orange"]
  
  arrayList.forEach((data) => {
    console.log(data);
    const list = document.createElement("li")
    list.appendChild(document.createTextNode(data))
    itemList.appendChild(list);
  })

}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  var item = document.getElementById("tweet");

  if(textarea.value.length > 140){
    item.setAttribute('aria-invalid', 'true');
  } else {
    item.setAttribute('aria-invalid', 'false');
  }
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  var item = document.getElementById("tweet");

  item.addEventListener('keydown', () => {
    validateTweet(item)
  });
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  // your code here
}
