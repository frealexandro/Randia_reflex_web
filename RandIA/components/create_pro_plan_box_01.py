import reflex as rx
from RandIA.components.create_checkmark_list_item_01 import create_checkmark_list_item
from RandIA.components.create_custom_heading_01 import create_custom_heading
from RandIA.components.create_price_text_01 import create_price_text
from RandIA.styles.create_styled_button_01 import create_styled_button





def create_pro_plan_box():
    """Create the pricing box for the Pro plan."""
    return rx.flex(
        create_custom_heading(
            font_size="1rem",
            line_height="1rem",
            margin_bottom="1px",
            heading_text="¡Most Popular!",
            color="#EB6210",
        ),
        create_custom_heading(
            font_size="1.5rem",
            line_height="2rem",
            margin_bottom="1rem",
            heading_text="Pro",
            color="#EB6210",
        ),
        create_price_text(price="$100",color="#EB6210"),
        rx.list(
            create_checkmark_list_item(
                icon_color="#EB6210",
                item_text="7000 credits per month",
            ),
            create_checkmark_list_item(
                icon_color="#EB6210",
                item_text="4 users",
            ),
            create_checkmark_list_item(
                icon_color="#EB6210",
                item_text="use your credits at any time",
            ),
            create_checkmark_list_item(
                icon_color="#EB6210",
                item_text="exclusive products",
            ),
            create_checkmark_list_item(
                icon_color="#EB6210",
                item_text="support 24/7",
            ),
            flex_grow="1",
            margin_bottom="2rem",
        ),
        create_styled_button(
            hover_styles={"background-color": "#1D4ED8","color":"#ffffff"},
            bg_color="#EB6210",
            text_color="#ffffff",
            button_text="Find AI Products",
        ),
        class_name="transform",
        background_color="black",
        display="flex",
        flex_direction="column",
        padding="2rem",
        border_radius="0.5rem",
        transform="scale(1.05)",
        box_shadow="0 8px 12px -1px rgba(255, 255, 255, 0.2), 0 4px 8px -1px rgba(255, 255, 255, 0.15)",
        color="#ffffff",
    )