import './style.css';
import Header from '../../components/Main/Header/Header';
import Title from '../../components/Main/TitleBlock/TitleBlock';
import TitleBlockCourses from '../../components/Main/TitleBlockCourses/TitleBlockCourses';
import Footer from '../../components/Main/Footer/Footer';

function MainPage() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Title />
        <TitleBlockCourses />
        <Footer />
      </div>
    </div>
  );
}
export default MainPage;
