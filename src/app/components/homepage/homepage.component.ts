import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { McquizService } from 'src/app/mcquiz.service';
import QuizCard from './QuizCard.json';

@Component({
  selector: 'homepage',
  templateUrl: 'homepage.template.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  protected quizCard = QuizCard;
  protected hideCards: boolean = true;
  constructor(private mcquizService: McquizService, private router: Router) {}

  ngOnInit() {
    this.mcquizService.showSpinner();
    setTimeout(() => {
      this.mcquizService.hideSpinner();
    }, 500);
  }

  navigateToQuiz(status: any, path: any) {
    if (status === 'Available') {
      this.hideCards = false;
      this.router.navigate([path]);
    } else {
      window.alert('Comming soon...');
    }
  }
}
