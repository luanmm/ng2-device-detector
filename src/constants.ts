import { InjectionToken } from '@angular/core';

export const NAVIGATOR_UA = new InjectionToken<string>('userAgent');

export const Browser = {
    FIREFOX: /\bFirefox\/([\d\.]*)/,
    OPERA: /\b(Opera|OPR)\/([\d\.]*)/,
    EDGE: /\bEdge\/([\d\.]*)/,
    CHROME: /\b(Chrome|CriOS)\/([\d\.]*)/,
    SAFARI: /\bSafari\/([\d\.]*)/,
    IE: /\b(MSIE |Trident\/)([\d\.]*)/,
};