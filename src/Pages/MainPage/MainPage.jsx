import './style.css';

import Header from '../../components/Main/Header/Header';
import Title from '../../components/Main/TitleBlock/TitleBlock';
import TitleBlockCourses from '../../components/Main/TitleBlockCourses/TitleBlockCourses';
import Footer from '../../components/Main/Footer/Footer';

function MainPage() {
  document.body.style = 'background-color: #271a58;';
  return (
    <div className="main_body">
      <div className="main_wrapper">
        <div className="main_container">
          <Header />
          <Title />
          <TitleBlockCourses />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default MainPage;
