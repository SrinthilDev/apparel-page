function myFunction() {
    let  textValue = document.getElementById("text");
    let icon = document.getElementById('errs');
    let form = document.getElementById('text');


    if (form.checkValidity() == false || textValue.value == "" ) {
      text = "Please provide a valid email";
      icon.classList.toggle('active');
      icon.style.opacity= 1;
    } else {
     
      text = "";
      icon.style.opacity= 0;
      alert("Thank You  " + textValue.value);
      textValue.value = "";
    }
    document.getElementById("warn").innerHTML = text;
}
