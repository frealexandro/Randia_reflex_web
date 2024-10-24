import reflex as rx




def create_checkmark_icon(icon_color):
    """Create a checkmark icon with specified color."""
    return rx.icon(
        alt="Checkmark",
        tag="check",
        height="1.25rem",
        margin_right="0.5rem",
        color=icon_color,
        width="1.25rem",
    )