/* =========================================
   SubnetX - Networking Practice
========================================= */

/* =========================================
   Question Bank
========================================= */

const practiceQuestions = {

    beginner: [

        {
            question: "How many bits are in an IPv4 address?",
            options: [
                "16 bits",
                "32 bits",
                "48 bits",
                "64 bits"
            ],
            answer: 1,
            topic: "IPv4"
        },

        {
            question: "Which address is a private IPv4 address?",
            options: [
                "8.8.8.8",
                "172.20.10.5",
                "1.1.1.1",
                "203.0.113.10"
            ],
            answer: 1,
            topic: "IPv4"
        },

        {
            question: "What is the subnet mask for /24?",
            options: [
                "255.0.0.0",
                "255.255.0.0",
                "255.255.255.0",
                "255.255.255.128"
            ],
            answer: 2,
            topic: "Subnetting"
        },

        {
            question: "Which protocol is commonly used for secure remote login?",
            options: [
                "FTP",
                "HTTP",
                "SSH",
                "SMTP"
            ],
            answer: 2,
            topic: "Protocols"
        },

        {
            question: "Which port is commonly used by HTTP?",
            options: [
                "21",
                "22",
                "80",
                "443"
            ],
            answer: 2,
            topic: "Ports"
        },

        {
            question: "Which protocol translates domain names into IP addresses?",
            options: [
                "DHCP",
                "DNS",
                "FTP",
                "SSH"
            ],
            answer: 1,
            topic: "Protocols"
        },

        {
            question: "How many usable hosts are available in a /24 network?",
            options: [
                "254",
                "256",
                "128",
                "62"
            ],
            answer: 0,
            topic: "Subnetting"
        },

        {
            question: "Which device normally connects different networks?",
            options: [
                "Switch",
                "Router",
                "Hub",
                "Repeater"
            ],
            answer: 1,
            topic: "Networking"
        },

        {
            question: "Which protocol is connection-oriented?",
            options: [
                "UDP",
                "IP",
                "TCP",
                "ARP"
            ],
            answer: 2,
            topic: "Protocols"
        },

        {
            question: "What does MAC stand for?",
            options: [
                "Media Access Control",
                "Machine Access Code",
                "Network Access Control",
                "Media Address Connection"
            ],
            answer: 0,
            topic: "MAC"
        }

    ],

    intermediate: [

        {
            question: "What is the broadcast address of 192.168.1.0/26?",
            options: [
                "192.168.1.31",
                "192.168.1.63",
                "192.168.1.127",
                "192.168.1.255"
            ],
            answer: 1,
            topic: "Subnetting"
        },

        {
            question: "How many subnets are created when /24 is divided into /26?",
            options: [
                "2",
                "4",
                "8",
                "16"
            ],
            answer: 1,
            topic: "Subnetting"
        },

        {
            question: "How many usable hosts are available in a /26 subnet?",
            options: [
                "62",
                "64",
                "30",
                "126"
            ],
            answer: 0,
            topic: "Subnetting"
        },

        {
            question: "Which port is commonly associated with HTTPS?",
            options: [
                "80",
                "110",
                "443",
                "8080"
            ],
            answer: 2,
            topic: "Ports"
        },

        {
            question: "Which protocol automatically assigns IP addresses to clients?",
            options: [
                "DNS",
                "DHCP",
                "ARP",
                "ICMP"
            ],
            answer: 1,
            topic: "Protocols"
        },

        {
            question: "What is the network address of 192.168.10.75/26?",
            options: [
                "192.168.10.0",
                "192.168.10.64",
                "192.168.10.75",
                "192.168.10.128"
            ],
            answer: 1,
            topic: "Subnetting"
        },

        {
            question: "Which protocol is primarily used to retrieve email from a server?",
            options: [
                "SMTP",
                "POP3",
                "HTTP",
                "DNS"
            ],
            answer: 1,
            topic: "Protocols"
        },

        {
            question: "What is the default port commonly used by PostgreSQL?",
            options: [
                "3306",
                "5432",
                "27017",
                "1521"
            ],
            answer: 1,
            topic: "Ports"
        },

        {
            question: "Which address range belongs to the 10.0.0.0/8 private network?",
            options: [
                "10.0.0.0 - 10.255.255.255",
                "172.0.0.0 - 172.255.255.255",
                "192.0.0.0 - 192.255.255.255",
                "127.0.0.0 - 127.255.255.255"
            ],
            answer: 0,
            topic: "IPv4"
        },

        {
            question: "Which protocol is normally used to test network reachability?",
            options: [
                "ICMP",
                "FTP",
                "SMTP",
                "SNMP"
            ],
            answer: 0,
            topic: "Protocols"
        }

    ],

    advanced: [

        {
            question: "How many /28 subnets can be created from a /24 network?",
            options: [
                "4",
                "8",
                "16",
                "32"
            ],
            answer: 2,
            topic: "Subnetting"
        },

        {
            question: "What is the first usable host in 10.10.10.128/27?",
            options: [
                "10.10.10.128",
                "10.10.10.129",
                "10.10.10.130",
                "10.10.10.159"
            ],
            answer: 1,
            topic: "Subnetting"
        },

        {
            question: "What is the broadcast address of 172.16.5.128/27?",
            options: [
                "172.16.5.143",
                "172.16.5.159",
                "172.16.5.191",
                "172.16.5.255"
            ],
            answer: 1,
            topic: "Subnetting"
        },

        {
            question: "How many usable hosts exist in a /30 subnet?",
            options: [
                "2",
                "4",
                "6",
                "14"
            ],
            answer: 0,
            topic: "Subnetting"
        },

        {
            question: "Which subnet mask corresponds to /20?",
            options: [
                "255.255.0.0",
                "255.255.240.0",
                "255.255.248.0",
                "255.255.255.0"
            ],
            answer: 1,
            topic: "Subnetting"
        },

        {
            question: "Which port is commonly used by SSH?",
            options: [
                "20",
                "21",
                "22",
                "23"
            ],
            answer: 2,
            topic: "Ports"
        },

        {
            question: "Which protocol maps an IPv4 address to a MAC address on a local network?",
            options: [
                "DNS",
                "ARP",
                "DHCP",
                "ICMP"
            ],
            answer: 1,
            topic: "Protocols"
        },

        {
            question: "What is the total number of addresses in a /29 subnet?",
            options: [
                "4",
                "6",
                "8",
                "16"
            ],
            answer: 2,
            topic: "Subnetting"
        },

        {
            question: "Which IPv4 range is reserved for loopback?",
            options: [
                "10.0.0.0/8",
                "127.0.0.0/8",
                "169.254.0.0/16",
                "192.168.0.0/16"
            ],
            answer: 1,
            topic: "IPv4"
        },

        {
            question: "How many bits are borrowed when converting /24 to /28?",
            options: [
                "2",
                "3",
                "4",
                "8"
            ],
            answer: 2,
            topic: "Subnetting"
        }

    ]

};


/* =========================================
   Quiz State
========================================= */

let currentDifficulty = "beginner";
let currentQuestions = [];
let currentQuestionIndex = 0;

let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

let answered = false;


/* =========================================
   DOM Elements
========================================= */

const questionText =
    document.getElementById("questionText");

const answerList =
    document.getElementById("quizOptions");

const answerFeedback =
    document.getElementById("quizFeedback");

const nextQuestion =
    document.getElementById("nextQuestion");

const practiceScore =
    document.getElementById("quizScore");

const questionNumber =
    document.getElementById("questionNumber");

const totalQuestions =
    document.getElementById("totalQuestions");

const questionProgress =
    document.getElementById("questionProgress");

const quizStatus =
    document.getElementById("quizStatus");

const quizAccuracy =
    document.getElementById("quizAccuracy");

const restartQuiz =
    document.getElementById("restartQuiz");


const correctCount =
    document.getElementById("correctAnswers");

const incorrectCount =
    document.getElementById("incorrectAnswers");


/* =========================================
   Shuffle Questions
========================================= */

function shuffleQuestions(questions) {

    return [...questions].sort(
        () => Math.random() - 0.5
    );

}


/* =========================================
   Update Statistics
========================================= */

function updateStatistics() {

    const totalAnswered =
        correctAnswers + incorrectAnswers;

    const accuracy =
        totalAnswered === 0
            ? 0
            : Math.round(
                (correctAnswers / totalAnswered) * 100
            );


    if (practiceScore) {
        practiceScore.textContent = score;
    }


    if (correctCount) {
        correctCount.textContent = correctAnswers;
    }


    if (incorrectCount) {
        incorrectCount.textContent = incorrectAnswers;
    }


    if (totalQuestions) {
        totalQuestions.textContent =
            currentQuestions.length;
    }


    if (quizAccuracy) {
        quizAccuracy.textContent =
            `${accuracy}%`;
    }

}


/* =========================================
   Start Quiz
========================================= */

function startQuiz() {

    currentQuestions =
        shuffleQuestions(
            practiceQuestions[currentDifficulty]
        );

    currentQuestionIndex = 0;

    score = 0;

    correctAnswers = 0;

    incorrectAnswers = 0;

    answered = false;


    if (quizStatus) {
        quizStatus.textContent = "In Progress";
    }


    updateStatistics();

    loadQuestion();

}


/* =========================================
   Load Question
========================================= */

function loadQuestion() {

    const question =
        currentQuestions[currentQuestionIndex];


    if (!question) {

        finishQuiz();

        return;

    }


    answered = false;


    /* Question */

    questionText.textContent =
        question.question;


    questionNumber.textContent =
        currentQuestionIndex + 1;


    /* Progress */

    if (questionProgress) {

        questionProgress.textContent =
            `${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    }


    /* Feedback */

    answerFeedback.textContent = "";

    answerFeedback.className =
        "quiz-feedback";


    /* Next button */

    nextQuestion.disabled = true;


    /* Existing HTML buttons */

    const buttons =
        answerList.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        (button, index) => {

            button.disabled = false;

            button.classList.remove(
                "correct",
                "incorrect",
                "selected"
            );


            button.dataset.answer =
                index;


            const answerText =
                button.querySelector(
                    "span:not(.option-letter)"
                );


            if (answerText) {

                answerText.textContent =
                    question.options[index];

            }

        }
    );


    updateStatistics();

}


/* =========================================
   Select Answer
========================================= */

function selectAnswer(selectedIndex) {

    if (answered) {
        return;
    }


    answered = true;


    const question =
        currentQuestions[currentQuestionIndex];


    const buttons =
        answerList.querySelectorAll(
            ".quiz-option"
        );


    /* Disable all options */

    buttons.forEach(
        (button, index) => {

            button.disabled = true;


            if (
                index === question.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index === selectedIndex &&
                selectedIndex !== question.answer
            ) {

                button.classList.add(
                    "incorrect"
                );

            }

        }
    );


    /* Correct */

    if (
        selectedIndex === question.answer
    ) {

        score++;

        correctAnswers++;


        answerFeedback.textContent =
            "✓ Correct! Great job.";


        answerFeedback.classList.add(
            "correct-feedback"
        );

    }


    /* Incorrect */

    else {

        incorrectAnswers++;


        answerFeedback.textContent =
            `✕ Incorrect. Correct answer: ${question.options[question.answer]}`;


        answerFeedback.classList.add(
            "incorrect-feedback"
        );

    }


    updateStatistics();


    nextQuestion.disabled = false;

}


/* =========================================
   Attach Option Events
========================================= */

if (answerList) {

    answerList
        .querySelectorAll(".quiz-option")
        .forEach(
            (button, index) => {

                button.addEventListener(
                    "click",
                    () => {

                        selectAnswer(index);

                    }
                );

            }
        );

}


/* =========================================
   Next Question
========================================= */

if (nextQuestion) {

    nextQuestion.addEventListener(
        "click",
        () => {

            if (!answered) {
                return;
            }


            currentQuestionIndex++;


            if (
                currentQuestionIndex >=
                currentQuestions.length
            ) {

                finishQuiz();

                return;

            }


            loadQuestion();

        }
    );

}


/* =========================================
   Finish Quiz
========================================= */

function finishQuiz() {

    if (quizStatus) {

        quizStatus.textContent =
            "Completed";

    }


    if (answerFeedback) {

        answerFeedback.textContent =
            "Quiz completed! Click Restart to try again.";

    }


    if (nextQuestion) {

        nextQuestion.disabled = true;

    }


    const accuracy =
        currentQuestions.length === 0
            ? 0
            : Math.round(
                (score / currentQuestions.length) * 100
            );


    if (quizAccuracy) {

        quizAccuracy.textContent =
            `${accuracy}%`;

    }


    updateStatistics();

}


/* =========================================
   Restart Quiz
========================================= */

if (restartQuiz) {

    restartQuiz.addEventListener(
        "click",
        startQuiz
    );

}


/* =========================================
   Initialize
========================================= */

startQuiz();
