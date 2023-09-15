import Head from "next/head";
import HeaderNoAuth  from "../src/components/homeNoAuth/headerNoAuth";
import styles from "../styles/HomeNoAuth.module.scss";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import SlideSection from "../src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/services/courseService";
import { ReactNode } from "react";
import Footer from "@/src/components/common/footer";


interface IndexPageProps {
   chrildren?: ReactNode;
   course: CourseType[];
}

const HomeNoAuth = ({course}: IndexPageProps) => {
  return (
    <>
       <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title"/>
        <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
       </Head>
       <main>
        <div className={styles.sectionBackground}>
           <HeaderNoAuth/>
           <PresentationSection/>
          
        </div>
           <CardsSection/>
           <SlideSection newestCourses={course}/>
           <Footer/>
       </main>
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
   const res = await courseService.getNewestCouses();
   return {
      props: {
         course: res.data
      },
      revalidate: 3600 * 24
   }
}

export default HomeNoAuth;