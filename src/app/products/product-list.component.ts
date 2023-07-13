import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './services/product.service';
import { EMPTY, Observable, Subscription, catchError, combineLatestWith, map, of } from 'rxjs';
import { ProductCategoryService } from './services/product-category.service';
import { IProductCategory } from './iproduct-category';
import { Store } from '@ngrx/store';

@Component({
  selector: 'pro-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit,OnDestroy {

    sub!: Subscription;
    errorMessage: any;

    constructor(
                private _productService: ProductService,
                private _categoryService: ProductCategoryService,
                private _store: Store<any>) {
                    
        console.log('product-list constructor has been called')
    }
    
    pageTitle: string = 'Product list';

    imageWidth: number = 40;
    imageHeight: number = 40;
    imageMargin: number = 2;

    displayImage: boolean = true;
    displayCode!: boolean;

    products$: Observable<IProduct[]> | undefined;
    categories$: Observable<IProductCategory[]> | undefined;
    productsWithCategories$: Observable<IProduct[]> | undefined;

    filteredProducts : IProduct[] = [];

    private _listFilter : string = '';

    public get listFilter() : string {
        return this._listFilter;
    }
    public set listFilter(v : string){
        this._listFilter = v;
        // this.filteredProducts = this.doFilter(v);
    }

    // doFilter(filterBy : string) : IProduct[] {

    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.products.filter((product: IProduct) =>
    //                 product.productName.toLocaleLowerCase()
    //                                    .includes(filterBy));
    // }

    ngOnDestroy(): void {
        // this.sub.unsubscribe();
    }
    ngOnInit(): void {
        console.log('product-list component has been initialized.');

        // this.sub = this._productService.getProducts().subscribe({
        //     next: products => {
        //         this.products = products
        //         this.filteredProducts = this.products;
        //     }
        // });

        this.products$ = this._productService.getProducts().pipe(
            catchError(err => {
                this.errorMessage = err;
                return EMPTY; // empty observable
            })
        );

        // this.categories$ = this._categoryService.productCategories$.pipe(
        //     catchError( err => {
        //         this.errorMessage = err;
        //         return of([]); // empty observable
        //     })
        // )

        this.productsWithCategories$ = this._categoryService.productCategories$.pipe(
            combineLatestWith(this.products$),
            map(([categories, products]) => products.map(product => ({
                ...product,
                categoryName: categories.find(c => c.id === product.categoryId)?.name
            } as IProduct)))
        );


        //state management
        this._store.select('products').subscribe(productsState => {
            this.displayCode = productsState?.showProductCode;
        })
    }
    toggleImage(): void {
        this.displayImage = !this.displayImage;
        console.log('toggle button has been clicked!')
    }
    toggleProductCode(): void {
        this._store.dispatch({
            type: '[Product] Toggle product code'
        })
    }
}
