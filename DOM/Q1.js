    <html> 
    <body>
        <h1 id="main-heading">Original Heading</h1>
        <p>This is paragraph 1.</p>
        <p>This is paragraph 2.</p>
        <p>This is paragraph 3.</p>

        <div class="container">
            This is container div.
        </div>
        <script>
            const heading = document.getElementById("main-heading");
            heading.textContent="Welcome to DOM World!";

            const paragraphs=document.getElementsByTagName("p");
            for(let p of paragraphs) {
                p.style.color="blue";
            }
            const containerDiv=document.querySelector(".container");
            containerDiv.style.backgroundColor="yellow";
        </script>
    </body>
</html>