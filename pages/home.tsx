import Footer from "@/src/components/common/footer";
import FavoriteCategory from "@/src/components/homeAuth/favoriteCategory";
import FeaturedSection from "@/src/components/homeAuth/featuredSection";
import ListCategories from "@/src/components/homeAuth/listCategories";
import NewestCategory from "@/src/components/homeAuth/newestCategory";
import Head from "next/head"

const HomeAuth = () => {
    return (
        <>
           <Head>
              <title>Onebitflix - Home</title>
              <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
           </Head>
           <main>
             
              <FeaturedSection/>
              <NewestCategory/>
              <FavoriteCategory/>
              <ListCategories/>
              <Footer/>
           </main>
        </>
    )
}

export default HomeAuth;