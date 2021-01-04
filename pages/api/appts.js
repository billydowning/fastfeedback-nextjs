// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "@/lib/firebase-admin";

export default async (_, res) => {
  const snapshot = await db.collection("appts").get();
  const appts = [];

  snapshot.forEach((doc) => {
    appts.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(appts);
};
