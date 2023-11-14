/* eslint-disable react-hooks/exhaustive-deps */
import styles from "@/styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import courseService, { CourseType } from "../src/services/courseService";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import SearchCard from "@/src/components/searchCard";
import Footer from "@/src/components/common/footer";
import PageSpinner from "@/src/components/common/spinner";

const Search = () => {
    const router = useRouter();
    const searchName: any = router.query.name;
    const [searchResult, setSearchResult] = useState<CourseType[]>([]);

    const searchCourses = async () => {
        const res = await courseService.getSearch(searchName)
        setSearchResult(res.data.courses)
    }


    useEffect(()=>{
        searchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchName])

    
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      if(!sessionStorage.getItem('onebitflix-token')){
         router.push("/login")
      } else {
         setLoading(false);
      }
    }, []);

   if(loading){
      return <PageSpinner/>
   }

        
    
    return (
        <>
          <Head>
            <title>Onebitflix - {searchName}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
          </Head>
          <main className={styles.main}>
            <div className={styles.searchFooterBg}>
            <HeaderAuth/>
            </div>
            <section className={styles.mainContent}>
            {searchResult.length >= 1 ? (
                <div className={styles.searchContainer}>
                    <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
                    {searchResult?.map((course)=>(
                        <SearchCard key={course.id} course={course}/>
                    ))}
                </Container>
                </div>    
            ):(
                <div className={styles.searchContainer}>
                    <p className={styles.noSearchResult}>Nenhum resultado encontrado</p>
                </div>  
            )}
            </section>
            <div className={styles.searchFooterBg}>
                 <Footer/>
            </div>
          </main>
          
        </>
    )
}

export default Search;


