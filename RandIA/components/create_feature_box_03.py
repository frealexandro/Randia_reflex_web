import reflex as rx 
from RandIA.components.create_feature_icon_03 import create_feature_icon
from RandIA.styles.create_styled_heading_03 import create_styled_heading




def create_colored_text(text_color, text_content):
    """Create text with a specified color."""
    return rx.text(text_content, color=text_color)


def create_feature_box(
    icon_alt, icon_name, feature_title, feature_description
):
    """Create a feature box with icon, title, and description."""
    return rx.box(
        create_feature_icon(
            alt_text=icon_alt, icon_name=icon_name
        ),
        create_styled_heading(
            heading_level="h3",
            font_size="1.25rem",
            margin_bottom="0.5rem",
            heading_text=feature_title,
        ),
        create_colored_text(
            text_color="white",
            text_content=feature_description,
        ),
        background_color="black",
        padding="1.5rem",
        border_radius="0.5rem",
        box_shadow="0 8px 12px -1px rgba(255, 255, 255, 0.2), 0 4px 8px -1px rgba(255, 255, 255, 0.15)",
        text_align="center",
    )

