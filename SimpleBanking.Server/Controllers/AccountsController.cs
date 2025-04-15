using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimpleBanking.Server.Services;
using System.Threading.Tasks;
using SimpleBanking.Server.Models;

namespace SimpleBanking.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("{accountId}")]
        public async Task<ActionResult<Account>> GetAccount(int accountId)
        {
            var account = await _accountService.GetAccountAsync(accountId);

            if (account == null)
            {
                return NotFound();
            }

            return account;
        }


        [HttpPost("{accountId}/deposit")]
        public async Task<ActionResult<Account>> Deposit(int accountId, [FromBody] DepositRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var updatedAccount = await _accountService.DepositAsync(accountId, request.Amount);

            if (updatedAccount == null)
            {
                return NotFound(); // Or a more specific error
            }

            return Ok(updatedAccount);
        }

        [HttpPost("{accountId}/withdraw")]
        public async Task<ActionResult<Account>> Withdraw(int accountId, [FromBody] WithdrawalRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var updatedAccount = await _accountService.WithdrawAsync(accountId, request.Amount);

            if (updatedAccount == null)
            {
                return NotFound(); // Or an insufficient funds error
            }

            return Ok(updatedAccount);
        }
    }

    // Create request models
    public class DepositRequest
    {
        public decimal Amount { get; set; }
    }

    public class WithdrawalRequest
    {
        public decimal Amount { get; set; }
    }
}

