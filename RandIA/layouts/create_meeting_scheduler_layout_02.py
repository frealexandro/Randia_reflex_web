import reflex as rx
from RandIA.components.create_calendar_navigation_02 import create_calendar_navigation
from RandIA.components.create_meeting_details_section_02 import create_meeting_details_section
from RandIA.components.create_heading_02 import create_heading
from RandIA.components.create_calendar_table_02 import create_calendar_table



def create_meeting_scheduler_layout():
    """Create the layout for the meeting scheduler, including details and calendar."""
    return rx.flex(
        create_meeting_details_section(),
        rx.box(
            rx.html('<div class="meetings-iframe-container" data-src="https://meetings.hubspot.com/santiago-novoa?embed=true"></div>'),
            rx.script(src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"),
            background_color="#F3F4F6",
            border_radius="6rem",
            flex="1 1 0%",
            max_width="800px",
            max_height="600px",
            overflow="auto",
            style={
        "scrollbar-width": "none",  # Para Firefox
        "-ms-overflow-style": "none",  # Para Internet Explorer y Edge
    },
    _after={
        "content": "''",
        "display": "block",
        "height": "0",
        "width": "0",
    },
    _webkit_scrollbar={
        "display": "none",  # Para Chrome, Safari y Opera
    },
        ),
        display="flex",
        flex_direction=rx.breakpoints(
            {"0px": "column", "768px": "row"}
        ),
        gap="2rem",
    )
