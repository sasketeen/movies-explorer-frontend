import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '@/contexts/currentUserContext';
/**
 * Компонент защищенного роута
 * @param {*} Component - компонент, который необходимо отрисовать, если выполнилось условие
 * @returns
 */
export default function ProtectedRoute ({ element: Component, ...props }) {
  const { isUserSignIn } = useContext(CurrentUserContext);

  return isUserSignIn
    ? (<Component {...props} />)
    : (<Navigate to="/" replace />);
};
