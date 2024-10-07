## Nearby Places Finder Documentation

This project is a web application that uses Mapbox GL JS and the Mapbox Geocoding API to find nearby places of interest based on user location or a searched location. The application also includes a weather feature using the OpenWeatherMap API.

### Files

* **index.html:** The main HTML file containing the structure of the web application.
* **style.css:**  CSS file responsible for styling the user interface.
* **script.js:** JavaScript file containing the logic for the application.

### HTML (index.html)

* **DOCTYPE declaration:** Defines the document type as HTML5.
* **html element:** The root element of the HTML document.
* **head element:** Contains metadata about the HTML document.
    * **meta charset:** Specifies the character encoding for the document (UTF-8).
    * **meta viewport:** Configures the viewport for responsive design.
    * **title:** Sets the title of the HTML document.
    * **link (mapbox-gl.css):** Imports the Mapbox GL CSS stylesheet for map rendering.
    * **link (style.css):** Imports the custom CSS stylesheet for styling the application.
* **body element:** Contains the visible content of the HTML document.
    * **header:** Contains the heading of the application.
    * **main:** Contains the main content of the application.
        * **div (controls):** Holds the search input, search button, and category dropdown.
        * **div (map):**  Container for the Mapbox map.
        * **div (places-list):** Container for displaying the list of nearby places.
    * **footer:** Contains copyright information.
    * **script (mapbox-gl.js):** Imports the Mapbox GL JavaScript library for map functionality.
    * **script (mapbox-gl-directions.js):** Imports the Mapbox GL Directions plugin for route calculation.
    * **link (mapbox-gl-directions.css):** Imports the CSS for the Mapbox GL Directions plugin.
    * **script (script.js):** Imports the custom JavaScript code for application logic.

### CSS (style.css)

* **General Styles:**
    * **box-sizing:** Sets the box model to "border-box" for consistent element sizing.
    * **margin & padding:** Resets default margins and paddings for better control.
    * **font-family:** Sets the default font for the page.
    * **line-height:** Sets the line height for better readability.
* **Header:**
    * **background-color:** Sets the background color of the header.
    * **color:** Sets the text color of the header.
    * **padding:** Adds padding to the header for spacing.
    * **text-align:** Centers the text within the header.
* **Main Container:**
    * **display:** Uses flexbox for layout.
    * **justify-content & align-items:** Align content within the container.
    * **flex-wrap:** Allows elements to wrap to the next line if needed.
    * **padding:** Adds padding to the container for spacing.
    * **max-width:** Limits the maximum width of the container.
    * **margin:** Centers the container horizontally.
* **Map:**
    * **width & height:** Sets the dimensions of the map container.
    * **border-radius:** Adds rounded corners to the map container.
    * **box-shadow:** Adds a box shadow for visual enhancement.
* **Controls:**
    * **display:** Uses flexbox for layout.
    * **justify-content & align-items:** Align content within the controls container.
    * **margin & padding:** Adds spacing and padding for controls.
    * **flex-wrap:** Allows elements to wrap to the next line if needed.
* **Input, Button, Select:**
    * **padding:** Adds padding to input, button, and select elements.
    * **margin-right:** Adds horizontal margin between elements.
    * **border-radius:** Rounds the corners of the elements.
    * **border:** Adds a border to the elements.
    * **margin-bottom:** Adds vertical margin below the elements.
* **Button:**
    * **background-color:** Sets the background color of the button.
    * **color:** Sets the text color of the button.
    * **border:** Removes the default border of the button.
    * **cursor:** Changes the cursor to a pointer when hovering over the button.
* **Button:hover:**
    * **background-color:** Changes the background color of the button when hovering.
* **Content Container:**
    * **display:** Uses flexbox for layout.
    * **justify-content & align-items:** Align content within the container.
    * **flex-wrap:** Allows elements to wrap to the next line if needed.
    * **gap:** Adds spacing between elements.
    * **padding & background-color:** Sets padding and background color for the container.
    * **border-radius & box-shadow:** Adds rounded corners and box shadow for visual enhancement.
* **Places List:**
    * **list-style-type:** Removes list bullets.
    * **padding:** Removes padding from the list.
    * **display:** Uses flexbox for layout.
    * **flex-direction & flex-wrap:** Controls the layout of list items.
* **Places List Item:**
    * **background-color:** Sets the background color of list items.
    * **padding:** Adds padding to list items.
    * **margin-right & margin-bottom:** Adds spacing around list items.
    * **border-radius:** Rounds the corners of list items.
    * **transition:** Enables smooth transitions for hover effects.
    * **display:** Uses flexbox for layout.
    * **flex-direction & align-items:** Controls the layout of elements within list items.
* **Places List Item:hover:**
    * **background-color:** Changes the background color on hover.
    * **transform:** Scales the list item on hover.
    * **box-shadow:** Adds a box shadow on hover.
    * **cursor:** Changes the cursor to a pointer on hover.
* **Place Container:**
    * **display:** Uses flexbox for layout.
    * **flex-direction & align-items:** Controls the layout of elements within the container.
    * **width:** Sets the width of the container.
* **Place Container Image:**
    * **width & height:** Sets the dimensions of the image.
    * **border-radius:** Rounds the corners of the image.
    * **margin-bottom:** Adds bottom margin to the image.
* **Place Container Strong & Span:**
    * **font-size & text-align:** Sets the font size and text alignment for the place name and distance.
* **Weather Info:**
    * **background-color & padding:** Sets the background color and padding for the weather container.
    * **border-radius & color:** Adds rounded corners and text color for the weather container.
    * **display:** Uses flexbox for layout.
    * **flex-direction & align-items & justify-content:** Controls the layout of elements within the weather container.
    * **width & text-align:** Sets the width and text alignment for the weather container.
    * **box-shadow:** Adds a box shadow for visual enhancement.
* **Weather Info Paragraph:**
    * **font-size & margin:** Sets the font size and margin for the paragraph.
* **Weather Icon Image:**
    * **width & height:** Sets the dimensions of the weather icon.
    * **margin-bottom:** Adds bottom margin to the weather icon.
* **Footer:**
    * **background-color & color:** Sets the background color and text color of the footer.
    * **text-align:** Centers the text within the footer.
    * **padding:** Adds padding to the footer for spacing.
    * **position & bottom & width:** Positions the footer at the bottom of the page.
* **Media Queries:**
    * **max-width 1024px:** Adjusts layout for tablets.
    * **max-width 768px:** Adjusts layout for smaller tablets and large phones.
    * **max-width 480px:** Adjusts layout for small phones.

### JavaScript (script.js)

* **Setting up Mapbox GL JS:**
    * **accessToken:** Sets the Mapbox access token for map rendering.
    * **map:** Creates a new Mapbox GL JS map object with a defined container, style, center, and zoom level.
    * **NavigationControl:** Adds a navigation control to the map.
    * **GeolocateControl:** Adds a geolocation control to the map.
    * **Directions:** Creates a MapboxDirections object for route calculation.
* **Getting User Location:**
    * **navigator.geolocation.getCurrentPosition:** Uses the browser's geolocation API to get the user's location.
    * **latitude & longitude:** Extracts the user's coordinates from the geolocation response.
    * **map.setCenter:** Sets the center of the map to the user's location.
    * **Marker:** Creates a marker on the map to indicate the user's location.
    * **fetchNearbyPlaces:**  Fetches nearby places of the selected category using the Mapbox Geocoding API.
    * **displayNearbyPlaces:** Displays the fetched places on the screen.
    * **fetchWeatherByCoords:**  Fetches weather information using the OpenWeatherMap API.
    * **displayWeatherInfo:** Displays the fetched weather information.
* **Search Button Event Listener:**
    * **locationInput:** Gets the location text from the search input field.
    * **fetch:** Sends a request to the Mapbox Geocoding API to get coordinates for the searched location.
    * **data:** Parses the Geocoding API response.
    * **locationCoords:** Extracts the coordinates from the Geocoding API response.
    * **map.flyTo:** Sets the map to the searched location with a zoom level.
    * **Marker:** Adds a marker to the map for the searched location.
    * **fetchNearbyPlaces & displayNearbyPlaces:** Fetches and displays nearby places based on the searched location.
    * **fetchWeatherByCoords & displayWeatherInfo:** Fetches and displays weather information for the searched location.
* **showRoute Function:**
    * Takes start and end coordinates and a travel mode (driving, cycling, walking) as arguments.
    * Sets the origin and destination for the directions control.
    * Sets the travel profile for the directions control.
* **fetchNearbyPlaces Function:**
    * Takes coordinates and a category as arguments.
    * Constructs a URL to fetch nearby places from the Mapbox Geocoding API.
    * Fetches data from the API.
    * Returns the parsed response data.
* **displayNearbyPlaces Function:**
    * Takes an array of places and center coordinates as arguments.
    * Clears the existing list of places.
    * Iterates through each place in the array.
    * Calculates the distance between the place and the center coordinates.
    * Creates a list item for each place, displaying the name, distance, and a place image.
    * Appends the list item to the places list container.
* **calculateDistance Function:**
    * Takes two sets of coordinates as arguments.
    * Calculates the distance between the two coordinates using the Haversine formula.
    * Returns the calculated distance in kilometers.
* **deg2rad Function:**
    * Converts degrees to radians.
* **fetchWeatherByCoords Function:**
    * Takes latitude and longitude as arguments.
    * Constructs a URL to fetch weather data from the OpenWeatherMap API.
    * Fetches data from the API.
    * Returns the parsed response data.
* **fetchImageForPlace Function:**
    * Takes a place name as an argument.
    * Constructs a URL to fetch a place image from the Pexels API.
    * Fetches data from the Pexels API.
    * Returns the URL of the first image found in the response, or a placeholder image if no image is found.
* **displayWeatherInfo Function:**
    * Takes weather data as an argument.
    * Creates a list item for the weather information.
    * Fetches the weather icon image.
    * Displays the weather information in the list item.
    * Appends the list item to the places list container.

### How to Use

1. **Obtain API Keys:** Get an API key from Mapbox ([https://account.mapbox.com/](https://account.mapbox.com/)) and a key from OpenWeatherMap ([https://openweathermap.org/api](https://openweathermap.org/api)).
2. **Set up Project:** Create a new folder and place the provided HTML, CSS, and JavaScript files in it.
3. **Replace API Keys:** Open `script.js` and replace the placeholders for `mapboxgl.accessToken` and `pexelsApiKey` with your actual API keys.
4. **Open in Browser:** Open `index.html` in your web browser.
5. **Grant Location Access:** Allow the browser to access your location.
6. **Search for Places:** Enter a location in the search input field or click the geolocation button to find nearby places.

### Additional Features

* **Route Calculation:**  The application includes a route calculation feature using the Mapbox GL Directions plugin.
* **Weather Information:** The application displays current weather information for the location.
* **Responsive Design:** The application is designed to be responsive for different screen sizes.

This documentation provides a comprehensive overview of the Nearby Places Finder application. Please refer to the specific files for further details and code examples.
