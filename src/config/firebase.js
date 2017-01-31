import Firebase from 'firebase';

const config = {
  apiKey: `AIzaSyAJw1H5jYNxVb8LWUH-GcJNGTww1kTNG4c`,
  authDomain: `talesathome.firebaseapp.com`,
  databaseURL: `https://talesathome.firebaseio.com`,
  storageBucket: `talesathome.appspot.com`,
  messagingSenderId: `757683037555`,
};

Firebase.initializeApp(config);

const Database = Firebase.database();
const Auth = Firebase.auth();
const Storage = Firebase.storage();

export { Auth, Database, Storage };
