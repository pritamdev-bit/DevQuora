import { Permission } from "node-appwrite";
import {databases} from "./config"
import { db, voteCollection } from "../name";

export default async function createVoteCollection(){
    //create collection
    await databases.createCollection(db, voteCollection, voteCollection, [
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users")
    ])

    console.log("Vote Collection is created")

    //create attribution
    await Promise.all([
        databases.createEnumAttribute(db, voteCollection, "type", ["question", "answer"], true),
        databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
        databases.createEnumAttribute(
            db, 
            voteCollection, 
            "voteStatus",
            ["upvoted", "downvoted"],
             true
        ),
        databases.createStringAttribute(db, voteCollection, "votedById", 50, true),
    ])

    console.log("Vote Attributes created")

}