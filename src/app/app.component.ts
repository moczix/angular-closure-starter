import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'dupadupa';


  public ngOnInit(): void {
    const td = new Costam();
    td.test();
  }

}


export class Costam {

  public test(): string {
    return 'tarara';
  }

  public test2(): string {
    return 'rara';
  }
}