import './style.css';
import Header from '../../components/DescriptionPages/LogoNameCourse/LogoNameCourse';
import DescriptionCourse from '../../components/DescriptionPages/DescriptionCourse/DanceFitnessPage';
import SubmitApplication from '../../components/DescriptionPages/SubmitApplication/SubmitApplication';

function YogaDescriptionPage() {
  return (
    <div className="body">
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
