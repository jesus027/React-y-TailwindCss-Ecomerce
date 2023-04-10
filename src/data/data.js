import heroimg from '../assets/1.jpg';

import ragnaroimg from '../assets/ragnarok.jpg';
import skyrimimg from '../assets/skyrim.jpg';

import clip from '../assets/video/clip.mp4';
import vcover1 from '../assets/video/vcover1.jpg';
import vcover2 from '../assets/video/vcover2.jpg';
import vcover3 from '../assets/video/vcover3.jpg';

import psale1 from '../assets/uncharted.jpg';
import psale2 from '../assets/hero.jpg';
import psale3 from '../assets/zelda.jpg';

import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.jpeg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import product9 from '../assets/product9.jpg';
import product10 from '../assets/product10.jpg';
import product11 from '../assets/product11.jpg';
import product12 from '../assets/product12.jpeg';

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import messenger from '../assets/messenger.png';

const heroapi = {
    title: "Juega Lo Que Quieras",
    subtitle: "Killzone 4 Shadow Fall",
    img: heroimg,
    btntext: "Explorar Producto",
    videos: [
        { imgsrc: vcover1, clip: clip },
        { imgsrc: vcover2, clip: clip },
        { imgsrc: vcover3, clip: clip },
    ],
    sociallinks: [
        { icon: facebook },
        { icon: messenger },
        { icon: instagram },
        { icon: twitter },
        { icon: youtube },
    ],
};

const popularsales = {
    title: "Ventas Populares",
    items: [
        {
            id: "0p0x1",
            title: "UNCHARTED 4: A Thief's End",
            text: "La última aventura de Nathan Drake y todo por lo que ha explorado",
            rating: "9.5",
            btn: "Comprar Ahora",
            img: psale1,
            price: "49.99",
            color: "from-blue-600 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0p0x2",
            title: "Half-Life: Alyx",
            text: "Eres la única oportunidad de supervivencia de la humanidad",
            rating: "4.5",
            btn: "Comprar Ahora",
            img: psale2,
            price: "59.99",
            color: "from-red-600 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "0p0x3",
            title: "The Legend of Zelda: Breath of the Wild",
            text: "La libertad absoluta de explorar al ritmo que deseemos",
            rating: "3.8",
            btn: "Comprar Ahora",
            img: psale3,
            price: "69.99",
            color: "from-violet-500 to-indigo-500",
            shadow: "shadow-lg shadow-violet-500",
        },
    ],
};

const ragnarok = {
    heading: "Gob of War: Ragnarok",
    title: "Toda gran aventura es una historia que espera ser contada",
    text: "¿Serán capaces de luchar contra su propio destino?",
    btn: "Explorar Más",
    url: "https://www.playstation.com/es-es/games/god-of-war-ragnarok/",
    img: ragnaroimg, 
};

const skyrim = {
    heading: "The Elder Scrolls V: Skyrim",
    title: "Un juego de rol abierto, inmenso y lleno de secretos.",
    text: "Incluso a aquellos que navegamos en las corrientes del tiempo nos es imposible ver más allá del fin de los tiempos.",
    btn: "Explorar más",
    url: "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
    img: skyrimimg,
};

const toprateslaes = {
    title: "Mejores Calificaciones",
    items: [
        {
            id: "0M0x1",
            title: "ELDEN RING",
            text: "Álzate, Sinluz.",
            rating: "6.9",
            btn: "Comprar Ahora",
            img: product1,
            price: "59.99",
            color: "from-sky-600 to-indigo-600",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0M0x2",
            title: "Resident Evil 4 Remake",
            text: "Sobrevivir es solo el principio.",
            rating: "7.9",
            btn: "Comprar Ahora",
            img: product6,
            price: "69.99",
            color: "from-slate-900 to-black",
            shadow: "shadow-lg shadow-black",
        },
        {
            id: "0M0x3",
            title: "Minecraft",
            text: "Construye, Explora, Crea",
            rating: "5.5",
            btn: "Comprar Ahora",
            img: product5,
            price: "$7.49",
            color: "from-green-600 to-lime-500",
            shadow: "shadow-lg shadow-lime-500",
        },
        {
            id: "0M0x4",
            title: "Fortnite",
            text: "¡Defiende la isla!",
            rating: "8.5",
            btn: "Comprar Ahora",
            img: product4,
            price: "11.99",
            color: "from-orange-500 to-amber-500",
            shadow: "shadow-lg shadow-orange-500",
        },
        {
            id: "0M0x5",
            title: "Playerunknown's Battleground (PUBG)",
            text: "Winner Winner Chicken Dinner individual, duo o en grupo",
            rating: "9.5",
            btn: "Comprar Ahora",
            img: product3,
            price: "00.00",
            color: "from-gray-900 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x6",
            title: "CALL OF DUTY: WARZONE™ 2.0",
            text: "Prepárate para combatir en equipo o solo en una nueva era de guerra",
            rating: "8.5",
            btn: "Adquirir Ahora",
            img: product2,
            price: "00.00",
            color: "from-green-500 to-emerald-500",
            shadow: "shadow-lg shadow-green-500",
        },
        {
            id: "0M0x7",
            title: "OUTRIDERS",
            text: "Hasta los más formidables acaban encontrando algo que temer",
            rating: "7.1",
            btn: "Comprar Ahora",
            img: product7,
            price: "39.99",
            color: "from-yellow-500 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x8",
            title: "Apex Legends",
            text: "Combatientes de toda La Frontera se unen para luchar por gloria, fama y fortuna.",
            rating: "8.3",
            btn: "Comprar Ahora",
            img: product8,
            price: "00.00",
            color: "from-[#936550] to-orange-900",
            shadow: "shadow-lg shadow-orange-800",
        },
        {
            id: "0M0x9",
            title: "Tom Clancy's Rainbow Six Siege",
            text: "Ataque VS Defensa",
            rating: "7.8",
            btn: "Comprar Ahora",
            img: product9,
            price: "19.99",
            color: "from-indigo-700 to-indigo-700",
            shadow: "shadow-lg shadow-indigo-500",
        },
        {
            id: "0M0x10",
            title: "Dead by Daylight",
            text: "¿Lograrás ser más astuto que el asesino?",
            rating: "6.4",
            btn: "Comprar Ahora",
            img: product10,
            price: "19.99",
            color: "from-green-600 to-lime-500",
            shadow: "shadow-lg shadow-lime-500",
        },
        {
            id: "0M0x11",
            title: "Dragon Ball Z: Kakarot",
            text: "Lucha, pesca, come y entrena con Goku.",
            rating: "8",
            btn: "Comprar Ahora",
            img: product11,
            price: "59.99",
            color: "from-slate-900 to-black",
            shadow: "shadow-lg shadow-black",
        },
        {
            id: "0M0x12",
            title: "Destiny 2",
            text: "Conviértete en una Leyenda y restaura tu camino",
            rating: "8.8",
            btn: "Comprar Ahora",
            img: product12,
            price: "00.00",
            color: "from-blue-900 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
    ],
};

const storys = {
    title: "Las Mejores Historias",
    news: [
        {
            title:"¿Cuál fue el tráiler más popular de TGA 2022?",
            text: "Un análisis revela cuáles fueron los anuncios más populares de la gala de The Game Awards 2022. El tráiler más visto tiene un total de casi 5 millones de reproducciones en YouTube.",
            img: "https://media.vandal.net/i/240x135/12-2022/202212121940893_1.jpg",
            url: "https://vandal.elespanol.com/noticia/1350758671/cual-fue-el-trailer-mas-popular-de-tga-2022-star-wars-jedi-y-hades-2-superan-al-resto/",
            like: "9/10",
            time: "9 Mins",
            by: "Manu Delgado",
            btn: "Leer Más",
        },
        {
            title: "MrBeast llega a Fortnite",
            text: "El youtuber MrBeast llega a Fortnite con dos skins nuevas y da la posibilidad a los jugadores de ganar un millón de dólares en un mapa de Creativo.",
            img: "https://as01.epimg.net/meristation/imagenes/2022/12/12/noticias/1670864972_198489_1670865030_noticia_normal_recorte1.jpg",
            url: "https://as.com/meristation/2022/12/12/noticias/1670864972_198489.html",
            like: "8/10",
            time: "10 Mins",
            by: "Rubén Martínez",
            btn: "Leer Más",
        },
        {
            title: "Los Final Fantasy Pixel Remaster están en camino",
            text: "Un año después de su salida en PC y móviles, las nuevas ediciones de los seis primeros Final Fantasy llegaría a consolas por el 35 aniversario de la saga.",
            img: "https://as01.epimg.net/meristation/imagenes/2022/12/12/noticias/1670861383_736771_1670861430_noticia_normal_recorte1.jpg",
            url: "https://as.com/meristation/2022/12/12/noticias/1670861383_736771.html",
            like: "6/10",
            time: "5 Mins",
            by: "David Arroyo",
            btn: "Leer Más",
        },
        {
            title: "Tekken supera a Street Fighter",
            text: "La saga Tekken se impone a Street Fighter en ventas totales a lo largo de todos sus títulos y relanzamientos. Tekken 7 llega a un importante hito de ventas.",
            img: "https://as01.epimg.net/meristation/imagenes/2022/12/12/noticias/1670851476_901323_1670851674_noticia_normal_recorte1.jpg",
            url: "https://as.com/meristation/2022/12/12/noticias/1670851476_901323.html",
            like: "7/10",
            time: "4 Mins",
            by: "Rubén Martínez",
            btn: "Leer Más",
        },
        {
            title: "Elden Ring, juego del año (GOTY)",
            text: "El juego desarrollado por From Software se ha impuesto sobre candidatos como God of War Ragnarök, Horizon Forbidden West o Stray.",
            img: "https://as01.epimg.net/meristation/imagenes/2022/12/08/noticias/1670508323_783788_1670508534_noticia_normal_recorte1.jpg",
            url: "https://as.com/meristation/2022/12/09/noticias/1670558112_177524.html",
            like: "8/10",
            time: "5 Mins",
            by: "Rubén Martínez",
            btn: "Leer Más",
        },
        {
            title: "Hades 2, la sorpresa de The Game Awards",
            text: "El aclamado roguelike de Supermassive Games, para muchos el GOTY de 2020, ha anunciado una inesperada secuela en la que cambiaremos de protagonista.",
            img: "https://as01.epimg.net/meristation/imagenes/2022/12/09/noticias/1670549048_606856_1670549087_noticia_normal_recorte1.jpg",
            url: "https://as.com/meristation/2022/12/09/noticias/1670549048_606856.html",
            like: "9/10",
            time: "3 Mins",
            by: "David Arroyo",
            btn: "Leer Más",
        },
        {
            title: "Mortal Kombat 12 se anunciaría pronto",
            text: "La presentación oficial del próximo Mortal Kombat se hará a lo largo de los próximos seis meses, ha comentado el jefe de NetherRealm Studios.",
            img: "https://media.vandal.net/i/240x135/12-2022/2022121211442567_1.jpg",
            url: "https://vandal.elespanol.com/noticia/1350758658/mortal-kombat-12-se-anunciaria-pronto-y-llegara-en-2023-revela-neatherrealm-studios/",
            like: "7/10",
            time: "1 Mins",
            by: "Ramón Varela",
            btn: "Leer Más",
        },
        {
            title: "Warhammer 40,000: Space Marine 2",
            text: "El 'shooter' en tercera persona apareció en The Game Awards 2022 con un vídeo en el que podemos ver a Titus en plena acción.",
            img: "https://media.vandal.net/i/240x135/12-2022/202212910361952_1.jpg",
            url: "https://vandal.elespanol.com/noticia/1350758619/warhammer-40000-space-marine-2-presenta-su-epico-gameplay-y-confirma-lanzamiento-en-2023/",
            like: "10/10",
            time: "1 Mins",
            by: "Ramón Varela",
            btn: "Leer Más",
        },
    ],
};

const footerAPI = {
    titles: [ {title: "Acerca de PlayStation"}, {title: "Ayuda"}, {title: "Compañia"} ],
    links: [
        [
            {link: "News"},
            {link: "Clasificaciones"},
            {Link: "Soporte"},
            {Link: "Terminos"},
            {link: "Inversores"},
        ],
        [
            {link: "Estado"},
            {link: "Entrega"},
            {link: "Opciones de Pago"},
            {link: "Saldo de Tarjeta de Regalo"},
            {link: "Soporte"},
            {link: "FAQ"},
            {link: "Blog"},
        ],
        [
            {link: "Tarjeta de Regalo"},
            {link: "Promociones"},
            {link: "Tienda"},
            {link: "Iniciar Sesión"},
            {link: "Diario de Tienda"},
            {link: "Comentarios"},
        ],
    ],
};

export { heroapi, footerAPI, storys, skyrim, ragnarok, toprateslaes, popularsales };