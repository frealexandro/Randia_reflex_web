import reflex as rx





def create_search_input(placeholder_text):
    """Create a styled search input field with custom placeholder."""
    return rx.el.input(
        type="text",
        placeholder=placeholder_text,
        class_name="focus:ring-[#FFBE76]",
        border_width="1px",
        border_color="#D1D5DB",
        _focus={
            "outline-style": "none",
            "box-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        },
        #
        padding_left="1rem",
        padding_right="1rem",
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        border_top_left_radius="0.5rem",
        border_bottom_left_radius="0.5rem",
        width="100%",
        background_color="#F9FAFB",
        color="#1F2937",
    )