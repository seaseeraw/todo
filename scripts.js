let taskList =[];
const RANDOM_STRING_LENGTH =6;
const WEEKELY_HOUR =7 * 12;

const addTask = (myForm) => {
    const formData = new FormData(myForm);
    const task = formData.get("task");
    const hour = parseInt(formData.get("hour"));
    console.log(task,hour);
    
    const id = getRandomUniqueID();
    const taskObj = {
        id,
        task,
        hour,
        type:"good",
    };
    let totalHour = getTotalHours();
    if(totalHour + hour > WEEKELY_HOUR){
        displayAlert('WEWKLY EXCCED');
    }
    else{
displayAlert("task added");
taskList.push(taskObj);
displayList();
myForm.reset();
    }
    // console.log(taskObj);
    // taskList.push(taskObj);
    // myForm.reset();
    // displayList();
};

const displayList =()=>{

};
const getBadHours =( )=>{

};
const getTotalHours =()=>{

};
const deleteTask=(id)=>{
taskList = taskList.filter((task)=>{
    return task.id !=id;
});
displayList();
};
const getRandomUniqueID=()=>{
let stringGenerator ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomString ="";
for (let i= 0;i < RANDOM_STRING_LENGTH; i++){
    let randomIndex = Math.floor(Math.random()*stringGenerator.length);
    randomString = randomString + stringGenerator[randomIndex];
}
return randomString;
};
const switchTask =(id)=>{
let task = taskList.find((task)=> task.id == id);
task.type =task.type =="good" ? "bad":"good";
displayList();
displayAlert("TASKED SWITCHED");
};
const displayDataFromLocalStorage =()=>{
let tempList = JSON.parse(localStorage.getItem("taskList"));
taskList = tempList ? tempList :[];
displayList();
};
const displayAlert = (message)=>{

}

displayDataFromLocalStorage();