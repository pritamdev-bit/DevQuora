import React from "react";
import { databases } from "@/models/server/config";
import { db, questionAttachmentBucket, questionCollection } from "@/models/name";
import { Query } from "node-appwrite";
import { storage } from "@/models/client/config";
import slugify from "../../../utils/slugify";
import HeroSectionHeader from "./HeroSectionHeader";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default async function HeroSection() {
    const questions = await databases.listDocuments(db, questionCollection, [
        Query.orderDesc("$createdAt"),
        Query.limit(15),
    ]);

    return (
        <HeroParallax
            header={<HeroSectionHeader />}
            products={questions.documents.map(q => ({
                title: q.title,
                link: `/questions/${q.$id}/${slugify(q.title)}`,
                thumbnail: storage.getFileView(questionAttachmentBucket, q.attachmentId),
            }))}
        />
    );
}
