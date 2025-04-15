using SimpleBanking.Server.Models;
using System.Threading.Tasks;

namespace SimpleBanking.Server.Services
{
    public interface IAccountService
    {
        Task<Account> GetAccountAsync(int accountId);
        Task<Account> GetAccountByNumberAsync(string accountNumber);
        Task<Account> DepositAsync(int accountId, decimal amount);
        Task<Account> WithdrawAsync(int accountId, decimal amount);
    }
}
