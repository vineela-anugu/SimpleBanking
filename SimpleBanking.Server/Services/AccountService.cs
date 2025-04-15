using Microsoft.EntityFrameworkCore;
using SimpleBanking.Server.Models;
using SimpleBanking.Server.Data;
using System.Threading.Tasks;

namespace SimpleBanking.Server.Services
{
    public class AccountService : IAccountService
    {
        private readonly BankingDbContext _context;
        public AccountService(BankingDbContext context)
        {
            _context = context;
        }
        public async Task<Account> GetAccountAsync(int accountId)
        {
            return await _context.Accounts.FindAsync(accountId);
        }
        public async Task<Account> GetAccountByNumberAsync(string accountNumber)
        {
            return await _context.Accounts.SingleOrDefaultAsync(a => a.AccountNumber == accountNumber);
        }
        public async Task<Account> DepositAsync(int accountId, decimal amount)
        {
            var account = await _context.Accounts.FindAsync(accountId);
            if (account != null && amount > 0)
            {
                account.CurrentBalance += amount;
                await _context.SaveChangesAsync();
                return account;
            }
            return null; // Consider more robust error handling
        }
        public async Task<Account> WithdrawAsync(int accountId, decimal amount)
        {
            var account = await _context.Accounts.FindAsync(accountId);
            if (account != null && amount > 0 && account.CurrentBalance >= amount)
            {
                account.CurrentBalance -= amount;
                await _context.SaveChangesAsync();
                return account;
            }
            return null; // Consider more robust error handling (e.g., insufficient funds)
        }



    }
}
