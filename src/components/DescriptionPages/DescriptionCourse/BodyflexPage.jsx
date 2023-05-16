import './style.css';
import { useEffect, useState } from 'react';
import Card1 from '../../../images/1.svg';
import Card2 from '../../../images/2.svg';
import Card3 from '../../../images/3.svg';
import getContent from '../../../api/course_content';

function StretchingPage() {
  const [course, setCourse] = useState([]);

  const fetchData = () => {
    getContent().then((data) => {
      setCourse(data.courses['TBzG9e ']);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(course);
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
              Хотите укрепить легкие и снизить вероятность заболеваний
              дыхательной системы
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card2}
              alt="2"
            />
            <h3 className="foryou_div_description_point_text2">
              Улучшить пищеварение
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card3}
              alt="3"
            />
            <h3 className="foryou_div_description_point_text3">
              Ускорить метаболизм
            </h3>
          </div>
        </div>
        <div className="directions_div_description">
          <div className="directions_div_description_title">
            <h3 className="directions_description_title">Направления:</h3>
          </div>
          <div className="directions_div_description_list">
            <h3 className="directions_div_description_list_text">
              • базовый <br /> • продвинутый
            </h3>
          </div>
        </div>
        <div className="description_div">
          <h3 className="description_div_text">
            Весь смысл бодифлекса сводится к правильному дыханию, благодаря
            которому упражнения на растяжку и укрепление мышц приобретают свою
            эффективность. При выдыхании воздуха и задержке дыхания организм на
            короткое время испытывает кислородное голодание, в крови
            накапливается углекислый газ, что приводит к запуску некоторых
            физиологических процессов, типичных для ситуации «бей или беги». То
            есть, организм приходит в состояние повышенной готовности и способен
            выполнять быстрые и энергичные действия.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default StretchingPage;
