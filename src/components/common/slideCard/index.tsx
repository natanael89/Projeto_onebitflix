import Link from "next/link";
import { CourseType } from "../../../services/courseService";
import styles from "./styles.module.scss";


interface props {
  course: CourseType;
}

const SlideCard = ({course} : props) => {
   return (
     <>
        <Link href={`/course/${course.id}`}>
         <div className={styles.slide}>
            <picture>
                <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name}  className={styles.slideImg}/>
            </picture>
            <p className={styles.slideTitle}>{course.name}</p>
            <p className={styles.slideDescription}>{course.synopsis}</p>
         </div>
        </Link>
        
     </>
   );
};

export default SlideCard;