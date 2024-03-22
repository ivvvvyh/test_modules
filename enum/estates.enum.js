"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurposeKey = exports.Usage = exports.SpaceType = exports.BuildingType = void 0;
// 建築類型
var BuildingType;
(function (BuildingType) {
    BuildingType[BuildingType["UNDEFINED"] = 0] = "UNDEFINED";
    BuildingType[BuildingType["CONDO"] = 1] = "CONDO";
    BuildingType[BuildingType["APARTMENT"] = 2] = "APARTMENT";
    BuildingType[BuildingType["TOWNHOUSE"] = 3] = "TOWNHOUSE";
    BuildingType[BuildingType["VILLA"] = 4] = "VILLA";
    BuildingType[BuildingType["CONDOMINIUM"] = 5] = "CONDOMINIUM";
    BuildingType[BuildingType["FARMHOUSE"] = 6] = "FARMHOUSE";
    BuildingType[BuildingType["LAND"] = 7] = "LAND";
})(BuildingType || (exports.BuildingType = BuildingType = {}));
// 空間型態
var SpaceType;
(function (SpaceType) {
    SpaceType[SpaceType["UNDEFINED"] = 0] = "UNDEFINED";
    SpaceType[SpaceType["FLAT"] = 1] = "FLAT";
    SpaceType[SpaceType["STUDIO"] = 2] = "STUDIO";
    SpaceType[SpaceType["ROOM"] = 3] = "ROOM";
    SpaceType[SpaceType["PRIVATE_OFFICE"] = 4] = "PRIVATE_OFFICE";
    SpaceType[SpaceType["DEDICATED_DESK"] = 5] = "DEDICATED_DESK";
    SpaceType[SpaceType["HOT_DESK"] = 6] = "HOT_DESK";
    SpaceType[SpaceType["VIRTUAL_OFFICE"] = 7] = "VIRTUAL_OFFICE";
    SpaceType[SpaceType["MEMBERSHIP"] = 8] = "MEMBERSHIP";
    SpaceType[SpaceType["RETAIL_SHOP"] = 9] = "RETAIL_SHOP";
    SpaceType[SpaceType["OFFICE_FLAT"] = 10] = "OFFICE_FLAT";
    SpaceType[SpaceType["RAMP_PLANE"] = 11] = "RAMP_PLANE";
    SpaceType[SpaceType["RAMP_MACHINERY"] = 12] = "RAMP_MACHINERY";
    SpaceType[SpaceType["MACHANICAL_PLANE"] = 13] = "MACHANICAL_PLANE";
    SpaceType[SpaceType["MACHANICAL_MACHINERY"] = 14] = "MACHANICAL_MACHINERY";
})(SpaceType || (exports.SpaceType = SpaceType = {}));
var Usage;
(function (Usage) {
    Usage[Usage["UNDEFINED"] = 0] = "UNDEFINED";
    Usage[Usage["RESIDENTIAL"] = 1] = "RESIDENTIAL";
    Usage[Usage["BUSINESS"] = 2] = "BUSINESS";
    Usage[Usage["PARKING_SPACE"] = 3] = "PARKING_SPACE";
})(Usage || (exports.Usage = Usage = {}));
var PurposeKey;
(function (PurposeKey) {
    PurposeKey[PurposeKey["GENERAL_HOUSING"] = 1] = "GENERAL_HOUSING";
    PurposeKey[PurposeKey["SOCIAL_HOUSING"] = 2] = "SOCIAL_HOUSING";
    PurposeKey[PurposeKey["SHARE_HOUSING"] = 3] = "SHARE_HOUSING";
})(PurposeKey || (exports.PurposeKey = PurposeKey = {}));
