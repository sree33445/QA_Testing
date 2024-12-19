'use client'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) return null; // Optionally, show a loading spinner

  return <>{children}</>;
};

export default ProtectedRoute;
