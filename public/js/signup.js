const signForm = document.querySelector ("#signup");
const signupFormHandler= async(event)=>{
    // stops page from reloading 
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password-signup').value.trim(); 

if (!username && password){
    alert('You must enter both a username and password')
    return;
}
    const response = await fetch ('/api/user/', {
       method: "POST", 
       body: JSON.stringify({username, password}),
       headers: {"Content-Type": "application/json"}
    
    })
    if (response.ok) {
        location = ("/")
    } else {
        const message = await response.json()
        alert('Unable to create user.\n Message: ' + message)
    }
}
   

signForm.addEventListener("submit", signupFormHandler); 