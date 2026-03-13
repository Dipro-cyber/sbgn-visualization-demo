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

// Graph control functions
function zoomIn() {
    if (!cy) {
        alert('Please load the SBGNML file first!');
        return;
    }
    cy.zoom(cy.zoom() * 1.2);
    cy.center();
}

function zoomOut() {
    if (!cy) {
        alert('Please load the SBGNML file first!');
        return;
    }
    cy.zoom(cy.zoom() * 0.8);
    cy.center();
}

function fitGraph() {
    if (!cy) {
        alert('Please load the SBGNML file first!');
        return;
    }
    cy.fit();
    console.log('Graph fitted to viewport');
}

function applyLayout(layoutName) {
    if (!cy) {
        alert('Please load the SBGNML file first!');
        return;
    }
    
    const layoutOptions = {
        name: layoutName,
        animate: true,
        animationDuration: 500,
        fit: true,
        padding: 30
    };
    
    // Additional options for specific layouts
    if (layoutName === 'circle') {
        layoutOptions.radius = 200;
    } else if (layoutName === 'grid') {
        layoutOptions.rows = 2;
    } else if (layoutName === 'breadthfirst') {
        layoutOptions.directed = true;
        layoutOptions.spacingFactor = 1.5;
    }
    
    cy.layout(layoutOptions).run();
    console.log(`Applied ${layoutName} layout`);
}

function resetGraph() {
    if (!cy) {
        alert('Please load the SBGNML file first!');
        return;
    }
    
    // Reset to original layout and zoom
    cy.layout({
        name: 'preset',
        animate: true,
        animationDuration: 500,
        fit: true,
        padding: 30
    }).run();
    
    console.log('Graph reset to original state');
}

// Auto-load on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSBGNML();
});
