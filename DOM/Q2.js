 <html>
 <body>
    <ul id="item-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 2</li>
    </ul>
    <button id="add btn">Add Item</button>
    
        const list=document.querySelector("#item-list");
        const button=document.getElementById("add-btn");
        <script>
        button.addEventListener("click function () {
            const newLi=document.createElementById("li");
            newLi.textContent="New Item";
            const itemNumber=list.children.length + 1;
            if(itemNumber % 2 ===1){
                newLi.style.fontWeight="bold";
            }else{
                newLi.style.fontStyle="italic";
                newLi.style.color="red";
            }
            list.appendChild(newLi);

        });
    </script>
</body>
</html>