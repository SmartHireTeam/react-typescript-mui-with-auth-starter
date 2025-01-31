import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateLayout } from '../layout';
import { NotFoundView } from '../views';
import AboutView from '../views/About';
import DevView from '../views/Dev';
import WelcomeView from '../views/Welcome';
import JDManagement from '../views/DocumentsMgmt/JDManagement';
import ManageProfiles from '../views/DocumentsMgmt/ManageProfiles';

/**
 * List of routes available  for authenticated users
 * Also renders the "Private Layout" composition
 * @routes PrivateRoutes
 */
const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route
          // This fixes other tabs with unfinished auth flow
          path="auth/*"
          element={<Navigate to="/" replace />}
        />
        <Route path="about" element={<AboutView />} />
        {process.env.REACT_APP_DEBUG && <Route path="dev" element={<DevView />} />}
        <Route path="*" element={<NotFoundView />} />
        <Route path="jdmgmt" element={<JDManagement />} />
        <Route path="prpmgmt" element={<ManageProfiles />} />

        
           
        
      </Routes>
    </PrivateLayout>
  );
};

export default PrivateRoutes;
