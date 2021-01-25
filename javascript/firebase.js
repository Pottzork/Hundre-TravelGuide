
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyARMSyrHcxyK724Ma_e7GCCsw5_iX9LdAc",
    authDomain: "travelwebpage-f5adc.firebaseapp.com",
    projectId: "travelwebpage-f5adc",
    storageBucket: "travelwebpage-f5adc.appspot.com",
    messagingSenderId: "403845047345",
    appId: "1:403845047345:web:9f96c674e1435fcdb3e110",
    measurementId: "G-NNJPN9BQDL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("Email");
    var password = document.getElementById("Password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}

function signIn() {
    var email = document.getElementById("Email");
    var password = document.getElementById("Password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);

    promise.catch(e => alert(e.message));

}

function signOut() {
    auth.signOut();
    alert("Signed out");
}

auth.onAuthStateChanged(function (user) {

    if (user) {
        //signed in
        var email = user.email;

        document.getElementById("btnSignOut").style.visibility = "visible";
        document.getElementById("btnSignIn").style.visibility = "hidden";

    } else {
        //no user is signed in

        document.getElementById("btnSignOut").style.visibility = "hidden";
        document.getElementById("btnSignIn").style.visibility = "visible";
    }
});

// firebase.auth.onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//         document.getElementById("btnSignOut").style.display = "block";
//     } else {
//         document.getElementById("btnSignOut").style.display = "none";
//     }
// })