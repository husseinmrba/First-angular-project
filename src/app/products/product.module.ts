import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productProducer } from './state/product.reducer';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductListComponent},
      { path: ':id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      }
    ]),
    SharedModule,
    StoreModule.forFeature('products', productProducer),
  ]
})
export class ProductModule { }
