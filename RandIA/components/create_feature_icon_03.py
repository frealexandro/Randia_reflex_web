import reflex as rx





def create_feature_icon(alt_text, icon_name):
    """Create a feature icon with specified alt text and icon name."""
    return rx.icon(
        alt=alt_text,
        tag=icon_name,
        height="3rem",
        margin_bottom="1rem",
        margin_left="auto",
        margin_right="auto",
        width="3rem",
        #color = ""
        color="#FFBE76",
    )