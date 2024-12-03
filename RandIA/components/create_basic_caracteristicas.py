import reflex as rx
from RandIA.routes import Route





def create_basic_casracteristicas():
    """Create a 'Learn More' link with custom styling."""
    return rx.text(
        "Features",
        color="#EB6210",
        #class_name="text-[#EB6210] hover:text-[#1D4ED8] font-semibold",
        font_weight="600",
        _hover={"color": "#1D4ED8"},
    )
