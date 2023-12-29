/*Cho văn bản T và 2 mẫu P1, P2 đều là các xâu ký tự (không chứa ký tự xuống dòng, độ dài không vượt quá 1000). Hãy thay thế các xâu P1 trong T bằng xâu P2.*/

function replaceWords(text, p1, p2) {
    text = text.trim();
    let words = text.split(/\s+/);
    let newWords = words.map(word => word === p1 ? p2 : word);
    let newText = newWords.join(" ");
    return newText;
}
  

let p1 = "AI";
let p2 = "Artificial Intelligence";
let text = "Recently, AI is a key technology. AI enable efficient operations in many fields.";
console.log(replaceWords(text, p1, p2)); 