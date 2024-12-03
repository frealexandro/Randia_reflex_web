import reflex as rx


def create_paragraph(paragraph_text):
    """Create a paragraph with predefined styles."""
    return rx.text(
        paragraph_text,
        margin_bottom="4rem",
        font_size="1.25rem",
        line_height="1.75rem",
    )