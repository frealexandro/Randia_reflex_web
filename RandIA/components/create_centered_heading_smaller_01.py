import reflex as rx



def create_centered_heading_smaller(heading_text, color):
    """Create a centered heading with predefined styles."""
    return rx.heading(
        heading_text,
        font_weight="700",
        margin_bottom="3rem",
        font_size="1rem",
        line_height="1rem",
        text_align="center",
        as_="h2",
        color=color,
    )

