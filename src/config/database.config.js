import bcrypt from "bcryptjs";
import { connect, set } from "mongoose";
import { sample_foods, sample_users } from "../data.js";
import { FoodModel } from '../models/food.model.js';
import { UserModel } from "../models/user.model.js";
const PASSWORD_HASH_SALT_ROUNDS = 10;
set("strictQuery", true); 

export const dbconnect = async () => {
    try {
        await connect(process.env.MONGO_URI);
        await seedUsers();
        await seedFoods();
        console.log("Connected successfully---");
    } catch (error) {
        console.log("Connection error: ", error);
    }
};

async function seedUsers() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
        console.log("Users seed is already done!");
        return;
    }

    for (let user of sample_users) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }
    
    console.log("Users seed is done!");
}

async function seedFoods() {
    const foods = await FoodModel.countDocuments();
    if (foods > 0) {
        console.log('Foods seed is already done!');
        return;
    }
    
    for (const food of sample_foods) {
        food.imageUrl = `/foods/${food.imageUrl}`;
        await FoodModel.create(food);
    }
    
    console.log('Foods seed Is Done!');
}