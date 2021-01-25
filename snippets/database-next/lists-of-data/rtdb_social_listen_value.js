// This snippet file was generated by processing the source file:
// ./database-next/lists-of-data.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_social_listen_value_modular]
import { getDatabase } from "firebase/database";

const db = getDatabase(firebaseApp);
const ref = db.ref('/a/b/c');

ref.once('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    // ...
  });
});
// [END rtdb_social_listen_value_modular]