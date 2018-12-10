import React from "react";

function HeadTitle(props) {
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
        <td style={{ paddingBottom: 0, margin: 0 }}>
          <h1 style={{ paddingBottom: "5px", margin: 0 }}>{props.children}</h1>
        </td>
      </tr>
    </table>
  );
}

export default HeadTitle;
