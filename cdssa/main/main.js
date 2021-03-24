// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5gGkYAwND26y8nbLmFPPTyneADDx9KXI",
    authDomain: "test-form-c63aa.firebaseapp.com",
    projectId: "test-form-c63aa",
    storageBucket: "test-form-c63aa.appspot.com",
    messagingSenderId: "726651045197",
    appId: "1:726651045197:web:5192c8e8db672e8e422304"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let contactInfo = firebase.database().ref("infos");

document.querySelector(".contactform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, subject, message);

    saveContactInfo(name, email, subject, message);

    document.querySelector(".contactform").reset();
}

function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}