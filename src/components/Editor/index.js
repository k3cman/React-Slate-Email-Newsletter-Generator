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
      case "table":
        return (
          <table
            align="center"
            cellPadding="0"
            cellspacing="0"
            width="600px"
            style={{ borderCollapse: "collapse" }}
            {...attributes}
          >
            <tbody>{children}</tbody>
          </table>
        );
      case "table-row":
        return <tr>{children}</tr>;
      case "table-data":
        return (
          <td style={{ textAlign: "center", padding: "10px" }}>{children}</td>
        );
      case "product-image": {
        const src = node.data.get("src");
        const style = node.data.get("style");
        return <img src={src} style={{ style }} alt="" width="280" />;
      }
      case "product-title":
        return <p style={{ width: "300px", margin: "0" }}>{children}</p>;
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
        return <strong {...attributes}>{children}</strong>;
      default:
        return next();
    }
  };
}
