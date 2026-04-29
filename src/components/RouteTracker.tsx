import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logActivity } from '../utils/logger';

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    logActivity(`Navigated to ${location.pathname}`);
  }, [location]);

  return null;
}
