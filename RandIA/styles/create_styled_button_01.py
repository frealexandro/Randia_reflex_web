import reflex as rx
from RandIA.routes import Route 



def create_styled_button(
    hover_styles, bg_color, text_color, button_text
):
    """Create a styled button with specified attributes and hover effect."""
    return rx.el.button(
        button_text,
        on_click=rx.redirect(Route.PRODUCTS.value),
        background_color=bg_color,
        transition_duration="300ms",
        font_weight="600",
        #_hover={"background-color": "#1D4ED8","color":"#ffffff"},
        _hover=hover_styles,
        padding_left="1.5rem",
        padding_right="1.5rem",
        padding_top="0.75rem",
        padding_bottom="0.75rem",
        border_radius="9999px",
        color=text_color,
        text_align="center",
        transition_property="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        transition_timing_function="cubic-bezier(0.4, 0, 0.2, 1)",
    )