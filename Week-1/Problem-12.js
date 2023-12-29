/*Given a Text, write a prorgam to count the number Q of words (ignore characters SPACE, TAB, LineBreak) of this Text*/

function solution(text) {
    text = text.trim();
    let words = text.split(/\s+/);
    return words.length;
  }
  
  let text = "Hanoi University Of Science and Technology\nSchool of Information and Communication Technology";
  console.log(solution(text));