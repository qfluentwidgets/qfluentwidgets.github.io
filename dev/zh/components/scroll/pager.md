---
title: 分页器
date: 2024-02-27 11:25:00
permalink: /zh/pages/components/pager/
---

### [PipsPager](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/pips_pager/index.html#qfluentwidgets.components.widgets.pips_pager.PipsPager)

![PipsPager](/img/components/pager/PipsPager.png)

`PipsPager` 是一种轻量的分页组件，控件上的每个圆点代表一个页面。这个控件在一些需要页面切换的场景下非常有用，例如图片轮播器或用户向导界面。

```python
pager = PipsPager(Qt.Horizontal)

# 设置页数
pager.setPageNumber(15)

# 设置圆点数量
pager.setVisibleNumber(8)

# 始终显示前进和后退按钮
pager.setNextButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)
pager.setPreviousButtonDisplayMode(PipsScrollButtonDisplayMode.ALWAYS)

# 设置当前页码
pager.setCurrentIndex(3)
```

当前页码发生改变时会发出信号 `currentIndexChanged(index: int)`：
```python
pager.currentIndexChanged.connect(lambda index: print(index, pager.currentIndex()))
```

### [Pager](https://qfluentwidgets.com/zh/price)

![Pager](/img/components/pager/Pager.png)

`Pager` 提供了分页功能，当数据量过多时，使用分页分解数据。
