# Tom's Futher React Practice using seed data:
A simple App using React and seed data

## Deploy
  - Live @:  https://tomgalpin.github.io/exercise-react-practice-app/
  - From:  https://github.com/gitname/react-gh-pages

## Areas of Improvement:
1. Add testing
2. Make Responsive
3. Add more robust search capabilities
4. Fade in and out video onload and onchange of source url.

## Guidelines

The included data file `exercises.json` contains a subset of our database and its fields — an array of hashes containing exercise information.

Your job is to create a single-page application that must provide:

1. A pane on the left that allows you to browse all of the available exercises as a list of exercise names.
2. A way to highlight and select an exercise from the left pane and see the description and video of the selected exercise in a detail pane on the right.
3. A sticky pane at the top of the left pane that provides a way to live-filter the exercise list by name by way of text input.

## The Data Set

Each hash in the array has the following fields:
  - `id` **REQUIRED** The exercise id
  - `name` **REQUIRED** The name of the exercise
  - `description` A detailed description of the exercise
  - `muscle_groups` Comma-separated list of muscle groups (e.g. `Shoulders,Traps`)
  - `equipment_required` Comma-separated list of equipment required if any (e.g.`Dumbells`)
  - `movement_patterns` The type of movements associated with this (`Lower Pull`)
  - `synonyms` Alternate names for the exercise
  - `side` The side the movement is on if any (i.e. on your `left_leg` or `right_side`)
  - `is_alternating` Boolean value of whether the exercises calls for you to alternate movement (i.e. lift a dumbbell with your left arm, followed by your right arm).
  - `video` Hash of video of movement which contains:
  - `is_flipped` Whether the video needs to be flipped to show the correct side
  - `url` URL of video
  - `audio` Hash of audio of movement which contains:
  - `url` URL of name of audio

Fields that are not required may contain `null` values.

## Optional

If you want an extra challenge or find yourself with additional time, you can extend this project any of the following ways:

1. Additional filters based off of different fields in the exercise hash, as appropriate.
2. A slick display for more of the details of a given exercise.
3. A way to respond to a query string in the URL and automatically select that exercise and display its details.
4. A responsive solution.

## Structure
    .
    ├── /public 
    │     └── favicon.ico
    │     └── index.html
    │     └── manifest.json
    ├── /src     
    │     ├── /components
    │     │     ├── exerciseDescription.jsx
    │     │     ├── exerciseList.jsx
    │     │     ├── exerciseName.jsx
    │     │     └── video.jsx
    │     ├── /seed_data => Exercise Seed Data                    
    │     ├── /styles                    
    │     │     ├── normalize.scss 
    │     │     ├── normalize.scss
    │     │     ├── variables.scss   
    │     │     ├── mixins.scss
    │     │     ├── left-column.scss
    │     │     ├── right-column.scss 
    │     │     └── video.scss
    │     ├── app.scss
    │     └── index.jsx
    └── README.md


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
