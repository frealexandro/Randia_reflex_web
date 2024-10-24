import reflex as rx



def create_centered_heading(heading_text, color):
    """Create a centered heading with predefined styles."""
    return rx.heading(
        heading_text,
        font_weight="700",
        margin_bottom="3rem",
        font_size="2rem",
        line_height="2.25rem",
        text_align="center",
        as_="h2",
        color=color,
    )

