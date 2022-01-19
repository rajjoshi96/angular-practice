import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
          <h1>Trying it using inline template</h1>
          <h2>Welcome !! {{name}}</h2>
          <p> The calculation of 2+2 is {{2+2}}</p>
          <p>Length of my name is {{name.length}} and the upper case is {{name.toUpperCase()}}</p>
          <h2>Look at this amazing site {{"link " + siteUrl}}</h2>
          `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Terminator";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

}
