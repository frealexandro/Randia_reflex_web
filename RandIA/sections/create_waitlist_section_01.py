import reflex as rx     
from RandIA.components.create_email_input_01 import create_email_input
from RandIA.components.create_paragraph_01 import create_paragraph
from RandIA.components.create_subscribe_button_01 import create_subscribe_button
from RandIA.states.states import PageState








def create_waitlist_section():
    """Create the waitlist section with form."""
    return rx.box(
        rx.heading(
            "Únirse a la lista de espera",
            font_weight="700",
            margin_bottom="2rem",
            font_size="1.875rem",
            line_height="2.25rem",
            as_="h2",
        ),
        create_paragraph(
            paragraph_text="Se el primero en saber cuándo lanzamos nuestros servicios de suscripción"
        ),
        rx.form(
            rx.flex(
                create_email_input(),
                create_subscribe_button(),
                display="flex",
            ),
            on_submit=PageState.submit_email,
            reset_on_submit=True,
            max_width="28rem",
            margin_left="auto",
            margin_right="auto",
        ),
        width="100%",
        style=rx.breakpoints(
            {
                "640px": {"max-width": "640px"},
                "768px": {"max-width": "768px"},
                "1024px": {"max-width": "1024px"},
                "1280px": {"max-width": "1280px"},
                "1536px": {"max-width": "1536px"},
            }
        ),
        margin_left="auto",
        margin_right="auto",
        padding_left="1.5rem",
        padding_right="1.5rem",
        text_align="center",
    )
