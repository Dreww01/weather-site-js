const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get city from query parameters
  const { city } = event.queryStringParameters || {};
  
  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'City parameter is required' })
    };
  }

  try {
    // Your API key is now secure on the server side
    const API_KEY = process.env.WEATHER_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`;

    const response = await fetch(API_URL);
    const data = await response.json();

    if (response.status === 404) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'City not found' })
      };
    }

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Weather API error' })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow CORS
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 