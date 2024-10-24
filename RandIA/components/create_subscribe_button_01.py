import reflex as rx


def create_subscribe_button():
    """Create a subscribe button for the waitlist form."""
    return rx.el.button(
        "Enviar",
        type="submit",
        background_color="black",
        transition_duration="300ms",
        font_weight="600",
        _hover={"background-color": "blue"},
        padding_left="1.5rem",
        padding_right="1.5rem",
        padding_top="0.75rem",
        padding_bottom="0.75rem",
        border_top_right_radius="9999px",
        border_bottom_right_radius="9999px",
        color="white",
        transition_property="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        transition_timing_function="cubic-bezier(0.4, 0, 0.2, 1)",
    )