import reflex as rx
from RandIA.components.create_green_icon_01 import create_green_icon
from RandIA.components.create_heading_description_box_01 import create_heading_description_box


def create_icon_with_text(
    icon_alt, icon_tag, heading_text, description_text
):
    """Create a flex container with an icon and text."""
    return rx.flex(
        create_green_icon(
            alt_text=icon_alt, icon_tag=icon_tag
        ),
        create_heading_description_box(
            heading_text=heading_text,
            description_text=description_text,
        ),
        display="flex",
        align_items="flex-start",
    )