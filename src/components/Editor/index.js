import React, { Component, Fragment } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import initialValue from "./value.json";
import { Logo, Title, Subtitle } from "./blocks";
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
      case "title":
        return <Title {...attributes}>{children}</Title>;
      case "subtitle":
        return <Subtitle {...attributes}>{children}</Subtitle>;
      case "hero-img": {
        const src = node.data.get("src");
        return <img {...attributes} src={src} width="600px" />;
      }
      case "product-name":
        return <p style={{ textAlign: "center" }}>{children}</p>;
      case "product-row":
        return <Product {...attributes} />;
      case "table":
        return (
          <table
            align="center"
            cellPadding="0"
            cellSpacing="0"
            width="600px"
            style={{ borderCollapse: "collapse" }}
            {...attributes}
          >
            <tbody>{children}</tbody>
          </table>
        );
      case "table-border-t":
        return (
          <table
            align="center"
            cellPadding="0"
            cellSpacing="0"
            width="600px"
            style={{
              borderCollapse: "collapse",
              borderTop: "1px solid #acacac",
              paddinTop: "20px",
              marginTop: "30px",
              textAlign: "center"
            }}
            {...attributes}
          >
            <tbody>{children}</tbody>
          </table>
        );
      case "table-row":
        return <tr>{children}</tr>;
      case "table-data":
        return <td style={{ textAlign: "center" }}>{children}</td>;
      case "product-image": {
        const src = node.data.get("src");
        const style = node.data.get("style");
        return (
          <img {...attributes} src={src} style={{ style }} alt="" width="280" />
        );
      }
      case "icon-wrapper": {
        return <td style={{ width: "120px" }}>{children}</td>;
      }
      case "icon": {
        const src = node.data.get("src");
        const text = node.data.get("text");
        return (
          <Fragment>
            <img
              {...attributes}
              style={{ paddingTop: "10px" }}
              src={src}
              height="30px"
            />
            <br />
            {text}
          </Fragment>
        );
      }
      case "h1-icon":
        return (
          <h1 style={{ padding: "10px 0 0 0", margin: "0" }} {...attributes}>
            {children}
          </h1>
        );
      case "p1-icon":
        return (
          <p style={{ padding: "0", margin: "0" }} {...attributes}>
            {children}
          </p>
        );

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
