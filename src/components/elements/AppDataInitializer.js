import { useEffect } from 'react';

export default function AppDataInitializer({ hasLanguage }) {
  console.log("salam", hasLanguage);
  //haslanguage  /ru/travel-agents yadigimizda url ye direk enter basinca biz rusca requestide baz alib gondermeliyiz
  //o yuzden asagida hasLanguage ==='en sarti saglanirsa true yapib tek request false coklu dil requesti yapiyoruz

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("appData");
      localStorage.removeItem("direction");
      localStorage.removeItem("path");
    };

    // Sadece browser'da çağır
    if (typeof window !== 'undefined') {
      console.log("salam 2", hasLanguage);

      import('../../helpers/fetchAllLanguagesAppDatas').then(module => {
        module.fetchAllLanguagesAppDatas({ initialFetch: hasLanguage === 'en' ? true : false });
      });
      console.log('AppDataInitializer mounted');

      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    };
  }, []);

  return null;
}
