import { useEffect, useState } from 'react';
import { postDataAPI } from '../helpers/fetchDatas';
import env from '../resources/env';

const usePageContentHook = (pagePathname, language) => {

    const [metaTitle, setmetaTitle] = useState("");
    const [keywords, setKeywords] = useState('');
    const [description, setDescription] = useState("");
    const [pageContent, setPageContent] = useState("");
    const [pageTitle, setPageTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");

    useEffect(() => {
        async function fetchData() {
            let url = `${env.apiDomain}/api/v1/pages/details`;
            let body = { pagePathname: `/${pagePathname}`, language };
            let datas = await postDataAPI({ url, body });
            if (datas.status === 200) {
                let { data: { metaTitle, keywords, metaDescription, pageContent, pageTitle, shortDescription } } = datas;
                setmetaTitle(metaTitle);
                setKeywords(keywords);
                setDescription(metaDescription);
                setPageContent(pageContent);
                setPageTitle(pageTitle);
                setShortDescription(shortDescription);
            } else {
                setmetaTitle("");
                setKeywords("");
                setDescription("");
                setPageContent("");
                setPageTitle("");
                setShortDescription("");
            }
        }
        fetchData();
    }, [language, pagePathname]);

    return { metaTitle, keywords, description, pageContent, pageTitle, shortDescription };
};

export default usePageContentHook;
