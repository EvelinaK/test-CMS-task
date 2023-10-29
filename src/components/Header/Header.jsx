import React from 'react';
import { NavLink } from 'react-router-dom';
import tabs from '../../tabs.json';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  return (
    <div className={s.headerBox}>
      {tabs.map(({ id, path, title }) => (
        <NavLink
          key={id}
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to={`${path.split('.')[0]}`}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
