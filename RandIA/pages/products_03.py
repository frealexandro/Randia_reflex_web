import reflex as rx 
from ..layouts.create_page_layout_03 import create_page_layout
from RandIA import utils
from RandIA.routes import Route
from RandIA.styles.create_stylesheet_link_01 import create_stylesheet_link





@rx.page(
    route=Route.PRODUCTS.value,
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    
)
def products():
    """Create the complete page including stylesheets and all content."""
    return rx.fragment(
        create_stylesheet_link(
            stylesheet_url="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        ),
        create_stylesheet_link(
            stylesheet_url="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        ),
        rx.el.style(
            """
        @font-face {
            font-family: 'LucideIcons';
            src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
        }
    """
        ),
        create_page_layout(),
    )