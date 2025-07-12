# 🛠️ Local Development Guide

This guide will help you run the weather app locally for development and testing.

## 🚀 Quick Start

### Option 1: Using npm scripts (Recommended)
```bash
# Install dependencies (if any)
npm install

# Start development server
npm run dev

# Access at http://localhost:8000
```

### Option 2: Direct file access
```bash
# Navigate to src directory
cd src

# Start Python server
python -m http.server 8000

# Access at http://localhost:8000
```

## 🔑 API Key Setup for Local Development

**IMPORTANT:** For local development, you need to add your API key to the code:

1. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Open `src/script.js`
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const LOCAL_API_KEY = "your-actual-api-key-here";
   ```

## 🔒 Security Note

⚠️ **Never commit your API key to Git!** The API key in `src/script.js` is only for local development. In production, the API key is securely stored in Netlify environment variables.

## 🧪 Testing

1. Open your browser to `http://localhost:8000`
2. Enter a city name (e.g., "London", "New York", "Tokyo")
3. Click search or press Enter
4. You should see the weather data displayed

## 🐛 Troubleshooting

### API Not Working
- Check that you've added your API key to `src/script.js`
- Verify your API key is valid on OpenWeatherMap
- Check browser console for errors (F12 → Console)

### Images Not Loading
- Make sure you're running from the `src/` directory
- Check that all image files are in `src/images/`

### CORS Errors
- Make sure you're running a local server (not just opening the HTML file)
- Use `npm run dev` or `python -m http.server 8000`

## 🔄 Switching Between Local and Production

The app automatically detects if it's running locally or on Netlify:
- **Localhost** → Uses direct API calls with your API key
- **Netlify** → Uses secure serverless functions

## 📝 Development Workflow

1. Make changes to files in `src/`
2. Test locally with `npm run dev`
3. Commit and push to GitHub
4. Netlify automatically deploys the changes

---

**Happy coding! 🌤️** 