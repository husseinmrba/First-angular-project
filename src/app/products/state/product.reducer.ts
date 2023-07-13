import { createReducer, on } from "@ngrx/store";
import { toggleProductCodeAction } from "./product.actions";

export const productProducer = createReducer(
    { showProductCode: false },
    on(toggleProductCodeAction, state => {
        console.log('Orginal State: ', state);
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
       })
);