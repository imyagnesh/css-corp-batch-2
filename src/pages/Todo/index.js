import React, { Component } from 'react';
import './todoStyle.css';

export default class Todo extends Component {
  state = {};

  render() {
    return (
      <div className="bg-[#FAFAFA] h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Todo App</h1>
        <form className="flex justify-center my-2">
          <input type="text" />
          <button type="submit">Add Todo</button>
        </form>
        <div className="flex-1 overflow-auto">
          <div className="flex items-center m-2">
            <input type="checkbox" />
            <p className="flex-1 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              obcaecati.
            </p>
            <button>Delete</button>
          </div>
          <div className="flex items-center m-2">
            <input type="checkbox" />
            <p className="flex-1 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              obcaecati.
            </p>
            <button>Delete</button>
          </div>
          <div className="flex items-center m-2">
            <input type="checkbox" />
            <p className="flex-1 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              obcaecati.
            </p>
            <button>Delete</button>
          </div>
          <div className="flex items-center m-2">
            <input type="checkbox" />
            <p className="flex-1 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              obcaecati.
            </p>
            <button>Delete</button>
          </div>
          <div className="flex items-center m-2">
            <input type="checkbox" />
            <p className="flex-1 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              obcaecati.
            </p>
            <button>Delete</button>
          </div>
          <div className="flex items-center m-2">
            <input type="checkbox" />
            <p className="flex-1 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              obcaecati.
            </p>
            <button>Delete</button>
          </div>
        </div>
        <div className="flex">
          <button type="button" className="flex-1">
            All
          </button>
          <button type="button" className="flex-1">
            Pending
          </button>
          <button type="button" className="flex-1">
            Completed
          </button>
        </div>
      </div>
    );
  }
}
