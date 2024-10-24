import reflex as rx
from RandIA.components.create_commitment_free_box_02 import create_commitment_free_box
from RandIA.components.create_heading_02 import create_heading
from RandIA.components.create_list_item_02 import create_list_item



def create_meeting_details_section():
    """Create a section detailing the initial 30-minute meeting and its contents."""
    return rx.box(
        create_heading(
            heading_level="h2",
            font_size="1.5rem",
            line_height="2rem",
            text="Reunión inicial de 30 minutos",
            
        ),
        rx.text(
            "En esta reunión, discutiremos los siguientes temas:",
            margin_bottom="1rem",
            align="center",
            color = "black"
        ),
        rx.list(
            create_list_item(
                content="Tus objetivos y necesidades de software"

            ),
            create_list_item(
                content="Nuestro proceso de desarrollo"
            ),
            create_list_item(
                content="Estimaciones preliminares de tiempo y costo"
            ),
            create_list_item(
                content="Próximos pasos para tu proyecto"
            ),
            list_style_type="disc",
            margin_bottom="1.5rem",
            padding_left="1.5rem",
        ),
        rx.box(
            rx.text(
                "Duración de la reunión: 30 minutos",
                font_weight="600",
                font_size="1.125rem",
                line_height="1.75rem",
                color = "black",
                align="center"

            ),
            create_commitment_free_box(heading_text="Sin compromisos ni tarifas ocultas",
                                       text="Esta reunión inicial es completamente gratuita y sin compromiso. Nuestro objetivo es entender tus necesidades y ofrecerte la mejor solución posible.",
                                       background_color="#EDE9FE",
                                       color="#6D28D9"
                                       ),
            #margin_top="2rem",
            create_commitment_free_box(heading_text="7 días gratis para tu primer pedido",
                                       text="Agendemos una llamada de 30 minutos para conocernos, darte la bienvenida y ponernos en marcha con un primer pedido",
                                       background_color="#D0E8D4",
                                       color="#2E8B57"),
            #margin_top="2rem",
        ),
        flex="1 1 0%",
    )

