import reflex as rx 




def create_icon(
    alt_text, icon_height, icon_name, icon_width
):
    """Create an icon with specified dimensions and alt text."""
    return rx.icon(
        alt=alt_text,
        tag=icon_name,
        height=icon_height,
        width=icon_width,
    )
