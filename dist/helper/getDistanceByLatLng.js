"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceByLatLng = void 0;
function getDistanceByLatLng(to, from) {
    const R = 6371e3; // 地球半徑(m)
    const lat1 = to.lat * Math.PI / 180; // 將角度轉為弧度
    const lat2 = from.lat * Math.PI / 180;
    const deltaLat = (from.lat - to.lat) * Math.PI / 180;
    const deltaLng = (from.lng - to.lng) * Math.PI / 180;
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // 直線距離(m)
    return Number(distance.toFixed(0));
}
exports.getDistanceByLatLng = getDistanceByLatLng;
