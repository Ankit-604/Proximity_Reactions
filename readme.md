# Proximity Reactions - Interactive Light Effect

![Proximity Reactions Preview](ProximityHeads.png)

An interactive web experience where physics-based balls react to cursor proximity, creating dynamic shadows and reflections.

## Features

- **Physics-based interactions** - Balls move away from cursor based on proximity
- **Dynamic lighting** - Cursor acts as a light source influencing the scene
- **Real-time shadows** - Objects cast dynamic shadows based on light position
- **Reflective surfaces** - Balls have realistic reflections that change with light angle
- **Pure CSS solution** - Minimal JavaScript with advanced CSS doing the heavy lifting

## How It Works

The effect uses trigonometric calculations to determine each ball's distance from the cursor. CSS variables and 3D transforms then position the balls and their shadows in real-time, creating the illusion of physics-based interactions.

## Technologies Used

- HTML5
- CSS3 (Variables, 3D Transforms, Radial Gradients, calc() function)
- JavaScript (Cursor position tracking)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ankit-604/Proximity_Reactions.git
Open the project:

bash
cd Proximity_Reactions
Launch the application:

Open index.html in your web browser

Move your cursor around the screen to interact with the effect

Customization
Adjust these CSS variables in styles.css to modify the effect:

css
--ball-size: 42;        /* Controls ball size */
--impect-radius: 192;   /* Controls effect radius */
Browser Support
The effect works best in modern browsers that support CSS variables and 3D transforms:

Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Move your cursor around to interact with the physics-based balls. The light source follows your cursor, creating dynamic shadows and reflections.

Created with modern CSS techniques | Move your cursor to interact with the effect
