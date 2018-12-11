import React from "react";

function SimpleText(props) {
  return (
    <table>
      <tr>
        <td style={{ padding: "5px", textAlign: "right" }}>{props.children}</td>
      </tr>
    </table>
  );
}

export default SimpleText;
