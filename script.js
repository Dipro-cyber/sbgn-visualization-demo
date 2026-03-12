// Initialize Cytoscape instance
let cy;

// Initialize the visualization
function initCytoscape(elements) {
    // Get SBGN stylesheet from the cytoscape-sbgn-stylesheet library
    const sbgnStylesheet = window.cytoscapeSbgnStylesheet(cytoscape);

    cy = cytoscape({
        container: document.getElementById('cy'),
        elements: elements,
        style: sbgnStylesheet,
        layout: {
            name: 'preset'
        },
        minZoom: 0.5,
        maxZoom: 2
    });
}

// Load and convert SBGNML file
async function loadSBGNML() {
    try {
        // Fetch the SBGNML file
        const response = await fetch('activated_stat1alpha_induction_of_the_irf1_gene.sbgnml');
        const sbgnmlText = await response.text();
        
        console.log('SBGNML file loaded');
        
        // Convert SBGNML to Cytoscape JSON using the global sbgnmlToCytoscape function
        const cyElements = window.sbgnmlToCytoscape(sbgnmlText);
        
        console.log('Converted elements:', cyElements);
        
        // Initialize or update Cytoscape
        if (cy) {
            cy.destroy();
        }
        initCytoscape(cyElements);
        
        console.log('SBGNML loaded and visualized successfully!');
    } catch (error) {
        console.error('Error loading SBGNML:', error);
        alert('Error loading SBGNML file: ' + error.message);
    }
}

// Auto-load on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSBGNML();
});
