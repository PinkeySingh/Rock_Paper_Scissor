# Rock_Paper_Scissor
Rock-Paper-Scissors game where a user competes against the computer. It dynamically updates the UI based on user input and game logic.
This JavaScript code implements a simple Rock-Paper-Scissors game that allows a user to play against a computer. It interacts with HTML elements and dynamically updates the game state based on user interactions. Below is a breakdown of its functionality:

1. Selecting DOM Elements:
The script first selects essential HTML elements using document.querySelector() and document.querySelectorAll(), including:

.container (game container)
.user_result img (user's choice display)
.cpu_result img (computer's choice display)
.result (displays the winner)
.opt_img (all selectable images for user input)
2. Handling User Click Events:
An event listener is added to each opt_img (rock, paper, or scissors), triggering the game logic upon a click.

When a user clicks an option, the clicked image is given an "active" class, and others are deactivated.
Both user and CPU images are temporarily set to "rock.png" to indicate a waiting state.
The result text changes to "Wait...", creating a suspense effect.
3. Simulating the Game Mechanics:
A timeout of 2.5 seconds (setTimeout()) is used to simulate the computer's move.

The user's selected image is displayed.
The computer's choice is randomly selected from an array of options (["rock.png", "paper.png", "scissor.png"]).
A corresponding choice value ("R", "P", or "S") is assigned for both user and CPU.
4. Determining the Winner:
A dictionary (outcomes) is used to map possible results:

"RR", "PP", "SS" → Draw
"RP", "PS", "SR" → CPU wins
"RS", "PR", "SP" → User wins
The winner is displayed dynamically based on the user and CPU choices.

5. Final Display:
After the timeout, the game container animation stops, and the final result (Winner or Draw) is shown.

This code efficiently integrates DOM manipulation, event handling, randomness, and logic to create an interactive Rock-Paper-Scissors game. 🚀


Description of the CSS Code
This CSS code styles a Rock-Paper-Scissors game interface, ensuring a visually appealing and interactive experience. It includes styling for layout, animations, and game states.

1. Styling the Page Layout
The body is set to take full viewport height (100vh) and is centered using Flexbox (display: flex, align-items: center, justify-content: center).
The background color is a light shade (#e6e9f1) to provide contrast against the game elements.
2. Styling the Game Container
The .container holds the game elements and has:
Padding: 2rem 7rem for spacing.
Rounded corners: border-radius: 14px.
White background (background: #fff) for clarity.
Shadow effect (box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1)) to give a floating appearance.
3. Result Image Styling
.result_image aligns the user and CPU images horizontally with a column-gap: 7rem for spacing.
.result_image img sets the image width to 100px.
.user_result img and .cpu_result img apply rotations:
.user_result img: Full 360-degree rotation.
.cpu_result img: 360-degree rotation with an additional Y-axis flip (rotateY(180deg)) for differentiation.
4. Game Animations
When the game starts (.container.start class is applied):
.user_result img and .cpu_result img shake using CSS animations:
userShake: Rotates the user's choice 10 degrees back and forth.
cpuShake: Rotates the CPU’s choice -10 degrees back and forth.
These animations repeat infinitely (animation: 0.7s ease infinite) until the game result is determined.
5. Result Display Styling
.result:
Centered text (text-align: center).
Font size: 2rem for emphasis.
Color: #7d2f7d (purple shade).
Margin-top: 1.5rem for spacing.
6. Styling Options (Rock, Paper, Scissors)
.options:
Flexbox layout (display: flex).
Spacing adjustments (margin-top: 2.5rem).
Centered items (align-items: center, justify-content: space-between).
.opt_img:
Column layout for text and images.
Reduced opacity (0.6) for inactive options.
Pointer cursor and opacity transition for hover effects.
.opt_img:hover: Increases opacity to 1 for visual feedback.
.opt_img.active: Ensures selected option remains fully visible.
7. Disabling Clicks During Game
.container.start .options:
Prevents clicking (pointer-events: none) when the game is processing.
8. Text Styling in Options
.options p:
Purple color (#7d2f7d).
Font size: 1.25rem.
Pointer-events disabled (prevents unwanted interactions).
