import reflex as rx


def create_custom_heading_a(
    heading_type, font_size, font_weight, text
):
    """Create a heading with customizable font properties and margin."""
    return rx.heading(
        text,
        font_weight=font_weight,
        margin_bottom="1rem",
        font_size=font_size,
        line_height="1.75rem",
        as_=heading_type,
    )



def create_custom_heading(
    font_size, line_height, margin_bottom, heading_text,color
):
    """Create a custom heading with specified styles."""
    return rx.heading(
        heading_text,
        font_weight="600",
        margin_bottom=margin_bottom,
        font_size=font_size,
        line_height=line_height,
        as_="h3",
        ##color="black",
        color=color,
    )


