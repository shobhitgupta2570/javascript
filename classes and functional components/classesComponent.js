import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    // Component did mount logic
  }

  componentDidUpdate(prevProps, prevState) {
    // Component did update logic
  }

  componentWillUnmount() {
    // Component will unmount logic
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    );
  }
}


import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Component did mount logic
    return () => {
      // Component will unmount logic
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  useEffect(() => {
    // Component did update logic
  }, [count]); // Runs every time `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
