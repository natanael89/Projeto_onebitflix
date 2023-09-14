import { CourseType } from "../../../services/courseService";
import styles from "./styles.module.scss";


interface props {
  course: CourseType;
}

const SlideCard = ({course} : props) => {
   return (
     <>
        <div className={styles.slide}>
            <picture>
                <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name}  className={styles.slideImg}/>
            </picture>
            <p className={styles.slideTitle}>{course.name}</p>
            <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
     </>
   );
};

export default SlideCard;