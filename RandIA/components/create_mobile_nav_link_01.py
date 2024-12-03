import reflex as rx

def create_mobile_nav_link(text,href):
    """Create a mobile navigation link with specified text and styling."""
    return rx.el.a(
        text,
        href=href,
        display="block",
        font_weight="500",
        _hover={
            "background-color": "#F9FAFB",
            "color": "#111827",
        },
        padding_left="0.75rem",
        padding_right="0.75rem",
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        font_size="1rem",
        line_height="1.5rem",
        color="white",
    )
