import reflex as rx 
from RandIA.components.create_small_icon_01 import create_small_icon




def create_social_media_link(icon_alt, icon_tag,href):
    """Create a social media link with an icon."""
    return rx.el.a(
        create_small_icon(
            alt_text=icon_alt, icon_tag=icon_tag
        ),
        href=href,
        _hover={"color": "#93C5FD"},
    )