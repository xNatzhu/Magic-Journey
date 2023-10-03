import cityModel from "../models/city.model.js";

const createCities = async () => {
        const Citys = [
            {
                name: "Buenos Aires",
                country: "Argentina",
                img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/d8/b9/cb.jpg",
                description: "Buenos Aires, la capital de Argentina, es una ciudad que combina la elegancia europea con la pasión latina, creando un destino turístico vibrante y diverso. Con una rica historia, una escena cultural dinámica y una gastronomía deliciosa, Buenos Aires ofrece experiencias únicas para todos los gustos."
            },
            {
                name: "Bariloche",
                country: "Argentina",
                img: "https://barilocheturismo.gob.ar/images/news/upload/144_54480854-0594-4512-bbf1-a2a5597709d8.jpg",
                description: "San Carlos de Bariloche, en Argentina, es famosa por su impresionante paisaje montañoso, lagos cristalinos y una atmósfera alpina. Es un destino popular para actividades al aire libre, como el esquí y el senderismo, además de ser conocida por su deliciosa producción de chocolate."
            },
            {
                name: "Mendoza",
                country: "Argentina",
                img: "https://www.suteba.org.ar/files/85382_2267.jpg",
                description: "Mendoza, ubicada en la región vinícola de Argentina, es famosa por sus viñedos y bodegas de renombre. Los amantes del vino pueden disfrutar de catas y recorridos por las bodegas, mientras que los paisajes montañosos ofrecen oportunidades para el turismo aventura."
            },
            {
                name: "Cordoba",
                country: "Argentina",
                img: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/DG5OSJFWB5BVLCPXBUUYZHC2HY.jpg",
                description: "Córdoba, Argentina, es una ciudad universitaria con un ambiente vibrante y energético. Con una mezcla de arquitectura colonial y moderna, esta ciudad ofrece una combinación de historia, cultura y vida estudiantil animada."
            },
            {
                name: "Paris",
                country: "Francia",
                img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?fit=1024%2C685&quality=50&strip=all&ssl=1",
                description: "París, la Ciudad de la Luz, es famosa por su encanto romántico, su arquitectura icónica y su rica historia cultural. Desde la majestuosidad de la Torre Eiffel hasta los elegantes bulevares, París cautiva a los visitantes con su belleza y su exquisita gastronomía."
            },
            {
                name: "Niza",
                country: "Francia",
                img: "https://a.cdn-hotels.com/gdcs/production6/d1632/7bff5b24-fd03-4d42-8f91-c3e691d3244c.jpg",
                description: "Niza, en la Costa Azul de Francia, es conocida por sus playas de aguas cristalinas y su elegancia costera. Además de su belleza natural, la ciudad ofrece una mezcla de cultura mediterránea y vida nocturna animada."
            },
            {
                name: "Lyon",
                country: "Francia",
                img: "https://cdn.porelmundo.viajes/wp-content/uploads/2023/05/lyon-1.jpg",
                description: "Lyon, en el este de Francia, es famosa por su exquisita gastronomía y su arquitectura histórica. Considerada la capital culinaria de Francia, Lyon ofrece mercados coloridos, restaurantes tradicionales y un casco antiguo encantador."
            },
            {
                name: "Burdeos",
                country: "Francia",
                img: "https://images.unsplash.com/photo-1493564738392-d148cfbd6eda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZGVvc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
                description: "Burdeos, en la región vinícola de Francia, es conocida por su producción de vino de alta calidad. Además de sus viñedos, la ciudad ofrece arquitectura elegante, plazas históricas y una atmósfera relajada."
            },
            {
                name: "Roma",
                country: "Italia",
                img: "https://cdn.culturagenial.com/es/imagenes/rome-1681633-1920-0-cke.jpg",
                description: "Roma, la Ciudad Eterna, es un tesoro de historia antigua y arte incomparable. Con sus impresionantes ruinas romanas, como el Coliseo y el Foro Romano, así como sus majestuosas plazas y fuentes, Roma es un viaje en el tiempo y un festín para los sentidos."
            },
            {
                name: "Venecia",
                country: "Italia",
                img: "https://viajes.nationalgeographic.com.es/medio/2018/02/19/vencia-gran-canal_9670bbbd.jpg",
                description: "Venecia, la Ciudad de los Canales, es conocida por su arquitectura única y su sistema de canales. Los paseos en góndola por los canales, la Plaza de San Marcos y la rica historia hacen de Venecia un destino inolvidable."
            },
            {
                name: "Florencia",
                country: "Italia",
                img: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Florence_3.jpg",
                description: "Florencia, en el corazón de Italia, es famosa por ser el epicentro del Renacimiento. Sus museos, galerías de arte y la imponente catedral de Santa Maria del Fiore son algunas de las atracciones más destacadas."
            },
            {
                name: "Milan",
                country: "Italia",
                img: "https://tourscanner.com/blog/wp-content/uploads/2021/08/Castello-Sforzesco-Milan.jpg",
                description: "Milán, una ciudad de moda y diseño, es conocida por su estilo cosmopolita y su arquitectura moderna. Además de ser un centro de compras de lujo, la ciudad alberga importantes lugares históricos y culturales."
            },
            {
                name: "Nueva York",
                country: "Estados Unidos",
                img: "https://cdn.trt.net.tr/images/xlarge/rectangle/449c/47a1/1f2d/646871c6eb704.jpg?time=1692324428",
                description: "Nueva York, la Gran Manzana, es una metrópolis que nunca duerme. Con sus rascacielos icónicos como el Empire State Building y sus innumerables lugares de interés, teatros de Broadway y diversidad cultural, la ciudad ofrece una experiencia única y emocionante."
            },
            {
                name: "Los Angeles",
                country: "Estados Unidos",
                img: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1666660759/gyqh3ury1syfpiseejco.jpg",
                description: "Los Ángeles, en California, es famosa por ser el epicentro de la industria del entretenimiento. Con sus playas, el Paseo de la Fama de Hollywood y la cultura relajada de California, la ciudad ofrece una mezcla única de glamour y estilo de vida relajado."
            },
            {
                name: "Chicago",
                country: "Estados Unidos",
                img: "https://cdn.forbes.com.mx/2021/07/Los-Angeles-California-e1625686384887.jpg",
                description: "Chicago, a orillas del lago Michigan, es conocida por su arquitectura innovadora, su escena musical y su ambiente de ciudad grande. La icónica Torre Willis y el Millennium Park son solo algunas de las atracciones que la ciudad tiene para ofrecer."
            },
            {
                name: "Miami",
                country: "Estados Unidos",
                img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CM2WQLPQZFDSZAOG2CG6NYYB4A.jpeg",
                description: "Miami, en Florida, es famosa por sus playas de arena blanca, su vida nocturna vibrante y su influencia multicultural. La arquitectura art déco de South Beach y la energía única de la ciudad la convierten en un destino atractivo para todos los gustos."
            }
        ]

        try {
            await cityModel.create(Citys);
            console.log("Ciudades creadas exitosamente.");
        } catch (error) {
            console.error("Error al crear ciudades:", error);
        }
}

export default createCities