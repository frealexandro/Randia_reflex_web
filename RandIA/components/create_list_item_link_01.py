import reflex as rx
from RandIA.components.create_hover_link_01 import create_hover_link


def create_list_item_link(link_text, href):
    """Create a list item containing a link."""
    return rx.el.li(create_hover_link(link_text=link_text, href=href))
