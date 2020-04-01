import React, { Component } from "react";

const ExerciseForm = ({ onChange, form, onSubmit }) => (
  <div className="container">
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          name="title"
          onChange={onChange}
          value={form.title}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          name="description"
          onChange={onChange}
          value={form.description}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Paste your URL image"
          name="img"
          onChange={onChange}
          value={form.img}
        />
      </div>
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Left Color"
            name="leftColor"
            onChange={onChange}
            value={form.leftColor}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Right Color"
            name="rightColor"
            onChange={onChange}
            value={form.rightColor}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-danger float-right"
        style={{
          marginTop: "10px"
        }}
      >
        Submit
      </button>
    </form>
  </div>
);
export default ExerciseForm;
