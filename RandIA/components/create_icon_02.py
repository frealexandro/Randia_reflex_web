import reflex as rx




def create_icon(alt_text, icon_name):
    """Create an icon with specified alt text and tag name."""
    return rx.icon(
        alt=alt_text,
        tag=icon_name,
        height="1.5rem",
        width="1.5rem",
    )
