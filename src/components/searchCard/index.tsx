import { CourseType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import Link from "next/link";


interface props {
    course: CourseType;
}

const SearchCard = ({course}: props) => {
    return (
        <>
          <Link className={styles.searchCardLink} href={`/course/${course.id}`}>
            <div className={styles.searchCard}>
                <picture>
                    <img 
                    src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} 
                    alt={course.name}
                    className={styles.searchCardImg}
                    />
                </picture>
                <p className={styles.searchCardTitle}>{course.name}</p>
                <p className={styles.searchCardDescription}>{course.synopsis}</p>
            </div>
          </Link>
        </>
    );
};

export default SearchCard;