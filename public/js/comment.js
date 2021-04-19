const commentFormHandler= async(event)=>{
    // stops page from reloading 
    event.preventDefault();

    const id = document.querySelector('input [name = "postId"]').value;
    const comment = document.querySelector('textarea [name= "comment"]').value;

if (id && comment){
    const response = await fetch ('/api/posts', {
       method: "POST", 
       body: JSON.stringify({id, comment}),
       headers: {"Content-Type": "application/json"}
    
    })
    document.location.reload()
}

}

const commentForm = document.querySelector ("#comment-post");

commentForm.addEventListener("submit", commentFormHandler); 