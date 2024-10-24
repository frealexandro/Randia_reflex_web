import reflex as rx


def create_link(hover_style, text_color, link_text):
    """Create a hyperlink with custom hover and color styles."""
    return rx.el.a(
        link_text,
        href="#",
        _hover=hover_style,
        color=text_color,
    )
