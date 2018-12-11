import React, { Component, Fragment } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import initialValue from "./value.json";
import Logo from "./elements/Logo";
import HeadTitle from "./elements/HeadTitle";
import HeadSubTitle from "./elements/HeadSubTitle.js";
import MainImg from "./elements/MainImg.js";
import SimpleText from "./elements/SimpleText.js";
import Product from "./elements/Product.js";

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
        <div className="editor-wrapper">
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
        </div>
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
      case "logo":
        return <Logo {...attributes} />;
      case "head-title":
        return <HeadTitle {...attributes}>{children}</HeadTitle>;
      case "head-sub":
        return <HeadSubTitle {...attributes}>{children}</HeadSubTitle>;
      case "main-image":
        return <MainImg {...attributes} />;
      case "simple-text":
        return <SimpleText {...attributes}>{children}</SimpleText>;
      case "product-row":
        return <Product {...attributes} />;
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
