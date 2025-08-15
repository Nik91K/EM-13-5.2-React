import Card from "../../components/Card";
import firstcardDate from '../../fixture/firstPage.json'
import LayoutPage from "../../layouts/page";
import type { CourseType } from '../../types/СourseType'
import './style.css'

const CoursesPage = () => {
  const courses: CourseType[] = firstcardDate

  return (
    <LayoutPage>
      <div className="courses-page">
      {courses.map((course) => (
        <Card key={course.id} title={course.title} buttonText={course.buttonName}>
          <ul>
            {course.list.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
      </div>
    </LayoutPage>
  )
}

export default CoursesPage