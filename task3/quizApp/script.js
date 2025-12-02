const ques = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'Java',
        'c': 'Js',
        'd': 'Php',
        'correct' : 'a'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Computer Style Sheet',
        'b': 'Cascading Style Sheets',
        'c': 'Creative Style System',
        'd': 'Colorful Style Sheets',
        'correct': 'b'
    },
    {
        'que': 'JavaScript is a ___ language.',
        'a': 'Programming',
        'b': 'Markup',
        'c': 'Database',
        'd': 'Styling',
        'correct': 'a'
    },
    {
        'que': 'Which HTML tag is used to link a CSS file?',
        'a': '<script>',
        'b': '<style>',
        'c': '<link>',
        'd': '<css>',
        'correct': 'c'
    },
    {
        'que': 'Which company developed JavaScript?',
        'a': 'Google',
        'b': 'Netscape',
        'c': 'Microsoft',
        'd': 'Amazon',
        'correct': 'b'
    },
    {
        'que': 'Inside which HTML element do we put JavaScript?',
        'a': '<js>',
        'b': '<javascript>',
        'c': '<script>',
        'd': '<code>',
        'correct': 'c'
    },
    {
        'que': 'Which of the following is used to style HTML pages?',
        'a': 'Python',
        'b': 'CSS',
        'c': 'C++',
        'd': 'SQL',
        'correct': 'b'
    },
    {
        'que': 'Which HTML tag is used to create a hyperlink?',
        'a': '<link>',
        'b': '<href>',
        'c': '<a>',
        'd': '<hlink>',
        'correct': 'c'
    },
    {
        'que': 'Which method is used to print output in the console in JavaScript?',
        'a': 'print()',
        'b': 'console.log()',
        'c': 'log.console()',
        'd': 'write()',
        'correct': 'b'
    },
    {
        'que': 'Which attribute is used to provide an alternate text for an image?',
        'a': 'title',
        'b': 'src',
        'c': 'alt',
        'd': 'text',
        'correct': 'c'
    }
];

let right = 0, wrong = 0;
let total = ques.length;
let idx = 0;
const queBox = document.getElementById('queBox');
const optionInput = document.querySelectorAll('.options');
let btn = document.querySelector('.btn')

const loadQuestion = () => {
    if (idx === total) {
       return endQuiz();
    }
    reset()
    const data = ques[idx];
    queBox.innerText = `${idx + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
};

btn.addEventListener('click', () => {
    submitQuiz()
})

const getAnswer = () => {
    let ans;
    optionInput.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    })
    return ans;
}

const submitQuiz = () => {
    const data = ques[idx];
    const ans = getAnswer();

    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    idx++;
    loadQuestion();
}


const reset = () => {
    optionInput.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {

    document.querySelector('.box').innerHTML = `
        <div class="resultBox">
            <h3>🎉 Submitted Successfully 🎉</h3>
            <h2>You Scored <span>${right}</span> out of ${total}</h2>
        </div>
    `
}


loadQuestion();

