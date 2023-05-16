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
      setCourse(data.courses[' ab1c3f']);
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
              Хотите подтянуть тело, смоделировать мышечный корсет
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card2}
              alt="2"
            />
            <h3 className="foryou_div_description_point_text2">
              Улучшить осанку и координацию
            </h3>
          </div>
          <div className="foryou_div_description_point">
            <img
              className="foryou_div_description_point_number"
              src={Card3}
              alt="3"
            />
            <h3 className="foryou_div_description_point_text3">
              Улучшить кровообращение и обмен веществ
            </h3>
          </div>
        </div>
        <div className="directions_div_description">
          <div className="directions_div_description_title">
            <h3 className="directions_description_title">Направления:</h3>
          </div>
          <div className="directions_div_description_list">
            <h3 className="directions_div_description_list_text">
              • статический <br /> • динамический
            </h3>
            <h3 className="directions_div_description_list_text">
              • пассивный <br /> • активный
            </h3>
          </div>
        </div>
        <div className="description_div">
          <h3 className="description_div_text">
            Стретчинг в домашних условиях может использоваться для многих целей:
            Выступает в качестве гимнастики в период восстановления после травм;
            Входит в состав программы для похудения; Помогает развить гибкость и
            пластичность, при правильном подходе вы сядете на шпагат через
            несколько недель; Это эффективный способ расслабиться после трудного
            дня.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default StretchingPage;
