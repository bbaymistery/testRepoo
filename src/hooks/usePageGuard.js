import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Sayfa güvenliğini ve yönlendirmeyi yöneten genel hook.
 * @param {boolean} isValid - Sayfaya girişin geçerli olup olmadığını belirten boolean (true/false).
 * @param {function} onAuthorized - (Opsiyonel) Sayfa yetkisi onaylandığında çalışacak fonksiyon.
 */
const usePageGuard = (isValid, onAuthorized) => {
  const [isPageAuthorized, setIsPageAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Eğer giriş geçersizse (isValid === false)
    if (!isValid) {
      // 1. Regex ile URL'nin başındaki dil kodunu yakala (/tr/, /es/ vb.)
      const langMatch = router.asPath.match(/^\/([a-z]{2})\//);

      // 2. Eğer eşleşme varsa dili al, yoksa 'en' yap.
      const currentLang = langMatch ? langMatch[1] : 'en';

      // 3. Anasayfaya yönlendirme yap
      if (currentLang === 'en') {
        router.replace('/');
      } else {
        router.replace(`/${currentLang}`);
      }
      // isPageAuthorized false kalmaya devam eder.
    } else {
      // Veri geçerliyse kilidi aç
      setIsPageAuthorized(true);

      // Eğer bir callback fonksiyonu gönderildiyse çalıştır (örn: getQuotations)
      if (onAuthorized && typeof onAuthorized === 'function') {
        onAuthorized();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Sadece mount anında çalışır

  return { isPageAuthorized };
};

export default usePageGuard;