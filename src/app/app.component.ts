import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sentence = lorem.sentence().slice(0, -1);
  input = '';
  onChange(e: string, value: HTMLElement) {
    this.input = e;
  }
  ngOnInit() {
    this.sentence = lorem.sentence().slice(0, -1);
  }
  getRandomWord() {
    this.sentence = lorem.sentence().slice(0, -1);
  }
  compare(letter: string, i: number) {
    if (!this.input[i]) return 'pending';
    return letter != this.input[i] ? 'error' : 'success';
  }
}
