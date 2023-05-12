

// Asynchronous Function Assignment

//1. Write an asynchronous function that accepts a message string and 
// a delay time in milliseconds. The function should log the message to the
//  console after the specified delay time.


async function logMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}

logMessage("I am capable", 1000);



// You have an array of user IDs and a function getUserData(id) that returns
//  a Promise with user data when given a user ID. Write an asynchronous function 
// that fetches and logs the data for each user ID one by one, in sequence.

const  num=[30,40,50,60];
const fetchData =async ()=>{
    for(let id in num){
                let data= await getUserData(id);
                console.log(data);
            }
}
const getUserData=(id)=>{
    return new Promise(resolve=>{setTimeout(()=>{ resolve(`data number for user: ${id}`);
        
           
        },7000);
    })
}

fetchData()




// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the
//  task is successful, and a custom error message if there's an error.


function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; 
  
        if (success) {
          resolve("Task is successful");
        } else {
          reject("Error occurred ");
        }
      }, 1000); 
    });
  }


  function taskSuccessful() {
    performTask()
      .then((answer) => {
        console.log("Successfully:", answer); 
      })
      .catch((error) => {
        console.log("Error:", error); 
      });
  }
  taskSuccessful();





