import reflex as rx


def create_heading(
    heading_level, font_size, line_height, text 
):
    """Create a heading with specified styling and text."""
    return rx.heading(
        text,
        font_weight="600",
        margin_bottom="1rem",
        font_size=font_size,
        line_height=line_height,
        as_=heading_level,
        color = "black",
        align="center"
        
    )