import reflex as rx
from RandIA.components.create_link_03 import create_link



def create_list_item(hover_style, text_color, item_text):
    """Create a list item with a hyperlink inside."""
    return rx.el.li(
        create_link(
            hover_style=hover_style,
            text_color=text_color,
            link_text=item_text,
        )
    )
