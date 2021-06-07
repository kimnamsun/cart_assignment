import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from '@pages/Main';

const Routes = () => {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
};
export default Routes;
