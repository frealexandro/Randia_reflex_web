import reflex as rx
from RandIA.components.create_custom_heading_01 import create_custom_heading
from RandIA.components.create_price_text_01 import create_price_text
from RandIA.components.create_checkmark_list_item_01 import create_checkmark_list_item
from RandIA.styles.create_styled_button_01 import create_styled_button





def create_enterprise_plan_box():
    """Create the pricing box for the Enterprise plan."""
    return rx.flex(
        create_custom_heading(
            font_size="1.5rem",
            line_height="2rem",
            margin_bottom="1rem",
            heading_text="Enterprise",
            color="#1F2937",
        ),
        create_price_text(price="$150"),
        rx.list(
            create_checkmark_list_item(
                icon_color="#10B981",
                item_text="10000 créditos por mes",
            ),
            create_checkmark_list_item(
                icon_color="#10B981",
                item_text="10 usuarios",
            ),
            create_checkmark_list_item(
                icon_color="#10B981",
                item_text="utiliza tus créditos en cualquier momento",
            ),
            
            create_checkmark_list_item(
                icon_color="#10B981",
                item_text="productos exclusivos",
            ),
            create_checkmark_list_item(
                icon_color="#10B981",
                item_text="soporte 24/7",
            ),
            create_checkmark_list_item(
                icon_color="#10B981",
                item_text="accesso a nuestras API",
            ),
            flex_grow="1",
            margin_bottom="2rem",
        ),
        create_styled_button(
            hover_styles={"background-color": "#1D4ED8","color":"#ffffff"},
            bg_color="#FFBE76",
            text_color="#ffffff",
            button_text="Ver Productos De IA", 
        ),
        background_color="#F9FAFB",
        display="flex",
        flex_direction="column",
        padding="2rem",
        border_radius="0.5rem",
        box_shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    )