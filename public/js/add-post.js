const newFormHandler= async(event)=>{
    // stops page from reloading 
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;

if (title && content){
    const response = await fetch ('/api/posts', {
       method: "POST", 
       body: JSON.stringify({title, content}),
       headers: {"Content-Type": "application/json"}
    
    })
    document.location.replace("/dashboard")
}

}

const postForm = document.querySelector ("#new-post");

postForm.addEventListener("submit", newFormHandler); 