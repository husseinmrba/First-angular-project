import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pro-star',
    templateUrl: './star-ratting.component.html',
    styleUrls: ['./star-ratting.component.css'],
})
export class StarRattingComponent implements OnChanges {
    cropWidth: number = 75;
    @Input() rating: number = 3;

    ngOnChanges(changes: SimpleChanges): void{
        this.cropWidth = this.rating * 75 / 5;
    }

    onClick(){
        console.log(`this ratting is equal to ${this.rating}`)
    }
}