import React from "react";

export const Logo = props => {
  return (
    <table
      align="center"
      cellPadding="0"
      cellSpacing="0"
      width="600px"
      style={{ borderCollapse: "collapse" }}
    >
      <tbody>
        <tr>
          <td align="center">
            <img
              src="http://www.enmongroup.com/assets/images/logo-big.png"
              alt="Enmon Logo"
              height="50"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const Title = props => {
  return (
    <table
      align="center"
      cellPadding="0"
      cellSpacing="0"
      width="600px"
      style={{ borderCollapse: "collapse" }}
    >
      <tbody>
        <tr
          aling="center"
          style={{
            textAlign: "center",
            backgroundColor: "#0C4DA2",
            color: "white"
          }}
        >
          <td style={{ paddingBottom: 0, margin: 0 }}>
            <h1 style={{ paddingBottom: "5px", margin: 0 }}>
              {props.children}
            </h1>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const Subtitle = props => {
  return (
    <table
      align="center"
      cellPadding="0"
      cellSpacing="0"
      width="600px"
      style={{ borderCollapse: "collapse" }}
    >
      <tbody>
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
      </tbody>
    </table>
  );
};

export const HeroImg = props => {
  return (
    <table
      align="center"
      cellPadding="0"
      cellSpacing="0"
      width="600px"
      style={{ borderCollapse: "collapse" }}
    >
      <tr>
        <td>
          <img src={props.src} width="600px" />
        </td>
      </tr>
    </table>
  );
};
