(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"paddingTop":0,"overflow":"hidden","paddingBottom":0,"minWidth":20,"minHeight":20,"propagateClick":false,"layout":"absolute","backgroundColorRatios":[0],"borderRadius":0,"scrollBarOpacity":0.5,"verticalAlign":"top","start":"this.init()","shadow":false,"desktopMipmappingEnabled":false,"vrPolyfillScale":0.75,"paddingLeft":0,"scrollBarMargin":2,"width":"100%","contentOpaque":false,"gap":10,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","paddingRight":0,"height":"100%","children":["this.MainViewer"],"defaultVRPointer":"laser","downloadEnabled":false,"scrollBarVisible":"rollOver","backgroundOpacity":1,"class":"Player","definitions": [{"id":"mainPlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_camera","class":"PanoramaPlayListItem","begin":"eval('alert(\"A\");setMediaIndex(2);');; this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0"},{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB"}],"class":"PlayList"},{"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"minWidth":100,"toolTipTextShadowColor":"#000000","progressBackgroundColor":["#FFFFFF"],"minHeight":50,"borderRadius":0,"subtitlesFontSize":"3vmin","subtitlesShadow":false,"surfaceReticleOpacity":0.6,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"toolTipBorderSize":1,"toolTipBorderColor":"#767676","playbackBarOpacity":1,"shadow":false,"toolTipFontSize":"1.11vmin","subtitlesGap":0,"playbackBarBorderRadius":0,"subtitlesOpacity":1,"toolTipPaddingTop":4,"playbackBarProgressBorderColor":"#000000","progressBarOpacity":1,"subtitlesTextShadowVerticalLength":1,"progressBackgroundColorRatios":[0],"playbackBarBottom":5,"toolTipTextShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"subtitlesHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressRight":0,"firstTransitionDuration":0,"progressBottom":0,"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"displayTooltipInSurfaceSelection":true,"progressOpacity":1,"progressHeight":10,"subtitlesEnabled":true,"subtitlesVerticalAlign":"bottom","playbackBarProgressBackgroundColorDirection":"vertical","class":"ViewerArea","subtitlesTextShadowOpacity":1,"toolTipDisplayTime":600,"transitionDuration":500,"subtitlesBorderSize":0,"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","playbackBarProgressOpacity":1,"toolTipTextShadowOpacity":0,"progressBorderSize":0,"vrPointerColor":"#FFFFFF","toolTipPaddingBottom":4,"toolTipFontStyle":"normal","paddingTop":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":0,"playbackBarHeadWidth":6,"toolTipHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","paddingBottom":0,"borderSize":0,"progressBarBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","propagateClick":false,"progressBarBackgroundColor":["#3399FF"],"subtitlesFontWeight":"normal","playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#000000","progressBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingLeft":5,"subtitlesBottom":50,"playbackBarRight":0,"playbackBarHeadBorderColor":"#000000","playbackBarProgressBorderRadius":0,"playbackBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"doubleClickAction":"toggle_fullscreen","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"paddingLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","width":"100%","subtitlesPaddingRight":5,"toolTipPaddingLeft":6,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","translationTransitionDuration":1000,"subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"id":"MainViewer","paddingRight":0,"progressBackgroundColorDirection":"vertical","subtitlesPaddingBottom":5,"toolTipShadowHorizontalLength":0,"toolTipOpacity":1,"playbackBarLeft":0,"height":"100%","toolTipShadowSpread":0,"toolTipFontWeight":"normal","vrPointerSelectionTime":2000,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"toolTipFontFamily":"Arial","subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipBorderRadius":3,"toolTipShadowColor":"#333333","progressBorderRadius":0,"playbackBarHeadBorderSize":0,"data":{"name":"Main Viewer"},"subtitlesTextShadowBlurRadius":0,"progressLeft":0,"playbackBarHeadShadow":true,"subtitlesTextDecoration":"none","surfaceReticleColor":"#FFFFFF","transitionMode":"blending","playbackBarHeadOpacity":1,"toolTipShadowVerticalLength":0,"toolTipShadowBlurRadius":3,"toolTipShadowOpacity":1,"playbackBarProgressBackgroundColorRatios":[0]},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","displayPlaybackBar":true,"arrowKeysAction":"translate","zoomEnabled":true,"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false},{"id":"panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB","hfovMax":130,"label":trans('panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB.label'),"data":{"label":"CAM 03_WM"},"hfovMin":"150%","hfov":360,"partial":false,"vfov":180,"thumbnailUrl":"media/panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_t.jpg","class":"Panorama","pitch":0,"frames":[{"cube":{"levels":[{"width":12288,"colCount":24,"height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"width":6144,"colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_0/{face}/1/{row}_{column}.jpg","tags":"ondemand"},{"width":3072,"colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"]},{"width":9216,"colCount":6,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_0/{face}/vr/0.jpg","tags":"mobilevr"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_t.jpg","class":"CubicPanoramaFrame"}]},{"id":"panorama_D7F786E4_DE67_183C_41E7_93940F24FFFB_camera","automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_D7C6B6E6_DE67_383C_41E9_047B7D407EFE","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0","label":trans('panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0.label'),"partial":false,"hfovMin":"150%","hfov":360,"pitch":0,"class":"Panorama","thumbnailUrl":"media/panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_t.jpg","frames":[{"cube":{"levels":[{"width":12288,"colCount":24,"height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"width":6144,"colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_0/{face}/1/{row}_{column}.jpg","tags":"ondemand"},{"width":3072,"colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"]},{"width":9216,"colCount":6,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_0/{face}/vr/0.jpg","tags":"mobilevr"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"data":{"label":"CAM 01_WM"},"vfov":180},{"id":"panorama_D4B227DC_DE67_F80C_41B3_12579E84DFA0_camera","automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_D7FA06E3_DE67_3834_41E0_7E3A693A76BE","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"sequence_D7C6B6E6_DE67_383C_41E9_047B7D407EFE","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"id":"sequence_D7FA06E3_DE67_3834_41E0_7E3A693A76BE","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false}],"backgroundPreloadEnabled":true,"horizontalAlign":"left","backgroundColorDirection":"vertical","scripts":{"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"isPanorama":TDV.Tour.Script.isPanorama,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setValue":TDV.Tour.Script.setValue,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPixels":TDV.Tour.Script.getPixels,"downloadFile":TDV.Tour.Script.downloadFile,"init":TDV.Tour.Script.init,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setLocale":TDV.Tour.Script.setLocale,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizStart":TDV.Tour.Script.quizStart,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumePlayers":TDV.Tour.Script.resumePlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"textToSpeech":TDV.Tour.Script.textToSpeech,"openLink":TDV.Tour.Script.openLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlays":TDV.Tour.Script.getOverlays,"mixObject":TDV.Tour.Script.mixObject,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"registerKey":TDV.Tour.Script.registerKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByName":TDV.Tour.Script.getMediaByName,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"clone":TDV.Tour.Script.clone,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"translate":TDV.Tour.Script.translate,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getKey":TDV.Tour.Script.getKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"keepCompVisible":TDV.Tour.Script.keepCompVisible},"mouseWheelEnabled":true,"scrollBarWidth":10,"data":{"name":"Player526","locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"volume":1,"rate":1}},"mobileMipmappingEnabled":false,"toolTipHorizontalAlign":"center","mediaActivationMode":"window","borderSize":0,"scrollBarColor":"#000000"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.11.js.map
//Generated with v2021.1.11, Mon Sep 13 2021