import reflex as rx



def create_card_description(description_text):
    """Create a styled description text for a card."""
    return rx.text(
        description_text,
        margin_bottom="1rem",
        color="#ffffff",
        #_hover={"background-color": "#1D4ED8"},
    )