const signupFormHandler= async(event)=>{
    // stops page from reloading 
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

if (title && content){
    const response = await fetch ('/api/users', {
       method: "POST", 
       body: JSON.stringify({username, password}),
       headers: {"Content-Type": "application/json"}
    
    })
    document.location.replace("/dashboard")
}

}

const signForm = document.querySelector ("#signup");

signForm.addEventListener("submit", signupFormHandler); 