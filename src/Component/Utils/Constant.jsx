import { meta } from "@eslint/js";

export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       

 export const User_Avtar="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"


 export const API_OPTION = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
   }
 };
  
 export const API_OPTION_YOUTUBE={
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer ' + import.meta.env.VITE_YOUTUBE_API_KEY

  }
}
  export const YOUTUBE_API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY



 

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

  export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg"


  export const SUPPORTED_LANGUAGE=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];
         

  // export const OPENAI_KEY= import.meta.env.VITE_OPENAI_KEY
  // console.log("VITE_OPENAI_KEY:", import.meta.env.VITE_OPENAI_KEY);
log

