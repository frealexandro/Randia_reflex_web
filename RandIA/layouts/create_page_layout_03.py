import reflex as rx
from RandIA.views.create_header_01 import create_header

#from RandIA.components.create_header_container_03 import create_header_container

from RandIA.content.create_main_content_03 import create_main_content
from RandIA.views.create_footer_01 import create_footer_container





def create_page_layout():
    """Create the overall page layout including header, main content, and footer."""
    return rx.box(
        #create_header_container(),
        create_header(),

        create_main_content(),
        rx.box(
            create_footer_container(),
            background_color="#1F2937",
            padding_top="2rem",
            padding_bottom="2rem",
            color="#ffffff",
        ),
        background_color="#F3F4F6",
        font_family='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    )
