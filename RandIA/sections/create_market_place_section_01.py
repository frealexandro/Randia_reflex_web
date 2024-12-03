import reflex as rx 
from RandIA.components.create_centered_heading_01 import create_centered_heading
from RandIA.components.create_feature_box_01 import create_feature_box
from RandIA.components.create_centered_heading_smaller_01 import create_centered_heading_smaller
from RandIA.components.create_feature_card_03 import create_feature_card






def create_market_place_section():
    """Create the services section with feature boxes."""
    return rx.box(
        create_centered_heading(
            heading_text="You'll Love The Artificial Intelligence Products In Our Marketplace!",
            color="ffffff",
        ),
        create_centered_heading_smaller(
            heading_text="All our products have a free credit trial period, so you can try them before subscribing.",
            color="#ffffff",
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