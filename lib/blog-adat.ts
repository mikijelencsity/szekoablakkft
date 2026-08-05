// Blog bejegyzések adatai (app/blog/[slug]) — a lib/szolgaltatasok-adat.ts
// mintáját követi. Minden cikk egy szolgáltatáshoz (serviceSlug) kapcsolódik,
// hogy a hero-kép a lib/kepek.ts galériaképeiből, a CTA pedig a megfelelő
// szolgáltatás-oldalra mutasson.

export type BlogFAQ = { q: string; a: string };
export type BlogBody = { heading: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  serviceSlug: string;
  intent: "informational" | "commercial";
  publishedAt: string;
  excerpt: string;
  intro: string;
  body: BlogBody[];
  faqs: BlogFAQ[];
  ctaTitle: string;
};

export const posts: BlogPost[] = [
  {
    slug: "mikor-erdemes-ablakot-cserelni-bajan",
    title: "Mikor éri meg ablakot cserélni Baján? 7 figyelmeztető jel",
    seoTitle: "Mikor érdemes ablakot cserélni Baján? 7 figyelmeztető jel",
    metaDescription:
      "7 jel, ami mutatja, hogy itt az ideje az ablakcserének Baján. Huzat, párásodás, magas rezsi — nézze meg, mire figyeljen a nyílászáróin.",
    serviceSlug: "ablak",
    intent: "informational",
    publishedAt: "2026-04-06",
    excerpt:
      "Huzat, párásodás, magas fűtésszámla — 7 jel, ami elárulja, hogy a bajai otthonában itt az ideje az ablakcserének.",
    intro:
      "A legtöbb bajai háztartásban az ablakcsere nem azért marad el, mert nincs rá szükség, hanem mert nehéz eldönteni, hogy egy régi ablak még „kibírja” egy-két telet, vagy már veszteséges tovább használni. Az alábbi 7 jel azoknak szól, akik bizonytalanok — ha ezek közül többet is felismer otthon, a csere valószínűleg gyorsabban megtérül, mint gondolná.",
    body: [
      {
        heading: "1–2. Huzat és nedves, párás beltéri üveg",
        text: "Ha az ablak mellett állva érezhető a huzat, vagy a beltéri üvegfelület reggelente rendszeresen párás, az szinte mindig azt jelenti, hogy a tömítés vagy az üvegezés már nem szigetel megfelelően. Ez nem esztétikai probléma — ilyenkor a fűtött levegő folyamatosan távozik a nyíláson, a fűtőtest pedig ezt próbálja pótolni, ami a számlán is meglátszik.",
      },
      {
        heading: "3–4. Vetemedő tokok és nehezen záródó szárnyak",
        text: "A fa tokos ablakok évek alatt vetemednek, aminek következtében a szárny egyre nehezebben csukódik, vagy már záráskor is résnyi hézag marad. Ha erőltetni kell a kilincset, vagy a szárny alján fény szűrődik be zárt állapotban is, a tok geometriája már nem tartja a méretet — ezen tömítéscserével sem lehet érdemben segíteni.",
      },
      {
        heading: "5–6. Magas fűtésszámla és külső zajok",
        text: "Ha a fűtésszámla évről évre nő annak ellenére, hogy a fogyasztási szokások nem változtak, az ablakok hőveszteségét érdemes megvizsgálni — Baján a régi, egyrétegű vagy elöregedett kétrétegű üvegezésű ablakok az egyik leggyakoribb okozói ennek. Hasonlóképp, ha kintről jövő zajok (forgalom, szomszédos telek) zavaróan hangosnak tűnnek zárt ablak mellett is, az a hangszigetelés hiányára utal.",
      },
      {
        heading: "7. Az ablak kora és a nyílászáró típusa",
        text: "Egy 15-20 évesnél régebbi műanyag ablak, vagy egy ennél is idősebb fa ablak esetén a fenti tünetek hiánya sem garancia — a tömítőgumi és a vasalat ebben a korban már fárad, még ha ez kívülről nem is látszik azonnal. Ilyenkor érdemes egy ingyenes helyszíni felméréssel objektíven megnézetni az állapotot, mielőtt a tünetek súlyosbodnának.",
      },
    ],
    faqs: [
      {
        q: "Elég csak a tömítést kicserélni, nem kell az egész ablak?",
        a: "Ha kizárólag a tömítőgumi öregedett el egy egyébként jó állapotú, fiatal ablakon, a tömítéscsere valóban elég lehet. Vetemedett tok vagy fáradt vasalat esetén viszont ez csak átmeneti megoldás — a helyszíni felmérésen pontosan megmondjuk, melyik eset áll fenn.",
      },
      {
        q: "Télen is lehet ablakot cserélni Baján?",
        a: "Igen, a beépítés télen is elvégezhető, egy-egy nyílászárónál a munkaterület csak rövid ideig van nyitva, így a lakás nem hűl ki jelentősen. A gyártási idő miatt viszont érdemes időben, még ősszel megrendelni.",
      },
      {
        q: "Mennyivel csökkenhet a rezsiszámla ablakcsere után?",
        a: "Ez az épület állapotától és a régi ablakok típusától függ, de a huzatos, párásodó ablakok cseréje után a legtöbb ügyfelünknél érezhetően csökken a fűtési igény — pontos becslést a helyszíni felmérés után tudunk adni.",
      },
    ],
    ctaTitle: "Nem biztos benne, hogy szüksége van ablakcserére?",
  },
  {
    slug: "mennyibe-kerul-ablakcsere-bajan",
    title: "Mennyibe kerül az ablakcsere Baján? Amit az árajánlat előtt tudni kell",
    seoTitle: "Mennyibe kerül az ablakcsere Baján? Árajánlat előtt érdemes tudni",
    metaDescription:
      "Mitől függ az ablakcsere ára Baján? Nézze meg, milyen tényezők befolyásolják a végösszeget, és hogyan kaphat pontos, tételes árajánlatot.",
    serviceSlug: "ablak",
    intent: "commercial",
    publishedAt: "2026-04-13",
    excerpt:
      "Az ablakcsere ára Baján nyílásméretenként és profiltól függően nagyon eltérő lehet — összeszedtük, mi alakítja a végösszeget.",
    intro:
      "Az egyik leggyakoribb kérdés, amit Baján az ablakcsere kapcsán kapunk, hogy „mennyibe kerül egy ablak”. A válasz pontosan attól függ, mekkora a nyílás, milyen üvegezést és profilt választ, és hány ablakot cserél egyszerre — ezért nem lehet egyetlen árral válaszolni, de a tényezőket előre ismerve sokkal magabiztosabban ülhet le egy árajánlat-egyeztetésre.",
    body: [
      {
        heading: "A nyílásméret és a darabszám a legnagyobb tényező",
        text: "Minél nagyobb egy ablak felülete, annál több anyagot és üveget igényel, ezért az ár nyílásmérettől függően jelentősen szór. Emellett a darabszám is számít: ha egyszerre több ablakot cserél egy házban, a felmérés, szállítás és beépítés egy ütemben történik, ami a teljes projektre vetítve kedvezőbb fajlagos árat eredményez, mint egyesével cserélni őket évek alatt.",
      },
      {
        heading: "Profil és üvegezés: mitől lesz energiatakarékosabb az ablak",
        text: "A műanyag profilok kamraszáma és az üvegezés rétegszáma (kétrétegű vagy hőszigetelt, argongázas kivitel) közvetlenül befolyásolja az árat és a hőszigetelést is. Baján a téli-nyári hőingás miatt a hőszigetelt üvegezés jellemzően gyorsan megtérül a rezsimegtakarításon keresztül, ezért érdemes ezt figyelembe venni, ne csak a bekerülési költséget.",
      },
      {
        heading: "Mi van benne az árajánlatban a Szeko Ablak Kft-nél?",
        text: "Az árajánlatunk tételesen tartalmazza az ablak gyártását, a régi nyílászáró elszállítását, a beépítést és a munkaterület tisztán hagyását — nincsenek utólagos meglepetés-tételek. A helyszíni felmérés ingyenes, és az árajánlatot a felmérés után 1-2 munkanapon belül megkapja.",
      },
      {
        heading: "Miért érdemes helyi, saját csapatú vállalkozótól kérni ajánlatot",
        text: "Az online kalkulátorok és a távolról adott „hozzávetőleges” árak gyakran eltérnek a valóságtól, mert nem veszik figyelembe a nyílás pontos állapotát. A Szeko Ablak Kft saját, alvállalkozók nélküli csapattal dolgozik Baján és Bács-Kiskun megyében 2010 óta, ezért a helyszíni felmérés után adott ár a végleges ár is egyben — nincs utólagos áremelés a kivitelezés közben.",
      },
    ],
    faqs: [
      {
        q: "Ingyenes a helyszíni felmérés?",
        a: "Igen, a felmérés és az árajánlat is díjmentes, kötelezettség nélkül.",
      },
      {
        q: "Mennyi idő alatt kapok árajánlatot?",
        a: "A helyszíni felmérés után jellemzően 1-2 munkanapon belül tételes árajánlatot küldünk.",
      },
      {
        q: "Lehet részletekben fizetni az ablakcserét?",
        a: "Az árajánlat egyeztetésekor a fizetési ütemezésről is szót ejtünk — kérdezzen rá bátran a felmérés alkalmával.",
      },
    ],
    ctaTitle: "Kérjen tételes árajánlatot az ablakcserére",
  },
  {
    slug: "bejarati-ajto-csere-bajan-biztonsag-hoszigeteles",
    title: "Bejárati ajtó csere Baján: biztonság és hőszigetelés egyben",
    seoTitle: "Bejárati ajtó csere Baján — biztonság és hőszigetelés egy megoldásban",
    metaDescription:
      "Mire figyeljen bejárati ajtó cserénél Baján? Betörésvédelem, hőszigetelés és a beépítés pontossága — összefoglaltuk a legfontosabb szempontokat.",
    serviceSlug: "ajto",
    intent: "informational",
    publishedAt: "2026-04-20",
    excerpt:
      "A bejárati ajtó egyszerre biztonsági és hőszigetelési elem — nézze meg, mire figyeljen csere előtt Baján.",
    intro:
      "A bejárati ajtó az egyetlen olyan nyílászáró egy házon, amelynek két, egymástól teljesen eltérő feladatot kell egyszerre ellátnia: meg kell védenie az otthont a betörésektől, és ugyanolyan jól kell szigetelnie hőt és hangot, mint egy ablaknak. Baján, ahol a nyári hőség és a téli hideg is jelentős, ez a kettősség különösen fontos szempont a csere előtt.",
    body: [
      {
        heading: "A betörésvédelem nem csak a záron múlik",
        text: "Sokan azt gondolják, hogy egy erős zárszerkezet önmagában elég a biztonsághoz, pedig a tok merevsége, a pántok kialakítása és a többpontos zárás együttesen adják a valódi védelmet. Egy gyenge tokba szerelt, egyébként jó minőségű zár is könnyen feltörhető — ezért a bejárati ajtó cseréjénél a teljes rendszert, nem csak a zárat érdemes vizsgálni.",
      },
      {
        heading: "Hőszigetelés: a bejárati ajtó is hőhidat képezhet",
        text: "Egy rosszul szigetelő bejárati ajtó ugyanúgy hőveszteség-forrás, mint egy elöregedett ablak — gyakran még inkább, mert a bejárati ajtó felülete jelentős, és naponta többször nyílik-csukódik. A modern, hőszigetelt tokszerkezetű ajtók ezt a veszteséget jelentősen csökkentik, ami Baján a fűtési szezonban érezhető megtakarítást jelent.",
      },
      {
        heading: "A pontos beépítés ugyanolyan fontos, mint az ajtó minősége",
        text: "A legjobb minőségű bejárati ajtó is veszít a védelmi és szigetelési tulajdonságaiból, ha a beépítés résekkel, pontatlan illesztéssel történik. A Szeko Ablak Kft saját csapattal, réstelen beépítéssel dolgozik Baján, hogy a tok és a fal között ne maradjon hézag, ahol hő szökhetne el vagy vízbeszivárgás történhetne.",
      },
      {
        heading: "Mikor érdemes cserélni, és mikor elég felújítani",
        text: "Ha az ajtó tokja vetemedett, a zárszerkezet elavult vagy a szigetelés láthatóan hiányos, a csere hosszabb távon megéri. Ha viszont csak a felület kopott, vagy a zárat szeretné korszerűbbre cserélni egy egyébként jó állapotú tokon, ezt is meg tudjuk oldani — az árajánlat egyeztetésekor mindkét lehetőséget bemutatjuk.",
      },
    ],
    faqs: [
      {
        q: "Milyen zárszerkezetet ajánlanak bejárati ajtóra?",
        a: "Többpontos zárással szerelt biztonsági zárrendszereket építünk be, amelyek a tok több pontján rögzítik az ajtólapot, jelentősen megnehezítve a feltörést.",
      },
      {
        q: "Mennyi idő alatt cserélhető ki egy bejárati ajtó?",
        a: "Egy átlagos bejárati ajtó cseréje jellemzően egy nap alatt elkészül, a gyártás után egyeztetett időpontban.",
      },
      {
        q: "Milyen garanciát vállalnak a bejárati ajtóra?",
        a: "5 év termékgaranciát adunk az ajtóra, a beépítésre pedig 1 év garanciát vállalunk — ugyanúgy, mint az ablakoknál.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot bejárati ajtó cserére",
  },
  {
    slug: "belteri-vagy-bejarati-ajto-csere-mikor-melyik-surgosebb",
    title: "Beltéri vagy bejárati ajtó csere? Mikor melyik sürgősebb",
    seoTitle: "Beltéri vagy bejárati ajtó csere: mikor melyiket érdemes elsőnek megoldani",
    metaDescription:
      "Beltéri vagy bejárati ajtó cseréjével kezdje? Segítünk eldönteni, melyik sürgősebb Baján, és mennyibe kerülhet egy-egy megoldás.",
    serviceSlug: "ajto",
    intent: "commercial",
    publishedAt: "2026-04-27",
    excerpt:
      "Korlátozott a felújítási keret? Segítünk eldönteni, hogy a bejárati vagy a beltéri ajtók cseréje sürgősebb-e Baján.",
    intro:
      "Amikor egy bajai háztartás felújítási keretet oszt be, gyakran felmerül a kérdés: ha nem lehet mindent egyszerre megoldani, melyik ajtócsere élvezzen elsőbbséget — a bejárati vagy a beltéri ajtóké? A válasz attól függ, mi a fő probléma otthon: a biztonság, a hőveszteség vagy a belső komfort.",
    body: [
      {
        heading: "Ha a biztonság vagy a hőveszteség a gond: kezdje a bejáratival",
        text: "Ha a bejárati ajtó régi, gyengén záródik, vagy huzatot érez körülötte, ez egyszerre biztonsági kockázat és folyamatos hőveszteség-forrás — ilyenkor egyértelműen ez élvez elsőbbséget, hiszen ez az egyetlen nyílászáró, ami a teljes otthont védi kívülről.",
      },
      {
        heading: "Ha a hangszigetelés vagy az illeszkedés a gond: a beltéri ajtók jönnek",
        text: "Ha a családban többen dolgoznak vagy tanulnak otthonról, és a szobák közötti hangszigetelés zavaró, vagy a beltéri ajtók már nem illeszkednek pontosan a tokba (résnyi fény látszik, nyikorognak), a beltéri ajtók cseréje hozza a nagyobb napi komfortjavulást.",
      },
      {
        heading: "Kombinált megoldás: egy ütemben, egy csapattal",
        text: "Ha mindkét probléma fennáll, érdemes egyben megrendelni mindkét munkát, mert a helyszíni felmérés, a gyártás-egyeztetés és a beépítés egy ütemben, egy csapattal zajlik — ez időben és a fajlagos költségekben is kedvezőbb, mint két külön projektként megoldani.",
      },
      {
        heading: "Mit érdemes megkérdezni az árajánlat egyeztetésekor",
        text: "Kérdezzen rá, hogy a bejárati ajtónál milyen zárszerkezet és hőszigetelés tartozik az árhoz, a beltéri ajtóknál pedig milyen felületkezelés és pántozás. Egy jó árajánlat tételesen bontja ezeket, hogy pontosan lássa, mire költ — a Szeko Ablak Kft minden esetben így ad ajánlatot Baján és a környező településeken.",
      },
    ],
    faqs: [
      {
        q: "Egyszerre kell megrendelni a bejárati és a beltéri ajtókat?",
        a: "Nem szükséges — mindkettőt vállaljuk külön-külön is, de ha egy ütemben rendeli meg őket, a felmérés és a beépítés egy alkalommal, egy csapattal történik.",
      },
      {
        q: "Melyik olcsóbb: egy bejárati vagy egy beltéri ajtó cseréje?",
        a: "Ez a méretektől és a választott kivitelezéstől függ — az árajánlat egyeztetésekor tételesen bemutatjuk mindkét opciót, hogy összehasonlítható legyen.",
      },
      {
        q: "Beltéri ajtóknál is van garancia?",
        a: "Igen, a beltéri ajtókra is 5 év termékgarancia és 1 év beépítési garancia vonatkozik.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot ajtócserére",
  },
  {
    slug: "motoros-vagy-kezi-redony-melyiket-valassza-bajan",
    title: "Motoros vagy kézi redőny? Melyiket válassza Baján",
    seoTitle: "Motoros vagy kézi redőny Baján? Összehasonlítás és javaslat",
    metaDescription:
      "Motoros vagy kézi redőnyt válasszon Baján? Nézze meg a kényelmi, ár- és karbantartási különbségeket, mielőtt dönt.",
    serviceSlug: "redony",
    intent: "informational",
    publishedAt: "2026-05-04",
    excerpt:
      "Kényelem vagy alacsonyabb ár? Összehasonlítottuk a motoros és a kézi redőnyt, hogy könnyebben döntsön Baján.",
    intro:
      "A redőny választásánál Baján a legtöbb ügyfelünk ugyanazzal a kérdéssel szembesül: megéri-e a motoros megoldás felára, vagy elég a hagyományos, kézi működtetésű redőny? Nincs egyetlen jó válasz — attól függ, hány ablakról van szó, ki használja őket, és mennyire fontos az automatizálás.",
    body: [
      {
        heading: "A motoros redőny kényelme és időzíthetősége",
        text: "A motoros redőny távirányítóval vagy fali kapcsolóval működtethető, és időzíthető is — reggel automatikusan felmehet, este pedig lezárhatja a házat, még akkor is, ha épp nincsenek otthon. Sok emeleti, nehezen elérhető ablaknál ez nemcsak kényelmi, hanem gyakorlati szempont is.",
      },
      {
        heading: "A kézi redőny alacsonyabb ára és egyszerűsége",
        text: "A kézi működtetésű redőny olcsóbb beruházás, nincs benne elektronika, ami idővel meghibásodhat, és karbantartása is egyszerűbb. Kisebb házaknál, ahol az ablakok könnyen elérhetők, sok ügyfelünk emiatt választja továbbra is ezt a megoldást Baján.",
      },
      {
        heading: "Vegyes megoldás: nem kell mindenhol ugyanazt választani",
        text: "Nem szükséges egy háznál minden ablakra ugyanazt a típust szerelni — gyakori, hogy a nehezen elérhető, emeleti ablakokra motoros, a földszinti, könnyen elérhető nyílászárókra pedig kézi redőnyt választanak ügyfeleink, így optimalizálva a költséget.",
      },
      {
        heading: "Okosotthon-integráció: mikor van rá szükség",
        text: "Ha a családban már van okosotthon-rendszer (pl. fűtésvezérlés, riasztó), a motoros redőny ebbe is bekapcsolható, így a redőny akár a napszakhoz vagy a hőmérséklethez is igazodhat. Ez a Baján leggyakoribb igény azok körében, akik hosszabb távon terveznek automatizálni.",
      },
    ],
    faqs: [
      {
        q: "Utólag is motorosra cserélhető egy kézi redőny?",
        a: "A legtöbb esetben igen, a tok és a lamellák jellegétől függően — a helyszíni felmérésen megnézzük, hogy az adott redőnynél megoldható-e.",
      },
      {
        q: "Áramszünet esetén működik a motoros redőny?",
        a: "A legtöbb motoros redőny kézi vészkioldóval is rendelkezik, így áramszünet esetén is le- vagy felengedhető.",
      },
      {
        q: "Mennyivel kerül többe a motoros megoldás?",
        a: "A pontos felár a redőny méretétől és a választott motortípustól függ — az árajánlatban mindkét verziót feltüntetjük, hogy összehasonlíthassa.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot redőnyre",
  },
  {
    slug: "redony-ablakcserehez-igazitva-hogyan-sporolhat",
    title: "Redőny az ablakcseréhez igazítva: hogyan spórolhat vele",
    seoTitle: "Redőny az ablakcseréhez igazítva Baján — így spórolhat vele",
    metaDescription:
      "Ha úgyis ablakot cserél Baján, érdemes a redőnyt is egyszerre megoldani. Nézze meg, miért olcsóbb és gyorsabb az összehangolt munka.",
    serviceSlug: "redony",
    intent: "commercial",
    publishedAt: "2026-05-11",
    excerpt:
      "Ha ablakcserére készül Baján, a redőny egyidejű beszerelése időt és pénzt spórolhat — nézze meg, miért.",
    intro:
      "Ha már úgyis ablakcserét tervez Baján, érdemes megfontolni, hogy a redőnyt ne külön projektként, hanem ugyanabban az ütemben oldja meg. A két munka összehangolása nem csak kényelmesebb, hanem a végeredmény minőségén és a költségeken is érezhetően javít.",
    body: [
      {
        heading: "Nincs dupla munkaterület-felállítás",
        text: "Ha az ablakcsere és a redőnyszerelés külön időpontokban történik, mindkét alkalommal fel kell állítani a munkaterületet, ami időt és — ha külső vállalkozókról van szó — akár utazási költséget is jelent. Egy ütemben, egy csapattal ez elmarad, ami a teljes projekt árában is meglátszik.",
      },
      {
        heading: "A redőnytok pontosan illeszkedik az új nyílászáróhoz",
        text: "Ha a redőnyt az ablakcseréhez igazítva tervezzük, a redőnytok méretezése már az új ablak pontos méreteihez igazodik, nem egy régi, esetleg eltérő méretű nyíláshoz. Ez elkerüli az utólagos igazítást, ami külön megrendelt redőnynél gyakran szükséges.",
      },
      {
        heading: "Egy felmérés, egy árajánlat, egy időpont",
        text: "A Szeko Ablak Kft-nél az ablakcserét és a redőnyszerelést egy helyszíni felméréssel, egy tételes árajánlattal intézzük Baján és a környező településeken — nem kell két külön vállalkozóval egyeztetni az időpontokat és a részleteket.",
      },
      {
        heading: "Mikor éri meg mégis külön megoldani",
        text: "Ha a redőny igénye csak később merül fel, vagy a költségvetés nem engedi meg az egyidejű beruházást, természetesen később, önállóan is felszerelhető meglévő ablakra. Ilyenkor a helyszíni felmérésen megvizsgáljuk a meglévő nyílászárót, hogy pontosan illeszkedő redőnytokot tervezzünk hozzá.",
      },
    ],
    faqs: [
      {
        q: "Mennyivel olcsóbb, ha egyben rendelem meg az ablakcserét és a redőnyt?",
        a: "A pontos megtakarítás projektenként eltérő, de az egy ütemben végzett munka mindig kedvezőbb fajlagos árat eredményez, mint két külön időpontban végzett kivitelezés — az árajánlatban ezt is bemutatjuk.",
      },
      {
        q: "Ha most csak ablakot cserélek, később felszerelhető rá redőny?",
        a: "Igen, meglévő, korábban beépített ablakra is fel tudunk szerelni redőnyt, nem csak új ablakcseréhez kapcsolódóan.",
      },
      {
        q: "Mennyi idő alatt készül el az összehangolt munka?",
        a: "A nyílászárók számától függ, de az ablakcsere és a redőnyszerelés egy ütemezésben, jellemzően néhány nap alatt elvégezhető.",
      },
    ],
    ctaTitle: "Kérjen közös árajánlatot ablakcserére és redőnyre",
  },
  {
    slug: "melyik-szunyoghalo-tipus-illik-az-otthonahoz",
    title: "Melyik szúnyogháló típus illik az otthonához?",
    seoTitle: "Melyik szúnyogháló típus illik az otthonához Baján?",
    metaDescription:
      "Pattintható vagy nyíló szúnyogháló? Bemutatjuk a leggyakoribb típusokat ablakra és ajtóra Baján, hogy könnyebben válasszon.",
    serviceSlug: "szunyoghalo",
    intent: "informational",
    publishedAt: "2026-05-18",
    excerpt:
      "Pattintható, nyíló vagy tolóajtós szúnyogháló? Segítünk kiválasztani a nyílászáróhoz illő típust Baján.",
    intro:
      "Nyáron Baján a legtöbb háztartás ugyanazzal a dilemmával néz szembe: nyitva tartani az ablakot a szellőzésért, és elviselni a rovarokat, vagy zárva tartani és lemondani a friss levegőről. A szúnyogháló ezt a választást szünteti meg, de a megfelelő típus kiválasztása fontos ahhoz, hogy tartósan és kényelmesen használható legyen.",
    body: [
      {
        heading: "Pattintható szúnyogháló ablakra",
        text: "A leggyakoribb és legköltséghatékonyabb megoldás a nyitható, pattintható szúnyogháló, amit nyáron egyszerűen fel lehet pattintani a keretre, télen pedig levéve tárolható. Egyedi méretben gyártjuk, pontosan illeszkedve az ablak nyílásához, így nem marad rés, ahol a rovarok bejuthatnának.",
      },
      {
        heading: "Nyíló szúnyogháló ajtóra",
        text: "Bejárati vagy erkélyajtóra jellemzően nyíló kivitelű szúnyoghálót ajánlunk, amit ugyanúgy nyitni-csukni lehet, mint egy ajtót — ez akkor praktikus, ha az ajtón keresztül gyakori a közlekedés, és nem szeretné minden alkalommal levenni a hálót.",
      },
      {
        heading: "Tolóajtós (pliszé) kivitel nagyobb nyílásokhoz",
        text: "Teraszajtóknál és nagyobb nyílászáróknál a tolóajtós, pliszé kivitelű szúnyogháló praktikusabb, mert oldalra húzva nyílik, nem foglal helyet nyitott állapotban, és nagy felületeknél is stabilan tartja a formáját.",
      },
      {
        heading: "Melyiket ajánljuk a helyszíni felmérésen",
        text: "A típus kiválasztásánál a nyílászáró méretét, a használat gyakoriságát és azt vesszük figyelembe, hogy önállóan vagy ablakcseréhez kapcsolódóan szereljük-e fel. A helyszíni felmérésen mindig megmutatjuk, melyik kivitel illik legjobban az adott ablakhoz vagy ajtóhoz.",
      },
    ],
    faqs: [
      {
        q: "Télen le kell venni a pattintható szúnyoghálót?",
        a: "Nem kötelező, de sokan levéve tárolják télen, hogy kímélje a keretet — a helyszíni felmérésen adunk tanácsot a tárolásra is.",
      },
      {
        q: "Ablakcsere nélkül is felszerelhető szúnyogháló?",
        a: "Igen, meglévő, korábban beépített ablakra és ajtóra is egyedi méretben gyártjuk és szereljük a szúnyoghálót.",
      },
      {
        q: "Mennyi idő alatt készül el egy szúnyogháló?",
        a: "A pontos felmérés után jellemzően pár napon belül legyártjuk és felszereljük az egyedi méretű szúnyoghálót.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot szúnyoghálóra",
  },
  {
    slug: "szunyoghalo-ara-es-beepitese-bajan-nyari-szezon-elott",
    title: "Szúnyogháló ára és beépítése Baján a nyári szezon előtt",
    seoTitle: "Szúnyogháló ára és beépítése Baján — nyári szezon előtt érdemes tudni",
    metaDescription:
      "Mitől függ a szúnyogháló ára Baján, és mikor érdemes megrendelni a nyári szezon előtt? Összefoglaltuk a legfontosabb tudnivalókat.",
    serviceSlug: "szunyoghalo",
    intent: "commercial",
    publishedAt: "2026-05-25",
    excerpt:
      "Mitől függ a szúnyogháló ára, és mikor kell megrendelni, hogy a nyári szezon elejére készen legyen Baján?",
    intro:
      "Minden évben ugyanaz történik: az első meleg napokon megnő az érdeklődés a szúnyogháló iránt Baján, és a gyártási sorban ilyenkor már hosszabb a várakozás. Ha időben, még a szezon előtt megrendeli, elkerülheti, hogy a legmelegebb hetekben kelljen nyitott ablakkal, rovarokkal együtt élnie.",
    body: [
      {
        heading: "Mitől függ a szúnyogháló ára?",
        text: "Az ár elsősorban a nyílás méretétől és a választott kiviteltől (pattintható, nyíló vagy tolóajtós) függ. Egy nagyobb teraszajtóra tervezett pliszé megoldás értelemszerűen többe kerül, mint egy standard méretű ablakra szerelt pattintható háló — a helyszíni felmérés után adunk tételes, pontos árat.",
      },
      {
        heading: "Miért érdemes márciusban-áprilisban megrendelni",
        text: "A szúnyogháló gyártása és beépítése önmagában gyors, jellemzően pár nap a felmérés után, de a szezon elején (május-június) a megrendelések száma megugrik, ami hosszabb várakozási időt eredményezhet. Ha márciusban vagy áprilisban intézi, biztosan készen áll, mire az első igazán meleg napok jönnek.",
      },
      {
        heading: "Több ablakra egyszerre: kedvezőbb fajlagos ár",
        text: "Ha egy házban több ablakra és ajtóra is szeretne szúnyoghálót, érdemes egy megrendelésben intézni — a felmérés és a beépítés egy alkalommal történik, ami időben és fajlagos árban is kedvezőbb, mint évekre elhúzódóan, ablakonként külön megrendelni.",
      },
      {
        heading: "Mit tartalmaz az árajánlat a Szeko Ablak Kft-nél",
        text: "Az árajánlat tartalmazza az egyedi méretgyártást, a beépítést és a pontos illesztést — nincs utólagos felár. A helyszíni felmérés ingyenes, és az árajánlatot 1-2 munkanapon belül megkapja.",
      },
    ],
    faqs: [
      {
        q: "Mikor érdemes legkésőbb megrendelni a nyári szezonra?",
        a: "Áprilisban már érdemes egyeztetni az időpontot, hogy a gyártás és a beépítés a szezon eleje előtt elkészüljön.",
      },
      {
        q: "Egyszerre több ablakra és ajtóra is lehet rendelni?",
        a: "Igen, egy megrendelésben, egy felméréssel intézzük az összes nyílászárót, ami időt és költséget takarít meg.",
      },
      {
        q: "Mennyi idő alatt kapok árajánlatot?",
        a: "A helyszíni felmérés után jellemzően 1-2 munkanapon belül tételes árajánlatot küldünk.",
      },
    ],
    ctaTitle: "Foglalja le a helyszíni felmérést a szezon előtt",
  },
  {
    slug: "miert-azik-be-az-ablakparkany-gyakori-hibak-bajan",
    title: "Miért ázik be az ablakpárkány? Gyakori hibák Baján",
    seoTitle: "Miért ázik be az ablakpárkány? Gyakori hibák Baján",
    metaDescription:
      "A rosszul illesztett kültéri párkány beázáshoz vezet. Nézze meg a leggyakoribb hibákat Baján, és mikor érdemes párkányt cserélni.",
    serviceSlug: "parkany",
    intent: "informational",
    publishedAt: "2026-06-01",
    excerpt:
      "A beázó ablakpárkány szinte mindig illesztési hiba — nézze meg a leggyakoribb okokat Baján.",
    intro:
      "Sok bajai háztulajdonos szembesül azzal, hogy az ablak alatti fal vagy a beltéri párkány idővel foltosodni, nedvesedni kezd, pedig maga az ablak rendben van. A hiba forrása legtöbbször nem az ablakban, hanem a kültéri párkány illesztésében keresendő — nézzük, melyek a leggyakoribb okok.",
    body: [
      {
        heading: "Hibás lejtésszög a kültéri párkánynál",
        text: "A kültéri párkánynak enyhe lejtéssel kell kifelé vezetnie a csapadékvizet — ha ez a lejtés hiányzik vagy nem elegendő, a víz visszafolyik a fal és a párkány találkozásához, ahol idővel beszivárog. Ez az egyik leggyakoribb ok, amit régi, nem szakszerűen beépített párkányoknál látunk.",
      },
      {
        heading: "Réstelen csatlakozás hiánya a fal és a párkány között",
        text: "Ha a párkány és a homlokzat találkozásánál rés marad, vagy a tömítés idővel elöregszik és megreped, a csapadékvíz ezen a résen keresztül jut be a falszerkezetbe. Ez gyakran csak évek múlva válik láthatóvá, amikor a beltéri festésen vagy vakolaton már megjelenik a nedvesség nyoma.",
      },
      {
        heading: "Régi párkány, amely nem illeszkedik az új ablakhoz",
        text: "Ablakcsere után gyakori hiba, hogy a régi párkányt megtartják, pedig az új nyílászáró mérete vagy pozíciója már nem egyezik pontosan a régivel. Ilyenkor a párkány és az ablak közötti illesztés soha nem lesz tökéletes, ami előbb-utóbb beázáshoz vezet.",
      },
      {
        heading: "Hogyan előzhető meg mindez",
        text: "A megoldás a pontos méretvétel és a megfelelő lejtésszöggel, réstelenül beépített párkány — akár ablakcseréhez igazítva, akár önállóan. A Szeko Ablak Kft minden párkánybeépítésnél egyedi méretvétellel dolgozik, hogy a fal, az ablak és a párkány között ne maradjon rés.",
      },
    ],
    faqs: [
      {
        q: "Ha csak a párkány ázik be, elég azt kicserélni?",
        a: "A legtöbb esetben igen, ha a beázás oka a párkány illesztése vagy lejtésszöge, nem szükséges hozzá ablakcsere.",
      },
      {
        q: "Mennyi idő alatt derül ki, hogy egy párkány rosszul van beépítve?",
        a: "Ez évekbe telhet, mert a beázás gyakran csak akkor válik láthatóvá, amikor a nedvesség már megjelenik a beltéri falon vagy festésen.",
      },
      {
        q: "Milyen anyagú párkányt ajánlanak?",
        a: "A helyszíni felmérésen egyeztetjük az igényeknek és a költségvetésnek megfelelő kültéri és beltéri párkány-anyagot.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot ablakpárkányra",
  },
  {
    slug: "ablakparkany-csere-ablakcserehez-igazitva-mikor-szukseges",
    title: "Ablakpárkány csere ablakcseréhez igazítva: mikor szükséges",
    seoTitle: "Ablakpárkány csere ablakcseréhez igazítva Baján — mikor van rá szükség",
    metaDescription:
      "Ablakcseréhez mindig szükséges párkánycsere is? Nézze meg, mikor érdemes egyszerre megoldani Baján, és mennyivel jár ez.",
    serviceSlug: "parkany",
    intent: "commercial",
    publishedAt: "2026-06-08",
    excerpt:
      "Ablakcseréhez nem mindig kell új párkány is — de van, amikor egyértelműen megéri egyszerre megoldani Baján.",
    intro:
      "Ablakcserénél Baján gyakran felmerül a kérdés, hogy szükséges-e egyúttal a párkányt is lecserélni, vagy megtartható a régi. A válasz az ablak méretének és pozíciójának változásától, valamint a régi párkány állapotától függ — nézzük, mikor éri meg egyszerre megoldani.",
    body: [
      {
        heading: "Ha az új ablak mérete vagy pozíciója eltér a régitől",
        text: "Ha az új nyílászáró szélesebb, keskenyebb vagy máshogy helyezkedik el, mint a korábbi, a régi párkány szinte biztosan nem fog pontosan illeszkedni hozzá — ilyenkor a párkánycsere gyakorlatilag elkerülhetetlen, ha el akarja kerülni a résképződést és a beázást.",
      },
      {
        heading: "Ha a régi párkány már most is sérült vagy beázik",
        text: "Ha az ablakcsere előtt már látszanak a beázás jelei (foltosodás, penész a fal alján), érdemes ezt az alkalmat kihasználni a párkány cseréjére is — egy ütemben megoldva nem kell külön munkaterületet felállítani később.",
      },
      {
        heading: "Amikor megtartható a régi párkány",
        text: "Ha az új ablak pontosan ugyanabba a méretbe és pozícióba kerül, mint a régi, és a párkány jó állapotban van, jó lejtéssel, réstelen illesztéssel, nincs szükség cserére. A helyszíni felmérésen ezt mindig megvizsgáljuk, és csak akkor javasoljuk a cserét, ha valóban indokolt.",
      },
      {
        heading: "Egy felmérés, egy árajánlat, ha mindkettőt egyszerre kéri",
        text: "Ha egyszerre rendeli meg az ablakcserét és a párkánycserét, a Szeko Ablak Kft egy helyszíni felméréssel és egy tételes árajánlattal intézi mindkettőt Baján és a környező településeken — nincs szükség külön egyeztetésre két vállalkozóval.",
      },
    ],
    faqs: [
      {
        q: "Mindig szükséges párkányt is cserélni ablakcserénél?",
        a: "Nem, csak akkor, ha az új ablak mérete vagy pozíciója eltér a régitől, vagy a régi párkány már sérült, beázik.",
      },
      {
        q: "Önállóan is megrendelhető a párkánycsere?",
        a: "Igen, önállóan is vállaljuk, nem csak ablakcseréhez kapcsolódóan.",
      },
      {
        q: "Mennyivel drágább, ha egyszerre rendelem meg mindkettőt?",
        a: "Az egy ütemben végzett munka jellemzően kedvezőbb fajlagos árat eredményez, mint két külön időpontban — az árajánlatban tételesen bemutatjuk.",
      },
    ],
    ctaTitle: "Kérjen közös árajánlatot ablakcserére és párkányra",
  },
  {
    slug: "ablakcsere-utani-lejavitas-bajan-mit-takar",
    title: "Ablakcsere utáni lejavítás Baján: mit takar és mennyi idő",
    seoTitle: "Ablakcsere utáni lejavítás Baján — mit takar és mennyi ideig tart",
    metaDescription:
      "Ablakcsere után szükség lehet gipszkartonozásra, glettelésre és festésre. Nézze meg, mit takar a teljes körű lejavítás Baján, és mennyi ideig tart.",
    serviceSlug: "felujitas",
    intent: "informational",
    publishedAt: "2026-06-15",
    excerpt:
      "Ablakcsere után gyakran szükséges a fal körüli lejavítás — nézze meg, mit takar ez Baján, és mennyi ideig tart.",
    intro:
      "Egy ablakcsere önmagában ritkán marad nyom nélkül a fal belső felületén — a tok körüli vakolat, a sarkok és néha a teljes fal is helyreállításra szorulhat. A Szeko Ablak Kft-nél ezt a munkát „teljes körű lejavításnak” hívjuk, és Baján ugyanaz a csapat végzi, aki az ablakcserét is elvégezte.",
    body: [
      {
        heading: "Mit takar a lejavítás ablakcsere után",
        text: "Az ablak körüli fal gyakran sérül a bontás és a beépítés során — ez gipszkartonozást, glettelést és festést jelenthet a nyílászáró körül, vagy akár a teljes helyiségben, ha az ügyfél az egész falat egyszerre szeretné felfrissíteni.",
      },
      {
        heading: "Miért egy csapattal érdemes megoldani",
        text: "Ha az ablakcserét és a lejavítást ugyanaz a csapat végzi, nem kell újra elmagyarázni a helyzetet egy másik szakembernek, és a munkaterület-felállítás is csak egyszer történik meg. Ez időt spórol, és biztosítja, hogy a végeredmény összhangban legyen az ablakcsere minőségével.",
      },
      {
        heading: "Mennyi ideig tart egy tipikus lejavítás",
        text: "Egy-két ablak körüli helyreállítás jellemzően egy-két nap alatt elkészül, míg egy teljes szoba vagy több helyiség lejavítása a helyiségek számától és állapotától függően hosszabb ideig tart. Az árajánlatban mindig reális, fix határidőt adunk.",
      },
      {
        heading: "Amit fontos tudni: mi nem tartozik bele",
        text: "Kőműves vagy szerkezeti munkát (falbontás, statikai beavatkozás) nem vállalunk — a lejavítás kizárólag beltéri munkákra korlátozódik: gipszkartonozás, glettelés, festés és burkolás. Az árajánlatban pontosan rögzítjük, mi tartozik a munkába.",
      },
    ],
    faqs: [
      {
        q: "Csak ablakcseréhez kapcsolódóan vállalnak lejavítást?",
        a: "Nem, önálló megrendelésként is vállaljuk a teljes körű lejavítást, nem csak ablakcseréhez kapcsolódóan.",
      },
      {
        q: "Kőműves munkát is vállalnak?",
        a: "Nem, kizárólag beltéri lejavítást vállalunk: gipszkartont, festést, glettelést és burkolást.",
      },
      {
        q: "Ugyanaz a csapat végzi az ablakcserét és a lejavítást?",
        a: "Igen, a Szeko Ablak Kft saját csapata végzi mindkét munkát, egy ütemezésben, ha ezt kéri.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot a lejavításra",
  },
  {
    slug: "gipszkarton-festes-burkolas-egy-kezbol-bajan",
    title: "Gipszkarton, festés, burkolás egy kézből Baján",
    seoTitle: "Gipszkarton, festés, burkolás egy kézből Baján — teljes körű lejavítás",
    metaDescription:
      "Miért érdemes egy vállalkozóval megoldani a gipszkartonozást, festést és burkolást Baján? Nézze meg az egy kézből történő felújítás előnyeit.",
    serviceSlug: "felujitas",
    intent: "commercial",
    publishedAt: "2026-06-22",
    excerpt:
      "Miért egyszerűbb és olcsóbb egy csapattal megoldani a gipszkartonozást, festést és burkolást Baján?",
    intro:
      "Egy nagyobb beltéri felújításnál Baján a legtöbb háztulajdonos szembesül azzal, hogy külön szakembert kell keresnie gipszkartonhoz, festéshez és burkoláshoz — ez nemcsak szervezési teher, hanem a felelősségvállalás szempontjából is bizonytalanabb, ha valami nem stimmel a munkák határánál. Az egy kézből történő megoldás ezt a problémát oldja meg.",
    body: [
      {
        heading: "Egy ütemezés, egy felelős csapat",
        text: "Ha a gipszkartonozást, festést és burkolást egy csapat végzi, nem kell egyeztetni három különböző szakember időpontját, és nem fordulhat elő, hogy egyik a másikra mutogat, ha valami nem illeszkedik pontosan — a Szeko Ablak Kft egy csapattal, egy ütemezésben végzi mindhárom munkafázist Baján.",
      },
      {
        heading: "Tiszta munkaterület a teljes folyamat alatt",
        text: "Egy összehangolt felújításnál a munkaterület védelme (bútorok letakarása, portalanítás) egyszer történik meg a teljes folyamatra, nem munkafázisonként újra — ez a lakók számára jelentősen kevesebb kellemetlenséget jelent.",
      },
      {
        heading: "Fix határidő a teljes projektre",
        text: "Mivel egy csapat látja át a teljes munkát, az árajánlatban egy reális, a teljes projektre vonatkozó határidőt tudunk adni, nem kell külön-külön szakemberek ütemezésének bizonytalanságával számolni.",
      },
      {
        heading: "Mit érdemes tisztázni az árajánlat előtt",
        text: "Kérdezzen rá, hogy az árajánlat tartalmazza-e az aljzatkiegyenlítést, a glettelést és a felületkezelést is, ne csak a látható végmunkát — a Szeko Ablak Kft árajánlata mindig tételesen bontja ezeket, hogy pontosan lássa, mire számíthat.",
      },
    ],
    faqs: [
      {
        q: "Csak ablakcsere után vállalják ezt a munkát?",
        a: "Nem, önálló megrendelésként is vállaljuk a teljes körű lejavítást és felújítást.",
      },
      {
        q: "Padlóburkolás is része lehet a projektnek?",
        a: "Igen, laminált, parketta, csempe és kőburkolat lerakását is vállaljuk, aljzatkiegyenlítéssel együtt.",
      },
      {
        q: "Mennyi ideig tart egy teljes körű beltéri felújítás?",
        a: "A helyiségek számától és állapotától függ — az árajánlatban reális, fix határidőt adunk.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot a teljes körű lejavításra",
  },
  {
    slug: "homlokzatfestes-bajan-mikor-idoszeru",
    title: "Homlokzatfestés Baján: mikor időszerű, mire figyeljen",
    seoTitle: "Homlokzatfestés Baján — mikor időszerű és mire figyeljen",
    metaDescription:
      "Mikor érdemes homlokzatot festeni Baján, és milyen felületkezelés kell hozzá? Összefoglaltuk a legfontosabb szempontokat.",
    serviceSlug: "festes",
    intent: "informational",
    publishedAt: "2026-06-29",
    excerpt:
      "Repedt, kifakult homlokzat? Nézze meg, mikor érdemes homlokzatot festeni Baján, és mire figyeljen felújítás előtt.",
    intro:
      "A homlokzat az első, amit egy ház mutat magából, de a festés nem csak esztétikai kérdés — az időjárás elleni védelem szempontjából is fontos. Baján, ahol a nyári hőség és a téli fagy is igénybe veszi a külső felületeket, érdemes tudni, mikor érdemes belevágni a homlokzatfestésbe.",
    body: [
      {
        heading: "Mikor látszik, hogy itt az ideje?",
        text: "Kifakult szín, hajszálrepedések a vakolaton vagy pergő, hólyagosodó festékréteg mind arra utalnak, hogy a felület már nem védi megfelelően a homlokzatot. Ha ezeket a jeleket figyelmen kívül hagyja, a repedéseken keresztül nedvesség juthat a vakolat alá, ami hosszabb távon komolyabb, drágább javítást igényelhet.",
      },
      {
        heading: "Miért fontos az alapos felületkezelés",
        text: "A tartós eredmény kulcsa nem a festék márkája, hanem az előkészítés: a laza, pergő rétegek eltávolítása, a repedések javítása és a megfelelő alapozás nélkül a legjobb minőségű festék is gyorsan leválik. A Szeko Ablak Kft minden homlokzatfestésnél alapos felületkezeléssel dolgozik.",
      },
      {
        heading: "Időjárásálló, prémium festékek Baján",
        text: "A homlokzati festéknek egyszerre kell ellenállnia a nyári UV-sugárzásnak és a téli fagynak-olvadásnak, ezért prémium, időjárásálló festékanyagokat használunk, amelyek hosszabb távon is megtartják a színüket és a védőréteg tulajdonságait.",
      },
      {
        heading: "Mikor érdemes időzíteni a munkát",
        text: "A homlokzatfestés ideális időszaka a száraz, mérsékelt hőmérsékletű hónapok (tavasz vagy kora ősz Baján), amikor a festék megfelelően köt meg, és nem kell tartani a hirtelen esőtől vagy a túl erős napsütéstől munka közben.",
      },
    ],
    faqs: [
      {
        q: "Milyen jelekből ismerhető fel, hogy ideje a homlokzatot festeni?",
        a: "Kifakult szín, hajszálrepedések vagy pergő festékréteg mind arra utalnak, hogy érdemes megújítani a felületet.",
      },
      {
        q: "Milyen évszakban érdemes homlokzatot festetni Baján?",
        a: "A száraz, mérsékelt hőmérsékletű tavaszi vagy kora őszi időszak ideális, amikor a festék megfelelően köt meg.",
      },
      {
        q: "A repedések javítása is benne van az árajánlatban?",
        a: "Igen, a helyszíni felmérés után az árajánlatban tételesen szerepel, milyen előkészítő munka (repedésjavítás, felületkezelés) tartozik a festéshez.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot homlokzatfestésre",
  },
  {
    slug: "belteri-festes-glettelt-feluletre-preciz-eredmeny",
    title: "Beltéri festés glettelt felületre: a precíz eredmény titka",
    seoTitle: "Beltéri festés glettelt felületre Baján — a precíz eredmény titka",
    metaDescription:
      "Mitől lesz igazán szép egy beltéri festés Baján? A glettelt felület és a precíz élek szerepét mutatjuk be.",
    serviceSlug: "festes",
    intent: "commercial",
    publishedAt: "2026-07-06",
    excerpt:
      "Nem a festék színe, hanem a felület és az élek adják a minőségi beltéri festést Baján — nézze meg, miért.",
    intro:
      "Amikor beltéri festésről esik szó Baján, a legtöbb ügyfél a színválasztásra fókuszál, pedig a végeredmény minősége valójában két másik tényezőn múlik: a felület előkészítésén (glettelés) és az élek pontosságán. Ez a két szempont különbözteti meg a szakszerű festést az amatőr kivitelezéstől.",
    body: [
      {
        heading: "Miért kulcsfontosságú a glettelés",
        text: "A glettelés az a réteg, ami simává, egyenletessé teszi a falat a festés előtt — enélkül minden apró egyenetlenség, régi javítás vagy repedés átüt a festékrétegen, különösen erősebb, direkt fényben. Egy alaposan glettelt felület adja azt a mattan sima, professzionális hatást, amit a legtöbb ügyfelünk elképzel a végeredményről.",
      },
      {
        heading: "A precíz élek adják a „kézzelfogható” minőséget",
        text: "A festés minőségén sokat elárul, hogy mennyire egyenesek és tiszták az élek a sarkoknál, a mennyezetnél és a nyílászárók körül — az alapos takarás és a gyakorlott kéz nélkül ezek az élek elmosódnak vagy egyenetlenné válnak, ami a legjobb színválasztást is lerontja.",
      },
      {
        heading: "Prémium festékek: nem csak a szín tartósságáról szól",
        text: "A prémium festékek jobb fedést adnak kevesebb réteggel, és tartósabban ellenállnak a kopásnak, ami különösen forgalmas helyiségekben (folyosó, konyha) számít. A Szeko Ablak Kft beltéri festésnél is prémium anyagokkal dolgozik, hogy a végeredmény évekig szép maradjon.",
      },
      {
        heading: "Mit érdemes megkérdezni az árajánlat egyeztetésekor",
        text: "Kérdezzen rá, hogy a glettelés és az alapos takarás benne van-e az árajánlatban, ne csak a festékfelhordás — ez az, ami leginkább megkülönbözteti a szakszerű, precíz munkát az olcsóbb, felületes megoldástól.",
      },
    ],
    faqs: [
      {
        q: "A festés ára tartalmazza a glettelést is?",
        a: "A helyszíni felmérés után az árajánlatban tételesen szerepel, milyen előkészítő munka (glettelés, felületkezelés) tartozik a festéshez.",
      },
      {
        q: "Kültéri homlokzatfestést is vállalnak?",
        a: "Igen, kültéri festést is vállalunk, időjárásálló, prémium festékanyagokkal.",
      },
      {
        q: "Mennyi idő alatt készül el egy szoba festése?",
        a: "A helyiség méretétől és a szükséges előkészítő munkától függ — az árajánlatban reális határidőt adunk.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot beltéri festésre",
  },
  {
    slug: "laminalt-vagy-csempe-padloburkolat-valasztas",
    title: "Laminált vagy csempe? Padlóburkolat-választás Bács-Kiskun megyei otthonokhoz",
    seoTitle: "Laminált vagy csempe? Padlóburkolat-választás Bács-Kiskun megyében",
    metaDescription:
      "Meleg vagy hideg burkolatot válasszon? Összehasonlítottuk a laminált, parketta, csempe és kőburkolat előnyeit Bács-Kiskun megyei otthonokhoz.",
    serviceSlug: "burkolas",
    intent: "informational",
    publishedAt: "2026-07-13",
    excerpt:
      "Melyik illik jobban az otthonához: laminált, parketta, csempe vagy kőburkolat? Segítünk választani.",
    intro:
      "A padlóburkolat kiválasztása Bács-Kiskun megyei otthonoknál gyakran a „meleg vagy hideg burkolat” kérdésre egyszerűsödik le, pedig helyiségenként is eltérő lehet a jó választás. Nézzük, mi számít a döntésnél.",
    body: [
      {
        heading: "Laminált és parketta: meleg, otthonos hatás",
        text: "A laminált és a parketta padló melegebb tapintású, jobban illik hálószobákba és nappalikba, ahol a komfortérzet fontosabb, mint a vízállóság. Karbantartásuk egyszerű, de nedves helyiségekbe (fürdő, konyha) kevésbé ajánlott.",
      },
      {
        heading: "Csempe és kőburkolat: tartósság és vízállóság",
        text: "A csempe és a kőburkolat ellenállóbb a nedvességgel és a kopással szemben, ezért fürdőszobákba, konyhákba és bejárati terekbe jellemzően ezt ajánljuk. Hidegebb tapintású, de jól kombinálható padlófűtéssel.",
      },
      {
        heading: "Miért számít az aljzat állapota a választásnál",
        text: "Bármelyik burkolatot választja, a döntő tényező az aljzat síksága és állapota — egyenetlen aljzaton a laminált padló kopoghat vagy elmozdulhat, a csempe pedig megrepedhet. Ezért minden burkolás előtt felmérjük, szükséges-e aljzatkiegyenlítés.",
      },
      {
        heading: "Vegyes megoldás helyiségenként",
        text: "Nem szükséges egy típust választani az egész házra — sok ügyfelünk a nappaliba és a hálószobákba laminált vagy parketta padlót, a fürdőbe és a konyhába csempét választ. A helyszíni felmérésen segítünk kiválasztani a helyiséghez illő burkolatot.",
      },
    ],
    faqs: [
      {
        q: "Melyik burkolat bírja jobban a padlófűtést?",
        a: "A csempe és a kőburkolat jellemzően jobban vezeti a hőt, de megfelelő típusú laminált padló is alkalmazható padlófűtéshez — a helyszíni felmérésen egyeztetjük a lehetőségeket.",
      },
      {
        q: "Csempét és laminált padlót is lehet egy háznál rendelni?",
        a: "Igen, mindkét típust vállaljuk — a helyszíni felmérésen egyeztetjük, melyik illik az adott helyiséghez.",
      },
      {
        q: "Aljzatkiegyenlítést is vállalnak a burkolás előtt?",
        a: "Igen, szükség esetén aljzatkiegyenlítést végzünk a burkolat lerakása előtt, hogy a felület tartós és sík legyen.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot padlóburkolásra",
  },
  {
    slug: "aljzatkiegyenlites-bajan-miert-nem-hagyhato-ki",
    title: "Aljzatkiegyenlítés Baján: miért nem hagyható ki burkolás előtt",
    seoTitle: "Aljzatkiegyenlítés Baján — miért nem hagyható ki burkolás előtt",
    metaDescription:
      "Miért fontos az aljzatkiegyenlítés padlóburkolás előtt Baján? Nézze meg, milyen problémákat előz meg, és mennyivel jár a munka.",
    serviceSlug: "burkolas",
    intent: "commercial",
    publishedAt: "2026-07-20",
    excerpt:
      "Az aljzatkiegyenlítés kihagyása a leggyakoribb hiba padlóburkolásnál Baján — nézze meg, miért drágább hosszú távon.",
    intro:
      "Sok ügyfelünk Baján szeretné kihagyni az aljzatkiegyenlítést, hogy csökkentse a padlóburkolás költségét — pedig ez az a lépés, ami a végeredmény tartósságát leginkább meghatározza. Nézzük, miért nem éri meg spórolni ezen a munkafázison.",
    body: [
      {
        heading: "Mi történik egyenetlen aljzaton?",
        text: "Egyenetlen aljzaton a laminált vagy parketta padló idővel kopoghat, elmozdulhat, a csempe és a kőburkolat pedig megrepedhet a terhelés hatására. Ezek a problémák gyakran csak hónapokkal a burkolás után jelentkeznek, amikor a javítás már a teljes burkolat felbontásával jár.",
      },
      {
        heading: "Az aljzatkiegyenlítés folyamata",
        text: "A meglévő aljzat felmérése után öntapasztó vagy hagyományos aljzatkiegyenlítő anyaggal síkosítjuk a felületet, hogy a burkolat egyenletes, stabil alapra kerüljön. Ez a munkafázis száradási időt is igényel, amit a projekt ütemezésébe eleve beépítünk.",
      },
      {
        heading: "Mennyivel drágább az aljzatkiegyenlítéssel végzett munka?",
        text: "Az aljzatkiegyenlítés a projekt teljes költségének viszonylag kis részét teszi ki, viszont a kihagyása utólagos garanciális problémákhoz és drágább javításhoz vezethet — hosszú távon ez a beruházás mindig megtérül.",
      },
      {
        heading: "Mikor nem szükséges aljzatkiegyenlítés",
        text: "Ha az aljzat már eleve sík és jó állapotú (például egy nemrég épült házban), a helyszíni felmérés után előfordulhat, hogy nincs szükség erre a munkafázisra — ezt mindig objektíven, a felmérés eredménye alapján javasoljuk, nem automatikusan számoljuk fel.",
      },
    ],
    faqs: [
      {
        q: "Minden burkolás előtt szükséges aljzatkiegyenlítés?",
        a: "Nem feltétlenül — csak akkor, ha a felmérés során egyenetlenséget találunk. Jó állapotú, sík aljzatnál elhagyható.",
      },
      {
        q: "Mennyi ideig tart az aljzatkiegyenlítés száradása?",
        a: "Az anyagtól és a rétegvastagságtól függ, ezt a projekt ütemezésébe eleve belekalkuláljuk, hogy a burkolás időben elkezdődhessen.",
      },
      {
        q: "Csempe és laminált padló alá is szükséges aljzatkiegyenlítés?",
        a: "Igen, mindkét burkolattípusnál fontos a sík, stabil aljzat — a helyszíni felmérésen ellenőrizzük, szükséges-e a munkafázis.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot padlóburkolásra és aljzatkiegyenlítésre",
  },
  {
    slug: "ablakcsere-kalocsan",
    title: "Ablakcsere Kalocsán: felméréstől a beépítésig",
    seoTitle: "Ablakcsere Kalocsán — felmérés, árajánlat, beépítés egy csapattól",
    metaDescription:
      "Ablakcsere Kalocsán saját csapattal, ingyenes helyszíni felméréssel és tételes árajánlattal. Nézze meg, hogyan zajlik a folyamat.",
    serviceSlug: "ablak",
    intent: "commercial",
    publishedAt: "2026-07-22",
    excerpt:
      "Kalocsán is ugyanaz a csapat méri fel és építi be az ablakot, mint Baján — nézze meg, hogyan zajlik a folyamat.",
    intro:
      "Kalocsán az ablakcserénél a leggyakoribb kérdés nem az, hogy milyen ablak kell, hanem hogy kire lehet rábízni a munkát. A székhelyünk Sükösdön van, a Kalocsa–Baja tengelyen, így Kalocsa a törzsterületünk része: ugyanaz a saját csapat jár ki felmérni és beépíteni, aki a bajai munkákat is végzi — alvállalkozó nélkül.",
    body: [
      {
        heading: "Helyszíni felmérés: miért nem elég a telefonos ár",
        text: "Egy ablak árát nem lehet felelősen megmondani a nyílás megnézése nélkül, mert a bekerülési költséget nem csak a méret alakítja, hanem a fal állapota, a régi tok típusa és az, hogy a bontás után mekkora lejavítás várható. Kalocsán is ingyenes és kötelezettség nélküli a helyszíni felmérés, és ez az egyetlen mód arra, hogy az ajánlat végleges ár legyen, ne becslés.",
      },
      {
        heading: "Tételes árajánlat 1-2 munkanapon belül",
        text: "A felmérés után 1-2 munkanapon belül küldjük a tételes árajánlatot, amiben külön soron szerepel az ablak gyártása, a régi nyílászáró bontása és elszállítása, a beépítés, valamint — ha kéri — a tok körüli lejavítás. Így pontosan látja, mire költ, és nem érheti utólagos meglepetés a kivitelezés közben.",
      },
      {
        heading: "Beépítés: réstelen illesztés, tiszta munkaterület",
        text: "A beépítésnél a tok és a fal közötti réstelen illesztésre figyelünk, mert a legjobb ablak is veszít a hőszigeteléséből, ha hézag marad körülötte. A munkaterületet napi szinten tisztán hagyjuk, a régi nyílászárót pedig elszállítjuk — nem a megrendelő gondja, mi lesz a kibontott ablakkal.",
      },
      {
        heading: "Ha a párkány vagy a redőny is sorra kerül",
        text: "Kalocsán is gyakori, hogy az ablakcserével együtt merül fel a kültéri párkány vagy a redőny kérdése. Érdemes ezeket egyszerre egyeztetni, mert egy felmérésből, egy árajánlatból és egy beépítési ütemből megoldható — így nem kell később újra munkaterületet felállítani egy már kész falnál.",
      },
    ],
    faqs: [
      {
        q: "Kalocsán is ingyenes a helyszíni felmérés?",
        a: "Igen, a felmérés és a tételes árajánlat Kalocsán is díjmentes és kötelezettség nélküli, ugyanúgy, mint Baján.",
      },
      {
        q: "Saját csapat végzi a beépítést, vagy alvállalkozó?",
        a: "A Szeko Ablak Kft saját csapatával dolgozik, alvállalkozó nélkül — ugyanaz az emberek végzik a beépítést, akik a felmérésen jártak.",
      },
      {
        q: "Milyen garanciát kapok az ablakra?",
        a: "5 év termékgaranciát adunk a nyílászáróra, és 1 év garanciát a beépítésre.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot ablakcserére Kalocsán",
  },
  {
    slug: "ablakcsere-sukosdon",
    title: "Ablakcsere Sükösdön: helyben vagyunk, ez a székhelyünk",
    seoTitle: "Ablakcsere Sükösdön — helyi csapat, ingyenes felmérés",
    metaDescription:
      "Sükösdön van a székhelyünk, így az ablakcsere felmérése és beépítése gyorsan ütemezhető. Nézze meg, mit jelent ez a gyakorlatban.",
    serviceSlug: "ablak",
    intent: "informational",
    publishedAt: "2026-07-23",
    excerpt:
      "Sükösdön van a székhelyünk — nézze meg, mit jelent ez az ütemezésben és a felmérés gyorsaságában.",
    intro:
      "A Szeko Ablak Kft székhelye Sükösdön van, a Dózsa György úton. Ez a helyieknek nem marketingszöveg, hanem gyakorlati különbség: a felmérés könnyebben beilleszthető egy napba, egy esetleges utólagos igazítás miatt nem kell hetekre időpontot keresni, és a munka közben felmerülő kérdéseket személyesen is meg lehet beszélni.",
    body: [
      {
        heading: "Mit jelent a helyi jelenlét egy ablakcserénél",
        text: "A nyílászáró-csere nem egyetlen esemény, hanem több találkozás: felmérés, méretegyeztetés, beépítés, és néha egy utólagos beállítás, amikor a szárny bejáratódott. Ha a kivitelező távolról jár ki, ezek a lépések könnyen hetekre széthúzódnak — helyben viszont rugalmasabban ütemezhetők.",
      },
      {
        heading: "Régi fa ablakok kiváltása sükösdi családi házakban",
        text: "Sok környékbeli családi házban még az eredeti, fa tokos ablakok vannak, amelyek évtizedek alatt vetemedtek: a szárny nehezen csukódik, záráskor is marad hézag, télen érezhető a huzat. Ezeknél a tömítéscsere már csak átmeneti megoldás, mert nem a gumi, hanem a tok geometriája adta fel — a felmérésen ezt egyértelműen meg lehet állapítani.",
      },
      {
        heading: "Egy csapat az ablaktól a lejavításig",
        text: "A bontás után az ablak körüli fal szinte mindig igényel valamennyi helyreállítást. Mivel gipszkartonozást, glettelést, festést és burkolást is végzünk, nem kell másik szakembert keresni a munka befejezéséhez — kőműves és szerkezeti munkát viszont nem vállalunk, ezt előre tisztázzuk az ajánlatban.",
      },
      {
        heading: "Mit érdemes előkészíteni a felmérés előtt",
        text: "Segít, ha előre végiggondolja, hány nyílászáróról van szó, melyiknél a legrosszabb a helyzet, és hogy egyszerre vagy ütemezve szeretné megcsinálni. Ha van elképzelése redőnyről, szúnyoghálóról vagy párkányról, azt is érdemes ugyanazon a felmérésen szóba hozni, hogy egy árajánlatba kerüljön.",
      },
    ],
    faqs: [
      {
        q: "Hol van a Szeko Ablak Kft székhelye?",
        a: "A székhelyünk 6346 Sükösd, Dózsa György út 285. — innen látjuk el Baját, Kalocsát és a környező településeket.",
      },
      {
        q: "Ütemezve, több részletben is cserélhetők az ablakok?",
        a: "Igen, nem kötelező egyszerre az összeset kicserélni. Ilyenkor is érdemes egy felmérésen végignézni a teljes házat, hogy a sorrendet együtt tudjuk megtervezni.",
      },
      {
        q: "Az ablak körüli falat is helyreállítják?",
        a: "Igen, a tok körüli lejavítást (gipszkarton, glettelés, festés) vállaljuk. Kőműves és szerkezeti munkát nem végzünk.",
      },
    ],
    ctaTitle: "Kérjen ingyenes felmérést ablakcserére Sükösdön",
  },
  {
    slug: "nyilaszaro-csere-ersekcsanadon",
    title: "Nyílászáró-csere Érsekcsanádon: ajtó és ablak egy ütemben",
    seoTitle: "Nyílászáró-csere Érsekcsanádon — bejárati ajtó és ablak egyszerre",
    metaDescription:
      "Érsekcsanádon a bejárati ajtó és az ablakok cseréje egy ütemben is megoldható. Nézze meg, mikor éri meg összevonni a két munkát.",
    serviceSlug: "ajto",
    intent: "commercial",
    publishedAt: "2026-07-24",
    excerpt:
      "Érsekcsanádon a bejárati ajtó és az ablakok cseréjét egy felméréssel, egy ütemben is meg tudjuk oldani.",
    intro:
      "Érsekcsanádon gyakran indul úgy egy projekt, hogy a megrendelő eredetileg csak a bejárati ajtót cserélné, a felmérésen viszont kiderül, hogy az ablakok is ugyanabban az állapotban vannak. Ilyenkor érdemes végiggondolni, megéri-e összevonni a két munkát, vagy jobb ütemezve haladni.",
    body: [
      {
        heading: "Miért kerül elő szinte mindig az ablak is",
        text: "A bejárati ajtó és az ablakok általában egyidősek egy házban, így ha az ajtó tokja vetemedett és a szigetelése elfáradt, az ablakoknál is nagy eséllyel ugyanez a helyzet. Ezért a felmérésen mindig végignézzük a teljes nyílászáró-állományt, még akkor is, ha eredetileg csak egy elemre kértek ajánlatot — így kap valós képet arról, mi vár Önre a következő években.",
      },
      {
        heading: "Mikor éri meg egy ütemben megcsinálni",
        text: "Ha a költségkeret engedi, az egy ütemben végzett munka szinte mindig kedvezőbb: egy felmérés, egy gyártási ütem, egy beépítési időszak, egyszeri munkaterület-felállítás. A lakók számára is rövidebb a kellemetlenség, mint ha ugyanaz a ház két külön évben lenne felfordulva.",
      },
      {
        heading: "Mikor jobb ütemezni",
        text: "Ha a keret szűkös, nem baj: érdemes azzal kezdeni, ami a legnagyobb hőveszteséget vagy biztonsági kockázatot jelenti — ez általában a bejárati ajtó és a legrosszabb állapotú, leggyakrabban használt helyiség ablakai. A felmérésen segítünk felállítani ezt a sorrendet, hogy a legnagyobb hatású tétel kerüljön előre.",
      },
      {
        heading: "Amit a bejárati ajtónál külön érdemes átbeszélni",
        text: "A bejárati ajtónál a zárszerkezet és a hőszigetelés egyszerre számít: többpontos zárással szerelt biztonsági zárrendszereket építünk be, amelyek a tok több pontján rögzítik az ajtólapot. Kérdezzen rá az ajánlat egyeztetésekor, hogy a zár és a hőszigetelt tokszerkezet is benne van-e az árban — nálunk tételesen szerepel.",
      },
    ],
    faqs: [
      {
        q: "Kérhetek ajánlatot csak a bejárati ajtóra?",
        a: "Természetesen. A felmérésen az ablakokat is megnézzük tájékoztatásul, de az ajánlat pontosan arra szól, amit megrendelni szeretne.",
      },
      {
        q: "Mennyi idő alatt cserélhető ki egy bejárati ajtó?",
        a: "Egy átlagos bejárati ajtó cseréje jellemzően egy nap alatt elkészül, a gyártás után egyeztetett időpontban.",
      },
      {
        q: "Érsekcsanádra is kijönnek felmérni?",
        a: "Igen, Érsekcsanád a szolgáltatási területünk része, a felmérés itt is ingyenes és kötelezettség nélküli.",
      },
    ],
    ctaTitle: "Kérjen közös árajánlatot ajtó- és ablakcserére",
  },
  {
    slug: "ablakcsere-nemesnadudvaron",
    title: "Ablakcsere Nemesnádudvaron: régi fa ablakok kiváltása",
    seoTitle: "Ablakcsere Nemesnádudvaron — régi fa ablakok kiváltása",
    metaDescription:
      "Vetemedett fa ablakok Nemesnádudvaron? Nézze meg, mikor nem elég már a tömítéscsere, és mire számítson egy ablakcserénél.",
    serviceSlug: "ablak",
    intent: "informational",
    publishedAt: "2026-07-25",
    excerpt:
      "Mikor nem elég már a tömítéscsere egy régi fa ablakon? A leggyakoribb jelek és a csere menete Nemesnádudvaron.",
    intro:
      "A régebbi építésű családi házakban Nemesnádudvaron is gyakori, hogy még az eredeti fa tokos ablakok szolgálnak. Ezeknél a leggyakoribb kérdés, hogy megéri-e még javítani, vagy elérkezett a csere ideje — és a válasz általában abból derül ki, hogy a tömítés vagy maga a tok adta fel.",
    body: [
      {
        heading: "Tömítés vagy tok: ez dönti el, mi a teendő",
        text: "Ha a tömítőgumi kiszáradt egy egyébként egyenes, jó állapotú tokon, a tömítéscsere valóban elég lehet. Ha viszont a tok vetemedett — erőltetni kell a kilincset, zárt szárny mellett is látszik fény a résnél, a szárny sarka „lelóg” —, akkor a probléma a geometriában van, amin tömítéssel nem lehet érdemben javítani. Ezt a felmérésen néhány perc alatt el lehet dönteni.",
      },
      {
        heading: "Mire számítson a bontásnál",
        text: "Egy régi fa ablak kibontása mindig érinti a nyílás peremét: a vakolat a tok körül gyakran sérül, néha a belső könyöklő is. Ez nem hiba, hanem a munka természete — ezért érdemes már az ajánlatkérésnél tisztázni, hogy a tok körüli lejavítás (glettelés, festés) benne van-e az árban, vagy Önnek kell utána szakembert keresnie rá.",
      },
      {
        heading: "Mit nyer a cserével a huzaton kívül",
        text: "A huzat megszűnése a legkézzelfoghatóbb, de nem az egyetlen eredmény: a hőszigetelt üvegezés csökkenti a fűtési igényt, a jó záródás javítja a hangszigetelést, a modern vasalat pedig bukó-nyíló működést és biztonságosabb zárást ad. Ezek együtt teszik ki azt, amit a legtöbb ügyfelünk „végre normális ablak” érzésként ír le.",
      },
      {
        heading: "Ütemezés: mikor érdemes megrendelni",
        text: "A beépítés télen is elvégezhető, egy-egy nyílászárónál a munkaterület csak rövid ideig van nyitva. A gyártási időt viszont mindig bele kell számolni, ezért ha a fűtési szezonra készen szeretne lenni, érdemes még nyár végén, kora ősszel megrendelni, hogy ne a hidegben csússzon a munka.",
      },
    ],
    faqs: [
      {
        q: "Honnan tudom, hogy elég-e a tömítéscsere?",
        a: "Ha a szárny nehezen záródik, vagy zárt állapotban is látszik fény a résnél, a tok geometriája hibás — ezen a tömítéscsere nem segít. A helyszíni felmérésen pontosan megmondjuk, melyik eset áll fenn.",
      },
      {
        q: "Az ablak körüli falat is helyreállítják a bontás után?",
        a: "Igen, a tok körüli lejavítást — glettelést, festést, szükség esetén gipszkartonozást — is vállaljuk, ha kéri az ajánlatban.",
      },
      {
        q: "Télen is lehet ablakot cserélni?",
        a: "Igen, a beépítés télen is elvégezhető, a lakás nem hűl ki jelentősen. A gyártási idő miatt viszont érdemes időben megrendelni.",
      },
    ],
    ctaTitle: "Kérjen ingyenes felmérést a régi ablakok cseréjére",
  },
  {
    slug: "redony-es-szunyoghalo-dusnokon",
    title: "Redőny és szúnyogháló Dusnokon: nyári komfort egy megrendelésből",
    seoTitle: "Redőny és szúnyogháló Dusnokon — nyári komfort egy megrendelésből",
    metaDescription:
      "Redőny és szúnyogháló Dusnokon egy felmérésből, egy beépítéssel. Nézze meg, miért érdemes a kettőt együtt megrendelni.",
    serviceSlug: "redony",
    intent: "informational",
    publishedAt: "2026-07-27",
    excerpt:
      "A redőny és a szúnyogháló ugyanazt a nyári problémát oldja meg két oldalról — érdemes együtt megrendelni Dusnokon.",
    intro:
      "Nyáron ugyanaz a két kérdés jön elő szinte minden háztartásban Dusnokon: hogyan lehet kizárni a hőséget nappal, és hogyan lehet éjszaka nyitott ablaknál szellőztetni rovarok nélkül. A redőny és a szúnyogháló pontosan ezt a két problémát oldja meg — és mivel ugyanarra a nyílászáróra kerülnek, érdemes egyszerre végiggondolni őket.",
    body: [
      {
        heading: "A redőny nem csak árnyékol, hanem hőt is tart kint",
        text: "A leengedett redőny a napsugárzás jelentős részét már az üveg előtt megfogja, így a helyiség sokkal lassabban melegszik fel, mint egy belső árnyékolóval. Ez nyáron a hűtési igényt csökkenti, télen pedig, éjszakára leengedve, egy extra réteget ad az ablak elé — vagyis egész évben dolgozik.",
      },
      {
        heading: "Szúnyogháló: a típus a használat gyakoriságától függ",
        text: "Ablakra jellemzően pattintható kivitelt ajánlunk, mert olcsóbb és télen levéve tárolható. Teraszajtóra vagy gyakran használt bejáratra viszont nyíló vagy tolóajtós (pliszé) megoldás praktikusabb, mert nem kell minden közlekedésnél levenni. Mindkettőt egyedi méretben gyártjuk, hogy ne maradjon rés a keret mellett.",
      },
      {
        heading: "Miért egyszerűbb a kettőt együtt megrendelni",
        text: "Egy felmérésen mindkettőhöz megvan a pontos méret, egy beépítési alkalom elég, és nem fordulhat elő, hogy az utólag felszerelt szúnyogháló akadályozza a redőny mozgását — ez külön megrendelt, külön kivitelezett elemeknél sajnos előfordul.",
      },
      {
        heading: "Meglévő ablakra is felszerelhető",
        text: "Nem kell hozzá ablakcsere: korábban beépített, jó állapotú nyílászáróra is fel tudunk szerelni redőnyt és szúnyoghálót. A felmérésen megnézzük a tok kialakítását, és ez alapján tervezzük meg a redőnytokot és a háló keretét, hogy pontosan illeszkedjen.",
      },
    ],
    faqs: [
      {
        q: "Meglévő ablakra is felszerelhető redőny és szúnyogháló?",
        a: "Igen, mindkettőt fel tudjuk szerelni korábban beépített nyílászáróra is, egyedi méretgyártással.",
      },
      {
        q: "Motoros vagy kézi redőnyt válasszak?",
        a: "Nehezen elérhető, emeleti ablakokra jellemzően motorosat, könnyen elérhető földszinti nyílászárókra kézit érdemes. Nem kell egy házon belül mindenhol ugyanazt választani.",
      },
      {
        q: "Mennyi idő alatt készül el a szúnyogháló?",
        a: "A pontos felmérés után jellemzően pár napon belül legyártjuk és felszereljük az egyedi méretű hálót.",
      },
    ],
    ctaTitle: "Kérjen közös árajánlatot redőnyre és szúnyoghálóra",
  },
  {
    slug: "nyilaszaro-csere-hajoson",
    title: "Nyílászáró-csere Hajóson: a párkány, amit sokan kihagynak",
    seoTitle: "Nyílászáró-csere Hajóson — a párkány, amit sokan kihagynak",
    metaDescription:
      "Hajóson ablakcserénél gyakran marad a régi párkány — ez később beázáshoz vezethet. Nézze meg, mikor kell cserélni.",
    serviceSlug: "parkany",
    intent: "informational",
    publishedAt: "2026-07-28",
    excerpt:
      "Ablakcsere után a megtartott régi párkány a leggyakoribb későbbi beázás-forrás — nézze meg, mikor kell cserélni.",
    intro:
      "Hajóson és a környező falvakban is találkozunk azzal, hogy egy egyébként jól sikerült ablakcsere után egy-két évvel megjelenik a nedvesség az ablak alatti falon. A hiba ilyenkor szinte soha nem az új ablakban van, hanem abban, hogy a régi kültéri párkány a helyén maradt, pedig már nem illeszkedett az új nyílászáróhoz.",
    body: [
      {
        heading: "Miért nem illeszkedik a régi párkány az új ablakhoz",
        text: "Egy új nyílászáró tokja ritkán kerül pontosan ugyanabba a síkba és méretbe, mint a régi. Néhány milliméteres eltérés is elég ahhoz, hogy a párkány és a tok találkozásánál rés maradjon vagy a lejtés megtörjön — és ezen a ponton fog a csapadékvíz évekig, észrevétlenül beszivárogni a falszerkezetbe.",
      },
      {
        heading: "A lejtésszög a legfontosabb, mégis ezt nézik meg legkevesebben",
        text: "A kültéri párkánynak enyhe, kifelé tartó lejtéssel kell elvezetnie a vizet. Ha a lejtés hiányzik vagy visszafelé áll, a víz a fal és a párkány találkozásához fut vissza. Ez a hiba ránézésre nem feltűnő, viszont ez okozza a beázások többségét, amivel utólag kihívnak minket.",
      },
      {
        heading: "Mikor tartható meg a meglévő párkány",
        text: "Ha az új ablak pontosan ugyanabba a méretbe és pozícióba kerül, a párkány jó állapotú, megfelelő a lejtése és réstelen az illesztése, nincs ok a cserére. A felmérésen ezt objektíven megnézzük, és csak akkor javasoljuk a cserét, ha valóban indokolt — nem automatikusan tesszük az ajánlatba.",
      },
      {
        heading: "Ha már látszik a nedvesség a falon",
        text: "Foltosodás, hámló festés vagy penész az ablak alatti falon azt jelenti, hogy a beszivárgás már hosszabb ideje tart. Ilyenkor a párkány rendezése mellett a beltéri felület helyreállítása is szükséges — a glettelést és festést mi is el tudjuk végezni, így nem kell külön szakembert keresnie a befejezéshez.",
      },
    ],
    faqs: [
      {
        q: "Önállóan is megrendelhető a párkánycsere?",
        a: "Igen, nem csak ablakcseréhez kapcsolódóan — meglévő nyílászáróhoz is vállaljuk egyedi méretvétellel.",
      },
      {
        q: "Ha csak a párkány ázik be, kell ablakot is cserélni?",
        a: "A legtöbb esetben nem. Ha a beázás oka a párkány illesztése vagy lejtésszöge, elegendő a párkányt rendezni.",
      },
      {
        q: "Hajósra is kijönnek felmérni?",
        a: "Igen, Hajós a szolgáltatási területünk része, a felmérés itt is ingyenes és kötelezettség nélküli.",
      },
    ],
    ctaTitle: "Kérjen ingyenes felmérést ablakpárkányra",
  },
  {
    slug: "belteri-felujitas-dunapatajon",
    title: "Beltéri felújítás Dunapatajon: festés és burkolás egy kézből",
    seoTitle: "Beltéri felújítás Dunapatajon — festés és burkolás egy csapattól",
    metaDescription:
      "Gipszkarton, glettelés, festés és padlóburkolás Dunapatajon egy csapattól, egy ütemezésben. Nézze meg, mit tartalmaz az ajánlat.",
    serviceSlug: "felujitas",
    intent: "commercial",
    publishedAt: "2026-07-29",
    excerpt:
      "Három szakember helyett egy csapat: így néz ki egy összehangolt beltéri felújítás Dunapatajon.",
    intro:
      "Egy beltéri felújításnál a legtöbb bosszúságot nem a munka minősége okozza, hanem a szervezés: külön ember jön a gipszkartonhoz, külön a festéshez, külön a burkoláshoz, és ha valami nem illeszkedik a munkák határán, mindenki a másikra mutat. Dunapatajon is ezt a helyzetet oldja meg az, ha egy csapat viszi végig a teljes folyamatot.",
    body: [
      {
        heading: "Egy ütemezés, egy felelős",
        text: "Ha a gipszkartonozás, a glettelés, a festés és a burkolás ugyanahhoz a csapathoz tartozik, nem kell három szakember naptárát összefésülni, és a munkafázisok határán sem marad senki földjén egy-egy részlet. A felelősség is egyértelmű: egy szereplő van, akit a végeredményről kérdezhet.",
      },
      {
        heading: "A munkaterületet egyszer kell felállítani",
        text: "Bútorletakarás, portalanítás, közlekedési útvonal kijelölése — ez minden munkafázis elején időbe és kellemetlenségbe kerül. Összehangolt felújításnál mindez egyszer történik meg a teljes projektre, nem szakaszonként újra, ami a bent lakók számára a legérezhetőbb különbség.",
      },
      {
        heading: "Mi legyen benne az ajánlatban",
        text: "Kérje, hogy az ajánlat tételesen tartalmazza az előkészítő munkát is, ne csak a látható végmunkát: a glettelést a festés előtt, az aljzatkiegyenlítést a burkolás előtt, a felületkezelést és a takarást. Ezek azok a tételek, amelyek elhagyásával olcsóbbnak tűnik egy ajánlat, viszont a végeredmény tartósságát pont ezek adják.",
      },
      {
        heading: "Amit nem vállalunk — ezt is jobb előre tudni",
        text: "Kőműves és szerkezeti munkát (falbontás, statikai beavatkozás) nem végzünk. A munkánk a beltéri kivitelezésre koncentrál: gipszkarton, glettelés, festés, padlóburkolás aljzatkiegyenlítéssel. Ezt az ajánlatban is egyértelműen rögzítjük, hogy ne a kivitelezés közben derüljön ki.",
      },
    ],
    faqs: [
      {
        q: "Csak ablakcsere után vállalják a beltéri felújítást?",
        a: "Nem, önálló megrendelésként is vállaljuk a teljes körű beltéri lejavítást és felújítást.",
      },
      {
        q: "A padlóburkolás is belefér ugyanabba a projektbe?",
        a: "Igen, laminált, parketta, csempe és kőburkolat lerakását is vállaljuk, szükség esetén aljzatkiegyenlítéssel.",
      },
      {
        q: "Kapok fix határidőt a teljes munkára?",
        a: "Igen. Mivel egy csapat látja át az összes fázist, a teljes projektre tudunk reális, fix határidőt adni az ajánlatban.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot beltéri felújításra",
  },
  {
    slug: "ablakcsere-kecskemeten",
    title: "Ablakcsere Kecskeméten: hogyan ütemezzük a távolabbi munkákat",
    seoTitle: "Ablakcsere Kecskeméten — ütemezés, felmérés, beépítés",
    metaDescription:
      "Kecskeméten is vállalunk ablakcserét. Nézze meg, hogyan ütemezzük a távolabbi munkákat, hogy ne húzódjon el a kivitelezés.",
    serviceSlug: "ablak",
    intent: "commercial",
    publishedAt: "2026-07-30",
    excerpt:
      "Kecskemét is a szolgáltatási területünk része — így tervezzük meg az ütemezést, hogy a távolság ne lassítson.",
    intro:
      "Kecskemét távolabb esik a sükösdi székhelyünktől, mint Baja vagy Kalocsa, ezért itt az ütemezés még fontosabb. Nem az a kérdés, hogy vállaljuk-e — Kecskemét a szolgáltatási területünk része —, hanem az, hogyan tervezzük meg úgy a munkát, hogy ne aprózódjon szét sok külön kiszállásra.",
    body: [
      {
        heading: "Összevont felmérés: egy alkalom, teljes ház",
        text: "Távolabbi munkánál nem érdemes ablakonként haladni. A felmérésen végigmegyünk a teljes nyílászáró-állományon — ablakok, bejárati ajtó, párkány, redőny igény —, hogy egyetlen alkalomból meglegyen minden méret és minden döntéshez szükséges információ, és ne kelljen visszamenni pótolni.",
      },
      {
        heading: "Tömbösített beépítés a széthúzott munka helyett",
        text: "A gyártás elkészülte után a beépítést összevont ütemben végezzük, nem egy-egy napra bontva hetekre elosztva. Ez a megrendelőnek is jobb: rövidebb ideig tart a felfordulás, és a lakás nem marad hetekre félkész állapotban.",
      },
      {
        heading: "Mit érdemes egyszerre megrendelni",
        text: "Ha felmerül a redőny, a szúnyogháló vagy a párkány igénye, Kecskeméten különösen érdemes ezeket ugyanabba a projektbe tenni. Egy külön időpontban, később megrendelt redőny nemcsak drágább fajlagosan, hanem a méretezése is nehezebb, ha az ablak már beépült.",
      },
      {
        heading: "Ugyanaz a garancia, mint közelebb",
        text: "A távolság a feltételeken nem változtat: 5 év termékgaranciát adunk a nyílászáróra, 1 évet a beépítésre, a helyszíni felmérés és a tételes árajánlat pedig itt is díjmentes és kötelezettség nélküli. A felmérés utáni ár a végleges ár — nincs utólagos áremelés a kivitelezés közben.",
      },
    ],
    faqs: [
      {
        q: "Kecskeméten is vállalnak ablakcserét?",
        a: "Igen, Kecskemét a szolgáltatási területünk része. A távolabbi munkákat összevont ütemezéssel tervezzük, hogy ne húzódjon el a kivitelezés.",
      },
      {
        q: "A távolság miatt drágább az ajánlat?",
        a: "Az ajánlatot mindig a felmérés után, tételesen adjuk meg, és az abban szereplő ár a végleges ár — nincs utólagos áremelés a kivitelezés közben.",
      },
      {
        q: "Mennyi idő alatt kapok árajánlatot?",
        a: "A helyszíni felmérés után jellemzően 1-2 munkanapon belül küldjük a tételes árajánlatot.",
      },
    ],
    ctaTitle: "Kérjen ingyenes árajánlatot ablakcserére Kecskeméten",
  },
  {
    slug: "ablakcsere-folyamata-lepesrol-lepesre-bajan",
    title: "Az ablakcsere folyamata lépésről lépésre Baján",
    seoTitle: "Az ablakcsere folyamata lépésről lépésre Baján — mire számítson",
    metaDescription:
      "Mi történik a felméréstől a beépítésig egy ablakcserénél Baján? Végigvezetjük a folyamat minden lépésén, hogy tudja, mire számítson.",
    serviceSlug: "ablak",
    intent: "informational",
    publishedAt: "2026-07-31",
    excerpt:
      "Felméréstől a lejavításig: végigvezetjük, mi történik pontosan egy ablakcserénél Baján.",
    intro:
      "Aki még nem cserélt ablakot, annak a legnagyobb bizonytalanságot nem az ár, hanem az ismeretlen folyamat okozza: mikor kell otthon lenni, meddig tart a felfordulás, ki takarít utána. Végigvesszük lépésről lépésre, mi történik egy ablakcserénél Baján, hogy ne érje meglepetés.",
    body: [
      {
        heading: "1. Kapcsolatfelvétel és helyszíni felmérés",
        text: "Az első lépés egy időpont-egyeztetés, majd a helyszíni felmérés, ami ingyenes és kötelezettség nélküli. Ekkor vesszük fel a pontos nyílásméreteket, nézzük meg a fal és a régi tok állapotát, és beszéljük át az igényeket: hány nyílászáró, milyen üvegezés, kell-e redőny, párkány, szúnyogháló, illetve szükség lesz-e lejavításra.",
      },
      {
        heading: "2. Tételes árajánlat 1-2 munkanapon belül",
        text: "A felmérés után 1-2 munkanapon belül küldjük az árajánlatot, amiben külön soron szerepel a gyártás, a bontás és elszállítás, a beépítés, és minden kiegészítő tétel. Ez az ár a végleges ár — nincs utólagos áremelés a kivitelezés közben. Ha kérdés merül fel, ezen a ponton még bármit át lehet tervezni.",
      },
      {
        heading: "3. Megrendelés és gyártás",
        text: "A megrendelés után indul a gyártás, ami a nyílászárók számától és típusától függően időt vesz igénybe — ezt előre közöljük, hogy tervezni tudjon. Ebben az időszakban Önnek nincs teendője; a beépítés pontos időpontját a gyártás elkészültéhez közeledve egyeztetjük.",
      },
      {
        heading: "4. Beépítés, majd lejavítás és takarítás",
        text: "A beépítés napján lefedjük a munkaterületet, kibontjuk a régi nyílászárót, beépítjük az újat réstelen illesztéssel, majd elszállítjuk a régi ablakot. Ha kérte, ezután következik a tok körüli lejavítás: glettelés, festés, szükség esetén gipszkartonozás. A munkaterületet tisztán hagyjuk — nem Önnek kell utánunk takarítani.",
      },
    ],
    faqs: [
      {
        q: "Otthon kell lennem a beépítés alatt?",
        a: "A beépítés kezdetén és végén érdemes elérhetőnek lenni, de nem szükséges végig jelen lenni. A részleteket a felmérésen egyeztetjük.",
      },
      {
        q: "Mi lesz a régi ablakkal?",
        a: "A bontott nyílászárót elszállítjuk, ez benne van az árajánlatban — nem a megrendelőnek kell megoldania.",
      },
      {
        q: "A festést is elvégzik a beépítés után?",
        a: "Igen, ha kéri az ajánlatban. A tok körüli lejavítást — glettelést, festést, gipszkartonozást — ugyanaz a csapat végzi.",
      },
    ],
    ctaTitle: "Induljon el az első lépéssel: kérjen ingyenes felmérést",
  },
  {
    slug: "hogyan-valasszon-nyilaszaro-kivitelezot-bajan",
    title: "Hogyan válasszon nyílászáró-kivitelezőt Baján? 8 kérdés ajánlatkérés előtt",
    seoTitle: "Hogyan válasszon nyílászáró-kivitelezőt Baján? 8 kérdés az ajánlat előtt",
    metaDescription:
      "8 kérdés, amit érdemes feltenni minden nyílászáró-kivitelezőnek Baján, mielőtt dönt. Így hasonlíthat össze két ajánlatot valóban.",
    serviceSlug: "ablak",
    intent: "commercial",
    publishedAt: "2026-08-01",
    excerpt:
      "Két ajánlat között nem az ár a különbség, hanem az, mi van benne. 8 kérdés, ami ezt kideríti.",
    intro:
      "Ha két ajánlat között az egyik látványosan olcsóbb, az szinte soha nem azért van, mert az egyik cég nagylelkűbb — hanem mert nem ugyanaz van bennük. Az alábbi nyolc kérdés arra való, hogy az ajánlatok összehasonlíthatóvá váljanak, függetlenül attól, kitől kéri őket Baján.",
    body: [
      {
        heading: "1–2. Saját csapat vagy alvállalkozó? Ki felel a végeredményért?",
        text: "Kérdezze meg, hogy a beépítést saját csapat végzi-e, vagy alvállalkozó. Ez nem presztízskérdés: alvállalkozói láncnál nehezebb megtalálni a felelőst, ha valamit utólag rendezni kell. A Szeko Ablak Kft 2010 óta saját csapattal dolgozik, alvállalkozó nélkül — ugyanazok az emberek jönnek beépíteni, akik felmérni is jártak.",
      },
      {
        heading: "3–4. Mit tartalmaz pontosan az ár, és mi az, ami nem?",
        text: "Kérjen tételes bontást: benne van-e a bontás, a régi nyílászáró elszállítása, a beépítés és a tok körüli lejavítás? Ugyanilyen fontos, hogy mi nincs benne. Nálunk például a kőműves és szerkezeti munka nem tartozik a vállalásba, és ezt előre, írásban rögzítjük, nem a kivitelezés közepén derül ki.",
      },
      {
        heading: "5–6. Végleges ár vagy becslés? Milyen garancia jár rá?",
        text: "Tisztázza, hogy a kapott ár végleges ár-e, vagy módosulhat a munka során. Kérdezzen rá a garanciára is, külön a termékre és külön a beépítésre — ez a kettő nem ugyanaz. Nálunk 5 év termékgarancia jár a nyílászáróra, és 1 év a beépítésre.",
      },
      {
        heading: "7–8. Van referencia, és mi történik a munka után?",
        text: "Kérjen elkészült munkákról fotókat, lehetőleg olyan típusú házról, mint az Öné. Végül kérdezze meg, mi történik, ha egy szárnyat be kell állítani fél év múlva, amikor a nyílászáró bejáratódott — a jó kivitelezőnél ez természetes utómunka, nem új megrendelés.",
      },
    ],
    faqs: [
      {
        q: "Miért lehet két ajánlat között nagy különbség?",
        a: "Szinte mindig azért, mert nem ugyanazt tartalmazzák: hiányozhat belőle a bontás, az elszállítás, a lejavítás vagy az előkészítő munka. Tételes bontással hasonlíthatók össze valóban.",
      },
      {
        q: "A felmérés utáni ár változhat még?",
        a: "Nálunk nem. A helyszíni felmérés után adott tételes ár a végleges ár — nincs utólagos áremelés a kivitelezés közben.",
      },
      {
        q: "Meg lehet nézni korábbi munkákat?",
        a: "Igen, a weboldal referenciák oldalán elkészült ablak-, ajtócsere-, festési és burkolási munkáinkból található válogatás.",
      },
    ],
    ctaTitle: "Kérjen tételes, kötelezettség nélküli árajánlatot",
  },
  {
    slug: "mennyi-ideig-tart-az-ablakcsere-bajan",
    title: "Mennyi ideig tart az ablakcsere Baján? Ütemezés a rendeléstől a beépítésig",
    seoTitle: "Mennyi ideig tart az ablakcsere Baján? Ütemezés lépésenként",
    metaDescription:
      "Mennyi idő a felméréstől a kész ablakig Baján? Végigvesszük, mennyi a gyártás, a beépítés és a lejavítás, és mitől csúszhat.",
    serviceSlug: "ablak",
    intent: "informational",
    publishedAt: "2026-08-03",
    excerpt:
      "Nem a beépítés a leghosszabb lépés — nézze meg, mi mennyi időt vesz igénybe egy ablakcserénél Baján.",
    intro:
      "„Meddig lesz felfordulás?” — ez a második leggyakoribb kérdés az ár után. A válasz sokakat meglep: maga a beépítés a folyamat legrövidebb szakasza, a teljes átfutást a gyártási idő és az ütemezés adja. Nézzük végig, mire mennyi idő megy el.",
    body: [
      {
        heading: "Felméréstől az árajánlatig: napok",
        text: "A helyszíni felmérés egy alkalom, jellemzően rövid idő alatt megvan a teljes ház nyílászáróira. Utána 1-2 munkanapon belül küldjük a tételes árajánlatot. Ebben a szakaszban az idő nagy része általában a döntésre megy el — érdemes ezt is beleszámolni, ha határidőhöz köti a munkát.",
      },
      {
        heading: "Gyártás: ez a leghosszabb szakasz",
        text: "Az egyedi méretre készülő nyílászárók gyártása a folyamat leghosszabb része, és a darabszámtól, valamint a választott kiviteltől függ. A pontos időt a megrendeléskor mindig közöljük. Ebben az időszakban a megrendelőnek nincs teendője, és a lakásban sem történik semmi.",
      },
      {
        heading: "Beépítés: nyílászárónként rövid idő",
        text: "A beépítés a leglátványosabb, mégis a leggyorsabb rész: egy-egy nyílászáró bontása és beépítése rövid idő alatt megvan, és a nyílás csak ezalatt van nyitva — ezért lehet télen is dolgozni anélkül, hogy a lakás kihűlne. Több ablaknál összevont ütemben haladunk, hogy egyben legyen kész a ház.",
      },
      {
        heading: "Lejavítás és száradás: amivel sokan nem számolnak",
        text: "Ha a tok körüli lejavítást is kéri, a glettelés és a festés száradási időt igényel, ezt az ütemezésbe eleve beépítjük. Ugyanez igaz burkolásnál az aljzatkiegyenlítésre. Ez az a fázis, amit a legtöbben kihagynak a fejszámolásból, pedig a végeredmény minősége múlik rajta.",
      },
    ],
    faqs: [
      {
        q: "Mennyi idő alatt kapok árajánlatot a felmérés után?",
        a: "Jellemzően 1-2 munkanapon belül küldjük a tételes árajánlatot.",
      },
      {
        q: "Meddig tart, amíg nyitva van a nyílás a beépítéskor?",
        a: "Nyílászáróként csak rövid ideig — ezért télen is elvégezhető a csere anélkül, hogy a lakás jelentősen kihűlne.",
      },
      {
        q: "Kapok fix határidőt a teljes munkára?",
        a: "Igen, az árajánlatban reális, fix határidőt adunk, a gyártási időt és a szükséges száradási időt is belekalkulálva.",
      },
    ],
    ctaTitle: "Kérjen felmérést, és megkapja a pontos ütemtervet is",
  },
  {
    slug: "ablakcsere-panelben-es-csaladi-hazban-bajan",
    title: "Ablakcsere panelben és családi házban Baján: mi a különbség",
    seoTitle: "Ablakcsere panelben és családi házban Baján — mi a különbség",
    metaDescription:
      "Másra kell figyelni panelben és családi házban egy ablakcserénél Baján. Összeszedtük a legfontosabb eltéréseket.",
    serviceSlug: "ablak",
    intent: "informational",
    publishedAt: "2026-08-04",
    excerpt:
      "Panelben és családi házban egészen más kihívást jelent ugyanaz az ablakcsere — nézze meg, miben tér el.",
    intro:
      "Ugyanaz a szolgáltatás, két egészen más helyzet: egy panellakás ablakcseréje másfajta előkészítést és más figyelmet igényel, mint egy régi családi házé. Ha tudja, melyik csoportba tartozik az otthona, sokkal pontosabb kérdéseket tud feltenni a felmérésen Baján.",
    body: [
      {
        heading: "Panelben: egységes nyílásméretek, kötöttebb logisztika",
        text: "Panelben a nyílásméretek jellemzően egységesek, ami a méretvételt egyszerűsíti. A logisztika viszont kötöttebb: a bontott anyag és az új nyílászáró mozgatása lifttel vagy lépcsőházon át történik, a munkaterület védelme a közös területekre is kiterjed, és a munkavégzés időbeosztásánál a szomszédokra is tekintettel kell lenni.",
      },
      {
        heading: "Panelben: párásodás és a szellőzés kérdése",
        text: "Régi, huzatos ablakok mellett a lakás folyamatosan „szellőzött”, akkor is, amikor nem akartuk. Modern, jól záró nyílászáró beépítése után ez a kényszerszellőzés megszűnik, ezért panelben különösen fontos a tudatos szellőztetés, hogy a pára ne csapódjon ki a falakon. Erről a felmérésen mindig beszélünk.",
      },
      {
        heading: "Családi házban: eltérő méretek, változó falszerkezet",
        text: "Családi háznál szinte minden nyílás külön méret, és a falszerkezet is eltérhet helyiségenként, különösen ha a ház az évek során bővült. Ezért itt hosszabb a felmérés, és nagyobb az esély rá, hogy a bontás után a nyílás pereme komolyabb helyreállítást igényel — ezt az ajánlatnál előre kalkuláljuk.",
      },
      {
        heading: "Családi házban: párkány, redőny, szúnyogháló egyszerre",
        text: "Családi háznál a kültéri párkány, a redőny és a szúnyogháló szinte mindig napirendre kerül az ablakkal együtt. Érdemes ezeket egy projektbe tenni: egy felmérés, egy árajánlat, egy beépítési ütem, és a redőnytok méretezése már az új ablak pontos méretéhez igazodik, nem utólag kell hozzáigazítani.",
      },
    ],
    faqs: [
      {
        q: "Panelben is vállalnak ablakcserét?",
        a: "Igen, panelben és családi házban egyaránt. A felmérésen a helyszín adottságait — megközelítés, anyagmozgatás, munkaterület védelme — is felmérjük.",
      },
      {
        q: "Miért párásodik az új ablak, ha jobb, mint a régi?",
        a: "Mert a régi, huzatos ablak folyamatosan szellőztetett. Jól záró nyílászáró mellett tudatos szellőztetésre van szükség — ez nem hiba, hanem a jobb szigetelés következménye.",
      },
      {
        q: "Kell engedély a panel ablakcseréhez?",
        a: "Társasházi ingatlannál érdemes a társasház szabályait — például a kültéri megjelenésre vonatkozó előírásokat — előre egyeztetni a közös képviselővel.",
      },
    ],
    ctaTitle: "Kérjen ingyenes felmérést az otthonához igazítva",
  },
  {
    slug: "nyilaszarok-oszi-ellenorzese-bajan",
    title: "Nyílászárók őszi ellenőrzése Baján: 6 dolog a fűtési szezon előtt",
    seoTitle: "Nyílászárók őszi ellenőrzése Baján — 6 dolog a fűtési szezon előtt",
    metaDescription:
      "Mit érdemes ellenőrizni az ablakokon és ajtókon ősszel Baján, mielőtt beindul a fűtés? 6 pont, amit maga is végignézhet.",
    serviceSlug: "ablak",
    intent: "informational",
    publishedAt: "2026-08-05",
    excerpt:
      "Hat pont, amit a fűtési szezon előtt maga is végignézhet a nyílászárókon — mielőtt a számlán jelentkezik a hiba.",
    intro:
      "A nyílászárók hibái nyáron alig tűnnek fel, ősszel viszont az első hidegebb heteken azonnal jelentkeznek. Ha még a fűtési szezon beindulása előtt végigmegy az alábbi hat ponton, időben kiderül, mi az, amit egy beállítás megold, és mi az, amiért érdemes felmérést kérni.",
    body: [
      {
        heading: "1–2. Tömítőgumi és a papírlap-teszt",
        text: "Nézze végig a szárny körüli tömítőgumit: ha kiszáradt, repedezett vagy lelapult, már nem tömít. Egyszerű ellenőrzés a papírlap-teszt — csukja rá az ablakot egy papírlapra, és húzza ki. Ha ellenállás nélkül kicsúszik, azon a ponton nem szorít a szárny, és ott hő fog távozni egész télen.",
      },
      {
        heading: "3–4. Záródás és a szárny állása",
        text: "Ha erőltetni kell a kilincset, vagy zárt állapotban fény szűrődik be a szárny mellett, a nyílászáró nem szorít egyenletesen. Fiatalabb ablaknál ez sokszor vasalatbeállítással orvosolható. Ha viszont a tok láthatóan vetemedett, a beállítás már csak tüneti kezelés — ilyenkor a csere a valódi megoldás.",
      },
      {
        heading: "5–6. Vízelvezetés és a kültéri párkány",
        text: "Ellenőrizze, hogy a tok alján lévő vízelvezető nyílások nem tömődtek-e el, és nézze meg a kültéri párkányt: van-e kifelé tartó lejtése, ép-e a fal melletti illesztés. A beázások többsége itt kezdődik, és általában csak évekkel később, a beltéri falon válik láthatóvá.",
      },
      {
        heading: "Mit érdemes még ősszel elintézni",
        text: "Ha nyáron használt szúnyoghálót, most van itt az ideje leszedni és eltárolni a pattintható kivitelt, ez kíméli a keretet. A redőnyt pedig érdemes végigjáratni: ha akad, csikorog vagy nehezen mozog, ősszel még nyugodtan meg lehet nézetni, télen viszont már kellemetlen, ha éppen leengedve akad meg.",
      },
    ],
    faqs: [
      {
        q: "Mikor elég a vasalatbeállítás csere helyett?",
        a: "Ha az ablak egyébként jó állapotú és a tok nem vetemedett, a záródási problémát sokszor beállítással orvosolni lehet. Vetemedett toknál ez már csak átmeneti megoldás.",
      },
      {
        q: "Mikor rendeljem meg az ablakcserét, hogy télre kész legyen?",
        a: "A gyártási idő miatt érdemes nyár végén vagy kora ősszel elindítani, hogy a beépítés még a fűtési szezon eleje előtt megtörténjen.",
      },
      {
        q: "Télen is elvégezhető az ablakcsere?",
        a: "Igen. Nyílászáróként csak rövid ideig van nyitva a nyílás, így a lakás nem hűl ki jelentősen.",
      },
    ],
    ctaTitle: "Kérjen felmérést még a fűtési szezon előtt",
  },
];

export function post(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsForService(serviceSlug: string): BlogPost[] {
  return posts.filter((p) => p.serviceSlug === serviceSlug);
}
