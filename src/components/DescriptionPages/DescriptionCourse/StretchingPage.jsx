import './style.css';
import { useEffect, useState } from 'react';
import Card1 from '../../../images/1.svg';
import Card2 from '../../../images/2.svg';
import Card3 from '../../../images/3.svg';
import getContent from '../../../api/course_content';

function StretchingPage() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    await getContent().then((response) => {
      setCourse(response.courses.ab1c3f);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(course);
  if (!loading)
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
                {course.suitable[0]}
              </h3>
            </div>
            <div className="foryou_div_description_point">
              <img
                className="foryou_div_description_point_number"
                src={Card2}
                alt="2"
              />
              <h3 className="foryou_div_description_point_text2">
                {course.suitable[1]}
              </h3>
            </div>
            <div className="foryou_div_description_point">
              <img
                className="foryou_div_description_point_number"
                src={Card3}
                alt="3"
              />
              <h3 className="foryou_div_description_point_text3">
                {course.suitable[2]}
              </h3>
            </div>
          </div>
          <div className="directions_div_description">
            <div className="directions_div_description_title">
              <h3 className="directions_description_title">Направления:</h3>
            </div>
            <div className="directions_div_description_list">
              <h3 className="directions_div_description_list_text">
                • {course.directions[0]} <br /> • {course.directions[1]}
              </h3>
              <h3 className="directions_div_description_list_text">
                • {course.directions[2]} <br /> • {course.directions[3]}
              </h3>
            </div>
          </div>
          <div className="description_div">
            <h3 className="description_div_text">{course.description}</h3>
          </div>
        </div>
      </div>
    );
}

export default StretchingPage;
