import reflex as rx




def create_table_header_cell(content):
    """Create a table header cell with specified content and styling."""
    return rx.table.column_header_cell(
        content,
        padding_top="0.5rem",
        padding_bottom="0.5rem",
    )