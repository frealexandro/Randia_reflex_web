import reflex as rx
from RandIA.routes import Route 

def create_free_trial_button():
    """Create a 'Start Free Trial' button with specific styling."""
    return rx.el.button(
        "AI Products",
        on_click=rx.redirect(Route.PRODUCTS.value),
        background_color="#EB6210",
        font_weight="500",
        _hover={"background-color": "#1D4ED8"},
        margin_left="1rem",
        padding_left="1rem",
        padding_right="1rem",
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        border_radius="0.375rem",
        font_size="0.875rem",
        line_height="1.25rem",
        color="#ffffff",
    )