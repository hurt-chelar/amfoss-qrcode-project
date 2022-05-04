qrData = document.getElementById('firstName');
qrLastname = document.getElementById('lastname');
qrdob = document.getElementById('email');
qrnat = document.getElementById('twitter');
qrGit= document.getElementById('git'); 



const qrCode = new QRCodeStyling({
  padding : 0 , 
  width: 100,
  height: 100,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});


// Blank Variable Declaration 
const updateClear = () => {

    newQrData = 0; 
    qrCode.update({
        data : newQrData
    });

};

function close_func(){
  document.getElementById("overlay").style.display = "none";
  document.getElementById("content").style.filter = "none" ; 
};


function myfunc(){
  console.log(qrData.value); 
  document.getElementById('detailsName').innerHTML =  qrData.value + " " + qrLastname.value ; 
  //document.getElementById('detailsLastName').innerHTML = "Last Name:" + qrLastname.value;
  document.getElementById('detailsEmail').innerHTML ="Email:" +qrdob.value;
  document.getElementById('detailsTwitter').innerHTML = "Twitter:"+qrnat.value;
  document.getElementById('detailsGithub').innerHTML = "GitHub:" +qrGit.value;
  console.log("hello");
  document.getElementById("overlay").style.display = "block";

  // document.getElementById('firstName').innerHTML = "welcome1";
  // document.getElementById('lastName').innerHTML = qrLastname.value;
  // document.getElementById('email').innerHTML = qrdob.value;
  // document.getElementById('twitter').innerHTML = qrnat.value;
  // document.getElementById('gitHub').innerHTML = qrGit.value;
  
};

function myFuncClear(){
  console.log(qrData.value); 
  document.getElementById('detailsName').innerHTML = "";
  document.getElementById('detailsLastName').innerHTML = "";
  document.getElementById('detailsEmail').innerHTML = "";
  document.getElementById('detailsTwitter').innerHTML = "";
  document.getElementById('detailsGithub').innerHTML = "";
  
};





const update = () => {
let x = qrnat.value;
console.log("hellodfs",qrnat.value);
let y = qrData.value; 
let z = qrLastname.value;   
if (y=="") { 
alert("Enter First Name");
return 0; 
}
if(z==""){
  alert("Enter Last Name"); 
  return 0 ; 
}

  if (x[0] != "@"){
    alert("Please Start Twitter Details With @.");
    return 0;
  }
    newQrData =   qrData.value +" "+ qrLastname.value + "\n" + qrdob.value + "\n" + qrnat.value + "\n" + qrGit.value   ; 
    qrCode.update({
      data : newQrData
    });

    myfunc();
    document.getElementById("content").style.filter = "blur(50px)";

};


const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));

qrCode.append(document.getElementById("canvas2"));



/// form validation part /////////////////////////////////////////////////////////////////

emailVerificationText = document.getElementById("emailVerificationText") ;
formAddress = document.getElementById("qrForm"); 

firstNameVerificationText = document.getElementById("firstNameVerification"); 





















function validation(){
  var form = formAddress;  
  var text = emailVerificationText; 
  var email =  qrdob.value ;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern)){

    form.classList.add("valid");
    form.classList.remove("invalid");
    //document.getElementById('emailVerificationText').innerHTML = "Valid";

    text.style.color = "#00ff00" ; 
        
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
   // document.getElementById('emailVerificationText').innerHTML = "Invalid";
    text.style.color = "#ff0000" ; 
    //alert("Invalid Email");
  }
  if (email ==""){
    form.classList.remove("valid");
    form.classList.remove("invalid"); 
    text.innerHTML = "";
    text.style.color = "#00ff00" ; 
    
  }
  // if(qrData==""){
  //   form.classList.remove("valid");
  //   form.classList.remove("invalid"); 
  //   text.innerHTML = "Invalid";
  //   text.style.color = "#00ff00" ; 
  // }

}



/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/////************VALIDATION**************//////////////////////////////////////////////// */

var firstNameError = document.getElementById("firstName-error"); 
var lastNameError = document.getElementById("lastName-error");
var emailError = document.getElementById("email-error");
var twitterError = document.getElementById("twitter-error");
var giterror = document.getElementById("git-error"); 


function validateName() {
  var name = document.getElementById("firstName").value ;

  if(name.length == 0 ){
    firstNameError.innerHTML = "Name \n Required";
    return false ; 

  }if (!name.match(/^[a-zA-Z]+$/)){
    firstNameError.innerHTML ="Name Invalid" ; 
    return false ;    
  }
  firstNameError.innerHTML = '<i class="fas fa-check-circle"></i>' ; 
  return true ;

}

function validateLastName(){
  var name = document.getElementById("lastname").value ;

  if(name.length == 0 ){
    lastNameError.innerHTML = "Name Required";
    return false ; 

  }if (!name.match(/^[a-zA-Z]+$/)){
    
    lastNameError.innerHTML ="Name Invalid" ; 
    return false ;    
  }
  lastNameError.innerHTML = '<i class="fas fa-check-circle"></i>' ; 
  return true ;
}



function validateEmail(){
  var name= document.getElementById("email").value;  

  if(!name.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    )){
      emailError.innerHTML ="Invalid Email" ; 
      return false ; 
    }
  if(name==""){
    emailError.innerHTML = "" ; 
    return false ; 
  }
  emailError.innerHTML='<i class="fas fa-check-circle"></i>' ;
  return true ; 
  


}

function validateTwitter(){

  var twitter = document.getElementById("twitter").value ; 
  
  if (twitter[0]!= "@"){
    twitterError.innerHTML = "Invalid Twitter" ; 
    return false ; 
  }
  if(twitter[0]=="@"){
    twitterError.innerHTML = '<i class="fas fa-check-circle"></i>' ; 
    return true ; 
  }



}

// function updationTwitter(){
//   var twitter = document.getElementById("twitter").value; 
//   if(twitter[0]!= "@") {
//     document.getElementById("twitter").innerHTML = "@tiwoioijo"; 
//   }

// }

function validateGit(){
var git = document.getElementById("git").value;
  
if(git.lenght !=  0 ){

  giterror.innerHTML = '<i class="fas fa-check-circle"></i>' ; 

}
if(git.length ==  0 ) {
  giterror.innerHTML = "" ; 
}

}

function validationClear(){
  firstNameError.innerHTML= "" ; 
  lastNameError.innerHTML= "" ;  
  emailError.innerHTML= "" ; 
  twitterError.innerHTML="" ; 
  giterror.innerHTML = "" ; 
  console.log("All form validation cleared") ; 


}