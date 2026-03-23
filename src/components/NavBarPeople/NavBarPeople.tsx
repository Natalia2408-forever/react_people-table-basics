import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';

export const NavBarPeople: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to="/people"
      className={classNames('navbar-item', {
        'has-background-grey-lighter': pathname.startsWith('/people'),
      })}
    >
      People
    </Link>
  );
};
