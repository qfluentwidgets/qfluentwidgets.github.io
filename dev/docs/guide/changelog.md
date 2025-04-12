---
title: Changelog
date: 2023-08-17 15:02:30
permalink: /pages/changelog/
---

### v1.7.7
#### New Features
* Added Spanish translation

#### Fixes
* Fixed completion issues in line edit

### v1.7.6
#### New Features
* Added the ability to remove child interfaces of `FluentWindow`
* Added the ability to reset the calendar and time picker

### v1.7.5
#### New Features
* Added `InfoBar` desktop notification feature
* Updated tooltip styles

#### Fixes
* Fixed the issue where menus could not display tooltips
* Fixed the issue of repeated triggering of the play button in multimedia components
* Fixed the icon color issue of `HyperlinkButton` in disabled state

### v1.7.4
#### New Components
* Added `SimpleExpandGroupSettingCard`

#### New Features
* Added the ability to disable dropdown options

#### Fixes
* Fixed the touchpad scrolling issue in the navigation bar
* Fixed the issue where the navigation bar could not auto-expand when expanding sub-items
* Fixed the issue where `FastCalendarPicker` could not select the first date

### v1.7.3

#### Fixes
* Fixed the issue where table item tooltips were not hidden in time

### v1.7.2
#### New Features
* Redesigned radio button
* Added tooltips for table items
* Added Error state for line edit

#### Fixes
* Fixed the issue where `InfoBar` could cause the main process to exit
* Fixed the issue where the OK button in dialogs displayed a focus box in macOS dark mode

### v1.7.1
#### New Features
* Added the ability for avatar components to display names

#### Fixes
* Fixed the layout issue of `Pivot` on macOS
* Fixed the issue where the rounded corners of `FlipView` were blocked by the viewport
* Fixed the issue where the non-selectable mode setting for table and list components did not work
* Fixed the issue where the label style of `ExpandSettingCard` was affected by the parent stylesheet
* Fixed the height calculation issue of `ExpandGroupSettingCard` when dynamically adding or removing components

### v1.7.0
#### New Components
* Added the quick calendar picker `FastCalendarPicker`
* Added the rich text browser `TextBrowser`

#### New Features
* Added a system theme listener
* Added the `activated` signal for dropdowns
* Added the ability to customize actions for line edit
* Added the ability to close dialogs by clicking the mask
* Added an interface for dialog forms to validate data
* Added the ability for `ImageLabel` to set arbitrary resolutions
* Added the ability to set the text of navigation items in `Pivot` and `BreadcrumbBar`

#### Fixes
* Fixed memory leak issues
* Fixed the color issue of masked dialogs
* Fixed the issue where clearing menus was incomplete
* Fixed the issue where secondary menus displayed in the wrong position
* Fixed the incorrect position of `IconInfoBadge.info`
* Fixed the coordinate calculation issue in `ExpandLayout`
* Fixed the error when calling `SegmentedWidget.clear`
* Fixed the issue where the scroll event of accordion setting cards was intercepted

### v1.6.0
#### New Components
* Added the grouped card component `GroupHeaderCardWidget`

#### New Features
* Added Russian translation files
* Added an interface for transparent backgrounds in scroll areas
* Added a signal for current option changes in `Pivot`
* Added the ability to insert components in `FlowLayout`
* Added the ability for `FlipView` to lazily load images
* Added the ability to customize the text color of the navigation bar
* Updated the default background color of `FluentWindow` in light mode
* Added the ability to customize the light/dark mode colors of `FluentIconBase`

#### Fixes
* Fixed the issue where scroll events were intercepted
* Fixed the indicator position issue in `Pivot`
* Fixed the playback stop issue in `VideoWidget`
* Fixed the icon offset issue in `SegmentedWidget`
* Fixed the `QPainter::begin` error in dialogs
* Fixed the issue where `MessageBoxBase` repeatedly triggered signals