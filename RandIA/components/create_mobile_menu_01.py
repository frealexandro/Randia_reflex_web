
import reflex as rx
from RandIA.components.create_mobile_nav_link_01 import create_mobile_nav_link
from RandIA.routes import Route 
#from RandIA.states.menustate import MenuState
from typing import List, Dict

class State(rx.State):
    service_items: List[Dict[str, str]] = [
        {"title": "📊 Dashboards Interactivos", "description": "Visualizaciones de datos personalizadas y en tiempo real"},
        {"title": "🔍 Análisis Predictivo", "description": "Modelos de machine learning para prever comportamientos futuros"},
        {"title": "🔄 Automatización de Procesos", "description": "Flujos de trabajo automatizados para optimizar operaciones"},
        {"title": "📈 Análisis de Rendimiento", "description": "Métricas clave y KPIs personalizados para evaluar y mejorar"},
        {"title": "🕸️ Web Scraping Avanzado", "description": "Recolección y procesamiento de datos web para obtener insights"},
        {"title": "🧠 Integración GEN-AI", "description": "Implementación de IA generativa para automatización"},
        {"title": "📱 Analítica Móvil", "description": "Seguimiento y análisis de comportamiento de usuarios"},
        {"title": "🔗 Integración de Datos", "description": "Unificación de fuentes de datos dispares para una visión general"},
        {"title": "🛒 Análisis de Conversión", "description": "Optimización del embudo de ventas mediante análisis detallado"},
        
    ]



def create_mobile_submenu(text: str, submenu_items: List[Dict[str, str]]):
    return rx.menu.root(
        rx.menu.trigger(
            rx.button(
                rx.text(text),
                rx.icon("chevron-down"),
                width="100%",
                justify_content="space-between",
                font_weight="500",
                _hover={
                    "background-color": "#F9FAFB",
                    "color": "#111827",
                },
                padding_right="0.75rem",
                padding_top="0.5rem",
                padding_bottom="0.5rem",
                font_size="1rem",
                line_height="1.5rem",
                color="#374151",
                background_color="transparent",
            )
        ),
        rx.menu.content(
            rx.vstack(
                rx.foreach(
                    submenu_items,
                    lambda item: rx.menu.item(
                        rx.vstack(
                            rx.link(
                            rx.text(item["title"], font_weight="bold", text_align="center",color = "black",), #font_family="Comic Sans MS"),
                            href=Route.FUNNEL.value,
                            ),
                            rx.text(
                                item["description"], 
                                text_align="center", 
                                font_size="0.8em",
                                color="gray",
                                max_width="100%",
                                overflow_wrap="break-word",
                                background_color="white",
                            ),
                            width="100%",
                            spacing="0.5em",
                            background_color="white",
                        ),
                        padding_y="1em",
                        width="100%",
                        background_color="white",
                    )
                ),
                spacing="1em",
                width="100%",
                background_color="white",
            ),
            width="100%",
            background_color="white",
        ),
        width="100%",
    )


def create_mobile_menu():
    """Create a mobile menu with navigation links and buttons."""
    return rx.box(
        rx.box(
            #create_mobile_submenu("Servicios", State.service_items),
            create_mobile_nav_link(text="Productos", href=Route.PRODUCTS.value),
            create_mobile_nav_link(text="Iniciar Sesión", href=Route.INICIO.value),
            #create_mobile_nav_link(text="Comenzar Prueba Gratis", href=Route.FUNNEL.value),
            
            display="flex",
            flex_direction="column",
            padding_bottom="0.75rem",
            padding_top="0.5rem",
            gap="0.25rem",
        ),
        id="mobile-menu",
        display=rx.breakpoints({"640px": "none"}),
    )


