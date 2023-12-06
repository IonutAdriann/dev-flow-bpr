import mongoose from "mongoose";

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("MISSING MONGODB_URL");
    return;
  }

  // Mongoose connection states: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  const isConnected = mongoose.connection.readyState === 1;

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });

    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};
