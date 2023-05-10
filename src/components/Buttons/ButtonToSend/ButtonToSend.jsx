import '../style.css';
import PropTypes from 'prop-types';


function ButtonToSend({ onClick }) {
  return (
    <div  role="presentation" className="wrapper__button" onClick={onClick}>
      <p className="text__button">Отправить</p>
    </div>
  );
}

ButtonToSend.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonToSend;
