import React, { Component } from 'react';

export default class InstaFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldFeeds: [],
      newFeeds: [],
    };
    for (let index = 0; index < 20; index++) {
      this.state.oldFeeds = [...this.state.oldFeeds, 'Old feed goes here...'];
    }
  }

  getNewFeeds = () => {
    let updatedFeeds = [];
    for (let index = 0; index < 10; index++) {
      updatedFeeds = ['New feed goes here...', ...updatedFeeds];
    }

    this.setState(({ oldFeeds, newFeeds }) => ({
      oldFeeds: [...oldFeeds],
      newFeeds: [...newFeeds, ...updatedFeeds],
    }));
  };

  componentDidMount() {
    this.setState(({ oldFeeds, newFeeds }) => {
      return {
        oldFeeds: oldFeeds,
        newFeeds: newFeeds,
        root: document.getElementsByTagName('body')[0],
      };
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { newFeeds, root } = this.state;
    if (newFeeds.length > prevState.newFeeds.length) {
      return root.scrollHeight - root.scrollTop;
    }
    return null;
  }

  popupTimer = () => {
    setTimeout(() => {
      alert(
        'New feeds have been added in the top of the page without any scrolling!\n\nYou can scroll top and verify!!!'
      );
    }, 2000);
  };

  componentDidUpdate(prevProps, prevState, snapResponse) {
    const { root } = this.state;
    if (snapResponse) {
      root.scrollTop = root.scrollHeight - snapResponse;
      this.popupTimer();
    }
  }

  getFeedsDom = (feeds, color) => {
    return feeds.map((feed, index) => {
      return (
        <h3 key={index} style={{ color: color }}>
          {feed}
        </h3>
      );
    });
  };

  render() {
    const { oldFeeds, newFeeds } = this.state;
    const oldFeedsDom = this.getFeedsDom(oldFeeds, 'red');
    const newFeedsDom = this.getFeedsDom(newFeeds, 'green');

    return (
      <div>
        <h1>Insta New Feed - Demo</h1>
        <div>{newFeedsDom}</div>
        <div>{oldFeedsDom}</div>
        <button type="button" onClick={this.getNewFeeds}>
          Add new feeds in the top
        </button>
      </div>
    );
  }
}
