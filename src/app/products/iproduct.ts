export interface IProduct
{
    productId: number,
    productName: string,
    productCode: string,
    productDate: string,
    description: string,
    productPrice: number,
    starRating: number,
    imageUrl: string,
    categoryId: number,
    categoryName?: string
}