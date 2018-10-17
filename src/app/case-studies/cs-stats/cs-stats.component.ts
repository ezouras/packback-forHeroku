import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-stats',
  templateUrl: './cs-stats.component.html',
  styleUrls: ['./cs-stats.component.css']
})
export class CsStatsComponent implements OnInit {
  questionsAsked=2000;
  responsesShared=5700;
  studentsJoined=400;
  postsFeatured=30;
  questions="85%";

  constructor() { }

  ngOnInit() {
  }

}
