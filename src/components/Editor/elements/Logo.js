import React from "react";

function Logo(props) {
  return (
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      width="600px"
      style={{ borderCollapse: "collapse" }}
    >
      <tr>
        <td align="center">
          <img
            src="http://www.enmongroup.com/assets/images/logo-big.png"
            alt="Enmon Logo"
            height="50"
          />
        </td>
      </tr>
    </table>
  );
}

export default Logo;
