declare module 'piexifjs' {
    export const version: string;

    export const TAGS: TAGS;

    export function remove(jpeg: string): string;
    export function insert(exif: string, jpeg: string): string;
    export function load(data: string): ExifDict;
    export function dump(exifDict: ExifDict): string;

    export interface ExifDict {
        "0th": Record<ImageIFD, string | undefined>;
        "1st": unknown;
        Exif: Record<ExifIFD, string | undefined>;
        GPS: Record<GPSIFD, string | undefined>;
        Interop: Record<InteropIFD, string | undefined>;
        thumbnail: string | null;
    }

    type DmsArray = [[number, 1], [number, 1], [number, 100]][];

    export interface GPSHelper {
        degToDmsRational(degFloat: number): DmsArray;
        dmsRationalToDeg(dmsArray: DmsArray, ref: 'S' | 'W' | 'N' | 'E'): number;
    }

    export enum ImageIFD {
        ProcessingSoftware = 11,
        NewSubfileType = 254,
        SubfileType = 255,
        ImageWidth = 256,
        ImageLength = 257,
        BitsPerSample = 258,
        Compression = 259,
        PhotometricInterpretation = 262,
        Threshholding = 263,
        CellWidth = 264,
        CellLength = 265,
        FillOrder = 266,
        DocumentName = 269,
        ImageDescription = 270,
        Make = 271,
        Model = 272,
        StripOffsets = 273,
        Orientation = 274,
        SamplesPerPixel = 277,
        RowsPerStrip = 278,
        StripByteCounts = 279,
        XResolution = 282,
        YResolution = 283,
        PlanarConfiguration = 284,
        GrayResponseUnit = 290,
        GrayResponseCurve = 291,
        T4Options = 292,
        T6Options = 293,
        ResolutionUnit = 296,
        TransferFunction = 301,
        Software = 305,
        DateTime = 306,
        Artist = 315,
        HostComputer = 316,
        Predictor = 317,
        WhitePoint = 318,
        PrimaryChromaticities = 319,
        ColorMap = 320,
        HalftoneHints = 321,
        TileWidth = 322,
        TileLength = 323,
        TileOffsets = 324,
        TileByteCounts = 325,
        SubIFDs = 330,
        InkSet = 332,
        InkNames = 333,
        NumberOfInks = 334,
        DotRange = 336,
        TargetPrinter = 337,
        ExtraSamples = 338,
        SampleFormat = 339,
        SMinSampleValue = 340,
        SMaxSampleValue = 341,
        TransferRange = 342,
        ClipPath = 343,
        XClipPathUnits = 344,
        YClipPathUnits = 345,
        Indexed = 346,
        JPEGTables = 347,
        OPIProxy = 351,
        JPEGProc = 512,
        JPEGInterchangeFormat = 513,
        JPEGInterchangeFormatLength = 514,
        JPEGRestartInterval = 515,
        JPEGLosslessPredictors = 517,
        JPEGPointTransforms = 518,
        JPEGQTables = 519,
        JPEGDCTables = 520,
        JPEGACTables = 521,
        YCbCrCoefficients = 529,
        YCbCrSubSampling = 530,
        YCbCrPositioning = 531,
        ReferenceBlackWhite = 532,
        XMLPacket = 700,
        Rating = 18246,
        RatingPercent = 18249,
        ImageID = 32781,
        CFARepeatPatternDim = 33421,
        CFAPattern = 33422,
        BatteryLevel = 33423,
        Copyright = 33432,
        ExposureTime = 33434,
        ImageResources = 34377,
        ExifTag = 34665,
        InterColorProfile = 34675,
        GPSTag = 34853,
        Interlace = 34857,
        TimeZoneOffset = 34858,
        SelfTimerMode = 34859,
        FlashEnergy = 37387,
        SpatialFrequencyResponse = 37388,
        Noise = 37389,
        FocalPlaneXResolution = 37390,
        FocalPlaneYResolution = 37391,
        FocalPlaneResolutionUnit = 37392,
        ImageNumber = 37393,
        SecurityClassification = 37394,
        ImageHistory = 37395,
        ExposureIndex = 37397,
        TIFFEPStandardID = 37398,
        SensingMethod = 37399,
        XPTitle = 40091,
        XPComment = 40092,
        XPAuthor = 40093,
        XPKeywords = 40094,
        XPSubject = 40095,
        PrintImageMatching = 50341,
        DNGVersion = 50706,
        DNGBackwardVersion = 50707,
        UniqueCameraModel = 50708,
        LocalizedCameraModel = 50709,
        CFAPlaneColor = 50710,
        CFALayout = 50711,
        LinearizationTable = 50712,
        BlackLevelRepeatDim = 50713,
        BlackLevel = 50714,
        BlackLevelDeltaH = 50715,
        BlackLevelDeltaV = 50716,
        WhiteLevel = 50717,
        DefaultScale = 50718,
        DefaultCropOrigin = 50719,
        DefaultCropSize = 50720,
        ColorMatrix1 = 50721,
        ColorMatrix2 = 50722,
        CameraCalibration1 = 50723,
        CameraCalibration2 = 50724,
        ReductionMatrix1 = 50725,
        ReductionMatrix2 = 50726,
        AnalogBalance = 50727,
        AsShotNeutral = 50728,
        AsShotWhiteXY = 50729,
        BaselineExposure = 50730,
        BaselineNoise = 50731,
        BaselineSharpness = 50732,
        BayerGreenSplit = 50733,
        LinearResponseLimit = 50734,
        CameraSerialNumber = 50735,
        LensInfo = 50736,
        ChromaBlurRadius = 50737,
        AntiAliasStrength = 50738,
        ShadowScale = 50739,
        DNGPrivateData = 50740,
        MakerNoteSafety = 50741,
        CalibrationIlluminant1 = 50778,
        CalibrationIlluminant2 = 50779,
        BestQualityScale = 50780,
        RawDataUniqueID = 50781,
        OriginalRawFileName = 50827,
        OriginalRawFileData = 50828,
        ActiveArea = 50829,
        MaskedAreas = 50830,
        AsShotICCProfile = 50831,
        AsShotPreProfileMatrix = 50832,
        CurrentICCProfile = 50833,
        CurrentPreProfileMatrix = 50834,
        ColorimetricReference = 50879,
        CameraCalibrationSignature = 50931,
        ProfileCalibrationSignature = 50932,
        AsShotProfileName = 50934,
        NoiseReductionApplied = 50935,
        ProfileName = 50936,
        ProfileHueSatMapDims = 50937,
        ProfileHueSatMapData1 = 50938,
        ProfileHueSatMapData2 = 50939,
        ProfileToneCurve = 50940,
        ProfileEmbedPolicy = 50941,
        ProfileCopyright = 50942,
        ForwardMatrix1 = 50964,
        ForwardMatrix2 = 50965,
        PreviewApplicationName = 50966,
        PreviewApplicationVersion = 50967,
        PreviewSettingsName = 50968,
        PreviewSettingsDigest = 50969,
        PreviewColorSpace = 50970,
        PreviewDateTime = 50971,
        RawImageDigest = 50972,
        OriginalRawFileDigest = 50973,
        SubTileBlockSize = 50974,
        RowInterleaveFactor = 50975,
        ProfileLookTableDims = 50981,
        ProfileLookTableData = 50982,
        OpcodeList1 = 51008,
        OpcodeList2 = 51009,
        OpcodeList3 = 51022,
        NoiseProfile = 51041
    }

    export enum ExifIFD {
        ExposureTime = 33434,
        FNumber = 33437,
        ExposureProgram = 34850,
        SpectralSensitivity = 34852,
        ISOSpeedRatings = 34855,
        OECF = 34856,
        SensitivityType = 34864,
        StandardOutputSensitivity = 34865,
        RecommendedExposureIndex = 34866,
        ISOSpeed = 34867,
        ISOSpeedLatitudeyyy = 34868,
        ISOSpeedLatitudezzz = 34869,
        ExifVersion = 36864,
        DateTimeOriginal = 36867,
        DateTimeDigitized = 36868,
        ComponentsConfiguration = 37121,
        CompressedBitsPerPixel = 37122,
        ShutterSpeedValue = 37377,
        ApertureValue = 37378,
        BrightnessValue = 37379,
        ExposureBiasValue = 37380,
        MaxApertureValue = 37381,
        SubjectDistance = 37382,
        MeteringMode = 37383,
        LightSource = 37384,
        Flash = 37385,
        FocalLength = 37386,
        SubjectArea = 37396,
        MakerNote = 37500,
        UserComment = 37510,
        SubSecTime = 37520,
        SubSecTimeOriginal = 37521,
        SubSecTimeDigitized = 37522,
        FlashpixVersion = 40960,
        ColorSpace = 40961,
        PixelXDimension = 40962,
        PixelYDimension = 40963,
        RelatedSoundFile = 40964,
        InteroperabilityTag = 40965,
        FlashEnergy = 41483,
        SpatialFrequencyResponse = 41484,
        FocalPlaneXResolution = 41486,
        FocalPlaneYResolution = 41487,
        FocalPlaneResolutionUnit = 41488,
        SubjectLocation = 41492,
        ExposureIndex = 41493,
        SensingMethod = 41495,
        FileSource = 41728,
        SceneType = 41729,
        CFAPattern = 41730,
        CustomRendered = 41985,
        ExposureMode = 41986,
        WhiteBalance = 41987,
        DigitalZoomRatio = 41988,
        FocalLengthIn35mmFilm = 41989,
        SceneCaptureType = 41990,
        GainControl = 41991,
        Contrast = 41992,
        Saturation = 41993,
        Sharpness = 41994,
        DeviceSettingDescription = 41995,
        SubjectDistanceRange = 41996,
        ImageUniqueID = 42016,
        CameraOwnerName = 42032,
        BodySerialNumber = 42033,
        LensSpecification = 42034,
        LensMake = 42035,
        LensModel = 42036,
        LensSerialNumber = 42037,
        Gamma = 42240,
    }

    export enum GPSIFD {
        GPSVersionID = 0,
        GPSLatitudeRef = 1,
        GPSLatitude = 2,
        GPSLongitudeRef = 3,
        GPSLongitude = 4,
        GPSAltitudeRef = 5,
        GPSAltitude = 6,
        GPSTimeStamp = 7,
        GPSSatellites = 8,
        GPSStatus = 9,
        GPSMeasureMode = 10,
        GPSDOP = 11,
        GPSSpeedRef = 12,
        GPSSpeed = 13,
        GPSTrackRef = 14,
        GPSTrack = 15,
        GPSImgDirectionRef = 16,
        GPSImgDirection = 17,
        GPSMapDatum = 18,
        GPSDestLatitudeRef = 19,
        GPSDestLatitude = 20,
        GPSDestLongitudeRef = 21,
        GPSDestLongitude = 22,
        GPSDestBearingRef = 23,
        GPSDestBearing = 24,
        GPSDestDistanceRef = 25,
        GPSDestDistance = 26,
        GPSProcessingMethod = 27,
        GPSAreaInformation = 28,
        GPSDateStamp = 29,
        GPSDifferential = 30,
        GPSHPositioningError = 31,
    }

    export enum InteropIFD {
        InteroperabilityIndex = 1
    }

    export interface TAGS {
        "0th": {
            "11": {
                name: string;
                type: string;
            };
            "18246": {
                name: string;
                type: string;
            };
            "18249": {
                name: string;
                type: string;
            };
            "254": {
                name: string;
                type: string;
            };
            "255": {
                name: string;
                type: string;
            };
            "256": {
                name: string;
                type: string;
            };
            "257": {
                name: string;
                type: string;
            };
            "258": {
                name: string;
                type: string;
            };
            "259": {
                name: string;
                type: string;
            };
            "262": {
                name: string;
                type: string;
            };
            "263": {
                name: string;
                type: string;
            };
            "264": {
                name: string;
                type: string;
            };
            "265": {
                name: string;
                type: string;
            };
            "266": {
                name: string;
                type: string;
            };
            "269": {
                name: string;
                type: string;
            };
            "270": {
                name: string;
                type: string;
            };
            "271": {
                name: string;
                type: string;
            };
            "272": {
                name: string;
                type: string;
            };
            "273": {
                name: string;
                type: string;
            };
            "274": {
                name: string;
                type: string;
            };
            "277": {
                name: string;
                type: string;
            };
            "278": {
                name: string;
                type: string;
            };
            "279": {
                name: string;
                type: string;
            };
            "282": {
                name: string;
                type: string;
            };
            "283": {
                name: string;
                type: string;
            };
            "284": {
                name: string;
                type: string;
            };
            "290": {
                name: string;
                type: string;
            };
            "291": {
                name: string;
                type: string;
            };
            "292": {
                name: string;
                type: string;
            };
            "293": {
                name: string;
                type: string;
            };
            "296": {
                name: string;
                type: string;
            };
            "301": {
                name: string;
                type: string;
            };
            "305": {
                name: string;
                type: string;
            };
            "306": {
                name: string;
                type: string;
            };
            "315": {
                name: string;
                type: string;
            };
            "316": {
                name: string;
                type: string;
            };
            "317": {
                name: string;
                type: string;
            };
            "318": {
                name: string;
                type: string;
            };
            "319": {
                name: string;
                type: string;
            };
            "320": {
                name: string;
                type: string;
            };
            "321": {
                name: string;
                type: string;
            };
            "322": {
                name: string;
                type: string;
            };
            "323": {
                name: string;
                type: string;
            };
            "324": {
                name: string;
                type: string;
            };
            "325": {
                name: string;
                type: string;
            };
            "32781": {
                name: string;
                type: string;
            };
            "330": {
                name: string;
                type: string;
            };
            "332": {
                name: string;
                type: string;
            };
            "333": {
                name: string;
                type: string;
            };
            "334": {
                name: string;
                type: string;
            };
            "33421": {
                name: string;
                type: string;
            };
            "33422": {
                name: string;
                type: string;
            };
            "33423": {
                name: string;
                type: string;
            };
            "33432": {
                name: string;
                type: string;
            };
            "33434": {
                name: string;
                type: string;
            };
            "336": {
                name: string;
                type: string;
            };
            "337": {
                name: string;
                type: string;
            };
            "338": {
                name: string;
                type: string;
            };
            "339": {
                name: string;
                type: string;
            };
            "340": {
                name: string;
                type: string;
            };
            "341": {
                name: string;
                type: string;
            };
            "342": {
                name: string;
                type: string;
            };
            "343": {
                name: string;
                type: string;
            };
            "34377": {
                name: string;
                type: string;
            };
            "344": {
                name: string;
                type: string;
            };
            "345": {
                name: string;
                type: string;
            };
            "346": {
                name: string;
                type: string;
            };
            "34665": {
                name: string;
                type: string;
            };
            "34675": {
                name: string;
                type: string;
            };
            "347": {
                name: string;
                type: string;
            };
            "34853": {
                name: string;
                type: string;
            };
            "34857": {
                name: string;
                type: string;
            };
            "34858": {
                name: string;
                type: string;
            };
            "34859": {
                name: string;
                type: string;
            };
            "351": {
                name: string;
                type: string;
            };
            "37387": {
                name: string;
                type: string;
            };
            "37388": {
                name: string;
                type: string;
            };
            "37389": {
                name: string;
                type: string;
            };
            "37390": {
                name: string;
                type: string;
            };
            "37391": {
                name: string;
                type: string;
            };
            "37392": {
                name: string;
                type: string;
            };
            "37393": {
                name: string;
                type: string;
            };
            "37394": {
                name: string;
                type: string;
            };
            "37395": {
                name: string;
                type: string;
            };
            "37397": {
                name: string;
                type: string;
            };
            "37398": {
                name: string;
                type: string;
            };
            "37399": {
                name: string;
                type: string;
            };
            "40091": {
                name: string;
                type: string;
            };
            "40092": {
                name: string;
                type: string;
            };
            "40093": {
                name: string;
                type: string;
            };
            "40094": {
                name: string;
                type: string;
            };
            "40095": {
                name: string;
                type: string;
            };
            "50341": {
                name: string;
                type: string;
            };
            "50706": {
                name: string;
                type: string;
            };
            "50707": {
                name: string;
                type: string;
            };
            "50708": {
                name: string;
                type: string;
            };
            "50709": {
                name: string;
                type: string;
            };
            "50710": {
                name: string;
                type: string;
            };
            "50711": {
                name: string;
                type: string;
            };
            "50712": {
                name: string;
                type: string;
            };
            "50713": {
                name: string;
                type: string;
            };
            "50714": {
                name: string;
                type: string;
            };
            "50715": {
                name: string;
                type: string;
            };
            "50716": {
                name: string;
                type: string;
            };
            "50717": {
                name: string;
                type: string;
            };
            "50718": {
                name: string;
                type: string;
            };
            "50719": {
                name: string;
                type: string;
            };
            "50720": {
                name: string;
                type: string;
            };
            "50721": {
                name: string;
                type: string;
            };
            "50722": {
                name: string;
                type: string;
            };
            "50723": {
                name: string;
                type: string;
            };
            "50724": {
                name: string;
                type: string;
            };
            "50725": {
                name: string;
                type: string;
            };
            "50726": {
                name: string;
                type: string;
            };
            "50727": {
                name: string;
                type: string;
            };
            "50728": {
                name: string;
                type: string;
            };
            "50729": {
                name: string;
                type: string;
            };
            "50730": {
                name: string;
                type: string;
            };
            "50731": {
                name: string;
                type: string;
            };
            "50732": {
                name: string;
                type: string;
            };
            "50733": {
                name: string;
                type: string;
            };
            "50734": {
                name: string;
                type: string;
            };
            "50735": {
                name: string;
                type: string;
            };
            "50736": {
                name: string;
                type: string;
            };
            "50737": {
                name: string;
                type: string;
            };
            "50738": {
                name: string;
                type: string;
            };
            "50739": {
                name: string;
                type: string;
            };
            "50740": {
                name: string;
                type: string;
            };
            "50741": {
                name: string;
                type: string;
            };
            "50778": {
                name: string;
                type: string;
            };
            "50779": {
                name: string;
                type: string;
            };
            "50780": {
                name: string;
                type: string;
            };
            "50781": {
                name: string;
                type: string;
            };
            "50827": {
                name: string;
                type: string;
            };
            "50828": {
                name: string;
                type: string;
            };
            "50829": {
                name: string;
                type: string;
            };
            "50830": {
                name: string;
                type: string;
            };
            "50831": {
                name: string;
                type: string;
            };
            "50832": {
                name: string;
                type: string;
            };
            "50833": {
                name: string;
                type: string;
            };
            "50834": {
                name: string;
                type: string;
            };
            "50879": {
                name: string;
                type: string;
            };
            "50931": {
                name: string;
                type: string;
            };
            "50932": {
                name: string;
                type: string;
            };
            "50934": {
                name: string;
                type: string;
            };
            "50935": {
                name: string;
                type: string;
            };
            "50936": {
                name: string;
                type: string;
            };
            "50937": {
                name: string;
                type: string;
            };
            "50938": {
                name: string;
                type: string;
            };
            "50939": {
                name: string;
                type: string;
            };
            "50940": {
                name: string;
                type: string;
            };
            "50941": {
                name: string;
                type: string;
            };
            "50942": {
                name: string;
                type: string;
            };
            "50964": {
                name: string;
                type: string;
            };
            "50965": {
                name: string;
                type: string;
            };
            "50966": {
                name: string;
                type: string;
            };
            "50967": {
                name: string;
                type: string;
            };
            "50968": {
                name: string;
                type: string;
            };
            "50969": {
                name: string;
                type: string;
            };
            "50970": {
                name: string;
                type: string;
            };
            "50971": {
                name: string;
                type: string;
            };
            "50972": {
                name: string;
                type: string;
            };
            "50973": {
                name: string;
                type: string;
            };
            "50974": {
                name: string;
                type: string;
            };
            "50975": {
                name: string;
                type: string;
            };
            "50981": {
                name: string;
                type: string;
            };
            "50982": {
                name: string;
                type: string;
            };
            "51008": {
                name: string;
                type: string;
            };
            "51009": {
                name: string;
                type: string;
            };
            "51022": {
                name: string;
                type: string;
            };
            "512": {
                name: string;
                type: string;
            };
            "513": {
                name: string;
                type: string;
            };
            "514": {
                name: string;
                type: string;
            };
            "515": {
                name: string;
                type: string;
            };
            "517": {
                name: string;
                type: string;
            };
            "518": {
                name: string;
                type: string;
            };
            "519": {
                name: string;
                type: string;
            };
            "520": {
                name: string;
                type: string;
            };
            "521": {
                name: string;
                type: string;
            };
            "529": {
                name: string;
                type: string;
            };
            "530": {
                name: string;
                type: string;
            };
            "531": {
                name: string;
                type: string;
            };
            "532": {
                name: string;
                type: string;
            };
            "700": {
                name: string;
                type: string;
            };
        };
        "1st": {
            "11": {
                name: string;
                type: string;
            };
            "18246": {
                name: string;
                type: string;
            };
            "18249": {
                name: string;
                type: string;
            };
            "254": {
                name: string;
                type: string;
            };
            "255": {
                name: string;
                type: string;
            };
            "256": {
                name: string;
                type: string;
            };
            "257": {
                name: string;
                type: string;
            };
            "258": {
                name: string;
                type: string;
            };
            "259": {
                name: string;
                type: string;
            };
            "262": {
                name: string;
                type: string;
            };
            "263": {
                name: string;
                type: string;
            };
            "264": {
                name: string;
                type: string;
            };
            "265": {
                name: string;
                type: string;
            };
            "266": {
                name: string;
                type: string;
            };
            "269": {
                name: string;
                type: string;
            };
            "270": {
                name: string;
                type: string;
            };
            "271": {
                name: string;
                type: string;
            };
            "272": {
                name: string;
                type: string;
            };
            "273": {
                name: string;
                type: string;
            };
            "274": {
                name: string;
                type: string;
            };
            "277": {
                name: string;
                type: string;
            };
            "278": {
                name: string;
                type: string;
            };
            "279": {
                name: string;
                type: string;
            };
            "282": {
                name: string;
                type: string;
            };
            "283": {
                name: string;
                type: string;
            };
            "284": {
                name: string;
                type: string;
            };
            "290": {
                name: string;
                type: string;
            };
            "291": {
                name: string;
                type: string;
            };
            "292": {
                name: string;
                type: string;
            };
            "293": {
                name: string;
                type: string;
            };
            "296": {
                name: string;
                type: string;
            };
            "301": {
                name: string;
                type: string;
            };
            "305": {
                name: string;
                type: string;
            };
            "306": {
                name: string;
                type: string;
            };
            "315": {
                name: string;
                type: string;
            };
            "316": {
                name: string;
                type: string;
            };
            "317": {
                name: string;
                type: string;
            };
            "318": {
                name: string;
                type: string;
            };
            "319": {
                name: string;
                type: string;
            };
            "320": {
                name: string;
                type: string;
            };
            "321": {
                name: string;
                type: string;
            };
            "322": {
                name: string;
                type: string;
            };
            "323": {
                name: string;
                type: string;
            };
            "324": {
                name: string;
                type: string;
            };
            "325": {
                name: string;
                type: string;
            };
            "32781": {
                name: string;
                type: string;
            };
            "330": {
                name: string;
                type: string;
            };
            "332": {
                name: string;
                type: string;
            };
            "333": {
                name: string;
                type: string;
            };
            "334": {
                name: string;
                type: string;
            };
            "33421": {
                name: string;
                type: string;
            };
            "33422": {
                name: string;
                type: string;
            };
            "33423": {
                name: string;
                type: string;
            };
            "33432": {
                name: string;
                type: string;
            };
            "33434": {
                name: string;
                type: string;
            };
            "336": {
                name: string;
                type: string;
            };
            "337": {
                name: string;
                type: string;
            };
            "338": {
                name: string;
                type: string;
            };
            "339": {
                name: string;
                type: string;
            };
            "340": {
                name: string;
                type: string;
            };
            "341": {
                name: string;
                type: string;
            };
            "342": {
                name: string;
                type: string;
            };
            "343": {
                name: string;
                type: string;
            };
            "34377": {
                name: string;
                type: string;
            };
            "344": {
                name: string;
                type: string;
            };
            "345": {
                name: string;
                type: string;
            };
            "346": {
                name: string;
                type: string;
            };
            "34665": {
                name: string;
                type: string;
            };
            "34675": {
                name: string;
                type: string;
            };
            "347": {
                name: string;
                type: string;
            };
            "34853": {
                name: string;
                type: string;
            };
            "34857": {
                name: string;
                type: string;
            };
            "34858": {
                name: string;
                type: string;
            };
            "34859": {
                name: string;
                type: string;
            };
            "351": {
                name: string;
                type: string;
            };
            "37387": {
                name: string;
                type: string;
            };
            "37388": {
                name: string;
                type: string;
            };
            "37389": {
                name: string;
                type: string;
            };
            "37390": {
                name: string;
                type: string;
            };
            "37391": {
                name: string;
                type: string;
            };
            "37392": {
                name: string;
                type: string;
            };
            "37393": {
                name: string;
                type: string;
            };
            "37394": {
                name: string;
                type: string;
            };
            "37395": {
                name: string;
                type: string;
            };
            "37397": {
                name: string;
                type: string;
            };
            "37398": {
                name: string;
                type: string;
            };
            "37399": {
                name: string;
                type: string;
            };
            "40091": {
                name: string;
                type: string;
            };
            "40092": {
                name: string;
                type: string;
            };
            "40093": {
                name: string;
                type: string;
            };
            "40094": {
                name: string;
                type: string;
            };
            "40095": {
                name: string;
                type: string;
            };
            "50341": {
                name: string;
                type: string;
            };
            "50706": {
                name: string;
                type: string;
            };
            "50707": {
                name: string;
                type: string;
            };
            "50708": {
                name: string;
                type: string;
            };
            "50709": {
                name: string;
                type: string;
            };
            "50710": {
                name: string;
                type: string;
            };
            "50711": {
                name: string;
                type: string;
            };
            "50712": {
                name: string;
                type: string;
            };
            "50713": {
                name: string;
                type: string;
            };
            "50714": {
                name: string;
                type: string;
            };
            "50715": {
                name: string;
                type: string;
            };
            "50716": {
                name: string;
                type: string;
            };
            "50717": {
                name: string;
                type: string;
            };
            "50718": {
                name: string;
                type: string;
            };
            "50719": {
                name: string;
                type: string;
            };
            "50720": {
                name: string;
                type: string;
            };
            "50721": {
                name: string;
                type: string;
            };
            "50722": {
                name: string;
                type: string;
            };
            "50723": {
                name: string;
                type: string;
            };
            "50724": {
                name: string;
                type: string;
            };
            "50725": {
                name: string;
                type: string;
            };
            "50726": {
                name: string;
                type: string;
            };
            "50727": {
                name: string;
                type: string;
            };
            "50728": {
                name: string;
                type: string;
            };
            "50729": {
                name: string;
                type: string;
            };
            "50730": {
                name: string;
                type: string;
            };
            "50731": {
                name: string;
                type: string;
            };
            "50732": {
                name: string;
                type: string;
            };
            "50733": {
                name: string;
                type: string;
            };
            "50734": {
                name: string;
                type: string;
            };
            "50735": {
                name: string;
                type: string;
            };
            "50736": {
                name: string;
                type: string;
            };
            "50737": {
                name: string;
                type: string;
            };
            "50738": {
                name: string;
                type: string;
            };
            "50739": {
                name: string;
                type: string;
            };
            "50740": {
                name: string;
                type: string;
            };
            "50741": {
                name: string;
                type: string;
            };
            "50778": {
                name: string;
                type: string;
            };
            "50779": {
                name: string;
                type: string;
            };
            "50780": {
                name: string;
                type: string;
            };
            "50781": {
                name: string;
                type: string;
            };
            "50827": {
                name: string;
                type: string;
            };
            "50828": {
                name: string;
                type: string;
            };
            "50829": {
                name: string;
                type: string;
            };
            "50830": {
                name: string;
                type: string;
            };
            "50831": {
                name: string;
                type: string;
            };
            "50832": {
                name: string;
                type: string;
            };
            "50833": {
                name: string;
                type: string;
            };
            "50834": {
                name: string;
                type: string;
            };
            "50879": {
                name: string;
                type: string;
            };
            "50931": {
                name: string;
                type: string;
            };
            "50932": {
                name: string;
                type: string;
            };
            "50934": {
                name: string;
                type: string;
            };
            "50935": {
                name: string;
                type: string;
            };
            "50936": {
                name: string;
                type: string;
            };
            "50937": {
                name: string;
                type: string;
            };
            "50938": {
                name: string;
                type: string;
            };
            "50939": {
                name: string;
                type: string;
            };
            "50940": {
                name: string;
                type: string;
            };
            "50941": {
                name: string;
                type: string;
            };
            "50942": {
                name: string;
                type: string;
            };
            "50964": {
                name: string;
                type: string;
            };
            "50965": {
                name: string;
                type: string;
            };
            "50966": {
                name: string;
                type: string;
            };
            "50967": {
                name: string;
                type: string;
            };
            "50968": {
                name: string;
                type: string;
            };
            "50969": {
                name: string;
                type: string;
            };
            "50970": {
                name: string;
                type: string;
            };
            "50971": {
                name: string;
                type: string;
            };
            "50972": {
                name: string;
                type: string;
            };
            "50973": {
                name: string;
                type: string;
            };
            "50974": {
                name: string;
                type: string;
            };
            "50975": {
                name: string;
                type: string;
            };
            "50981": {
                name: string;
                type: string;
            };
            "50982": {
                name: string;
                type: string;
            };
            "51008": {
                name: string;
                type: string;
            };
            "51009": {
                name: string;
                type: string;
            };
            "51022": {
                name: string;
                type: string;
            };
            "512": {
                name: string;
                type: string;
            };
            "513": {
                name: string;
                type: string;
            };
            "514": {
                name: string;
                type: string;
            };
            "515": {
                name: string;
                type: string;
            };
            "517": {
                name: string;
                type: string;
            };
            "518": {
                name: string;
                type: string;
            };
            "519": {
                name: string;
                type: string;
            };
            "520": {
                name: string;
                type: string;
            };
            "521": {
                name: string;
                type: string;
            };
            "529": {
                name: string;
                type: string;
            };
            "530": {
                name: string;
                type: string;
            };
            "531": {
                name: string;
                type: string;
            };
            "532": {
                name: string;
                type: string;
            };
            "700": {
                name: string;
                type: string;
            };
        };
        Exif: {
            "33434": {
                name: string;
                type: string;
            };
            "33437": {
                name: string;
                type: string;
            };
            "34850": {
                name: string;
                type: string;
            };
            "34852": {
                name: string;
                type: string;
            };
            "34855": {
                name: string;
                type: string;
            };
            "34856": {
                name: string;
                type: string;
            };
            "34864": {
                name: string;
                type: string;
            };
            "34865": {
                name: string;
                type: string;
            };
            "34866": {
                name: string;
                type: string;
            };
            "34867": {
                name: string;
                type: string;
            };
            "34868": {
                name: string;
                type: string;
            };
            "34869": {
                name: string;
                type: string;
            };
            "36864": {
                name: string;
                type: string;
            };
            "36867": {
                name: string;
                type: string;
            };
            "36868": {
                name: string;
                type: string;
            };
            "37121": {
                name: string;
                type: string;
            };
            "37122": {
                name: string;
                type: string;
            };
            "37377": {
                name: string;
                type: string;
            };
            "37378": {
                name: string;
                type: string;
            };
            "37379": {
                name: string;
                type: string;
            };
            "37380": {
                name: string;
                type: string;
            };
            "37381": {
                name: string;
                type: string;
            };
            "37382": {
                name: string;
                type: string;
            };
            "37383": {
                name: string;
                type: string;
            };
            "37384": {
                name: string;
                type: string;
            };
            "37385": {
                name: string;
                type: string;
            };
            "37386": {
                name: string;
                type: string;
            };
            "37396": {
                name: string;
                type: string;
            };
            "37500": {
                name: string;
                type: string;
            };
            "37510": {
                name: string;
                type: string;
            };
            "37520": {
                name: string;
                type: string;
            };
            "37521": {
                name: string;
                type: string;
            };
            "37522": {
                name: string;
                type: string;
            };
            "40960": {
                name: string;
                type: string;
            };
            "40961": {
                name: string;
                type: string;
            };
            "40962": {
                name: string;
                type: string;
            };
            "40963": {
                name: string;
                type: string;
            };
            "40964": {
                name: string;
                type: string;
            };
            "40965": {
                name: string;
                type: string;
            };
            "41483": {
                name: string;
                type: string;
            };
            "41484": {
                name: string;
                type: string;
            };
            "41486": {
                name: string;
                type: string;
            };
            "41487": {
                name: string;
                type: string;
            };
            "41488": {
                name: string;
                type: string;
            };
            "41492": {
                name: string;
                type: string;
            };
            "41493": {
                name: string;
                type: string;
            };
            "41495": {
                name: string;
                type: string;
            };
            "41728": {
                name: string;
                type: string;
            };
            "41729": {
                name: string;
                type: string;
            };
            "41730": {
                name: string;
                type: string;
            };
            "41985": {
                name: string;
                type: string;
            };
            "41986": {
                name: string;
                type: string;
            };
            "41987": {
                name: string;
                type: string;
            };
            "41988": {
                name: string;
                type: string;
            };
            "41989": {
                name: string;
                type: string;
            };
            "41990": {
                name: string;
                type: string;
            };
            "41991": {
                name: string;
                type: string;
            };
            "41992": {
                name: string;
                type: string;
            };
            "41993": {
                name: string;
                type: string;
            };
            "41994": {
                name: string;
                type: string;
            };
            "41995": {
                name: string;
                type: string;
            };
            "41996": {
                name: string;
                type: string;
            };
            "42016": {
                name: string;
                type: string;
            };
            "42032": {
                name: string;
                type: string;
            };
            "42033": {
                name: string;
                type: string;
            };
            "42034": {
                name: string;
                type: string;
            };
            "42035": {
                name: string;
                type: string;
            };
            "42036": {
                name: string;
                type: string;
            };
            "42037": {
                name: string;
                type: string;
            };
            "42240": {
                name: string;
                type: string;
            };
        };
        GPS: {
            "0": {
                name: string;
                type: string;
            };
            "1": {
                name: string;
                type: string;
            };
            "10": {
                name: string;
                type: string;
            };
            "11": {
                name: string;
                type: string;
            };
            "12": {
                name: string;
                type: string;
            };
            "13": {
                name: string;
                type: string;
            };
            "14": {
                name: string;
                type: string;
            };
            "15": {
                name: string;
                type: string;
            };
            "16": {
                name: string;
                type: string;
            };
            "17": {
                name: string;
                type: string;
            };
            "18": {
                name: string;
                type: string;
            };
            "19": {
                name: string;
                type: string;
            };
            "2": {
                name: string;
                type: string;
            };
            "20": {
                name: string;
                type: string;
            };
            "21": {
                name: string;
                type: string;
            };
            "22": {
                name: string;
                type: string;
            };
            "23": {
                name: string;
                type: string;
            };
            "24": {
                name: string;
                type: string;
            };
            "25": {
                name: string;
                type: string;
            };
            "26": {
                name: string;
                type: string;
            };
            "27": {
                name: string;
                type: string;
            };
            "28": {
                name: string;
                type: string;
            };
            "29": {
                name: string;
                type: string;
            };
            "3": {
                name: string;
                type: string;
            };
            "30": {
                name: string;
                type: string;
            };
            "31": {
                name: string;
                type: string;
            };
            "4": {
                name: string;
                type: string;
            };
            "5": {
                name: string;
                type: string;
            };
            "6": {
                name: string;
                type: string;
            };
            "7": {
                name: string;
                type: string;
            };
            "8": {
                name: string;
                type: string;
            };
            "9": {
                name: string;
                type: string;
            };
        };
        Image: {
            "11": {
                name: string;
                type: string;
            };
            "18246": {
                name: string;
                type: string;
            };
            "18249": {
                name: string;
                type: string;
            };
            "254": {
                name: string;
                type: string;
            };
            "255": {
                name: string;
                type: string;
            };
            "256": {
                name: string;
                type: string;
            };
            "257": {
                name: string;
                type: string;
            };
            "258": {
                name: string;
                type: string;
            };
            "259": {
                name: string;
                type: string;
            };
            "262": {
                name: string;
                type: string;
            };
            "263": {
                name: string;
                type: string;
            };
            "264": {
                name: string;
                type: string;
            };
            "265": {
                name: string;
                type: string;
            };
            "266": {
                name: string;
                type: string;
            };
            "269": {
                name: string;
                type: string;
            };
            "270": {
                name: string;
                type: string;
            };
            "271": {
                name: string;
                type: string;
            };
            "272": {
                name: string;
                type: string;
            };
            "273": {
                name: string;
                type: string;
            };
            "274": {
                name: string;
                type: string;
            };
            "277": {
                name: string;
                type: string;
            };
            "278": {
                name: string;
                type: string;
            };
            "279": {
                name: string;
                type: string;
            };
            "282": {
                name: string;
                type: string;
            };
            "283": {
                name: string;
                type: string;
            };
            "284": {
                name: string;
                type: string;
            };
            "290": {
                name: string;
                type: string;
            };
            "291": {
                name: string;
                type: string;
            };
            "292": {
                name: string;
                type: string;
            };
            "293": {
                name: string;
                type: string;
            };
            "296": {
                name: string;
                type: string;
            };
            "301": {
                name: string;
                type: string;
            };
            "305": {
                name: string;
                type: string;
            };
            "306": {
                name: string;
                type: string;
            };
            "315": {
                name: string;
                type: string;
            };
            "316": {
                name: string;
                type: string;
            };
            "317": {
                name: string;
                type: string;
            };
            "318": {
                name: string;
                type: string;
            };
            "319": {
                name: string;
                type: string;
            };
            "320": {
                name: string;
                type: string;
            };
            "321": {
                name: string;
                type: string;
            };
            "322": {
                name: string;
                type: string;
            };
            "323": {
                name: string;
                type: string;
            };
            "324": {
                name: string;
                type: string;
            };
            "325": {
                name: string;
                type: string;
            };
            "32781": {
                name: string;
                type: string;
            };
            "330": {
                name: string;
                type: string;
            };
            "332": {
                name: string;
                type: string;
            };
            "333": {
                name: string;
                type: string;
            };
            "334": {
                name: string;
                type: string;
            };
            "33421": {
                name: string;
                type: string;
            };
            "33422": {
                name: string;
                type: string;
            };
            "33423": {
                name: string;
                type: string;
            };
            "33432": {
                name: string;
                type: string;
            };
            "33434": {
                name: string;
                type: string;
            };
            "336": {
                name: string;
                type: string;
            };
            "337": {
                name: string;
                type: string;
            };
            "338": {
                name: string;
                type: string;
            };
            "339": {
                name: string;
                type: string;
            };
            "340": {
                name: string;
                type: string;
            };
            "341": {
                name: string;
                type: string;
            };
            "342": {
                name: string;
                type: string;
            };
            "343": {
                name: string;
                type: string;
            };
            "34377": {
                name: string;
                type: string;
            };
            "344": {
                name: string;
                type: string;
            };
            "345": {
                name: string;
                type: string;
            };
            "346": {
                name: string;
                type: string;
            };
            "34665": {
                name: string;
                type: string;
            };
            "34675": {
                name: string;
                type: string;
            };
            "347": {
                name: string;
                type: string;
            };
            "34853": {
                name: string;
                type: string;
            };
            "34857": {
                name: string;
                type: string;
            };
            "34858": {
                name: string;
                type: string;
            };
            "34859": {
                name: string;
                type: string;
            };
            "351": {
                name: string;
                type: string;
            };
            "37387": {
                name: string;
                type: string;
            };
            "37388": {
                name: string;
                type: string;
            };
            "37389": {
                name: string;
                type: string;
            };
            "37390": {
                name: string;
                type: string;
            };
            "37391": {
                name: string;
                type: string;
            };
            "37392": {
                name: string;
                type: string;
            };
            "37393": {
                name: string;
                type: string;
            };
            "37394": {
                name: string;
                type: string;
            };
            "37395": {
                name: string;
                type: string;
            };
            "37397": {
                name: string;
                type: string;
            };
            "37398": {
                name: string;
                type: string;
            };
            "37399": {
                name: string;
                type: string;
            };
            "40091": {
                name: string;
                type: string;
            };
            "40092": {
                name: string;
                type: string;
            };
            "40093": {
                name: string;
                type: string;
            };
            "40094": {
                name: string;
                type: string;
            };
            "40095": {
                name: string;
                type: string;
            };
            "50341": {
                name: string;
                type: string;
            };
            "50706": {
                name: string;
                type: string;
            };
            "50707": {
                name: string;
                type: string;
            };
            "50708": {
                name: string;
                type: string;
            };
            "50709": {
                name: string;
                type: string;
            };
            "50710": {
                name: string;
                type: string;
            };
            "50711": {
                name: string;
                type: string;
            };
            "50712": {
                name: string;
                type: string;
            };
            "50713": {
                name: string;
                type: string;
            };
            "50714": {
                name: string;
                type: string;
            };
            "50715": {
                name: string;
                type: string;
            };
            "50716": {
                name: string;
                type: string;
            };
            "50717": {
                name: string;
                type: string;
            };
            "50718": {
                name: string;
                type: string;
            };
            "50719": {
                name: string;
                type: string;
            };
            "50720": {
                name: string;
                type: string;
            };
            "50721": {
                name: string;
                type: string;
            };
            "50722": {
                name: string;
                type: string;
            };
            "50723": {
                name: string;
                type: string;
            };
            "50724": {
                name: string;
                type: string;
            };
            "50725": {
                name: string;
                type: string;
            };
            "50726": {
                name: string;
                type: string;
            };
            "50727": {
                name: string;
                type: string;
            };
            "50728": {
                name: string;
                type: string;
            };
            "50729": {
                name: string;
                type: string;
            };
            "50730": {
                name: string;
                type: string;
            };
            "50731": {
                name: string;
                type: string;
            };
            "50732": {
                name: string;
                type: string;
            };
            "50733": {
                name: string;
                type: string;
            };
            "50734": {
                name: string;
                type: string;
            };
            "50735": {
                name: string;
                type: string;
            };
            "50736": {
                name: string;
                type: string;
            };
            "50737": {
                name: string;
                type: string;
            };
            "50738": {
                name: string;
                type: string;
            };
            "50739": {
                name: string;
                type: string;
            };
            "50740": {
                name: string;
                type: string;
            };
            "50741": {
                name: string;
                type: string;
            };
            "50778": {
                name: string;
                type: string;
            };
            "50779": {
                name: string;
                type: string;
            };
            "50780": {
                name: string;
                type: string;
            };
            "50781": {
                name: string;
                type: string;
            };
            "50827": {
                name: string;
                type: string;
            };
            "50828": {
                name: string;
                type: string;
            };
            "50829": {
                name: string;
                type: string;
            };
            "50830": {
                name: string;
                type: string;
            };
            "50831": {
                name: string;
                type: string;
            };
            "50832": {
                name: string;
                type: string;
            };
            "50833": {
                name: string;
                type: string;
            };
            "50834": {
                name: string;
                type: string;
            };
            "50879": {
                name: string;
                type: string;
            };
            "50931": {
                name: string;
                type: string;
            };
            "50932": {
                name: string;
                type: string;
            };
            "50934": {
                name: string;
                type: string;
            };
            "50935": {
                name: string;
                type: string;
            };
            "50936": {
                name: string;
                type: string;
            };
            "50937": {
                name: string;
                type: string;
            };
            "50938": {
                name: string;
                type: string;
            };
            "50939": {
                name: string;
                type: string;
            };
            "50940": {
                name: string;
                type: string;
            };
            "50941": {
                name: string;
                type: string;
            };
            "50942": {
                name: string;
                type: string;
            };
            "50964": {
                name: string;
                type: string;
            };
            "50965": {
                name: string;
                type: string;
            };
            "50966": {
                name: string;
                type: string;
            };
            "50967": {
                name: string;
                type: string;
            };
            "50968": {
                name: string;
                type: string;
            };
            "50969": {
                name: string;
                type: string;
            };
            "50970": {
                name: string;
                type: string;
            };
            "50971": {
                name: string;
                type: string;
            };
            "50972": {
                name: string;
                type: string;
            };
            "50973": {
                name: string;
                type: string;
            };
            "50974": {
                name: string;
                type: string;
            };
            "50975": {
                name: string;
                type: string;
            };
            "50981": {
                name: string;
                type: string;
            };
            "50982": {
                name: string;
                type: string;
            };
            "51008": {
                name: string;
                type: string;
            };
            "51009": {
                name: string;
                type: string;
            };
            "51022": {
                name: string;
                type: string;
            };
            "512": {
                name: string;
                type: string;
            };
            "513": {
                name: string;
                type: string;
            };
            "514": {
                name: string;
                type: string;
            };
            "515": {
                name: string;
                type: string;
            };
            "517": {
                name: string;
                type: string;
            };
            "518": {
                name: string;
                type: string;
            };
            "519": {
                name: string;
                type: string;
            };
            "520": {
                name: string;
                type: string;
            };
            "521": {
                name: string;
                type: string;
            };
            "529": {
                name: string;
                type: string;
            };
            "530": {
                name: string;
                type: string;
            };
            "531": {
                name: string;
                type: string;
            };
            "532": {
                name: string;
                type: string;
            };
            "700": {
                name: string;
                type: string;
            };
        };
        Interop: {
            "1": {
                name: string;
                type: string;
            };
        };
    }
}
