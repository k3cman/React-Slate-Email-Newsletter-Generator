import React from "react";

function HeadSubTitle(props) {
  return (
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      width="600px"
      style={{ borderCollapse: "collapse" }}
    >
      <tr
        aling="center"
        style={{
          textAlign: "center",
          backgroundColor: "#0C4DA2",
          color: "white"
        }}
      >
        <td style={{ paddingBottom: "5px", fontSize: "0.8em" }}>
          {props.children}
        </td>
      </tr>
    </table>
  );
}

export default HeadSubTitle;
