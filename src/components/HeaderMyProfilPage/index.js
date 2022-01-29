import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import './style.scss';

const HeaderMyProfilPage = () => (
  <nav className="headerMyProfilPage">
    <ul className="headerMyProfilPage-list">
      <NavLink className="headerMyProfilPage-link" activeClassName="headerMyProfilPage-link--active" exact to="/mes-informations">
        <li className="headerMyProfilPage-list-item">
          <CreateIcon />
          Mes informations
        </li>
      </NavLink>
      <NavLink className="headerMyProfilPage-link" activeClassName="headerMyProfilPage-link--active" exact to="/ma-famille">
        <li className="headerMyProfilPage-list-item">
          <PeopleOutlinedIcon />
          Ma famille
        </li>
      </NavLink>
      <NavLink className="headerMyProfilPage-link" activeClassName="headerMyProfilPage-link--active" exact to="/mes-sorties">
        <li className="headerMyProfilPage-list-item">
          <DateRangeIcon />
          Mes sorties
        </li>
      </NavLink>
    </ul>
  </nav>
);

HeaderMyProfilPage.propTypes = {

};

export default HeaderMyProfilPage;
