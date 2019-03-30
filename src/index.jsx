import React from 'react';
import ReactDOM from 'react-dom';
import SeedData from './seed_data/seed.json';
import './app.scss';
import ExerciseList from './components/exerciseList';
import ExerciseDescription from './components/exerciseDescription';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeExercise: {},
    };
    /*
      Bind this function to this context, that will be called
      from the child/exerciseList component
    */
    this.setActiveExercise = this.setActiveExercise.bind(this);
  }

  sortArrayByName(array) {
    array.sort(function(a, b){
      if (a.name < b.name) { 
        return -1; 
      }
      if (a.name > b.name) { 
        return 1; 
      }
      return 0;
    })
    return array;
  }

  setActiveExercise(exerciseObject) {
    this.setState({activeExercise: exerciseObject});
  }

  renderDescription(){
    const obj = this.state.activeExercise

    if (Object.keys(obj).length === 0 && obj.constructor === Object) { 
      return (
        <h2>Click on an exercise in the left panel</h2>
      ) 
   } else { 
     return <ExerciseDescription activeExercise={this.state.activeExercise} showVideo={this.state.showVideo}/> 
   }
  }

  render() {
    const sortedArray = this.sortArrayByName(SeedData);

    return (
      <div className="column_container">
        <div className="left_column column">
          <ExerciseList 
            exercises={sortedArray} 
            activeExercise={this.state.activeExercise}
            onClick={this.setActiveExercise}

          />
        </div>
        <div className="right_column column">
          {this.renderDescription()}
        </div>
      </div>
    );
  }
};

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('exercise_app')
);