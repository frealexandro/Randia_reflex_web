import reflex as rx
from RandIA.layouts.create_meeting_scheduler_layout_02 import create_meeting_scheduler_layout



def create_main_content():
    """Create the main content of the page, including title and meeting scheduler."""
    return rx.box(
        rx.heading(
            "¡Empecemos a lo grande con tu primer pedido!",
            font_weight="700",
            margin_bottom="1.5rem",
            font_size="2.25rem",
            line_height="2.5rem",
            color="#000000",
            text_align="center",
            as_="h1",
        ),
        rx.box(
            create_meeting_scheduler_layout(),
            background_color="#FFBE76",
            margin_bottom="2rem",
            padding="1.5rem",
            border_radius="0.5rem",
            box_shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
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
        padding_top="2rem",
        padding_bottom="2rem",
    )
