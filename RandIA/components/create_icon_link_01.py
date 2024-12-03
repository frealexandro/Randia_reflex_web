import reflex as rx




def create_icon(alt_text, icon_tag):
    """Create an icon with specified dimensions."""
    return rx.icon(
        alt=alt_text,
        tag=icon_tag,
        height="1.5rem",
        width="1.5rem",
    )



def create_icon_link(alt_text, icon_tag,href):
    """Create a link with an icon and hover effect."""
    return rx.el.a(
        create_icon(alt_text=alt_text, icon_tag=icon_tag),
        href=href,
        _hover={"color": "#1D4ED8"},
    )