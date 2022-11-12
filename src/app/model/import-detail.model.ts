import { Import } from "./import.model";
import { Product } from "./product.model";

export class ImportDetail{
    id: number;
    import: Import = new Import();
    product: Product = new Product();
    quantity: number;
}