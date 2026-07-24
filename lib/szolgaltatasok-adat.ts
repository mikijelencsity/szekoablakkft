// Szolgáltatás-részletező oldalak (app/szolgaltatasok/[slug]) tartalma.
// A slug mindig megegyezik a lib/referenciak.ts kategória-slugjával, hogy a
// galéria automatikusan a megfelelő referenciaképeket mutassa.

export type ServiceFAQ = { q: string; a: string };
export type ServiceBody = { heading: string; text: string };

export type ServiceDetail = {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroSubtitle: string;
  ctaTitle: string;
  intro: string;
  highlights: string[];
  body: ServiceBody[];
  areaText: string;
  faqs: ServiceFAQ[];
};

export const SERVICE_AREA_TOWNS = [
  "Baja",
  "Kalocsa",
  "Kecskemét",
  "Dunapataj",
  "Hajós",
  "Nemesnádudvar",
  "Érsekcsanád",
  "Dusnok",
  "Sükösd",
];

export const services: ServiceDetail[] = [
  {
    slug: "ablak",
    name: "Ablakcsere",
    shortName: "ablak",
    seoTitle: "Ablakcsere Baján és Bács-Kiskun megyében",
    metaDescription:
      "Energiatakarékos műanyag ablakok cseréje Baján, Kalocsán, Kecskeméten és Bács-Kiskun megye további településein. Ingyenes árajánlat, 5 év termékgarancia.",
    eyebrow: "Ablakcsere",
    heroSubtitle:
      "Energiatakarékos műanyag ablakok pontos beépítéssel — kevesebb zaj, kevesebb hőveszteség, alacsonyabb rezsi.",
    ctaTitle: "Kérjen ingyenes árajánlatot ablakcserére",
    intro:
      "A régi, elhasználódott ablakok az egyik legnagyobb hőveszteség-forrást jelentik egy családi házban vagy lakásban — huzat, párásodás, magas fűtésszámla. A Szeko Ablak Kft 2010 óta cserél ablakot Baján és Bács-Kiskun megye településein, saját, alvállalkozók nélküli csapattal, ezért a beépítés minősége és a határidő is garantált.",
    highlights: [
      "Műanyag profilok, energiatakarékos kivitelben",
      "Hő- és hangszigetelt üvegezés",
      "Egyedi méretek, közvetlenül gyártótól",
      "5 év termékgarancia, 1 év beépítési garancia",
      "Réstelen, pontos beépítés — nincs utólagos huzat",
    ],
    body: [
      {
        heading: "Mikor éri meg ablakot cserélni?",
        text: "Ha az ablakok mellett fúj a szél, a fa tokok vetemednek vagy a beltéri üveg belül párásodik, a csere gyorsan megtérül a rezsiszámlán. Egy jól szigetelő, pontosan beépített ablak érezhetően csökkenti a fűtési és hűtési költséget, és a lakás komfortját is javítja — kevesebb zaj, kevesebb por, egyenletesebb hőmérséklet.",
      },
      {
        heading: "Hogyan zajlik az ablakcsere nálunk?",
        text: "Ingyenes árajánlatot adunk 1-2 munkanapon belül, majd egyeztetett időpontban helyszíni felmérést tartunk, ahol pontosan felmérjük a nyílásokat. A gyártás után a beépítés általában 1-3 nap otthononként, tiszta munkaterülettel — a régi ablakok elszállítását is elvégezzük.",
      },
    ],
    areaText:
      "Ablakcserét vállalunk Baján és környékén, valamint Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon — gyakorlatilag egész Bács-Kiskun vármegyében.",
    faqs: [
      {
        q: "Mennyi idő alatt cserélhető ki egy ablak?",
        a: "Egy átlagos családi ház ablakcseréje jellemzően 1-3 nap, a nyílászárók számától függően. Az árajánlatban pontos, reális határidőt adunk.",
      },
      {
        q: "Milyen garanciát vállalnak az új ablakokra?",
        a: "5 év termékgaranciát adunk az ablakokra, a beépítésre pedig 1 év garanciát vállalunk.",
      },
      {
        q: "Mely településeken vállalnak ablakcserét Bács-Kiskun megyében?",
        a: "Baján és a Bajai járás településein (Kalocsa, Dunapataj, Hajós, Nemesnádudvar, Érsekcsanád, Dusnok), valamint Kecskeméten is dolgozunk — kérdezzen rá elérhetőségünkre az Ön településén.",
      },
    ],
  },
  {
    slug: "ajto",
    name: "Ajtócsere",
    shortName: "ajtó",
    seoTitle: "Ajtócsere és beltéri ajtók Baján és Bács-Kiskun megyében",
    metaDescription:
      "Bejárati és beltéri ajtók cseréje pontos, réstelen beépítéssel Baján és Bács-Kiskun megyében. Biztonsági megoldások, egyedi méretek, 5 év garancia.",
    eyebrow: "Ajtócsere",
    heroSubtitle:
      "Beltéri és bejárati ajtók pontos beépítéssel — biztonság, hangszigetelés és stílus egy kézből.",
    ctaTitle: "Kérjen ingyenes árajánlatot ajtócserére",
    intro:
      "A bejárati ajtó nemcsak a lakás első benyomását adja, hanem a legfontosabb biztonsági elem is. A Szeko Ablak Kft bejárati és beltéri ajtók cseréjét is vállalja Baján és a környező településeken, ugyanazzal a precíz beépítéssel, mint az ablakoknál.",
    highlights: [
      "Bejárati és beltéri ajtók egyaránt",
      "Biztonsági zárrendszerek, többpontos zárás",
      "Egyedi méretek, gyártótól",
      "5 év termékgarancia, 1 év beépítési garancia",
    ],
    body: [
      {
        heading: "Bejárati ajtó vagy beltéri ajtó cseréje",
        text: "A bejárati ajtónál a hőszigetelés és a betörésvédelem a legfontosabb szempont, a beltéri ajtóknál pedig a hangszigetelés és a pontos illeszkedés. Mindkettőt saját csapattal, réstelen beépítéssel végezzük, hogy a lakás légtömör maradjon.",
      },
      {
        heading: "Menete Bács-Kiskun megyében",
        text: "Ingyenes árajánlat után helyszíni felmérést egyeztetünk, majd a gyártás és beépítés következik — tiszta munkaterülettel, fix határidővel, ugyanúgy, mint az ablakcserénél.",
      },
    ],
    areaText:
      "Ajtócserét Baján, Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon is vállalunk.",
    faqs: [
      {
        q: "Vállalnak biztonsági bejárati ajtó cserét?",
        a: "Igen, biztonsági zárrendszerrel és többpontos zárással szerelt bejárati ajtókat is beépítünk.",
      },
      {
        q: "Beltéri ajtót is cserélnek, nem csak bejáratit?",
        a: "Igen, beltéri ajtók cseréjét is vállaljuk, egyedi méretben, gyártótól rendelve.",
      },
      {
        q: "Az ajtócserére is vonatkozik a garancia?",
        a: "Igen — az ajtókra is 5 év termékgarancia és 1 év beépítési garancia vonatkozik, ugyanúgy, mint az ablakokra.",
      },
    ],
  },
  {
    slug: "redony",
    name: "Redőnyszerelés",
    shortName: "redőny",
    seoTitle: "Redőnyszerelés Baján és Bács-Kiskun megyében",
    metaDescription:
      "Motoros és kézi redőnyök felszerelése Baján, Kalocsán, Kecskeméten és Bács-Kiskun megyében. Biztonság, fényszabályozás és hővédelem egy kézből, ingyenes árajánlattal.",
    eyebrow: "Redőnyszerelés",
    heroSubtitle:
      "Redőnyök a biztonságért, a fényszabályozásért és a nyári hővédelemért.",
    ctaTitle: "Kérjen ingyenes árajánlatot redőnyre",
    intro:
      "A redőny nemcsak vagyonvédelmi szempontból fontos, hanem nyáron a túlmelegedés ellen is a leghatékonyabb megoldás egy magyarországi családi háznál. A Szeko Ablak Kft motoros és kézi redőnyöket is szerel Baján és Bács-Kiskun megye településein, gyakran az ablakcseréhez igazítva.",
    highlights: [
      "Motoros és távvezérelt megoldások",
      "Alumínium és műanyag lamellák",
      "Szúnyogháló és árnyékolás egy rendszerben",
      "Új ablakhoz és meglévő nyílászáróhoz is",
    ],
    body: [
      {
        heading: "Motoros vagy kézi redőny?",
        text: "A motoros redőny kényelmesebb és időzíthető, míg a kézi megoldás olcsóbb és karbantartás-igényesebb kevésbé. Az árajánlat elkészítésekor mindkét lehetőséget bemutatjuk, hogy az Ön igényéhez és költségvetéséhez illő megoldást válassza.",
      },
      {
        heading: "Redőny az ablakcseréhez igazítva",
        text: "Ha egyszerre cseréli az ablakokat és szereltet redőnyt, a két munkát összehangoljuk, hogy a redőnytok pontosan illeszkedjen az új nyílászáróhoz — nincs utólagos igazítás, nincs dupla munkaterület-felállítás.",
      },
    ],
    areaText:
      "Redőnyszerelést Baján, Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon is vállalunk.",
    faqs: [
      {
        q: "Meglévő ablakra is szerelhető redőny?",
        a: "Igen, meglévő, korábban beépített ablakra is fel tudunk szerelni redőnyt, nem csak új ablakcseréhez kapcsolódóan.",
      },
      {
        q: "Motoros redőnyt is szerelnek?",
        a: "Igen, motoros és távvezérelt redőnyöket is telepítünk, kérésre okosotthon-rendszerhez illeszthető megoldással.",
      },
      {
        q: "Mennyi idő alatt szerelhető fel egy redőny?",
        a: "Egy átlagos ház redőnyeinek felszerelése jellemzően egy nap alatt elkészül, a nyílászárók számától függően.",
      },
    ],
  },
  {
    slug: "szunyoghalo",
    name: "Szúnyogháló",
    shortName: "szúnyogháló",
    seoTitle: "Szúnyogháló szerelés Baján és Bács-Kiskun megyében",
    metaDescription:
      "Egyedi méretű szúnyoghálók ablakra és ajtóra Baján, Kalocsán és Bács-Kiskun megyében. Pattintható és nyíló kivitel, gyors kivitelezéssel.",
    eyebrow: "Szúnyogháló",
    heroSubtitle:
      "Egyedi méretű szúnyoghálók ablakra és ajtóra — szabad szellőzés rovarok nélkül.",
    ctaTitle: "Kérjen ingyenes árajánlatot szúnyoghálóra",
    intro:
      "Nyáron a legtöbb háztartásnál a nyitott ablak és a rovarmentesség között kell választani — szúnyoghálóval nem kell. A Szeko Ablak Kft egyedi méretű szúnyoghálókat gyárt és szerel ablakra és ajtóra Baján és Bács-Kiskun megye településein.",
    highlights: [
      "Ablakra és ajtóra egyaránt",
      "Egyedi méretgyártás, pontos illesztéssel",
      "Pattintható és nyíló (pliszé, tolóajtós) kivitel",
      "Gyors kivitelezés, jellemzően egy látogatással",
    ],
    body: [
      {
        heading: "Milyen szúnyogháló-típusok közül választhat?",
        text: "A leggyakoribb a pattintható szúnyogháló ablakra, de bejárati ajtóra nyíló vagy tolóajtós kivitelt is kínálunk. A helyszíni felmérésen megmutatjuk, melyik típus illik legjobban az adott nyílászáróhoz.",
      },
      {
        heading: "Ablakcseréhez vagy önállóan is",
        text: "Szúnyoghálót szerelünk új ablak mellé, de meglévő, korábban beépített ablakra és ajtóra is — nem szükséges hozzá ablakcsere.",
      },
    ],
    areaText:
      "Szúnyogháló-szerelést Baján, Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon is vállalunk.",
    faqs: [
      {
        q: "Meglévő ablakra is felszerelhető szúnyogháló?",
        a: "Igen, meglévő ablakra és ajtóra is egyedi méretben gyártjuk és szereljük a szúnyoghálót, ablakcsere nélkül is.",
      },
      {
        q: "Milyen kivitelek közül lehet választani?",
        a: "Pattintható, nyíló és tolóajtós kivitelt is kínálunk — a helyszíni felmérésen ajánljuk a nyílászáróhoz legjobban illőt.",
      },
      {
        q: "Mennyi idő alatt készül el egy szúnyogháló?",
        a: "A pontos felmérés után jellemzően pár napon belül legyártjuk és felszereljük az egyedi méretű szúnyoghálót.",
      },
    ],
  },
  {
    slug: "parkany",
    name: "Ablakpárkány",
    shortName: "párkány",
    seoTitle: "Ablakpárkány beépítés Baján és Bács-Kiskun megyében",
    metaDescription:
      "Kültéri és beltéri ablakpárkányok pontos illesztéssel Baján és Bács-Kiskun megyében, az ablakcseréhez igazítva vagy önállóan.",
    eyebrow: "Ablakpárkány",
    heroSubtitle:
      "Kültéri és beltéri ablakpárkányok pontos illesztéssel, az ablakcseréhez igazítva.",
    ctaTitle: "Kérjen ingyenes árajánlatot ablakpárkányra",
    intro:
      "Az ablakcsere után a régi párkány gyakran nem illeszkedik pontosan az új nyílászáróhoz — ilyenkor érdemes a párkányt is cserélni. A Szeko Ablak Kft kültéri és beltéri párkányokat is beépít Baján és Bács-Kiskun megye településein, egyedi méretben.",
    highlights: [
      "Kültéri és beltéri párkányok egyaránt",
      "Egyedi méretek, az adott nyílászáróhoz igazítva",
      "Pontos illesztés — nincs rés, nincs beázás",
    ],
    body: [
      {
        heading: "Miért fontos a jól illesztett párkány?",
        text: "A rosszul illesztett kültéri párkány beázáshoz és penészesedéshez vezethet, a beltéri párkány pedig esztétikailag is látszik. Pontos méretvétellel és illesztéssel biztosítjuk, hogy a párkány illeszkedjen az ablakhoz és a homlokzathoz egyaránt.",
      },
    ],
    areaText:
      "Ablakpárkány-beépítést Baján, Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon is vállalunk.",
    faqs: [
      {
        q: "Csak ablakcseréhez rendelhető párkány, vagy önállóan is?",
        a: "Önállóan is vállaljuk a párkánycserét, nem csak ablakcseréhez kapcsolódóan.",
      },
      {
        q: "Milyen anyagú párkányok közül lehet választani?",
        a: "A helyszíni felmérésen egyeztetjük az igényeknek és a költségvetésnek megfelelő kültéri és beltéri párkány-anyagot.",
      },
    ],
  },
  {
    slug: "felujitas",
    name: "Teljes körű lejavítás",
    shortName: "felújítás",
    seoTitle: "Lakásfelújítás, lejavítás Baján és Bács-Kiskun megyében",
    metaDescription:
      "Teljes körű lejavítás egy kézből Baján és Bács-Kiskun megyében: gipszkartonozás, festés, glettelés, burkolás. Tiszta munkaterület, fix határidő.",
    eyebrow: "Felújítás",
    heroSubtitle:
      "Teljes körű lejavítás egy kézből — gipszkarton, festés és burkolás, tiszta munkaterülettel és tartható határidőkkel.",
    ctaTitle: "Kérjen ingyenes árajánlatot a lejavításra",
    intro:
      "Ha ablakcsere vagy egy nagyobb felújítás után lejavításra van szükség, nem kell külön szakembereket keresni gipszkartonhoz, festéshez és burkoláshoz. A Szeko Ablak Kft ugyanazzal a csapattal végzi a teljes körű beltéri lejavítást Baján és Bács-Kiskun megye településein — fontos: kőműves vagy szerkezeti munkát nem vállalunk, kizárólag beltéri lejavítást.",
    highlights: [
      "Gipszkartonozás",
      "Festés, glettelés",
      "Padló- és falburkolás",
      "Tiszta munkaterület, fix határidő",
    ],
    body: [
      {
        heading: "Mit takar a teljes körű lejavítás?",
        text: "Gipszkartonozást, glettelést, festést és burkolást végzünk egy csapattal, egy ütemezésben — jellemzően ablakcsere vagy egyéb felújítás utáni helyreállításnál, de önálló megrendelésként is.",
      },
      {
        heading: "Amit fontos tudni",
        text: "Kőműves munkát és teljes házfelújítást (falbontás, statikai beavatkozás) nem vállalunk — a lejavítás beltéri munkákra korlátozódik. Az árajánlatban pontosan rögzítjük, mi tartozik a munkába.",
      },
    ],
    areaText:
      "Lejavítást, felújítást Baján, Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon is vállalunk.",
    faqs: [
      {
        q: "Kőműves munkát is vállalnak?",
        a: "Nem, kőműves vagy szerkezeti munkát nem vállalunk — kizárólag beltéri lejavítást: gipszkartont, festést, glettelést és burkolást.",
      },
      {
        q: "Csak ablakcseréhez kapcsolódóan vállalnak lejavítást?",
        a: "Nem, önálló megrendelésként is vállaljuk a teljes körű lejavítást, nem csak ablakcseréhez kapcsolódóan.",
      },
      {
        q: "Mennyi ideig tart egy tipikus lejavítás?",
        a: "A helyiségek számától és állapotától függ, az árajánlatban reális, fix határidőt adunk.",
      },
    ],
  },
  {
    slug: "festes",
    name: "Festés",
    shortName: "festés",
    seoTitle: "Festés, mázolás Baján és Bács-Kiskun megyében",
    metaDescription:
      "Bel- és kültéri festés Baján, Kalocsán, Kecskeméten és Bács-Kiskun megyében. Precíz élek, alapos felületkezelés, prémium festékek, gyors kivitelezéssel.",
    eyebrow: "Festés",
    heroSubtitle:
      "Tiszta, precíz bel- és kültéri festés — pontos élekkel, alapos felületkezeléssel és prémium anyagokkal, gyors kivitelezéssel.",
    ctaTitle: "Kérjen ingyenes árajánlatot festésre",
    intro:
      "A jó festés nem csak a színről szól, hanem a felületkezelésről és a precíz élekről is. A Szeko Ablak Kft bel- és kültéri festést vállal Baján és Bács-Kiskun megye településein, alapos glettelt felülettel és prémium festékanyagokkal.",
    highlights: [
      "Bel- és kültéri festés",
      "Glettelés, felületkezelés",
      "Precíz élek, alapos takarás",
      "Prémium festékek",
    ],
    body: [
      {
        heading: "Beltéri és kültéri festés is",
        text: "Beltérben a glettelt, sima felület és a precíz élek adják a minőségi végeredményt, kültéren pedig az időjárásálló festékek és az alapos felületkezelés a tartósság kulcsa. Mindkettőt saját csapattal, egy kézből végezzük.",
      },
    ],
    areaText:
      "Festést Baján, Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon is vállalunk.",
    faqs: [
      {
        q: "Kültéri homlokzatfestést is vállalnak?",
        a: "Igen, kültéri festést is vállalunk, időjárásálló, prémium festékanyagokkal.",
      },
      {
        q: "A festés ára tartalmazza a glettelést is?",
        a: "A helyszíni felmérés után az árajánlatban tételesen szerepel, milyen előkészítő munka (glettelés, felületkezelés) tartozik a festéshez.",
      },
    ],
  },
  {
    slug: "burkolas",
    name: "Padlóburkolás",
    shortName: "burkolás",
    seoTitle: "Padlóburkolás Baján és Bács-Kiskun megyében",
    metaDescription:
      "Laminált, parketta, csempe és kőburkolat lerakása Baján, Kalocsán, Kecskeméten és Bács-Kiskun megyében. Aljzatkiegyenlítés, tartós, sík felület.",
    eyebrow: "Padlóburkolás",
    heroSubtitle:
      "Hideg és meleg burkolatok szakszerű fektetése — laminált, parketta, csempe és kő, tartós, sík aljzatra.",
    ctaTitle: "Kérjen ingyenes árajánlatot padlóburkolásra",
    intro:
      "A padlóburkolás minősége az aljzat előkészítésén múlik — enélkül a legjobb burkolat is elmozdulhat vagy megrepedhet. A Szeko Ablak Kft aljzatkiegyenlítéssel és szakszerű fektetéssel vállal padlóburkolást Baján és Bács-Kiskun megye településein.",
    highlights: [
      "Laminált és parketta",
      "Csempe és kőburkolat",
      "Aljzatkiegyenlítés",
      "Tartós, sík felület",
    ],
    body: [
      {
        heading: "Meleg vagy hideg burkolat",
        text: "Laminált és parketta padlót (meleg burkolat), valamint csempét és kőburkolatot (hideg burkolat) egyaránt lerakunk, az aljzat előzetes kiegyenlítésével, hogy a végeredmény tartós és sík legyen.",
      },
    ],
    areaText:
      "Padlóburkolást Baján, Kalocsán, Kecskeméten, Dunapatajon, Hajóson, Nemesnádudvaron, Érsekcsanádon és Dusnokon is vállalunk.",
    faqs: [
      {
        q: "Aljzatkiegyenlítést is vállalnak a burkolás előtt?",
        a: "Igen, szükség esetén aljzatkiegyenlítést végzünk a burkolat lerakása előtt, hogy a felület tartós és sík legyen.",
      },
      {
        q: "Csempét és laminált padlót is lehet rendelni?",
        a: "Igen, mindkét típust vállaljuk — a helyszíni felmérésen egyeztetjük, melyik illik az adott helyiséghez.",
      },
    ],
  },
];

export function service(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
