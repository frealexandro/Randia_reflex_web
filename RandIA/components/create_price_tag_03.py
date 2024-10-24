import reflex as rx


def create_price_tag(number_credits):
    """Creates a price tag box with a fixed price of $99.99 positioned absolutely on the top right corner of its container."""
    return rx.box(
        rx.text.span(
            f"Desde ${number_credits} USD", font_weight="700", color="black"
        ),
        position="absolute",
        background_color="#FFBE76",
        padding_left="0.75rem",
        padding_right="0.75rem",
        padding_top="0.25rem",
        padding_bottom="0.25rem",
        right="1rem",
        border_radius="9999px",
        top="1rem",
    )