# AIML Workshop Dashboard

An attractive React-based dashboard for the AI/ML Workshop with interactive download functionality.

## Features

- 🎨 **Modern Design**: Gradient backgrounds, glassmorphism effects, and smooth animations
- 📱 **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- 🔽 **Interactive Download**: One-click download button for workshop materials
- 🖼️ **Logo Integration**: Displays your workshop and club logos prominently
- ⚡ **Fast Loading**: Built with Vite for optimal performance

## Workshop Materials

The dashboard provides download access to:
- `Fruits Classification.zip` - Complete dataset and resources for the workshop

## Project Structure

```
aiml-workshop-dashboard/
├── public/
│   ├── club-logo.png          # Club logo
│   ├── logo.png              # Main workshop logo
│   └── Fruits Classification.zip  # Workshop materials
├── src/
│   ├── App.jsx               # Main React component
│   ├── App.css              # Styling for the dashboard
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── index.html              # HTML template
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd aiml-workshop-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Updating Logos
- Replace `public/logo.png` with your main workshop logo
- Replace `public/club-logo.png` with your club/organization logo

### Changing Colors
Edit the CSS variables in `src/App.css`:
- Main gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Accent color: `#ffd700`
- Button gradient: `linear-gradient(45deg, #667eea, #764ba2)`

### Adding New Workshop Materials
1. Place your files in the `public/` directory
2. Update the download handler in `src/App.jsx`
3. Modify the file info display in the download card

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with modern features (grid, flexbox, gradients, backdrop-filter)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use and modify for your workshops!

---

**Happy Learning! 🚀**