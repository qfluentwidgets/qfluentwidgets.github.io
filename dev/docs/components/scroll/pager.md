---
title: Pager
date: 2024-02-27 11:25:00
permalink: /pages/components/pager/
---

### [PipsPager](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/pips_pager/index.html#qfluentwidgets.components.widgets.pips_pager.PipsPager)

![PipsPager](/img/components/pager/PipsPager.png)

`PipsPager` is a lightweight pagination component, where each dot on the control represents a page. This control is very useful in scenarios where page switching is needed, such as image carousels or user guide interfaces.

```python
pager = PipsPager(Qt.Horizontal)

# Set the number of pages
pager.setPageNumber(15)

# Set the number of dots
pager.setVisibleNumber(8)

# Always display forward and backward buttons
pager.setNextButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)
pager.setPreviousButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)

# Set the current page number
pager.setCurrentIndex(3)
```

When the current page number changes, the signal `currentIndexChanged(index: int)` will be emitted:
```python
pager.currentIndexChanged.connect(lambda index: print(index, pager.currentIndex()))
```

### [Pager](https://qfluentwidgets.com/price)

![Pager](/img/components/pager/Pager.png)

`Pager` provides paging functionality, which is used to break down data when there is too much of it.