/**
 * Kitra Icons Example
 * 
 * react-native-kitra now uses its own SVG-based icon set!
 * Only requires react-native-svg peer dependency - no other dependencies.
 */

import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Icon } from '@tra-tech/react-native-kitra';

const IconScreen = () => {
  // Get all available icons dynamically
  const allIcons = [
    "albums", "align-bottom", "align-bottom-simple", "align-center-horizontal", "align-center-horizontal-simple",
    "align-center-vertical", "align-center-vertical-1", "align-center-vertical-simple", "align-left", "align-left-simple",
    "align-right", "align-right-simple", "align-top", "align-top-simple", "archive", "archive-box", "archive-tray",
    "arrow-arc-left", "arrow-arc-right", "arrow-bend-double-up-left", "arrow-bend-double-up-right", "arrow-bend-down-left",
    "arrow-bend-down-right", "arrow-bend-left-down", "arrow-bend-left-up", "arrow-bend-right-down", "arrow-bend-right-up",
    "arrow-bend-up-left", "arrow-bend-up-right", "arrow-circle-down", "arrow-circle-down-left", "arrow-circle-down-right",
    "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-circle-up-left", "arrow-circle-up-right",
    "arrow-clockwise", "arrow-counter-clockwise", "arrow-down", "arrow-down-left", "arrow-down-right", "arrow-elbow-down-left",
    "arrow-elbow-down-right", "arrow-elbow-left", "arrow-elbow-left-down", "arrow-elbow-left-up", "arrow-elbow-right",
    "arrow-elbow-right-down", "arrow-elbow-right-up", "arrow-elbow-up-left", "arrow-elbow-up-right", "arrow-fat-down",
    "arrow-fat-left", "arrow-fat-line-down", "arrow-fat-line-left", "arrow-fat-line-right", "arrow-fat-line-up",
    "arrow-fat-lines-down", "arrow-fat-lines-left", "arrow-fat-lines-right", "arrow-fat-lines-up", "arrow-fat-right",
    "arrow-fat-up", "arrow-left", "arrow-line-down", "arrow-line-down-left", "arrow-line-down-right", "arrow-line-left",
    "arrow-line-right", "arrow-line-up", "arrow-line-up-left", "arrow-line-up-right", "arrow-right", "arrow-square-down",
    "arrow-square-down-left", "arrow-square-down-right", "arrow-square-in", "arrow-square-left", "arrow-square-out",
    "arrow-square-right", "arrow-square-up", "arrow-square-up-left", "arrow-square-up-right", "arrow-u-down-left",
    "arrow-u-down-right", "arrow-u-left-down", "arrow-u-left-up", "arrow-u-right-down", "arrow-u-right-up",
    "arrow-u-up-left", "arrow-u-up-right", "arrow-up", "arrow-up-left", "arrow-up-right", "arrows-clockwise",
    "arrows-counter-clockwise", "arrows-down-up", "arrows-horizontal", "arrows-in", "arrows-in-cardinal",
    "arrows-in-line-horizontal", "arrows-in-line-vertical", "arrows-in-simple", "arrows-left-right", "arrows-out",
    "arrows-out-cardinal", "arrows-out-line-horizontal", "arrows-out-line-vertical", "arrows-out-simple",
    "arrows-vertical", "backspace", "bag", "bag-simple", "balloon", "bank", "barcode", "battery-warning-vertical",
    "bell", "bell-ringing", "bell-simple", "bell-simple-ringing", "bell-simple-slash", "bell-slash", "bezier-curve",
    "book", "book-bookmark", "book-open", "bookmark", "bookmark-simple", "bookmarks", "bookmarks-simple", "books",
    "bounding-box", "briefcase", "briefcase-metal", "buildings", "cardholder", "cards", "caret-circle-double-down",
    "caret-circle-double-left", "caret-circle-double-right", "caret-circle-double-up", "caret-circle-down",
    "caret-circle-left", "caret-circle-right", "caret-circle-up", "caret-double-down", "caret-double-left",
    "caret-double-right", "caret-double-up", "chalkboard", "chalkboard-simple", "chalkboard-teacher", "chart-bar",
    "chart-bar-horizontal", "chart-line", "chart-pie", "chart-pie-slice", "chartlineup", "check", "check-circle",
    "check-square", "check-square-offset", "checks", "circle", "circle-dashed", "circle-half", "circle-half-tilt",
    "circle-notch", "circle-wavy", "circle-wavy-check", "circle-wavy-cross", "circle-wavy-question", "circle-wavy-time",
    "circle-wavy-warning", "circles-four", "circles-three", "circles-three-plus", "clipboard", "clipboard-text",
    "clock", "close", "cloud-arrow-down", "cloud-arrow-up", "cloud-check", "cloud-slash", "columns", "connected-arrows",
    "copy", "copy-simple", "credit-card", "crop", "cube", "currency-btc", "currency-circle-dollar", "currency-cny",
    "currency-dollar", "currency-dollar-simple", "currency-eth", "currency-eur", "currency-gbp", "currency-inr",
    "currency-jpy", "currency-krw", "currency-kzt", "currency-ngn", "currency-rub", "cylinder", "detective",
    "diamonds-four", "divide", "dots-nine", "dots-six", "dots-six-vertical", "dots-three", "dots-three-circle",
    "dots-three-circle-vertical", "dots-three-fill-horizontal", "dots-three-fill-vertical", "dots-three-outline",
    "dots-three-outline-vertical", "dots-three-vertical", "double-check", "download", "download-simple", "equals",
    "exam", "export", "eye", "eye-closed", "eye-slash", "file", "file-arrow-down", "file-arrow-up", "file-doc",
    "file-dotted", "file-image", "file-jpg", "file-lock", "file-minus", "file-pdf", "file-plus", "file-png",
    "file-ppt", "file-search", "file-text", "file-x", "files", "fingerprint", "fingerprint-simple", "floppy-disk",
    "flow-arrow", "folder", "folder-lock", "folder-minus", "folder-notch", "folder-notch-minus", "folder-notch-open",
    "folder-notch-plus", "folder-open", "folder-plus", "folder-simple", "folder-simple-lock", "folder-simple-minus",
    "folder-simple-plus", "folders", "function", "funnel", "funnel-simple", "gear", "gear-six", "gift", "gradient",
    "graduation-cap", "grid-four", "handbag", "handbag-simple", "hard-drive", "hard-drives", "heart-straight",
    "hexagon", "highlighter-circle", "home", "infinity", "info", "intersect", "kanban", "key", "keyhole", "layout",
    "lightning", "lightning-slash", "line-left", "line-right", "line-segment", "line-segments", "link", "link-break",
    "link-simple", "link-simple-break", "link-simple-horizontal", "link-simple-horizontal-break", "list",
    "list-bullets", "list-checks", "list-dashes", "list-numbers", "list-plus", "lock", "lock-key", "lock-key-open",
    "lock-laminated", "lock-laminated-open", "lock-open", "lock-simple", "lock-simple-open", "magnifying-glass-minus",
    "magnifying-glass-plus", "minus", "minus-circle", "money", "moon-stars", "mountains", "needle", "note",
    "note-blank", "note-pencil", "notebook", "notepad", "notification", "number-circle-eight", "number-circle-five",
    "number-circle-four", "number-circle-nine", "number-circle-one", "number-circle-seven", "number-circle-six",
    "number-circle-three", "number-circle-two", "number-circle-zero", "number-eight", "number-five", "number-four",
    "number-nine", "number-one", "number-seven", "number-six", "number-square-eight", "number-square-five",
    "number-square-four", "number-square-nine", "number-square-one", "number-square-seven", "number-square-six",
    "number-square-three", "number-square-two", "number-square-zero", "number-three", "number-two", "number-zero",
    "nut", "option", "package", "paper-plane-tilt", "paperclip", "paperclip-horizontal", "password", "pen",
    "pen-nib-straight", "pennib", "percent", "plus", "plus-minus", "pluscircle", "power", "presentation-chart",
    "prohibit", "prohibit-inset", "push-pin", "push-pin-simple", "push-pin-simple-slash", "push-pin-slash",
    "question", "radical", "receipt", "rectangle", "recycle", "rows", "scales", "scan", "search-bar", "selection",
    "selection-background", "selection-foreground", "selection-inverse", "selection-plus", "selection-slash",
    "shield", "shield-check", "shield-checkered", "shield-chevron", "shield-plus", "shield-slash", "shield-star",
    "shield-warning", "shopping-bag", "shopping-bag-open", "shopping-cart", "shopping-cart-simple", "short-down",
    "short-left", "short-right", "short-up", "sidebar", "sidebar-simple", "sign-in", "sign-out", "sort-ascending",
    "sort-descending", "spinner", "spinner-gap", "square", "square-half", "squares-four", "stack", "stack-simple",
    "star", "storefront", "student", "sun", "swap", "table", "tag", "tag-chevron", "tag-simple", "text-aa",
    "ticket", "toggle-left", "toggle-right", "tote", "tote-simple", "trademark-registered", "trash", "trash-simple",
    "tray", "trend-down", "trend-up", "triangle", "upload", "upload-simple", "user", "user-circle",
    "user-circle-gear", "user-circle-minus", "user-circle-plus", "user-focus", "user-gear", "user-list",
    "user-minus", "user-plus", "user-rectangle", "user-square", "user-switch", "users", "vault", "vignette",
    "wall", "wallet", "warning", "warning-circle", "warning-octagon", "wrench", "x-circle", "x-square"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>🎨 Kitra Icons</Text>
      <View style={styles.allIconsGrid}>
        {allIcons.map((iconName) => (
          <View key={iconName} style={styles.iconContainer}>
            <Icon name={iconName} size={28} color="#195CEF" />
            <Text style={styles.iconLabel}>{iconName}</Text>
          </View>
        ))} 
      </View>
    </ScrollView>
  );
};

export default IconScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  allIconsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 30,
  },
  category: {
    marginBottom: 30,
  },
  iconContainer: {
    alignItems: 'center',
    width: 70,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  iconLabel: {
    marginTop: 6,
    fontSize: 8,
    color: '#666',
    textAlign: 'center',
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#e83e8c',
  },
  note: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
});
