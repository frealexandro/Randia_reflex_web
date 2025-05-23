import reflex as rx
from RandIA.routes import Route






def create_pricing_button():
    """Create a 'Sign In' button with specific styling."""
    return rx.el.button(
        "Productos",
        font_weight="500",
        on_click=rx.redirect(Route.PRODUCTS.value),
        _hover={"color": "#111827"},
        padding_left="1rem",
        padding_right="1rem",
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        color="#374151",
        font_size="1rem",
        line_height="1.25rem",
    )