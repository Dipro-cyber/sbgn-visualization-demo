# SBGN Visualization Demo

A web-based demonstration of biological pathway visualization using SBGN (Systems Biology Graphical Notation) format with Cytoscape.js.

🔗 **Live Demo**: https://dipro-cyber.github.io/sbgn-visualization-demo/

## Overview

This demo implements the complete SBGN visualization pipeline:

```
SBGNML file
    ↓
sbgnml-to-cytoscape (converts XML to JSON)
    ↓
Cytoscape.js (renders the graph)
    ↓
cytoscape-sbgn-stylesheet (applies biological notation styling)
    ↓
Interactive biological pathway visualization
```

## Features

- Load and parse SBGNML (XML) files
- Convert to Cytoscape.js graph format
- Render biological pathways with proper SBGN styling
- Interactive visualization (zoom, pan)
- Example pathway: STAT1α induction of IRF1 gene

## Libraries Used

- [Cytoscape.js](https://js.cytoscape.org/) - Graph visualization library
- [sbgnml-to-cytoscape](https://github.com/PathwayCommons/sbgnml-to-cytoscape) - Converts SBGNML to Cytoscape format
- [cytoscape-sbgn-stylesheet](https://github.com/PathwayCommons/cytoscape-sbgn-stylesheet) - SBGN-specific styling

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/Dipro-cyber/sbgn-visualization-demo.git
cd sbgn-visualization-demo
```

2. Start a local server:
```bash
npx http-server -p 3000
```

3. Open your browser to `http://localhost:3000`

## Project Structure

```
sbgn-visualization-demo/
  ├── index.html                    # Main webpage
  ├── script.js                     # Visualization logic
  ├── activated_stat1alpha_induction_of_the_irf1_gene.sbgnml  # Sample SBGNML file
  ├── package.json                  # Project metadata
  └── README.md                     # Documentation
```

## How It Works

1. **Load SBGNML**: The demo fetches an SBGNML XML file
2. **Convert**: Uses `sbgnml-to-cytoscape` to convert XML to Cytoscape JSON format
3. **Render**: Cytoscape.js renders the graph with nodes and edges
4. **Style**: `cytoscape-sbgn-stylesheet` applies biological notation styling (rounded rectangles for macromolecules, arrows for reactions, etc.)

## Sample SBGNML File

The demo includes `activated_stat1alpha_induction_of_the_irf1_gene.sbgnml` which represents:
- STAT1α (macromolecule) → IRF1 (macromolecule)
- A simple biological process showing gene induction

## References

- [SBGN Specification](http://sbgn.github.io/sbgn/)
- [Pathway Commons](https://www.pathwaycommons.org/)

## License

MIT
