import reflex as rx
from RandIA.components.create_table_header_cell_02 import create_table_header_cell
from RandIA.components.create_calendar_body_02 import create_calendar_body


def create_calendar_table():
    """Create a complete calendar table with header and body."""
    return rx.table.root(
        rx.table.header(
            rx.table.row(
                create_table_header_cell(content="Dom"),
                create_table_header_cell(content="Lun"),
                create_table_header_cell(content="Mar"),
                create_table_header_cell(content="Mié"),
                create_table_header_cell(content="Jue"),
                create_table_header_cell(content="Vie"),
                create_table_header_cell(content="Sáb"),
            )
        ),
        create_calendar_body(),
        width="100%",
    )
