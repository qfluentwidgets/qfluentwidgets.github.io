from qfluentwidgets import *

# create view
view = TeachingTipView(
    icon=None,
    title='Gyro Zeppeli',
    content="""“
        触网而起的网球会落到哪一侧，谁也无法知晓。
        如果那种时刻到来，我希望「女神」是存在的。
        这样的话，不管网球落到哪一边，我都会坦然接受的吧。
    ”""",
    image='resource/Gyro.jpg',
    isClosable=False,
    tailPosition=TeachingTipTailPosition.NONE,
)

# show teaching tip
TeachingTip.make(
    view=view,
    duration=1000,
    tailPosition=TeachingTipTailPosition.NONE,
)
