import React from 'react';

const functions = {
  dispatchA : () => "test a",
  dispatchB : () => "test b",
}
const states = {
  dataA: "data a",
  dataB: "data b"
}
class Test extends React.Component {
  render() {
    <div>Test!!!!</div>
  }
}

function connect(mapStateToProps, mapDispatchToProps) {
  return WrappedComponent => {
    return class extends React.Component {
      render(){
        return (
          <WrappedComponent
            { ...mapStateToProps }
            { ...mapDispatchToProps }
          />
        )
      }
    }
  }
}

const NewTest = connect(states, functions)(Test);
console.log("NewTest: ", NewTest);