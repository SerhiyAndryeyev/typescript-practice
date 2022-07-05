enum QuestionStatus {
    PUBLISHED = "published",
    DRAFT = "draft",
    DELETED = "deleted"
}
const req = {
    topicId: 5,
    status: QuestionStatus
}


async function getFaqs(req: {
    topicId: number,
    status: QuestionStatus
}): Promise<{
    question: string,
    answer: string,
    tags: [
        popular: string,
        new: string
    ],
    likes: number,
    status: QuestionStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}