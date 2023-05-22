import './style.css';
import Svg from '../../../images/applicationsvg.svg';
import ButtonWrite from '../../Buttons/ButtonWrite/ButtonWrite';

function SubmitApplication(props) {
  return (
    <div className="SubmitApplication_div">
      <div className="SubmitApplication_main">
        <h2 className="SubmitApplication_text">
          Оставьте заявку на пробное занятие, мы свяжемся <br /> с вами, поможем
          с выбором направления и тренера, <br /> с которым тренировки принесут
          здоровье и радость!
        </h2>
        <ButtonWrite id={props.id} />
      </div>
      <img className="SubmitApplication_svg" src={Svg} alt="svg" />
    </div>
  );
}
export default SubmitApplication;
