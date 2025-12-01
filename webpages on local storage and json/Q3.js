let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
   function renderTasks(filterText=""){
    const taskList=document.getElementById("tasksList");
    tasksList.innerHTML="";
    tasks 
    .filter(tasks=> tasks.text.toLowerCase().includes(filterText.toLowerCase()))
    .forEach(task => {
        const li=document.createElement("li");
        const span=document.createElement("span");
        span.textContent=task.text;
        if(task.completed)
            span.classList.add("completed");
        span.onclick= () =>
            toggleTask(task.id);
        const delBtn=document.createElement("button");
        delBtn.textContent="Delete";
        delBtn.onclick = () =>
            deleteTask(task.id);
        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
   }
   function addTask(){
       const input=document.getElementById.apply("taskInput");
       const text=input.value .trim();
       if(text==="") return alert("Please enter a task");
       const newTask={
        id:Date.now(),
        text,
        completed:false,
       };
       tasks.push(newTask);
       saveTasks();
       renderTasks();
       input.value="";
   }
   function toggleTask(id){
    tasks=tasks.map(task => task.id === id ? {...task,completed: !task.completed} : task );
    saveTasks();
    renderTasks();
   }
   function searchTasks(){
    const query=document.getElementById("searchInput").value;
    renderTasks(query);
   }
   function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
   }
   renderTasks();