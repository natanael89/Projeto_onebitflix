import api from "./api";

export type EpisodeType = {
    id: number;
    name: string;
    synopsis: string;
    order: number;
    videoUrl: string;
    secondsLong: number;
};

export type CourseType = {
    id: number;
    name: string;
    thumbnailUrl: string;
    synopsis: string;
    episodes?: EpisodeType[];
};

const courseService = {
   getNewestCouses: async () => {
    const res = await api.get("/courses/newest").catch((error) => {
        return error.response
    });

    return res;
   },

   getFeaturedCourses: async () => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.get("/courses/featured", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error) => {
        return error.response;
    });

    return res;
   },

   addToFav: async (courseId: number | string) => {
     const token = sessionStorage.getItem("onebitflix-token");

     const res = await api.post("/favorites", {courseId}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
     }).catch((error) => {
        return error.response;
    });

    return res;
   },

   removeFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.delete(`/favorites/${courseId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },

    }).catch((error) => {
        return error.response
    });

    return res;
   },

   getFavCourses: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.get("/favorites/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error) => {
        return error.response
    });

    return res;
   },

   adLike: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.post("/likes", {courseId}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error) => {
        return error.response
    });

    return res;
   },

   removeLike: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.delete(`/likes/${courseId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error) => {
        return error.response
    });

    return res;
   },

   getSearch: async (name: string) => {
     const token = sessionStorage.getItem("onebitflix-token");

     const res = await api.get(`/courses/search?name=${name}`, {
        
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch((error) => {
        return error.response
    });
    return res;
   },

   getEpisodes: async (id: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.get(`/courses/${id}`, {
        
       headers: {
           Authorization: `Bearer ${token}`
           
       },
   }).catch((error) => {
       return error.response
   });
   return res;
   
  }
  
};

export default courseService;