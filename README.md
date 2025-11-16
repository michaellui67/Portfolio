# Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases work experience, education, skills, top GitHub repositories, and latest blog posts from Medium.

## Features

- **About Section**: Personal bio and introduction
- **Top Repositories**: Displays top GitHub repositories with stars, forks, and language information
- **Blog Posts**: Fetches and displays latest blog posts from Medium
- **Work Experience**: Timeline view of professional work history
- **Education**: Educational background timeline
- **Skills**: Technical skills and competencies
- **Contact**: Contact information and email
- **Responsive Design**: Mobile-friendly layout with smooth animations
- **Print-Friendly**: Some sections are hidden when printing

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and animations (custom CSS + Animate.css)
- **JavaScript (ES6)**: Dynamic content population and API integrations
- **jQuery**: DOM manipulation and event handling
- **jQuery Waypoints**: Scroll animations
- **Bootstrap 3.3.5**: Grid system and responsive components
- **Font Awesome**: Icons

## Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── index.js            # Main JavaScript module
├── css/
│   ├── style.css       # Main stylesheet
│   └── animate.css     # Animation library
├── js/
│   ├── main.js         # Navigation and scroll functionality
│   ├── profile-card.js # Profile card component
│   ├── jquery.min.js   # jQuery library
│   ├── jquery.waypoints.min.js  # Waypoints plugin
│   └── modernizr-2.6.2.min.js   # Feature detection
└── user-data/
    ├── data.js         # Personal data (bio, experience, education, skills, footer)
    └── urls.js         # API endpoints for GitHub and Medium
```

## Setup Instructions

1. **Clone the repository** (or download the files)

2. **Configure your data**:
   - Edit `user-data/data.js` to update:
     - Bio information
     - Work experience
     - Education history
     - Skills list
     - Footer links and copyright
   - Edit `user-data/urls.js` to set:
     - Your Medium RSS feed URL
     - Your GitHub repositories API endpoint

3. **Open the website**:
   - Simply open `index.html` in a modern web browser
   - For local development, you can use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

## Customization Guide

### Updating Personal Information

Edit `user-data/data.js`:

- **Bio**: Modify the `bio` array with your personal introduction
- **Experience**: Update the `experience` array with your work history
- **Education**: Modify the `education` array with your educational background
- **Skills**: Update the `skills` array with your technical skills
- **Footer**: Customize the `footer` array with your social links and copyright

### Configuring API Endpoints

Edit `user-data/urls.js`:

- **Medium RSS Feed**: 
  - Format: `https://medium.com/feed/@your-username`
- **GitHub Repositories**: 
  - Format: `https://api.github.com/users/your-username/repos?sort=updated&per_page=4`
  - Adjust `per_page` to control how many repositories are displayed

### Styling

- Main styles are in `css/style.css`
- Color scheme and branding can be customized in the CSS file
- Look for the accent color `#f9bf3f` (yellow/gold) to change the theme

### Logo/Name

- Update the site name in `index.html` (currently "Michael's Portfolio" on lines 23-24)
- Modify the page title in `index.js` line 60

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (with some limitations)

## Notes

- The website fetches data from external APIs (GitHub and Medium), so an internet connection is required for those features to work
- Some sections are marked with `no-print` class for print-friendly versions
- The site uses ES6 modules, so it must be served from a web server (not `file://`) when using module imports

## License

This project is open source and available for personal use and customization.

---

**Contact**: michael.lui67@gmail.com

