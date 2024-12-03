import reflex as rx 
from RandIA.sections.create_hero_section_01 import create_hero_section
from RandIA.sections.create_services_section_01 import create_services_section
from RandIA.sections.create_why_choose_us_section_01 import create_why_choose_us_section
from RandIA.sections.create_pricing_section_01 import create_pricing_section
from RandIA.sections.create_waitlist_section_01 import create_waitlist_section
from RandIA.sections.create_market_place_section_01 import create_market_place_section





def create_main_content():
    """Create the main content sections of the page."""
    return rx.box(
        rx.box(
            create_hero_section(),
            id="hero",
            background_color="black",
            padding_top="10rem",
            padding_bottom="5rem",
            color="#ffffff",
        ),
        rx.box(
            create_market_place_section(),
            background_color="black",
            padding_top="4rem",
            padding_bottom="4rem",
        ),
        rx.box(
            create_why_choose_us_section(),
            background_color="black",
            padding_top="4rem",
            padding_bottom="4rem",
        ),
        rx.box(
            create_pricing_section(),
            id = "pricing",
            background_color="#black",
            padding_top="4rem",
            padding_bottom="4rem",
        ),
        rx.box(
            create_services_section(),
            background_color="black",
            padding_top="4rem",
            padding_bottom="4rem",
        ),
        
        #rx.box(
        #    create_waitlist_section(),
        #    id="waitlist",
        #    background_color="#FFBE76",
        #    padding_top="4rem",
        #    padding_bottom="4rem",
        #    color="#ffffff",
        #),
    )
