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
            "A Whole Marketplace Of Products To Explore",
            #Todo Un Marketplace De Productos Para Explorar
            font_weight="700",
            margin_bottom="2rem",
            font_size="2.25rem",
            line_height="2.5rem",
            text_align="center",
            color="#1F2937",
            as_="h1",
        ),
        create_centered_heading_smaller(
            heading_text="All our products have a free credit trial period, so you can try them before subscribing.",
            #Para adquirir algunos de nuestros productos de inteligencia artificial no necesitas suscripción, solo pagas el producto
            color="#1F2937",
        ),
            rx.box(
                create_feature_card(
                    image_alt="Data Analyzer",
                    image_src="/muestra_2_analizador_textos.png",
                    card_title="📊 Data Analyzer",
                    card_description="This tool allows you to analyze text data from various Excel files. You can classify text into custom categories, such as emotions, feelings, or any other tags you define.",
                    number_credits='Free',
                    card_caracteristicas="Conect and analyze your files automatically, automating the process without the need for manual intervention.",
                    #Conecta y analiza tus archivos automáticamente, automatizando el proceso sin necesidad de intervención manual.
                    route_href = "https://sentiment-analyzer-pro-randia.replit.app/"
                ),
                create_feature_card(
                    image_alt="SEO Analysis & Optimization",
                    #Clasificador de Sentimientos en Redes Sociales con IA
                    image_src="/muestra_2_seo_optimizer.png",
                    card_title="🌐 SEO Analysis & Optimization",
                    card_description="Advanced SEO analysis with AI: optimize content, enhance performance metrics, and efficiently process multiple URLs or entire websites.",
                    #Herramienta que analiza los comentarios en redes sociales para identificar si son positivos, negativos o neutrales.
                    number_credits='Free',
                    card_caracteristicas="Professional SEO analysis: AI-powered suggestions, content optimization, performance metrics, and bulk URL processing.",
                    #Analiza comentarios y detecta sentimientos, automatizando el proceso sin necesidad de intervención manual.
                    route_href = "https://seo-content-optimizer.replit.app/"
                ),
                create_feature_card(
                    image_alt="Search for Technical Documentation by AI",
                    #Búsqueda de Documentacion Tecnica por IA
                    image_src="/muestra_2_podcast.png",
                    card_title="🎧 Podcast Insights AI",
                    card_description="Advanced AI-driven podcast analysis: transcribe, extract key insights, and analyze speaker data from any Spotify podcast.",
                    number_credits='Free',
                    card_caracteristicas="Professional podcast analysis: AI-powered transcription, speaker identification, topic extraction, and full episode breakdown.",
                    route_href= "https://podcast-insight-ai.replit.app/"
                ),
                create_feature_card(
                    image_alt="AI Advanced Customer Service Chatbot",
                    #Chatbot avanzado para Atención al cliente con IA
                    image_src="/muestra_2_construction.png",
                    card_title="🤖 AI Advanced Customer Service Chatbot",
                    card_description="Chatbot specialized in answering frequently asked questions using AI, improving efficiency in response times.",
                    #Chatbot especializado en responder preguntas frecuentes utilizando IA, mejorando la eficiencia en tiempos de respuesta.
                    number_credits='Free',
                    card_caracteristicas="Chatbot specialized in answering frequently asked questions using AI, improving efficiency in response times.",
                    route_href= "https://seo-content-optimizer.replit.app/"
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
                    feature_title="High-quality products",
                    #Productos de alta calidad
                    feature_description="Our products are developed by experts in artificial intelligence and are designed to be easy to use.",
                    #Nuestros productos son desarrollados por expertos en inteligencia artificial y están diseñados para ser fáciles de usar.
                ),
                create_feature_box(
                    icon_alt="file-stack",
                    icon_name="file-stack",
                    feature_title="All-in-one platform",
                    feature_description="Our platform allows you to find all the AI products you need in one place, without having to search on different platforms.",
                    #Nuestros productos son desarrollados por expertos en inteligencia artificial y están diseñados para ser fáciles de usar.
                ),
                create_feature_box(
                    icon_alt="users",
                    icon_name="users",
                    feature_title="Support 24/7",
                    feature_description="We offer technical support at any time of the day, so you can resolve your doubts quickly.",
                    #Te ofrecemos soporte técnico en cualquier momento del día, para que puedas resolver tus dudas rápidamente.
                ),
                create_feature_box(
                    icon_alt="circle_check_big",
                    icon_name="circle_check_big",
                    feature_title="We develop the latest technologies",
                    feature_description="We are constantly updating our products to offer you the latest in artificial intelligence technology.",
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