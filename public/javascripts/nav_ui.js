// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
* @fileoverview Navigational controls for main UI of open-3d-viewer.
*/
o3v.navUI = function(reset, move, zoom) {
  homeBtn = null;
  upBtn = null;
  leftBtn = null;
  rightBtn = null;
  downBtn = null;
  zoomIn = null;
  zoomOut = null;

  this.reset_ = reset;
  this.move_ = move;
  this.zoom_ = zoom;

  var navBtnStyles = {
    'position': 'absolute',
    'width': '50%',
    'height': '100%',
    'margin-left': '10px',
    'position': 'relative',
    'z-index': o3v.uiSettings.ZINDEX_MAINUI
  };

  this.navHome = $('<div>').appendTo('#li1').css(navBtnStyles).css({
    }).button({
     icons: {
       primary: 'ui-icon-home'
     },
     text: false
      }).click(function () {
          this.reset_();
        }.bind(this));
  var homeEl = this.navHome.get(0);
  this.navUp = $('<div>').appendTo('#li2').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-n'
   },
   text: false
    }).click(function () {
          this.move_(0, -o3v.navUI.MOVE_FACTOR);
        }.bind(this));
  this.navLeft = $('<div>').appendTo('#li3').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-w'
   },
   text: false
    }).click(function () {
          this.move_(-o3v.navUI.MOVE_FACTOR, 0);
        }.bind(this));
  this.navRight = $('<div>').appendTo('#li4').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-e'
   },
   text: false
    }).click(function () {
          this.move_(o3v.navUI.MOVE_FACTOR, 0);
        }.bind(this));
  this.navDown = $('<div>').appendTo('#li5').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-s'
   },
   text: false
    }).click(function () {
          this.move_(0, o3v.navUI.MOVE_FACTOR);
        }.bind(this));
  this.navZoomIn = $('<div>').appendTo('#li6').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-plus'
   },
   text: false
    }).click(function () {
          this.zoom_(0, o3v.navUI.ZOOM_FACTOR);
        }.bind(this));
  this.navZoomOut = $('<div>').appendTo('#li7').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-minus'
   },
   text: false
    }).click(function () {
          this.zoom_(0, -o3v.navUI.ZOOM_FACTOR);
        }.bind(this));
};

o3v.navUI.MOVE_FACTOR = 10;
o3v.navUI.ZOOM_FACTOR = 50;
