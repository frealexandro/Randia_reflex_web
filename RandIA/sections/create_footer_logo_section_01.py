import reflex as rx




def create_footer_logo_section():
    """Create the logo and tagline section for the footer."""
    return rx.box(
        rx.image(
            alt="Consultor Data Analytics Logo",
            src="/RandIA-blanco-logo.png",
            height="2.5rem",
            margin_bottom="0.5rem",
            width="2.5rem",
        ),
        rx.text(
            "Tu suscripción de analytics completa, flexible y accesible.",
            font_size="0.875rem",
            line_height="1.25rem",
        ),
        margin_bottom=rx.breakpoints(
            {"0px": "1.5rem", "768px": "0"}
        ),
        width=rx.breakpoints(
            {"0px": "100%", "768px": "33.333333%"}
        ),
    )