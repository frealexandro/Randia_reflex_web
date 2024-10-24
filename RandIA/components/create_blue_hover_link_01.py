import reflex as rx


def create_blue_hover_link(link_text, href):
    """Create a link with blue hover effect."""
    return rx.el.a(
        link_text, href=href, _hover={"color": "#93C5FD"}
    )
