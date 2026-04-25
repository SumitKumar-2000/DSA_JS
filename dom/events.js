function appendChild(content, index){
    const child = document.createElement("div");
    child.appendChild(document.createTextNode(content));
    child.id = `child_${index}`
    child.style.width = "80px";
    child.style.height = "80px";
    child.style.border = "4px solid red";
    child.style.padding = "4px";
    child.style.backgroundColor = "darkred";

    const parent = document.querySelector("#parent");
    parent.appendChild(child);
}

for (let i = 1; i <= 5; i++) {
    appendChild(`Child - ${i}`, i)
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// things to learn for events :-
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// event propogation
// true - propogation type: event capturing, false - propogation type: event bubbling
document.querySelector("#parent").addEventListener("click",()=>{console.log("parent")}, true)

document.querySelector("#child_3").addEventListener("click",()=>{console.log("child")}, false)