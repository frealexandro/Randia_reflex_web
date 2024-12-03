import reflex as rx
from RandIA.components.create_checkmark_icon_01 import create_checkmark_icon
from RandIA.components.create_text_span_01 import create_text_span


def create_checkmark_list_item(icon_color, item_text):
    """Create a list item with a colored checkmark and text."""
    return rx.el.li(
        create_checkmark_icon(icon_color=icon_color),
        create_text_span(span_text=item_text),
        display="flex",
        align_items="center",
        margin_bottom="0.75rem",
        color = "ffffff"
    )