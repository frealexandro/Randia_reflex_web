import reflex as rx 
from RandIA.views.create_header_01 import create_header
from RandIA.content.create_main_content_01 import create_main_content
from RandIA.views.create_footer_01 import create_footer_container


def create_page_layout():
    """Create the overall page layout including header, main content, and footer."""
    return rx.box(
        rx.box(
            create_header(),
            background_color="black",
            box_shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        ),
        create_main_content(),
        rx.box(
            create_footer_container(),
            background_color="#1F2937",
            padding_top="2rem",
            padding_bottom="2rem",
            color="#ffffff",
        ),
        class_name="font-['Inter']",
        background_color="black",
    )