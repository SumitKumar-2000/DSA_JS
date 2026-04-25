const headId = document.querySelector("#firstheading");
console.log("headId: ", headId.getAttribute("id"));

headIdStyle = headId.style;
headIdStyle.backgroundColor = "green";
headIdStyle.borderRadius = "4px";
headIdStyle.padding = "8px";


const loremText = document.querySelector("#loremText");

const loremText_innerText = loremText.innerText;  // will not display hidden content also
const loremText_textContent = loremText.textContent; // will display hidden content also
const loremText_innerHTML = loremText.innerHTML; // will display text content with html tag also

console.log("loremText_innerText: ", loremText_innerText);
console.log("loremText_textContent: ", loremText_textContent);
console.log("loremText_innerHTML: ", loremText_innerHTML);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// getting nodelist, works like array but it's not an array
const liNodeList = document.querySelectorAll("li");

console.log("liNodeList: ", liNodeList);  

// selecting element of nodelist and applying changes
liNodeList[0].style.color = "darkgreen";
liNodeList[1].style.color = "lightgreen";

// looping over nodelist
liNodeList.forEach((li)=>{
    if(li.className === "firstUl-liItem"){
        li.style.backgroundColor = "black";
        li.style.marginBottom = "2px";
        li.style.padding = "2px";
    }
})

// getting HTML Collection, shows like array or HTML List but doesn't have any methods of array but can be looped normally
const liHtmlCollection = document.getElementsByClassName("firstUl-liItem");
console.log("liHtmlCollection: ",liHtmlCollection);


// to convert HTML Collection / HTML NodeList into array use Array.from() method
const liItemArr = Array.from(liHtmlCollection);
console.log("liItemArr: ", liItemArr);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const parentDiv = document.querySelector("#parent");
const children = parentDiv.children;

console.log("children: ",children);
for (let child = 0; child < children.length; child++) {
    const element = children[child].style.color = `#ffa50${child}`;
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// creating element

const customDiv = document.createElement("div");
customDiv.className = "customDivClass";
customDiv.id = "customDivId";
customDiv.setAttribute("title","Custom div");
customDiv.style.backgroundColor = "#ff4800"
customDiv.style.padding = "4px";
customDiv.style.borderRadius = "4px";
customDiv.style.marginTop = "8px";
customDiv.innerText = "Text using inner Text";
const customDivText = document.createTextNode(" | Text using createTextNode");
customDiv.appendChild(customDivText);

document.body.appendChild(customDiv);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// creating element dynamically using function

// this function is not optimized,
function addLanguage(language){
    const li = document.createElement("li");
    li.className = "language";
    li.innerText = language;
    
    const languagesUl = document.querySelector("#languages");
    languagesUl.appendChild(li);
}

// optimized approach
function optimizedAddLanguage(language){
    const li = document.createElement("li");
    li.className = "language";
    
    li.appendChild(document.createTextNode(language));
    document.querySelector(".language").appendChild(li);
}

addLanguage("python");
addLanguage("javascript");
optimizedAddLanguage("golang");
optimizedAddLanguage("typescript");