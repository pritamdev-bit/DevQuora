import { Permission } from "node-appwrite";
import { storage } from "./config";
import { questionAttachmentBucket } from "../name";

export default async function getOrCreateStorage(){
    try {
        await storage.getBucket(questionAttachmentBucket);
        console.log("Storage Connected");
    } catch (error) {
        try {
            await storage.createBucket(
                questionAttachmentBucket,
                questionAttachmentBucket,
                [
                    Permission.create("users"),
                    Permission.read("any"),
                    Permission.read("users"),
                    Permission.update("users"),
                    Permission.delete("users")
                ],
                false,
                undefined,
                undefined,
                ["jpg", "jpeg", "gif", "png", "webp", "heic"]
            );

            console.log("storage created");
            console.log("storage connected");
        } catch (error) {
            console.log("Error creating storage:", error);
        }
    }
}