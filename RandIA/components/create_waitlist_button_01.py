import reflex as rx 
from RandIA.routes import Route



def create_waitlist_button():
    """Create a 'Join Waitlist' button."""
    return rx.el.button(
        "Find AI Products",
        
        on_click=rx.redirect(Route.FUNNEL.value),
        #href="#waitlist",
        background_color="#ffffff",
        transition_duration="300ms",
        font_weight="600",
        _hover={"background-color": "#1D4ED8","color":"#ffffff"},
        padding_left="2rem",
        padding_right="2rem",
        padding_top="0.75rem",
        padding_bottom="0.75rem",
        border_radius="9999px",
        box_shadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        color="#FFBE76",
        transition_property="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        transition_timing_function="cubic-bezier(0.4, 0, 0.2, 1)",
    )






# def create_free_trial_button():
#     """Create a 'Start Free Trial' button with specific styling."""
#     return rx.el.button(
#         "Comenzar Prueba Gratis",
#         on_click=rx.redirect(Route.FUNNEL.value),
#         background_color="#FFBE76",
#         font_weight="500",
#         _hover={"background-color": "#1D4ED8"},
#         margin_left="1rem",
#         padding_left="1rem",
#         padding_right="1rem",
#         padding_top="0.5rem",
#         padding_bottom="0.5rem",
#         border_radius="0.375rem",
#         font_size="0.875rem",
#         line_height="1.25rem",
#         color="#ffffff",
#     )