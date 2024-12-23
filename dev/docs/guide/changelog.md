---
title: Changelog
date: 2023-08-17 15:02:30
permalink: /pages/changelog/
---

### v1.7.4
#### New Components
* Add `SimpleExpandGroupSettingCard`

#### New Features
* Add the ability to disable combo box options ([#1026](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1026))

#### Fixes
* Fixed touchpad scrolling issue in the side navigation bar
* Fixed the issue where the navigation bar could not automatically expand when sub-items were opened ([#1029](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1029))
* Fixed the issue with `FastCalendarPicker` not being able to select the first date ([#1028](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1028))

### v1.7.3

#### Fixes
* Fixed the issue where tooltips for table items were not hiding in a timely manner.

### v1.7.2
#### New Features
* Redraw radio button ([#1010](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1010))
* Add tooltips for table and list items ([#1017](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1017))
* Add Error state for line edit ([#1012](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1012))

#### Fixes
* Fix issue where InfoBar causes the main process to exit ([#1006](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1006))
* Fix focus frame display issue for dialog buttons in macOS dark mode ([#1014](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1014))


### v1.7.1
#### New Features
* Add functionality to display names in avatar components

#### Fixes
* Fix layout issues for Pivot on macOS
* Fix issue where FlipView corners are blocked by the viewport ([#995](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/995))
* Fix issue where setting non-selectable mode for table and list components does not work ([#992](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/992))
* Fix issue where ExpandSettingCard label styles are affected by the parent stylesheet ([#993](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/993))
* Fix height calculation issue when dynamically reducing ExpandGroupSettingCard components ([#1002](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/1002))

### v1.7.0
#### New Components
* Add Fast Calendar Picker `FastCalendarPicker` ([#983](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/983))
* Add Rich Text Browser `TextBrowser` ([#972](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/972))

#### New Features
* Add system theme listener ([#954](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Add activated signal for combo box ([#978](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/978))
* Add functionality for custom actions in line edit ([#987](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/987))
* Add functionality to close dialogs by clicking on the mask ([#957](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/957))
* Add interface for validating form data in dialogs ([#967](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/967))
* Add functionality to set arbitrary resolutions for ImageLabel
* Add functionality to set text for Pivot and BreadcrumbBar navigation items

#### Fixes
* Fix memory leak issues ([#963](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954), [#977](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Fix color issue for mask dialog ([#964](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Fix incomplete menu clearing issue ([#988](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Fix incorrect display position for secondary menus ([#844](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Fix incorrect position for IconInfoBadge.info ([#950](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Fix coordinate calculation issue for ExpandLayout ([#941](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Fix error with SegmentedWidget.clear ([#975](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))
* Fix issue where accordion setting card scroll events are intercepted ([#945](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/954))

### v1.6.0
#### New Component
* Add Group Card Component `GroupHeaderCardWidget` ([#920](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/920))

#### New Features
* Add Russian translation file ([#923](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/923))
* Add transparent background interface for scroll areas ([#912](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/912))
* Add signal for changes in current Pivot options ([#908](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/908))
* Add functionality to insert components in FlowLayout ([#886](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/886))
* Add lazy loading functionality for images in FlipView ([#907](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/907))
* Add functionality to customize text color in side navigation bars ([#826](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/826))
* Update default background color for FluentWindow in light mode ([#928](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/928))
* Add functionality to customize light and dark mode colors for `FluentIconBase` ([#927](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/927))


#### Fixes
* Fix issue with intercepted scroll events
* Fix indicator position issue for Pivot ([#888](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/888))
* Fix issue where VideoWidget stops playing ([#143](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/143))
* Fix icon offset issue in SegmentedWidget ([#888](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/888))
* Fix dialog error with `QPainter::begin` ([#867](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/867))
* Fix issue with duplicate signal triggering in MessageBoxBase ([#915](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/issues/915))