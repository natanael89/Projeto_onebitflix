import { CourseType } from '../../../services/courseService';
import { Splide, SplideSlide } from '../../../../node_modules/@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from '../slideCard';

interface props {
    course: CourseType[];
}

const SlideComponent = ({course}: props) => {
    let slidecount = 0;

    if(course.length > 4){
        slidecount = 4;
    } else if (course) {
        slidecount = course.length;
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center py-4">
                <Splide options={{
                    type: "loop",
                    perPage: slidecount,
                    perMove: 1,
                    width: 1200,
                    pagination: false,
                    arrows: course.length > 4 ? true : false,
                    drag: course.length > 4 ? true : false,
                    breakpoints: {
                        1440: {
                            perPage: slidecount >= 2 ? 2 : 1,
                            width: slidecount >= 2 ? 640 : 300,
                            arrows: course.length > 2 ? true : false,
                            drag: course.length > 2 ? true : false,
                        },
                        640: {
                            perPage: 1,
                            width: 300,
                            arrows: course.length > 1 ? true : false,
                            drag: course.length > 1 ? true : false,
                        },
                        300: {
                            width: 250
                        },
                    },
                }}>

                   {course?.map((course) => (
                       <SplideSlide key={course.id}>
                           <SlideCard course={course}/>
                       </SplideSlide>
                     ))}

                </Splide>
            </div>
        </>
    );
};

export default SlideComponent;