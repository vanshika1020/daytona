using System.ComponentModel.DataAnnotations;

namespace CrudWebApp.Models
{
    public class Product
    {
        public int Id { get; set; }
        
        [Required]
        [Display(Name = "Product Name")]
        [StringLength(100, ErrorMessage = "Product name cannot exceed 100 characters")]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters")]
        public string Description { get; set; } = string.Empty;
        
        [Required]
        [Range(0.01, 9999.99, ErrorMessage = "Price must be between 0.01 and 9999.99")]
        [Display(Name = "Price")]
        [DisplayFormat(DataFormatString = "{0:C}", ApplyFormatInEditMode = false)]
        public decimal Price { get; set; }
        
        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Quantity must be 0 or greater")]
        [Display(Name = "Quantity in Stock")]
        public int Quantity { get; set; }
        
        [Display(Name = "Category")]
        [StringLength(50, ErrorMessage = "Category cannot exceed 50 characters")]
        public string Category { get; set; } = string.Empty;
        
        [Display(Name = "Created Date")]
        [DataType(DataType.DateTime)]
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        
        [Display(Name = "Last Modified")]
        [DataType(DataType.DateTime)]
        public DateTime LastModified { get; set; } = DateTime.Now;
    }
}