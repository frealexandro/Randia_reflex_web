import reflex as rx 
from RandIA.components.create_custom_heading_01 import create_custom_heading_a
from RandIA.components.create_list_item_blue_hover_link_01 import create_list_item_blue_hover_link
from RandIA.routes import Route




def create_quick_links_section():
    """Create a quick links section with a heading and list of links."""
    return rx.box(
        create_custom_heading_a(
            heading_type="h4",
            font_size="1.125rem",
            font_weight="600",
            text="Enlaces Rápidos",
        ),
        rx.list(
            #create_list_item_blue_hover_link("Home", href="#hero"),
            #create_list_item_blue_hover_link(text="About Us"),
            #create_list_item_blue_hover_link("Servicios", href=Route.FUNNEL.value),
            create_list_item_blue_hover_link("Productos", href=Route.PRODUCTS.value),
            display="flex",
            flex_direction="column",
            gap="0.5rem",
        ),
        text_align="center",
    )

#href="https://wa.link/8ntsp6"






# def create_quick_links_section():
#     """Create the quick links section for the footer."""
#     return rx.box(
#         create_custom_heading(
#             font_size="1.125rem",
#             line_height="1.75rem",
#             margin_bottom="0.5rem",
#             heading_text="Enlaces Rápidos",
#             color = "white"
#         ),
#         rx.list(
#             create_list_item_blue_hover_link(
#                 link_text="Servicios",
#                 href="#hero"
#             ),
#             create_list_item_blue_hover_link(
#                 link_text="Precios",
#                 href="#pricing"
#             ),
#             create_list_item_blue_hover_link(
#                 link_text="Contactanos",
#                 href="https://www.linkedin.com/in/rand-ia-204720326/"
#             ),
#             #create_list_item_blue_hover_link(
#             #    link_text="Contact"
#             #),
#             font_size="0.875rem",
#             line_height="1.25rem",
#         ),
#         margin_bottom=rx.breakpoints(
#             {"0px": "1.5rem", "768px": "0"}
#         ),
#         width=rx.breakpoints(
#             {"0px": "100%", "768px": "33.333333%"}
#         ),
#     )
