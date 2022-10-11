import { SenderService } from "../service/sender.service";
import { Category } from "./category.model";
import { Sender } from "./sender.model";

export class Product{
    id: number;
    category_id: Category = new Category();
    sender_id: Sender = new Sender();
    code: string;
    productName: string;
    price: string;
    descriptions: string;
    status: number;
}