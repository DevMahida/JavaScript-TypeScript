// document.getElementById("due-date").min = new Date().now();

// let list = [];
let list = JSON.parse(localStorage.getItem("TaskList")) || [];
let ListMenu = document.getElementById("showList");

const addTask = () => {
    event.preventDefault();

    let title = document.getElementById("title").value.trim();
    let desc = document.getElementById("desc").value.trim();
    let priority = document.getElementById("priority").value;

    let dueDate = document.getElementById("due-date").value;


    if (title == "" || desc == "" || priority == "" || dueDate == "") {
        alert("Please fill all the field before adding a task");
        return;
    }



    const task = {
        id: Date.now(),
        title,
        desc,
        priority,
        dueDate
    }

    list.push(task);

    localStorage.setItem("TaskList", JSON.stringify(list));

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("due-date").value = "";

    alert("Task Added..");

    showList();

}

const showList = () => {
    ListMenu.innerHTML = "";

    list = JSON.parse(localStorage.getItem("TaskList")) || [];

    console.log(list);


    list.forEach(ele => {
        ListMenu.innerHTML += `
            <div class="col-12">
                            <div class="p-3 bg-info-subtle rounded-3">
                                
                                <div class="d-flex justify-content-between">
                                    <span>Title: <b>${ele.title}</b></span>

                                    <div class="d-flex gap-5">
                                        <span>Priority: <b>${ele.priority}</b></span>
                                        <span>Due Date: <b>${ele.dueDate}</b> </span>
                                    </div>
                                </div>

                                <div class="mt-3">

                                    <div>
                                        <span>Description: </span>
                                        <p>${ele.desc}</p>
                                    </div>

                                    <div class="d-flex gap-3 justify-content-end">
                                        <button class="btn btn-outline-dark" onclick='return updateTask(${ele.id})'><i class="ri-edit-box-fill"></i></button>
                                        <button class="btn btn-outline-danger" onclick='return deleteTask(${ele.id})'><i class="ri-delete-bin-7-fill"></i></button>
                                    </div>
                                </div>

                            </div>
        `;
    });
}

const deleteTask = (id) => {
    let tempList = JSON.parse(localStorage.getItem("TaskList")).filter(ele => id != ele.id);
    localStorage.setItem("TaskList", JSON.stringify(tempList));
    showList();
}

const updateTask = (id) => {

    let tempList = JSON.parse(localStorage.getItem("TaskList")).find(ele => id == ele.id);
    console.log(tempList);

    document.getElementById("title").value = tempList.title;
    document.getElementById("desc").value = tempList.desc;
    document.getElementById("priority").value = tempList.priority;
    document.getElementById("due-date").value = tempList.dueDate;
    
}

showList();
