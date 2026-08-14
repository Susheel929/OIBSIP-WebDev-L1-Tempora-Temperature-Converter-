# Temperature Converter

A clean and responsive temperature conversion web tool built with **HTML5, CSS3, and Vanilla JavaScript**. The application allows users to convert temperature values between **Celsius, Fahrenheit, and Kelvin** with input validation and clear error messages.

## 🔗 Live Demo: https://oibsip-web-dev-l1-tempora-temperatu.vercel.app/

## Features

* Convert temperatures between Celsius, Fahrenheit, and Kelvin
* Numeric temperature input
* Celsius, Fahrenheit, and Kelvin input unit selector
* Displays converted values for all supported units
* Convert button for performing calculations
* Input validation for empty and invalid values
* Password-free client-side validation with clear error messages
* Absolute zero validation
* User-friendly error handling
* Responsive and centered interface
* Clean labels and readable result displays
* Works directly in a modern web browser

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Flexbox
* CSS Media Queries
* Web browser APIs

## Conversion Formulas

The application uses the standard temperature conversion formulas.

### Celsius

```text
Fahrenheit = (Celsius × 9/5) + 32

Kelvin = Celsius + 273.15
```

### Fahrenheit

```text
Celsius = (Fahrenheit − 32) × 5/9

Kelvin = ((Fahrenheit − 32) × 5/9) + 273.15
```

### Kelvin

```text
Celsius = Kelvin − 273.15

Fahrenheit = ((Kelvin − 273.15) × 9/5) + 32
```

## Absolute Zero Validation

The application prevents physically invalid temperatures below absolute zero.

```text
Celsius: -273.15 °C
Fahrenheit: -459.67 °F
Kelvin: 0 K
```

When the entered temperature is below the valid absolute-zero limit for the selected unit, a clear error message is displayed instead of producing a result.

## Project Structure

```text
Temperature-Converter/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── LICENSE
```

## How to Run

No installation or external dependencies are required.

### 1. Clone the Repository

```bash
git clone https://github.com/Susheel929/OIBSIP-WebDev-L1-Tempora-Temperature-Converter-
```

### 2. Open the Project

```bash
cd temperature-converter
```

### 3. Run the Application

Open `index.html` in a modern web browser.

You can also use the **Live Server** extension in Visual Studio Code for local development.

## Usage

1. Enter a temperature value.
2. Select the input unit.
3. Click the **Convert** button.
4. View the converted Celsius, Fahrenheit, and Kelvin values.
5. If the entered value is invalid or below absolute zero, follow the displayed error message and enter a valid temperature.

## Responsive Design

The interface is designed to remain usable across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile devices

CSS layout techniques and responsive styling are used to keep the content centered and prevent layout issues on smaller screens.

## Browser Compatibility

The project is intended for modern browsers such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## Future Improvements

* Real-time conversion while typing
* Temperature history
* Copy-to-clipboard functionality
* Dark mode
* More temperature units
* Keyboard shortcuts
* Improved animations and visual feedback

## Author

**Gaddam Susheel Kumar**

B.Tech Information Technology Student

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.
