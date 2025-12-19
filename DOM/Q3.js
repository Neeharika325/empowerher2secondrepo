const colorInput=document.getElementById("colorInput");
const textInput=document.getElementById("textInput");
const bgBtn=document.getElementById("bgBtn");
const textbtn=document.getElementById("textBtn");
const displayBox=document.getElementById("displayBox");

bgBtn.addEventListener("click", function () {
    const color=colorInput.value.trim();
    const testColor=document.createElement("div");
    testColor.style.color=color;
    if(testColor.style.color ===""){
        alert("Invalid color name!");
        return;
    }
    displayBox.style.backgroundColor=color;

});
textbtn.addEventListener("click" ,function () {
    const newText=textInput.value.trim();
    if(newText ===""){
        alert("Please enter some text!");
        return;
    }
    displayBox.textContent=newText;
})