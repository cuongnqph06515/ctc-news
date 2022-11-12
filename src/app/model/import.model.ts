import { Hub } from "./hub.model";
import { User } from "./user.model";

export class Import{
    id: number;
    code: string;
    importDate: Date;
    hub: Hub = new Hub();
    user: User = new User();
    totalQuantity: number;
    totalProduct: number;
    totalMoney: number;
    description: string;
    status: number;
}