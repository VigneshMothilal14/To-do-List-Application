let addTaskBtn = document.getElementById("addTaskBtn");
let task = document.getElementById("task");
let container = document.querySelector(".container");

// let tasks = [];

addTaskBtn.addEventListener("click", ()=> {

    let actualTask = task.value;

    if(actualTask != '') {

        let div = document.createElement("div");
        div.classList.add("eachTask"); // classNames

        console.log(div);
        
        let combinationOfButton = document.createElement("div");
        combinationOfButton.classList.add("endResultsButton");

        let completeBtn = document.createElement("button");
        completeBtn.classList.add("completeButton");
        completeBtn.innerText = "Complete";

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeButton");
        removeBtn.innerText = "Remove";


        combinationOfButton.appendChild(completeBtn);
        combinationOfButton.appendChild(removeBtn);
        
        div.innerHTML = `<p> ${actualTask} </p>`;
        div.appendChild(combinationOfButton);

        container.append(div);
        task.value ="";
        
        completeBtn.addEventListener("click", () => {
            let taskText = div.querySelector("p"); // in the div tag again choose the paragragph tag and then apply the decoration to that p tag
            taskText.style.textDecoration = "line-through";
           
        });

        removeBtn.addEventListener("click", ()=> {
            div.remove();
        })
    }
    else {
        alert("Enter the valid task")
    }
})

