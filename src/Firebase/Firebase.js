import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyA5UiiS5fTo0PWQ0p5puIouAXOglOG5QuA",
  authDomain: "adventure-blog-286e8.firebaseapp.com",
  databaseURL: "https://adventure-blog-286e8.firebaseio.com",
  projectId: "adventure-blog-286e8",
  storageBucket: "adventure-blog-286e8.appspot.com",
  messagingSenderId: "85388628958",
  appId: "1:85388628958:web:5e3594e7dce1af37f8434f",
  measurementId: "G-BVXWSBH7BQ"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
  storage, firebase as default 
}
  