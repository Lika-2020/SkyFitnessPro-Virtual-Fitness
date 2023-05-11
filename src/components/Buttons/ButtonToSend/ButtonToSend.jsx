import '../style.css';
import PropTypes from 'prop-types';


function ButtonToSend({ onSubmit }) {
  return (
    <div  role="presentation" className="wrapper__button" onClick={onSubmit}>
      <p className="text__button">Отправить</p>
    </div>
  );
}

ButtonToSend.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonToSend;
