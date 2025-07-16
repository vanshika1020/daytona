# CRUD Web Application

A complete ASP.NET Core MVC application demonstrating CRUD (Create, Read, Update, Delete) operations for product management.

## Features

- ✅ **Create** new products with detailed information
- ✅ **Read** and view all products in a responsive table
- ✅ **Update** existing product information
- ✅ **Delete** products with confirmation
- ✅ **Form validation** for data integrity
- ✅ **Responsive design** for mobile and desktop
- ✅ **Bootstrap 5** for modern UI
- ✅ **Font Awesome** icons
- ✅ **Entity Framework Core** for data persistence
- ✅ **In-Memory Database** for easy testing

## Technologies Used

- **ASP.NET Core 8.0** - Web framework
- **Entity Framework Core** - ORM for database operations
- **Bootstrap 5** - CSS framework for responsive design
- **Font Awesome** - Icon library
- **jQuery** - JavaScript library for client-side functionality
- **In-Memory Database** - For development and testing

## Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- A code editor (Visual Studio, Visual Studio Code, or JetBrains Rider)

## Getting Started

### 1. Clone or Download the Project

```bash
# If you have the project files in a directory, navigate to it
cd CrudWebApp
```

### 2. Restore Dependencies

```bash
dotnet restore
```

### 3. Run the Application

```bash
dotnet run
```

### 4. Access the Application

Open your web browser and navigate to:
- `https://localhost:5001` (HTTPS)
- `http://localhost:5000` (HTTP)

## Project Structure

```
CrudWebApp/
├── Controllers/          # MVC Controllers
│   ├── HomeController.cs
│   └── ProductController.cs
├── Data/                 # Database Context
│   └── ApplicationDbContext.cs
├── Models/               # Data Models
│   └── Product.cs
├── Views/                # Razor Views
│   ├── Home/
│   ├── Product/
│   └── Shared/
├── wwwroot/              # Static Files
│   ├── css/
│   └── js/
├── Program.cs            # Application Entry Point
└── CrudWebApp.csproj     # Project Configuration
```

## Database

The application uses an **In-Memory Database** for development and testing purposes. The database is automatically seeded with sample data when the application starts.

### Sample Data

The application includes sample products:
- Laptop Computer
- Wireless Mouse
- Office Chair

## Usage

### 1. View Products
- Navigate to the **Products** page to see all products
- Products are displayed in a responsive table with actions

### 2. Create New Product
- Click **"Create New Product"** button
- Fill in the required information
- Click **"Create Product"** to save

### 3. View Product Details
- Click the **eye icon** (👁️) to view detailed product information
- See all product details, creation date, and statistics

### 4. Edit Product
- Click the **edit icon** (✏️) to modify product information
- Update the fields and click **"Update Product"**

### 5. Delete Product
- Click the **trash icon** (🗑️) to delete a product
- Confirm the deletion in the confirmation dialog

## Development Notes

### For Visual Studio 2022 on Mac

While Visual Studio for Mac has been discontinued, you can still develop ASP.NET Core applications on Mac using:

1. **Visual Studio Code** with C# extension
2. **JetBrains Rider**
3. **Command Line Tools** with any text editor

### Running in Development Mode

```bash
dotnet run --environment Development
```

### Building for Production

```bash
dotnet build --configuration Release
```

### Publishing the Application

```bash
dotnet publish --configuration Release --output ./publish
```

## Customization

### Adding New Fields to Product Model

1. Update the `Product` model in `Models/Product.cs`
2. Update the views in `Views/Product/`
3. Update the controller actions if needed

### Changing Database Provider

To use a different database provider (SQL Server, PostgreSQL, etc.):

1. Update the connection string in `Program.cs`
2. Replace `UseInMemoryDatabase` with your preferred provider
3. Run database migrations

### Styling Customization

- Modify `wwwroot/css/site.css` for custom styles
- Update Bootstrap classes in views
- Add custom JavaScript in `wwwroot/js/site.js`

## Security Notes

This is a demonstration application. For production use, consider:

- Adding authentication and authorization
- Implementing proper error handling
- Adding logging
- Using a persistent database
- Implementing security headers
- Adding input sanitization

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Change the port in `Properties/launchSettings.json`

2. **Package Restore Issues**
   - Run `dotnet clean` then `dotnet restore`

3. **Build Errors**
   - Ensure you have .NET 8.0 SDK installed
   - Check package versions in the `.csproj` file

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes. Feel free to use and modify as needed.

## Support

For questions or issues, please create an issue in the repository or contact the development team.