import reflex as rx






def create_learn_more_link(link_href):
    """Create a 'Learn More' link with custom styling."""
    return rx.el.a(
        "Ver más",
        href=link_href,
        class_name="text-[black]",
        font_weight="600",
        _hover={"text-decoration": "underline"},
    )
