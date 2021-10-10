import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { Book } from 'pages/Book';
import { NotFound } from 'pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book/:id" component={Book} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
