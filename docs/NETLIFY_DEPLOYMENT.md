# 🚀 Netlify Deployment Guide

This guide will help you deploy your weather app to Netlify with automatic API key configuration.

## 📋 Prerequisites

1. **OpenWeatherMap API Key**
   - Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up and generate an API key in your dashboard

2. **GitHub Repository**
   - Push your code to a GitHub repository
   - Make sure all files are committed

## 🔧 Step-by-Step Deployment

### Step 1: Connect to Netlify

1. Go to [Netlify](https://netlify.com) and sign up/login
2. Click **"New site from Git"**
3. Choose **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your weather app repository

### Step 2: Configure Build Settings

Netlify will automatically detect your settings from `netlify.toml`, but verify:

- **Build command:** `npm run build` (or leave empty for static site)
- **Publish directory:** `src` (source directory)
- **Node version:** `18` (automatically set)

### Step 3: Set Environment Variables

**IMPORTANT:** Set your API key before deploying!

1. In the deploy settings, go to **"Environment variables"**
2. Add a new variable:
   - **Key:** `WEATHER_API_KEY`
   - **Value:** Your actual OpenWeatherMap API key
3. Click **"Deploy site"**

### Step 4: Deploy

1. Click **"Deploy site"**
2. Netlify will:
   - Install function dependencies
   - Build your site
   - Deploy to a unique URL
   - Set up automatic deployments

## ✅ Verification

After deployment:

1. **Check the function:** Visit `https://your-site.netlify.app/.netlify/functions/weather?city=London`
2. **Test the app:** Search for a city in your weather app
3. **Check logs:** Go to Functions tab in Netlify dashboard

## 🔄 Automatic Deployments

- Every push to your main branch triggers a new deployment
- Netlify automatically installs dependencies
- Your API key is securely stored and used by the function

## 🛠️ Troubleshooting

### Function Not Working
1. Check Netlify Functions tab for errors
2. Verify `WEATHER_API_KEY` environment variable is set
3. Check function logs in Netlify dashboard

### Build Failures
1. Ensure `netlify/functions/package.json` exists
2. Check Node.js version compatibility
3. Review build logs in Netlify dashboard

### API Key Issues
1. Verify the key is valid on OpenWeatherMap
2. Check if you've exceeded API limits
3. Ensure the environment variable name is exactly `WEATHER_API_KEY`

## 🔒 Security Notes

- ✅ API key is never exposed to the client
- ✅ Environment variables are encrypted
- ✅ Function runs on Netlify's secure infrastructure
- ✅ HTTPS is automatically enabled

## 📞 Support

If you encounter issues:
1. Check Netlify deployment logs
2. Verify your API key is working
3. Test the function endpoint directly
4. Review the function code in `netlify/functions/weather.js`

---

**Your weather app is now live and secure! 🌤️** 