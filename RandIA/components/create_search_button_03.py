import reflex as rx
from RandIA.components.create_icon_03 import create_icon





def create_search_button():
    """Create a styled search button with a search icon."""
    return rx.el.button(
        create_icon(
            alt_text="Search",
            icon_height="1.25rem",
            icon_name="search",
            icon_width="1.25rem",
            ##FFBE76
        ),
        class_name="bg-[#FFBE76] hover:bg-[#FF8C61]",
        transition_duration="300ms",
        padding_left="1rem",
        padding_right="1rem",
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        border_top_right_radius="0.5rem",
        border_bottom_right_radius="0.5rem",
        color="#ffffff",
        transition_property="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        transition_timing_function="cubic-bezier(0.4, 0, 0.2, 1)",
    )