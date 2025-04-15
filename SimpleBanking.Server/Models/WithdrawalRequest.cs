using System.ComponentModel.DataAnnotations;

namespace SimpleBanking.Server.Models
{
    public class WithdrawalRequest
    {
        [Required(ErrorMessage = "Amount is required.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Amount must be greater than 0.")]
        public decimal Amount { get; set; }
    }
}
