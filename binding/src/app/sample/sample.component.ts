import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  public course_name = "Angular";
  public successClass = "text-success";
  public hasError = true;
  public Highlight_color="crimson";
  public greeting="";
  public titleStyles={
    color:"blue",
    fontStyle:"strong",
  }
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("Learning Angular..😪");
    this.greeting="Whoopee";
  }

  on_log(value: any){
    console.log(value);
  }
}
