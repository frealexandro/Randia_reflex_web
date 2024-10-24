import reflex as rx
from RandIA.components.create_screen_reader_text_01 import create_screen_reader_text
from RandIA.states.states import PageState




def create_mobile_menu_button():
    """Create a mobile menu button with icon and accessibility attributes."""
    return rx.el.button(
        create_screen_reader_text(),
        rx.icon(
            alt="Menu Icon",
            tag="menu",
            display="block",
            height="1.5rem",
            width="1.5rem",
        ),
        aria_controls="mobile-menu",
        aria_expanded="false",
        type="button",
        on_click=PageState.toggle_mobile_menu,
        _focus={
            "outline-style": "none",
            "box-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "--ring-color": "#6366F1",
            "--tw-ring-inset": "inset",
        },
        _hover={
            "background-color": "#F3F4F6",
            "color": "#6B7280",
        },
        display="inline-flex",
        align_items="center",
        justify_content="center",
        padding="0.5rem",
        border_radius="0.375rem",
        color="#9CA3AF",
    )