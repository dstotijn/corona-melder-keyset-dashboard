/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const TemporaryExposureKeyExport = $root.TemporaryExposureKeyExport = (() => {

    /**
     * Properties of a TemporaryExposureKeyExport.
     * @exports ITemporaryExposureKeyExport
     * @interface ITemporaryExposureKeyExport
     * @property {number|Long|null} [startTimestamp] TemporaryExposureKeyExport startTimestamp
     * @property {number|Long|null} [endTimestamp] TemporaryExposureKeyExport endTimestamp
     * @property {string|null} [region] TemporaryExposureKeyExport region
     * @property {number|null} [batchNum] TemporaryExposureKeyExport batchNum
     * @property {number|null} [batchSize] TemporaryExposureKeyExport batchSize
     * @property {Array.<ISignatureInfo>|null} [signatureInfos] TemporaryExposureKeyExport signatureInfos
     * @property {Array.<ITemporaryExposureKey>|null} [keys] TemporaryExposureKeyExport keys
     * @property {Array.<ITemporaryExposureKey>|null} [revisedKeys] TemporaryExposureKeyExport revisedKeys
     */

    /**
     * Constructs a new TemporaryExposureKeyExport.
     * @exports TemporaryExposureKeyExport
     * @classdesc Represents a TemporaryExposureKeyExport.
     * @implements ITemporaryExposureKeyExport
     * @constructor
     * @param {ITemporaryExposureKeyExport=} [properties] Properties to set
     */
    function TemporaryExposureKeyExport(properties) {
        this.signatureInfos = [];
        this.keys = [];
        this.revisedKeys = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TemporaryExposureKeyExport startTimestamp.
     * @member {number|Long} startTimestamp
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.startTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TemporaryExposureKeyExport endTimestamp.
     * @member {number|Long} endTimestamp
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.endTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TemporaryExposureKeyExport region.
     * @member {string} region
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.region = "";

    /**
     * TemporaryExposureKeyExport batchNum.
     * @member {number} batchNum
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.batchNum = 0;

    /**
     * TemporaryExposureKeyExport batchSize.
     * @member {number} batchSize
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.batchSize = 0;

    /**
     * TemporaryExposureKeyExport signatureInfos.
     * @member {Array.<ISignatureInfo>} signatureInfos
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.signatureInfos = $util.emptyArray;

    /**
     * TemporaryExposureKeyExport keys.
     * @member {Array.<ITemporaryExposureKey>} keys
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.keys = $util.emptyArray;

    /**
     * TemporaryExposureKeyExport revisedKeys.
     * @member {Array.<ITemporaryExposureKey>} revisedKeys
     * @memberof TemporaryExposureKeyExport
     * @instance
     */
    TemporaryExposureKeyExport.prototype.revisedKeys = $util.emptyArray;

    /**
     * Decodes a TemporaryExposureKeyExport message from the specified reader or buffer.
     * @function decode
     * @memberof TemporaryExposureKeyExport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TemporaryExposureKeyExport} TemporaryExposureKeyExport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemporaryExposureKeyExport.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TemporaryExposureKeyExport();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.startTimestamp = reader.fixed64();
                break;
            case 2:
                message.endTimestamp = reader.fixed64();
                break;
            case 3:
                message.region = reader.string();
                break;
            case 4:
                message.batchNum = reader.int32();
                break;
            case 5:
                message.batchSize = reader.int32();
                break;
            case 6:
                if (!(message.signatureInfos && message.signatureInfos.length))
                    message.signatureInfos = [];
                message.signatureInfos.push($root.SignatureInfo.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.keys && message.keys.length))
                    message.keys = [];
                message.keys.push($root.TemporaryExposureKey.decode(reader, reader.uint32()));
                break;
            case 8:
                if (!(message.revisedKeys && message.revisedKeys.length))
                    message.revisedKeys = [];
                message.revisedKeys.push($root.TemporaryExposureKey.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TemporaryExposureKeyExport message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TemporaryExposureKeyExport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TemporaryExposureKeyExport} TemporaryExposureKeyExport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemporaryExposureKeyExport.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TemporaryExposureKeyExport message.
     * @function verify
     * @memberof TemporaryExposureKeyExport
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TemporaryExposureKeyExport.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
            if (!$util.isInteger(message.startTimestamp) && !(message.startTimestamp && $util.isInteger(message.startTimestamp.low) && $util.isInteger(message.startTimestamp.high)))
                return "startTimestamp: integer|Long expected";
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            if (!$util.isInteger(message.endTimestamp) && !(message.endTimestamp && $util.isInteger(message.endTimestamp.low) && $util.isInteger(message.endTimestamp.high)))
                return "endTimestamp: integer|Long expected";
        if (message.region != null && message.hasOwnProperty("region"))
            if (!$util.isString(message.region))
                return "region: string expected";
        if (message.batchNum != null && message.hasOwnProperty("batchNum"))
            if (!$util.isInteger(message.batchNum))
                return "batchNum: integer expected";
        if (message.batchSize != null && message.hasOwnProperty("batchSize"))
            if (!$util.isInteger(message.batchSize))
                return "batchSize: integer expected";
        if (message.signatureInfos != null && message.hasOwnProperty("signatureInfos")) {
            if (!Array.isArray(message.signatureInfos))
                return "signatureInfos: array expected";
            for (let i = 0; i < message.signatureInfos.length; ++i) {
                let error = $root.SignatureInfo.verify(message.signatureInfos[i]);
                if (error)
                    return "signatureInfos." + error;
            }
        }
        if (message.keys != null && message.hasOwnProperty("keys")) {
            if (!Array.isArray(message.keys))
                return "keys: array expected";
            for (let i = 0; i < message.keys.length; ++i) {
                let error = $root.TemporaryExposureKey.verify(message.keys[i]);
                if (error)
                    return "keys." + error;
            }
        }
        if (message.revisedKeys != null && message.hasOwnProperty("revisedKeys")) {
            if (!Array.isArray(message.revisedKeys))
                return "revisedKeys: array expected";
            for (let i = 0; i < message.revisedKeys.length; ++i) {
                let error = $root.TemporaryExposureKey.verify(message.revisedKeys[i]);
                if (error)
                    return "revisedKeys." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TemporaryExposureKeyExport message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TemporaryExposureKeyExport
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TemporaryExposureKeyExport} TemporaryExposureKeyExport
     */
    TemporaryExposureKeyExport.fromObject = function fromObject(object) {
        if (object instanceof $root.TemporaryExposureKeyExport)
            return object;
        let message = new $root.TemporaryExposureKeyExport();
        if (object.startTimestamp != null)
            if ($util.Long)
                (message.startTimestamp = $util.Long.fromValue(object.startTimestamp)).unsigned = false;
            else if (typeof object.startTimestamp === "string")
                message.startTimestamp = parseInt(object.startTimestamp, 10);
            else if (typeof object.startTimestamp === "number")
                message.startTimestamp = object.startTimestamp;
            else if (typeof object.startTimestamp === "object")
                message.startTimestamp = new $util.LongBits(object.startTimestamp.low >>> 0, object.startTimestamp.high >>> 0).toNumber();
        if (object.endTimestamp != null)
            if ($util.Long)
                (message.endTimestamp = $util.Long.fromValue(object.endTimestamp)).unsigned = false;
            else if (typeof object.endTimestamp === "string")
                message.endTimestamp = parseInt(object.endTimestamp, 10);
            else if (typeof object.endTimestamp === "number")
                message.endTimestamp = object.endTimestamp;
            else if (typeof object.endTimestamp === "object")
                message.endTimestamp = new $util.LongBits(object.endTimestamp.low >>> 0, object.endTimestamp.high >>> 0).toNumber();
        if (object.region != null)
            message.region = String(object.region);
        if (object.batchNum != null)
            message.batchNum = object.batchNum | 0;
        if (object.batchSize != null)
            message.batchSize = object.batchSize | 0;
        if (object.signatureInfos) {
            if (!Array.isArray(object.signatureInfos))
                throw TypeError(".TemporaryExposureKeyExport.signatureInfos: array expected");
            message.signatureInfos = [];
            for (let i = 0; i < object.signatureInfos.length; ++i) {
                if (typeof object.signatureInfos[i] !== "object")
                    throw TypeError(".TemporaryExposureKeyExport.signatureInfos: object expected");
                message.signatureInfos[i] = $root.SignatureInfo.fromObject(object.signatureInfos[i]);
            }
        }
        if (object.keys) {
            if (!Array.isArray(object.keys))
                throw TypeError(".TemporaryExposureKeyExport.keys: array expected");
            message.keys = [];
            for (let i = 0; i < object.keys.length; ++i) {
                if (typeof object.keys[i] !== "object")
                    throw TypeError(".TemporaryExposureKeyExport.keys: object expected");
                message.keys[i] = $root.TemporaryExposureKey.fromObject(object.keys[i]);
            }
        }
        if (object.revisedKeys) {
            if (!Array.isArray(object.revisedKeys))
                throw TypeError(".TemporaryExposureKeyExport.revisedKeys: array expected");
            message.revisedKeys = [];
            for (let i = 0; i < object.revisedKeys.length; ++i) {
                if (typeof object.revisedKeys[i] !== "object")
                    throw TypeError(".TemporaryExposureKeyExport.revisedKeys: object expected");
                message.revisedKeys[i] = $root.TemporaryExposureKey.fromObject(object.revisedKeys[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TemporaryExposureKeyExport message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TemporaryExposureKeyExport
     * @static
     * @param {TemporaryExposureKeyExport} message TemporaryExposureKeyExport
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TemporaryExposureKeyExport.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.signatureInfos = [];
            object.keys = [];
            object.revisedKeys = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.startTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.startTimestamp = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.endTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.endTimestamp = options.longs === String ? "0" : 0;
            object.region = "";
            object.batchNum = 0;
            object.batchSize = 0;
        }
        if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
            if (typeof message.startTimestamp === "number")
                object.startTimestamp = options.longs === String ? String(message.startTimestamp) : message.startTimestamp;
            else
                object.startTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.startTimestamp) : options.longs === Number ? new $util.LongBits(message.startTimestamp.low >>> 0, message.startTimestamp.high >>> 0).toNumber() : message.startTimestamp;
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            if (typeof message.endTimestamp === "number")
                object.endTimestamp = options.longs === String ? String(message.endTimestamp) : message.endTimestamp;
            else
                object.endTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.endTimestamp) : options.longs === Number ? new $util.LongBits(message.endTimestamp.low >>> 0, message.endTimestamp.high >>> 0).toNumber() : message.endTimestamp;
        if (message.region != null && message.hasOwnProperty("region"))
            object.region = message.region;
        if (message.batchNum != null && message.hasOwnProperty("batchNum"))
            object.batchNum = message.batchNum;
        if (message.batchSize != null && message.hasOwnProperty("batchSize"))
            object.batchSize = message.batchSize;
        if (message.signatureInfos && message.signatureInfos.length) {
            object.signatureInfos = [];
            for (let j = 0; j < message.signatureInfos.length; ++j)
                object.signatureInfos[j] = $root.SignatureInfo.toObject(message.signatureInfos[j], options);
        }
        if (message.keys && message.keys.length) {
            object.keys = [];
            for (let j = 0; j < message.keys.length; ++j)
                object.keys[j] = $root.TemporaryExposureKey.toObject(message.keys[j], options);
        }
        if (message.revisedKeys && message.revisedKeys.length) {
            object.revisedKeys = [];
            for (let j = 0; j < message.revisedKeys.length; ++j)
                object.revisedKeys[j] = $root.TemporaryExposureKey.toObject(message.revisedKeys[j], options);
        }
        return object;
    };

    /**
     * Converts this TemporaryExposureKeyExport to JSON.
     * @function toJSON
     * @memberof TemporaryExposureKeyExport
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TemporaryExposureKeyExport.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TemporaryExposureKeyExport;
})();

export const SignatureInfo = $root.SignatureInfo = (() => {

    /**
     * Properties of a SignatureInfo.
     * @exports ISignatureInfo
     * @interface ISignatureInfo
     * @property {string|null} [appBundleId] SignatureInfo appBundleId
     * @property {string|null} [androidPackage] SignatureInfo androidPackage
     * @property {string|null} [verificationKeyVersion] SignatureInfo verificationKeyVersion
     * @property {string|null} [verificationKeyId] SignatureInfo verificationKeyId
     * @property {string|null} [signatureAlgorithm] SignatureInfo signatureAlgorithm
     */

    /**
     * Constructs a new SignatureInfo.
     * @exports SignatureInfo
     * @classdesc Represents a SignatureInfo.
     * @implements ISignatureInfo
     * @constructor
     * @param {ISignatureInfo=} [properties] Properties to set
     */
    function SignatureInfo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SignatureInfo appBundleId.
     * @member {string} appBundleId
     * @memberof SignatureInfo
     * @instance
     */
    SignatureInfo.prototype.appBundleId = "";

    /**
     * SignatureInfo androidPackage.
     * @member {string} androidPackage
     * @memberof SignatureInfo
     * @instance
     */
    SignatureInfo.prototype.androidPackage = "";

    /**
     * SignatureInfo verificationKeyVersion.
     * @member {string} verificationKeyVersion
     * @memberof SignatureInfo
     * @instance
     */
    SignatureInfo.prototype.verificationKeyVersion = "";

    /**
     * SignatureInfo verificationKeyId.
     * @member {string} verificationKeyId
     * @memberof SignatureInfo
     * @instance
     */
    SignatureInfo.prototype.verificationKeyId = "";

    /**
     * SignatureInfo signatureAlgorithm.
     * @member {string} signatureAlgorithm
     * @memberof SignatureInfo
     * @instance
     */
    SignatureInfo.prototype.signatureAlgorithm = "";

    /**
     * Decodes a SignatureInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SignatureInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SignatureInfo} SignatureInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignatureInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignatureInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.appBundleId = reader.string();
                break;
            case 2:
                message.androidPackage = reader.string();
                break;
            case 3:
                message.verificationKeyVersion = reader.string();
                break;
            case 4:
                message.verificationKeyId = reader.string();
                break;
            case 5:
                message.signatureAlgorithm = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SignatureInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SignatureInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SignatureInfo} SignatureInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignatureInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignatureInfo message.
     * @function verify
     * @memberof SignatureInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignatureInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.appBundleId != null && message.hasOwnProperty("appBundleId"))
            if (!$util.isString(message.appBundleId))
                return "appBundleId: string expected";
        if (message.androidPackage != null && message.hasOwnProperty("androidPackage"))
            if (!$util.isString(message.androidPackage))
                return "androidPackage: string expected";
        if (message.verificationKeyVersion != null && message.hasOwnProperty("verificationKeyVersion"))
            if (!$util.isString(message.verificationKeyVersion))
                return "verificationKeyVersion: string expected";
        if (message.verificationKeyId != null && message.hasOwnProperty("verificationKeyId"))
            if (!$util.isString(message.verificationKeyId))
                return "verificationKeyId: string expected";
        if (message.signatureAlgorithm != null && message.hasOwnProperty("signatureAlgorithm"))
            if (!$util.isString(message.signatureAlgorithm))
                return "signatureAlgorithm: string expected";
        return null;
    };

    /**
     * Creates a SignatureInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SignatureInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SignatureInfo} SignatureInfo
     */
    SignatureInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.SignatureInfo)
            return object;
        let message = new $root.SignatureInfo();
        if (object.appBundleId != null)
            message.appBundleId = String(object.appBundleId);
        if (object.androidPackage != null)
            message.androidPackage = String(object.androidPackage);
        if (object.verificationKeyVersion != null)
            message.verificationKeyVersion = String(object.verificationKeyVersion);
        if (object.verificationKeyId != null)
            message.verificationKeyId = String(object.verificationKeyId);
        if (object.signatureAlgorithm != null)
            message.signatureAlgorithm = String(object.signatureAlgorithm);
        return message;
    };

    /**
     * Creates a plain object from a SignatureInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SignatureInfo
     * @static
     * @param {SignatureInfo} message SignatureInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SignatureInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.appBundleId = "";
            object.androidPackage = "";
            object.verificationKeyVersion = "";
            object.verificationKeyId = "";
            object.signatureAlgorithm = "";
        }
        if (message.appBundleId != null && message.hasOwnProperty("appBundleId"))
            object.appBundleId = message.appBundleId;
        if (message.androidPackage != null && message.hasOwnProperty("androidPackage"))
            object.androidPackage = message.androidPackage;
        if (message.verificationKeyVersion != null && message.hasOwnProperty("verificationKeyVersion"))
            object.verificationKeyVersion = message.verificationKeyVersion;
        if (message.verificationKeyId != null && message.hasOwnProperty("verificationKeyId"))
            object.verificationKeyId = message.verificationKeyId;
        if (message.signatureAlgorithm != null && message.hasOwnProperty("signatureAlgorithm"))
            object.signatureAlgorithm = message.signatureAlgorithm;
        return object;
    };

    /**
     * Converts this SignatureInfo to JSON.
     * @function toJSON
     * @memberof SignatureInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SignatureInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SignatureInfo;
})();

export const TemporaryExposureKey = $root.TemporaryExposureKey = (() => {

    /**
     * Properties of a TemporaryExposureKey.
     * @exports ITemporaryExposureKey
     * @interface ITemporaryExposureKey
     * @property {Uint8Array|null} [keyData] TemporaryExposureKey keyData
     * @property {number|null} [transmissionRiskLevel] TemporaryExposureKey transmissionRiskLevel
     * @property {number|null} [rollingStartIntervalNumber] TemporaryExposureKey rollingStartIntervalNumber
     * @property {number|null} [rollingPeriod] TemporaryExposureKey rollingPeriod
     * @property {TemporaryExposureKey.ReportType|null} [reportType] TemporaryExposureKey reportType
     * @property {number|null} [daysSinceOnsetOfSymptoms] TemporaryExposureKey daysSinceOnsetOfSymptoms
     */

    /**
     * Constructs a new TemporaryExposureKey.
     * @exports TemporaryExposureKey
     * @classdesc Represents a TemporaryExposureKey.
     * @implements ITemporaryExposureKey
     * @constructor
     * @param {ITemporaryExposureKey=} [properties] Properties to set
     */
    function TemporaryExposureKey(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TemporaryExposureKey keyData.
     * @member {Uint8Array} keyData
     * @memberof TemporaryExposureKey
     * @instance
     */
    TemporaryExposureKey.prototype.keyData = $util.newBuffer([]);

    /**
     * TemporaryExposureKey transmissionRiskLevel.
     * @member {number} transmissionRiskLevel
     * @memberof TemporaryExposureKey
     * @instance
     */
    TemporaryExposureKey.prototype.transmissionRiskLevel = 0;

    /**
     * TemporaryExposureKey rollingStartIntervalNumber.
     * @member {number} rollingStartIntervalNumber
     * @memberof TemporaryExposureKey
     * @instance
     */
    TemporaryExposureKey.prototype.rollingStartIntervalNumber = 0;

    /**
     * TemporaryExposureKey rollingPeriod.
     * @member {number} rollingPeriod
     * @memberof TemporaryExposureKey
     * @instance
     */
    TemporaryExposureKey.prototype.rollingPeriod = 144;

    /**
     * TemporaryExposureKey reportType.
     * @member {TemporaryExposureKey.ReportType} reportType
     * @memberof TemporaryExposureKey
     * @instance
     */
    TemporaryExposureKey.prototype.reportType = 0;

    /**
     * TemporaryExposureKey daysSinceOnsetOfSymptoms.
     * @member {number} daysSinceOnsetOfSymptoms
     * @memberof TemporaryExposureKey
     * @instance
     */
    TemporaryExposureKey.prototype.daysSinceOnsetOfSymptoms = 0;

    /**
     * Decodes a TemporaryExposureKey message from the specified reader or buffer.
     * @function decode
     * @memberof TemporaryExposureKey
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TemporaryExposureKey} TemporaryExposureKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemporaryExposureKey.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TemporaryExposureKey();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.keyData = reader.bytes();
                break;
            case 2:
                message.transmissionRiskLevel = reader.int32();
                break;
            case 3:
                message.rollingStartIntervalNumber = reader.int32();
                break;
            case 4:
                message.rollingPeriod = reader.int32();
                break;
            case 5:
                message.reportType = reader.int32();
                break;
            case 6:
                message.daysSinceOnsetOfSymptoms = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TemporaryExposureKey message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TemporaryExposureKey
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TemporaryExposureKey} TemporaryExposureKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemporaryExposureKey.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TemporaryExposureKey message.
     * @function verify
     * @memberof TemporaryExposureKey
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TemporaryExposureKey.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.keyData != null && message.hasOwnProperty("keyData"))
            if (!(message.keyData && typeof message.keyData.length === "number" || $util.isString(message.keyData)))
                return "keyData: buffer expected";
        if (message.transmissionRiskLevel != null && message.hasOwnProperty("transmissionRiskLevel"))
            if (!$util.isInteger(message.transmissionRiskLevel))
                return "transmissionRiskLevel: integer expected";
        if (message.rollingStartIntervalNumber != null && message.hasOwnProperty("rollingStartIntervalNumber"))
            if (!$util.isInteger(message.rollingStartIntervalNumber))
                return "rollingStartIntervalNumber: integer expected";
        if (message.rollingPeriod != null && message.hasOwnProperty("rollingPeriod"))
            if (!$util.isInteger(message.rollingPeriod))
                return "rollingPeriod: integer expected";
        if (message.reportType != null && message.hasOwnProperty("reportType"))
            switch (message.reportType) {
            default:
                return "reportType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.daysSinceOnsetOfSymptoms != null && message.hasOwnProperty("daysSinceOnsetOfSymptoms"))
            if (!$util.isInteger(message.daysSinceOnsetOfSymptoms))
                return "daysSinceOnsetOfSymptoms: integer expected";
        return null;
    };

    /**
     * Creates a TemporaryExposureKey message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TemporaryExposureKey
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TemporaryExposureKey} TemporaryExposureKey
     */
    TemporaryExposureKey.fromObject = function fromObject(object) {
        if (object instanceof $root.TemporaryExposureKey)
            return object;
        let message = new $root.TemporaryExposureKey();
        if (object.keyData != null)
            if (typeof object.keyData === "string")
                $util.base64.decode(object.keyData, message.keyData = $util.newBuffer($util.base64.length(object.keyData)), 0);
            else if (object.keyData.length)
                message.keyData = object.keyData;
        if (object.transmissionRiskLevel != null)
            message.transmissionRiskLevel = object.transmissionRiskLevel | 0;
        if (object.rollingStartIntervalNumber != null)
            message.rollingStartIntervalNumber = object.rollingStartIntervalNumber | 0;
        if (object.rollingPeriod != null)
            message.rollingPeriod = object.rollingPeriod | 0;
        switch (object.reportType) {
        case "UNKNOWN":
        case 0:
            message.reportType = 0;
            break;
        case "CONFIRMED_TEST":
        case 1:
            message.reportType = 1;
            break;
        case "CONFIRMED_CLINICAL_DIAGNOSIS":
        case 2:
            message.reportType = 2;
            break;
        case "SELF_REPORT":
        case 3:
            message.reportType = 3;
            break;
        case "RECURSIVE":
        case 4:
            message.reportType = 4;
            break;
        case "REVOKED":
        case 5:
            message.reportType = 5;
            break;
        }
        if (object.daysSinceOnsetOfSymptoms != null)
            message.daysSinceOnsetOfSymptoms = object.daysSinceOnsetOfSymptoms | 0;
        return message;
    };

    /**
     * Creates a plain object from a TemporaryExposureKey message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TemporaryExposureKey
     * @static
     * @param {TemporaryExposureKey} message TemporaryExposureKey
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TemporaryExposureKey.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.keyData = "";
            else {
                object.keyData = [];
                if (options.bytes !== Array)
                    object.keyData = $util.newBuffer(object.keyData);
            }
            object.transmissionRiskLevel = 0;
            object.rollingStartIntervalNumber = 0;
            object.rollingPeriod = 144;
            object.reportType = options.enums === String ? "UNKNOWN" : 0;
            object.daysSinceOnsetOfSymptoms = 0;
        }
        if (message.keyData != null && message.hasOwnProperty("keyData"))
            object.keyData = options.bytes === String ? $util.base64.encode(message.keyData, 0, message.keyData.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyData) : message.keyData;
        if (message.transmissionRiskLevel != null && message.hasOwnProperty("transmissionRiskLevel"))
            object.transmissionRiskLevel = message.transmissionRiskLevel;
        if (message.rollingStartIntervalNumber != null && message.hasOwnProperty("rollingStartIntervalNumber"))
            object.rollingStartIntervalNumber = message.rollingStartIntervalNumber;
        if (message.rollingPeriod != null && message.hasOwnProperty("rollingPeriod"))
            object.rollingPeriod = message.rollingPeriod;
        if (message.reportType != null && message.hasOwnProperty("reportType"))
            object.reportType = options.enums === String ? $root.TemporaryExposureKey.ReportType[message.reportType] : message.reportType;
        if (message.daysSinceOnsetOfSymptoms != null && message.hasOwnProperty("daysSinceOnsetOfSymptoms"))
            object.daysSinceOnsetOfSymptoms = message.daysSinceOnsetOfSymptoms;
        return object;
    };

    /**
     * Converts this TemporaryExposureKey to JSON.
     * @function toJSON
     * @memberof TemporaryExposureKey
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TemporaryExposureKey.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * ReportType enum.
     * @name TemporaryExposureKey.ReportType
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} CONFIRMED_TEST=1 CONFIRMED_TEST value
     * @property {number} CONFIRMED_CLINICAL_DIAGNOSIS=2 CONFIRMED_CLINICAL_DIAGNOSIS value
     * @property {number} SELF_REPORT=3 SELF_REPORT value
     * @property {number} RECURSIVE=4 RECURSIVE value
     * @property {number} REVOKED=5 REVOKED value
     */
    TemporaryExposureKey.ReportType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "CONFIRMED_TEST"] = 1;
        values[valuesById[2] = "CONFIRMED_CLINICAL_DIAGNOSIS"] = 2;
        values[valuesById[3] = "SELF_REPORT"] = 3;
        values[valuesById[4] = "RECURSIVE"] = 4;
        values[valuesById[5] = "REVOKED"] = 5;
        return values;
    })();

    return TemporaryExposureKey;
})();

export const TEKSignatureList = $root.TEKSignatureList = (() => {

    /**
     * Properties of a TEKSignatureList.
     * @exports ITEKSignatureList
     * @interface ITEKSignatureList
     * @property {Array.<ITEKSignature>|null} [signatures] TEKSignatureList signatures
     */

    /**
     * Constructs a new TEKSignatureList.
     * @exports TEKSignatureList
     * @classdesc Represents a TEKSignatureList.
     * @implements ITEKSignatureList
     * @constructor
     * @param {ITEKSignatureList=} [properties] Properties to set
     */
    function TEKSignatureList(properties) {
        this.signatures = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TEKSignatureList signatures.
     * @member {Array.<ITEKSignature>} signatures
     * @memberof TEKSignatureList
     * @instance
     */
    TEKSignatureList.prototype.signatures = $util.emptyArray;

    /**
     * Decodes a TEKSignatureList message from the specified reader or buffer.
     * @function decode
     * @memberof TEKSignatureList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TEKSignatureList} TEKSignatureList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TEKSignatureList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TEKSignatureList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.signatures && message.signatures.length))
                    message.signatures = [];
                message.signatures.push($root.TEKSignature.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TEKSignatureList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TEKSignatureList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TEKSignatureList} TEKSignatureList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TEKSignatureList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TEKSignatureList message.
     * @function verify
     * @memberof TEKSignatureList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TEKSignatureList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.signatures != null && message.hasOwnProperty("signatures")) {
            if (!Array.isArray(message.signatures))
                return "signatures: array expected";
            for (let i = 0; i < message.signatures.length; ++i) {
                let error = $root.TEKSignature.verify(message.signatures[i]);
                if (error)
                    return "signatures." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TEKSignatureList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TEKSignatureList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TEKSignatureList} TEKSignatureList
     */
    TEKSignatureList.fromObject = function fromObject(object) {
        if (object instanceof $root.TEKSignatureList)
            return object;
        let message = new $root.TEKSignatureList();
        if (object.signatures) {
            if (!Array.isArray(object.signatures))
                throw TypeError(".TEKSignatureList.signatures: array expected");
            message.signatures = [];
            for (let i = 0; i < object.signatures.length; ++i) {
                if (typeof object.signatures[i] !== "object")
                    throw TypeError(".TEKSignatureList.signatures: object expected");
                message.signatures[i] = $root.TEKSignature.fromObject(object.signatures[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TEKSignatureList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TEKSignatureList
     * @static
     * @param {TEKSignatureList} message TEKSignatureList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TEKSignatureList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.signatures = [];
        if (message.signatures && message.signatures.length) {
            object.signatures = [];
            for (let j = 0; j < message.signatures.length; ++j)
                object.signatures[j] = $root.TEKSignature.toObject(message.signatures[j], options);
        }
        return object;
    };

    /**
     * Converts this TEKSignatureList to JSON.
     * @function toJSON
     * @memberof TEKSignatureList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TEKSignatureList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TEKSignatureList;
})();

export const TEKSignature = $root.TEKSignature = (() => {

    /**
     * Properties of a TEKSignature.
     * @exports ITEKSignature
     * @interface ITEKSignature
     * @property {ISignatureInfo|null} [signatureInfo] TEKSignature signatureInfo
     * @property {number|null} [batchNum] TEKSignature batchNum
     * @property {number|null} [batchSize] TEKSignature batchSize
     * @property {Uint8Array|null} [signature] TEKSignature signature
     */

    /**
     * Constructs a new TEKSignature.
     * @exports TEKSignature
     * @classdesc Represents a TEKSignature.
     * @implements ITEKSignature
     * @constructor
     * @param {ITEKSignature=} [properties] Properties to set
     */
    function TEKSignature(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TEKSignature signatureInfo.
     * @member {ISignatureInfo|null|undefined} signatureInfo
     * @memberof TEKSignature
     * @instance
     */
    TEKSignature.prototype.signatureInfo = null;

    /**
     * TEKSignature batchNum.
     * @member {number} batchNum
     * @memberof TEKSignature
     * @instance
     */
    TEKSignature.prototype.batchNum = 0;

    /**
     * TEKSignature batchSize.
     * @member {number} batchSize
     * @memberof TEKSignature
     * @instance
     */
    TEKSignature.prototype.batchSize = 0;

    /**
     * TEKSignature signature.
     * @member {Uint8Array} signature
     * @memberof TEKSignature
     * @instance
     */
    TEKSignature.prototype.signature = $util.newBuffer([]);

    /**
     * Decodes a TEKSignature message from the specified reader or buffer.
     * @function decode
     * @memberof TEKSignature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TEKSignature} TEKSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TEKSignature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TEKSignature();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.signatureInfo = $root.SignatureInfo.decode(reader, reader.uint32());
                break;
            case 2:
                message.batchNum = reader.int32();
                break;
            case 3:
                message.batchSize = reader.int32();
                break;
            case 4:
                message.signature = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TEKSignature message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TEKSignature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TEKSignature} TEKSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TEKSignature.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TEKSignature message.
     * @function verify
     * @memberof TEKSignature
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TEKSignature.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.signatureInfo != null && message.hasOwnProperty("signatureInfo")) {
            let error = $root.SignatureInfo.verify(message.signatureInfo);
            if (error)
                return "signatureInfo." + error;
        }
        if (message.batchNum != null && message.hasOwnProperty("batchNum"))
            if (!$util.isInteger(message.batchNum))
                return "batchNum: integer expected";
        if (message.batchSize != null && message.hasOwnProperty("batchSize"))
            if (!$util.isInteger(message.batchSize))
                return "batchSize: integer expected";
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
        return null;
    };

    /**
     * Creates a TEKSignature message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TEKSignature
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TEKSignature} TEKSignature
     */
    TEKSignature.fromObject = function fromObject(object) {
        if (object instanceof $root.TEKSignature)
            return object;
        let message = new $root.TEKSignature();
        if (object.signatureInfo != null) {
            if (typeof object.signatureInfo !== "object")
                throw TypeError(".TEKSignature.signatureInfo: object expected");
            message.signatureInfo = $root.SignatureInfo.fromObject(object.signatureInfo);
        }
        if (object.batchNum != null)
            message.batchNum = object.batchNum | 0;
        if (object.batchSize != null)
            message.batchSize = object.batchSize | 0;
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length)
                message.signature = object.signature;
        return message;
    };

    /**
     * Creates a plain object from a TEKSignature message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TEKSignature
     * @static
     * @param {TEKSignature} message TEKSignature
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TEKSignature.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.signatureInfo = null;
            object.batchNum = 0;
            object.batchSize = 0;
            if (options.bytes === String)
                object.signature = "";
            else {
                object.signature = [];
                if (options.bytes !== Array)
                    object.signature = $util.newBuffer(object.signature);
            }
        }
        if (message.signatureInfo != null && message.hasOwnProperty("signatureInfo"))
            object.signatureInfo = $root.SignatureInfo.toObject(message.signatureInfo, options);
        if (message.batchNum != null && message.hasOwnProperty("batchNum"))
            object.batchNum = message.batchNum;
        if (message.batchSize != null && message.hasOwnProperty("batchSize"))
            object.batchSize = message.batchSize;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        return object;
    };

    /**
     * Converts this TEKSignature to JSON.
     * @function toJSON
     * @memberof TEKSignature
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TEKSignature.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TEKSignature;
})();

export { $root as default };
