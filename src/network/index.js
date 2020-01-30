import firebase from "./config";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    forceRefresh: true
});


const db = firebase.firestore();
class Service {
    static async signIn({email, password}) {
        return firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(handleSignIn);
                // .finally(handleError);
    }
    static async logOut() {
        // var user = firebase.auth().currentUser;
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            window.localStorage.removeItem('uid');
            window.localStorage.removeItem('photo');
            window.localStorage.removeItem('details');
            history.push('/');
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
    }
    static async checkEmail(email){
        return db.collection("users").get().then((querySnapshot) => {
            var BreakException = {};
            try {
                querySnapshot.forEach((doc) => {
                    if(doc.data().email === email){
                        throw BreakException;
                    }
                    return false;
                });
            } catch(e){
                console.log(true, e)
                return true;
            }
            
        });
    }
    static async signUp(payload) {
        let photo = payload.photo;
        delete payload.photo;

        var promise = firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
        // If there is any error stop the process.
        promise.catch(function (error) {
            var errorCode = error.code;
            console.log(`GOT ERROR: ` + errorCode)
            if (errorCode == 'auth/weak-password') return // password to weak. Minimal 6 characters
            if (errorCode == 'auth/email-already-in-use') return // Return a email already in use error
            });
            promise.then(function () {
                var userUid = firebase.auth().currentUser.uid;
                var db = firebase.firestore();
                db.collection('users').doc(userUid).set(payload)
                Service.uploadPhoto(userUid, photo);
            });
    }

    static async uploadPhoto(userUid, file) {
        let storageRef = firebase.storage().ref();
        // TODO: Support png
        let ref = storageRef.child(`${userUid}.jpg`);
       
        return ref.put(file).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
        });
    }

    static async fetchDetails() {
        var currentUser = firebase.auth().currentUser;
        if (!currentUser) {
            return;
        }
        let local = window.localStorage.getItem('details');
        if(!local) {
            let userUid = currentUser.uid;
            var docRef = db.collection('users').doc(userUid);
            return docRef.get().then(function(doc) {
                if (doc.exists) {
                    window.localStorage.setItem('details', JSON.stringify(doc.data()));
                    return doc.data();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }
        else {
            return Promise.resolve(local);
        }
        
    }

    static async fetchPhoto() {
        var currentUser = firebase.auth().currentUser;
        if (!currentUser) {
            return;
        }
        let local = window.localStorage.getItem('photo');
        if(!local) {
            let userUid = currentUser.uid;
            let storageRef = firebase.storage().ref();
            let imageRef = storageRef.child(`${userUid}.jpg`);
            return imageRef.getDownloadURL().then((url) => {
                window.localStorage.setItem('photo', url);
                return url;
            });
        }else {
            return Promise.resolve(local);
        }
    }
}
const handleSignIn = () => {
    var user = firebase.auth().currentUser;
    window.localStorage.setItem('uid', user.uid);
    history.push('/');
}

const handleSignUp = (data) => {
    console.log(data);
    // redirect to profile page
}


export default Service;