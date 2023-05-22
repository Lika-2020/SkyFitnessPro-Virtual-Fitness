import './style.css';
import { getDatabase, ref, child, get, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { useRef, useEffect } from 'react';

function addCourseToUser(id) {
  const firebaseConfig = {
    databaseURL:
      'https://skyfitnesspro-virtual-fitness-default-rtdb.europe-west1.firebasedatabase.app/',
  };
  const appdb = initializeApp(firebaseConfig);
  const db = getDatabase(appdb);
  const refe = ref(db);
  let isSub = false;
  const uCourses = [];
  get(child(refe, 'users/courses'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log('333333333333333333333333');
        console.log(snapshot.val());
        if (snapshot.val().length >= 2) {
          snapshot.val().forEach((element) => {
            if (element[id] === '1') {
              isSub = true;
            }
            uCourses.push(element);
          });
        } else uCourses.push(snapshot.val());
        console.log(uCourses);
        if (!isSub) uCourses.push({ [id]: '1' });
        console.log(uCourses);
        set(ref(db, 'users/courses'), uCourses);
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function ButtonWrite(props) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      addCourseToUser(props.id);
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <div ref={ref} className="wrapper__button">
      <p className="text__button">Записаться на тренировку</p>
    </div>
  );
}

export default ButtonWrite;
