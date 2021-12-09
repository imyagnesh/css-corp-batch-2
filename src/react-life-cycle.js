import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class LifeCycleHook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [{ msg: 'constructor() is loaded', isStateChanged: false }],
    };
  }

  static getDerivedStateFromProps(props, { logs }) {
    const lastLog = logs[logs.length - 2];
    if (lastLog?.isgetDerivedCalled) return logs;
    return {
      logs: [
        ...logs,
        {
          msg: 'getDerivedStateFromProps() is loaded',
          isStateChanged: false,
          isgetDerivedCalled: true,
        },
      ],
    };
  }

  componentDidMount() {
    this.setState(({ logs }) => ({
      logs: [
        ...logs,
        { msg: 'componentDidMount() is loaded', isStateChanged: true },
      ],
    }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shallowCompareResponse = shallowCompare(this, nextProps, nextState);
    document.getElementById(
      'should-component-update'
    ).innerHTML = `${nextState.logs.length}. shouldComponentUpdate() is loaded (shallowCompare retuns ${shallowCompareResponse})`;
    return shallowCompareResponse;
  }

  render() {
    const { logs } = this.state;
    const lastLog = logs[logs.length - 1];
    if (lastLog.isStateChanged || lastLog.isgetDerivedCalled) {
      this.setState(({ logs }) => ({
        logs: [
          ...logs,
          {
            msg: 'render() is loaded',
            isStateChanged: false,
          },
        ],
      }));
    }

    const list = logs.map((log, index) => {
      const not = log.isStateChanged ? '' : 'not ';
      const color = log.isStateChanged ? 'red' : 'green';
      return (
        <h3 key={index}>
          {index + 1}. {log.msg}{' '}
          <span style={{ color: color }}>(state is {not}updated)</span>
        </h3>
      );
    });

    return (
      <div>
        <h1>React LifeCycle Component</h1>
        {list}
        <h3 id="should-component-update"></h3>
        <hr />
      </div>
    );
  }
}
