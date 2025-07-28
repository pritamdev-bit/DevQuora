// import { db, questionCollection } from "@/models/name";
// import { databases } from "@/models/server/config";
// import React from "react";
// import EditQues from "./Editques";
// // import { PageProps } from "./types"; // or wherever you defined it

// // const EditQuestionPage = async ({ params }: { params: { quesId: string; quesName: string } }) => {
// //     const question = await databases.getDocument(db, questionCollection, params.quesId);

// //     return <EditQues question={question} />;
// // };


// interface PageProps {
//   params: {
//     quesId: string;
//     quesName: string;
//   };
// }

// const EditQuestionPage = async ({ params }: PageProps) => {
//   const question = await databases.getDocument(db, questionCollection, params.quesId);
//   return <EditQues question={question} />;
// };

// export default EditQuestionPage;

// app/questions/[quesId]/[quesName]/edit/page.tsx

import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./Editques";

const EditQuestionPage = async ({
  params,
}: {
  params: { quesId: string; quesName: string };
}) => {
  const question = await databases.getDocument(
    db,
    questionCollection,
    params.quesId
  );

  return <EditQues question={question} />;
};

export default EditQuestionPage;

