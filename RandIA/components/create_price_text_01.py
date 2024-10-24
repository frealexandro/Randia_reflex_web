import reflex as rx
from RandIA.components.create_per_month_span_01 import create_per_month_span




def create_price_text(price):
    """Create a price text with '/month' suffix."""
    return rx.text(
        price,
        create_per_month_span(),
        font_weight="700",
        margin_bottom="1.5rem",
        font_size="2.25rem",
        line_height="2.5rem",
        color="black",
    )