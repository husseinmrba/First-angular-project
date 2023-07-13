import { Component } from "@angular/core";
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { delay } from "rxjs";


export function getProgressbarConfig(): ProgressbarConfig {
    return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150});
}
@Component({
    selector: 'pro-home',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
  })
  export class WelcomeComponent {
      title: string = 'Welcome to home page';
      value: number = 10;
      animate(): void {
        for (let index = 10; index < 150; index++) {
            this.value+=1;
        }
        
      }

  }