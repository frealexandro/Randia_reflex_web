import reflex as rx
from RandIA.content.create_footer_content_03 import create_footer_content




def create_footer():
    """Create the footer section with content and copyright notice."""
    return rx.box(
        create_footer_content(),
        rx.box(
            rx.text("© 2023 RandiA. All rights reserved."),
            border_color="#374151",
            border_top_width="1px",
            margin_top="2rem",
            padding_top="2rem",
            text_align="center",
            color="#9CA3AF",
        ),
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
    )