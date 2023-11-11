// db.js
import mongoose from "mongoose";

const connection = {}; // Pour éviter de multiples connexions

async function dbConnect() {
  // Vérifie si on est déjà connecté
  if (connection.isConnected) {
    return;
  }

  // Utilisez votre URI de connexion MongoDB
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
