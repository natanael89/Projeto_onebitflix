import categoriesService from "@/src/services/categoriesService";
import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss"

interface props {
    categoryId: number;
    categoryName: string;
}

const ListCategoriesSlide = ({categoryId, categoryName} : props) => {
    const {data, error} = useSWR(`/categoriesCourses/${categoryId}`, () => categoriesService.getCourses(categoryId));
    
    if(error) return error;
    if(!data) return (
    <>
      <p>Loading...</p>
    </>);
    
    return (
        <>
          <p className={styles.titleCategory}>{categoryName}</p>
          <SlideComponent course={data.data.courses}/>
        </>
    );
};

export default ListCategoriesSlide;