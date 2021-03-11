import React, { Suspense } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import usersRoutes from "../../routes/usersRoutes";
import Loader from "../loader/Loader"

const Main = () => (
  <main>
    <Suspense fallback={<Loader />}>
      <Switch>
        {usersRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </main>
);

export default Main;