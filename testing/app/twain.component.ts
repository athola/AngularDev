import { Component, OnInit } from '@angular/core';

import { TwainService } from './twain.service';

@Component({
  moduleId: module.id,
  selector: 'twain-quote',
  templateUrl: './twain.component.html'
})
export class TwainComponent implements OnInit {
  intervalId: number;
  quote = "...";
  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.quote = this.twainService.getQuote();
    console.log(this.quote);
  }
}
