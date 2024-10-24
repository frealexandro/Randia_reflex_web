import reflex as rx
#from RandIA.routes import Route 






def create_learn_more_link(link_href):
    """Create a 'Learn More' link with custom styling."""
    return rx.el.button(
        "Try it now",
        on_click=rx.redirect(link_href),
        background_color="#FFBE76",
        font_weight="500",
        _hover={"background-color": "#1D4ED8"},
        margin_left="1rem",
        padding_left="1rem",
        padding_right="1rem",
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        border_radius="0.375rem",
        font_size="0.875rem",
        line_height="1.25rem",
        color="#ffffff",
        border="1.5px solid #1D4ED8"
          )


