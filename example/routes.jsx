import Layout from './layout';
import FormDesignerPage from './pages/formDesigner';
import FormViewerPage from './pages/formViewer';

const routes = [
  {
    component: Layout,
    routes: [
      {
        component: FormDesignerPage,
        path: '/',
        exact: true,
      },
      {
        component: FormDesignerPage,
        path: '/form-designer',
      },

      {
        component: FormViewerPage,
        path: '/form-viewer',
      },
    ],
  },
];

export default routes;
