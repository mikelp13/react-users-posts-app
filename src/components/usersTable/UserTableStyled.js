import styled from "styled-components";

export const TableContainer = styled.div`
  margin-bottom: 30px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color:#a5a5a5;
    text-transform:uppercase;
  }

  table {
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    border-spacing: 0;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  
  th {
    font-size: 16px;
    text-transform: uppercase;
    background: #00bcd5;
    color: #fff;
    padding: 10px 20px;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: #fff;
  }

  td {
    padding: 10px 20px;
    text-align: center;
    font-size: 18px;
    color: #a5a5a5;
    border-style: solid;
    border-width: 0 1px 0 0;
    border-color: #ccc;
  }

  th:last-child {
    border-right: none;
  }

  tr {
    background-color: #fff;
  }

  tr:nth-child(even) {
    background: #ebf3f9;
  }

  tr td:last-child {
    border-right: 1px solid #ccc;
  }
  tr td:first-child {
    border-left: 1px solid #ccc;
  }

  button {
    width: 65px;
    height: 30px;

  }
`;
