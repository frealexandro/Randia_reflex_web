import reflex as rx
from RandIA.components.create_paragraph_01 import create_paragraph
from RandIA.components.create_waitlist_button_01 import create_waitlist_button



def create_hero_section():
    """Create the hero section with main heading and call-to-action."""
    return rx.box(
        rx.heading(
            "EL MARKETPLACE MAS GRANDE INTELIGENCIA ARTIFICIAL",
            font_weight="700",
            margin_bottom="1rem",
            font_size="2.25rem",
            line_height="2.5rem",
            as_="h1",
        ),
        create_paragraph(
            paragraph_text="Deja de buscar distintas soluciones para tus problemas de inteligencia artificial, en RandiA encontrarás todo lo que necesitas para tu empresa."
        ),
        create_paragraph(
            paragraph_text=" Alta Calidad | Soluciones Infinitas | Inovación | Inteligencia Artificial "
        ),
        create_waitlist_button(),
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
        padding_left="1.5rem",
        padding_right="1.5rem",
        text_align="center",
    )