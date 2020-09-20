import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAbr5STLmKcyJI3-pvjzZUlDmsMfMzMo4A",
    authDomain: "alejapuppies-b5acb.firebaseapp.com",
    databaseURL: "https://alejapuppies-b5acb.firebaseio.com",
    projectId: "alejapuppies-b5acb",
    storageBucket: "alejapuppies-b5acb.appspot.com",
    messagingSenderId: "782970079902",
    appId: "1:782970079902:web:b0e56209415bc7873d498f",
    measurementId: "G-TFY57GXYL1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().useDeviceLanguage();

export function loginWithGoogle(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

export function isLoggedIn(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      return true;
    }
    else{
      return false;
    }
  });
}