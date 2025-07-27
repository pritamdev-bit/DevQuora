import { Permission } from "node-appwrite";
import {databases} from "./config"
import { db, answerCollection } from "../name";

export default async function createAnswerCollection(){
    //create collection
    await databases.createCollection(db, answerCollection, answerCollection, [
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users")
    ])

    console.log("Answer Collection is created")

    await Promise.all([
        databases.createStringAttribute(db, answerCollection, "content", 10000, true),
        databases.createStringAttribute(db, answerCollection, "questionId", 50, true),
        databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
    ])

    console.log("Answer Attributes created")

}