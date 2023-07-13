import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { IProductCategory } from "../iproduct-category";

@Injectable({
    providedIn: 'root'
})
export class ProductCategoryService {
    private _categoriesUrl = 'api/products/categories.json';

    constructor(private _http : HttpClient){
    }
    
    productCategories$ = this._http.get<IProductCategory[]>(this._categoriesUrl)
                .pipe(
                // tap(products => console.log(JSON.stringify(products))),
                catchError(this.handeError)
                );
    

    // It can be written inside a private service so that it is not repeated twice  
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