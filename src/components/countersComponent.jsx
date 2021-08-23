//render a list of a counters
import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleDelete = counterId => {
    console.log("Delete Event Handler Called" + counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters]; //spread operator, clones the counters array, exactly same objects
    //counters[0].value++; //this would directly modify the state, which is bad!!
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //so clone the one you are modifying
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn-primary btn-sm btn-m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
