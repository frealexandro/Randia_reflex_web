import reflex as rx 


def create_list_item(content):
    """Create a list item with the given content."""
    return rx.el.li(
        content,
        color = "black",
        text_align = "center",
        list_style_type="none",
        )