const taskList=[];
const addTask =(myForm)=>{
    // console.log("added");
    // const taskElement = document.getElementById("task");
    // console.log(taskElement.value);
    const formData = new FormData(myForm);
    const task = formData.get("task");
    const hour = parseInt(formData.get("hour"));
    console.log(task,hour);
    
    const id = "RANDOM UNIQUE ID";
    const taskObj = {
        id,
        task,
        hour,
        type:"good",
    };
    console.log(taskObj);
    taskList.push(taskObj);
    myForm.reset();
    displayGoodList();
}
const displayGoodList =()=> {
   
    const goodListElement = document.getElementById("goodList");
    let goodListElementContent ="";
    taskList.map((item,index) =>{
        if(item.type == "good"){
            goodListElementContent += `
            <tr>
                                <th scope="row">${index + 1}</th>
                                <td>${item.task}</td>
                                <td>${item.hour}hrs</td>
                                <td class="text-end">
                                    <button type="button" class="btn btn-warning"><i
                                            class="fa-solid fa-arrow-left"></i></button>
                                    <button type="button" class="btn btn-danger"><i
                                            class="fa-solid fa-trash"></i></button>


                                </td>
                            </tr>
            `
            
        }
    });
    goodListElement.innerHTML= goodListElementContent;
    const totalHours = getTotalHours();
    const totalHourElement = document.getElementById("totalHour");
    totalHourElement.innerText = totalHours;
};
const getTotalHours = ()=>{
    let totalHours = taskList.reduce((acc,item)=>{
        return acc + item.hour;
    },0);
    return totalHours;
    
};

const deleteTask = (id) =>{
    taskList = taskList.filter((task)=>{

    })
    console.log("Task Dele");
    console.log(id);

};
const getRandomUniqueID = ()=>{

}

taskList.map((item, index)=>{
    if(item.type == "bad"){
        badIndex += 1;
        badListElementContent = 
        badListElementContent + `
        <tr>
                                <th scope="row">${badIndex}</th>
                                <td>${item.task}</td>
                                <td>${item.hour}hrs</td>
                                <td class="text-end">
                                    <button type="button" class="btn btn-warning" onclick="switch"><i
                                            class="fa-solid fa-arrow-left"></i></button>
                                    <button type="button" class="btn btn-danger"><i
                                            class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
        `
    }
})