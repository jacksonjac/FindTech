import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Servies/Toster/toast-service.service';

@Component({
  selector: 'app-tech-quizpage',
  templateUrl: './tech-quizpage.component.html',
  styleUrls: ['./tech-quizpage.component.scss']
})

export class TechQuizpageComponent implements OnInit {
  database: any[] = [
    {
      questionText: "What is the purpose of a smartphone's IMEI number?",
      options: [
        { optionText: "To identify the device on a mobile network", isCorrect: true },
        { optionText: "To store user data", isCorrect: false },
        { optionText: "To connect to Wi-Fi networks", isCorrect: false }
      ]
    },
    {
      questionText: "Which tool is used to open the back cover of a smartphone?",
      options: [
        { optionText: "Screwdriver", isCorrect: true },
        { optionText: "Pliers", isCorrect: false },
        { optionText: "Hammer", isCorrect: false }
      ]
    },
    {
      questionText: "What is the function of a smartphone's battery?",
      options: [
        { optionText: "To provide power to the device", isCorrect: true },
        { optionText: "To store applications", isCorrect: false },
        { optionText: "To connect to cellular networks", isCorrect: false }
      ]
    },
    {
      questionText: "Which component allows a smartphone to connect to Wi-Fi networks?",
      options: [
        { optionText: "Wi-Fi module", isCorrect: true },
        { optionText: "Battery", isCorrect: false },
        { optionText: "Camera", isCorrect: false }
      ]
    },
    {
      questionText: "What is the primary function of a smartphone's operating system?",
      options: [
        { optionText: "To manage hardware and software resources", isCorrect: true },
        { optionText: "To take photos", isCorrect: false },
        { optionText: "To charge the battery", isCorrect: false }
      ]
    }
  ];

  questionsToShow: any[] = []; // Array to hold randomly selected questions
  currentQuestionIndex: number = 0;
  currentQuestion: any;
  timer: any;
  timeLeft: number = 10;  // 10 seconds for each question
  correctAnswersCount: number = 0;

  constructor(private toaster: ToastService, private router: Router) {}

  ngOnInit(): void {
    this.shuffleDatabase();
    this.currentQuestion = this.questionsToShow[this.currentQuestionIndex];
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  shuffleDatabase() {
    let shuffled = this.database.sort(() => Math.random() - 0.5);
    this.questionsToShow = shuffled.slice(0, 3);
  }

  startTimer() {
    this.timeLeft = 10;
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.onNextClick();
      }
    }, 1000);
  }

  onNextClick() {
    clearInterval(this.timer);
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questionsToShow.length) {
      this.currentQuestion = this.questionsToShow[this.currentQuestionIndex];
      this.startTimer();
    } else {
      console.log('End of quiz');
      console.log('Correct Answers Count:', this.correctAnswersCount);

      // Check if all answers are correct
      if (this.correctAnswersCount === this.questionsToShow.length) {
        this.toaster.CorrectAnswer('Congratulations!', 'You passed the quiz.');
        // Navigate to '/technician/signup'
        this.router.navigate(['/technician/signup']);
      } else {
        this.toaster.Info('Sorry!', 'Better luck next time. You failed the quiz.');
        // Navigate to '/technician/login'
        this.router.navigate(['/technician/login']);
      }
    }
  }

  onOptionSelected(option: any) {
    clearInterval(this.timer);
    if (option.isCorrect) {
      this.correctAnswersCount++;
      this.toaster.CorrectAnswer('Correct', 'You selected the correct answer.');
    } else {
      this.toaster.Wronganswer('Wrong', 'You selected the wrong answer.');
    }

    // Proceed to the next question after a short delay to show the toast
    setTimeout(() => {
      this.onNextClick();
    }, 2000);  // 2 seconds delay
  }
}