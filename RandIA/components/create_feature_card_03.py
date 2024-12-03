import reflex as rx
from RandIA.content.create_card_content_03 import create_card_content
from RandIA.components.create_card_image_03 import create_card_image



def create_feature_card(
    image_alt, image_src, card_title, card_description,number_credits ,card_caracteristicas,route_href
):
    """Create a feature card with image, title, and description."""
    return rx.box(
        create_card_image(
            alt_text=image_alt, image_src=image_src,number_credits= number_credits
        ),
        create_card_content(
            card_title=card_title,
            card_description=card_description,
            card_caracteristicas=card_caracteristicas,
            route_href=route_href
        ),
        background_color="black",
        overflow="hidden",
        border_radius="0.5rem",
        box_shadow="0 8px 12px -1px rgba(255, 255, 255, 0.2), 0 4px 8px -1px rgba(255, 255, 255, 0.15)",
        #_hover={"background-color": "#FFBE76"},
        
        
    )