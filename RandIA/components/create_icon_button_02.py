import reflex as rx
from RandIA.components.create_icon_02 import create_icon



def create_icon_button(alt_text, icon_name):
    """Create a button with an icon, including hover effects."""
    return rx.el.button(
        create_icon(alt_text=alt_text, icon_name=icon_name),
        _hover={"color": "#1F2937"},
        color="#4B5563",
    )
