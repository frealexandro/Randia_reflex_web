"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from rxconfig import config
from RandIA.pages.index_01 import index_page
from RandIA.pages.funnel_02 import funnel_page
from RandIA.pages.products_03 import products




app = rx.App()
app.add_page(index_page)
#app.add_page(funnel_page)
app.add_page(products)
