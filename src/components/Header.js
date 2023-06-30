import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './styles/Header.css';
import { closeModal } from '../features/countries/countriesSlice';

const Header = () => {
  const { isOpen } = useSelector((store) => store.country);
  const dispatch = useDispatch();

  const handleClickBack = () => {
    dispatch(closeModal());
  };

  return (
    <nav>
      <button className="header-btn back" onClick={handleClickBack} type="button">
        <NavLink to="/">
          {isOpen ? 'Back' : '2015 Global'}
        </NavLink>
      </button>
      <ul>
        <li><button className="header-btn" type="button"><img className="header-icon" src="./mic.jpg" alt="MIC" /></button></li>
        <li><button className="header-btn" type="button"><img className="header-icon2" src="./setting.jpg" alt="SETTING" /></button></li>
      </ul>
    </nav>
  );
};

export default Header;
