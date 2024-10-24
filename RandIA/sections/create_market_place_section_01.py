import reflex as rx 
from RandIA.components.create_centered_heading_01 import create_centered_heading
from RandIA.components.create_feature_box_01 import create_feature_box
from RandIA.components.create_centered_heading_smaller_01 import create_centered_heading_smaller






def create_market_place_section():
    """Create the services section with feature boxes."""
    return rx.box(
        create_centered_heading(
            heading_text="You'll Love The Artificial Intelligence Products In Our Marketplace!",
            color="#1F2937"
        ),
        create_centered_heading_smaller(
            heading_text="All our products have a free credit trial period, so you can try them before subscribing.",
            color="#1F2937",
        ),
        rx.box(
            create_feature_box(
                icon_alt="Data Visualization",
                icon_tag="package-search",
                heading_text="Select Your Product",
                description_text="Choose your artificial intelligence product that best suits your needs. It won't take you more than 2 minutes! If you don't know which one to choose, we will advise you!!",
            ),
            create_feature_box(
                icon_alt="Predictive Analytics",
                icon_tag="brain-circuit",
                heading_text="Pay For Your Product",
                description_text="Pay for your artificial intelligence product securely and quickly, with different payment methods, if you have any doubts during the payment process, do not hesitate to contact us!!",
                #Paga tu producto de inteligencia artificial de forma segura y rapida, con distintos metodos de pago, si tienes dudas durante el proceso de pago, no dudes en contactarnos!!
            ),
            create_feature_box(
                icon_alt="Data Integration",
                icon_tag="refresh-ccw",
                heading_text="Renew Your Product",
                #Renueva Tu Producto
                description_text="Renew your artificial intelligence product when you need it, if you have doubts during the renewal process or any inconvenience, do not hesitate to contact us!!",
                #Renueva tu producto de inteligencia artificial cuando lo necesites, si tienes dudas durante el proceso de renovacion o algun inconveniente, no dudes en contactarnos!!
            ),
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