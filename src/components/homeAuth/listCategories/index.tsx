import useSWR from "swr";
import categoriesService, { CategoryType } from "@/src/services/categoriesService";
import ListCategoriesSlide from "../listCategoriesSlide";


const ListCategories = () => {
    const {data, error} = useSWR("/listCategories", categoriesService.getCategories);
    
    if(error) return error;
    if(!data) return (
    <>
      <p>Loading...</p>
    </>);
    
    return (
        <>
         {data.data.categories?.map((category: CategoryType) => (
          <ListCategoriesSlide key={category.id} categoryId={category.id} categoryName={category.name}/>
         ))}
        </>
    );
};

export default ListCategories;