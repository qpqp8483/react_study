// ========== 이행성공 start  ==========
// function getData() {
//     return new Promise((resolve, reject) => {
//         const data = 100;
//         resolve(data);
//     })
// }

// getData().then((resolveData) => {
//     console.log(resolveData);
// })
// ========== 이행성공 end  ==========

// ========== 이행실패 start  ==========
// function getData() {
//     return new Promise((resolve, reject) => {
//         reject(new Error("Request 실패"))
//     })
// }

// getData().then().catch(err => {
//     console.log(err);
// });
// ========== 이행실패 end  ==========

// ========== async & await start ==========
function fetchItems(){
    return new Promise(function(resolve, reject){
        const items = [1,2,3];
        resolve(items);
    });
}

async function logItems(){
    const resultItems = await fetchItems();
    console.log(resultItems);
}

logItems();



function fetchUser() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    return fetch(url).then(function(response){
        return response.json();
    });
};
  
function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function(response) {
        return response.json();
    });
}

async function logTodoTitle(){
    const user = await fetchUser();
    if(user.id === 1){
        const todo = await fetchTodo();
        console.log(todo.title); 
    }
}
logTodoTitle();
  
// ========== async & await end ==========
