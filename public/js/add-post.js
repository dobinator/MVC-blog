const newFormHandler= async(event)=>{
    // stops page from reloading 
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;

if (title && content){
    const response = await fetch ('')
}

}