// Import the functions you need from the SDKs you need
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSs4IBLcuAbPNglp6j2pam-8KWGKiY8k8",
    authDomain: "when2meet-47db8.firebaseapp.com",
    databaseURL: "https://when2meet-47db8-default-rtdb.firebaseio.com",
    projectId: "when2meet-47db8",
    storageBucket: "when2meet-47db8.appspot.com",
    messagingSenderId: "619936460409",
    appId: "1:619936460409:web:0433468cacfadc746faea8",
    measurementId: "G-2Y9DFSFGQR"
};

function writeUserData(userId, name, email, imageURL) {
    // possible pass in app in getDatabase
    const db = getDatabase();
    const reference = ref(db, "users/" + userId);

    set(reference, {
        username: name,
        email: email,
        profile_picture: imageURL
    });
}


writeUserData("anishasingh", "Anisha Singh", "newanishasingh@gmail.com", "theImageURL");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const auth = firebase.auth();

const createUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: CREATE_USER});

        auth().createUserWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(() => createUserFail(dispatch));
    }
}

function signUp() {
    const email = emailInput.value;
    const password = passwordInput.value;
    auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error});
        })
}