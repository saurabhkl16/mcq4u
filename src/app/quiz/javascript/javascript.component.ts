import { Component } from '@angular/core';
import JavascriptQuestions from './JavascriptQuestions.json';

@Component({
  selector: 'javascript',
  templateUrl: './javascript.template.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
  public showCorrectAnsDiv: boolean = false;
  public showWrongAnsDiv: boolean = false;
  public selectedValue: any;
  public showAnswerBtn: string = 'Show Answer';

  protected jsQuestions = JavascriptQuestions;

  getSelectedVal(event: any) {
    this.selectedValue = event;
  }

  showAnswer(ans: any) {
    if (this.selectedValue === ans) {
      this.showWrongAnsDiv = false;
      this.showCorrectAnsDiv = true;
    } else {
      this.showCorrectAnsDiv = false;
      this.showWrongAnsDiv = true;
    }
    if (this.showAnswerBtn === 'Show Answer') {
      this.showAnswerBtn = 'Hide';
    } else {
      this.showAnswerBtn = 'Show Answer';
      this.showWrongAnsDiv = false;
      this.showCorrectAnsDiv = false;
    }
  }
}
