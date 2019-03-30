import React from 'react';
import ExerciseName from './exerciseName';

class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      initialExercises: this.props.exercises,
      filteredExercises: this.props.exercises,
    }
    this.filterExercises = this.filterExercises.bind(this);
  }

  filterExercises(event) {
    /*
      Adapted from:  
        https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
        https://codepen.io/mtclmn/pen/QyPVJp

        ToDo:  
          1.  implement a more robust search capability
    */
    let filtered = this.state.initialExercises;

    filtered = filtered.filter((item) => {
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1
    });

    this.setState({filteredExercises: filtered});
  }

  handleClick(exercise) {
    this.props.onClick(exercise);
    this.setState({activeId: exercise.id})
  }

  renderExercisesList(array) {
    const exerciseList = array.map(exercise => {
      return <ExerciseName 
                key={exercise.id}
                isActive={this.state.activeId === exercise.id ? 'active' : ''}
                name={exercise.name} 
                onClick={() => this.handleClick(exercise)}
              />
    });

    return exerciseList;
  }

  render() {
    return (
      <div>
        <div className="fixed_container">
          <div className="search_container">
            <input type="text" placeholder="Search" onChange={this.filterExercises}/>
          </div>
        </div>
        <div className="list_container">
          <div className="other">
            <ol>
              {this.renderExercisesList(this.state.filteredExercises)}
            </ol>
          </div>
        </div>
      </div>
    )
  };
}

export default ExerciseList;
