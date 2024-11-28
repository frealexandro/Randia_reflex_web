import reflex as rx 
from RandIA.components.create_list_item_link_01 import create_list_item_link
from RandIA.components.create_logo_with_text_01 import create_logo_with_text
from RandIA.components.create_sign_in_button_01 import create_sign_in_button
from RandIA.components.create_free_trial_button_01 import create_free_trial_button
from RandIA.components.create_mobile_menu_button_01 import create_mobile_menu_button
from RandIA.components.create_pricing_button_01 import create_pricing_button
from RandIA.routes import Route


def service_item(icon: str, title: str, description: str) -> rx.Component:
    return rx.flex(
        rx.flex(
            rx.link(
            rx.text(icon, font_size="2em", margin_right="0.5em",), #href=Route.FUNNEL.value,), #font_family="Comic Sans MS"),
            rx.heading(title, size="xs",color = "black"), #href=Route.FUNNEL.value,), #font_family="Comic Sans MS"),
            margin_bottom="0.5em",
            href=Route.FUNNEL.value
        )),
        rx.text(description, font_size="xs", color="gray",), 
        href=Route.FUNNEL.value, #font_family="Comic Sans MS"),
        direction="column",
    )




def create_header_content():
    """Create the header section with logo and navigation."""
    return rx.flex(
        create_logo_with_text(),
        rx.box(
            #create_list_item_link(link_text="Home"),
            #create_list_item_link(link_text="Servicios"),
            # rx.menu.root(
            #             rx.menu.trigger(
            #                 rx.button(
            #                     rx.text(
            #                         "Servicios",
            #                         size="3",
            #                         weight="medium",
            #                         color="#000000",
            #                         #font_family="Comic Sans MS",
            #                     ),
            #                     rx.icon("chevron-down"),
            #                     weight="medium",
            #                     variant="ghost",
            #                     size="3",
            #                     color="#000000",
                                

            #                 ),
            #             ),
            #             rx.menu.content(
            #             rx.heading("Servicios", size="x0.5", margin_bottom="1em",bg = "#FFFFFF", color="black" ),#, font_family="Comic Sans MS"),
            #             rx.grid(
            #                 service_item("📊", "Dashboards Interactivos", "Visualizaciones de datos personalizadas y en tiempo real para una toma de decisiones ágil"),
            #                 service_item("🔍", "Análisis Predictivo", "Modelos de machine learning para prever tendencias y comportamientos futuros"),
            #                 service_item("🔄", "Automatización de Procesos", "Flujos de trabajo automatizados para optimizar operaciones y reducir errores"),
            #                 service_item("📈", "Análisis de Rendimiento", "Métricas clave y KPIs personalizados para evaluar y mejorar el desempeño del negocio"),
            #                 service_item("🕸️", "Web Scraping Avanzado", "Recolección y procesamiento de datos web para obtener insights del mercado"),
            #                 service_item("🧠", "Integración GEN-AI", "Implementación de IA generativa para análisis avanzado de datos y automatización inteligente de flujos de trabajo"),
            #                 service_item("📱", "Analítica Móvil", "Seguimiento y análisis de comportamiento de usuarios en aplicaciones móviles"),
            #                 service_item("🔗", "Integración de Datos", "Unificación de fuentes de datos dispares para una visión holística del negocio"),
            #                 service_item("🛒", "Análisis de Conversión", "Optimización del embudo de ventas mediante análisis detallado del comportamiento del cliente"),
            #                 columns="3",
            #                 spacing="3",
            #                 color = "black",
            #                 bg = "#FFFFFF",
            #                 border_style="solid",
            #                 border_color="#FAD6A5",
            #             ),
            #             width="800px",
            #             padding="1.5em",
            #             color="#000000",
            #             bg = "#FFFFFF",
            #         )
            #         ),
            #create_list_item_link(link_text="Precios", href = Route.PRODUCTS.value),
            #create_pricing_button(),
            create_sign_in_button(),
            create_free_trial_button(),
            display=rx.breakpoints(
                {"0px": "none", "640px": "flex"}
            
            ),
        align_items=rx.breakpoints({"640px": "center"}),
            margin_left=rx.breakpoints({"640px": "1.5rem"}),
            bg = "black",
        ),


        rx.flex(
            create_mobile_menu_button(),
            display=rx.breakpoints(
                {"0px": "flex", "640px": "none"}
            ),
            align_items="center",
        ),
        display="flex",
        height="4rem",
        justify_content="space-between",
        bg = "black",
    )