import reflex as rx 

def create_copyright_section():
    """Create a copyright section with a horizontal line above it."""
    return rx.box(
        rx.text(
            "© 2023 RandiA. All rights reserved.",
            color="#9CA3AF",
            font_size="0.875rem",
            line_height="1.25rem",
        ),
        border_color="#374151",
        border_top_width="1px",
        margin_top="2rem",
        padding_top="2rem",
        text_align="center",
    )