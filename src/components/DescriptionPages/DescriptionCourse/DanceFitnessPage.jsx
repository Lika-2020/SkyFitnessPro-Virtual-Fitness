import './style.css';
import Card1 from '../../../images/1.svg';
import Card2 from '../../../images/2.svg';
import Card3 from '../../../images/3.svg';

function DanceFitnessPage() {
  return (
    <div className="about_div">
      <div className="foryou_div">
        <div className="foryou_div_title">
          <h2 className="foryou_title">Подойдет для вас, если:</h2>
        </div>
        <div className="foryou_div_description">
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card1}
              alt="1"
            />
            <h3 className="foryou_div_description_point_text1">
              Хотите укрепить мышцы, но тренировки в тренажерном зале для вас
              скучные и однообразные
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card2}
              alt="2"
            />
            <h3 className="foryou_div_description_point_text2">
              Хотите сбросить лишний вес, но нет желания мучать себя диетами
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card3}
              alt="3"
            />
            <h3 className="foryou_div_description_point_text3">
              Любите танцы и хотите совместить приятное с полезным
            </h3>
          </div>
        </div>
        <div className="directions_div_description">
          <div className="directions_div_description_title">
            <h3 className="directions_description_title">Направления:</h3>
          </div>
          <div className="directions_div_description_list">
            <h3 className="directions_div_description_list_text">
              • Зумба <br /> • Dance-mix <br /> • Caribbean-mix
            </h3>
          </div>
        </div>
        <div className="description_div">
          <h3 className="description_div_text">
            Фитнес и танцы – что между ними общего? А то, что они могут
            великолепно сочетаться и оказывать просто восхитительный эффект на
            ваше тело! Объединение хореографии и аэробики – это необычно и
            интересно, именно так родился танцевальный фитнес, которым вы теперь
            можете заниматься дома. Достичь отличной формы и при этом получить
            удовольствие вам поможет видео для похудения, которое мы
            представляем на этой странице – делайте упражнения, танцуйте и
            чувствуйте, как ваше тело меняется в лучшую сторону!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DanceFitnessPage;
