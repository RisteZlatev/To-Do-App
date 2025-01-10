const button = document.getElementById("add-btn");
const input = document.getElementById("input-value");
const list = document.getElementById("list-container");

let taskCounter = 1;

button.addEventListener('click', ()=>{
    addTask();
})
input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        addTask();
    }
})


list.addEventListener('click', (ev)=>{
    if(ev.target.type == "checkbox" && ev.target.tagName === "INPUT"){
        const task = ev.target.closest(".task");
        const text = task.querySelector('#text');
        text.classList.toggle("checked");
    }
    else if(ev.target.tagName === "I"){
        ev.target.parentElement.remove();
    }
})

function addTask(){
    if(input.value == ""){
        return;
    }
    const task = document.createElement("li");
    task.classList.add('task');

    const uniqueId = `checkbox-${taskCounter}`;
    taskCounter++;
    task.innerHTML = `
        <div class="box-text">
        <div class="checkbox-wrapper-18">
                    <div class="round">
                      <input type="checkbox" id="${uniqueId}" />
                      <label for="${uniqueId}"></label>
                    </div>
                  </div>
                <span id = "text">${input.value}</span>
                </div>
                <i class="fa-solid fa-x"></i>
            </div>
    `;
    list.appendChild(task);

    input.value = "";
}