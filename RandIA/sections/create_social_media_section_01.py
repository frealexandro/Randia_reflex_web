import reflex as rx
from RandIA.components.create_custom_heading_01 import create_custom_heading_a
from RandIA.components.create_icon_link_01 import create_icon_link
from RandIA.constants import INSTAGRAM , LINKEDIN






def create_social_media_section():
    """Create a social media section with icons for various platforms."""
    return rx.box(
        create_custom_heading_a(
            heading_type="h4",
            font_size="1.125rem",
            font_weight="600",
            text="Siguenos",
        ),
        rx.flex(
            #create_icon_link(
            #    alt_text="Facebook", icon_tag="facebook"
            #),
            #create_icon_link(
            #    alt_text="Twitter", icon_tag="twitter"
            #),
            create_icon_link(
                alt_text="Instagram", icon_tag="instagram", href = INSTAGRAM
            ),
            create_icon_link(
                alt_text="LinkedIn", icon_tag="linkedin" , href = LINKEDIN
            ),
            display="flex",
            justify_content="center",
            column_gap="1rem",
        ),
        text_align="center",
    )