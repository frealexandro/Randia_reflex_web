import reflex as rx
from RandIA.components.create_search_input_03 import create_search_input
from RandIA.components.create_search_button_03 import create_search_button





def create_search_bar(input_placeholder):
    """Create a search bar with input field and search button."""
    return rx.flex(
        create_search_input(
            placeholder_text=input_placeholder
        ),
        create_search_button(),
        display="flex",
        align_items="center",
    )