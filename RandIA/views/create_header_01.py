import reflex as rx
from RandIA.components.create_mobile_nav_link_01 import create_mobile_nav_link
from RandIA.content.create_header_content_01 import create_header_content
from RandIA.components.create_mobile_menu_01 import create_mobile_menu
from RandIA.states.states import PageState


def create_header():
    """Create the complete header component with desktop and mobile layouts."""
    return rx.box(
        rx.box(
            create_header_content(),
            max_width="80rem",
            margin_left="auto",
            margin_right="auto",
            padding_left=rx.breakpoints(
                {
                    "0px": "1rem",
                    "640px": "1.5rem",
                    "1024px": "2rem",
                }
            ),
            padding_right=rx.breakpoints(
                {
                    "0px": "1rem",
                    "640px": "1.5rem",
                    "1024px": "2rem",
                }
            ),
        ),
        rx.cond(
            PageState.is_mobile_menu_open,
            create_mobile_menu(),),
        background_color="black",
        box_shadow="0 8px 12px -1px rgba(255, 255, 255, 0.2), 0 4px 8px -1px rgba(255, 255, 255, 0.15)",
    )
