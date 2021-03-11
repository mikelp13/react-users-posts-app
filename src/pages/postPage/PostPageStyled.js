import styled from "styled-components";

export const ListStyled = styled.ul`
  margin: 20px 0;

  .commentsItem {
    padding: 30px;
    padding-bottom: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .commentsItem:not(:last-child) {
    margin-bottom: 30px;
  }

  .commentsId {
    text-align: end;
  }

  .commentsId,
  .commentsName,
  .commentsEmail,
  .commentsBody {
    margin-bottom: 10px;
  }

  .commentsBody {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }

  .commentsBtn {
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;

    &:focus .editIcon,
    &:hover .editIcon {
      fill: #024f94;
    }
    &:focus .deleteIcon,
    &:hover .deleteIcon {
      fill: #f23942;
      transform: scale(1.15);
    }
  }

  .editIcon,
  .deleteIcon {
    fill: #7c8181;
  }
`;

export const RedirectStyled = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;
