using Microsoft.EntityFrameworkCore;
using SimpleBanking.Server.Models;

namespace SimpleBanking.Server.Data
{
    public class BankingDbContext : DbContext
    {
        public BankingDbContext(DbContextOptions<BankingDbContext> options) : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>()
                .HasKey(a => a.AccountId);

            modelBuilder.Entity<Account>()
                .Property(a => a.AccountNumber)
                .IsRequired()
                .HasMaxLength(50);

            modelBuilder.Entity<Account>()
                .HasIndex(a => a.AccountNumber)
                .IsUnique();

            modelBuilder.Entity<Account>()
                .Property(a => a.Name)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<Account>()
                .Property(a => a.CurrentBalance)
                .HasColumnType("decimal(18, 2)");

            // You can configure other properties and relationships here later
        }
    }
}
