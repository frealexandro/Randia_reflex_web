import reflex as rx

def create_icon(alt_text, icon_tag):
    """Create an icon with specified attributes."""
    return rx.icon(
        alt=alt_text,
        tag=icon_tag,
        height="3rem",
        margin_bottom="1rem",
        width="3rem",
        color = "#FFBE76",
    )