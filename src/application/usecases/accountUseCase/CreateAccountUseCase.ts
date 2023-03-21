import Account from "@/domain/entities/account";
import IAccountRepo from "@/domain/repositories/IAccountRepo";

class CreateAccountUseCase{
    private readonly accountRepo:IAccountRepo;
    constructor (accountRepo:IAccountRepo){
        this.accountRepo = accountRepo;
    }
    async run(account:Account):Promise<Account>{
        const createAccount:Account = await this.accountRepo.create(account);
        return createAccount;
    }
}
export default CreateAccountUseCase;