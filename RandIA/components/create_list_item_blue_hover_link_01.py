import reflex as rx
from RandIA.components.create_blue_hover_link_01 import create_blue_hover_link



def create_list_item_blue_hover_link(link_text,href):
    """Create a list item with a blue hover link."""
    return rx.el.li(
        create_blue_hover_link(link_text=link_text,href=href)
    )