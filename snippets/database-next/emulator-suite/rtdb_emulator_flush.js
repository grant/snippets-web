// This snippet file was generated by processing the source file:
// ./database-next/emulator-suite.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_emulator_flush_modular]
import { getDatabase } from "firebase/database";

// With a database Reference, write null to clear the database.
const db = getDatabase(firebaseApp);
db.ref().set(null);
// [END rtdb_emulator_flush_modular]