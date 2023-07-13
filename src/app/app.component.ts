import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, filter, from, interval, map, of, range, take, tap, timer } from 'rxjs';

@Component({
  selector: 'pro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string = 'Pro App';


    constructor(private _translateService: TranslateService){

    }

    changeLang(lang: string){
      this._translateService.use(lang);
    }
    ngOnInit(): void {
      this._translateService.onLangChange.subscribe(lang =>
        console.log('current', lang));


      // let appleObservable$ = new Observable(subscriber => {
      //   setTimeout(() => {
      //     subscriber.next('First apple');
      //   }, 3000);
      //   subscriber.next('Second apple');
      //   subscriber.next('Third apple');
      //   // subscriber.complete();
      // });

      // appleObservable$.subscribe(
      //   apple => console.log(`I have received an ${apple}`)
      // );

      // interval(3000).subscribe(number => console.log(number));

      // of(10,20,5,30,40)
      // .pipe(
      //   // tap(item => console.log(`item = ${item}`)),
      //   map(item => item * 2),
      //   map(item => item - 10),
      //   map(item => {
      //     if (item === 0)
      //       throw new Error('we have reached zero');

      //     return item
      //   }),
      //   // tap(item => console.log(`2*item = ${item}`)),
      //   take(3)
      //   )
      // .subscribe({
      //   next: item => console.log(`Result ${item}`),
      //   error: msg => console.log({msg}),
      //   complete: () => console.log(`Completed`)
      // });

      // let numbers$ = range(1,5);
      // numbers$.pipe(
      //   map(x => x * 3),
      //   filter(x => x % 2 === 0)
      // ).subscribe({
      //   next: x => console.log(x),
      //   complete: () => console.log("counting is completed")
      // });

      // let trigger$ = timer(3000);
      // trigger$.subscribe(x => console.log(`triger is triggered`, x));

      // let trigger2$ = timer(3000,1000);
      // trigger2$.subscribe(x => console.log(`triger is triggered`, x));
      
      
      
    }
}
