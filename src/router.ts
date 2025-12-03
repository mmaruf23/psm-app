import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './components/content/home';
import TargetPage from './components/content/target';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'before',
        Component: Home,
      },
      {
        path: 'target',
        Component: TargetPage,
      },
    ],
  },
]);

export default router;
