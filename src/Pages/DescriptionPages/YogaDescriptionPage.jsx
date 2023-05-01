import './style.css';
import Header from '../../components/DescriptionPages/LogoNameCourse/LogoNameCourse';
import DescriptionCourse from '../../components/DescriptionPages/DescriptionCourse/DescriptionCourse';
import SubmitApplication from '../../components/DescriptionPages/SubmitApplication/SubmitApplication';

function YogaDescriptionPage() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <DescriptionCourse />
        <SubmitApplication />
      </div>
    </div>
  );
}
export default YogaDescriptionPage;
