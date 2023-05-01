import './style.css';
import RadioButton from '../../images/radioButton.jpg'

function SelectWorkout() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="block">
          <div className="title">
            <span className="title-workout">Выберите тренировку</span>
          </div>
          <div className="buttons">
            <div className="button__workout">
              <div className='select'>
              <span className="title-lesson">Утренняя практика</span>
              <img src={RadioButton} alt="button" />
              </div>
              <span className="title-day">Йога на каждый день/1 день</span>
             
            </div>
            <div className="button__workout">
              <div className='select'>
              <span className="title-lesson">Красота и здоровье</span>
              <img src={RadioButton} alt="button" />
              </div>
              <span className="title-day">Йога на каждый день/2 день</span>
            </div>
            <div className="button__workout">
              
              <span className='not-selected__title'>Асаны стоя</span>
              <span className='not-selected__day'>Йога на каждый день/3 день</span>
            </div>
            <div className="button__workout">
              
              <span className='not-selected__title'>Растягиваем  мышцы бедра</span>
              <span className='not-selected__day'>Йога на каждый день/4 день</span>
            </div>
            <div className="button__workout">
              
              <span className='not-selected__title'> Гибкость спины</span>
              <span className='not-selected__day'>Йога на каждый день/5 день</span>
            </div>

            <div className="button__workout">
              
              <span className='not-selected__title'> Гибкость спины</span>
              <span className='not-selected__day'>Йога на каждый день/5 день</span>
            </div>

            <div className="button__workout">
              
              <span className='not-selected__title'> Гибкость спины</span>
              <span className='not-selected__day'>Йога на каждый день/5 день</span>
            </div>
            <div className="button__workout">
              
              <span className='not-selected__title'> Гибкость спины</span>
              <span className='not-selected__day'>Йога на каждый день/5 день</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectWorkout;
