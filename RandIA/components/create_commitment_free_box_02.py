import reflex as rx


def create_commitment_free_box(heading_text, text, background_color, color):
    """Create an informational box highlighting the commitment-free nature of the initial meeting."""
    return rx.box(
        rx.heading(
            heading_text,
            font_weight="600",
            margin_bottom="0.5rem",
            color=color,
            font_size="1.25rem",
            line_height="1.75rem",
            as_="h3",
            align="center",
        ),
        rx.text(
            text,
            color=color,
        ),
        background_color=background_color,
        margin_top="1rem",
        padding="1rem",
        border_radius="0.5rem",
    )

