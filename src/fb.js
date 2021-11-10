import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCVkm9--1c8ikMtD96OBz-ViKZl1rSyQUQ',
  authDomain: 'tode-test.firebaseapp.com',
  databaseURL: 'https://tode-test-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tode-test',
  storageBucket: 'tode-test.appspot.com',
  messagingSenderId: '756332087554',
  appId: '1:756332087554:web:1ada57462a97343a6dda1b'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.database()

export default db
