import './style.css';
import Header from '../../components/DescriptionPages/LogoNameCourse/LogoNameCourse';
import DescriptionCourse from '../../components/DescriptionPages/DescriptionCourse/DanceFitnessPage';
import SubmitApplication from '../../components/DescriptionPages/SubmitApplication/SubmitApplication';

function YogaDescriptionPage() {
  document.body.style = ' background-color: #fafafa;';
  return (
    <div className="courses_body">
      <div className="courses_wrapper">
        <div className="courses_container">
          <Header />
          <DescriptionCourse />
          <SubmitApplication id="6jxvC1" />
        </div>
      </div>
    </div>
  );
}
export default YogaDescriptionPage;
