import courseService from "@/src/services/courseService";
import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";
import PageSpinner from "../../common/spinner";


const NewestCategory = () => {
    const {data, error} = useSWR("/newest", courseService.getNewestCouses);
    
    if(error) return error;
    if(!data) {
      return <PageSpinner/>;
    }
    
    return (
        <>
          <p className={styles.titleCategory}>LANÇAMENTOS</p>
          <SlideComponent course={data.data}/>
        </>
    );
};

export default NewestCategory;