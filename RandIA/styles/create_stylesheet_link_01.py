import reflex as rx


def create_stylesheet_link(stylesheet_url):
    """Create a link element for a stylesheet."""
    return rx.el.link(href=stylesheet_url, rel="stylesheet")
