import Account from "@/domain/entities/account";
import IAccountRepo from "@/domain/repositories/IAccountRepo";
import axios from "axios";

class AccountRepo implements IAccountRepo{
    private readonly url:string;
    constructor(){
        this.url ='http://www.quick2goapiprod.somee.com/api/cuentas/login/';
    }
    async create(account: Account): Promise<Account> {
        const response = await axios.post<Account>(this.url, account, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
}
export default AccountRepo;