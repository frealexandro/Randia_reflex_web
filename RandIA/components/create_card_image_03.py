import reflex as rx
from RandIA.components.create_price_tag_03 import create_price_tag



def create_card_image(alt_text, image_src,number_credits):
    """Create an image for a card with specified source and alt text."""
    return rx.box(

        rx.image(
        src=image_src,
        
        alt=alt_text,
        height="12rem",
        object_fit="cover",
        width="100%",
        ),
        create_price_tag(number_credits),
        position = "relative" ,
    )