import reflex as rx
from RandIA.components.create_custom_heading_01 import create_custom_heading
from RandIA.components.create_gray_text_01 import create_gray_text
from RandIA.components.create_icon_01 import create_icon



def create_feature_box(
    icon_alt, icon_tag, heading_text, description_text
):
    """Create a feature box with an icon, heading, and description."""
    return rx.box(
        create_icon(alt_text=icon_alt, icon_tag=icon_tag),
        create_custom_heading(
            font_size="1.25rem",
            line_height="1.75rem",
            margin_bottom="0.5rem",
            heading_text=heading_text,
            color="#EB6210",
        ),
        create_gray_text(text_content=description_text),
        background_color="black",
        padding="1.5rem",
        border_radius="0.5rem",
        box_shadow="0 8px 12px -1px rgba(255, 255, 255, 0.2), 0 4px 8px -1px rgba(255, 255, 255, 0.15)",
    )