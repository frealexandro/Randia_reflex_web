import reflex as rx






def create_colored_text(text_color, text_content):
    """Create text with a specified color."""
    return rx.text(text_content, color=text_color)
