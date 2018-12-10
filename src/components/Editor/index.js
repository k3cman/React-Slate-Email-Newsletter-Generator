import React, { Component, Fragment } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import initialValue from "./value.json";

const DEFAULT_DONE = "paragraph";

export default class EditorMain extends Component {
  state = {
    value: Value.fromJSON(initialValue)
  };
  ref = editor => {
    this.editor = editor;
  };
  onChange = ({ value }) => {
    this.setState({ value });
  };
  hasMark = type => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type == type);
  };
  hasBlock = type => {
    const { value } = this.state;
    return value.blocks.some(node => node.type == type);
  };
  render() {
    return (
      <Fragment>
        <Editor
          className="editor"
          spellCheck={false}
          ref={this.ref}
          autoFocus
          placeholder="Enter some rich text"
          value={this.state.value}
          onChange={this.onChange}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
        <div className="toolbar">
          <ul>
            <li>IC</li>
            <li>IC</li>
            <li>IC</li>
            <li>IC</li>
            <li>IC</li>
          </ul>
        </div>
      </Fragment>
    );
  }
  renderNode = (props, editor, next) => {
    const { attributes, children, node } = props;
    switch (node.type) {
      case "headnig-one":
        return <h1 {...attributes}>{children}</h1>;
      default:
        return next();
    }
  };
  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;
    switch (mark.type) {
      case "bold":
        return <stron {...attributes}>{children}</stron>;
      default:
        return next();
    }
  };
}
