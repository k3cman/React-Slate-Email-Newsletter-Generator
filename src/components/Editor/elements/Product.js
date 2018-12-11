import React from "react";

function Product(props) {
  return (
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      width="600px"
      style={{ borderCollapse: "collapse" }}
    >
      <tr>
        <td style={{ textAlign: "center", padding: "10px" }}>
          <img
            src="http://cms.enmongroup.com/images/items/quCyyEaRgC.jpg"
            alt=""
            width="280"
          />
        </td>
        <td style={{ textAlign: "center", padding: "10px" }}>
          <img
            src="http://cms.enmongroup.com/images/items/quCyyEaRgC.jpg"
            alt=""
            width="280"
          />
        </td>
      </tr>
      <tr style={{ textAlign: "center", padding: "0", margin: "0" }}>
        <td style={{ padding: "0", margin: "0" }}>
          <p style={{ width: "300px", margin: "0" }}>TreverkHome Charamel</p>
        </td>
        <td style={{ padding: "0", margin: "0" }}>
          <p style={{ width: "300px", margin: "0" }}>TreverkHome Beige</p>
        </td>
      </tr>
    </table>
  );
}

export default Product;
