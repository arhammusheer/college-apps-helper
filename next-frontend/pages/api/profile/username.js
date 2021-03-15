import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../services/mongodb";

export default async (req, res) => {
  const session = await getSession({ req });
  if (req.method === "POST") {
    if (session) {
      console.log(JSON.parse(req.body));
      await updateUsernameInDB(
        session.user.email,
        JSON.parse(req.body).username
      );
      return res.status(200).json({ message: "success" });
    }
  }
  return res.status(403).json({ message: "not allowed" });
};

async function updateUsernameInDB(email, newUsername) {
  const { db } = await connectToDatabase();
  const query = { email: email };
  const update = {
    $set: {
      name: newUsername,
    },
  };
  const options = { returnNewDocument: false };
  return db
    .collection("users")
    .findOneAndUpdate(query, update, options)
    .then((updatedDocument) => {
      if (updatedDocument) {
        console.log(`Successfully updated document: ${updatedDocument}.`);
      } else {
        console.log("No document matches the provided query.");
      }
      return updatedDocument;
    })
    .catch((err) =>
      console.error(`Failed to find and update document: ${err}`)
    );
}
