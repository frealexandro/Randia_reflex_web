import reflex as rx
from RandIA.routes import Route






def create_sign_in_button():
    """Create a 'Sign In' button with specific styling."""
    return rx.el.button(
        "Login",
        on_click=rx.redirect(Route.INICIO.value),
        font_weight="500",
        _hover={"color": "#1D4ED8"},
        padding_left="1rem",
        padding_right="1rem",
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        color="white",
        font_size="1rem",
        line_height="1.25rem",
    )
