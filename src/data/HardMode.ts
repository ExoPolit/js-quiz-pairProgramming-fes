interface HardMode {
  id: number;
  question: string;
  answer:string[];
  correctAnswerIndex: number;
  
}

const QuestionsAndAnswers: HardMode[] = [
  {
    id: 1,
    question: " How to find out if two strings are anagrams of each other?",
    answer:[
        "const anagrams = (strA, strB) => {return cleanString(strA) === cleanString(strB)} const cleanString = (str) => { return str.replaceAll(' ', '').toLowerCase().split('').sort().join('') };",
        "const anagrams = (strA, strB) => {return cleanString(strA) === cleanString(strB)} const cleanString = (str) => { return str.replaceAll(' ', '').toLowerCase().sort('').slipt().get('') };",
        "const anagrams = (strA, strB) => {return cleanString(strA) === cleanString(strB)} const cleanString = (str) => { return str.banana(' ' ', '').toBananaCase().split('').join().sort('') }; "
    ],
      correctAnswerIndex: 1,
  },
  {
    id: 2,
    question: " How can you find out if a string is a pladindrome?",
    answer:[
        "const palindrome = (str) => { const middle = Math.floor(str.length); for(let i = 0; i < middle;  ++i){const oppositeIndex = str.length -1 -i; if(str[i] !== str[oppositeIndex]) { return false}} return true}; ",
        "const palindrome = (str) => { const middle = Math.floor(str.length / 2); for(let i = 0; i > middle;  ++i){const oppositeIndex = str.length -1; if(str[i] == str[oppositeIndex]) { return false}}}; ",
        "const palindrome = (str) => { const middle = Math.floor(str.length / 2); for(let i = 0; i < middle;  ++i){const oppositeIndex = str.length -1 -i; if(str[i] !== str[oppositeIndex]) { return false}} return true}; "
    ],
      correctAnswerIndex: 3,
  },
  {
    id: 3,
    question: " How can you reverse a string?",
    answer:[
        "const reversString = (str) => { return str.split('').reduce((accumulator, currentValue) => currentValue + accumulator); }",
        "const reversString = (str) => {return str.split('').reverse().join(''); }; ",
        "const reversString = (str) => { return str.reverse() } "
    ],
      correctAnswerIndex: 1,
  },
  {
    id: 4,
    question: " How to reverse a ordering of numbers of a given integer?",
    answer:[
        "const reverseInteger = (int) => { const reversed = int.toString().split('').reverse().join(''); return parseInt(reversed * Math.sign(int)) } ",
        "const reverseInteger = (int) => { const reversed = int.split('').reverse().join(''); return parseInt(reversed * Math.sign(int)); } ",
        "Throuh Bananas against wall "
    ],
      correctAnswerIndex: 2,
  },
  {
    id: 5,
    question: " How can you find the maxChar of a string?",
    answer:[
        "const maxCharacter = (str) => {const charMap = new Map(); let max = 0; let maxChar = ''; for (const char of str) {charMap.set(char, charMap.get(char) +1 || 1)} for(const [char, count] of charMap) { if (count > max ){max = count; maxChar = char;}}}  return maxChar;  ",
        "const maxCharacter = (str) => {const charMap = new Map(); let max = 0; let maxChar = ''; for (let char of str) {charMap.set(char, charMap.get(char) +1)} for( [char, count] of charMap) { if (count > max ){max = count; maxChar = char;}}}  return maxChar;  ",
        "Eat more Bananas  "
    ],
      correctAnswerIndex: 1,
  },
  {
    id:6,
    question: " What is the Box-Model?",
    answer:[
        "A box that wraps around HTML elements including Margin, Border, Padding and Content.",
        "A box that wraps around Bananas to peel them.",
        "A box that wraps around HTML elements including  Border, Padding and Content.",
    ],
    correctAnswerIndex: 2
  },
  {
    id:7,
    question: " What is specificity?",
    answer:[
        "Specificity is a weight given to a style to determine if it should be applied or not.",
        "A box that wraps around Bananas to peel them.",
        "A box that wraps around HTML elements including  Border, Padding and Content.",
    ],
    correctAnswerIndex: 2
  },
  {
    id:8,
    question: " What is the diffrence between block, inline and inline-block?",
    answer:[
        "Block: Starts a new line + takes the whole width, Inline: Starts on the same line + cant set width and height, Inline-Block: Starts on the same line + width and height can be set",
        "A box that wraps around Bananas to peel them.",
        "A box that wraps around HTML elements including  Border, Padding and Content.",
    ],
    correctAnswerIndex: 2
  },
  {
    id:9,
    question: " What is the diffrence between “visibility: hidden” and “display: none?”",
    answer:[
        "Visibilty Hidden --> Element is hidden  but still in the DOM, Display None --> Element is revomed completly from the DOM",
        "A box that wraps around Bananas to peel them.",
        "A box that wraps around HTML elements including  Border, Padding and Content.",
    ],
    correctAnswerIndex: 2
  },
  {
    id:10,
    question: " What are Data Attributes",
    answer:[
        "Data attributes are used to store Data in HTML -> <h1 data=data_name>",
        "A box that wraps around Bananas to peel them.",
        "A box that wraps around HTML elements including  Border, Padding and Content.",
    ],
    correctAnswerIndex: 2
  },
 
  
];
