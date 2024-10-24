import reflex as rx 
from ..layouts.create_page_layout_02 import create_page_layout
from RandIA import utils
from RandIA.routes import Route




@rx.page(
    route=Route.FUNNEL.value,
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    
)
def funnel_page():
    """Create the overall page layout, including styles and main content."""
    return rx.fragment(
        rx.el.link(
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
            rel="stylesheet",
        ),
        rx.el.link(
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
            rel="stylesheet",
        ),
        rx.el.style(
            """
        @font-face {
            font-family: 'LucideIcons';
            src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
        }
    """
        ),
        rx.box(
            create_page_layout(),
            class_name="bg-teal-100",
            font_family='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        ),
    )