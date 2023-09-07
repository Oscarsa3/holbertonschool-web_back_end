#!/usr/bin/env python3
"""function named index_range that takes two integer
arguments page and page_size"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """return a tuple"""
    a: int = page_size * page - page_size
    return (a, page_size * page)
