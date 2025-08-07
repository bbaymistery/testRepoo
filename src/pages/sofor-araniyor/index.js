import { isUrlLoverCase } from '../../helpers/isUrlLoverCase';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import { parse } from 'url';
import { parseCookies } from '../../helpers/cokieesFunc';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage';
import { useSelector } from 'react-redux';
import styles from "./styles.module.scss"
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { fetchConfig } from '../../resources/getEnvConfig';
import { driversWantedKeywords, getMetaTagsDriversWanted, getSingleDriverWantedSchema } from '../../constants/keywordsAndContents/sofor-araniyor/keywordsAndContent';
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from '../../helpers/schemaMetaTagHelper';
import Head from 'next/head';
import Image from 'next/image';
import DestinationsCustomers from '../../components/elements/DestinationsCustomers';
const driversWantedContent = {

  en: `
  <h1>Join the APL Transfers Family</h1>
  <h2>Become a Part of One of Turkey’s Most Trusted Airport Transfer Companies</h2>
  <p><strong>Are you a professional, experienced, and reliable driver?</strong></p>
  <p>
    At APL Transfers, we are looking for dedicated drivers to join our growing team across Turkey.
  </p>
  <p>
    We specialize in airport transfers and VIP transportation — offering our drivers regular job opportunities,
    high earnings, and a supportive working environment.
  </p>


  <h2>Why Should You Drive with APL Transfers?</h2>
  <ul>
    <li><strong>Steady Workflow</strong> – Thousands of <u>airport and hotel transfers</u> every month</li>
    <li><strong>Flexible Working Hours</strong> – <u>You decide when you want to work</u></li>
    <li><strong>You’re in Full Control</strong> – <u>Accept only the jobs you want from our transfer pool</u></li>
    <li><strong>Fast Weekly Payments</strong> – <u>Reliable and timely payment system</u></li>
    <li><strong>Transparent Commission</strong> – <u>No hidden fees — you always know what you earn</u></li>
    <li><strong>Professional Driver App</strong> – <u>Easily manage jobs through our custom-built mobile app</u></li>
    <li><strong>Support Team</strong> – <u>24/7 operations and call center support</u></li>
    <li><strong>VIP Clients</strong> – <u>Opportunity to work with high-end, respectful passengers</u></li>
  </ul>


  <h2>Regions We Operate In</h2>
  <p>We are currently looking for drivers in the following locations:</p>
  <ul>
    <li>Istanbul</li>
    <li>Muğla <small>(including Dalaman, Bodrum, Marmaris)</small></li>
    <li>Fethiye</li>
    <li>Antalya</li>
    <li>Alanya</li>
    <li>Izmir</li>
    <li>Gazipaşa</li>
  </ul>
  <p><strong>It doesn’t matter whether you’re near a busy airport or in a tourist area</strong> —
     with APL Transfers, you can serve international travelers all year round and earn well.
  </p>


  <h2>Apply Now!</h2>
  <p>Join the APL Transfers family today.</p>
  <p>
    <a href="/driver-application">Fill out our driver application form</a> or
    <a href="/contact-us">get in touch with us</a>.
  </p>
  <p>Hit the road with APL Transfers — <strong>where professionalism meets opportunity</strong>.</p>


  <h2>Who Are We?</h2>
  <p>
    APL Transfers is <strong>one of the leading airport transfer companies in London</strong>.
    We’re recognized for our <strong>high service standards and customer satisfaction</strong>.
  </p>
  <p>
    We currently have <strong>730 active drivers</strong> operating in London and are proud of our
    <strong>high ratings on platforms like Trustpilot and TripAdvisor</strong>.
  </p>
  <p>
    Thanks to our experience, advanced technology, and commitment to quality,
    we are a trusted choice for both passengers and drivers.
  </p>
`,
  tr: `
     <h1>APL Transfers Ailesine Katılın</h1>
  <h2>Türkiye’nin En Güvenilir Havalimanı Transfer Firmalarından Birine Katılın</h2>
  <p><strong>Profesyonel, deneyimli ve güvenilir bir şoför müsünüz?</strong></p>
  <p>
    APL Transfers olarak, Türkiye genelindeki büyüyen ekibimize katılacak özverili sürücüler arıyoruz.
  </p>
  <p>
    Havalimanı transferleri ve VIP ulaşım hizmetlerinde uzmanız — sürücülerimize düzenli iş imkânı,
    yüksek kazanç ve destekleyici bir çalışma ortamı sunuyoruz.
  </p>


  <h2>Neden APL Transfers’ta Şoförlük Yapmalısınız?</h2>
  <ul>
    <li><strong>Düzenli İş Akışı</strong> – Her ay <u>binlerce havalimanı ve otel transferi</u></li>
    <li><strong>Esnek Çalışma Saatleri</strong> – Ne zaman çalışacağınızı <u>siz karar verin</u></li>
    <li><strong>Tam Kontrol Sizin</strong> – Transfer Havuzumuzdan <u>istediğiniz işi kabul edebilirsiniz</u></li>
    <li><strong>Hızlı Haftalık Ödeme</strong> – <u>Güvenilir ve zamanında ödeme sistemi</u></li>
    <li><strong>Şeffaf Komisyon</strong> – <u>Gizli ücret yok, ne kazandığınızı bilirsiniz</u></li>
    <li><strong>Profesyonel Sürücü Uygulaması</strong> – <u>Kendi geliştirdiğimiz uygulamayla işleri kolayca yönetin</u></li>
    <li><strong>Destek Ekibi</strong> – <u>7/24 ulaşabileceğiniz operasyon ve çağrı merkezi</u></li>
    <li><strong>VIP Müşteriler</strong> – <u>Kaliteli ve düzeyli yolcularla çalışma fırsatı</u></li>
  </ul>


  <h2>Hizmet Verdiğimiz Bölgeler</h2>
  <p>Şu anda aşağıdaki bölgelerde sürücüler arıyoruz:</p>
  <ul>
    <li>İstanbul</li>
    <li>Muğla <small>(Dalaman, Bodrum, Marmaris dahil)</small></li>
    <li>Fethiye</li>
    <li>Antalya</li>
    <li>Alanya</li>
    <li>İzmir</li>
    <li>Gazipaşa</li>
  </ul>
  <p><strong>Yoğun havalimanlarına yakın ya da turistik bölgelerde olmanız fark etmez</strong> —
     APL Transfers ile uluslararası yolculara yıl boyunca hizmet vererek iyi kazanç elde edebilirsiniz.
  </p>


  <h2>Hemen Başvurun!</h2>
  <p>Bugün APL Transfers ailesine katılın.</p>
  <p>
    <a href="/driver-application">Sürücü başvuru formumuzu doldurun</a> ya da
    <a href="/tr/contact-us">bizimle iletişime geçin</a>.
  </p>
  <p>APL Transfers ile yola çıkın — <strong>profesyonelliğin buluşma noktası</strong>.</p>


  <h2>Biz Kimiz?</h2>
  <p>
    APL Transfers, <strong>Londra’nın en büyük havalimanı transfer firmalarından biridir</strong>.
    Yüksek hizmet standartlarımız ve müşteri memnuniyetimizle tanınıyoruz.
  </p>
  <p>
    Sadece Londra’da aktif olarak çalışan <strong>730 sürücümüz</strong> bulunmakta ve
    Trustpilot ile TripAdvisor gibi platformlarda <strong>yüksek müşteri memnuniyeti puanlarına sahibiz</strong>.
  </p>
  <p>
    Tecrübemiz, ileri teknolojimiz ve kaliteye olan bağlılığımız sayesinde hem yolcular hem de sürücüler için güvenilir bir tercihtir.
  </p>
    `,
  es: `
  <h1>Únete a la Familia de APL Transfers</h1>
  <h2>Forma Parte de una de las Empresas de Traslados al Aeropuerto Más Confiables de Turquía</h2>
  <p><strong>¿Eres un conductor profesional, experimentado y confiable?</strong></p>
  <p>
    En APL Transfers, estamos buscando conductores comprometidos para unirse a nuestro equipo en crecimiento en toda Turquía.
  </p>
  <p>
    Estamos especializados en traslados al aeropuerto y servicios VIP — ofrecemos a nuestros conductores oportunidades laborales regulares,
    altos ingresos y un entorno de trabajo que brinda apoyo.
  </p>


  <h2>¿Por Qué Conducir con APL Transfers?</h2>
  <ul>
    <li><strong>Flujo de Trabajo Constante</strong> – Miles de <u>traslados al aeropuerto y hotel</u> cada mes</li>
    <li><strong>Horarios Flexibles</strong> – <u>Tú decides cuándo quieres trabajar</u></li>
    <li><strong>Tú Tienes el Control</strong> – <u>Acepta solo los trabajos que deseas de nuestra bolsa de traslados</u></li>
    <li><strong>Pagos Semanales Rápidos</strong> – <u>Sistema de pagos confiable y puntual</u></li>
    <li><strong>Comisión Transparente</strong> – <u>Sin tarifas ocultas — siempre sabes lo que ganas</u></li>
    <li><strong>Aplicación para Conductores</strong> – <u>Gestiona fácilmente los trabajos con nuestra app exclusiva</u></li>
    <li><strong>Equipo de Soporte</strong> – <u>Centro de llamadas y operaciones disponibles las 24/7</u></li>
    <li><strong>Clientes VIP</strong> – <u>Oportunidad de trabajar con pasajeros educados y de alto nivel</u></li>
  </ul>


  <h2>Regiones en las que Operamos</h2>
  <p>Actualmente estamos buscando conductores en las siguientes ubicaciones:</p>
  <ul>
    <li>Estambul</li>
    <li>Muğla <small>(incluyendo Dalaman, Bodrum, Marmaris)</small></li>
    <li>Fethiye</li>
    <li>Antalya</li>
    <li>Alanya</li>
    <li>Esmirna</li>
    <li>Gazipaşa</li>
  </ul>
  <p><strong>No importa si estás cerca de un aeropuerto concurrido o en una zona turística</strong> —
     con APL Transfers puedes atender a viajeros internacionales todo el año y obtener buenos ingresos.
  </p>


  <h2>¡Solicita Ahora!</h2>
  <p>Únete hoy mismo a la familia de APL Transfers.</p>
  <p>
    <a href="/es/driver-application">Rellena nuestro formulario de solicitud para conductores</a> o
    <a href="/es/contact-us">ponte en contacto con nosotros</a>.
  </p>
  <p>Empieza tu camino con APL Transfers — <strong>donde el profesionalismo se encuentra con la oportunidad</strong>.</p>


  <h2>¿Quiénes Somos?</h2>
  <p>
    APL Transfers es <strong>una de las principales empresas de traslados al aeropuerto en Londres</strong>.
    Somos reconocidos por nuestros <strong>altos estándares de servicio y satisfacción del cliente</strong>.
  </p>
  <p>
    Actualmente tenemos <strong>730 conductores activos</strong> operando en Londres y estamos orgullosos de nuestras
    <strong>altas puntuaciones en plataformas como Trustpilot y TripAdvisor</strong>.
  </p>
  <p>
    Gracias a nuestra experiencia, tecnología avanzada y compromiso con la calidad,
    somos una opción confiable tanto para pasajeros como para conductores.
  </p>
    `,
  ar: `
  <h1>انضم إلى عائلة APL Transfers</h1>
  <h2>كن جزءًا من واحدة من أكثر شركات نقل المطار موثوقية في تركيا</h2>
  <p><strong>هل أنت سائق محترف وذو خبرة وموثوق؟</strong></p>
  <p>
    نحن في APL Transfers نبحث عن سائقين ملتزمين للانضمام إلى فريقنا المتنامي في جميع أنحاء تركيا.
  </p>
  <p>
    نحن متخصصون في خدمات نقل المطار وخدمات النقل لكبار الشخصيات — نوفر لسائقينا فرص عمل منتظمة،
    ودخل مرتفع، وبيئة عمل داعمة.
  </p>


  <h2>لماذا تعمل مع APL Transfers؟</h2>
  <ul>
    <li><strong>تدفق عمل منتظم</strong> – الآلاف من <u>نقلات المطار والفنادق</u> شهريًا</li>
    <li><strong>ساعات عمل مرنة</strong> – <u>أنت من يقرر متى تعمل</u></li>
    <li><strong>التحكم الكامل لك</strong> – <u>اختر الرحلات التي ترغب بها من نظامنا</u></li>
    <li><strong>مدفوعات أسبوعية سريعة</strong> – <u>نظام دفع موثوق وفي الوقت المناسب</u></li>
    <li><strong>عمولة شفافة</strong> – <u>لا رسوم خفية — تعرف دائمًا ما تكسبه</u></li>
    <li><strong>تطبيق سائق احترافي</strong> – <u>قم بإدارة رحلاتك بسهولة عبر تطبيقنا المخصص</u></li>
    <li><strong>فريق دعم</strong> – <u>دعم فني ومركز اتصال متاح 24/7</u></li>
    <li><strong>عملاء VIP</strong> – <u>فرصة للعمل مع ركاب راقين ومحترمين</u></li>
  </ul>


  <h2>المناطق التي نعمل فيها</h2>
  <p>نبحث حاليًا عن سائقين في المناطق التالية:</p>
  <ul>
    <li>إسطنبول</li>
    <li>موغلا <small>(بما في ذلك دالامان، بودروم، مرماريس)</small></li>
    <li>فتحية</li>
    <li>أنطاليا</li>
    <li>ألانيا</li>
    <li>إزمير</li>
    <li>غازي باشا</li>
  </ul>
  <p><strong>سواء كنت بالقرب من مطار مزدحم أو في منطقة سياحية</strong> —
     مع APL Transfers يمكنك خدمة المسافرين الدوليين طوال العام وتحقيق دخل جيد.
  </p>


  <h2>قدّم الآن!</h2>
  <p>انضم إلى عائلة APL Transfers اليوم.</p>
  <p>
    <a href="/ar/driver-application">املأ نموذج طلب السائق</a>
    أو
    <a href="/ar/contact-us">تواصل معنا</a>.
  </p>
  <p>ابدأ رحلتك مع APL Transfers — <strong>حيث تلتقي الاحترافية بالفرصة</strong>.</p>


  <h2>من نحن؟</h2>
  <p>
    APL Transfers هي <strong>واحدة من أكبر شركات نقل المطار في لندن</strong>.
    نحن معروفون <strong>بمعايير الخدمة العالية ورضا العملاء</strong>.
  </p>
  <p>
    لدينا حاليًا <strong>730 سائقًا نشطًا</strong> يعملون في لندن،
    ونحن فخورون <strong>بتقييماتنا العالية على مواقع مثل Trustpilot وTripAdvisor</strong>.
  </p>
  <p>
    بفضل خبرتنا، وتكنولوجيتنا المتقدمة، والتزامنا بالجودة،
    نحن خيار موثوق لكل من الركاب والسائقين.
  </p>

  `,
  ru: `
  <h1>Присоединяйтесь к семье APL Transfers</h1>
  <h2>Станьте частью одной из самых надёжных трансферных компаний Турции</h2>
  <p><strong>Вы профессиональный, опытный и надёжный водитель?</strong></p>
  <p>
    В APL Transfers мы ищем преданных своему делу водителей для расширяющейся команды по всей Турции.
  </p>
  <p>
    Мы специализируемся на трансферах из аэропортов и VIP-перевозках — нашим водителям мы предлагаем стабильную занятость,
    высокий доход и поддерживающую рабочую среду.
  </p>

  <h2>Почему стоит работать с APL Transfers?</h2>
  <ul>
    <li><strong>Стабильный поток заказов</strong> – тысячи <u>трансферов из аэропортов и отелей</u> каждый месяц</li>
    <li><strong>Гибкий график</strong> – <u>Вы сами решаете, когда работать</u></li>
    <li><strong>Полный контроль</strong> – <u>Выбирайте только те заказы, которые хотите выполнить</u></li>
    <li><strong>Быстрые еженедельные выплаты</strong> – <u>Надёжная и своевременная платёжная система</u></li>
    <li><strong>Прозрачная комиссия</strong> – <u>Никаких скрытых сборов — вы всегда знаете свой доход</u></li>
    <li><strong>Профессиональное приложение для водителей</strong> – <u>Управляйте заказами с помощью нашего фирменного приложения</u></li>
    <li><strong>Служба поддержки</strong> – <u>Операционный и колл-центр доступны 24/7</u></li>
    <li><strong>VIP-клиенты</strong> – <u>Возможность работать с вежливыми и высококлассными пассажирами</u></li>
  </ul>

  <h2>Регионы, в которых мы работаем</h2>
  <p>В настоящее время мы ищем водителей в следующих регионах:</p>
  <ul>
    <li>Стамбул</li>
    <li>Мугла <small>(включая Даламан, Бодрум, Мармарис)</small></li>
    <li>Фетхие</li>
    <li>Анталья</li>
    <li>Аланья</li>
    <li>Измир</li>
    <li>Газипаша</li>
  </ul>
  <p><strong>Неважно, находитесь ли вы рядом с оживлённым аэропортом или в туристическом районе</strong> —
     с APL Transfers вы можете работать с международными клиентами круглый год и хорошо зарабатывать.
  </p>

  <h2>Подайте заявку прямо сейчас!</h2>
  <p>Присоединяйтесь к семье APL Transfers уже сегодня.</p>
  <p>
    <a href="/ru/driver-application">Заполните анкету водителя</a>
    или
    <a href="/ru/contact-us">свяжитесь с нами</a>.
  </p>
  <p>Начните путь с APL Transfers — <strong>где профессионализм встречается с возможностями</strong>.</p>

  <h2>Кто мы?</h2>
  <p>
    APL Transfers — это <strong>одна из крупнейших компаний по трансферам из аэропортов в Лондоне</strong>.
    Нас знают за <strong>высокие стандарты обслуживания и высокий уровень удовлетворённости клиентов</strong>.
  </p>
  <p>
    В Лондоне у нас работает <strong>730 активных водителей</strong>, и мы гордимся
    <strong>высокими рейтингами на таких платформах, как Trustpilot и TripAdvisor</strong>.
  </p>
  <p>
    Благодаря нашему опыту, передовым технологиям и приверженности качеству,
    мы — надёжный выбор как для пассажиров, так и для водителей.
  </p>
`,
  zh: `
  <h1>加入 APL Transfers 大家庭</h1>
  <h2>成为土耳其最值得信赖的机场接送公司之一的一员</h2>
  <p><strong>您是专业、有经验且可靠的司机吗？</strong></p>
  <p>
    我们 APL Transfers 正在寻找有责任心的司机，加入我们在土耳其不断壮大的团队。
  </p>
  <p>
    我们专注于机场接送和 VIP 出行服务 — 为司机提供稳定的工作机会、高收入和支持性的工作环境。
  </p>

  <h2>为什么选择与 APL Transfers 合作？</h2>
  <ul>
    <li><strong>稳定的订单来源</strong> – 每月有数千个 <u>机场和酒店接送订单</u></li>
    <li><strong>弹性工作时间</strong> – <u>您可以自由安排工作时间</u></li>
    <li><strong>您拥有完全控制权</strong> – <u>只接您想要的订单</u></li>
    <li><strong>快速每周结算</strong> – <u>可靠准时的付款系统</u></li>
    <li><strong>透明佣金制度</strong> – <u>无隐藏费用，收入清晰透明</u></li>
    <li><strong>专业司机应用</strong> – <u>通过我们的专属 App 轻松管理订单</u></li>
    <li><strong>客服支持团队</strong> – <u>提供 24/7 全天候服务支持</u></li>
    <li><strong>VIP 客户</strong> – <u>为尊贵有礼的客户提供服务</u></li>
  </ul>

  <h2>我们的运营地区</h2>
  <p>我们目前在以下地区招聘司机：</p>
  <ul>
    <li>伊斯坦布尔</li>
    <li>穆拉省 <small>（包括达拉曼、博德鲁姆、马尔马里斯）</small></li>
    <li>费特希耶</li>
    <li>安塔利亚</li>
    <li>阿拉尼亚</li>
    <li>伊兹密尔</li>
    <li>加济帕夏</li>
  </ul>
  <p><strong>无论您身处繁忙机场附近，还是旅游区</strong> —
     加入 APL Transfers，全年为国际旅客服务，赚取可观收入。
  </p>

  <h2>立即申请！</h2>
  <p>今天就加入 APL Transfers 大家庭。</p>
  <p>
    <a href="/zh/driver-application">填写司机申请表</a>
    或
    <a href="/zh/contact-us">联系我们</a>。
  </p>
  <p>开启 APL Transfers 之旅 — <strong>让专业遇见机遇</strong>。</p>

  <h2>我们是谁？</h2>
  <p>
    APL Transfers 是 <strong>伦敦最大的机场接送公司之一</strong>，
    以其 <strong>高标准服务与卓越客户满意度</strong> 而闻名。
  </p>
  <p>
    我们在伦敦拥有超过 <strong>730 名活跃司机</strong>，
    并在 Trustpilot 和 TripAdvisor 等平台上获得 <strong>高度评价</strong>。
  </p>
  <p>
    凭借我们的经验、先进技术和对品质的承诺，
    APL Transfers 是乘客和司机都值得信赖的选择。
  </p>
`,
  it: `
  <h1>Unisciti alla famiglia di APL Transfers</h1>
  <h2>Entra a far parte di una delle aziende di trasferimenti aeroportuali più affidabili della Turchia</h2>
  <p><strong>Sei un autista professionale, esperto e affidabile?</strong></p>
  <p>
    In APL Transfers stiamo cercando conducenti motivati per unirsi al nostro team in continua espansione in tutta la Turchia.
  </p>
  <p>
    Siamo specializzati in trasferimenti aeroportuali e servizi VIP — offriamo ai nostri autisti opportunità lavorative regolari,
    guadagni elevati e un ambiente di lavoro collaborativo.
  </p>

  <h2>Perché lavorare con APL Transfers?</h2>
  <ul>
    <li><strong>Flusso di lavoro costante</strong> – Migliaia di <u>trasferimenti aeroportuali e alberghieri</u> ogni mese</li>
    <li><strong>Orari di lavoro flessibili</strong> – <u>Decidi tu quando lavorare</u></li>
    <li><strong>Controllo totale</strong> – <u>Scegli solo le corse che desideri accettare</u></li>
    <li><strong>Pagamenti settimanali rapidi</strong> – <u>Sistema di pagamento affidabile e puntuale</u></li>
    <li><strong>Commissioni trasparenti</strong> – <u>Nessun costo nascosto — sai sempre quanto guadagni</u></li>
    <li><strong>App professionale per autisti</strong> – <u>Gestisci le corse facilmente tramite la nostra app dedicata</u></li>
    <li><strong>Team di supporto</strong> – <u>Assistenza operativa e call center disponibili 24/7</u></li>
    <li><strong>Clienti VIP</strong> – <u>Opportunità di lavorare con passeggeri educati e di alto livello</u></li>
  </ul>

  <h2>Zone in cui operiamo</h2>
  <p>Attualmente siamo alla ricerca di autisti nelle seguenti località:</p>
  <ul>
    <li>Istanbul</li>
    <li>Muğla <small>(inclusi Dalaman, Bodrum, Marmaris)</small></li>
    <li>Fethiye</li>
    <li>Antalya</li>
    <li>Alanya</li>
    <li>Izmir</li>
    <li>Gazipaşa</li>
  </ul>
  <p><strong>Che tu sia vicino a un aeroporto trafficato o in una zona turistica</strong> —
     con APL Transfers puoi lavorare con clienti internazionali tutto l'anno e ottenere ottimi guadagni.
  </p>

  <h2>Candidati ora!</h2>
  <p>Unisciti oggi stesso alla famiglia di APL Transfers.</p>
  <p>
    <a href="/it/driver-application">Compila il modulo di candidatura per autisti</a>
    oppure
    <a href="/it/contact-us">contattaci</a>.
  </p>
  <p>Inizia il tuo viaggio con APL Transfers — <strong>dove la professionalità incontra l'opportunità</strong>.</p>

  <h2>Chi siamo?</h2>
  <p>
    APL Transfers è <strong>una delle principali aziende di trasferimenti aeroportuali di Londra</strong>,
    nota per i suoi <strong>elevati standard di servizio e la soddisfazione del cliente</strong>.
  </p>
  <p>
    Abbiamo attualmente <strong>730 autisti attivi</strong> a Londra e siamo orgogliosi
    <strong>delle nostre ottime valutazioni su piattaforme come Trustpilot e TripAdvisor</strong>.
  </p>
  <p>
    Grazie alla nostra esperienza, tecnologia avanzata e impegno per la qualità,
    siamo una scelta affidabile sia per i passeggeri che per gli autisti.
  </p>
`,

}
const DriversWanted = (props) => {
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language } } = state
  let { metaDescription, keywords, headTitle } = props

  return (
    <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription}>
      <Head>
        <link rel="canonical" href={props.mainCanonical} />
        {createMetaTagElementsClientSide(props.metaTags)}
        {renderSchemaScriptsClientSide(props.schemas)}
        {/* <span><a href="/tr/sofor-araniyor">{generalAllTranslations.strDriverWanted[language]} </a> </span> */}
      </Head>
      <div className={`${styles.driverswanted} ${direction} page`}>
        <div className={`${styles.driverswanted_section} page_section`}>
          <div className={`${styles.driverswanted_section_container} page_section_container`}>
            <div className={styles.content}>

              <div className={styles.left}>
                <h1>APL Transfers Ailesine Katılın</h1>
                <h2>Türkiye’nin En Güvenilir Havalimanı Transfer Firmalarından Birine Katılın</h2>
                <p><strong>Profesyonel, deneyimli ve güvenilir bir şoför müsünüz?</strong></p>
                <p>
                  APL Transfers olarak, Türkiye genelindeki büyüyen ekibimize katılacak özverili sürücüler arıyoruz.
                </p>
                <p>
                  Havalimanı transferleri ve VIP ulaşım hizmetlerinde uzmanız — sürücülerimize düzenli iş imkânı,
                  yüksek kazanç ve destekleyici bir çalışma ortamı sunuyoruz.
                </p>
                &nbsp;

                <h2>Neden APL Transfers’ta Şoförlük Yapmalısınız?</h2>
                <ul>
                  <li><strong>Düzenli İş Akışı</strong> – Her ay <u>binlerce havalimanı ve otel transferi</u></li>
                  <li><strong>Esnek Çalışma Saatleri</strong> – Ne zaman çalışacağınızı <u>siz karar verin</u></li>
                  <li><strong>Tam Kontrol Sizin</strong> – Transfer Havuzumuzdan <u>istediğiniz işi kabul edebilirsiniz</u></li>
                  <li><strong>Hızlı Haftalık Ödeme</strong> – <u>Güvenilir ve zamanında ödeme sistemi</u></li>
                  <li><strong>Şeffaf Komisyon</strong> – <u>Gizli ücret yok, ne kazandığınızı bilirsiniz</u></li>
                  <li><strong>Profesyonel Sürücü Uygulaması</strong> – <u>Kendi geliştirdiğimiz uygulamayla işleri kolayca yönetin</u></li>
                  <li><strong>Destek Ekibi</strong> – <u>7/24 ulaşabileceğiniz operasyon ve çağrı merkezi</u></li>
                  <li><strong>VIP Müşteriler</strong> – <u>Kaliteli ve düzeyli yolcularla çalışma fırsatı</u></li>
                </ul>
                <h2>Hizmet Verdiğimiz Bölgeler</h2>
                <p>Şu anda aşağıdaki bölgelerde sürücüler arıyoruz:</p>
                <ul>
                  <li>İstanbul</li>
                  <li>Muğla <small>(Dalaman, Bodrum, Marmaris dahil)</small></li>
                  <li>Fethiye</li>
                  <li>Antalya</li>
                  <li>Alanya</li>
                  <li>İzmir</li>
                  <li>Gazipaşa</li>
                </ul>
                <p><strong>Yoğun havalimanlarına yakın ya da turistik bölgelerde olmanız fark etmez</strong> —
                  APL Transfers ile uluslararası yolculara yıl boyunca hizmet vererek iyi kazanç elde edebilirsiniz.
                </p>


                <h2>Hemen Başvurun!</h2>
                <p>Bugün APL Transfers ailesine katılın.</p>
                <p>
                  <a href="/tr/sofor-basvuru-formu" hreflang="tr">Sürücü başvuru formumuzu doldurun</a> ya da
                  <a href="/tr/contact-us" style={{ paddingLeft: "5px" }}>bizimle iletişime geçin</a>.
                </p>
                <p>APL Transfers ile yola çıkın — <strong>profesyonelliğin buluşma noktası</strong>.</p>


                <h2>Biz Kimiz?</h2>
                <p>
                  APL Transfers, <strong>Londra’nın en büyük havalimanı transfer firmalarından biridir</strong>.
                  Yüksek hizmet standartlarımız ve müşteri memnuniyetimizle tanınıyoruz.
                </p>
                <p>
                  Sadece Londra’da aktif olarak çalışan <strong>730 sürücümüz</strong> bulunmakta ve
                  Trustpilot ile TripAdvisor gibi platformlarda <strong>yüksek müşteri memnuniyeti puanlarına sahibiz</strong>.
                </p>
                <p>
                  Tecrübemiz, ileri teknolojimiz ve kaliteye olan bağlılığımız sayesinde hem yolcular hem de sürücüler için güvenilir bir tercihtir.
                </p>

              </div>


              <div className={styles.right}>
                <div className={styles.img_div}>
                  <Image src="/images/driversWanted/aplDriversContent.webp" alt="Aiport pickups-london drivers-app" fill />
                </div>
              </div>
            </div>
            <DestinationsCustomers />
            {/* <CarsSlider noborder={true} /> */}

          </div>

        </div>
      </div>
    </GlobalLayout>
  );
}
export async function getServerSideProps({ req, res, query, resolvedUrl }) {

  setNoCacheHeader(res, true);

  isUrlLoverCase(resolvedUrl, res)

  //get cookie and pathnames
  let cookies = parseCookies(req.headers.cookie);
  let { pathname } = parse(req.url, true)
  let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)
  console.log({ pageStartLanguage, pathname });
  // Eğer dil "tr" değilse yönlendir
  if (pageStartLanguage !== 'tr') {
    return {
      redirect: {
        destination: '/tr/sofor-araniyor',
        permanent: true, // SEO için
      },
    };
  }


  // Adjust pathname and language based on initial language
  const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
  pathname = adjusted.pathname;
  pageStartLanguage = adjusted.pageStartLanguage;
  let metaDescription = driversWantedKeywords.metaDescription[pageStartLanguage]
  let keywords = driversWantedKeywords.keywords[pageStartLanguage];
  let headTitle = driversWantedKeywords.headTitle[pageStartLanguage];
  const env = await fetchConfig();
  const mainCanonical = `${env.websiteDomain}/tr/sofor-araniyor`
  const schemas = [getSingleDriverWantedSchema(pathname, pageStartLanguage)]
  const metaTags = getMetaTagsDriversWanted(pathname, pageStartLanguage, env);


  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: { metaDescription, keywords, headTitle, mainCanonical, metaTags, schemas }
  };


}
export default DriversWanted

/*
  <h2>
                  Driver Registration
                </h2>
                <p>
                  To register, please follow these steps:
                </p>
                <p>
                  1. Download our APL Driver App:
                  <ul>
                    <li>
                      2.     Fill out the driver registration form in the app.
                    </li>
                    <li>
                      3.   After completing the registration process, visit our office at APL Office, Novotel Cherry Lane, UB7 9HJ (FREE parking).
                      <br />  For any documents or further inquiries, please email us at documents@aplcars.com or contact us via WhatsApp 📱 at 07809536620
                    </li>
                  </ul>
                </p>
                <h2>APL Driver App</h2>


                <div className={styles.app_div}>
                  <p>For iPhone: please click on the link below</p>

                  <a href="https://apps.apple.com/gb/app/apl-drivers/id1661484765" className={styles.app_link}>
                    <div className={styles.image_wrapper}>
                      <Image
                        src="/images/driversWanted/iosicon.webp"
                        alt="APL Transfers şoför aranıyor"
                        fill
                      />
                    </div>
                    <span>APL Drivers</span>
                  </a>
                </div>

                <p>Go to Settings / Privacy / Location Services, APL / Allow Location Always.</p>

                &nbsp;

                <div className={styles.app_div}>
                  <p> For Android Phones: Please click on the link below or download from Google PLAY Store</p>
                  <a href="https://play.google.com/store/apps/details?id=track.my.taxi&hl=en_ZA&pli=1" className={styles.app_link}>
                    <div className={styles.image_wrapper}>
                      <Image
                        src="/images/driversWanted/androidicon.webp"
                        alt="APL Transfers şoför aranıyor"
                        fill
                      />
                    </div>
                    <span>APL Drivers</span>
                  </a>
                </div>

                <p>After installation is completed, accept notifications and location permissions.</p>
                &nbsp;

                <h2>APL Name Board App</h2>
                <p>Please download our APL Name Board App for an improved pickup experience:</p>
                <p>For iOS devices: Download from the <a href="https://apps.apple.com">App Store</a> : APL Nameboard</p>
                <p>For Android devices: Download from <a href="https://play.google.com">Google Play</a> : APL Nameboard</p>
                <p>Join our team today and start your journey towards a rewarding and successful driving career with APL!</p>
*/