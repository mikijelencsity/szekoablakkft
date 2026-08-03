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
];

export function post(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsForService(serviceSlug: string): BlogPost[] {
  return posts.filter((p) => p.serviceSlug === serviceSlug);
}
