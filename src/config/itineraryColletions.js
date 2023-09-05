import itineraryModel from "../models/itinerary.model.js";

const createItinerary = async () => {
    const Itinerary = [
        {
            name: "Recorrido por las bodegas",
            description: "Durante este recorrido, los visitantes tienen la oportunidad de explorar las instalaciones de producción de vino, aprender sobre el proceso de vinificación, desde la cosecha de las uvas hasta la elaboración del vino, y degustar una variedad de vinos producidos en el lugar.",
            price: 2500,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33bfe"
        },
        {
            name: "Exploración de la cultura porteña",
            description: "Este itinerario te llevará a explorar la rica cultura de Buenos Aires. Visita el icónico barrio de La Boca, disfruta de un espectáculo de tango en un local tradicional y saborea platos auténticos en un restaurante local.",
            price: 1800,
            duration:4,
            city: "64f5e4ddd47bd8dc3ad33bfc"
        },
        {
            name: "Aventura en las montañas de Bariloche",
            description: "Descubre la belleza natural de Bariloche con una emocionante jornada de senderismo en las montañas. Disfruta de vistas panorámicas impresionantes y luego relájate en una cervecería local para probar cervezas artesanales.",
            price: 2200,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33bfd"
        },
        {
            name: "Exploración de la arquitectura cordobesa",
            description: "En Córdoba, explora la arquitectura colonial y religiosa de la ciudad. Visita la Catedral de Córdoba y el Manzana Jesuítica, y conoce la rica historia de la región.",
            price: 1500,
            duration:3,
            city: "64f5e4ddd47bd8dc3ad33bff"
        },
        {
            name: "Romance en París",
            description: "Descubre el encanto de la Ciudad de la Luz. Visita la Torre Eiffel, pasea por Montmartre y disfruta de una cena romántica en un restaurante con vista a la ciudad.",
            price: 2800,
            duration:5,
            city: "64f5e4ddd47bd8dc3ad33c00"
        },
        {
            name: "Playa y cultura en Niza",
            description: "Combina días de relax en la playa con exploración cultural. Visita el Museo de Arte Moderno y Contemporáneo de Niza y luego disfruta de la playa y la gastronomía local.",
            price: 2000,
            duration:6,
            city: "64f5e4ddd47bd8dc3ad33c01"
        },
        {
            name: "Sabores de Lyon",
            description: "Explora la capital gastronómica de Francia. Haz un recorrido por los mercados locales, disfruta de una degustación de queso y vino, y cena en un restaurante típico de Lyon.",
            price: 2100,
            duration:3,
            city: "64f5e4ddd47bd8dc3ad33c02"
        },
        {
            name: "Descubre Burdeos y sus vinos",
            description: "Visita viñedos y bodegas en la región de Burdeos. Aprende sobre la producción de vino y degusta vinos de alta calidad. También explora la encantadora ciudad de Burdeos.",
            price: 2400,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33c03"
        },
        {
            name: "Explora la historia de Roma",
            description: "Sumérgete en la historia antigua de Roma visitando el Coliseo, el Foro Romano y el Panteón. Disfruta de la auténtica pizza italiana en un restaurante local.",
            price: 1700,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33c04"
        },
        {
            name: "Paseo en góndola en Venecia",
            description: "Vive una experiencia romántica en Venecia con un paseo en góndola por los canales. Visita la Plaza de San Marcos y disfruta de la cocina veneciana en un restaurante junto al agua.",
            price: 2500,
            duration:3,
            city: "64f5e4ddd47bd8dc3ad33c05"
        },
        {
            name: "Arte y cultura en Florencia",
            description: "Explora las obras maestras del Renacimiento en Florencia, incluyendo la Galería de los Uffizi y la catedral de Florencia. Prueba la deliciosa gelato italiano.",
            price: 1900,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33c06"
        },
        {
            name: "Moda y diseño en Milán",
            description: "Milán es conocida por la moda y el diseño. Visita la Galería Vittorio Emanuele II y haz compras en las boutiques de lujo. Cena en un restaurante de alta cocina.",
            price: 2200,
            duration:3,
            city: "64f5e4ddd47bd8dc3ad33c07"
        },
        {
            name: "Vida nocturna en Nueva York",
            description: "Explora la vibrante vida nocturna de Nueva York. Visita bares de moda, disfruta de música en vivo y termina la noche en un club icónico de la ciudad.",
            price: 2000,
            duration:4,
            city: "64f5e4ddd47bd8dc3ad33c08"
        },
        {
            name: "Playas y entretenimiento en Los Ángeles",
            description: "Relájate en las hermosas playas de Los Ángeles y luego visita el Paseo de la Fama de Hollywood y Universal Studios para una dosis de entretenimiento.",
            price: 2300,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33c09"
        },
        {
            name: "Exploración cultural en Chicago",
            description: "Descubre la escena cultural de Chicago visitando museos como el Instituto de Arte de Chicago y disfruta de la arquitectura única de la ciudad en un recorrido arquitectónico.",
            price: 1800,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33c0a"
        },
        {
            name: "Relax en Miami",
            description: "Disfruta del sol y las playas de Miami. Haz snorkel en Key Biscayne y relájate en South Beach. Cena en un restaurante frente al mar.",
            price: 2100,
            duration:2,
            city: "64f5e4ddd47bd8dc3ad33c0b"
        }
    ];

    try {
        await itineraryModel.create(Itinerary);
        console.log("Itinerario creados exitosamente.");
    } catch (error) {
        console.error("Error al crear Itinerario:", error);
    }
}

export default createItinerary