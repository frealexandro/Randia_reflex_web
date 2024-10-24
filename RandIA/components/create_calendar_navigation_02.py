import reflex as rx
from RandIA.components.create_icon_button_02 import create_icon_button




def create_calendar_navigation():
    """Create a calendar navigation component with previous and next buttons."""
    return rx.flex(
        create_icon_button(
            alt_text="Anterior", icon_name="chevron-left"
        ),
        rx.text.span(
            "Septiembre 2024",
            font_weight="600",
            font_size="1.125rem",
            line_height="1.75rem",
        ),
        create_icon_button(
            alt_text="Siguiente", icon_name="chevron-right"
        ),
        display="flex",
        align_items="center",
        justify_content="space-between",
        margin_bottom="1rem",
    )