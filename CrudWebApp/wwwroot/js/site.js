// CRUD Web App JavaScript

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Auto-dismiss alerts after 5 seconds
    var alerts = document.querySelectorAll('.alert-dismissible');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            var closeButton = alert.querySelector('.btn-close');
            if (closeButton) {
                closeButton.click();
            }
        }, 5000);
    });
    
    // Form validation enhancements
    var forms = document.querySelectorAll('.needs-validation');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    
    // Price input formatting
    var priceInputs = document.querySelectorAll('input[type="number"][id*="Price"]');
    priceInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            var value = parseFloat(this.value);
            if (!isNaN(value)) {
                this.value = value.toFixed(2);
            }
        });
    });
    
    // Confirm deletion
    var deleteButtons = document.querySelectorAll('a[href*="/Delete"]');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            if (!confirm('Are you sure you want to delete this item?')) {
                event.preventDefault();
            }
        });
    });
    
    // Search functionality for tables
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            var filter = this.value.toLowerCase();
            var table = document.querySelector('.table tbody');
            var rows = table.querySelectorAll('tr');
            
            rows.forEach(function(row) {
                var text = row.textContent.toLowerCase();
                row.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }
    
    // Loading button state
    var submitButtons = document.querySelectorAll('button[type="submit"]');
    submitButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var form = this.closest('form');
            if (form && form.checkValidity()) {
                this.disabled = true;
                this.innerHTML = '<span class="loading"></span> Processing...';
                
                setTimeout(function() {
                    button.disabled = false;
                    button.innerHTML = button.getAttribute('data-original-text') || 'Submit';
                }, 3000);
            }
        });
    });
    
    // Store original button text
    submitButtons.forEach(function(button) {
        button.setAttribute('data-original-text', button.innerHTML);
    });
});

// Utility functions
function showAlert(message, type = 'info') {
    var alertContainer = document.querySelector('.container');
    var alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
        <i class="fas fa-info-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    alertContainer.insertBefore(alert, alertContainer.firstChild);
    
    setTimeout(function() {
        alert.remove();
    }, 5000);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Table sorting functionality
function sortTable(columnIndex, tableId = 'dataTable') {
    var table = document.getElementById(tableId);
    if (!table) return;
    
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.querySelectorAll('tr'));
    var isAscending = table.getAttribute('data-sort-order') !== 'asc';
    
    rows.sort(function(a, b) {
        var aText = a.cells[columnIndex].textContent.trim();
        var bText = b.cells[columnIndex].textContent.trim();
        
        // Try to parse as numbers
        var aNum = parseFloat(aText.replace(/[^0-9.-]+/g, ''));
        var bNum = parseFloat(bText.replace(/[^0-9.-]+/g, ''));
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return isAscending ? aNum - bNum : bNum - aNum;
        }
        
        // Sort as strings
        return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    
    rows.forEach(function(row) {
        tbody.appendChild(row);
    });
    
    table.setAttribute('data-sort-order', isAscending ? 'asc' : 'desc');
}

// Export table to CSV
function exportTableToCSV(tableId = 'dataTable', filename = 'data.csv') {
    var table = document.getElementById(tableId);
    if (!table) return;
    
    var csv = [];
    var rows = table.querySelectorAll('tr');
    
    rows.forEach(function(row) {
        var cols = row.querySelectorAll('td, th');
        var rowData = [];
        
        cols.forEach(function(col) {
            var text = col.textContent.trim();
            // Escape commas and quotes
            text = text.replace(/"/g, '""');
            if (text.includes(',') || text.includes('"')) {
                text = '"' + text + '"';
            }
            rowData.push(text);
        });
        
        csv.push(rowData.join(','));
    });
    
    var csvContent = csv.join('\n');
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    
    if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Print function
function printPage() {
    window.print();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});