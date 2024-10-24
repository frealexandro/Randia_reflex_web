import reflex as rx


def create_small_icon(alt_text, icon_tag):
    """Create a small icon with specified attributes."""
    return rx.icon(
        alt=alt_text,
        tag=icon_tag,
        height="1.5rem",
        width="1.5rem",
    )