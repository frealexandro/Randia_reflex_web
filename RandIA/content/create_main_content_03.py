import reflex as rx
from RandIA.sections.create_search_section_03 import create_search_section
from RandIA.sections.create_section_heading_03 import create_section_heading
from RandIA.components.create_feature_card_03 import create_feature_card
from RandIA.components.create_feature_box_03 import create_feature_box
from RandIA.sections.create_pricing_section_01 import create_pricing_section
from RandIA.components.create_centered_heading_smaller_01 import create_centered_heading_smaller
from RandIA.routes import Route



def create_main_content():
    """Create the main content section of the page."""
    return rx.box(
        rx.box(
            rx.heading(
            "Todo Un Marketplace De Productos Para Explorar",
            font_weight="700",
            margin_bottom="2rem",
            font_size="2.25rem",
            line_height="2.5rem",
            text_align="center",
            color="#1F2937",
            as_="h1",
        ),
        create_centered_heading_smaller(
            heading_text="Para adquirir algunos de nuestros productos de inteligencia artificial no necesitas suscripción, solo pagas el producto",
            color="#1F2937",
        ),
            rx.box(
                create_feature_card(
                    image_alt="Analizador de Datos",
                    image_src="/muestra_2_analizador_textos.png",
                    card_title="🤖 Analizador de Datos",
                    card_description="Esta herramienta le permite analizar datos de texto de varios archivos de Excel. Puede clasificar el texto en categorías personalizadas, como emociones, sentimientos o cualquier otra etiqueta que defina.",
                    number_credits='5',
                    card_caracteristicas="Conecta y analiza tus archivos automáticamente, automatizando el proceso sin necesidad de intervención manual.",
                    route_href = "https://sentiment-analyzer-pro-randia.replit.app/"
                ),
                create_feature_card(
                    image_alt="Clasificador de Sentimientos en Redes Sociales con IA",
                    image_src="/muestra_2_modelo_a_tu_empresa.png",
                    card_title="🤖 Clasificador de Sentimientos en Redes Sociales con IA",
                    card_description=" Herramienta que analiza los comentarios en redes sociales para identificar si son positivos, negativos o neutrales.",
                    number_credits='5',
                    card_caracteristicas="Analiza comentarios y detecta sentimientos, automatizando el proceso sin necesidad de intervención manual.",
                    route_href = "https://sentiment-analyzer-pro-randia.replit.app/"
                ),
                create_feature_card(
                    image_alt="Búsqueda de Documentacion Tecnica por IA",
                    image_src="/muestra_2_modelo_a_tu_empresa.png",
                    card_title="🤖 Búsqueda de Documentacion Tecnica por IA",
                    card_description="Sistema de búsqueda por inteligencia artificial especializado en recuperar información técnica y manuales de productos.",
                    number_credits='5',
                    card_caracteristicas="Permita a sus colaboradores responder las distintas preguntas, procesa documentación compleja y es personalizable para varios sectores.",
                    route_href= "https://sentiment-analyzer-pro-randia.replit.app/"
                ),
                create_feature_card(
                    image_alt="Chatbot avanzado para Atención al cliente con IA",
                    image_src="/muestra_2_modelo_a_tu_empresa.png",
                    card_title="🤖 Chatbot Avanzado para Atención al Cliente con IA",
                    card_description="Chatbot especializado en responder preguntas frecuentes utilizando IA, mejorando la eficiencia en tiempos de respuesta.",
                    number_credits='5',
                    card_caracteristicas="Modelo de IA entrenado con datos de la empresa ofrece respuestas automáticas, 24/7, multicanal y reduce la carga de soporte al gestionar consultas repetitivas.",
                    route_href= "https://sentiment-analyzer-pro-randia.replit.app/"
                ),
                # create_feature_card(
                #     image_alt="Paquete Flujo de Ingesta, Transformación y Carga (básico)",
                #     image_src="/muestra_2_package.png",
                #     card_title="📦 Paquete Flujo de Ingesta, Transformación y Carga (básico)",
                #     card_description="Este sistema permitirá automatizar la ingesta y validación de datos, realizar limpieza básica, transformar y cargar información en su Data Warehouse",
                #     number_credits='90',
                #     card_caracteristicas="Este paquete incluye los productos de Ingesta de Datos, Validación de Datos Básica, Limpieza de Datos Básica, Almacenamiento de Datos y Transformación de Datos Básica.",
                #     route_href= Route.FUNNEL.value
                # ),
                # create_feature_card(
                #     image_alt="Paquete Reportes Automáticos Predefinidos (básico)",
                #     image_src="/muestra_2_package.png",
                #     card_title="📦 Paquete Reportes Automáticos Predefinidos (básico)",
                #     card_description="Automatiza la ingesta, validación, limpieza, transformación y carga de datos en un Data Warehouse, con reportes automáticos.",
                #     number_credits='100',
                #     card_caracteristicas="Este paquete incluye los productos de Ingesta de Datos, Validación de Datos Básica, Limpieza de Datos Básica, Almacenamiento de Datos, Transformación de Datos Básica y Generación de Reportes Básicos.",
                #     route_href= Route.FUNNEL.value,
                # ),
                
                gap="1.5rem",
                display="grid",
                grid_template_columns=rx.breakpoints(
                    {
                        "0px": "repeat(1, minmax(0, 1fr))",
                        "768px": "repeat(3, minmax(0, 1fr))",
                    }
                ),
            ),
            margin_bottom="3rem",
        ),
        rx.box(
            create_pricing_section(),
            gap="1.5rem",
            display="grid",
            margin_bottom="3rem",
        ),
        rx.box(
            create_section_heading(
                heading_text="¿Por qué RandIA?"
            ),
            rx.box(
                create_feature_box(
                    icon_alt="zap",
                    icon_name="zap",
                    feature_title="Productos de alta calidad",
                    feature_description="Nuestros productos son desarrollados por expertos en inteligencia artificial y están diseñados para ser fáciles de usar.",
                ),
                create_feature_box(
                    icon_alt="file-stack",
                    icon_name="file-stack",
                    feature_title="Todo en una misma aplicación",
                    feature_description="Encuentra todo lo que necesitas en un solo lugar, desde clasificadores de sentimientos hasta chatbots avanzados.",
                ),
                create_feature_box(
                    icon_alt="users",
                    icon_name="users",
                    feature_title="Soporte 24/7",
                    feature_description="Te ofrecemos soporte técnico en cualquier momento del día, para que puedas resolver tus dudas rápidamente.",
                ),
                create_feature_box(
                    icon_alt="circle_check_big",
                    icon_name="circle_check_big",
                    feature_title="Desarrollo de ultra alta calidad",
                    feature_description="Nuestros productos son desarrollados con las últimas tecnologías y están diseñados para ser fáciles de usar.",
                ),
                
                gap="1.5rem",
                display="grid",
                grid_template_columns=rx.breakpoints(
                    {
                        "0px": "repeat(1, minmax(0, 1fr))",
                        "768px": "repeat(2, minmax(0, 1fr))",
                        "1024px": "repeat(4, minmax(0, 1fr))",
                    }
                ),
            ),
        ),
        
        width="100%",
        style=rx.breakpoints(
            {
                "640px": {"max-width": "640px"},
                "768px": {"max-width": "768px"},
                "1024px": {"max-width": "1024px"},
                "1280px": {"max-width": "1280px"},
                "1536px": {"max-width": "1536px"},
            }
        ),
        margin_left="auto",
        margin_right="auto",
        padding_left="1rem",
        padding_right="1rem",
        padding_top="2rem",
        padding_bottom="2rem",
    )