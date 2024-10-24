
import reflex as rx


def create_hover_link(link_text,href):
    """Create a link with hover effect."""
    return rx.el.a(
        link_text,
        href=href,
        _hover={"color": "#1F2937"},
        color="#4B5563",
    )
