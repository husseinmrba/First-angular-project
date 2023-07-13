import { Injectable } from "@angular/core";
import { IProduct } from "../iproduct";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    constructor(private _http : HttpClient){
    }
    private _productsUrl = 'api/products/products.json';
    getProducts() : Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productsUrl)
                         .pipe(
                            // tap(products => console.log(JSON.stringify(products))),
                            map(products => 
                                products.map(product => ({
                                    ...product,
                                    productPrice: product.productPrice * 2
                                }) as IProduct)),
                            catchError(this.handeError)
                         );
    }


    
    handeError(err: HttpErrorResponse){
        /* catch the error => send it to logging api
            (ex: POST server/api/logging)
           for this project, we will log the error to console
        */

        let message = '';
        // if client-side error
        if(err.error instanceof ErrorEvent)
            message = `ClientSide Error happend: ${err.error.error}`;
        else
            message = `Server Error: Status: ${err.error}`;
        
        console.log(message);
        return throwError(() => message);

    }
}