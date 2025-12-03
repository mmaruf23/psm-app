import { createBrowserRouter } from 'react-router';
import App from '@/App';
import ArchiveContent from '@/components/content/archive';
import TargetContent from '@/components/content/target';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: ArchiveContent,
      },
      {
        path: 'before',
        Component: ArchiveContent,
      },
      {
        path: 'target',
        Component: TargetContent,
      },
    ],
  },
]);

export default router;
