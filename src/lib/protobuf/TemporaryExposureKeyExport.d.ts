import * as $protobuf from "protobufjs";
/** Properties of a TemporaryExposureKeyExport. */
export interface ITemporaryExposureKeyExport {

    /** TemporaryExposureKeyExport startTimestamp */
    startTimestamp?: (number|Long|null);

    /** TemporaryExposureKeyExport endTimestamp */
    endTimestamp?: (number|Long|null);

    /** TemporaryExposureKeyExport region */
    region?: (string|null);

    /** TemporaryExposureKeyExport batchNum */
    batchNum?: (number|null);

    /** TemporaryExposureKeyExport batchSize */
    batchSize?: (number|null);

    /** TemporaryExposureKeyExport signatureInfos */
    signatureInfos?: (ISignatureInfo[]|null);

    /** TemporaryExposureKeyExport keys */
    keys?: (ITemporaryExposureKey[]|null);

    /** TemporaryExposureKeyExport revisedKeys */
    revisedKeys?: (ITemporaryExposureKey[]|null);
}

/** Represents a TemporaryExposureKeyExport. */
export class TemporaryExposureKeyExport implements ITemporaryExposureKeyExport {

    /**
     * Constructs a new TemporaryExposureKeyExport.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITemporaryExposureKeyExport);

    /** TemporaryExposureKeyExport startTimestamp. */
    public startTimestamp: (number|Long);

    /** TemporaryExposureKeyExport endTimestamp. */
    public endTimestamp: (number|Long);

    /** TemporaryExposureKeyExport region. */
    public region: string;

    /** TemporaryExposureKeyExport batchNum. */
    public batchNum: number;

    /** TemporaryExposureKeyExport batchSize. */
    public batchSize: number;

    /** TemporaryExposureKeyExport signatureInfos. */
    public signatureInfos: ISignatureInfo[];

    /** TemporaryExposureKeyExport keys. */
    public keys: ITemporaryExposureKey[];

    /** TemporaryExposureKeyExport revisedKeys. */
    public revisedKeys: ITemporaryExposureKey[];

    /**
     * Decodes a TemporaryExposureKeyExport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TemporaryExposureKeyExport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TemporaryExposureKeyExport;

    /**
     * Decodes a TemporaryExposureKeyExport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TemporaryExposureKeyExport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TemporaryExposureKeyExport;

    /**
     * Verifies a TemporaryExposureKeyExport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TemporaryExposureKeyExport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TemporaryExposureKeyExport
     */
    public static fromObject(object: { [k: string]: any }): TemporaryExposureKeyExport;

    /**
     * Creates a plain object from a TemporaryExposureKeyExport message. Also converts values to other types if specified.
     * @param message TemporaryExposureKeyExport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TemporaryExposureKeyExport, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TemporaryExposureKeyExport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SignatureInfo. */
export interface ISignatureInfo {

    /** SignatureInfo appBundleId */
    appBundleId?: (string|null);

    /** SignatureInfo androidPackage */
    androidPackage?: (string|null);

    /** SignatureInfo verificationKeyVersion */
    verificationKeyVersion?: (string|null);

    /** SignatureInfo verificationKeyId */
    verificationKeyId?: (string|null);

    /** SignatureInfo signatureAlgorithm */
    signatureAlgorithm?: (string|null);
}

/** Represents a SignatureInfo. */
export class SignatureInfo implements ISignatureInfo {

    /**
     * Constructs a new SignatureInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignatureInfo);

    /** SignatureInfo appBundleId. */
    public appBundleId: string;

    /** SignatureInfo androidPackage. */
    public androidPackage: string;

    /** SignatureInfo verificationKeyVersion. */
    public verificationKeyVersion: string;

    /** SignatureInfo verificationKeyId. */
    public verificationKeyId: string;

    /** SignatureInfo signatureAlgorithm. */
    public signatureAlgorithm: string;

    /**
     * Decodes a SignatureInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignatureInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignatureInfo;

    /**
     * Decodes a SignatureInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SignatureInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignatureInfo;

    /**
     * Verifies a SignatureInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SignatureInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SignatureInfo
     */
    public static fromObject(object: { [k: string]: any }): SignatureInfo;

    /**
     * Creates a plain object from a SignatureInfo message. Also converts values to other types if specified.
     * @param message SignatureInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SignatureInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SignatureInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TemporaryExposureKey. */
export interface ITemporaryExposureKey {

    /** TemporaryExposureKey keyData */
    keyData?: (Uint8Array|null);

    /** TemporaryExposureKey transmissionRiskLevel */
    transmissionRiskLevel?: (number|null);

    /** TemporaryExposureKey rollingStartIntervalNumber */
    rollingStartIntervalNumber?: (number|null);

    /** TemporaryExposureKey rollingPeriod */
    rollingPeriod?: (number|null);

    /** TemporaryExposureKey reportType */
    reportType?: (TemporaryExposureKey.ReportType|null);

    /** TemporaryExposureKey daysSinceOnsetOfSymptoms */
    daysSinceOnsetOfSymptoms?: (number|null);
}

/** Represents a TemporaryExposureKey. */
export class TemporaryExposureKey implements ITemporaryExposureKey {

    /**
     * Constructs a new TemporaryExposureKey.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITemporaryExposureKey);

    /** TemporaryExposureKey keyData. */
    public keyData: Uint8Array;

    /** TemporaryExposureKey transmissionRiskLevel. */
    public transmissionRiskLevel: number;

    /** TemporaryExposureKey rollingStartIntervalNumber. */
    public rollingStartIntervalNumber: number;

    /** TemporaryExposureKey rollingPeriod. */
    public rollingPeriod: number;

    /** TemporaryExposureKey reportType. */
    public reportType: TemporaryExposureKey.ReportType;

    /** TemporaryExposureKey daysSinceOnsetOfSymptoms. */
    public daysSinceOnsetOfSymptoms: number;

    /**
     * Decodes a TemporaryExposureKey message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TemporaryExposureKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TemporaryExposureKey;

    /**
     * Decodes a TemporaryExposureKey message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TemporaryExposureKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TemporaryExposureKey;

    /**
     * Verifies a TemporaryExposureKey message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TemporaryExposureKey message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TemporaryExposureKey
     */
    public static fromObject(object: { [k: string]: any }): TemporaryExposureKey;

    /**
     * Creates a plain object from a TemporaryExposureKey message. Also converts values to other types if specified.
     * @param message TemporaryExposureKey
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TemporaryExposureKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TemporaryExposureKey to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TemporaryExposureKey {

    /** ReportType enum. */
    enum ReportType {
        UNKNOWN = 0,
        CONFIRMED_TEST = 1,
        CONFIRMED_CLINICAL_DIAGNOSIS = 2,
        SELF_REPORT = 3,
        RECURSIVE = 4,
        REVOKED = 5
    }
}

/** Properties of a TEKSignatureList. */
export interface ITEKSignatureList {

    /** TEKSignatureList signatures */
    signatures?: (ITEKSignature[]|null);
}

/** Represents a TEKSignatureList. */
export class TEKSignatureList implements ITEKSignatureList {

    /**
     * Constructs a new TEKSignatureList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITEKSignatureList);

    /** TEKSignatureList signatures. */
    public signatures: ITEKSignature[];

    /**
     * Decodes a TEKSignatureList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TEKSignatureList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TEKSignatureList;

    /**
     * Decodes a TEKSignatureList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TEKSignatureList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TEKSignatureList;

    /**
     * Verifies a TEKSignatureList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TEKSignatureList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TEKSignatureList
     */
    public static fromObject(object: { [k: string]: any }): TEKSignatureList;

    /**
     * Creates a plain object from a TEKSignatureList message. Also converts values to other types if specified.
     * @param message TEKSignatureList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TEKSignatureList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TEKSignatureList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TEKSignature. */
export interface ITEKSignature {

    /** TEKSignature signatureInfo */
    signatureInfo?: (ISignatureInfo|null);

    /** TEKSignature batchNum */
    batchNum?: (number|null);

    /** TEKSignature batchSize */
    batchSize?: (number|null);

    /** TEKSignature signature */
    signature?: (Uint8Array|null);
}

/** Represents a TEKSignature. */
export class TEKSignature implements ITEKSignature {

    /**
     * Constructs a new TEKSignature.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITEKSignature);

    /** TEKSignature signatureInfo. */
    public signatureInfo?: (ISignatureInfo|null);

    /** TEKSignature batchNum. */
    public batchNum: number;

    /** TEKSignature batchSize. */
    public batchSize: number;

    /** TEKSignature signature. */
    public signature: Uint8Array;

    /**
     * Decodes a TEKSignature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TEKSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TEKSignature;

    /**
     * Decodes a TEKSignature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TEKSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TEKSignature;

    /**
     * Verifies a TEKSignature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TEKSignature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TEKSignature
     */
    public static fromObject(object: { [k: string]: any }): TEKSignature;

    /**
     * Creates a plain object from a TEKSignature message. Also converts values to other types if specified.
     * @param message TEKSignature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TEKSignature, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TEKSignature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
