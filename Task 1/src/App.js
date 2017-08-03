import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m: 10,
      n: 3,
      x: 20,
      c: 6,
    }
    this.handleMInputTextChange = this.handleMInputTextChange.bind(this);
    this.handleNInputTextChange = this.handleNInputTextChange.bind(this);
    this.handleXInputTextChange = this.handleXInputTextChange.bind(this);
    this.handleCInputTextChange = this.handleCInputTextChange.bind(this);
  }

  handleMInputTextChange(input) {
    this.setState({
      m: input.target.value,
    });
  }

  handleNInputTextChange(input) {
    this.setState({
      n: input.target.value,
    });
  }

  handleXInputTextChange(input) {
    this.setState({
      x: input.target.value,
    });
  }

  handleCInputTextChange(input) {
    this.setState({
      c: input.target.value,
    });
  }

  getMinServersCount2(m, n, x, c){
    let nM = parseInt(m);
    let nN = parseInt(n);
    let nX = parseInt(x);
    let nC = parseInt(c);

    if (nM && nN && nX && nC) {
      const pF = 0.01;

      let ipF = 1 - pF;
      let p = nX / 100;
      let ip = 1 - p;

      if (p >= 1) {
        return 'Infinity';
      }

      let pA = Math.ceil((ip**nC)*100)/100; //All convertings successful
      let ipA = (1 - pA).toFixed(2); //All conversions not! successful

      let cN = Math.ceil(Math.log(pF) / Math.log(ipA));
      return Math.ceil((cN * nN) / nM);
    }

    return 'Bad params'
  }

  render() {
    let minmalServersCount = this.getMinServersCount2(
      this.state.m,
      this.state.n,
      this.state.x,
      this.state.c
    );

    return (
      <div>
        <div>
          <label>
            m: <input placeholder="Input m here..." value={this.state.m} onClick={this.cleanInput} onChange={this.handleMInputTextChange} /> h
          </label>
        </div>
        <div>
          <label>
            n: <input placeholder="Input n here..." value={this.state.n} onChange={this.handleNInputTextChange} /> h
          </label>
        </div>
        <div>
          <label>
            x: <input placeholder="Input x here..." value={this.state.x} onChange={this.handleXInputTextChange} /> %
          </label>
        </div>
        <div>
          <label>
            c: <input placeholder="Input c here..." value={this.state.c} onChange={this.handleCInputTextChange} /> f
          </label>
        </div>
        <div>
          {minmalServersCount} servers needed.
        </div>
      </div>
    );
  }
}

export default App;
