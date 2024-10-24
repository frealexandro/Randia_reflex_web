import reflex as rx


def create_section_heading(heading_text):
    """Create a styled section heading."""
    return rx.heading(
        heading_text,
        font_weight="700",
        margin_bottom="1.5rem",
        font_size="1.5rem",
        line_height="2rem",
        color="#1F2937",
        as_="h2",
        
    )