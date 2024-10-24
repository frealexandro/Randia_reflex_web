import reflex as rx
from RandIA.components.create_table_cell_dark_02 import create_table_cell_dark
from RandIA.components.create_table_cell_light_02 import create_table_cell_light



def create_calendar_body():
    """Create the body of the calendar with date cells for a month."""
    return rx.table.body(
        rx.table.row(
            create_table_cell_light(content="25"),
            create_table_cell_light(content="26"),
            create_table_cell_light(content="27"),
            create_table_cell_light(content="28"),
            create_table_cell_light(content="29"),
            create_table_cell_light(content="30"),
            create_table_cell_light(content="31"),
        ),
        rx.table.row(
            create_table_cell_dark(content="1"),
            create_table_cell_dark(content="2"),
            create_table_cell_dark(content="3"),
            create_table_cell_dark(content="4"),
            create_table_cell_dark(content="5"),
            create_table_cell_dark(content="6"),
            create_table_cell_dark(content="7"),
        ),
        rx.table.row(
            create_table_cell_dark(content="8"),
            create_table_cell_dark(content="9"),
            create_table_cell_dark(content="10"),
            create_table_cell_dark(content="11"),
            create_table_cell_dark(content="12"),
            create_table_cell_dark(content="13"),
            create_table_cell_dark(content="14"),
        ),
        rx.table.row(
            create_table_cell_dark(content="15"),
            create_table_cell_dark(content="16"),
            create_table_cell_dark(content="17"),
            create_table_cell_dark(content="18"),
            create_table_cell_dark(content="19"),
            create_table_cell_dark(content="20"),
            create_table_cell_dark(content="21"),
        ),
        rx.table.row(
            create_table_cell_dark(content="22"),
            create_table_cell_dark(content="23"),
            create_table_cell_dark(content="24"),
            create_table_cell_dark(content="25"),
            create_table_cell_dark(content="26"),
            create_table_cell_dark(content="27"),
            create_table_cell_dark(content="28"),
        ),
        rx.table.row(
            create_table_cell_dark(content="29"),
            create_table_cell_dark(content="30"),
            create_table_cell_light(content="1"),
            create_table_cell_light(content="2"),
            create_table_cell_light(content="3"),
            create_table_cell_light(content="4"),
            create_table_cell_light(content="5"),
        ),
    )