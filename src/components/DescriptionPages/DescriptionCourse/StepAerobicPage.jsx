import './style.css';
import Card1 from '../../../images/1.svg';
import Card2 from '../../../images/2.svg';
import Card3 from '../../../images/3.svg';

function StepAerobicPage() {
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
              Хотите укрепить дыхательную и сердечно-сосудистой системы
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card2}
              alt="2"
            />
            <h3 className="foryou_div_description_point_text2">
              Быстрый сбросить лишние килограммы
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card3}
              alt="3"
            />
            <h3 className="foryou_div_description_point_text3">
              Улучшить настроение, повысить жизненный тонус
            </h3>
          </div>
        </div>
        <div className="directions_div_description">
          <div className="directions_div_description_title">
            <h3 className="directions_description_title">Направления:</h3>
          </div>
          <div className="directions_div_description_list">
            <h3 className="directions_div_description_list_text">
              • Для начинающих <br /> • Для похудения <br /> • Для детей
            </h3>
          </div>
        </div>
        <div className="description_div">
          <h3 className="description_div_text">
            Занятия степ-аэробикой состоят из комплексов в виде различного
            сочетания шагов, выполняемые под музыку с довольно высоким темпом.
            Каждое занятие длится от 30 до 50 минут в достаточно высоком темпе
            без остановок на отдых – для передышки используются переходы на
            простые шаги и наиболее простые упражнения. Такой режим тренировок
            приводит к эффективному сжиганию калорий, укреплению суставов и
            общему улучшению состояния здоровья, что и стало основой высокой
            популярности нового направления.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default StepAerobicPage;
