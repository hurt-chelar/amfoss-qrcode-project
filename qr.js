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

  if (x[0] == "@"){
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
