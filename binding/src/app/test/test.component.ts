import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Terminator";
  public siteUrl = window.location.href;
  public myID = "testID";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }
  calculation(){
    var a = 5;
    var b = 15;
    var c = a*b;
    return c;
  }
}
