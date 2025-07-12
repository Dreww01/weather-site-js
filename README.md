# 🌤️ Weather App

A modern, responsive weather application built with vanilla JavaScript that provides real-time weather information for cities worldwide. Features a clean, gradient-based UI with dynamic weather icons and comprehensive weather data.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Weather Icons**: Visual weather representation based on current conditions
- **Comprehensive Weather Info**: Temperature, humidity, and wind speed
- **Search Functionality**: Search by city name with both click and Enter key support
- **Error Handling**: User-friendly error messages for invalid city names
- **Modern UI**: Beautiful gradient design with smooth animations

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients and responsive design
- **Vanilla JavaScript**: ES6+ features with async/await
- **OpenWeatherMap API**: Real-time weather data
- **Google Fonts**: Poppins font family for typography
- **Docker**: Containerization for easy deployment
- **Nginx**: High-performance web server
- **Netlify Functions**: Serverless API proxy for security

## 📁 Project Structure

```
weather-site-js/
├── index.html              # Main HTML file
├── style.css               # CSS styles and responsive design
├── script.js               # JavaScript functionality and API integration
├── images/                 # Weather icons and UI elements
│   ├── clear.png           # Clear sky icon
│   ├── clouds.png          # Cloudy weather icon
│   ├── drizzle.png         # Drizzle weather icon
│   ├── humidity.png        # Humidity indicator icon
│   ├── mist.png            # Mist/fog weather icon
│   ├── raining.png         # Rain weather icon
│   ├── search.png          # Search button icon
│   └── wind.png            # Wind speed indicator icon
├── netlify/                # Netlify serverless functions
│   ├── functions/
│   │   ├── weather.js      # Weather API proxy function
│   │   └── package.json    # Function dependencies
│   └── netlify.toml        # Netlify configuration
├── Dockerfile              # Docker container configuration
├── docker-compose.yml      # Docker orchestration
├── nginx.conf              # Nginx server configuration
├── .dockerignore           # Docker build exclusions
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-site-js.git
   cd weather-site-js
   ```

2. **Get an API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/)
   - Sign up for a free account
   - Generate an API key from your dashboard

3. **Configure the API Key**
   - Open `script.js`
   - Replace the empty string in `const API_KEY = " ";` with your actual API key:
   ```javascript
   const API_KEY = "your-actual-api-key-here";
   ```

4. **Run the Application**

   **Option A: Simple Local Server**
   - Open `index.html` in your web browser
   - Or serve it using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

   **Option B: Docker (Recommended)**
   ```bash
   # Build and run with Docker Compose
   docker-compose up --build
   
   # Or build and run manually
   docker build -t weather-app .
   docker run -p 3000:80 weather-app
   
   # Access at http://localhost:3000
   ```

## 📖 How to Use

1. **Search for a City**: Enter any city name in the search input field
2. **Get Weather Data**: Click the search button or press Enter
3. **View Results**: The app displays:
   - Current temperature in Celsius
   - City name
   - Weather condition with appropriate icon
   - Humidity percentage
   - Wind speed in km/h

## 🔧 API Integration

### Netlify Functions (Recommended - Secure)
The app uses Netlify Functions to proxy API calls, keeping your API key secure:

```javascript
// Client-side call (no API key exposed)
const response = await fetch('/.netlify/functions/weather?city=' + city);
```

### Direct API (Alternative)
For local development, you can use the OpenWeatherMap API directly:
```
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={API_KEY}
```

### Weather Conditions Supported
- ☀️ Clear
- ☁️ Clouds
- 🌧️ Rain
- 🌦️ Drizzle
- 🌫️ Mist

## 🎨 Design Features

- **Gradient Background**: Beautiful teal to purple gradient
- **Card-based Layout**: Clean, centered weather card design
- **Responsive Typography**: Scalable text sizes for different screen sizes
- **Smooth Interactions**: Hover effects and transitions
- **Weather Icons**: Contextual icons that change based on weather conditions

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with optimal spacing
- **Tablet**: Adapted layout for medium screens
- **Mobile**: Touch-friendly interface with appropriate sizing

## 🔒 Security Notes

- **API Key Protection**: Never commit your API key to version control
- **Netlify Functions**: Use serverless functions to keep API keys secure
- **Environment Variables**: Use environment variables for production deployments
- **Rate Limiting**: Be aware of OpenWeatherMap API rate limits
- **Docker Security**: Container runs as non-root user for enhanced security
- **HTTPS**: Always use HTTPS in production for secure data transmission

## 🐛 Error Handling

The application includes comprehensive error handling:
- Invalid city names display a user-friendly error message
- Network errors are gracefully handled
- API response validation ensures data integrity

## 🚀 Deployment

### Docker Deployment (Recommended)

**Docker Hub:**
```bash
# Build and push to Docker Hub
docker build -t yourusername/weather-app .
docker push yourusername/weather-app

# Deploy anywhere
docker run -d -p 80:80 yourusername/weather-app
```

**Cloud Platforms:**
- **AWS ECS**: Container orchestration service
- **Google Cloud Run**: Serverless containers
- **Azure Container Instances**: Managed containers
- **DigitalOcean App Platform**: Simple container deployment

### Netlify (Static + Functions)
1. Connect your GitHub repository to Netlify
2. Set environment variable `WEATHER_API_KEY` in Netlify dashboard
3. Deploy automatically on every push
4. Get a custom domain and SSL certificate

### GitHub Pages
1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your app will be available at `https://username.github.io/repository-name`

### Vercel
1. Import your repository to Vercel
2. Automatic deployments with preview URLs
3. Global CDN for fast loading

### Kubernetes
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: weather-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: weather-app
  template:
    metadata:
      labels:
        app: weather-app
    spec:
      containers:
      - name: weather-app
        image: yourusername/weather-app:latest
        ports:
        - containerPort: 80
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Google Fonts](https://fonts.google.com/) for the Poppins font family
- [Nginx](https://nginx.org/) for high-performance web serving
- [Docker](https://www.docker.com/) for containerization
- [Netlify](https://netlify.com/) for serverless functions and hosting
- Weather icons sourced from appropriate icon libraries

## 🐳 Docker Commands

### Quick Start
```bash
# Build and run with Docker Compose
docker-compose up --build

# Build image manually
docker build -t weather-app .

# Run container
docker run -d -p 3000:80 --name weather-app weather-app

# Stop container
docker stop weather-app

# Remove container
docker rm weather-app

# View logs
docker logs weather-app

# Execute commands in running container
docker exec -it weather-app sh
```

### Production Deployment
```bash
# Build for production
docker build -t weather-app:latest .

# Tag for registry
docker tag weather-app:latest yourusername/weather-app:latest

# Push to Docker Hub
docker push yourusername/weather-app:latest

# Run with restart policy
docker run -d -p 80:80 --restart unless-stopped --name weather-app yourusername/weather-app:latest
```

### Docker Compose Production
```bash
# Run with production profile
docker-compose --profile production up -d

# Scale the application
docker-compose up -d --scale weather-app=3
```

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the [OpenWeatherMap API documentation](https://openweathermap.org/api)
- Review the browser console for any JavaScript errors
- Check Docker logs: `docker logs weather-app`
- Verify container health: `docker ps`

---

**Happy Weather Tracking! 🌤️**
