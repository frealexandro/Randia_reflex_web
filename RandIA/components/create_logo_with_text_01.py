import reflex as rx 
from RandIA.routes import Route 




def create_logo_with_text():
    """Create a logo with company name."""
    return rx.flex(
        rx.el.button(
        rx.image(
            alt="RandIA-logo-normal.png",
            src="/RandIA-logo-normal.png",
            #on_click=rx.redirect(Route.INDEX.value),
            #href = Route.INDEX.value,
            height="2.5rem",
            margin_right="0.75rem",
            width="2.5rem",
        ), 
        on_click=rx.redirect(Route.INDEX.value),
        cursor="pointer",
        background="none",
        border="none",
        padding="0",
        margin_right="0.75rem", 
        ),
        rx.el.button(
            "RandiA",
            #href = Route.INDEX.value,
            on_click=rx.redirect(Route.INDEX.value),
            font_weight="600",
            color="white",
            font_size="1.25rem",
            line_height="1.75rem",
        ),
        display="flex",
        align_items="center",
    )