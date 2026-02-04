---
title: Changelog
date: 2023-08-17 15:02:30
permalink: /pages/changelog/
---

### v1.11.0
#### New Components
* Added `FluentTitleBarButton`

#### New Features
* Added Polish language translation
* Optimized the performance of the smooth scrolling algorithm on high-DPI screens

### v1.10.5
#### New Components
* Added `FluentWidget` component

### v1.10.3
#### New Features
* Added memory function for the collapsed state of the side navigation menu
* Optimized the `NavigationBar` indicator animation

### v1.10.0
#### New Components
* Added the `TabWidget` component
* Added the `NavigationUserCard` component
* Added the `EntranceTransitionStackedWidget` and `DrillInTransitionStackedWidget` components

#### New Features
* Added group title functionality for the sidebar navigation bar
* Added continuous scrolling functionality for date-time components
* Optimized the sliding animation of the indicator for the sidebar navigation bar and `Pivot`
* Overloaded the FluentWindow method for adding child interfaces

#### Fixes
* Fixed the issue where tooltips would steal focus

### v1.9.2

#### New Features
* Added quick insertion functionality for groups in `ExpandGroupSettingCard`

#### Fixes
* Fixed the background rendering issue in multi-column tree components
* Fixed the background issue in `FluentWindow` when using WebEngine

### v1.9.1

#### Fixes
* Fixed the style issue of `RoundMenu`
* Fixed the top-level issue of `ToolTip`
* Fixed the background overlap issue in `TreeWidget`
* Fixed the traversal issue in the stylesheet manager
* Fixed the cursor position issue in color dialog
* Fixed the font color issue in the folder settings card

### v1.9.0

#### New Features
* Added the ability to customize component library fonts

#### Fixes
* Fixed layout issues when button icons are empty
* Fixed the issue where menu shortcut text was truncated
* Fixed the issue of theme listeners being ineffective on macOS
* Fixed the RuntimeError issue with `InfoBar` after packaging

### v1.8.6
#### New Components
* Added `ModelComboBox`, a dropdown box that supports data models.
* Added `EditableModelComboBox`, an editable dropdown box that supports data models.

#### Fixes
* Fixed an issue with the collapse functionality in the `ExpandSettingCard`.
* Fixed an error when setting text color in the table component.
* Fixed an issue with scrollbar timers causing errors after Nuitka packaging.

### v1.8.4
#### New Features
* Dynamically display the scrollbar in the side navigation interface

#### Fixes
* Fixed the size issue of  `AvatarWidget`
* Fixed the layout issue when dynamically adding submenu items to the side navigation

### v1.8.3
#### Fixes
* Fixed the time formatting issue in the media play bar
* Fixed the issue where submenus overlay parent menus at the screen edge

### v1.8.2
#### New Features
* Added the ability to disable pop-up animations for `FluentWindow`
* Added support for custom scrollbar colors and display modes

#### Fixes
* Fixed the issue where `Flyout` could not use Chinese input methods on macOS
* Fixed the tree component not responding to mouse hover
* Fixed the inability to collapse by clicking the `TreeView` arrow

### v1.8.1
#### Fixes
* Fixed the issue of blurry icon fonts.

### v1.8.0

#### New Features

* Added support for icon fonts
* Added the ability to customize the selected color of table and list view
* Added the ability to customize the text color of switch buttons
* Added the ability to customize the bottom border color of spin box in focus state
* Added the ability to customize the selected color of navigation bar
* Added the ability to customize the indicator color of pivot
* Added the ability to customize the background color of the date-time picker
* Added the ability to customize the text color of checkboxes
* Added the ability to customize the indicator color of radio buttons in selected state
* Added the ability to customize the indicator color of sliders in selected state
* Added the ability to customize the indicator color of switch buttons in selected state
* Added the ability to customize the indicator color of checkboxes in selected state
* Added the ability to customize the bottom border color of line edit in focus state
* Added an interface for `ScrollArea` to enable smooth scrolling mode
* Added support for draggable mask dialogs

#### Fixes

* Fixed the issue where clicking the arrow in `TreeWidget` did not collapse the node
* Fixed the issue where the UI became unresponsive after closing `FastCalendarPicker`


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