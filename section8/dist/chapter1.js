/**
 * 인덱스드 엑세스 타입
 */
function printAuthorInfo(author) {
    console.log(`${author.name}-${author.id}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이아무개",
        age: 27,
    },
};
function printAuthorInfo2(author) {
    console.log(`${author.name}-${author.id}`);
}
const postList = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이아무개",
        age: 27,
    },
};
printAuthorInfo2(postList.author);
export {};
