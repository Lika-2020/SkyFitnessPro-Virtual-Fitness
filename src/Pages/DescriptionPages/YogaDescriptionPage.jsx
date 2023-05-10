import './style.css';
import Header from '../../components/DescriptionPages/LogoNameCourse/LogoNameCourse';
import DescriptionCourse from '../../components/DescriptionPages/DescriptionCourse/YogaPage';
import SubmitApplication from '../../components/DescriptionPages/SubmitApplication/SubmitApplication';

function YogaDescriptionPage() {
  return (
    <div className="body_courses">
      <div className="wrapper">
        <div className="courses_container">
          <Header />
          <DescriptionCourse />
          <SubmitApplication />
        </div>
      </div>
    </div>
  );
}
export default YogaDescriptionPage;
