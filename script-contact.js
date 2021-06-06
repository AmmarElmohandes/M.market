const contactApi="https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us"

const contactForm=document.getElementById("contact-form")

contactForm.addEventListener("submit",e=>{

    e.preventDefault();
    const name=document.getElementById("name")
    const email=document.getElementById("email")
    const subject=document.getElementById("subject")
    const message=document.getElementById("message")

    data={
        name:name.value,
        email:email.value,
        subject:subject.value,
        message:message.value

    }

const xhr=new XMLHttpRequest();

xhr.open("POST",contactApi)
xhr.setRequestHeader("Content-Type","application/json");
xhr.send(JSON.stringify(data))
xhr.onload=function () {
    if(xhr.status==200){
    contactForm.reset();
    }
}
xhr.onerror=function(){
    console.log("request error")
}




})