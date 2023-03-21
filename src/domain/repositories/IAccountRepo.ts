import Account from "../entities/account";

interface IAccountRepo{
    create(account:Account): Promise<Account>;
}
export default IAccountRepo;