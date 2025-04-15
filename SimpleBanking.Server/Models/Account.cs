namespace SimpleBanking.Server.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        public string AccountNumber { get; set; }
        public string Name { get; set; }
        public decimal CurrentBalance { get; set; }
        public int UserId { get; set; } // For future user association
    }
}
