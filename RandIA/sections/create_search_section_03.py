import reflex as rx 
from RandIA.components.create_search_bar_03 import create_search_bar
from RandIA.styles.create_styled_heading_03 import create_styled_heading





def create_search_section(
    section_title, search_placeholder
):
    """Create a search section with title and search bar."""
    return rx.box(
        create_styled_heading(
            heading_level="h2",
            font_size="1rem",
            margin_bottom="1rem",
            heading_text=section_title,
        ),
        create_search_bar(
            input_placeholder=search_placeholder
        ),
        background_color="#ffffff",
        padding="1rem",
        border_radius="0.5rem",
        box_shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    )