# 🔧 Netlify Troubleshooting Guide

This guide will help you fix common issues with your Netlify deployment.

## 🚨 Common Issues & Solutions

### Issue 1: Function Not Found (404 Error)

**Symptoms:**
- Weather data doesn't load
- Console shows 404 errors for `/.netlify/functions/weather`

**Solution:**
1. Verify function files are in the correct location:
   ```
   netlify/functions/
   ├── weather.js
   └── package.json
   ```

2. Check `netlify.toml` configuration:
   ```toml
   [build]
     publish = "src"
     functions = "netlify/functions"
   ```

3. Ensure function dependencies are installed:
   ```bash
   cd netlify/functions
   npm install
   ```

### Issue 2: API Key Not Configured

**Symptoms:**
- Function returns 500 error
- "Weather API key not configured" message

**Solution:**
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add variable:
   - **Key:** `WEATHER_API_KEY`
   - **Value:** Your OpenWeatherMap API key
3. Redeploy the site

### Issue 3: Build Failures

**Symptoms:**
- Deployment fails during build
- Function dependencies not found

**Solution:**
1. Check build logs in Netlify dashboard
2. Ensure `netlify/functions/package.json` exists
3. Verify Node.js version compatibility

### Issue 4: CORS Errors

**Symptoms:**
- Browser console shows CORS errors
- Function calls blocked

**Solution:**
1. Check function headers in `netlify/functions/weather.js`
2. Ensure CORS headers are set:
   ```javascript
   headers: {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Headers': 'Content-Type'
   }
   ```

## 🔍 Debugging Steps

### Step 1: Check Function Status
1. Go to Netlify Dashboard → Functions tab
2. Verify `weather` function is listed and active
3. Check function logs for errors

### Step 2: Test Function Directly
1. Visit: `https://your-site.netlify.app/.netlify/functions/weather?city=London`
2. Should return JSON weather data
3. If not, check function logs

### Step 3: Check Environment Variables
1. Go to Site Settings → Environment Variables
2. Verify `WEATHER_API_KEY` is set
3. Check for typos in variable name

### Step 4: Review Build Logs
1. Go to Deploys tab in Netlify dashboard
2. Click on latest deploy
3. Check build logs for errors

## 🛠️ Manual Fixes

### Reinstall Function Dependencies
```bash
cd netlify/functions
rm -rf node_modules package-lock.json
npm install
```

### Force Redeploy
1. Go to Netlify Dashboard → Deploys
2. Click "Trigger deploy" → "Deploy site"
3. This will rebuild everything

### Check Function Code
Ensure `netlify/functions/weather.js` contains:
- Proper error handling
- CORS headers
- Environment variable usage

## 📞 Getting Help

If issues persist:
1. Check Netlify status page
2. Review function logs in dashboard
3. Test API key on OpenWeatherMap directly
4. Check browser console for client-side errors

## ✅ Verification Checklist

- [ ] Function files in `netlify/functions/`
- [ ] `package.json` with dependencies
- [ ] `WEATHER_API_KEY` environment variable set
- [ ] Function appears in Netlify Functions tab
- [ ] Direct function URL returns data
- [ ] No CORS errors in browser console

---

**Your weather app should work perfectly after these fixes! 🌤️** 