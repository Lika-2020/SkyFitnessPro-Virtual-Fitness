import './style.css';
import { useEffect, useState } from 'react';

import Logo from '../../images/logo.png';
import Avatar from '../../images/avatar.png';
import ButtonChangeLogin from '../../components/Buttons/ButtonChangeLogin/ButtonChangeLogin';
import ButtonChangePassword from '../../components/Buttons/ButtonChangePassword/ButtonChangePassword';
import ButtonGo from '../../components/Buttons/ButtonGo/ButtonGo';
import SelectWorkout from '../SelectWorkout/SelectWorkout';

async function getCoursesContent() {
  try {
    const response = await fetch(
      'https://skyfitnesspro-virtual-fitness-default-rtdb.europe-west1.firebasedatabase.app/.json'
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // ✅ call response.json() here
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

function MyProfilePage() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    await getCoursesContent().then((response) => {
      setCourse(response);
      setLoading(false);
    });
  };


const handleCourseSelect = (courseId) => {
  setSelectedCourse(courseId);
  NavigationPreloadManager(`/select-workouts/${courseId}`);
}

  useEffect(() => {
    fetchData();
  }, []);
  if (!loading) console.log(course);
  if (!loading)



    return (
      <div className="container-myProf">
        <div className="header-myProf">
          <img src={Logo} alt="Logo" />
          <div className="user-myProf">
            <img src={Avatar} alt="Avatar" className="user__avatar" />
            <select name="" id="">
              <option value="Сергей">Сергей</option>
            </select>
          </div>
        </div>
        <div className="user__profile">
          <h1 className="title-myProf">Мой профиль</h1>
          <p className="user__login user__info">Логин: sergey.petrov96</p>
          <p className="user__password user__info">Пароль: 4fkhdj880d</p>
          <div className="user__buttons">
            <ButtonChangeLogin />
            <ButtonChangePassword />
          </div>
        </div>
        <div className="my__courses">
          <h1 className="title-myProf">Мои курсы</h1>

          <div className="courses__cards">
            {course.users.courses.map((item) => {
              console.log(Object.getOwnPropertyNames(item)[0]);
              let card = '';
              switch (Object.getOwnPropertyNames(item)[0]) {
                case 'ab1c3f':
                  card = 'card-2';
                  break;
                case '6jxvC1':
                  card = 'card-4';
                  break;
                case 'TBzG9e ':
                  card = 'card-1';
                  break;
                case 'X2g8dk':
                  card = 'card-3';
                  break;
                case 'y1kT5D':
                  card = 'card-5';
                  break;
                default:
                  console.log('error');
              }
              console.log(course.courses[item]);
              let coursename =
                course.courses[Object.getOwnPropertyNames(item)[0]].name;
              console.log(coursename);
              if (coursename == null) {
                coursename =
                  course.courses[Object.getOwnPropertyNames(item)[0]]['name '];
              }
              return (
                <div className={`courses__card ${card}`}>
                  <p className="card__text" />
                  <div className="card__button">
                    <ButtonGo onClick={handleCourseSelect} />
                  </div>
                </div>
              );
            })}
          </div>
          {selectedCourse &&  <SelectWorkout courseId={selectedCourse} course={course} />}
        </div>
      </div>
    );
}

export default MyProfilePage;
