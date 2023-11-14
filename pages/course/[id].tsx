/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../../styles/coursesPage.module.scss";
import Head from "next/head";
import HeaderAuth from "@/src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import { Button, Container } from "reactstrap";
import PageSpinner from "@/src/components/common/spinner";
import EpisodeList from "@/src/components/episodeList";
import Footer from "@/src/components/common/footer";



const CoursePage = () => {
    const [course, setCourse] = useState<CourseType>();
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const {id} = router.query;


    useEffect(()=>{
      if(!sessionStorage.getItem('onebitflix-token')){
         router.push("/login")
      } else {
         setLoading(false);
      }
   }, []);

  
    const getCouse = async () => {
        if(typeof id !== "string") return;
        
        const res = await courseService.getEpisodes(id);

        if(res.status === 200){
            setCourse(res.data);
            setLiked(res.data.liked);
            setFavorited(res.data.favorited);
        }
    }

    useEffect(()=> {
      getCouse()
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleLikeCourse = async () => {
      if(typeof id !== "string") return;

      if(liked === true){
        await courseService.removeLike(id);
        setLiked(false)
      }
      else {
        await courseService.adLike(id);
        setLiked(true)
      }
    }

    const handleFavCourse = async () => {
      if(typeof id !== "string") return;

      if(favorited === true){
        await courseService.removeFav(id);
        setFavorited(false)
      }
      else {
        await courseService.addToFav(id);
        setFavorited(true)
      }
    }

    if(course === undefined){
      return <PageSpinner/>
    }

 
    if(loading){
       return <PageSpinner/>
    }

    return (
        <>
          <Head>
            <title>Onebitflix - {course?.name}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
          </Head>
          <main>
           <div style={{
             backgroundImage:`linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
             height: "550px",
           }}>
             <HeaderAuth/>
           </div>
           <Container className={styles.courseInfo}>
              <p className={styles.courseTitle}>{course?.name}</p>
              <p className={styles.courseDescription}>{course?.synopsis}</p>
              <Button outline className={styles.courseBtn} disabled={course.episodes?.length === 0 ? true : false}>
                ASSISSTIR AGORA !
                <picture>
                  <img 
                  src="/buttonPlay.svg" 
                  alt="buttonImg"
                  className={styles.buttonImg}
                  />
                </picture>
              </Button>
              <div className={styles.interactions}>
                {liked === false ? (
                  <picture>
                  <img 
                  src="../course/iconLike.svg" 
                  alt="likeImage" 
                  className={styles.interactionImages}
                  onClick={handleLikeCourse}
                  />
                </picture>
                ) : <picture>
                <img 
                src="../course/iconLiked.svg" 
                alt="likeImage" 
                className={styles.interactionImages}
                onClick={handleLikeCourse}
                />
              </picture>}
               {favorited === false ? (
                 <picture>
                 <img 
                 src="../course/iconAddFav.svg" 
                 alt="likeImage" 
                 className={styles.interactionImages}
                 onClick={handleFavCourse}
                 />
               </picture>
               ):  <picture>
               <img 
               src="../course/iconFavorited.svg" 
               alt="likeImage" 
               className={styles.interactionImages}
               onClick={handleFavCourse}
               />
             </picture>}
              </div>
           </Container>
           <Container className={styles.episodeInfo}>
             <p className={styles.episodeDivision}>EPISÓDIOS</p>
             <p className={styles.episodeLenght}>
              {course?.episodes && course?.episodes?.length} episódios
             </p>
             {course.episodes?.length === 0 ? (
              <p>
                <strong>Não temos episodios no momento, volte outra hora! &#x1F606;</strong>
              </p>
             ): (
              course?.episodes && course?.episodes?.map((episode)=>(
                <>
                  <EpisodeList key={episode.id} episode={episode} course={course}/>
                </>
               ))
             )}
           </Container>
           <Footer/>
          </main>
        </>
    )
}

export default CoursePage;