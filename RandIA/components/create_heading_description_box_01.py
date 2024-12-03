import reflex as rx
from RandIA.components.create_custom_heading_01 import create_custom_heading
from RandIA.components.create_gray_text_01 import create_gray_text





def create_heading_description_box(
    heading_text, description_text
):
    """Create a box with a heading and description."""
    return rx.box(
        create_custom_heading(
            font_size="1.25rem",
            line_height="1.75rem",
            margin_bottom="0.5rem",
            heading_text=heading_text,
            color="#EB6210",
            
        ),
        create_gray_text(text_content=description_text),
    )