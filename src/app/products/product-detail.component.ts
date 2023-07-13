import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './iproduct';

@Component({
  // selector: 'pro-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = 'Product Detail: ';
  productDetail: IProduct | undefined;

  constructor(
              private _route: ActivatedRoute,
              private _router: Router) { 
    console.log(_route);
    console.log(_route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  //  this.title += this._route.snapshot.paramMap.get('id');

   this.productDetail = {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "CDN-0011",
    "productDate": "March 19, 2021",
    "description": "Leaf rake with 48-inch wooden handle.",
    "productPrice": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png",
    "categoryId": 1

    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
