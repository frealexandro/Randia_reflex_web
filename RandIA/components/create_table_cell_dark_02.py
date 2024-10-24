import reflex as rx 




def create_table_cell_dark(content):
    """Create a dark-colored table cell with centered content."""
    return rx.table.cell(
        content,
        padding_top="0.5rem",
        padding_bottom="0.5rem",
        text_align="center",
    )