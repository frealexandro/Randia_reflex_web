import reflex as rx



def create_green_icon(alt_text, icon_tag):
    """Create a green icon with specified attributes."""
    return rx.icon(
        alt=alt_text,
        tag=icon_tag,
        height="1.5rem",
        margin_right="1rem",
        color="#FFBE76",
        width="1.5rem",
    )