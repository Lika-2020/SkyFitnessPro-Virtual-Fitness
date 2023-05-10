import '../style.css';
import PropTypes from 'prop-types';

function ButtonProgress({ onClick }) {
  return (
    <div role="presentation" className="wrapper__button" onClick={onClick}>
      <p  className="text__button">
        Заполнить свой прогресс
      </p>
    </div>
  );
}

ButtonProgress.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonProgress;
