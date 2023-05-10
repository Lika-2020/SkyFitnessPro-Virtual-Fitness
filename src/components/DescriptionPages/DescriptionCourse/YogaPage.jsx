import './style.css';
import Card1 from '../../../images/1.svg';
import Card2 from '../../../images/2.svg';
import Card3 from '../../../images/3.svg';

function YogaPage() {
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
              Давно хотели попробовать йогу, но не решались начать.
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card2}
              alt="2"
            />
            <h3 className="foryou_div_description_point_text2">
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card3}
              alt="3"
            />
            <h3 className="foryou_div_description_point_text3">
              Ищете активность, полезную для тела и души.
            </h3>
          </div>
        </div>
        <div className="directions_div_description">
          <div className="directions_div_description_title">
            <h3 className="directions_description_title">Направления:</h3>
          </div>
          <div className="directions_div_description_list">
            <h3 className="directions_div_description_list_text">
              • Йога для новичков <br /> • Классическая йога <br /> •
              Йогатерапия
            </h3>
            <h3 className="directions_div_description_list_text">
              • Кундалини-йога <br /> • Хатха-йога <br /> • Аштанга-йога
            </h3>
          </div>
        </div>
        <div className="description_div">
          <h3 className="description_div_text">
            Благодаря комплексному воздействию упражнений происходит проработка
            всех групп мышц, тренировка суставов, улучшается циркуляция крови.
            Кроме того, упражнения дарят отличное настроение, заряжают бодростью
            и помогают противостоять стрессам.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default YogaPage;
