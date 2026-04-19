import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  {
    email: "john.doe@example.com",
    fullName: "John Doe",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "arjun.sharma@example.com",
    fullName: "Arjun Sharma",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "ishaan.verma@example.com",
    fullName: "Ishaan Verma",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "vihaan.patel@example.com",
    fullName: "Vihaan Patel",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "bob.johnson@example.com",
    fullName: "Bob Johnson",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "frank.miller@example.com",
    fullName: "Frank Miller",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    const salt = await bcrypt.genSalt(10);
    const hashedSeedUsers = await Promise.all(
      seedUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, salt),
      }))
    );

    await User.deleteMany({});
    await User.insertMany(hashedSeedUsers);

    console.log("Database seeded successfully with male example users only");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();