import reflex as rx
from RandIA.styles.create_styled_heading_03 import create_styled_heading
from RandIA.components.create_card_description_03 import create_card_description
from RandIA.components.create_learn_more_link_03 import create_learn_more_link
from RandIA.components.create_basic_caracteristicas import create_basic_casracteristicas



def create_card_content(card_title, card_description,card_caracteristicas, route_href):
    """Create the content section of a card with title and description."""
    return rx.box(
        create_styled_heading(
            heading_level="h3",
            font_size="1.25rem",
            margin_bottom="0.5rem",
            heading_text=card_title,
            #_hover={"background-color": "#1D4ED8"},
        ),
        create_card_description(
            description_text=card_description
        ),
        create_basic_casracteristicas(),
        
        create_card_description(
            description_text=card_caracteristicas
        ),
        create_learn_more_link(route_href),
        padding="1rem",

    )
