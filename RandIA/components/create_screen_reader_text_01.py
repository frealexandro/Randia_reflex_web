import reflex as rx




def create_screen_reader_text():
    """Create a span element with text for screen readers."""
    return rx.text.span(
        "Open main menu",
        position="absolute",
        width="1px",
        height="1px",
        padding="0",
        margin="-1px",
        overflow="hidden",
        clip="rect(0, 0, 0, 0)",
        white_space="nowrap",
        border_width="0",
    )
