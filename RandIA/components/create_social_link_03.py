import reflex as rx
from RandIA.components.create_icon_03 import create_icon


def create_social_link(icon_alt, icon_name):
    """Create a social media link with icon."""
    return rx.el.a(
        create_icon(
            alt_text=icon_alt,
            icon_height="1.5rem",
            icon_name=icon_name,
            icon_width="1.5rem",
        ),
        href="#",
        _hover={"color": "#ffffff"},
        color="#9CA3AF",
    )