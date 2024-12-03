import reflex as rx
from RandIA.components.create_centered_heading_01 import create_centered_heading
from RandIA.components.create_centered_heading_smaller_01 import create_centered_heading_smaller
from RandIA.components.create_basic_plan_box_01 import create_basic_plan_box
from RandIA.components.create_pro_plan_box_01 import create_pro_plan_box
from RandIA.components.create_enterprise_plan_box_01 import create_enterprise_plan_box


def create_pricing_section():
    """Create the pricing section with all plan options."""
    return rx.box(
        create_centered_heading(
            #heading_text="Un equipo de Data-Developers por una fracción del costo",
            heading_text="Comming Soon",        
            color="white",
        ),
        create_centered_heading_smaller(
            heading_text="Our costs are the lowest in the market, and you can acquire credits to try our products before subscribing.",
            #nuestros costos son los mas bajos del mercado, y puedes adquirir creditos para probar nuestros productos antes de suscribirte.
            color="white",
        ),
        rx.box(
            create_basic_plan_box(),
            create_pro_plan_box(),
            create_enterprise_plan_box(),
            gap="2rem",
            display="grid",
            grid_template_columns=rx.breakpoints(
                {
                    "0px": "repeat(1, minmax(0, 1fr))",
                    "768px": "repeat(3, minmax(0, 1fr))",
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
