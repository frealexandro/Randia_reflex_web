import reflex as rx
from RandIA.components.create_centered_heading_01 import create_centered_heading
from RandIA.components.create_icon_with_text_01 import create_icon_with_text






def create_why_choose_us_section():
    """Create the 'Why Choose Us?' section with benefits."""
    return rx.box(
        create_centered_heading(
            heading_text="Why Choose Us?",
            color="#1F2937"
        ),
        rx.box(
            create_icon_with_text(
                icon_alt="circle_check_big",
                icon_tag="circle_check_big",
                heading_text="Quality Guaranteed",
                #Calidad garantizada
                description_text="solve real problems with artificial intelligence and solve micro-problems with the best possible quality.",
                #solucionamos verdaderas problematicas con inteligencia artificial y resolviendo microproblematicas con la mejor calidad posible.

            ),
            create_icon_with_text(
                icon_alt="zap",
                icon_tag="zap",
                heading_text="Low Costs",
                #Costos bajos
                description_text="Our costs are the lowest in the market, and you can acquire credits to try our products before subscribing.",
                #nuestros costos son los mas bajos del mercado, y puedes adquirir creditos para probar nuestros productos antes de suscribirte.

            ),
            create_icon_with_text(
                icon_alt="file-stack",
                icon_tag="file-stack",
                heading_text="Always Updated",
                description_text="Our products are always updated, so you will always have the latest version of the product you have acquired.",
            ),
            create_icon_with_text(
                icon_alt="sliders_vertical",
                icon_tag="sliders_vertical",
                heading_text="Easy to Use",
                description_text="Our products are designed to be easy to use, so you can start using them without any problems.",

            ),
            gap="2rem",
            display="grid",
            grid_template_columns=rx.breakpoints(
                {
                    "0px": "repeat(1, minmax(0, 1fr))",
                    "768px": "repeat(2, minmax(0, 1fr))",
                }
            ),
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
    )