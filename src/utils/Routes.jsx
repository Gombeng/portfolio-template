import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { Navbar } from '../components';
import {
  About,
  Home,
  NotFound,
} from '../pages';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default Routes;