import reflex as rx
from RandIA.components.create_colored_text_03 import create_colored_text
from RandIA.components.create_list_item_03 import create_list_item
from RandIA.components.create_social_link_03 import create_social_link
from RandIA.styles.create_styled_heading_03 import create_styled_heading





def create_footer_content():
    """Create the content for the footer section."""
    return rx.box(
        rx.box(
            create_styled_heading(
                heading_level="h3",
                font_size="1.25rem",
                margin_bottom="1rem",
                heading_text="RandiA",
            ),
            create_colored_text(
                text_color="#9CA3AF",
                text_content="Your one-stop marketplace for analytics solutions.",
            ),
        ),
        rx.box(
            create_styled_heading(
                heading_level="h4",
                font_size="1.125rem",
                margin_bottom="1rem",
                heading_text="Quick Links",
            ),
            rx.list(
                create_list_item(
                    hover_style={"color": "#ffffff"},
                    text_color="#9CA3AF",
                    item_text="Home",
                ),
                create_list_item(
                    hover_style={"color": "#ffffff"},
                    text_color="#9CA3AF",
                    item_text="Services",
                ),
                create_list_item(
                    hover_style={"color": "#ffffff"},
                    text_color="#9CA3AF",
                    item_text="About Us",
                ),
                create_list_item(
                    hover_style={"color": "#ffffff"},
                    text_color="#9CA3AF",
                    item_text="Contact",
                ),
                display="flex",
                flex_direction="column",
                gap="0.5rem",
            ),
        ),
        rx.box(
            create_styled_heading(
                heading_level="h4",
                font_size="1.125rem",
                margin_bottom="1rem",
                heading_text="Legal",
            ),
            rx.list(
                create_list_item(
                    hover_style={"color": "#ffffff"},
                    text_color="#9CA3AF",
                    item_text="Terms of Service",
                ),
                create_list_item(
                    hover_style={"color": "#ffffff"},
                    text_color="#9CA3AF",
                    item_text="Privacy Policy",
                ),
                create_list_item(
                    hover_style={"color": "#ffffff"},
                    text_color="#9CA3AF",
                    item_text="Cookie Policy",
                ),
                display="flex",
                flex_direction="column",
                gap="0.5rem",
            ),
        ),
        rx.box(
            create_styled_heading(
                heading_level="h4",
                font_size="1.125rem",
                margin_bottom="1rem",
                heading_text="Connect With Us",
            ),
            rx.flex(
                create_social_link(
                    icon_alt="Facebook",
                    icon_name="facebook",
                ),
                create_social_link(
                    icon_alt="Twitter", icon_name="twitter"
                ),
                create_social_link(
                    icon_alt="LinkedIn",
                    icon_name="linkedin",
                ),
                display="flex",
                column_gap="1rem",
            ),
        ),
        gap="2rem",
        display="grid",
        grid_template_columns=rx.breakpoints(
            {
                "0px": "repeat(1, minmax(0, 1fr))",
                "768px": "repeat(4, minmax(0, 1fr))",
            }
        ),
    )