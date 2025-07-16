using Microsoft.EntityFrameworkCore;
using CrudWebApp.Models;

namespace CrudWebApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Description).IsRequired().HasMaxLength(500);
                entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
                entity.Property(e => e.Category).HasMaxLength(50);
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.LastModified).HasDefaultValueSql("GETDATE()");
            });

            // Seed some initial data
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Laptop Computer",
                    Description = "High-performance laptop with 16GB RAM and 512GB SSD",
                    Price = 999.99m,
                    Quantity = 25,
                    Category = "Electronics",
                    CreatedDate = DateTime.Now,
                    LastModified = DateTime.Now
                },
                new Product
                {
                    Id = 2,
                    Name = "Wireless Mouse",
                    Description = "Ergonomic wireless mouse with long battery life",
                    Price = 29.99m,
                    Quantity = 100,
                    Category = "Electronics",
                    CreatedDate = DateTime.Now,
                    LastModified = DateTime.Now
                },
                new Product
                {
                    Id = 3,
                    Name = "Office Chair",
                    Description = "Comfortable office chair with lumbar support",
                    Price = 199.99m,
                    Quantity = 15,
                    Category = "Furniture",
                    CreatedDate = DateTime.Now,
                    LastModified = DateTime.Now
                }
            );
        }
    }
}