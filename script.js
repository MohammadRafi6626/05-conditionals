// Get the form element
const weatherForm = document.getElementById('weatherForm');
// Get the suggestion section
const suggestionSection = document.getElementById('suggestion');

// Listen for form submission
weatherForm.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the selected weather value
  const weatherSelect = document.getElementById('weather');
  const weather = weatherSelect.value;

  // Get the temperature value and convert it to a number
  const temperatureInput = document.getElementById('temperature');
  const temperature = Number(temperatureInput.value);

  // Create a variable for the message
  let message = '';

  // Check if the weather is cloudy or rainy
  if (weather === 'cloudy' || weather === 'rainy') {
    // Use template literals to include the weather
    message = `It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === 'sunny') {
    message = `It's sunny! Don't forget your sunglasses! 😎`;
  } else if (weather === 'snowy') {
    message = `It's snowy! Wear warm clothes and boots! ❄️`;
  } else if (weather === 'windy') {
    message = `It's windy! Hold onto your hat! 💨`;
  } else {
    message = `Please select the weather.`;
  }

  // Check if the temperature is below 50°F
  if (temperature < 50 && weather !== '') {
    // Add a suggestion for a warm jacket
    message += ' Also, it is cold! Wear a warm jacket.';
  }

  // Show the message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
