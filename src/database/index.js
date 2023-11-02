import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = process.env.DATABASE_URL
   ;

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Base de données de commerce électronique connectée avec succès !"))
    .catch((err) =>
      console.log(`Obtention d’une erreur de connexion à la base de données ${err.message}`)
    );
};

export default connectToDB;
