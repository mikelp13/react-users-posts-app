import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UsersTable from "../../components/usersTable/UsersTable";
import { getUsersOperation } from "../../redux/users/usersOperations";
import { SectionStyled } from "./UsersPageStyled";

const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersOperation());
    // eslint-disable-next-line
  }, []);

  return (
    <SectionStyled>
      <div className="container">
        <UsersTable />
      </div>
    </SectionStyled>
  );
};

export default UsersPage;
