
const findLongestWordWithMostVowels = (sentence)=> {
    const words = sentence.split(' ');
    let longestWord = '';
    let longestWordVowelCount = 0;
  
    for (const word of words) {
      let wordLength = 0;
      let vowelCount = 0;
  
      for (const char of word) {
        if (/^[a-zA-Z]$/.test(char)) {
          wordLength++;
          if ('aeiouAEIOU'.includes(char)) {
            vowelCount++;
          }
        }
      }
  
      if (wordLength > longestWord.length ||
          (wordLength === longestWord.length && vowelCount > longestWordVowelCount)) {
        longestWord = word;
        longestWordVowelCount = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  const inputSentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
  const longest = findLongestWordWithMostVowels(inputSentence);
  console.log(longest);
  
