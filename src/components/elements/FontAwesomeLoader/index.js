import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function FontAwesomeHeadLoader() {
    const router = useRouter();
    const [interactionHappened, setInteractionHappened] = useState(false);
    useEffect(() => {
        const handleInteraction = () => {
            setInteractionHappened(true);
            // Temizle — sadece ilk etkileşimde olsun
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        // Etkileşim dinleyicileri ekle
        window.addEventListener('scroll', handleInteraction);
        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);
    return (
        <Head>
            {router.pathname === "/" && interactionHappened && <link rel="stylesheet" href={"/fontawesomeAll/css/all.min.css"} />}
            {router.pathname !== '/' && <link rel="stylesheet" href={"/fontawesomeAll/css/all.min.css"} />}
        </Head>
    );
}
