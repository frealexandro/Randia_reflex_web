import reflex as rx 
from RandIA.components.create_centered_heading_01 import create_centered_heading
from RandIA.components.create_feature_box_01 import create_feature_box







def create_services_section():
    """Create the services section with feature boxes."""
    return rx.box(
        create_centered_heading(
            heading_text="Te encantará nuestra aplicación",
            color="#1F2937"
        ),
        rx.box(
            create_feature_box(
                icon_alt="Data Visualization",
                icon_tag="bar-chart-2",
                heading_text="Ahorra tiempo",
                description_text="Nuestro marketplace te permite encontrar los productos de inteligencia artificial que necesitas en un solo lugar, sin tener que buscar en distintas plataformas.",
            ),
            create_feature_box(
                icon_alt="Predictive Analytics",
                icon_tag="trending-up",
                heading_text="Encuentra lo que buscas",
                description_text="Encuentra productos de inteligencia artificial de alta calidad, con soluciones infinitas, innovación y tecnología de inteligencia artificial.",
            ),
            create_feature_box(
                icon_alt="Data Integration",
                icon_tag="layers",
                heading_text="Experimenta la innovación",
                description_text="Usa soluciones de inteligencia artificial de última generación para mejorar la eficiencia y la productividad de tu empresa.",
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
