import reflex as rx
from RandIA.content.create_footer_content_01 import create_footer_content
from RandIA.components.create_copyright_section_01 import create_copyright_section






def create_footer_container():
    """Create the main footer container with responsive width and padding."""
    return rx.box(
        rx.box(
            create_footer_content(),
            create_copyright_section(),
            width="100%",
            style=rx.breakpoints(
                {
                    "640px": {"max-width": "640px"},
                    "768px": {"max-width": "768px"},
                    "1024px": {"max-width": "1024px"},
                    "1280px": {"max-width": "1280px"},
                    "1536px": {"max-width": "1536px"},
                }
            ),
            margin_left="auto",
            margin_right="auto",
            padding_left="1rem",
            padding_right="1rem",
        ),
        background_color="#1F2937",
        padding_top="2.5rem",
        padding_bottom="2.5rem",
        color="#ffffff",
    )