// Simple filter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Price slider
    const priceSlider = document.querySelector('.price-slider');
    if (priceSlider) {
        priceSlider.addEventListener('input', function() {
            const value = this.value;
            // In a real implementation, this would filter the car listings
            console.log(`Price filter updated: $${value}`);
        });
    }
    
    // Filter checkboxes
    const checkboxes = document.querySelectorAll('.filter-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // In a real implementation, this would filter the car listings
            console.log(`Filter changed: ${this.id}`);
        });
    });
    
    // WhatsApp enquiry buttons
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('In a real implementation, this would open WhatsApp with a pre-filled message about the car.');
        });
    });
});
