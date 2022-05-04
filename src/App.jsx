import Characters from './views/Characters';
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Characters />
      </Route>
    </Switch>
  );
}