import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import courseService, { CourseType } from "../src/services/courseService";
import { useEffect, useState } from "react";

const Search = () => {
    const router = useRouter();
    const searchCourse: any = router.query.name;
    const [searchResult, setSearchResult] = useState<CourseType[]>([]);

    const searchCourses = async () => {
        const res = await courseService.getSearch(searchCourse)
        console.log(typeof searchCourse)
        setSearchResult(res.data.courses)
    }

    console.log(searchCourse)

    useEffect(()=>{
        searchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchCourse])
        
    
    return (
        <>
          <Head>
            <title>Onebitflix - {searchCourse}</title>
            <link rel="shortcut icon" href="/favico.svg" type="image/x-icon"/>
          </Head>
          <main>
            <HeaderAuth/>
            
            {searchResult?.map((course) => (
                <div key={course.id}>
                    <p>{course.name}</p>
                </div>
            ))}
            
          </main>

        </>
    )
}

export default Search;


