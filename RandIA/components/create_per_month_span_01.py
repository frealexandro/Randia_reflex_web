import reflex as rx



def create_per_month_span():
    """Create a span element with '/month' text."""
    return rx.text.span(
        "/month",
        font_weight="400",
        font_size="1.125rem",
        line_height="1.75rem",
    )