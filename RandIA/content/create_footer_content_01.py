import reflex as rx
from RandIA.components.create_custom_heading_01 import create_custom_heading_a

from RandIA.sections.create_footer_links_section_01 import create_quick_links_section

from RandIA.components.create_text_footer_01 import create_text

from RandIA.sections.create_social_media_section_01 import create_social_media_section


def create_footer_content():
    """Create the main content of the footer including company info, quick links, contact info, and social media links."""
    return rx.box(
        rx.box(
            create_custom_heading_a(
                heading_type="h3",
                font_size="1.25rem",
                font_weight="700",
                text="RandiA",
            ),
            rx.text(
                "Find the best AI solutions for your business with RandiA, the world's largest AI marketplace.",
                #Soluciona tus problemas de inteligencia artificial con RandiA, el marketplace de inteligencia artificial más grande del mundo.
                color="#9CA3AF",
            ),
            text_align="center",
        ),
        create_quick_links_section(),
        rx.box(
            create_custom_heading_a(
                heading_type="h4",
                font_size="1.125rem",
                font_weight="600",
                text="Contáct Us",
            ),
            # create_text(
            #     content="Bogotá, Colombia"
            # ),
            create_text(content="Call Us: +57 3058195931"),
            create_text(content="Mail: randia.team@randia.io "),
            #rx.text("Email: info@yourcompany.com"),
            text_align="center",
        ),
        create_social_media_section(),
        gap="2px",
        display="grid",
        grid_template_columns=rx.breakpoints(
            {
                "0px": "repeat(1, minmax(0, 1fr))",
                "640px": "repeat(2, minmax(0, 1fr))",
                "768px": "repeat(4, minmax(0, 1fr))",
            }
        ),
    )



# import reflex as rx



# def create_footer_content():
#     """Create the main content for the footer."""
#     return rx.flex(
#         create_footer_logo_section(),
#         create_footer_links_section(),
#         rx.box(
#             rx.box(
#             create_heading(
#                 heading_type="h4",
#                 font_size="1.125rem",
#                 font_weight="600",
#                 text="Contact Us",
#             ),
#             create_text(
#                 content="123 Main Street, City, Country"
#             ),
#             create_text(content="Phone: (123) 456-7890"),
#             rx.text("Email: info@yourcompany.com"),
#             text_align="center",
#             ),
#             create_custom_heading(
#                 font_size="1.125rem",
#                 line_height="1.75rem",
#                 margin_bottom="0.5rem",
#                 heading_text="Contactanos",
#                 color = "white"
#             ),
#             rx.flex(
#                 create_social_media_link(
#                     icon_alt="instagram", icon_tag="instagram" , href="https://www.instagram.com/randia.io?igsh=MTd3aHZqYzV5M3djZA%3D%3D&utm_source=qr"
#                 ),
#                 create_social_media_link(
#                     icon_alt="Twitter", icon_tag="twitter" , href="https://x.com/RandIA_IO"
#                 ),
#                 create_social_media_link(
#                     icon_alt="LinkedIn", icon_tag="linkedin", href="https://www.linkedin.com/in/rand-ia-204720326/"
#                 ),
#                 display="flex",
#                 column_gap="1rem",
#             ),
#             width=rx.breakpoints(
#                 {"0px": "100%", "768px": "33.333333%"}
#             ),
#         ),
#         display= "flex",
#         flex_wrap= "wrap",  
#         align_items="center",
#         justify_content="center",
#         width="100%",
#         height="100%",
#     )
