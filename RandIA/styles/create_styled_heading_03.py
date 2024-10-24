import reflex as rx 

def create_styled_heading(
    heading_level, font_size, margin_bottom, heading_text
):
    """Create a styled heading with custom font size and margin."""
    return rx.heading(
        heading_text,
        font_weight="600",
        margin_bottom=margin_bottom,
        font_size=font_size,
        line_height="1.75rem",
        as_=heading_level,
        color = "#1F2937",
        #_hover={"background-color": "#1D4ED8"},
    )