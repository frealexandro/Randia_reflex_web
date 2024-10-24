import reflex as rx
from RandIA.states.states import PageState




def create_email_input():
    """Create an email input field for the waitlist form."""
    return rx.el.input(
        placeholder="Ingresa tu correo electrónico",
        required=True,
        type="email",
        value = PageState.email,
        on_change=PageState.set_email,
        name="email",
        flex_grow="1",
        padding_left="1rem",
        padding_right="1rem",
        padding_top="0.75rem",
        padding_bottom="0.75rem",
        border_top_left_radius="9999px",
        border_bottom_left_radius="9999px",
        background_color= "white",
        color="black",
    )