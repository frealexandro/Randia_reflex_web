import reflex as rx
from RandIA.routes import Route





def create_basic_casracteristicas():
    """Create a 'Learn More' link with custom styling."""
    return rx.el.a(
        "Features",
        #href=Route.FUNNEL.value,
        class_name="text-[black]",
        font_weight="600",
        #_hover={"text-decoration": "underline"},
    )
