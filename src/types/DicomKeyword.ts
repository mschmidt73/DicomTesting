/******************************
 * Generated File: Do not edit
 *****************************/
export type DicomKeyword = 
  // Command Group Length / 00000000 / UL
  "CommandGroupLength" |
  // Affected SOP Class UID / 00000002 / UI
  "AffectedSOPClassUID" |
  // Requested SOP Class UID / 00000003 / UI
  "RequestedSOPClassUID" |
  // Command Field / 00000100 / US
  "CommandField" |
  // Message ID / 00000110 / US
  "MessageID" |
  // Message ID Being Responded To / 00000120 / US
  "MessageIDBeingRespondedTo" |
  // Move Destination / 00000600 / AE
  "MoveDestination" |
  // Priority / 00000700 / US
  "Priority" |
  // Command Data Set Type / 00000800 / US
  "CommandDataSetType" |
  // Status / 00000900 / US
  "Status" |
  // Offending Element / 00000901 / AT
  "OffendingElement" |
  // Error Comment / 00000902 / LO
  "ErrorComment" |
  // Error ID / 00000903 / US
  "ErrorID" |
  // Affected SOP Instance UID / 00001000 / UI
  "AffectedSOPInstanceUID" |
  // Requested SOP Instance UID / 00001001 / UI
  "RequestedSOPInstanceUID" |
  // Event Type ID / 00001002 / US
  "EventTypeID" |
  // Attribute Identifier List / 00001005 / AT
  "AttributeIdentifierList" |
  // Action Type ID / 00001008 / US
  "ActionTypeID" |
  // Number of Remaining Sub-operations / 00001020 / US
  "NumberOfRemainingSuboperations" |
  // Number of Completed Sub-operations / 00001021 / US
  "NumberOfCompletedSuboperations" |
  // Number of Failed Sub-operations / 00001022 / US
  "NumberOfFailedSuboperations" |
  // Number of Warning Sub-operations / 00001023 / US
  "NumberOfWarningSuboperations" |
  // Move Originator Application Entity Title / 00001030 / AE
  "MoveOriginatorApplicationEntityTitle" |
  // Move Originator Message ID / 00001031 / US
  "MoveOriginatorMessageID" |
  // Command Length to End / 00000001 / UL
  "CommandLengthToEnd" |
  // Command Recognition Code / 00000010 / SH
  "CommandRecognitionCode" |
  // Initiator / 00000200 / AE
  "Initiator" |
  // Receiver / 00000300 / AE
  "Receiver" |
  // Find Location / 00000400 / AE
  "FindLocation" |
  // Number of Matches / 00000850 / US
  "NumberOfMatches" |
  // Response Sequence Number / 00000860 / US
  "ResponseSequenceNumber" |
  // Dialog Receiver / 00004000 / LT
  "DialogReceiver" |
  // Terminal Type / 00004010 / LT
  "TerminalType" |
  // Message Set ID / 00005010 / SH
  "MessageSetID" |
  // End Message ID / 00005020 / SH
  "EndMessageID" |
  // Display Format / 00005110 / LT
  "DisplayFormat" |
  // Page Position ID / 00005120 / LT
  "PagePositionID" |
  // Text Format ID / 00005130 / CS
  "TextFormatID" |
  // Normal/Reverse / 00005140 / CS
  "NormalReverse" |
  // Add Gray Scale / 00005150 / CS
  "AddGrayScale" |
  // Borders / 00005160 / CS
  "Borders" |
  // Copies / 00005170 / IS
  "Copies" |
  // Command Magnification Type / 00005180 / CS
  "CommandMagnificationType" |
  // Erase / 00005190 / CS
  "Erase" |
  // Print / 000051A0 / CS
  "Print" |
  // Overlays / 000051B0 / US
  "Overlays" |
  // File Meta Information Group Length / 00020000 / UL
  "FileMetaInformationGroupLength" |
  // File Meta Information Version / 00020001 / OB
  "FileMetaInformationVersion" |
  // Media Storage SOP Class UID / 00020002 / UI
  "MediaStorageSOPClassUID" |
  // Media Storage SOP Instance UID / 00020003 / UI
  "MediaStorageSOPInstanceUID" |
  // Transfer Syntax UID / 00020010 / UI
  "TransferSyntaxUID" |
  // Implementation Class UID / 00020012 / UI
  "ImplementationClassUID" |
  // Implementation Version Name / 00020013 / SH
  "ImplementationVersionName" |
  // Source Application Entity Title / 00020016 / AE
  "SourceApplicationEntityTitle" |
  // Sending Application Entity Title / 00020017 / AE
  "SendingApplicationEntityTitle" |
  // Receiving Application Entity Title / 00020018 / AE
  "ReceivingApplicationEntityTitle" |
  // Source Presentation Address / 00020026 / UR
  "SourcePresentationAddress" |
  // Sending Presentation Address / 00020027 / UR
  "SendingPresentationAddress" |
  // Receiving Presentation Address / 00020028 / UR
  "ReceivingPresentationAddress" |
  // RTV Meta Information Version / 00020031 / OB
  "RTVMetaInformationVersion" |
  // RTV Communication SOP Class UID / 00020032 / UI
  "RTVCommunicationSOPClassUID" |
  // RTV Communication SOP Instance UID / 00020033 / UI
  "RTVCommunicationSOPInstanceUID" |
  // RTV Source Identifier / 00020035 / OB
  "RTVSourceIdentifier" |
  // RTV Flow Identifier / 00020036 / OB
  "RTVFlowIdentifier" |
  // RTV Flow RTP Sampling Rate / 00020037 / UL
  "RTVFlowRTPSamplingRate" |
  // RTV Flow Actual Frame Duration / 00020038 / FD
  "RTVFlowActualFrameDuration" |
  // Private Information Creator UID / 00020100 / UI
  "PrivateInformationCreatorUID" |
  // Private Information / 00020102 / OB
  "PrivateInformation" |
  // File-set ID / 00041130 / CS
  "FileSetID" |
  // File-set Descriptor File ID / 00041141 / CS
  "FileSetDescriptorFileID" |
  // Specific Character Set of File-set Descriptor File / 00041142 / CS
  "SpecificCharacterSetOfFileSetDescriptorFile" |
  // Offset of the First Directory Record of the Root Directory Entity / 00041200 / UL
  "OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity" |
  // Offset of the Last Directory Record of the Root Directory Entity / 00041202 / UL
  "OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity" |
  // File-set Consistency Flag / 00041212 / US
  "FileSetConsistencyFlag" |
  // Directory Record Sequence / 00041220 / SQ
  "DirectoryRecordSequence" |
  // Offset of the Next Directory Record / 00041400 / UL
  "OffsetOfTheNextDirectoryRecord" |
  // Record In-use Flag / 00041410 / US
  "RecordInUseFlag" |
  // Offset of Referenced Lower-Level Directory Entity / 00041420 / UL
  "OffsetOfReferencedLowerLevelDirectoryEntity" |
  // Directory Record Type / 00041430 / CS
  "DirectoryRecordType" |
  // Private Record UID / 00041432 / UI
  "PrivateRecordUID" |
  // Referenced File ID / 00041500 / CS
  "ReferencedFileID" |
  // MRDR Directory Record Offset / 00041504 / UL
  "MRDRDirectoryRecordOffset" |
  // Referenced SOP Class UID in File / 00041510 / UI
  "ReferencedSOPClassUIDInFile" |
  // Referenced SOP Instance UID in File / 00041511 / UI
  "ReferencedSOPInstanceUIDInFile" |
  // Referenced Transfer Syntax UID in File / 00041512 / UI
  "ReferencedTransferSyntaxUIDInFile" |
  // Referenced Related General SOP Class UID in File / 0004151A / UI
  "ReferencedRelatedGeneralSOPClassUIDInFile" |
  // Number of References / 00041600 / UL
  "NumberOfReferences" |
  // Length to End / 00080001 / UL
  "LengthToEnd" |
  // Specific Character Set / 00080005 / CS
  "SpecificCharacterSet" |
  // Language Code Sequence / 00080006 / SQ
  "LanguageCodeSequence" |
  // Image Type / 00080008 / CS
  "ImageType" |
  // Recognition Code / 00080010 / SH
  "RecognitionCode" |
  // Instance Creation Date / 00080012 / DA
  "InstanceCreationDate" |
  // Instance Creation Time / 00080013 / TM
  "InstanceCreationTime" |
  // Instance Creator UID / 00080014 / UI
  "InstanceCreatorUID" |
  // Instance Coercion DateTime / 00080015 / DT
  "InstanceCoercionDateTime" |
  // SOP Class UID / 00080016 / UI
  "SOPClassUID" |
  // Acquisition UID / 00080017 / UI
  "AcquisitionUID" |
  // SOP Instance UID / 00080018 / UI
  "SOPInstanceUID" |
  // Pyramid UID / 00080019 / UI
  "PyramidUID" |
  // Related General SOP Class UID / 0008001A / UI
  "RelatedGeneralSOPClassUID" |
  // Original Specialized SOP Class UID / 0008001B / UI
  "OriginalSpecializedSOPClassUID" |
  // Study Date / 00080020 / DA
  "StudyDate" |
  // Series Date / 00080021 / DA
  "SeriesDate" |
  // Acquisition Date / 00080022 / DA
  "AcquisitionDate" |
  // Content Date / 00080023 / DA
  "ContentDate" |
  // Overlay Date / 00080024 / DA
  "OverlayDate" |
  // Curve Date / 00080025 / DA
  "CurveDate" |
  // Acquisition DateTime / 0008002A / DT
  "AcquisitionDateTime" |
  // Study Time / 00080030 / TM
  "StudyTime" |
  // Series Time / 00080031 / TM
  "SeriesTime" |
  // Acquisition Time / 00080032 / TM
  "AcquisitionTime" |
  // Content Time / 00080033 / TM
  "ContentTime" |
  // Overlay Time / 00080034 / TM
  "OverlayTime" |
  // Curve Time / 00080035 / TM
  "CurveTime" |
  // Data Set Type / 00080040 / US
  "DataSetType" |
  // Data Set Subtype / 00080041 / LO
  "DataSetSubtype" |
  // Nuclear Medicine Series Type / 00080042 / CS
  "NuclearMedicineSeriesType" |
  // Accession Number / 00080050 / SH
  "AccessionNumber" |
  // Issuer of Accession Number Sequence / 00080051 / SQ
  "IssuerOfAccessionNumberSequence" |
  // Query/Retrieve Level / 00080052 / CS
  "QueryRetrieveLevel" |
  // Query/Retrieve View / 00080053 / CS
  "QueryRetrieveView" |
  // Retrieve AE Title / 00080054 / AE
  "RetrieveAETitle" |
  // Station AE Title / 00080055 / AE
  "StationAETitle" |
  // Instance Availability / 00080056 / CS
  "InstanceAvailability" |
  // Failed SOP Instance UID List / 00080058 / UI
  "FailedSOPInstanceUIDList" |
  // Modality / 00080060 / CS
  "Modality" |
  // Modalities in Study / 00080061 / CS
  "ModalitiesInStudy" |
  // SOP Classes in Study / 00080062 / UI
  "SOPClassesInStudy" |
  // Anatomic Regions in Study Code Sequence / 00080063 / SQ
  "AnatomicRegionsInStudyCodeSequence" |
  // Conversion Type / 00080064 / CS
  "ConversionType" |
  // Presentation Intent Type / 00080068 / CS
  "PresentationIntentType" |
  // Manufacturer / 00080070 / LO
  "Manufacturer" |
  // Institution Name / 00080080 / LO
  "InstitutionName" |
  // Institution Address / 00080081 / ST
  "InstitutionAddress" |
  // Institution Code Sequence / 00080082 / SQ
  "InstitutionCodeSequence" |
  // Referring Physician's Name / 00080090 / PN
  "ReferringPhysicianName" |
  // Referring Physician's Address / 00080092 / ST
  "ReferringPhysicianAddress" |
  // Referring Physician's Telephone Numbers / 00080094 / SH
  "ReferringPhysicianTelephoneNumbers" |
  // Referring Physician Identification Sequence / 00080096 / SQ
  "ReferringPhysicianIdentificationSequence" |
  // Consulting Physician's Name / 0008009C / PN
  "ConsultingPhysicianName" |
  // Consulting Physician Identification Sequence / 0008009D / SQ
  "ConsultingPhysicianIdentificationSequence" |
  // Code Value / 00080100 / SH
  "CodeValue" |
  // Extended Code Value / 00080101 / LO
  "ExtendedCodeValue" |
  // Coding Scheme Designator / 00080102 / SH
  "CodingSchemeDesignator" |
  // Coding Scheme Version / 00080103 / SH
  "CodingSchemeVersion" |
  // Code Meaning / 00080104 / LO
  "CodeMeaning" |
  // Mapping Resource / 00080105 / CS
  "MappingResource" |
  // Context Group Version / 00080106 / DT
  "ContextGroupVersion" |
  // Context Group Local Version / 00080107 / DT
  "ContextGroupLocalVersion" |
  // Extended Code Meaning / 00080108 / LT
  "ExtendedCodeMeaning" |
  // Coding Scheme Resources Sequence / 00080109 / SQ
  "CodingSchemeResourcesSequence" |
  // Coding Scheme URL Type / 0008010A / CS
  "CodingSchemeURLType" |
  // Context Group Extension Flag / 0008010B / CS
  "ContextGroupExtensionFlag" |
  // Coding Scheme UID / 0008010C / UI
  "CodingSchemeUID" |
  // Context Group Extension Creator UID / 0008010D / UI
  "ContextGroupExtensionCreatorUID" |
  // Coding Scheme URL / 0008010E / UR
  "CodingSchemeURL" |
  // Context Identifier / 0008010F / CS
  "ContextIdentifier" |
  // Coding Scheme Identification Sequence / 00080110 / SQ
  "CodingSchemeIdentificationSequence" |
  // Coding Scheme Registry / 00080112 / LO
  "CodingSchemeRegistry" |
  // Coding Scheme External ID / 00080114 / ST
  "CodingSchemeExternalID" |
  // Coding Scheme Name / 00080115 / ST
  "CodingSchemeName" |
  // Coding Scheme Responsible Organization / 00080116 / ST
  "CodingSchemeResponsibleOrganization" |
  // Context UID / 00080117 / UI
  "ContextUID" |
  // Mapping Resource UID / 00080118 / UI
  "MappingResourceUID" |
  // Long Code Value / 00080119 / UC
  "LongCodeValue" |
  // URN Code Value / 00080120 / UR
  "URNCodeValue" |
  // Equivalent Code Sequence / 00080121 / SQ
  "EquivalentCodeSequence" |
  // Mapping Resource Name / 00080122 / LO
  "MappingResourceName" |
  // Context Group Identification Sequence / 00080123 / SQ
  "ContextGroupIdentificationSequence" |
  // Mapping Resource Identification Sequence / 00080124 / SQ
  "MappingResourceIdentificationSequence" |
  // Timezone Offset From UTC / 00080201 / SH
  "TimezoneOffsetFromUTC" |
  // Responsible Group Code Sequence / 00080220 / SQ
  "ResponsibleGroupCodeSequence" |
  // Equipment Modality / 00080221 / CS
  "EquipmentModality" |
  // Manufacturer's Related Model Group / 00080222 / LO
  "ManufacturerRelatedModelGroup" |
  // Private Data Element Characteristics Sequence / 00080300 / SQ
  "PrivateDataElementCharacteristicsSequence" |
  // Private Group Reference / 00080301 / US
  "PrivateGroupReference" |
  // Private Creator Reference / 00080302 / LO
  "PrivateCreatorReference" |
  // Block Identifying Information Status / 00080303 / CS
  "BlockIdentifyingInformationStatus" |
  // Nonidentifying Private Elements / 00080304 / US
  "NonidentifyingPrivateElements" |
  // Identifying Private Elements / 00080306 / US
  "IdentifyingPrivateElements" |
  // Deidentification Action Sequence / 00080305 / SQ
  "DeidentificationActionSequence" |
  // Deidentification Action / 00080307 / CS
  "DeidentificationAction" |
  // Private Data Element / 00080308 / US
  "PrivateDataElement" |
  // Private Data Element Value Multiplicity / 00080309 / UL
  "PrivateDataElementValueMultiplicity" |
  // Private Data Element Value Representation / 0008030A / CS
  "PrivateDataElementValueRepresentation" |
  // Private Data Element Number of Items / 0008030B / UL
  "PrivateDataElementNumberOfItems" |
  // Private Data Element Name / 0008030C / UC
  "PrivateDataElementName" |
  // Private Data Element Keyword / 0008030D / UC
  "PrivateDataElementKeyword" |
  // Private Data Element Description / 0008030E / UT
  "PrivateDataElementDescription" |
  // Private Data Element Encoding / 0008030F / UT
  "PrivateDataElementEncoding" |
  // Private Data Element Definition Sequence / 00080310 / SQ
  "PrivateDataElementDefinitionSequence" |
  // Scope of Inventory Sequence / 00080400 / SQ
  "ScopeOfInventorySequence" |
  // Inventory Purpose / 00080401 / LT
  "InventoryPurpose" |
  // Inventory Instance Description / 00080402 / LT
  "InventoryInstanceDescription" |
  // Inventory Level / 00080403 / CS
  "InventoryContentLevel" |
  // Item Inventory DateTime / 00080404 / DT
  "ItemInventoryDateTime" |
  // Removed from Operational Use / 00080405 / CS
  "RemovedFromOperationalUse" |
  // Reason for Removal Code Sequence / 00080406 / SQ
  "ReasonForRemovalCodeSequence" |
  // Stored Instance Base URI / 00080407 / UR
  "StoredInstanceBaseURI" |
  // Folder Access URI / 00080408 / UR
  "FolderAccessURI" |
  // File Access URI / 00080409 / UR
  "FileAccessURI" |
  // Container File Type / 0008040A / CS
  "ContainerFileType" |
  // Filename in Container / 0008040B / UR
  "FilenameInContainer" |
  // File Offset in Container / 0008040C / UV
  "FileOffsetInContainer" |
  // File Length in Container / 0008040D / UV
  "FileLengthInContainer" |
  // Stored Instance Transfer Syntax UID / 0008040E / UI
  "StoredInstanceTransferSyntaxUID" |
  // Extended Matching Mechanisms / 0008040F / CS
  "ExtendedMatchingMechanisms" |
  // Range Matching Sequence / 00080410 / SQ
  "RangeMatchingSequence" |
  // List of UID Matching Sequence / 00080411 / SQ
  "UIDListMatchingSequence" |
  // Empty Value Matching Sequence / 00080412 / SQ
  "EmptyValueMatchingSequence" |
  // General Matching Sequence / 00080413 / SQ
  "GeneralMatchingSequence" |
  // Requested Status Interval / 00080414 / US
  "RequestedStatusInterval" |
  // Retain Instances / 00080415 / CS
  "RetainInstances" |
  // Expiration DateTime / 00080416 / DT
  "ExpirationDateTime" |
  // Transaction Status / 00080417 / CS
  "TransactionStatus" |
  // Transaction Status Comment / 00080418 / LT
  "TransactionStatusComment" |
  // File Set Access Sequence / 00080419 / SQ
  "FileSetAccessSequence" |
  // File Access Sequence / 0008041A / SQ
  "FileAccessSequence" |
  // Record Key / 0008041B / OB
  "RecordKey" |
  // Prior Record Key / 0008041C / OB
  "PriorRecordKey" |
  // Metadata Sequence / 0008041D / SQ
  "MetadataSequence" |
  // Updated Metadata Sequence / 0008041E / SQ
  "UpdatedMetadataSequence" |
  // Study Update DateTime / 0008041F / DT
  "StudyUpdateDateTime" |
  // Inventory Access End Points Sequence / 00080420 / SQ
  "InventoryAccessEndPointsSequence" |
  // Study Access End Points Sequence / 00080421 / SQ
  "StudyAccessEndPointsSequence" |
  // Incorporated Inventory Instance Sequence / 00080422 / SQ
  "IncorporatedInventoryInstanceSequence" |
  // Inventoried Studies Sequence / 00080423 / SQ
  "InventoriedStudiesSequence" |
  // Inventoried Series Sequence / 00080424 / SQ
  "InventoriedSeriesSequence" |
  // Inventoried Instances Sequence / 00080425 / SQ
  "InventoriedInstancesSequence" |
  // Inventory Completion Status / 00080426 / CS
  "InventoryCompletionStatus" |
  // Number of Study Records in Instance / 00080427 / UL
  "NumberOfStudyRecordsInInstance" |
  // Total Number of Study Records / 00080428 / UV
  "TotalNumberOfStudyRecords" |
  // Maximum Number of Records / 00080429 / UV
  "MaximumNumberOfRecords" |
  // Network ID / 00081000 / AE
  "NetworkID" |
  // Station Name / 00081010 / SH
  "StationName" |
  // Study Description / 00081030 / LO
  "StudyDescription" |
  // Procedure Code Sequence / 00081032 / SQ
  "ProcedureCodeSequence" |
  // Series Description / 0008103E / LO
  "SeriesDescription" |
  // Series Description Code Sequence / 0008103F / SQ
  "SeriesDescriptionCodeSequence" |
  // Institutional Department Name / 00081040 / LO
  "InstitutionalDepartmentName" |
  // Institutional Department Type Code Sequence / 00081041 / SQ
  "InstitutionalDepartmentTypeCodeSequence" |
  // Physician(s) of Record / 00081048 / PN
  "PhysiciansOfRecord" |
  // Physician(s) of Record Identification Sequence / 00081049 / SQ
  "PhysiciansOfRecordIdentificationSequence" |
  // Performing Physician's Name / 00081050 / PN
  "PerformingPhysicianName" |
  // Performing Physician Identification Sequence / 00081052 / SQ
  "PerformingPhysicianIdentificationSequence" |
  // Name of Physician(s) Reading Study / 00081060 / PN
  "NameOfPhysiciansReadingStudy" |
  // Physician(s) Reading Study Identification Sequence / 00081062 / SQ
  "PhysiciansReadingStudyIdentificationSequence" |
  // Operators' Name / 00081070 / PN
  "OperatorsName" |
  // Operator Identification Sequence / 00081072 / SQ
  "OperatorIdentificationSequence" |
  // Admitting Diagnoses Description / 00081080 / LO
  "AdmittingDiagnosesDescription" |
  // Admitting Diagnoses Code Sequence / 00081084 / SQ
  "AdmittingDiagnosesCodeSequence" |
  // Pyramid Description / 00081088 / LO
  "PyramidDescription" |
  // Manufacturer's Model Name / 00081090 / LO
  "ManufacturerModelName" |
  // Referenced Results Sequence / 00081100 / SQ
  "ReferencedResultsSequence" |
  // Referenced Study Sequence / 00081110 / SQ
  "ReferencedStudySequence" |
  // Referenced Performed Procedure Step Sequence / 00081111 / SQ
  "ReferencedPerformedProcedureStepSequence" |
  // Referenced Series Sequence / 00081115 / SQ
  "ReferencedSeriesSequence" |
  // Referenced Patient Sequence / 00081120 / SQ
  "ReferencedPatientSequence" |
  // Referenced Visit Sequence / 00081125 / SQ
  "ReferencedVisitSequence" |
  // Referenced Overlay Sequence / 00081130 / SQ
  "ReferencedOverlaySequence" |
  // Referenced Stereometric Instance Sequence / 00081134 / SQ
  "ReferencedStereometricInstanceSequence" |
  // Referenced Waveform Sequence / 0008113A / SQ
  "ReferencedWaveformSequence" |
  // Referenced Image Sequence / 00081140 / SQ
  "ReferencedImageSequence" |
  // Referenced Curve Sequence / 00081145 / SQ
  "ReferencedCurveSequence" |
  // Referenced Instance Sequence / 0008114A / SQ
  "ReferencedInstanceSequence" |
  // Referenced Real World Value Mapping Instance Sequence / 0008114B / SQ
  "ReferencedRealWorldValueMappingInstanceSequence" |
  // Referenced SOP Class UID / 00081150 / UI
  "ReferencedSOPClassUID" |
  // Referenced SOP Instance UID / 00081155 / UI
  "ReferencedSOPInstanceUID" |
  // Definition Source Sequence / 00081156 / SQ
  "DefinitionSourceSequence" |
  // SOP Classes Supported / 0008115A / UI
  "SOPClassesSupported" |
  // Referenced Frame Number / 00081160 / IS
  "ReferencedFrameNumber" |
  // Simple Frame List / 00081161 / UL
  "SimpleFrameList" |
  // Calculated Frame List / 00081162 / UL
  "CalculatedFrameList" |
  // Time Range / 00081163 / FD
  "TimeRange" |
  // Frame Extraction Sequence / 00081164 / SQ
  "FrameExtractionSequence" |
  // Multi-frame Source SOP Instance UID / 00081167 / UI
  "MultiFrameSourceSOPInstanceUID" |
  // Retrieve URL / 00081190 / UR
  "RetrieveURL" |
  // Transaction UID / 00081195 / UI
  "TransactionUID" |
  // Warning Reason / 00081196 / US
  "WarningReason" |
  // Failure Reason / 00081197 / US
  "FailureReason" |
  // Failed SOP Sequence / 00081198 / SQ
  "FailedSOPSequence" |
  // Referenced SOP Sequence / 00081199 / SQ
  "ReferencedSOPSequence" |
  // Other Failures Sequence / 0008119A / SQ
  "OtherFailuresSequence" |
  // Studies Containing Other Referenced Instances Sequence / 00081200 / SQ
  "StudiesContainingOtherReferencedInstancesSequence" |
  // Related Series Sequence / 00081250 / SQ
  "RelatedSeriesSequence" |
  // Lossy Image Compression (Retired) / 00082110 / CS
  "LossyImageCompressionRetired" |
  // Derivation Description / 00082111 / ST
  "DerivationDescription" |
  // Source Image Sequence / 00082112 / SQ
  "SourceImageSequence" |
  // Stage Name / 00082120 / SH
  "StageName" |
  // Stage Number / 00082122 / IS
  "StageNumber" |
  // Number of Stages / 00082124 / IS
  "NumberOfStages" |
  // View Name / 00082127 / SH
  "ViewName" |
  // View Number / 00082128 / IS
  "ViewNumber" |
  // Number of Event Timers / 00082129 / IS
  "NumberOfEventTimers" |
  // Number of Views in Stage / 0008212A / IS
  "NumberOfViewsInStage" |
  // Event Elapsed Time(s) / 00082130 / DS
  "EventElapsedTimes" |
  // Event Timer Name(s) / 00082132 / LO
  "EventTimerNames" |
  // Event Timer Sequence / 00082133 / SQ
  "EventTimerSequence" |
  // Event Time Offset / 00082134 / FD
  "EventTimeOffset" |
  // Event Code Sequence / 00082135 / SQ
  "EventCodeSequence" |
  // Start Trim / 00082142 / IS
  "StartTrim" |
  // Stop Trim / 00082143 / IS
  "StopTrim" |
  // Recommended Display Frame Rate / 00082144 / IS
  "RecommendedDisplayFrameRate" |
  // Transducer Position / 00082200 / CS
  "TransducerPosition" |
  // Transducer Orientation / 00082204 / CS
  "TransducerOrientation" |
  // Anatomic Structure / 00082208 / CS
  "AnatomicStructure" |
  // Anatomic Region Sequence / 00082218 / SQ
  "AnatomicRegionSequence" |
  // Anatomic Region Modifier Sequence / 00082220 / SQ
  "AnatomicRegionModifierSequence" |
  // Primary Anatomic Structure Sequence / 00082228 / SQ
  "PrimaryAnatomicStructureSequence" |
  // Anatomic Structure, Space or Region Sequence / 00082229 / SQ
  "AnatomicStructureSpaceOrRegionSequence" |
  // Primary Anatomic Structure Modifier Sequence / 00082230 / SQ
  "PrimaryAnatomicStructureModifierSequence" |
  // Transducer Position Sequence / 00082240 / SQ
  "TransducerPositionSequence" |
  // Transducer Position Modifier Sequence / 00082242 / SQ
  "TransducerPositionModifierSequence" |
  // Transducer Orientation Sequence / 00082244 / SQ
  "TransducerOrientationSequence" |
  // Transducer Orientation Modifier Sequence / 00082246 / SQ
  "TransducerOrientationModifierSequence" |
  // Anatomic Structure Space Or Region Code Sequence (Trial) / 00082251 / SQ
  "AnatomicStructureSpaceOrRegionCodeSequenceTrial" |
  // Anatomic Portal Of Entrance Code Sequence (Trial) / 00082253 / SQ
  "AnatomicPortalOfEntranceCodeSequenceTrial" |
  // Anatomic Approach Direction Code Sequence (Trial) / 00082255 / SQ
  "AnatomicApproachDirectionCodeSequenceTrial" |
  // Anatomic Perspective Description (Trial) / 00082256 / ST
  "AnatomicPerspectiveDescriptionTrial" |
  // Anatomic Perspective Code Sequence (Trial) / 00082257 / SQ
  "AnatomicPerspectiveCodeSequenceTrial" |
  // Anatomic Location Of Examining Instrument Description (Trial) / 00082258 / ST
  "AnatomicLocationOfExaminingInstrumentDescriptionTrial" |
  // Anatomic Location Of Examining Instrument Code Sequence (Trial) / 00082259 / SQ
  "AnatomicLocationOfExaminingInstrumentCodeSequenceTrial" |
  // Anatomic Structure Space Or Region Modifier Code Sequence (Trial) / 0008225A / SQ
  "AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial" |
  // On Axis Background Anatomic Structure Code Sequence (Trial) / 0008225C / SQ
  "OnAxisBackgroundAnatomicStructureCodeSequenceTrial" |
  // Alternate Representation Sequence / 00083001 / SQ
  "AlternateRepresentationSequence" |
  // Available Transfer Syntax UID / 00083002 / UI
  "AvailableTransferSyntaxUID" |
  // Irradiation Event UID / 00083010 / UI
  "IrradiationEventUID" |
  // Source Irradiation Event Sequence / 00083011 / SQ
  "SourceIrradiationEventSequence" |
  // Radiopharmaceutical Administration Event UID / 00083012 / UI
  "RadiopharmaceuticalAdministrationEventUID" |
  // Identifying Comments / 00084000 / LT
  "IdentifyingComments" |
  // Frame Type / 00089007 / CS
  "FrameType" |
  // Referenced Image Evidence Sequence / 00089092 / SQ
  "ReferencedImageEvidenceSequence" |
  // Referenced Raw Data Sequence / 00089121 / SQ
  "ReferencedRawDataSequence" |
  // Creator-Version UID / 00089123 / UI
  "CreatorVersionUID" |
  // Derivation Image Sequence / 00089124 / SQ
  "DerivationImageSequence" |
  // Source Image Evidence Sequence / 00089154 / SQ
  "SourceImageEvidenceSequence" |
  // Pixel Presentation / 00089205 / CS
  "PixelPresentation" |
  // Volumetric Properties / 00089206 / CS
  "VolumetricProperties" |
  // Volume Based Calculation Technique / 00089207 / CS
  "VolumeBasedCalculationTechnique" |
  // Complex Image Component / 00089208 / CS
  "ComplexImageComponent" |
  // Acquisition Contrast / 00089209 / CS
  "AcquisitionContrast" |
  // Derivation Code Sequence / 00089215 / SQ
  "DerivationCodeSequence" |
  // Referenced Presentation State Sequence / 00089237 / SQ
  "ReferencedPresentationStateSequence" |
  // Referenced Other Plane Sequence / 00089410 / SQ
  "ReferencedOtherPlaneSequence" |
  // Frame Display Sequence / 00089458 / SQ
  "FrameDisplaySequence" |
  // Recommended Display Frame Rate in Float / 00089459 / FL
  "RecommendedDisplayFrameRateInFloat" |
  // Skip Frame Range Flag / 00089460 / CS
  "SkipFrameRangeFlag" |
  // Patient's Name / 00100010 / PN
  "PatientName" |
  // Patient ID / 00100020 / LO
  "PatientID" |
  // Issuer of Patient ID / 00100021 / LO
  "IssuerOfPatientID" |
  // Type of Patient ID / 00100022 / CS
  "TypeOfPatientID" |
  // Issuer of Patient ID Qualifiers Sequence / 00100024 / SQ
  "IssuerOfPatientIDQualifiersSequence" |
  // Source Patient Group Identification Sequence / 00100026 / SQ
  "SourcePatientGroupIdentificationSequence" |
  // Group of Patients Identification Sequence / 00100027 / SQ
  "GroupOfPatientsIdentificationSequence" |
  // Subject Relative Position in Image / 00100028 / US
  "SubjectRelativePositionInImage" |
  // Patient's Birth Date / 00100030 / DA
  "PatientBirthDate" |
  // Patient's Birth Time / 00100032 / TM
  "PatientBirthTime" |
  // Patient's Birth Date in Alternative Calendar / 00100033 / LO
  "PatientBirthDateInAlternativeCalendar" |
  // Patient's Death Date in Alternative Calendar / 00100034 / LO
  "PatientDeathDateInAlternativeCalendar" |
  // Patient's Alternative Calendar / 00100035 / CS
  "PatientAlternativeCalendar" |
  // Patient's Sex / 00100040 / CS
  "PatientSex" |
  // Patient's Insurance Plan Code Sequence / 00100050 / SQ
  "PatientInsurancePlanCodeSequence" |
  // Patient's Primary Language Code Sequence / 00100101 / SQ
  "PatientPrimaryLanguageCodeSequence" |
  // Patient's Primary Language Modifier Code Sequence / 00100102 / SQ
  "PatientPrimaryLanguageModifierCodeSequence" |
  // Quality Control Subject / 00100200 / CS
  "QualityControlSubject" |
  // Quality Control Subject Type Code Sequence / 00100201 / SQ
  "QualityControlSubjectTypeCodeSequence" |
  // Strain Description / 00100212 / UC
  "StrainDescription" |
  // Strain Nomenclature / 00100213 / LO
  "StrainNomenclature" |
  // Strain Stock Number / 00100214 / LO
  "StrainStockNumber" |
  // Strain Source Registry Code Sequence / 00100215 / SQ
  "StrainSourceRegistryCodeSequence" |
  // Strain Stock Sequence / 00100216 / SQ
  "StrainStockSequence" |
  // Strain Source / 00100217 / LO
  "StrainSource" |
  // Strain Additional Information / 00100218 / UT
  "StrainAdditionalInformation" |
  // Strain Code Sequence / 00100219 / SQ
  "StrainCodeSequence" |
  // Genetic Modifications Sequence / 00100221 / SQ
  "GeneticModificationsSequence" |
  // Genetic Modifications Description / 00100222 / UC
  "GeneticModificationsDescription" |
  // Genetic Modifications Nomenclature / 00100223 / LO
  "GeneticModificationsNomenclature" |
  // Genetic Modifications Code Sequence / 00100229 / SQ
  "GeneticModificationsCodeSequence" |
  // Other Patient IDs / 00101000 / LO
  "OtherPatientIDs" |
  // Other Patient Names / 00101001 / PN
  "OtherPatientNames" |
  // Other Patient IDs Sequence / 00101002 / SQ
  "OtherPatientIDsSequence" |
  // Patient's Birth Name / 00101005 / PN
  "PatientBirthName" |
  // Patient's Age / 00101010 / AS
  "PatientAge" |
  // Patient's Size / 00101020 / DS
  "PatientSize" |
  // Patient's Size Code Sequence / 00101021 / SQ
  "PatientSizeCodeSequence" |
  // Patient's Body Mass Index / 00101022 / DS
  "PatientBodyMassIndex" |
  // Measured AP Dimension / 00101023 / DS
  "MeasuredAPDimension" |
  // Measured Lateral Dimension / 00101024 / DS
  "MeasuredLateralDimension" |
  // Patient's Weight / 00101030 / DS
  "PatientWeight" |
  // Patient's Address / 00101040 / LO
  "PatientAddress" |
  // Insurance Plan Identification / 00101050 / LO
  "InsurancePlanIdentification" |
  // Patient's Mother's Birth Name / 00101060 / PN
  "PatientMotherBirthName" |
  // Military Rank / 00101080 / LO
  "MilitaryRank" |
  // Branch of Service / 00101081 / LO
  "BranchOfService" |
  // Medical Record Locator / 00101090 / LO
  "MedicalRecordLocator" |
  // Referenced Patient Photo Sequence / 00101100 / SQ
  "ReferencedPatientPhotoSequence" |
  // Medical Alerts / 00102000 / LO
  "MedicalAlerts" |
  // Allergies / 00102110 / LO
  "Allergies" |
  // Country of Residence / 00102150 / LO
  "CountryOfResidence" |
  // Region of Residence / 00102152 / LO
  "RegionOfResidence" |
  // Patient's Telephone Numbers / 00102154 / SH
  "PatientTelephoneNumbers" |
  // Patient's Telecom Information / 00102155 / LT
  "PatientTelecomInformation" |
  // Ethnic Group / 00102160 / SH
  "EthnicGroup" |
  // Occupation / 00102180 / SH
  "Occupation" |
  // Smoking Status / 001021A0 / CS
  "SmokingStatus" |
  // Additional Patient History / 001021B0 / LT
  "AdditionalPatientHistory" |
  // Pregnancy Status / 001021C0 / US
  "PregnancyStatus" |
  // Last Menstrual Date / 001021D0 / DA
  "LastMenstrualDate" |
  // Patient's Religious Preference / 001021F0 / LO
  "PatientReligiousPreference" |
  // Patient Species Description / 00102201 / LO
  "PatientSpeciesDescription" |
  // Patient Species Code Sequence / 00102202 / SQ
  "PatientSpeciesCodeSequence" |
  // Patient's Sex Neutered / 00102203 / CS
  "PatientSexNeutered" |
  // Anatomical Orientation Type / 00102210 / CS
  "AnatomicalOrientationType" |
  // Patient Breed Description / 00102292 / LO
  "PatientBreedDescription" |
  // Patient Breed Code Sequence / 00102293 / SQ
  "PatientBreedCodeSequence" |
  // Breed Registration Sequence / 00102294 / SQ
  "BreedRegistrationSequence" |
  // Breed Registration Number / 00102295 / LO
  "BreedRegistrationNumber" |
  // Breed Registry Code Sequence / 00102296 / SQ
  "BreedRegistryCodeSequence" |
  // Responsible Person / 00102297 / PN
  "ResponsiblePerson" |
  // Responsible Person Role / 00102298 / CS
  "ResponsiblePersonRole" |
  // Responsible Organization / 00102299 / LO
  "ResponsibleOrganization" |
  // Patient Comments / 00104000 / LT
  "PatientComments" |
  // Examined Body Thickness / 00109431 / FL
  "ExaminedBodyThickness" |
  // Clinical Trial Sponsor Name / 00120010 / LO
  "ClinicalTrialSponsorName" |
  // Clinical Trial Protocol ID / 00120020 / LO
  "ClinicalTrialProtocolID" |
  // Clinical Trial Protocol Name / 00120021 / LO
  "ClinicalTrialProtocolName" |
  // Clinical Trial Site ID / 00120030 / LO
  "ClinicalTrialSiteID" |
  // Clinical Trial Site Name / 00120031 / LO
  "ClinicalTrialSiteName" |
  // Clinical Trial Subject ID / 00120040 / LO
  "ClinicalTrialSubjectID" |
  // Clinical Trial Subject Reading ID / 00120042 / LO
  "ClinicalTrialSubjectReadingID" |
  // Clinical Trial Time Point ID / 00120050 / LO
  "ClinicalTrialTimePointID" |
  // Clinical Trial Time Point Description / 00120051 / ST
  "ClinicalTrialTimePointDescription" |
  // Longitudinal Temporal Offset from Event / 00120052 / FD
  "LongitudinalTemporalOffsetFromEvent" |
  // Longitudinal Temporal Event Type / 00120053 / CS
  "LongitudinalTemporalEventType" |
  // Clinical Trial Time Point Type Code Sequence / 00120054 / SQ
  "ClinicalTrialTimePointTypeCodeSequence" |
  // Clinical Trial Coordinating Center Name / 00120060 / LO
  "ClinicalTrialCoordinatingCenterName" |
  // Patient Identity Removed / 00120062 / CS
  "PatientIdentityRemoved" |
  // De-identification Method / 00120063 / LO
  "DeidentificationMethod" |
  // De-identification Method Code Sequence / 00120064 / SQ
  "DeidentificationMethodCodeSequence" |
  // Clinical Trial Series ID / 00120071 / LO
  "ClinicalTrialSeriesID" |
  // Clinical Trial Series Description / 00120072 / LO
  "ClinicalTrialSeriesDescription" |
  // Clinical Trial Protocol Ethics Committee Name / 00120081 / LO
  "ClinicalTrialProtocolEthicsCommitteeName" |
  // Clinical Trial Protocol Ethics Committee Approval Number / 00120082 / LO
  "ClinicalTrialProtocolEthicsCommitteeApprovalNumber" |
  // Consent for Clinical Trial Use Sequence / 00120083 / SQ
  "ConsentForClinicalTrialUseSequence" |
  // Distribution Type / 00120084 / CS
  "DistributionType" |
  // Consent for Distribution Flag / 00120085 / CS
  "ConsentForDistributionFlag" |
  // Ethics Committee Approval Effectiveness Start Date / 00120086 / DA
  "EthicsCommitteeApprovalEffectivenessStartDate" |
  // Ethics Committee Approval Effectiveness End Date / 00120087 / DA
  "EthicsCommitteeApprovalEffectivenessEndDate" |
  // CAD File Format / 00140023 / ST
  "CADFileFormat" |
  // Component Reference System / 00140024 / ST
  "ComponentReferenceSystem" |
  // Component Manufacturing Procedure / 00140025 / ST
  "ComponentManufacturingProcedure" |
  // Component Manufacturer / 00140028 / ST
  "ComponentManufacturer" |
  // Material Thickness / 00140030 / DS
  "MaterialThickness" |
  // Material Pipe Diameter / 00140032 / DS
  "MaterialPipeDiameter" |
  // Material Isolation Diameter / 00140034 / DS
  "MaterialIsolationDiameter" |
  // Material Grade / 00140042 / ST
  "MaterialGrade" |
  // Material Properties Description / 00140044 / ST
  "MaterialPropertiesDescription" |
  // Material Properties File Format (Retired) / 00140045 / ST
  "MaterialPropertiesFileFormatRetired" |
  // Material Notes / 00140046 / LT
  "MaterialNotes" |
  // Component Shape / 00140050 / CS
  "ComponentShape" |
  // Curvature Type / 00140052 / CS
  "CurvatureType" |
  // Outer Diameter / 00140054 / DS
  "OuterDiameter" |
  // Inner Diameter / 00140056 / DS
  "InnerDiameter" |
  // Component Welder IDs / 00140100 / LO
  "ComponentWelderIDs" |
  // Secondary Approval Status / 00140101 / CS
  "SecondaryApprovalStatus" |
  // Secondary Review Date / 00140102 / DA
  "SecondaryReviewDate" |
  // Secondary Review Time / 00140103 / TM
  "SecondaryReviewTime" |
  // Secondary Reviewer Name / 00140104 / PN
  "SecondaryReviewerName" |
  // Repair ID / 00140105 / ST
  "RepairID" |
  // Multiple Component Approval Sequence / 00140106 / SQ
  "MultipleComponentApprovalSequence" |
  // Other Approval Status / 00140107 / CS
  "OtherApprovalStatus" |
  // Other Secondary Approval Status / 00140108 / CS
  "OtherSecondaryApprovalStatus" |
  // Data Element Label Sequence / 00140200 / SQ
  "DataElementLabelSequence" |
  // Data Element Label Item Sequence / 00140201 / SQ
  "DataElementLabelItemSequence" |
  // Data Element / 00140202 / AT
  "DataElement" |
  // Data Element Name / 00140203 / LO
  "DataElementName" |
  // Data Element Description / 00140204 / LO
  "DataElementDescription" |
  // Data Element Conditionality / 00140205 / CS
  "DataElementConditionality" |
  // Data Element Minimum Characters / 00140206 / IS
  "DataElementMinimumCharacters" |
  // Data Element Maximum Characters / 00140207 / IS
  "DataElementMaximumCharacters" |
  // Actual Environmental Conditions / 00141010 / ST
  "ActualEnvironmentalConditions" |
  // Expiry Date / 00141020 / DA
  "ExpiryDate" |
  // Environmental Conditions / 00141040 / ST
  "EnvironmentalConditions" |
  // Evaluator Sequence / 00142002 / SQ
  "EvaluatorSequence" |
  // Evaluator Number / 00142004 / IS
  "EvaluatorNumber" |
  // Evaluator Name / 00142006 / PN
  "EvaluatorName" |
  // Evaluation Attempt / 00142008 / IS
  "EvaluationAttempt" |
  // Indication Sequence / 00142012 / SQ
  "IndicationSequence" |
  // Indication Number / 00142014 / IS
  "IndicationNumber" |
  // Indication Label / 00142016 / SH
  "IndicationLabel" |
  // Indication Description / 00142018 / ST
  "IndicationDescription" |
  // Indication Type / 0014201A / CS
  "IndicationType" |
  // Indication Disposition / 0014201C / CS
  "IndicationDisposition" |
  // Indication ROI Sequence / 0014201E / SQ
  "IndicationROISequence" |
  // Indication Physical Property Sequence / 00142030 / SQ
  "IndicationPhysicalPropertySequence" |
  // Property Label / 00142032 / SH
  "PropertyLabel" |
  // Coordinate System Number of Axes / 00142202 / IS
  "CoordinateSystemNumberOfAxes" |
  // Coordinate System Axes Sequence / 00142204 / SQ
  "CoordinateSystemAxesSequence" |
  // Coordinate System Axis Description / 00142206 / ST
  "CoordinateSystemAxisDescription" |
  // Coordinate System Data Set Mapping / 00142208 / CS
  "CoordinateSystemDataSetMapping" |
  // Coordinate System Axis Number / 0014220A / IS
  "CoordinateSystemAxisNumber" |
  // Coordinate System Axis Type / 0014220C / CS
  "CoordinateSystemAxisType" |
  // Coordinate System Axis Units / 0014220E / CS
  "CoordinateSystemAxisUnits" |
  // Coordinate System Axis Values / 00142210 / OB
  "CoordinateSystemAxisValues" |
  // Coordinate System Transform Sequence / 00142220 / SQ
  "CoordinateSystemTransformSequence" |
  // Transform Description / 00142222 / ST
  "TransformDescription" |
  // Transform Number of Axes / 00142224 / IS
  "TransformNumberOfAxes" |
  // Transform Order of Axes / 00142226 / IS
  "TransformOrderOfAxes" |
  // Transformed Axis Units / 00142228 / CS
  "TransformedAxisUnits" |
  // Coordinate System Transform Rotation and Scale Matrix / 0014222A / DS
  "CoordinateSystemTransformRotationAndScaleMatrix" |
  // Coordinate System Transform Translation Matrix / 0014222C / DS
  "CoordinateSystemTransformTranslationMatrix" |
  // Internal Detector Frame Time / 00143011 / DS
  "InternalDetectorFrameTime" |
  // Number of Frames Integrated / 00143012 / DS
  "NumberOfFramesIntegrated" |
  // Detector Temperature Sequence / 00143020 / SQ
  "DetectorTemperatureSequence" |
  // Sensor Name / 00143022 / ST
  "SensorName" |
  // Horizontal Offset of Sensor / 00143024 / DS
  "HorizontalOffsetOfSensor" |
  // Vertical Offset of Sensor / 00143026 / DS
  "VerticalOffsetOfSensor" |
  // Sensor Temperature / 00143028 / DS
  "SensorTemperature" |
  // Dark Current Sequence / 00143040 / SQ
  "DarkCurrentSequence" |
  // Dark Current Counts / 00143050 / OB/OW
  "DarkCurrentCounts" |
  // Gain Correction Reference Sequence / 00143060 / SQ
  "GainCorrectionReferenceSequence" |
  // Air Counts / 00143070 / OB/OW
  "AirCounts" |
  // KV Used in Gain Calibration / 00143071 / DS
  "KVUsedInGainCalibration" |
  // MA Used in Gain Calibration / 00143072 / DS
  "MAUsedInGainCalibration" |
  // Number of Frames Used for Integration / 00143073 / DS
  "NumberOfFramesUsedForIntegration" |
  // Filter Material Used in Gain Calibration / 00143074 / LO
  "FilterMaterialUsedInGainCalibration" |
  // Filter Thickness Used in Gain Calibration / 00143075 / DS
  "FilterThicknessUsedInGainCalibration" |
  // Date of Gain Calibration / 00143076 / DA
  "DateOfGainCalibration" |
  // Time of Gain Calibration / 00143077 / TM
  "TimeOfGainCalibration" |
  // Bad Pixel Image / 00143080 / OB
  "BadPixelImage" |
  // Calibration Notes / 00143099 / LT
  "CalibrationNotes" |
  // Linearity Correction Technique / 00143100 / LT
  "LinearityCorrectionTechnique" |
  // Beam Hardening Correction Technique / 00143101 / LT
  "BeamHardeningCorrectionTechnique" |
  // Pulser Equipment Sequence / 00144002 / SQ
  "PulserEquipmentSequence" |
  // Pulser Type / 00144004 / CS
  "PulserType" |
  // Pulser Notes / 00144006 / LT
  "PulserNotes" |
  // Receiver Equipment Sequence / 00144008 / SQ
  "ReceiverEquipmentSequence" |
  // Amplifier Type / 0014400A / CS
  "AmplifierType" |
  // Receiver Notes / 0014400C / LT
  "ReceiverNotes" |
  // Pre-Amplifier Equipment Sequence / 0014400E / SQ
  "PreAmplifierEquipmentSequence" |
  // Pre-Amplifier Notes / 0014400F / LT
  "PreAmplifierNotes" |
  // Transmit Transducer Sequence / 00144010 / SQ
  "TransmitTransducerSequence" |
  // Receive Transducer Sequence / 00144011 / SQ
  "ReceiveTransducerSequence" |
  // Number of Elements / 00144012 / US
  "NumberOfElements" |
  // Element Shape / 00144013 / CS
  "ElementShape" |
  // Element Dimension A / 00144014 / DS
  "ElementDimensionA" |
  // Element Dimension B / 00144015 / DS
  "ElementDimensionB" |
  // Element Pitch A / 00144016 / DS
  "ElementPitchA" |
  // Measured Beam Dimension A / 00144017 / DS
  "MeasuredBeamDimensionA" |
  // Measured Beam Dimension B / 00144018 / DS
  "MeasuredBeamDimensionB" |
  // Location of Measured Beam Diameter / 00144019 / DS
  "LocationOfMeasuredBeamDiameter" |
  // Nominal Frequency / 0014401A / DS
  "NominalFrequency" |
  // Measured Center Frequency / 0014401B / DS
  "MeasuredCenterFrequency" |
  // Measured Bandwidth / 0014401C / DS
  "MeasuredBandwidth" |
  // Element Pitch B / 0014401D / DS
  "ElementPitchB" |
  // Pulser Settings Sequence / 00144020 / SQ
  "PulserSettingsSequence" |
  // Pulse Width / 00144022 / DS
  "PulseWidth" |
  // Excitation Frequency / 00144024 / DS
  "ExcitationFrequency" |
  // Modulation Type / 00144026 / CS
  "ModulationType" |
  // Damping / 00144028 / DS
  "Damping" |
  // Receiver Settings Sequence / 00144030 / SQ
  "ReceiverSettingsSequence" |
  // Acquired Soundpath Length / 00144031 / DS
  "AcquiredSoundpathLength" |
  // Acquisition Compression Type / 00144032 / CS
  "AcquisitionCompressionType" |
  // Acquisition Sample Size / 00144033 / IS
  "AcquisitionSampleSize" |
  // Rectifier Smoothing / 00144034 / DS
  "RectifierSmoothing" |
  // DAC Sequence / 00144035 / SQ
  "DACSequence" |
  // DAC Type / 00144036 / CS
  "DACType" |
  // DAC Gain Points / 00144038 / DS
  "DACGainPoints" |
  // DAC Time Points / 0014403A / DS
  "DACTimePoints" |
  // DAC Amplitude / 0014403C / DS
  "DACAmplitude" |
  // Pre-Amplifier Settings Sequence / 00144040 / SQ
  "PreAmplifierSettingsSequence" |
  // Transmit Transducer Settings Sequence / 00144050 / SQ
  "TransmitTransducerSettingsSequence" |
  // Receive Transducer Settings Sequence / 00144051 / SQ
  "ReceiveTransducerSettingsSequence" |
  // Incident Angle / 00144052 / DS
  "IncidentAngle" |
  // Coupling Technique / 00144054 / ST
  "CouplingTechnique" |
  // Coupling Medium / 00144056 / ST
  "CouplingMedium" |
  // Coupling Velocity / 00144057 / DS
  "CouplingVelocity" |
  // Probe Center Location X / 00144058 / DS
  "ProbeCenterLocationX" |
  // Probe Center Location Z / 00144059 / DS
  "ProbeCenterLocationZ" |
  // Sound Path Length / 0014405A / DS
  "SoundPathLength" |
  // Delay Law Identifier / 0014405C / ST
  "DelayLawIdentifier" |
  // Gate Settings Sequence / 00144060 / SQ
  "GateSettingsSequence" |
  // Gate Threshold / 00144062 / DS
  "GateThreshold" |
  // Velocity of Sound / 00144064 / DS
  "VelocityOfSound" |
  // Calibration Settings Sequence / 00144070 / SQ
  "CalibrationSettingsSequence" |
  // Calibration Procedure / 00144072 / ST
  "CalibrationProcedure" |
  // Procedure Version / 00144074 / SH
  "ProcedureVersion" |
  // Procedure Creation Date / 00144076 / DA
  "ProcedureCreationDate" |
  // Procedure Expiration Date / 00144078 / DA
  "ProcedureExpirationDate" |
  // Procedure Last Modified Date / 0014407A / DA
  "ProcedureLastModifiedDate" |
  // Calibration Time / 0014407C / TM
  "CalibrationTime" |
  // Calibration Date / 0014407E / DA
  "CalibrationDate" |
  // Probe Drive Equipment Sequence / 00144080 / SQ
  "ProbeDriveEquipmentSequence" |
  // Drive Type / 00144081 / CS
  "DriveType" |
  // Probe Drive Notes / 00144082 / LT
  "ProbeDriveNotes" |
  // Drive Probe Sequence / 00144083 / SQ
  "DriveProbeSequence" |
  // Probe Inductance / 00144084 / DS
  "ProbeInductance" |
  // Probe Resistance / 00144085 / DS
  "ProbeResistance" |
  // Receive Probe Sequence / 00144086 / SQ
  "ReceiveProbeSequence" |
  // Probe Drive Settings Sequence / 00144087 / SQ
  "ProbeDriveSettingsSequence" |
  // Bridge Resistors / 00144088 / DS
  "BridgeResistors" |
  // Probe Orientation Angle / 00144089 / DS
  "ProbeOrientationAngle" |
  // User Selected Gain Y / 0014408B / DS
  "UserSelectedGainY" |
  // User Selected Phase / 0014408C / DS
  "UserSelectedPhase" |
  // User Selected Offset X / 0014408D / DS
  "UserSelectedOffsetX" |
  // User Selected Offset Y / 0014408E / DS
  "UserSelectedOffsetY" |
  // Channel Settings Sequence / 00144091 / SQ
  "ChannelSettingsSequence" |
  // Channel Threshold / 00144092 / DS
  "ChannelThreshold" |
  // Scanner Settings Sequence / 0014409A / SQ
  "ScannerSettingsSequence" |
  // Scan Procedure / 0014409B / ST
  "ScanProcedure" |
  // Translation Rate X / 0014409C / DS
  "TranslationRateX" |
  // Translation Rate Y / 0014409D / DS
  "TranslationRateY" |
  // Channel Overlap / 0014409F / DS
  "ChannelOverlap" |
  // Image Quality Indicator Type / 001440A0 / LO
  "ImageQualityIndicatorType" |
  // Image Quality Indicator Material / 001440A1 / LO
  "ImageQualityIndicatorMaterial" |
  // Image Quality Indicator Size / 001440A2 / LO
  "ImageQualityIndicatorSize" |
  // LINAC Energy / 00145002 / IS
  "LINACEnergy" |
  // LINAC Output / 00145004 / IS
  "LINACOutput" |
  // Active Aperture / 00145100 / US
  "ActiveAperture" |
  // Total Aperture / 00145101 / DS
  "TotalAperture" |
  // Aperture Elevation / 00145102 / DS
  "ApertureElevation" |
  // Main Lobe Angle / 00145103 / DS
  "MainLobeAngle" |
  // Main Roof Angle / 00145104 / DS
  "MainRoofAngle" |
  // Connector Type / 00145105 / CS
  "ConnectorType" |
  // Wedge Model Number / 00145106 / SH
  "WedgeModelNumber" |
  // Wedge Angle Float / 00145107 / DS
  "WedgeAngleFloat" |
  // Wedge Roof Angle / 00145108 / DS
  "WedgeRoofAngle" |
  // Wedge Element 1 Position / 00145109 / CS
  "WedgeElement1Position" |
  // Wedge Material Velocity / 0014510A / DS
  "WedgeMaterialVelocity" |
  // Wedge Material / 0014510B / SH
  "WedgeMaterial" |
  // Wedge Offset Z / 0014510C / DS
  "WedgeOffsetZ" |
  // Wedge Origin Offset X / 0014510D / DS
  "WedgeOriginOffsetX" |
  // Wedge Time Delay / 0014510E / DS
  "WedgeTimeDelay" |
  // Wedge Name / 0014510F / SH
  "WedgeName" |
  // Wedge Manufacturer Name / 00145110 / SH
  "WedgeManufacturerName" |
  // Wedge Description / 00145111 / LO
  "WedgeDescription" |
  // Nominal Beam Angle / 00145112 / DS
  "NominalBeamAngle" |
  // Wedge Offset X / 00145113 / DS
  "WedgeOffsetX" |
  // Wedge Offset Y / 00145114 / DS
  "WedgeOffsetY" |
  // Wedge Total Length / 00145115 / DS
  "WedgeTotalLength" |
  // Wedge In Contact Length / 00145116 / DS
  "WedgeInContactLength" |
  // Wedge Front Gap / 00145117 / DS
  "WedgeFrontGap" |
  // Wedge Total Height / 00145118 / DS
  "WedgeTotalHeight" |
  // Wedge Front Height / 00145119 / DS
  "WedgeFrontHeight" |
  // Wedge Rear Height / 0014511A / DS
  "WedgeRearHeight" |
  // Wedge Total Width / 0014511B / DS
  "WedgeTotalWidth" |
  // Wedge In Contact Width / 0014511C / DS
  "WedgeInContactWidth" |
  // Wedge Chamfer Height / 0014511D / DS
  "WedgeChamferHeight" |
  // Wedge Curve / 0014511E / CS
  "WedgeCurve" |
  // Radius Along the Wedge / 0014511F / DS
  "RadiusAlongWedge" |
  // White Point / 00160001 / DS
  "WhitePoint" |
  // Primary Chromaticities / 00160002 / DS
  "PrimaryChromaticities" |
  // Battery Level / 00160003 / UT
  "BatteryLevel" |
  // Exposure Time in Seconds / 00160004 / DS
  "ExposureTimeInSeconds" |
  // F-Number / 00160005 / DS
  "FNumber" |
  // OECF Rows / 00160006 / IS
  "OECFRows" |
  // OECF Columns / 00160007 / IS
  "OECFColumns" |
  // OECF Column Names / 00160008 / UC
  "OECFColumnNames" |
  // OECF Values / 00160009 / DS
  "OECFValues" |
  // Spatial Frequency Response Rows / 0016000A / IS
  "SpatialFrequencyResponseRows" |
  // Spatial Frequency Response Columns / 0016000B / IS
  "SpatialFrequencyResponseColumns" |
  // Spatial Frequency Response Column Names / 0016000C / UC
  "SpatialFrequencyResponseColumnNames" |
  // Spatial Frequency Response Values / 0016000D / DS
  "SpatialFrequencyResponseValues" |
  // Color Filter Array Pattern Rows / 0016000E / IS
  "ColorFilterArrayPatternRows" |
  // Color Filter Array Pattern Columns / 0016000F / IS
  "ColorFilterArrayPatternColumns" |
  // Color Filter Array Pattern Values / 00160010 / DS
  "ColorFilterArrayPatternValues" |
  // Flash Firing Status / 00160011 / US
  "FlashFiringStatus" |
  // Flash Return Status / 00160012 / US
  "FlashReturnStatus" |
  // Flash Mode / 00160013 / US
  "FlashMode" |
  // Flash Function Present / 00160014 / US
  "FlashFunctionPresent" |
  // Flash Red Eye Mode / 00160015 / US
  "FlashRedEyeMode" |
  // Exposure Program / 00160016 / US
  "ExposureProgram" |
  // Spectral Sensitivity / 00160017 / UT
  "SpectralSensitivity" |
  // Photographic Sensitivity / 00160018 / IS
  "PhotographicSensitivity" |
  // Self Timer Mode / 00160019 / IS
  "SelfTimerMode" |
  // Sensitivity Type / 0016001A / US
  "SensitivityType" |
  // Standard Output Sensitivity / 0016001B / IS
  "StandardOutputSensitivity" |
  // Recommended Exposure Index / 0016001C / IS
  "RecommendedExposureIndex" |
  // ISO Speed / 0016001D / IS
  "ISOSpeed" |
  // ISO Speed Latitude yyy / 0016001E / IS
  "ISOSpeedLatitudeyyy" |
  // ISO Speed Latitude zzz / 0016001F / IS
  "ISOSpeedLatitudezzz" |
  // EXIF Version / 00160020 / UT
  "EXIFVersion" |
  // Shutter Speed Value / 00160021 / DS
  "ShutterSpeedValue" |
  // Aperture Value / 00160022 / DS
  "ApertureValue" |
  // Brightness Value / 00160023 / DS
  "BrightnessValue" |
  // Exposure Bias Value / 00160024 / DS
  "ExposureBiasValue" |
  // Max Aperture Value / 00160025 / DS
  "MaxApertureValue" |
  // Subject Distance / 00160026 / DS
  "SubjectDistance" |
  // Metering Mode / 00160027 / US
  "MeteringMode" |
  // Light Source / 00160028 / US
  "LightSource" |
  // Focal Length / 00160029 / DS
  "FocalLength" |
  // Subject Area / 0016002A / IS
  "SubjectArea" |
  // Maker Note / 0016002B / OB
  "MakerNote" |
  // Temperature / 00160030 / DS
  "Temperature" |
  // Humidity / 00160031 / DS
  "Humidity" |
  // Pressure / 00160032 / DS
  "Pressure" |
  // Water Depth / 00160033 / DS
  "WaterDepth" |
  // Acceleration / 00160034 / DS
  "Acceleration" |
  // Camera Elevation Angle / 00160035 / DS
  "CameraElevationAngle" |
  // Flash Energy / 00160036 / DS
  "FlashEnergy" |
  // Subject Location / 00160037 / IS
  "SubjectLocation" |
  // Photographic Exposure Index / 00160038 / DS
  "PhotographicExposureIndex" |
  // Sensing Method / 00160039 / US
  "SensingMethod" |
  // File Source / 0016003A / US
  "FileSource" |
  // Scene Type / 0016003B / US
  "SceneType" |
  // Custom Rendered / 00160041 / US
  "CustomRendered" |
  // Exposure Mode / 00160042 / US
  "ExposureMode" |
  // White Balance / 00160043 / US
  "WhiteBalance" |
  // Digital Zoom Ratio / 00160044 / DS
  "DigitalZoomRatio" |
  // Focal Length In 35mm Film / 00160045 / IS
  "FocalLengthIn35mmFilm" |
  // Scene Capture Type / 00160046 / US
  "SceneCaptureType" |
  // Gain Control / 00160047 / US
  "GainControl" |
  // Contrast / 00160048 / US
  "Contrast" |
  // Saturation / 00160049 / US
  "Saturation" |
  // Sharpness / 0016004A / US
  "Sharpness" |
  // Device Setting Description / 0016004B / OB
  "DeviceSettingDescription" |
  // Subject Distance Range / 0016004C / US
  "SubjectDistanceRange" |
  // Camera Owner Name / 0016004D / UT
  "CameraOwnerName" |
  // Lens Specification / 0016004E / DS
  "LensSpecification" |
  // Lens Make / 0016004F / UT
  "LensMake" |
  // Lens Model / 00160050 / UT
  "LensModel" |
  // Lens Serial Number / 00160051 / UT
  "LensSerialNumber" |
  // Interoperability Index / 00160061 / CS
  "InteroperabilityIndex" |
  // Interoperability Version / 00160062 / OB
  "InteroperabilityVersion" |
  // GPS Version ID / 00160070 / OB
  "GPSVersionID" |
  // GPS Latitude Ref / 00160071 / CS
  "GPSLatitudeRef" |
  // GPS Latitude / 00160072 / DS
  "GPSLatitude" |
  // GPS Longitude Ref / 00160073 / CS
  "GPSLongitudeRef" |
  // GPS Longitude / 00160074 / DS
  "GPSLongitude" |
  // GPS Altitude Ref / 00160075 / US
  "GPSAltitudeRef" |
  // GPS Altitude / 00160076 / DS
  "GPSAltitude" |
  // GPS Time Stamp / 00160077 / DT
  "GPSTimeStamp" |
  // GPS Satellites / 00160078 / UT
  "GPSSatellites" |
  // GPS Status / 00160079 / CS
  "GPSStatus" |
  // GPS Measure Mode / 0016007A / CS
  "GPSMeasureMode" |
  // GPS DOP / 0016007B / DS
  "GPSDOP" |
  // GPS Speed Ref / 0016007C / CS
  "GPSSpeedRef" |
  // GPS Speed / 0016007D / DS
  "GPSSpeed" |
  // GPS Track Ref / 0016007E / CS
  "GPSTrackRef" |
  // GPS Track / 0016007F / DS
  "GPSTrack" |
  // GPS Img Direction Ref / 00160080 / CS
  "GPSImgDirectionRef" |
  // GPS Img Direction / 00160081 / DS
  "GPSImgDirection" |
  // GPS Map Datum / 00160082 / UT
  "GPSMapDatum" |
  // GPS Dest Latitude Ref / 00160083 / CS
  "GPSDestLatitudeRef" |
  // GPS Dest Latitude / 00160084 / DS
  "GPSDestLatitude" |
  // GPS Dest Longitude Ref / 00160085 / CS
  "GPSDestLongitudeRef" |
  // GPS Dest Longitude / 00160086 / DS
  "GPSDestLongitude" |
  // GPS Dest Bearing Ref / 00160087 / CS
  "GPSDestBearingRef" |
  // GPS Dest Bearing / 00160088 / DS
  "GPSDestBearing" |
  // GPS Dest Distance Ref / 00160089 / CS
  "GPSDestDistanceRef" |
  // GPS Dest Distance / 0016008A / DS
  "GPSDestDistance" |
  // GPS Processing Method / 0016008B / OB
  "GPSProcessingMethod" |
  // GPS Area Information / 0016008C / OB
  "GPSAreaInformation" |
  // GPS Date Stamp / 0016008D / DT
  "GPSDateStamp" |
  // GPS Differential / 0016008E / IS
  "GPSDifferential" |
  // Light Source Polarization / 00161001 / CS
  "LightSourcePolarization" |
  // Emitter Color Temperature / 00161002 / DS
  "EmitterColorTemperature" |
  // Contact Method / 00161003 / CS
  "ContactMethod" |
  // Immersion Media / 00161004 / CS
  "ImmersionMedia" |
  // Optical Magnification Factor / 00161005 / DS
  "OpticalMagnificationFactor" |
  // Contrast/Bolus Agent / 00180010 / LO
  "ContrastBolusAgent" |
  // Contrast/Bolus Agent Sequence / 00180012 / SQ
  "ContrastBolusAgentSequence" |
  // Contrast/Bolus T1 Relaxivity / 00180013 / FL
  "ContrastBolusT1Relaxivity" |
  // Contrast/Bolus Administration Route Sequence / 00180014 / SQ
  "ContrastBolusAdministrationRouteSequence" |
  // Body Part Examined / 00180015 / CS
  "BodyPartExamined" |
  // Scanning Sequence / 00180020 / CS
  "ScanningSequence" |
  // Sequence Variant / 00180021 / CS
  "SequenceVariant" |
  // Scan Options / 00180022 / CS
  "ScanOptions" |
  // MR Acquisition Type / 00180023 / CS
  "MRAcquisitionType" |
  // Sequence Name / 00180024 / SH
  "SequenceName" |
  // Angio Flag / 00180025 / CS
  "AngioFlag" |
  // Intervention Drug Information Sequence / 00180026 / SQ
  "InterventionDrugInformationSequence" |
  // Intervention Drug Stop Time / 00180027 / TM
  "InterventionDrugStopTime" |
  // Intervention Drug Dose / 00180028 / DS
  "InterventionDrugDose" |
  // Intervention Drug Code Sequence / 00180029 / SQ
  "InterventionDrugCodeSequence" |
  // Additional Drug Sequence / 0018002A / SQ
  "AdditionalDrugSequence" |
  // Radionuclide / 00180030 / LO
  "Radionuclide" |
  // Radiopharmaceutical / 00180031 / LO
  "Radiopharmaceutical" |
  // Energy Window Centerline / 00180032 / DS
  "EnergyWindowCenterline" |
  // Energy Window Total Width / 00180033 / DS
  "EnergyWindowTotalWidth" |
  // Intervention Drug Name / 00180034 / LO
  "InterventionDrugName" |
  // Intervention Drug Start Time / 00180035 / TM
  "InterventionDrugStartTime" |
  // Intervention Sequence / 00180036 / SQ
  "InterventionSequence" |
  // Therapy Type / 00180037 / CS
  "TherapyType" |
  // Intervention Status / 00180038 / CS
  "InterventionStatus" |
  // Therapy Description / 00180039 / CS
  "TherapyDescription" |
  // Intervention Description / 0018003A / ST
  "InterventionDescription" |
  // Cine Rate / 00180040 / IS
  "CineRate" |
  // Initial Cine Run State / 00180042 / CS
  "InitialCineRunState" |
  // Slice Thickness / 00180050 / DS
  "SliceThickness" |
  // KVP / 00180060 / DS
  "KVP" |
  // Counts Accumulated / 00180070 / IS
  "CountsAccumulated" |
  // Acquisition Termination Condition / 00180071 / CS
  "AcquisitionTerminationCondition" |
  // Effective Duration / 00180072 / DS
  "EffectiveDuration" |
  // Acquisition Start Condition / 00180073 / CS
  "AcquisitionStartCondition" |
  // Acquisition Start Condition Data / 00180074 / IS
  "AcquisitionStartConditionData" |
  // Acquisition Termination Condition Data / 00180075 / IS
  "AcquisitionTerminationConditionData" |
  // Repetition Time / 00180080 / DS
  "RepetitionTime" |
  // Echo Time / 00180081 / DS
  "EchoTime" |
  // Inversion Time / 00180082 / DS
  "InversionTime" |
  // Number of Averages / 00180083 / DS
  "NumberOfAverages" |
  // Imaging Frequency / 00180084 / DS
  "ImagingFrequency" |
  // Imaged Nucleus / 00180085 / SH
  "ImagedNucleus" |
  // Echo Number(s) / 00180086 / IS
  "EchoNumbers" |
  // Magnetic Field Strength / 00180087 / DS
  "MagneticFieldStrength" |
  // Spacing Between Slices / 00180088 / DS
  "SpacingBetweenSlices" |
  // Number of Phase Encoding Steps / 00180089 / IS
  "NumberOfPhaseEncodingSteps" |
  // Data Collection Diameter / 00180090 / DS
  "DataCollectionDiameter" |
  // Echo Train Length / 00180091 / IS
  "EchoTrainLength" |
  // Percent Sampling / 00180093 / DS
  "PercentSampling" |
  // Percent Phase Field of View / 00180094 / DS
  "PercentPhaseFieldOfView" |
  // Pixel Bandwidth / 00180095 / DS
  "PixelBandwidth" |
  // Device Serial Number / 00181000 / LO
  "DeviceSerialNumber" |
  // Device UID / 00181002 / UI
  "DeviceUID" |
  // Device ID / 00181003 / LO
  "DeviceID" |
  // Plate ID / 00181004 / LO
  "PlateID" |
  // Generator ID / 00181005 / LO
  "GeneratorID" |
  // Grid ID / 00181006 / LO
  "GridID" |
  // Cassette ID / 00181007 / LO
  "CassetteID" |
  // Gantry ID / 00181008 / LO
  "GantryID" |
  // Unique Device Identifier / 00181009 / UT
  "UniqueDeviceIdentifier" |
  // UDI Sequence / 0018100A / SQ
  "UDISequence" |
  // Manufacturer's Device Class UID / 0018100B / UI
  "ManufacturerDeviceClassUID" |
  // Secondary Capture Device ID / 00181010 / LO
  "SecondaryCaptureDeviceID" |
  // Hardcopy Creation Device ID / 00181011 / LO
  "HardcopyCreationDeviceID" |
  // Date of Secondary Capture / 00181012 / DA
  "DateOfSecondaryCapture" |
  // Time of Secondary Capture / 00181014 / TM
  "TimeOfSecondaryCapture" |
  // Secondary Capture Device Manufacturer / 00181016 / LO
  "SecondaryCaptureDeviceManufacturer" |
  // Hardcopy Device Manufacturer / 00181017 / LO
  "HardcopyDeviceManufacturer" |
  // Secondary Capture Device Manufacturer's Model Name / 00181018 / LO
  "SecondaryCaptureDeviceManufacturerModelName" |
  // Secondary Capture Device Software Versions / 00181019 / LO
  "SecondaryCaptureDeviceSoftwareVersions" |
  // Hardcopy Device Software Version / 0018101A / LO
  "HardcopyDeviceSoftwareVersion" |
  // Hardcopy Device Manufacturer's Model Name / 0018101B / LO
  "HardcopyDeviceManufacturerModelName" |
  // Software Versions / 00181020 / LO
  "SoftwareVersions" |
  // Video Image Format Acquired / 00181022 / SH
  "VideoImageFormatAcquired" |
  // Digital Image Format Acquired / 00181023 / LO
  "DigitalImageFormatAcquired" |
  // Protocol Name / 00181030 / LO
  "ProtocolName" |
  // Contrast/Bolus Route / 00181040 / LO
  "ContrastBolusRoute" |
  // Contrast/Bolus Volume / 00181041 / DS
  "ContrastBolusVolume" |
  // Contrast/Bolus Start Time / 00181042 / TM
  "ContrastBolusStartTime" |
  // Contrast/Bolus Stop Time / 00181043 / TM
  "ContrastBolusStopTime" |
  // Contrast/Bolus Total Dose / 00181044 / DS
  "ContrastBolusTotalDose" |
  // Syringe Counts / 00181045 / IS
  "SyringeCounts" |
  // Contrast Flow Rate / 00181046 / DS
  "ContrastFlowRate" |
  // Contrast Flow Duration / 00181047 / DS
  "ContrastFlowDuration" |
  // Contrast/Bolus Ingredient / 00181048 / CS
  "ContrastBolusIngredient" |
  // Contrast/Bolus Ingredient Concentration / 00181049 / DS
  "ContrastBolusIngredientConcentration" |
  // Spatial Resolution / 00181050 / DS
  "SpatialResolution" |
  // Trigger Time / 00181060 / DS
  "TriggerTime" |
  // Trigger Source or Type / 00181061 / LO
  "TriggerSourceOrType" |
  // Nominal Interval / 00181062 / IS
  "NominalInterval" |
  // Frame Time / 00181063 / DS
  "FrameTime" |
  // Cardiac Framing Type / 00181064 / LO
  "CardiacFramingType" |
  // Frame Time Vector / 00181065 / DS
  "FrameTimeVector" |
  // Frame Delay / 00181066 / DS
  "FrameDelay" |
  // Image Trigger Delay / 00181067 / DS
  "ImageTriggerDelay" |
  // Multiplex Group Time Offset / 00181068 / DS
  "MultiplexGroupTimeOffset" |
  // Trigger Time Offset / 00181069 / DS
  "TriggerTimeOffset" |
  // Synchronization Trigger / 0018106A / CS
  "SynchronizationTrigger" |
  // Synchronization Channel / 0018106C / US
  "SynchronizationChannel" |
  // Trigger Sample Position / 0018106E / UL
  "TriggerSamplePosition" |
  // Radiopharmaceutical Route / 00181070 / LO
  "RadiopharmaceuticalRoute" |
  // Radiopharmaceutical Volume / 00181071 / DS
  "RadiopharmaceuticalVolume" |
  // Radiopharmaceutical Start Time / 00181072 / TM
  "RadiopharmaceuticalStartTime" |
  // Radiopharmaceutical Stop Time / 00181073 / TM
  "RadiopharmaceuticalStopTime" |
  // Radionuclide Total Dose / 00181074 / DS
  "RadionuclideTotalDose" |
  // Radionuclide Half Life / 00181075 / DS
  "RadionuclideHalfLife" |
  // Radionuclide Positron Fraction / 00181076 / DS
  "RadionuclidePositronFraction" |
  // Radiopharmaceutical Specific Activity / 00181077 / DS
  "RadiopharmaceuticalSpecificActivity" |
  // Radiopharmaceutical Start DateTime / 00181078 / DT
  "RadiopharmaceuticalStartDateTime" |
  // Radiopharmaceutical Stop DateTime / 00181079 / DT
  "RadiopharmaceuticalStopDateTime" |
  // Beat Rejection Flag / 00181080 / CS
  "BeatRejectionFlag" |
  // Low R-R Value / 00181081 / IS
  "LowRRValue" |
  // High R-R Value / 00181082 / IS
  "HighRRValue" |
  // Intervals Acquired / 00181083 / IS
  "IntervalsAcquired" |
  // Intervals Rejected / 00181084 / IS
  "IntervalsRejected" |
  // PVC Rejection / 00181085 / LO
  "PVCRejection" |
  // Skip Beats / 00181086 / IS
  "SkipBeats" |
  // Heart Rate / 00181088 / IS
  "HeartRate" |
  // Cardiac Number of Images / 00181090 / IS
  "CardiacNumberOfImages" |
  // Trigger Window / 00181094 / IS
  "TriggerWindow" |
  // Reconstruction Diameter / 00181100 / DS
  "ReconstructionDiameter" |
  // Distance Source to Detector / 00181110 / DS
  "DistanceSourceToDetector" |
  // Distance Source to Patient / 00181111 / DS
  "DistanceSourceToPatient" |
  // Estimated Radiographic Magnification Factor / 00181114 / DS
  "EstimatedRadiographicMagnificationFactor" |
  // Gantry/Detector Tilt / 00181120 / DS
  "GantryDetectorTilt" |
  // Gantry/Detector Slew / 00181121 / DS
  "GantryDetectorSlew" |
  // Table Height / 00181130 / DS
  "TableHeight" |
  // Table Traverse / 00181131 / DS
  "TableTraverse" |
  // Table Motion / 00181134 / CS
  "TableMotion" |
  // Table Vertical Increment / 00181135 / DS
  "TableVerticalIncrement" |
  // Table Lateral Increment / 00181136 / DS
  "TableLateralIncrement" |
  // Table Longitudinal Increment / 00181137 / DS
  "TableLongitudinalIncrement" |
  // Table Angle / 00181138 / DS
  "TableAngle" |
  // Table Type / 0018113A / CS
  "TableType" |
  // Rotation Direction / 00181140 / CS
  "RotationDirection" |
  // Angular Position / 00181141 / DS
  "AngularPosition" |
  // Radial Position / 00181142 / DS
  "RadialPosition" |
  // Scan Arc / 00181143 / DS
  "ScanArc" |
  // Angular Step / 00181144 / DS
  "AngularStep" |
  // Center of Rotation Offset / 00181145 / DS
  "CenterOfRotationOffset" |
  // Rotation Offset / 00181146 / DS
  "RotationOffset" |
  // Field of View Shape / 00181147 / CS
  "FieldOfViewShape" |
  // Field of View Dimension(s) / 00181149 / IS
  "FieldOfViewDimensions" |
  // Exposure Time / 00181150 / IS
  "ExposureTime" |
  // X-Ray Tube Current / 00181151 / IS
  "XRayTubeCurrent" |
  // Exposure / 00181152 / IS
  "Exposure" |
  // Exposure in µAs / 00181153 / IS
  "ExposureInuAs" |
  // Average Pulse Width / 00181154 / DS
  "AveragePulseWidth" |
  // Radiation Setting / 00181155 / CS
  "RadiationSetting" |
  // Rectification Type / 00181156 / CS
  "RectificationType" |
  // Radiation Mode / 0018115A / CS
  "RadiationMode" |
  // Image and Fluoroscopy Area Dose Product / 0018115E / DS
  "ImageAndFluoroscopyAreaDoseProduct" |
  // Filter Type / 00181160 / SH
  "FilterType" |
  // Type of Filters / 00181161 / LO
  "TypeOfFilters" |
  // Intensifier Size / 00181162 / DS
  "IntensifierSize" |
  // Imager Pixel Spacing / 00181164 / DS
  "ImagerPixelSpacing" |
  // Grid / 00181166 / CS
  "Grid" |
  // Generator Power / 00181170 / IS
  "GeneratorPower" |
  // Collimator/grid Name / 00181180 / SH
  "CollimatorGridName" |
  // Collimator Type / 00181181 / CS
  "CollimatorType" |
  // Focal Distance / 00181182 / IS
  "FocalDistance" |
  // X Focus Center / 00181183 / DS
  "XFocusCenter" |
  // Y Focus Center / 00181184 / DS
  "YFocusCenter" |
  // Focal Spot(s) / 00181190 / DS
  "FocalSpots" |
  // Anode Target Material / 00181191 / CS
  "AnodeTargetMaterial" |
  // Body Part Thickness / 001811A0 / DS
  "BodyPartThickness" |
  // Compression Force / 001811A2 / DS
  "CompressionForce" |
  // Compression Pressure / 001811A3 / DS
  "CompressionPressure" |
  // Paddle Description / 001811A4 / LO
  "PaddleDescription" |
  // Compression Contact Area / 001811A5 / DS
  "CompressionContactArea" |
  // Acquisition Mode / 001811B0 / LO
  "AcquisitionMode" |
  // Dose Mode Name / 001811B1 / LO
  "DoseModeName" |
  // Acquired Subtraction Mask Flag / 001811B2 / CS
  "AcquiredSubtractionMaskFlag" |
  // Fluoroscopy Persistence Flag / 001811B3 / CS
  "FluoroscopyPersistenceFlag" |
  // Fluoroscopy Last Image Hold Persistence Flag / 001811B4 / CS
  "FluoroscopyLastImageHoldPersistenceFlag" |
  // Upper Limit Number Of Persistent Fluoroscopy Frames / 001811B5 / IS
  "UpperLimitNumberOfPersistentFluoroscopyFrames" |
  // Contrast/Bolus Auto Injection Trigger Flag / 001811B6 / CS
  "ContrastBolusAutoInjectionTriggerFlag" |
  // Contrast/Bolus Injection Delay / 001811B7 / FD
  "ContrastBolusInjectionDelay" |
  // XA Acquisition Phase Details Sequence / 001811B8 / SQ
  "XAAcquisitionPhaseDetailsSequence" |
  // XA Acquisition Frame Rate / 001811B9 / FD
  "XAAcquisitionFrameRate" |
  // XA Plane Details Sequence / 001811BA / SQ
  "XAPlaneDetailsSequence" |
  // Acquisition Field of View Label / 001811BB / LO
  "AcquisitionFieldOfViewLabel" |
  // X-Ray Filter Details Sequence / 001811BC / SQ
  "XRayFilterDetailsSequence" |
  // XA Acquisition Duration / 001811BD / FD
  "XAAcquisitionDuration" |
  // Reconstruction Pipeline Type / 001811BE / CS
  "ReconstructionPipelineType" |
  // Image Filter Details Sequence / 001811BF / SQ
  "ImageFilterDetailsSequence" |
  // Applied Mask Subtraction Flag / 001811C0 / CS
  "AppliedMaskSubtractionFlag" |
  // Requested Series Description Code Sequence / 001811C1 / SQ
  "RequestedSeriesDescriptionCodeSequence" |
  // Date of Last Calibration / 00181200 / DA
  "DateOfLastCalibration" |
  // Time of Last Calibration / 00181201 / TM
  "TimeOfLastCalibration" |
  // DateTime of Last Calibration / 00181202 / DT
  "DateTimeOfLastCalibration" |
  // Calibration DateTime / 00181203 / DT
  "CalibrationDateTime" |
  // Convolution Kernel / 00181210 / SH
  "ConvolutionKernel" |
  // Upper/Lower Pixel Values / 00181240 / IS
  "UpperLowerPixelValues" |
  // Actual Frame Duration / 00181242 / IS
  "ActualFrameDuration" |
  // Count Rate / 00181243 / IS
  "CountRate" |
  // Preferred Playback Sequencing / 00181244 / US
  "PreferredPlaybackSequencing" |
  // Receive Coil Name / 00181250 / SH
  "ReceiveCoilName" |
  // Transmit Coil Name / 00181251 / SH
  "TransmitCoilName" |
  // Plate Type / 00181260 / SH
  "PlateType" |
  // Phosphor Type / 00181261 / LO
  "PhosphorType" |
  // Water Equivalent Diameter / 00181271 / FD
  "WaterEquivalentDiameter" |
  // Water Equivalent Diameter Calculation Method Code Sequence / 00181272 / SQ
  "WaterEquivalentDiameterCalculationMethodCodeSequence" |
  // Scan Velocity / 00181300 / DS
  "ScanVelocity" |
  // Whole Body Technique / 00181301 / CS
  "WholeBodyTechnique" |
  // Scan Length / 00181302 / IS
  "ScanLength" |
  // Acquisition Matrix / 00181310 / US
  "AcquisitionMatrix" |
  // In-plane Phase Encoding Direction / 00181312 / CS
  "InPlanePhaseEncodingDirection" |
  // Flip Angle / 00181314 / DS
  "FlipAngle" |
  // Variable Flip Angle Flag / 00181315 / CS
  "VariableFlipAngleFlag" |
  // SAR / 00181316 / DS
  "SAR" |
  // dB/dt / 00181318 / DS
  "dBdt" |
  // B1rms / 00181320 / FL
  "B1rms" |
  // Acquisition Device Processing Description / 00181400 / LO
  "AcquisitionDeviceProcessingDescription" |
  // Acquisition Device Processing Code / 00181401 / LO
  "AcquisitionDeviceProcessingCode" |
  // Cassette Orientation / 00181402 / CS
  "CassetteOrientation" |
  // Cassette Size / 00181403 / CS
  "CassetteSize" |
  // Exposures on Plate / 00181404 / US
  "ExposuresOnPlate" |
  // Relative X-Ray Exposure / 00181405 / IS
  "RelativeXRayExposure" |
  // Exposure Index / 00181411 / DS
  "ExposureIndex" |
  // Target Exposure Index / 00181412 / DS
  "TargetExposureIndex" |
  // Deviation Index / 00181413 / DS
  "DeviationIndex" |
  // Column Angulation / 00181450 / DS
  "ColumnAngulation" |
  // Tomo Layer Height / 00181460 / DS
  "TomoLayerHeight" |
  // Tomo Angle / 00181470 / DS
  "TomoAngle" |
  // Tomo Time / 00181480 / DS
  "TomoTime" |
  // Tomo Type / 00181490 / CS
  "TomoType" |
  // Tomo Class / 00181491 / CS
  "TomoClass" |
  // Number of Tomosynthesis Source Images / 00181495 / IS
  "NumberOfTomosynthesisSourceImages" |
  // Positioner Motion / 00181500 / CS
  "PositionerMotion" |
  // Positioner Type / 00181508 / CS
  "PositionerType" |
  // Positioner Primary Angle / 00181510 / DS
  "PositionerPrimaryAngle" |
  // Positioner Secondary Angle / 00181511 / DS
  "PositionerSecondaryAngle" |
  // Positioner Primary Angle Increment / 00181520 / DS
  "PositionerPrimaryAngleIncrement" |
  // Positioner Secondary Angle Increment / 00181521 / DS
  "PositionerSecondaryAngleIncrement" |
  // Detector Primary Angle / 00181530 / DS
  "DetectorPrimaryAngle" |
  // Detector Secondary Angle / 00181531 / DS
  "DetectorSecondaryAngle" |
  // Shutter Shape / 00181600 / CS
  "ShutterShape" |
  // Shutter Left Vertical Edge / 00181602 / IS
  "ShutterLeftVerticalEdge" |
  // Shutter Right Vertical Edge / 00181604 / IS
  "ShutterRightVerticalEdge" |
  // Shutter Upper Horizontal Edge / 00181606 / IS
  "ShutterUpperHorizontalEdge" |
  // Shutter Lower Horizontal Edge / 00181608 / IS
  "ShutterLowerHorizontalEdge" |
  // Center of Circular Shutter / 00181610 / IS
  "CenterOfCircularShutter" |
  // Radius of Circular Shutter / 00181612 / IS
  "RadiusOfCircularShutter" |
  // Vertices of the Polygonal Shutter / 00181620 / IS
  "VerticesOfThePolygonalShutter" |
  // Shutter Presentation Value / 00181622 / US
  "ShutterPresentationValue" |
  // Shutter Overlay Group / 00181623 / US
  "ShutterOverlayGroup" |
  // Shutter Presentation Color CIELab Value / 00181624 / US
  "ShutterPresentationColorCIELabValue" |
  // Outline Shape Type / 00181630 / CS
  "OutlineShapeType" |
  // Outline Left Vertical Edge / 00181631 / FD
  "OutlineLeftVerticalEdge" |
  // Outline Right Vertical Edge / 00181632 / FD
  "OutlineRightVerticalEdge" |
  // Outline Upper Horizontal Edge / 00181633 / FD
  "OutlineUpperHorizontalEdge" |
  // Outline Lower Horizontal Edge / 00181634 / FD
  "OutlineLowerHorizontalEdge" |
  // Center of Circular Outline / 00181635 / FD
  "CenterOfCircularOutline" |
  // Diameter of Circular Outline / 00181636 / FD
  "DiameterOfCircularOutline" |
  // Number of Polygonal Vertices / 00181637 / UL
  "NumberOfPolygonalVertices" |
  // Vertices of the Polygonal Outline / 00181638 / OF
  "VerticesOfThePolygonalOutline" |
  // Collimator Shape / 00181700 / CS
  "CollimatorShape" |
  // Collimator Left Vertical Edge / 00181702 / IS
  "CollimatorLeftVerticalEdge" |
  // Collimator Right Vertical Edge / 00181704 / IS
  "CollimatorRightVerticalEdge" |
  // Collimator Upper Horizontal Edge / 00181706 / IS
  "CollimatorUpperHorizontalEdge" |
  // Collimator Lower Horizontal Edge / 00181708 / IS
  "CollimatorLowerHorizontalEdge" |
  // Center of Circular Collimator / 00181710 / IS
  "CenterOfCircularCollimator" |
  // Radius of Circular Collimator / 00181712 / IS
  "RadiusOfCircularCollimator" |
  // Vertices of the Polygonal Collimator / 00181720 / IS
  "VerticesOfThePolygonalCollimator" |
  // Acquisition Time Synchronized / 00181800 / CS
  "AcquisitionTimeSynchronized" |
  // Time Source / 00181801 / SH
  "TimeSource" |
  // Time Distribution Protocol / 00181802 / CS
  "TimeDistributionProtocol" |
  // NTP Source Address / 00181803 / LO
  "NTPSourceAddress" |
  // Page Number Vector / 00182001 / IS
  "PageNumberVector" |
  // Frame Label Vector / 00182002 / SH
  "FrameLabelVector" |
  // Frame Primary Angle Vector / 00182003 / DS
  "FramePrimaryAngleVector" |
  // Frame Secondary Angle Vector / 00182004 / DS
  "FrameSecondaryAngleVector" |
  // Slice Location Vector / 00182005 / DS
  "SliceLocationVector" |
  // Display Window Label Vector / 00182006 / SH
  "DisplayWindowLabelVector" |
  // Nominal Scanned Pixel Spacing / 00182010 / DS
  "NominalScannedPixelSpacing" |
  // Digitizing Device Transport Direction / 00182020 / CS
  "DigitizingDeviceTransportDirection" |
  // Rotation of Scanned Film / 00182030 / DS
  "RotationOfScannedFilm" |
  // Biopsy Target Sequence / 00182041 / SQ
  "BiopsyTargetSequence" |
  // Target UID / 00182042 / UI
  "TargetUID" |
  // Localizing Cursor Position / 00182043 / FL
  "LocalizingCursorPosition" |
  // Calculated Target Position / 00182044 / FL
  "CalculatedTargetPosition" |
  // Target Label / 00182045 / SH
  "TargetLabel" |
  // Displayed Z Value / 00182046 / FL
  "DisplayedZValue" |
  // IVUS Acquisition / 00183100 / CS
  "IVUSAcquisition" |
  // IVUS Pullback Rate / 00183101 / DS
  "IVUSPullbackRate" |
  // IVUS Gated Rate / 00183102 / DS
  "IVUSGatedRate" |
  // IVUS Pullback Start Frame Number / 00183103 / IS
  "IVUSPullbackStartFrameNumber" |
  // IVUS Pullback Stop Frame Number / 00183104 / IS
  "IVUSPullbackStopFrameNumber" |
  // Lesion Number / 00183105 / IS
  "LesionNumber" |
  // Acquisition Comments / 00184000 / LT
  "AcquisitionComments" |
  // Output Power / 00185000 / SH
  "OutputPower" |
  // Transducer Data / 00185010 / LO
  "TransducerData" |
  // Transducer Identification Sequence / 00185011 / SQ
  "TransducerIdentificationSequence" |
  // Focus Depth / 00185012 / DS
  "FocusDepth" |
  // Processing Function / 00185020 / LO
  "ProcessingFunction" |
  // Postprocessing Function / 00185021 / LO
  "PostprocessingFunction" |
  // Mechanical Index / 00185022 / DS
  "MechanicalIndex" |
  // Bone Thermal Index / 00185024 / DS
  "BoneThermalIndex" |
  // Cranial Thermal Index / 00185026 / DS
  "CranialThermalIndex" |
  // Soft Tissue Thermal Index / 00185027 / DS
  "SoftTissueThermalIndex" |
  // Soft Tissue-focus Thermal Index / 00185028 / DS
  "SoftTissueFocusThermalIndex" |
  // Soft Tissue-surface Thermal Index / 00185029 / DS
  "SoftTissueSurfaceThermalIndex" |
  // Dynamic Range / 00185030 / DS
  "DynamicRange" |
  // Total Gain / 00185040 / DS
  "TotalGain" |
  // Depth of Scan Field / 00185050 / IS
  "DepthOfScanField" |
  // Patient Position / 00185100 / CS
  "PatientPosition" |
  // View Position / 00185101 / CS
  "ViewPosition" |
  // Projection Eponymous Name Code Sequence / 00185104 / SQ
  "ProjectionEponymousNameCodeSequence" |
  // Image Transformation Matrix / 00185210 / DS
  "ImageTransformationMatrix" |
  // Image Translation Vector / 00185212 / DS
  "ImageTranslationVector" |
  // Sensitivity / 00186000 / DS
  "Sensitivity" |
  // Sequence of Ultrasound Regions / 00186011 / SQ
  "SequenceOfUltrasoundRegions" |
  // Region Spatial Format / 00186012 / US
  "RegionSpatialFormat" |
  // Region Data Type / 00186014 / US
  "RegionDataType" |
  // Region Flags / 00186016 / UL
  "RegionFlags" |
  // Region Location Min X0 / 00186018 / UL
  "RegionLocationMinX0" |
  // Region Location Min Y0 / 0018601A / UL
  "RegionLocationMinY0" |
  // Region Location Max X1 / 0018601C / UL
  "RegionLocationMaxX1" |
  // Region Location Max Y1 / 0018601E / UL
  "RegionLocationMaxY1" |
  // Reference Pixel X0 / 00186020 / SL
  "ReferencePixelX0" |
  // Reference Pixel Y0 / 00186022 / SL
  "ReferencePixelY0" |
  // Physical Units X Direction / 00186024 / US
  "PhysicalUnitsXDirection" |
  // Physical Units Y Direction / 00186026 / US
  "PhysicalUnitsYDirection" |
  // Reference Pixel Physical Value X / 00186028 / FD
  "ReferencePixelPhysicalValueX" |
  // Reference Pixel Physical Value Y / 0018602A / FD
  "ReferencePixelPhysicalValueY" |
  // Physical Delta X / 0018602C / FD
  "PhysicalDeltaX" |
  // Physical Delta Y / 0018602E / FD
  "PhysicalDeltaY" |
  // Transducer Frequency / 00186030 / UL
  "TransducerFrequency" |
  // Transducer Type / 00186031 / CS
  "TransducerType" |
  // Pulse Repetition Frequency / 00186032 / UL
  "PulseRepetitionFrequency" |
  // Doppler Correction Angle / 00186034 / FD
  "DopplerCorrectionAngle" |
  // Steering Angle / 00186036 / FD
  "SteeringAngle" |
  // Doppler Sample Volume X Position (Retired) / 00186038 / UL
  "DopplerSampleVolumeXPositionRetired" |
  // Doppler Sample Volume X Position / 00186039 / SL
  "DopplerSampleVolumeXPosition" |
  // Doppler Sample Volume Y Position (Retired) / 0018603A / UL
  "DopplerSampleVolumeYPositionRetired" |
  // Doppler Sample Volume Y Position / 0018603B / SL
  "DopplerSampleVolumeYPosition" |
  // TM-Line Position X0 (Retired) / 0018603C / UL
  "TMLinePositionX0Retired" |
  // TM-Line Position X0 / 0018603D / SL
  "TMLinePositionX0" |
  // TM-Line Position Y0 (Retired) / 0018603E / UL
  "TMLinePositionY0Retired" |
  // TM-Line Position Y0 / 0018603F / SL
  "TMLinePositionY0" |
  // TM-Line Position X1 (Retired) / 00186040 / UL
  "TMLinePositionX1Retired" |
  // TM-Line Position X1 / 00186041 / SL
  "TMLinePositionX1" |
  // TM-Line Position Y1 (Retired) / 00186042 / UL
  "TMLinePositionY1Retired" |
  // TM-Line Position Y1 / 00186043 / SL
  "TMLinePositionY1" |
  // Pixel Component Organization / 00186044 / US
  "PixelComponentOrganization" |
  // Pixel Component Mask / 00186046 / UL
  "PixelComponentMask" |
  // Pixel Component Range Start / 00186048 / UL
  "PixelComponentRangeStart" |
  // Pixel Component Range Stop / 0018604A / UL
  "PixelComponentRangeStop" |
  // Pixel Component Physical Units / 0018604C / US
  "PixelComponentPhysicalUnits" |
  // Pixel Component Data Type / 0018604E / US
  "PixelComponentDataType" |
  // Number of Table Break Points / 00186050 / UL
  "NumberOfTableBreakPoints" |
  // Table of X Break Points / 00186052 / UL
  "TableOfXBreakPoints" |
  // Table of Y Break Points / 00186054 / FD
  "TableOfYBreakPoints" |
  // Number of Table Entries / 00186056 / UL
  "NumberOfTableEntries" |
  // Table of Pixel Values / 00186058 / UL
  "TableOfPixelValues" |
  // Table of Parameter Values / 0018605A / FL
  "TableOfParameterValues" |
  // R Wave Time Vector / 00186060 / FL
  "RWaveTimeVector" |
  // Active Image Area Overlay Group / 00186070 / US
  "ActiveImageAreaOverlayGroup" |
  // Detector Conditions Nominal Flag / 00187000 / CS
  "DetectorConditionsNominalFlag" |
  // Detector Temperature / 00187001 / DS
  "DetectorTemperature" |
  // Detector Type / 00187004 / CS
  "DetectorType" |
  // Detector Configuration / 00187005 / CS
  "DetectorConfiguration" |
  // Detector Description / 00187006 / LT
  "DetectorDescription" |
  // Detector Mode / 00187008 / LT
  "DetectorMode" |
  // Detector ID / 0018700A / SH
  "DetectorID" |
  // Date of Last Detector Calibration / 0018700C / DA
  "DateOfLastDetectorCalibration" |
  // Time of Last Detector Calibration / 0018700E / TM
  "TimeOfLastDetectorCalibration" |
  // Exposures on Detector Since Last Calibration / 00187010 / IS
  "ExposuresOnDetectorSinceLastCalibration" |
  // Exposures on Detector Since Manufactured / 00187011 / IS
  "ExposuresOnDetectorSinceManufactured" |
  // Detector Time Since Last Exposure / 00187012 / DS
  "DetectorTimeSinceLastExposure" |
  // Detector Active Time / 00187014 / DS
  "DetectorActiveTime" |
  // Detector Activation Offset From Exposure / 00187016 / DS
  "DetectorActivationOffsetFromExposure" |
  // Detector Binning / 0018701A / DS
  "DetectorBinning" |
  // Detector Element Physical Size / 00187020 / DS
  "DetectorElementPhysicalSize" |
  // Detector Element Spacing / 00187022 / DS
  "DetectorElementSpacing" |
  // Detector Active Shape / 00187024 / CS
  "DetectorActiveShape" |
  // Detector Active Dimension(s) / 00187026 / DS
  "DetectorActiveDimensions" |
  // Detector Active Origin / 00187028 / DS
  "DetectorActiveOrigin" |
  // Detector Manufacturer Name / 0018702A / LO
  "DetectorManufacturerName" |
  // Detector Manufacturer's Model Name / 0018702B / LO
  "DetectorManufacturerModelName" |
  // Field of View Origin / 00187030 / DS
  "FieldOfViewOrigin" |
  // Field of View Rotation / 00187032 / DS
  "FieldOfViewRotation" |
  // Field of View Horizontal Flip / 00187034 / CS
  "FieldOfViewHorizontalFlip" |
  // Pixel Data Area Origin Relative To FOV / 00187036 / FL
  "PixelDataAreaOriginRelativeToFOV" |
  // Pixel Data Area Rotation Angle Relative To FOV / 00187038 / FL
  "PixelDataAreaRotationAngleRelativeToFOV" |
  // Grid Absorbing Material / 00187040 / LT
  "GridAbsorbingMaterial" |
  // Grid Spacing Material / 00187041 / LT
  "GridSpacingMaterial" |
  // Grid Thickness / 00187042 / DS
  "GridThickness" |
  // Grid Pitch / 00187044 / DS
  "GridPitch" |
  // Grid Aspect Ratio / 00187046 / IS
  "GridAspectRatio" |
  // Grid Period / 00187048 / DS
  "GridPeriod" |
  // Grid Focal Distance / 0018704C / DS
  "GridFocalDistance" |
  // Filter Material / 00187050 / CS
  "FilterMaterial" |
  // Filter Thickness Minimum / 00187052 / DS
  "FilterThicknessMinimum" |
  // Filter Thickness Maximum / 00187054 / DS
  "FilterThicknessMaximum" |
  // Filter Beam Path Length Minimum / 00187056 / FL
  "FilterBeamPathLengthMinimum" |
  // Filter Beam Path Length Maximum / 00187058 / FL
  "FilterBeamPathLengthMaximum" |
  // Exposure Control Mode / 00187060 / CS
  "ExposureControlMode" |
  // Exposure Control Mode Description / 00187062 / LT
  "ExposureControlModeDescription" |
  // Exposure Status / 00187064 / CS
  "ExposureStatus" |
  // Phototimer Setting / 00187065 / DS
  "PhototimerSetting" |
  // Exposure Time in µS / 00188150 / DS
  "ExposureTimeInuS" |
  // X-Ray Tube Current in µA / 00188151 / DS
  "XRayTubeCurrentInuA" |
  // Content Qualification / 00189004 / CS
  "ContentQualification" |
  // Pulse Sequence Name / 00189005 / SH
  "PulseSequenceName" |
  // MR Imaging Modifier Sequence / 00189006 / SQ
  "MRImagingModifierSequence" |
  // Echo Pulse Sequence / 00189008 / CS
  "EchoPulseSequence" |
  // Inversion Recovery / 00189009 / CS
  "InversionRecovery" |
  // Flow Compensation / 00189010 / CS
  "FlowCompensation" |
  // Multiple Spin Echo / 00189011 / CS
  "MultipleSpinEcho" |
  // Multi-planar Excitation / 00189012 / CS
  "MultiPlanarExcitation" |
  // Phase Contrast / 00189014 / CS
  "PhaseContrast" |
  // Time of Flight Contrast / 00189015 / CS
  "TimeOfFlightContrast" |
  // Spoiling / 00189016 / CS
  "Spoiling" |
  // Steady State Pulse Sequence / 00189017 / CS
  "SteadyStatePulseSequence" |
  // Echo Planar Pulse Sequence / 00189018 / CS
  "EchoPlanarPulseSequence" |
  // Tag Angle First Axis / 00189019 / FD
  "TagAngleFirstAxis" |
  // Magnetization Transfer / 00189020 / CS
  "MagnetizationTransfer" |
  // T2 Preparation / 00189021 / CS
  "T2Preparation" |
  // Blood Signal Nulling / 00189022 / CS
  "BloodSignalNulling" |
  // Saturation Recovery / 00189024 / CS
  "SaturationRecovery" |
  // Spectrally Selected Suppression / 00189025 / CS
  "SpectrallySelectedSuppression" |
  // Spectrally Selected Excitation / 00189026 / CS
  "SpectrallySelectedExcitation" |
  // Spatial Pre-saturation / 00189027 / CS
  "SpatialPresaturation" |
  // Tagging / 00189028 / CS
  "Tagging" |
  // Oversampling Phase / 00189029 / CS
  "OversamplingPhase" |
  // Tag Spacing First Dimension / 00189030 / FD
  "TagSpacingFirstDimension" |
  // Geometry of k-Space Traversal / 00189032 / CS
  "GeometryOfKSpaceTraversal" |
  // Segmented k-Space Traversal / 00189033 / CS
  "SegmentedKSpaceTraversal" |
  // Rectilinear Phase Encode Reordering / 00189034 / CS
  "RectilinearPhaseEncodeReordering" |
  // Tag Thickness / 00189035 / FD
  "TagThickness" |
  // Partial Fourier Direction / 00189036 / CS
  "PartialFourierDirection" |
  // Cardiac Synchronization Technique / 00189037 / CS
  "CardiacSynchronizationTechnique" |
  // Receive Coil Manufacturer Name / 00189041 / LO
  "ReceiveCoilManufacturerName" |
  // MR Receive Coil Sequence / 00189042 / SQ
  "MRReceiveCoilSequence" |
  // Receive Coil Type / 00189043 / CS
  "ReceiveCoilType" |
  // Quadrature Receive Coil / 00189044 / CS
  "QuadratureReceiveCoil" |
  // Multi-Coil Definition Sequence / 00189045 / SQ
  "MultiCoilDefinitionSequence" |
  // Multi-Coil Configuration / 00189046 / LO
  "MultiCoilConfiguration" |
  // Multi-Coil Element Name / 00189047 / SH
  "MultiCoilElementName" |
  // Multi-Coil Element Used / 00189048 / CS
  "MultiCoilElementUsed" |
  // MR Transmit Coil Sequence / 00189049 / SQ
  "MRTransmitCoilSequence" |
  // Transmit Coil Manufacturer Name / 00189050 / LO
  "TransmitCoilManufacturerName" |
  // Transmit Coil Type / 00189051 / CS
  "TransmitCoilType" |
  // Spectral Width / 00189052 / FD
  "SpectralWidth" |
  // Chemical Shift Reference / 00189053 / FD
  "ChemicalShiftReference" |
  // Volume Localization Technique / 00189054 / CS
  "VolumeLocalizationTechnique" |
  // MR Acquisition Frequency Encoding Steps / 00189058 / US
  "MRAcquisitionFrequencyEncodingSteps" |
  // De-coupling / 00189059 / CS
  "Decoupling" |
  // De-coupled Nucleus / 00189060 / CS
  "DecoupledNucleus" |
  // De-coupling Frequency / 00189061 / FD
  "DecouplingFrequency" |
  // De-coupling Method / 00189062 / CS
  "DecouplingMethod" |
  // De-coupling Chemical Shift Reference / 00189063 / FD
  "DecouplingChemicalShiftReference" |
  // k-space Filtering / 00189064 / CS
  "KSpaceFiltering" |
  // Time Domain Filtering / 00189065 / CS
  "TimeDomainFiltering" |
  // Number of Zero Fills / 00189066 / US
  "NumberOfZeroFills" |
  // Baseline Correction / 00189067 / CS
  "BaselineCorrection" |
  // Parallel Reduction Factor In-plane / 00189069 / FD
  "ParallelReductionFactorInPlane" |
  // Cardiac R-R Interval Specified / 00189070 / FD
  "CardiacRRIntervalSpecified" |
  // Acquisition Duration / 00189073 / FD
  "AcquisitionDuration" |
  // Frame Acquisition DateTime / 00189074 / DT
  "FrameAcquisitionDateTime" |
  // Diffusion Directionality / 00189075 / CS
  "DiffusionDirectionality" |
  // Diffusion Gradient Direction Sequence / 00189076 / SQ
  "DiffusionGradientDirectionSequence" |
  // Parallel Acquisition / 00189077 / CS
  "ParallelAcquisition" |
  // Parallel Acquisition Technique / 00189078 / CS
  "ParallelAcquisitionTechnique" |
  // Inversion Times / 00189079 / FD
  "InversionTimes" |
  // Metabolite Map Description / 00189080 / ST
  "MetaboliteMapDescription" |
  // Partial Fourier / 00189081 / CS
  "PartialFourier" |
  // Effective Echo Time / 00189082 / FD
  "EffectiveEchoTime" |
  // Metabolite Map Code Sequence / 00189083 / SQ
  "MetaboliteMapCodeSequence" |
  // Chemical Shift Sequence / 00189084 / SQ
  "ChemicalShiftSequence" |
  // Cardiac Signal Source / 00189085 / CS
  "CardiacSignalSource" |
  // Diffusion b-value / 00189087 / FD
  "DiffusionBValue" |
  // Diffusion Gradient Orientation / 00189089 / FD
  "DiffusionGradientOrientation" |
  // Velocity Encoding Direction / 00189090 / FD
  "VelocityEncodingDirection" |
  // Velocity Encoding Minimum Value / 00189091 / FD
  "VelocityEncodingMinimumValue" |
  // Velocity Encoding Acquisition Sequence / 00189092 / SQ
  "VelocityEncodingAcquisitionSequence" |
  // Number of k-Space Trajectories / 00189093 / US
  "NumberOfKSpaceTrajectories" |
  // Coverage of k-Space / 00189094 / CS
  "CoverageOfKSpace" |
  // Spectroscopy Acquisition Phase Rows / 00189095 / UL
  "SpectroscopyAcquisitionPhaseRows" |
  // Parallel Reduction Factor In-plane (Retired) / 00189096 / FD
  "ParallelReductionFactorInPlaneRetired" |
  // Transmitter Frequency / 00189098 / FD
  "TransmitterFrequency" |
  // Resonant Nucleus / 00189100 / CS
  "ResonantNucleus" |
  // Frequency Correction / 00189101 / CS
  "FrequencyCorrection" |
  // MR Spectroscopy FOV/Geometry Sequence / 00189103 / SQ
  "MRSpectroscopyFOVGeometrySequence" |
  // Slab Thickness / 00189104 / FD
  "SlabThickness" |
  // Slab Orientation / 00189105 / FD
  "SlabOrientation" |
  // Mid Slab Position / 00189106 / FD
  "MidSlabPosition" |
  // MR Spatial Saturation Sequence / 00189107 / SQ
  "MRSpatialSaturationSequence" |
  // MR Timing and Related Parameters Sequence / 00189112 / SQ
  "MRTimingAndRelatedParametersSequence" |
  // MR Echo Sequence / 00189114 / SQ
  "MREchoSequence" |
  // MR Modifier Sequence / 00189115 / SQ
  "MRModifierSequence" |
  // MR Diffusion Sequence / 00189117 / SQ
  "MRDiffusionSequence" |
  // Cardiac Synchronization Sequence / 00189118 / SQ
  "CardiacSynchronizationSequence" |
  // MR Averages Sequence / 00189119 / SQ
  "MRAveragesSequence" |
  // MR FOV/Geometry Sequence / 00189125 / SQ
  "MRFOVGeometrySequence" |
  // Volume Localization Sequence / 00189126 / SQ
  "VolumeLocalizationSequence" |
  // Spectroscopy Acquisition Data Columns / 00189127 / UL
  "SpectroscopyAcquisitionDataColumns" |
  // Diffusion Anisotropy Type / 00189147 / CS
  "DiffusionAnisotropyType" |
  // Frame Reference DateTime / 00189151 / DT
  "FrameReferenceDateTime" |
  // MR Metabolite Map Sequence / 00189152 / SQ
  "MRMetaboliteMapSequence" |
  // Parallel Reduction Factor out-of-plane / 00189155 / FD
  "ParallelReductionFactorOutOfPlane" |
  // Spectroscopy Acquisition Out-of-plane Phase Steps / 00189159 / UL
  "SpectroscopyAcquisitionOutOfPlanePhaseSteps" |
  // Bulk Motion Status / 00189166 / CS
  "BulkMotionStatus" |
  // Parallel Reduction Factor Second In-plane / 00189168 / FD
  "ParallelReductionFactorSecondInPlane" |
  // Cardiac Beat Rejection Technique / 00189169 / CS
  "CardiacBeatRejectionTechnique" |
  // Respiratory Motion Compensation Technique / 00189170 / CS
  "RespiratoryMotionCompensationTechnique" |
  // Respiratory Signal Source / 00189171 / CS
  "RespiratorySignalSource" |
  // Bulk Motion Compensation Technique / 00189172 / CS
  "BulkMotionCompensationTechnique" |
  // Bulk Motion Signal Source / 00189173 / CS
  "BulkMotionSignalSource" |
  // Applicable Safety Standard Agency / 00189174 / CS
  "ApplicableSafetyStandardAgency" |
  // Applicable Safety Standard Description / 00189175 / LO
  "ApplicableSafetyStandardDescription" |
  // Operating Mode Sequence / 00189176 / SQ
  "OperatingModeSequence" |
  // Operating Mode Type / 00189177 / CS
  "OperatingModeType" |
  // Operating Mode / 00189178 / CS
  "OperatingMode" |
  // Specific Absorption Rate Definition / 00189179 / CS
  "SpecificAbsorptionRateDefinition" |
  // Gradient Output Type / 00189180 / CS
  "GradientOutputType" |
  // Specific Absorption Rate Value / 00189181 / FD
  "SpecificAbsorptionRateValue" |
  // Gradient Output / 00189182 / FD
  "GradientOutput" |
  // Flow Compensation Direction / 00189183 / CS
  "FlowCompensationDirection" |
  // Tagging Delay / 00189184 / FD
  "TaggingDelay" |
  // Respiratory Motion Compensation Technique Description / 00189185 / ST
  "RespiratoryMotionCompensationTechniqueDescription" |
  // Respiratory Signal Source ID / 00189186 / SH
  "RespiratorySignalSourceID" |
  // Chemical Shift Minimum Integration Limit in Hz / 00189195 / FD
  "ChemicalShiftMinimumIntegrationLimitInHz" |
  // Chemical Shift Maximum Integration Limit in Hz / 00189196 / FD
  "ChemicalShiftMaximumIntegrationLimitInHz" |
  // MR Velocity Encoding Sequence / 00189197 / SQ
  "MRVelocityEncodingSequence" |
  // First Order Phase Correction / 00189198 / CS
  "FirstOrderPhaseCorrection" |
  // Water Referenced Phase Correction / 00189199 / CS
  "WaterReferencedPhaseCorrection" |
  // MR Spectroscopy Acquisition Type / 00189200 / CS
  "MRSpectroscopyAcquisitionType" |
  // Respiratory Cycle Position / 00189214 / CS
  "RespiratoryCyclePosition" |
  // Velocity Encoding Maximum Value / 00189217 / FD
  "VelocityEncodingMaximumValue" |
  // Tag Spacing Second Dimension / 00189218 / FD
  "TagSpacingSecondDimension" |
  // Tag Angle Second Axis / 00189219 / SS
  "TagAngleSecondAxis" |
  // Frame Acquisition Duration / 00189220 / FD
  "FrameAcquisitionDuration" |
  // MR Image Frame Type Sequence / 00189226 / SQ
  "MRImageFrameTypeSequence" |
  // MR Spectroscopy Frame Type Sequence / 00189227 / SQ
  "MRSpectroscopyFrameTypeSequence" |
  // MR Acquisition Phase Encoding Steps in-plane / 00189231 / US
  "MRAcquisitionPhaseEncodingStepsInPlane" |
  // MR Acquisition Phase Encoding Steps out-of-plane / 00189232 / US
  "MRAcquisitionPhaseEncodingStepsOutOfPlane" |
  // Spectroscopy Acquisition Phase Columns / 00189234 / UL
  "SpectroscopyAcquisitionPhaseColumns" |
  // Cardiac Cycle Position / 00189236 / CS
  "CardiacCyclePosition" |
  // Specific Absorption Rate Sequence / 00189239 / SQ
  "SpecificAbsorptionRateSequence" |
  // RF Echo Train Length / 00189240 / US
  "RFEchoTrainLength" |
  // Gradient Echo Train Length / 00189241 / US
  "GradientEchoTrainLength" |
  // Arterial Spin Labeling Contrast / 00189250 / CS
  "ArterialSpinLabelingContrast" |
  // MR Arterial Spin Labeling Sequence / 00189251 / SQ
  "MRArterialSpinLabelingSequence" |
  // ASL Technique Description / 00189252 / LO
  "ASLTechniqueDescription" |
  // ASL Slab Number / 00189253 / US
  "ASLSlabNumber" |
  // ASL Slab Thickness / 00189254 / FD
  "ASLSlabThickness" |
  // ASL Slab Orientation / 00189255 / FD
  "ASLSlabOrientation" |
  // ASL Mid Slab Position / 00189256 / FD
  "ASLMidSlabPosition" |
  // ASL Context / 00189257 / CS
  "ASLContext" |
  // ASL Pulse Train Duration / 00189258 / UL
  "ASLPulseTrainDuration" |
  // ASL Crusher Flag / 00189259 / CS
  "ASLCrusherFlag" |
  // ASL Crusher Flow Limit / 0018925A / FD
  "ASLCrusherFlowLimit" |
  // ASL Crusher Description / 0018925B / LO
  "ASLCrusherDescription" |
  // ASL Bolus Cut-off Flag / 0018925C / CS
  "ASLBolusCutoffFlag" |
  // ASL Bolus Cut-off Timing Sequence / 0018925D / SQ
  "ASLBolusCutoffTimingSequence" |
  // ASL Bolus Cut-off Technique / 0018925E / LO
  "ASLBolusCutoffTechnique" |
  // ASL Bolus Cut-off Delay Time / 0018925F / UL
  "ASLBolusCutoffDelayTime" |
  // ASL Slab Sequence / 00189260 / SQ
  "ASLSlabSequence" |
  // Chemical Shift Minimum Integration Limit in ppm / 00189295 / FD
  "ChemicalShiftMinimumIntegrationLimitInppm" |
  // Chemical Shift Maximum Integration Limit in ppm / 00189296 / FD
  "ChemicalShiftMaximumIntegrationLimitInppm" |
  // Water Reference Acquisition / 00189297 / CS
  "WaterReferenceAcquisition" |
  // Echo Peak Position / 00189298 / IS
  "EchoPeakPosition" |
  // CT Acquisition Type Sequence / 00189301 / SQ
  "CTAcquisitionTypeSequence" |
  // Acquisition Type / 00189302 / CS
  "AcquisitionType" |
  // Tube Angle / 00189303 / FD
  "TubeAngle" |
  // CT Acquisition Details Sequence / 00189304 / SQ
  "CTAcquisitionDetailsSequence" |
  // Revolution Time / 00189305 / FD
  "RevolutionTime" |
  // Single Collimation Width / 00189306 / FD
  "SingleCollimationWidth" |
  // Total Collimation Width / 00189307 / FD
  "TotalCollimationWidth" |
  // CT Table Dynamics Sequence / 00189308 / SQ
  "CTTableDynamicsSequence" |
  // Table Speed / 00189309 / FD
  "TableSpeed" |
  // Table Feed per Rotation / 00189310 / FD
  "TableFeedPerRotation" |
  // Spiral Pitch Factor / 00189311 / FD
  "SpiralPitchFactor" |
  // CT Geometry Sequence / 00189312 / SQ
  "CTGeometrySequence" |
  // Data Collection Center (Patient) / 00189313 / FD
  "DataCollectionCenterPatient" |
  // CT Reconstruction Sequence / 00189314 / SQ
  "CTReconstructionSequence" |
  // Reconstruction Algorithm / 00189315 / CS
  "ReconstructionAlgorithm" |
  // Convolution Kernel Group / 00189316 / CS
  "ConvolutionKernelGroup" |
  // Reconstruction Field of View / 00189317 / FD
  "ReconstructionFieldOfView" |
  // Reconstruction Target Center (Patient) / 00189318 / FD
  "ReconstructionTargetCenterPatient" |
  // Reconstruction Angle / 00189319 / FD
  "ReconstructionAngle" |
  // Image Filter / 00189320 / SH
  "ImageFilter" |
  // CT Exposure Sequence / 00189321 / SQ
  "CTExposureSequence" |
  // Reconstruction Pixel Spacing / 00189322 / FD
  "ReconstructionPixelSpacing" |
  // Exposure Modulation Type / 00189323 / CS
  "ExposureModulationType" |
  // Estimated Dose Saving / 00189324 / FD
  "EstimatedDoseSaving" |
  // CT X-Ray Details Sequence / 00189325 / SQ
  "CTXRayDetailsSequence" |
  // CT Position Sequence / 00189326 / SQ
  "CTPositionSequence" |
  // Table Position / 00189327 / FD
  "TablePosition" |
  // Exposure Time in ms / 00189328 / FD
  "ExposureTimeInms" |
  // CT Image Frame Type Sequence / 00189329 / SQ
  "CTImageFrameTypeSequence" |
  // X-Ray Tube Current in mA / 00189330 / FD
  "XRayTubeCurrentInmA" |
  // Exposure in mAs / 00189332 / FD
  "ExposureInmAs" |
  // Constant Volume Flag / 00189333 / CS
  "ConstantVolumeFlag" |
  // Fluoroscopy Flag / 00189334 / CS
  "FluoroscopyFlag" |
  // Distance Source to Data Collection Center / 00189335 / FD
  "DistanceSourceToDataCollectionCenter" |
  // Contrast/Bolus Agent Number / 00189337 / US
  "ContrastBolusAgentNumber" |
  // Contrast/Bolus Ingredient Code Sequence / 00189338 / SQ
  "ContrastBolusIngredientCodeSequence" |
  // Contrast Administration Profile Sequence / 00189340 / SQ
  "ContrastAdministrationProfileSequence" |
  // Contrast/Bolus Usage Sequence / 00189341 / SQ
  "ContrastBolusUsageSequence" |
  // Contrast/Bolus Agent Administered / 00189342 / CS
  "ContrastBolusAgentAdministered" |
  // Contrast/Bolus Agent Detected / 00189343 / CS
  "ContrastBolusAgentDetected" |
  // Contrast/Bolus Agent Phase / 00189344 / CS
  "ContrastBolusAgentPhase" |
  // CTDIvol / 00189345 / FD
  "CTDIvol" |
  // CTDI Phantom Type Code Sequence / 00189346 / SQ
  "CTDIPhantomTypeCodeSequence" |
  // Calcium Scoring Mass Factor Patient / 00189351 / FL
  "CalciumScoringMassFactorPatient" |
  // Calcium Scoring Mass Factor Device / 00189352 / FL
  "CalciumScoringMassFactorDevice" |
  // Energy Weighting Factor / 00189353 / FL
  "EnergyWeightingFactor" |
  // CT Additional X-Ray Source Sequence / 00189360 / SQ
  "CTAdditionalXRaySourceSequence" |
  // Multi-energy CT Acquisition / 00189361 / CS
  "MultienergyCTAcquisition" |
  // Multi-energy CT Acquisition Sequence / 00189362 / SQ
  "MultienergyCTAcquisitionSequence" |
  // Multi-energy CT Processing Sequence / 00189363 / SQ
  "MultienergyCTProcessingSequence" |
  // Multi-energy CT Characteristics Sequence / 00189364 / SQ
  "MultienergyCTCharacteristicsSequence" |
  // Multi-energy CT X-Ray Source Sequence / 00189365 / SQ
  "MultienergyCTXRaySourceSequence" |
  // X-Ray Source Index / 00189366 / US
  "XRaySourceIndex" |
  // X-Ray Source ID / 00189367 / UC
  "XRaySourceID" |
  // Multi-energy Source Technique / 00189368 / CS
  "MultienergySourceTechnique" |
  // Source Start DateTime / 00189369 / DT
  "SourceStartDateTime" |
  // Source End DateTime / 0018936A / DT
  "SourceEndDateTime" |
  // Switching Phase Number / 0018936B / US
  "SwitchingPhaseNumber" |
  // Switching Phase Nominal Duration / 0018936C / DS
  "SwitchingPhaseNominalDuration" |
  // Switching Phase Transition Duration / 0018936D / DS
  "SwitchingPhaseTransitionDuration" |
  // Effective Bin Energy / 0018936E / DS
  "EffectiveBinEnergy" |
  // Multi-energy CT X-Ray Detector Sequence / 0018936F / SQ
  "MultienergyCTXRayDetectorSequence" |
  // X-Ray Detector Index / 00189370 / US
  "XRayDetectorIndex" |
  // X-Ray Detector ID / 00189371 / UC
  "XRayDetectorID" |
  // Multi-energy Detector Type / 00189372 / CS
  "MultienergyDetectorType" |
  // X-Ray Detector Label / 00189373 / ST
  "XRayDetectorLabel" |
  // Nominal Max Energy / 00189374 / DS
  "NominalMaxEnergy" |
  // Nominal Min Energy / 00189375 / DS
  "NominalMinEnergy" |
  // Referenced X-Ray Detector Index / 00189376 / US
  "ReferencedXRayDetectorIndex" |
  // Referenced X-Ray Source Index / 00189377 / US
  "ReferencedXRaySourceIndex" |
  // Referenced Path Index / 00189378 / US
  "ReferencedPathIndex" |
  // Multi-energy CT Path Sequence / 00189379 / SQ
  "MultienergyCTPathSequence" |
  // Multi-energy CT Path Index / 0018937A / US
  "MultienergyCTPathIndex" |
  // Multi-energy Acquisition Description / 0018937B / UT
  "MultienergyAcquisitionDescription" |
  // Monoenergetic Energy Equivalent / 0018937C / FD
  "MonoenergeticEnergyEquivalent" |
  // Material Code Sequence / 0018937D / SQ
  "MaterialCodeSequence" |
  // Decomposition Method / 0018937E / CS
  "DecompositionMethod" |
  // Decomposition Description / 0018937F / UT
  "DecompositionDescription" |
  // Decomposition Algorithm Identification Sequence / 00189380 / SQ
  "DecompositionAlgorithmIdentificationSequence" |
  // Decomposition Material Sequence / 00189381 / SQ
  "DecompositionMaterialSequence" |
  // Material Attenuation Sequence / 00189382 / SQ
  "MaterialAttenuationSequence" |
  // Photon Energy / 00189383 / DS
  "PhotonEnergy" |
  // X-Ray Mass Attenuation Coefficient / 00189384 / DS
  "XRayMassAttenuationCoefficient" |
  // Projection Pixel Calibration Sequence / 00189401 / SQ
  "ProjectionPixelCalibrationSequence" |
  // Distance Source to Isocenter / 00189402 / FL
  "DistanceSourceToIsocenter" |
  // Distance Object to Table Top / 00189403 / FL
  "DistanceObjectToTableTop" |
  // Object Pixel Spacing in Center of Beam / 00189404 / FL
  "ObjectPixelSpacingInCenterOfBeam" |
  // Positioner Position Sequence / 00189405 / SQ
  "PositionerPositionSequence" |
  // Table Position Sequence / 00189406 / SQ
  "TablePositionSequence" |
  // Collimator Shape Sequence / 00189407 / SQ
  "CollimatorShapeSequence" |
  // Planes in Acquisition / 00189410 / CS
  "PlanesInAcquisition" |
  // XA/XRF Frame Characteristics Sequence / 00189412 / SQ
  "XAXRFFrameCharacteristicsSequence" |
  // Frame Acquisition Sequence / 00189417 / SQ
  "FrameAcquisitionSequence" |
  // X-Ray Receptor Type / 00189420 / CS
  "XRayReceptorType" |
  // Acquisition Protocol Name / 00189423 / LO
  "AcquisitionProtocolName" |
  // Acquisition Protocol Description / 00189424 / LT
  "AcquisitionProtocolDescription" |
  // Contrast/Bolus Ingredient Opaque / 00189425 / CS
  "ContrastBolusIngredientOpaque" |
  // Distance Receptor Plane to Detector Housing / 00189426 / FL
  "DistanceReceptorPlaneToDetectorHousing" |
  // Intensifier Active Shape / 00189427 / CS
  "IntensifierActiveShape" |
  // Intensifier Active Dimension(s) / 00189428 / FL
  "IntensifierActiveDimensions" |
  // Physical Detector Size / 00189429 / FL
  "PhysicalDetectorSize" |
  // Position of Isocenter Projection / 00189430 / FL
  "PositionOfIsocenterProjection" |
  // Field of View Sequence / 00189432 / SQ
  "FieldOfViewSequence" |
  // Field of View Description / 00189433 / LO
  "FieldOfViewDescription" |
  // Exposure Control Sensing Regions Sequence / 00189434 / SQ
  "ExposureControlSensingRegionsSequence" |
  // Exposure Control Sensing Region Shape / 00189435 / CS
  "ExposureControlSensingRegionShape" |
  // Exposure Control Sensing Region Left Vertical Edge / 00189436 / SS
  "ExposureControlSensingRegionLeftVerticalEdge" |
  // Exposure Control Sensing Region Right Vertical Edge / 00189437 / SS
  "ExposureControlSensingRegionRightVerticalEdge" |
  // Exposure Control Sensing Region Upper Horizontal Edge / 00189438 / SS
  "ExposureControlSensingRegionUpperHorizontalEdge" |
  // Exposure Control Sensing Region Lower Horizontal Edge / 00189439 / SS
  "ExposureControlSensingRegionLowerHorizontalEdge" |
  // Center of Circular Exposure Control Sensing Region / 00189440 / SS
  "CenterOfCircularExposureControlSensingRegion" |
  // Radius of Circular Exposure Control Sensing Region / 00189441 / US
  "RadiusOfCircularExposureControlSensingRegion" |
  // Vertices of the Polygonal Exposure Control Sensing Region / 00189442 / SS
  "VerticesOfThePolygonalExposureControlSensingRegion" |
  // Column Angulation (Patient) / 00189447 / FL
  "ColumnAngulationPatient" |
  // Beam Angle / 00189449 / FL
  "BeamAngle" |
  // Frame Detector Parameters Sequence / 00189451 / SQ
  "FrameDetectorParametersSequence" |
  // Calculated Anatomy Thickness / 00189452 / FL
  "CalculatedAnatomyThickness" |
  // Calibration Sequence / 00189455 / SQ
  "CalibrationSequence" |
  // Object Thickness Sequence / 00189456 / SQ
  "ObjectThicknessSequence" |
  // Plane Identification / 00189457 / CS
  "PlaneIdentification" |
  // Field of View Dimension(s) in Float / 00189461 / FL
  "FieldOfViewDimensionsInFloat" |
  // Isocenter Reference System Sequence / 00189462 / SQ
  "IsocenterReferenceSystemSequence" |
  // Positioner Isocenter Primary Angle / 00189463 / FL
  "PositionerIsocenterPrimaryAngle" |
  // Positioner Isocenter Secondary Angle / 00189464 / FL
  "PositionerIsocenterSecondaryAngle" |
  // Positioner Isocenter Detector Rotation Angle / 00189465 / FL
  "PositionerIsocenterDetectorRotationAngle" |
  // Table X Position to Isocenter / 00189466 / FL
  "TableXPositionToIsocenter" |
  // Table Y Position to Isocenter / 00189467 / FL
  "TableYPositionToIsocenter" |
  // Table Z Position to Isocenter / 00189468 / FL
  "TableZPositionToIsocenter" |
  // Table Horizontal Rotation Angle / 00189469 / FL
  "TableHorizontalRotationAngle" |
  // Table Head Tilt Angle / 00189470 / FL
  "TableHeadTiltAngle" |
  // Table Cradle Tilt Angle / 00189471 / FL
  "TableCradleTiltAngle" |
  // Frame Display Shutter Sequence / 00189472 / SQ
  "FrameDisplayShutterSequence" |
  // Acquired Image Area Dose Product / 00189473 / FL
  "AcquiredImageAreaDoseProduct" |
  // C-arm Positioner Tabletop Relationship / 00189474 / CS
  "CArmPositionerTabletopRelationship" |
  // X-Ray Geometry Sequence / 00189476 / SQ
  "XRayGeometrySequence" |
  // Irradiation Event Identification Sequence / 00189477 / SQ
  "IrradiationEventIdentificationSequence" |
  // X-Ray 3D Frame Type Sequence / 00189504 / SQ
  "XRay3DFrameTypeSequence" |
  // Contributing Sources Sequence / 00189506 / SQ
  "ContributingSourcesSequence" |
  // X-Ray 3D Acquisition Sequence / 00189507 / SQ
  "XRay3DAcquisitionSequence" |
  // Primary Positioner Scan Arc / 00189508 / FL
  "PrimaryPositionerScanArc" |
  // Secondary Positioner Scan Arc / 00189509 / FL
  "SecondaryPositionerScanArc" |
  // Primary Positioner Scan Start Angle / 00189510 / FL
  "PrimaryPositionerScanStartAngle" |
  // Secondary Positioner Scan Start Angle / 00189511 / FL
  "SecondaryPositionerScanStartAngle" |
  // Primary Positioner Increment / 00189514 / FL
  "PrimaryPositionerIncrement" |
  // Secondary Positioner Increment / 00189515 / FL
  "SecondaryPositionerIncrement" |
  // Start Acquisition DateTime / 00189516 / DT
  "StartAcquisitionDateTime" |
  // End Acquisition DateTime / 00189517 / DT
  "EndAcquisitionDateTime" |
  // Primary Positioner Increment Sign / 00189518 / SS
  "PrimaryPositionerIncrementSign" |
  // Secondary Positioner Increment Sign / 00189519 / SS
  "SecondaryPositionerIncrementSign" |
  // Application Name / 00189524 / LO
  "ApplicationName" |
  // Application Version / 00189525 / LO
  "ApplicationVersion" |
  // Application Manufacturer / 00189526 / LO
  "ApplicationManufacturer" |
  // Algorithm Type / 00189527 / CS
  "AlgorithmType" |
  // Algorithm Description / 00189528 / LO
  "AlgorithmDescription" |
  // X-Ray 3D Reconstruction Sequence / 00189530 / SQ
  "XRay3DReconstructionSequence" |
  // Reconstruction Description / 00189531 / LO
  "ReconstructionDescription" |
  // Per Projection Acquisition Sequence / 00189538 / SQ
  "PerProjectionAcquisitionSequence" |
  // Detector Position Sequence / 00189541 / SQ
  "DetectorPositionSequence" |
  // X-Ray Acquisition Dose Sequence / 00189542 / SQ
  "XRayAcquisitionDoseSequence" |
  // X-Ray Source Isocenter Primary Angle / 00189543 / FD
  "XRaySourceIsocenterPrimaryAngle" |
  // X-Ray Source Isocenter Secondary Angle / 00189544 / FD
  "XRaySourceIsocenterSecondaryAngle" |
  // Breast Support Isocenter Primary Angle / 00189545 / FD
  "BreastSupportIsocenterPrimaryAngle" |
  // Breast Support Isocenter Secondary Angle / 00189546 / FD
  "BreastSupportIsocenterSecondaryAngle" |
  // Breast Support X Position to Isocenter / 00189547 / FD
  "BreastSupportXPositionToIsocenter" |
  // Breast Support Y Position to Isocenter / 00189548 / FD
  "BreastSupportYPositionToIsocenter" |
  // Breast Support Z Position to Isocenter / 00189549 / FD
  "BreastSupportZPositionToIsocenter" |
  // Detector Isocenter Primary Angle / 00189550 / FD
  "DetectorIsocenterPrimaryAngle" |
  // Detector Isocenter Secondary Angle / 00189551 / FD
  "DetectorIsocenterSecondaryAngle" |
  // Detector X Position to Isocenter / 00189552 / FD
  "DetectorXPositionToIsocenter" |
  // Detector Y Position to Isocenter / 00189553 / FD
  "DetectorYPositionToIsocenter" |
  // Detector Z Position to Isocenter / 00189554 / FD
  "DetectorZPositionToIsocenter" |
  // X-Ray Grid Sequence / 00189555 / SQ
  "XRayGridSequence" |
  // X-Ray Filter Sequence / 00189556 / SQ
  "XRayFilterSequence" |
  // Detector Active Area TLHC Position / 00189557 / FD
  "DetectorActiveAreaTLHCPosition" |
  // Detector Active Area Orientation / 00189558 / FD
  "DetectorActiveAreaOrientation" |
  // Positioner Primary Angle Direction / 00189559 / CS
  "PositionerPrimaryAngleDirection" |
  // Diffusion b-matrix Sequence / 00189601 / SQ
  "DiffusionBMatrixSequence" |
  // Diffusion b-value XX / 00189602 / FD
  "DiffusionBValueXX" |
  // Diffusion b-value XY / 00189603 / FD
  "DiffusionBValueXY" |
  // Diffusion b-value XZ / 00189604 / FD
  "DiffusionBValueXZ" |
  // Diffusion b-value YY / 00189605 / FD
  "DiffusionBValueYY" |
  // Diffusion b-value YZ / 00189606 / FD
  "DiffusionBValueYZ" |
  // Diffusion b-value ZZ / 00189607 / FD
  "DiffusionBValueZZ" |
  // Functional MR Sequence / 00189621 / SQ
  "FunctionalMRSequence" |
  // Functional Settling Phase Frames Present / 00189622 / CS
  "FunctionalSettlingPhaseFramesPresent" |
  // Functional Sync Pulse / 00189623 / DT
  "FunctionalSyncPulse" |
  // Settling Phase Frame / 00189624 / CS
  "SettlingPhaseFrame" |
  // Decay Correction DateTime / 00189701 / DT
  "DecayCorrectionDateTime" |
  // Start Density Threshold / 00189715 / FD
  "StartDensityThreshold" |
  // Start Relative Density Difference Threshold / 00189716 / FD
  "StartRelativeDensityDifferenceThreshold" |
  // Start Cardiac Trigger Count Threshold / 00189717 / FD
  "StartCardiacTriggerCountThreshold" |
  // Start Respiratory Trigger Count Threshold / 00189718 / FD
  "StartRespiratoryTriggerCountThreshold" |
  // Termination Counts Threshold / 00189719 / FD
  "TerminationCountsThreshold" |
  // Termination Density Threshold / 00189720 / FD
  "TerminationDensityThreshold" |
  // Termination Relative Density Threshold / 00189721 / FD
  "TerminationRelativeDensityThreshold" |
  // Termination Time Threshold / 00189722 / FD
  "TerminationTimeThreshold" |
  // Termination Cardiac Trigger Count Threshold / 00189723 / FD
  "TerminationCardiacTriggerCountThreshold" |
  // Termination Respiratory Trigger Count Threshold / 00189724 / FD
  "TerminationRespiratoryTriggerCountThreshold" |
  // Detector Geometry / 00189725 / CS
  "DetectorGeometry" |
  // Transverse Detector Separation / 00189726 / FD
  "TransverseDetectorSeparation" |
  // Axial Detector Dimension / 00189727 / FD
  "AxialDetectorDimension" |
  // Radiopharmaceutical Agent Number / 00189729 / US
  "RadiopharmaceuticalAgentNumber" |
  // PET Frame Acquisition Sequence / 00189732 / SQ
  "PETFrameAcquisitionSequence" |
  // PET Detector Motion Details Sequence / 00189733 / SQ
  "PETDetectorMotionDetailsSequence" |
  // PET Table Dynamics Sequence / 00189734 / SQ
  "PETTableDynamicsSequence" |
  // PET Position Sequence / 00189735 / SQ
  "PETPositionSequence" |
  // PET Frame Correction Factors Sequence / 00189736 / SQ
  "PETFrameCorrectionFactorsSequence" |
  // Radiopharmaceutical Usage Sequence / 00189737 / SQ
  "RadiopharmaceuticalUsageSequence" |
  // Attenuation Correction Source / 00189738 / CS
  "AttenuationCorrectionSource" |
  // Number of Iterations / 00189739 / US
  "NumberOfIterations" |
  // Number of Subsets / 00189740 / US
  "NumberOfSubsets" |
  // PET Reconstruction Sequence / 00189749 / SQ
  "PETReconstructionSequence" |
  // PET Frame Type Sequence / 00189751 / SQ
  "PETFrameTypeSequence" |
  // Time of Flight Information Used / 00189755 / CS
  "TimeOfFlightInformationUsed" |
  // Reconstruction Type / 00189756 / CS
  "ReconstructionType" |
  // Decay Corrected / 00189758 / CS
  "DecayCorrected" |
  // Attenuation Corrected / 00189759 / CS
  "AttenuationCorrected" |
  // Scatter Corrected / 00189760 / CS
  "ScatterCorrected" |
  // Dead Time Corrected / 00189761 / CS
  "DeadTimeCorrected" |
  // Gantry Motion Corrected / 00189762 / CS
  "GantryMotionCorrected" |
  // Patient Motion Corrected / 00189763 / CS
  "PatientMotionCorrected" |
  // Count Loss Normalization Corrected / 00189764 / CS
  "CountLossNormalizationCorrected" |
  // Randoms Corrected / 00189765 / CS
  "RandomsCorrected" |
  // Non-uniform Radial Sampling Corrected / 00189766 / CS
  "NonUniformRadialSamplingCorrected" |
  // Sensitivity Calibrated / 00189767 / CS
  "SensitivityCalibrated" |
  // Detector Normalization Correction / 00189768 / CS
  "DetectorNormalizationCorrection" |
  // Iterative Reconstruction Method / 00189769 / CS
  "IterativeReconstructionMethod" |
  // Attenuation Correction Temporal Relationship / 00189770 / CS
  "AttenuationCorrectionTemporalRelationship" |
  // Patient Physiological State Sequence / 00189771 / SQ
  "PatientPhysiologicalStateSequence" |
  // Patient Physiological State Code Sequence / 00189772 / SQ
  "PatientPhysiologicalStateCodeSequence" |
  // Depth(s) of Focus / 00189801 / FD
  "DepthsOfFocus" |
  // Excluded Intervals Sequence / 00189803 / SQ
  "ExcludedIntervalsSequence" |
  // Exclusion Start DateTime / 00189804 / DT
  "ExclusionStartDateTime" |
  // Exclusion Duration / 00189805 / FD
  "ExclusionDuration" |
  // US Image Description Sequence / 00189806 / SQ
  "USImageDescriptionSequence" |
  // Image Data Type Sequence / 00189807 / SQ
  "ImageDataTypeSequence" |
  // Data Type / 00189808 / CS
  "DataType" |
  // Transducer Scan Pattern Code Sequence / 00189809 / SQ
  "TransducerScanPatternCodeSequence" |
  // Aliased Data Type / 0018980B / CS
  "AliasedDataType" |
  // Position Measuring Device Used / 0018980C / CS
  "PositionMeasuringDeviceUsed" |
  // Transducer Geometry Code Sequence / 0018980D / SQ
  "TransducerGeometryCodeSequence" |
  // Transducer Beam Steering Code Sequence / 0018980E / SQ
  "TransducerBeamSteeringCodeSequence" |
  // Transducer Application Code Sequence / 0018980F / SQ
  "TransducerApplicationCodeSequence" |
  // Zero Velocity Pixel Value / 00189810 / US/SS
  "ZeroVelocityPixelValue" |
  // Reference Location Label / 00189900 / LO
  "ReferenceLocationLabel" |
  // Reference Location Description / 00189901 / UT
  "ReferenceLocationDescription" |
  // Reference Basis Code Sequence / 00189902 / SQ
  "ReferenceBasisCodeSequence" |
  // Reference Geometry Code Sequence / 00189903 / SQ
  "ReferenceGeometryCodeSequence" |
  // Offset Distance / 00189904 / DS
  "OffsetDistance" |
  // Offset Direction / 00189905 / CS
  "OffsetDirection" |
  // Potential Scheduled Protocol Code Sequence / 00189906 / SQ
  "PotentialScheduledProtocolCodeSequence" |
  // Potential Requested Procedure Code Sequence / 00189907 / SQ
  "PotentialRequestedProcedureCodeSequence" |
  // Potential Reasons for Procedure / 00189908 / UC
  "PotentialReasonsForProcedure" |
  // Potential Reasons for Procedure Code Sequence / 00189909 / SQ
  "PotentialReasonsForProcedureCodeSequence" |
  // Potential Diagnostic Tasks / 0018990A / UC
  "PotentialDiagnosticTasks" |
  // Contraindications Code Sequence / 0018990B / SQ
  "ContraindicationsCodeSequence" |
  // Referenced Defined Protocol Sequence / 0018990C / SQ
  "ReferencedDefinedProtocolSequence" |
  // Referenced Performed Protocol Sequence / 0018990D / SQ
  "ReferencedPerformedProtocolSequence" |
  // Predecessor Protocol Sequence / 0018990E / SQ
  "PredecessorProtocolSequence" |
  // Protocol Planning Information / 0018990F / UT
  "ProtocolPlanningInformation" |
  // Protocol Design Rationale / 00189910 / UT
  "ProtocolDesignRationale" |
  // Patient Specification Sequence / 00189911 / SQ
  "PatientSpecificationSequence" |
  // Model Specification Sequence / 00189912 / SQ
  "ModelSpecificationSequence" |
  // Parameters Specification Sequence / 00189913 / SQ
  "ParametersSpecificationSequence" |
  // Instruction Sequence / 00189914 / SQ
  "InstructionSequence" |
  // Instruction Index / 00189915 / US
  "InstructionIndex" |
  // Instruction Text / 00189916 / LO
  "InstructionText" |
  // Instruction Description / 00189917 / UT
  "InstructionDescription" |
  // Instruction Performed Flag / 00189918 / CS
  "InstructionPerformedFlag" |
  // Instruction Performed DateTime / 00189919 / DT
  "InstructionPerformedDateTime" |
  // Instruction Performance Comment / 0018991A / UT
  "InstructionPerformanceComment" |
  // Patient Positioning Instruction Sequence / 0018991B / SQ
  "PatientPositioningInstructionSequence" |
  // Positioning Method Code Sequence / 0018991C / SQ
  "PositioningMethodCodeSequence" |
  // Positioning Landmark Sequence / 0018991D / SQ
  "PositioningLandmarkSequence" |
  // Target Frame of Reference UID / 0018991E / UI
  "TargetFrameOfReferenceUID" |
  // Acquisition Protocol Element Specification Sequence / 0018991F / SQ
  "AcquisitionProtocolElementSpecificationSequence" |
  // Acquisition Protocol Element Sequence / 00189920 / SQ
  "AcquisitionProtocolElementSequence" |
  // Protocol Element Number / 00189921 / US
  "ProtocolElementNumber" |
  // Protocol Element Name / 00189922 / LO
  "ProtocolElementName" |
  // Protocol Element Characteristics Summary / 00189923 / UT
  "ProtocolElementCharacteristicsSummary" |
  // Protocol Element Purpose / 00189924 / UT
  "ProtocolElementPurpose" |
  // Acquisition Motion / 00189930 / CS
  "AcquisitionMotion" |
  // Acquisition Start Location Sequence / 00189931 / SQ
  "AcquisitionStartLocationSequence" |
  // Acquisition End Location Sequence / 00189932 / SQ
  "AcquisitionEndLocationSequence" |
  // Reconstruction Protocol Element Specification Sequence / 00189933 / SQ
  "ReconstructionProtocolElementSpecificationSequence" |
  // Reconstruction Protocol Element Sequence / 00189934 / SQ
  "ReconstructionProtocolElementSequence" |
  // Storage Protocol Element Specification Sequence / 00189935 / SQ
  "StorageProtocolElementSpecificationSequence" |
  // Storage Protocol Element Sequence / 00189936 / SQ
  "StorageProtocolElementSequence" |
  // Requested Series Description / 00189937 / LO
  "RequestedSeriesDescription" |
  // Source Acquisition Protocol Element Number / 00189938 / US
  "SourceAcquisitionProtocolElementNumber" |
  // Source Acquisition Beam Number / 00189939 / US
  "SourceAcquisitionBeamNumber" |
  // Source Reconstruction Protocol Element Number / 0018993A / US
  "SourceReconstructionProtocolElementNumber" |
  // Reconstruction Start Location Sequence / 0018993B / SQ
  "ReconstructionStartLocationSequence" |
  // Reconstruction End Location Sequence / 0018993C / SQ
  "ReconstructionEndLocationSequence" |
  // Reconstruction Algorithm Sequence / 0018993D / SQ
  "ReconstructionAlgorithmSequence" |
  // Reconstruction Target Center Location Sequence / 0018993E / SQ
  "ReconstructionTargetCenterLocationSequence" |
  // Image Filter Description / 00189941 / UT
  "ImageFilterDescription" |
  // CTDIvol Notification Trigger / 00189942 / FD
  "CTDIvolNotificationTrigger" |
  // DLP Notification Trigger / 00189943 / FD
  "DLPNotificationTrigger" |
  // Auto KVP Selection Type / 00189944 / CS
  "AutoKVPSelectionType" |
  // Auto KVP Upper Bound / 00189945 / FD
  "AutoKVPUpperBound" |
  // Auto KVP Lower Bound / 00189946 / FD
  "AutoKVPLowerBound" |
  // Protocol Defined Patient Position / 00189947 / CS
  "ProtocolDefinedPatientPosition" |
  // Contributing Equipment Sequence / 0018A001 / SQ
  "ContributingEquipmentSequence" |
  // Contribution DateTime / 0018A002 / DT
  "ContributionDateTime" |
  // Contribution Description / 0018A003 / ST
  "ContributionDescription" |
  // Study Instance UID / 0020000D / UI
  "StudyInstanceUID" |
  // Series Instance UID / 0020000E / UI
  "SeriesInstanceUID" |
  // Study ID / 00200010 / SH
  "StudyID" |
  // Series Number / 00200011 / IS
  "SeriesNumber" |
  // Acquisition Number / 00200012 / IS
  "AcquisitionNumber" |
  // Instance Number / 00200013 / IS
  "InstanceNumber" |
  // Isotope Number / 00200014 / IS
  "IsotopeNumber" |
  // Phase Number / 00200015 / IS
  "PhaseNumber" |
  // Interval Number / 00200016 / IS
  "IntervalNumber" |
  // Time Slot Number / 00200017 / IS
  "TimeSlotNumber" |
  // Angle Number / 00200018 / IS
  "AngleNumber" |
  // Item Number / 00200019 / IS
  "ItemNumber" |
  // Patient Orientation / 00200020 / CS
  "PatientOrientation" |
  // Overlay Number / 00200022 / IS
  "OverlayNumber" |
  // Curve Number / 00200024 / IS
  "CurveNumber" |
  // LUT Number / 00200026 / IS
  "LUTNumber" |
  // Pyramid Label / 00200027 / LO
  "PyramidLabel" |
  // Image Position / 00200030 / DS
  "ImagePosition" |
  // Image Position (Patient) / 00200032 / DS
  "ImagePositionPatient" |
  // Image Orientation / 00200035 / DS
  "ImageOrientation" |
  // Image Orientation (Patient) / 00200037 / DS
  "ImageOrientationPatient" |
  // Location / 00200050 / DS
  "Location" |
  // Frame of Reference UID / 00200052 / UI
  "FrameOfReferenceUID" |
  // Laterality / 00200060 / CS
  "Laterality" |
  // Image Laterality / 00200062 / CS
  "ImageLaterality" |
  // Image Geometry Type / 00200070 / LO
  "ImageGeometryType" |
  // Masking Image / 00200080 / CS
  "MaskingImage" |
  // Report Number / 002000AA / IS
  "ReportNumber" |
  // Temporal Position Identifier / 00200100 / IS
  "TemporalPositionIdentifier" |
  // Number of Temporal Positions / 00200105 / IS
  "NumberOfTemporalPositions" |
  // Temporal Resolution / 00200110 / DS
  "TemporalResolution" |
  // Synchronization Frame of Reference UID / 00200200 / UI
  "SynchronizationFrameOfReferenceUID" |
  // SOP Instance UID of Concatenation Source / 00200242 / UI
  "SOPInstanceUIDOfConcatenationSource" |
  // Series in Study / 00201000 / IS
  "SeriesInStudy" |
  // Acquisitions in Series / 00201001 / IS
  "AcquisitionsInSeries" |
  // Images in Acquisition / 00201002 / IS
  "ImagesInAcquisition" |
  // Images in Series / 00201003 / IS
  "ImagesInSeries" |
  // Acquisitions in Study / 00201004 / IS
  "AcquisitionsInStudy" |
  // Images in Study / 00201005 / IS
  "ImagesInStudy" |
  // Reference / 00201020 / LO
  "Reference" |
  // Target Position Reference Indicator / 0020103F / LO
  "TargetPositionReferenceIndicator" |
  // Position Reference Indicator / 00201040 / LO
  "PositionReferenceIndicator" |
  // Slice Location / 00201041 / DS
  "SliceLocation" |
  // Other Study Numbers / 00201070 / IS
  "OtherStudyNumbers" |
  // Number of Patient Related Studies / 00201200 / IS
  "NumberOfPatientRelatedStudies" |
  // Number of Patient Related Series / 00201202 / IS
  "NumberOfPatientRelatedSeries" |
  // Number of Patient Related Instances / 00201204 / IS
  "NumberOfPatientRelatedInstances" |
  // Number of Study Related Series / 00201206 / IS
  "NumberOfStudyRelatedSeries" |
  // Number of Study Related Instances / 00201208 / IS
  "NumberOfStudyRelatedInstances" |
  // Number of Series Related Instances / 00201209 / IS
  "NumberOfSeriesRelatedInstances" |
  // Source Image IDs / 002031xx / CS
  "SourceImageIDs" |
  // Modifying Device ID / 00203401 / CS
  "ModifyingDeviceID" |
  // Modified Image ID / 00203402 / CS
  "ModifiedImageID" |
  // Modified Image Date / 00203403 / DA
  "ModifiedImageDate" |
  // Modifying Device Manufacturer / 00203404 / LO
  "ModifyingDeviceManufacturer" |
  // Modified Image Time / 00203405 / TM
  "ModifiedImageTime" |
  // Modified Image Description / 00203406 / LO
  "ModifiedImageDescription" |
  // Image Comments / 00204000 / LT
  "ImageComments" |
  // Original Image Identification / 00205000 / AT
  "OriginalImageIdentification" |
  // Original Image Identification Nomenclature / 00205002 / LO
  "OriginalImageIdentificationNomenclature" |
  // Stack ID / 00209056 / SH
  "StackID" |
  // In-Stack Position Number / 00209057 / UL
  "InStackPositionNumber" |
  // Frame Anatomy Sequence / 00209071 / SQ
  "FrameAnatomySequence" |
  // Frame Laterality / 00209072 / CS
  "FrameLaterality" |
  // Frame Content Sequence / 00209111 / SQ
  "FrameContentSequence" |
  // Plane Position Sequence / 00209113 / SQ
  "PlanePositionSequence" |
  // Plane Orientation Sequence / 00209116 / SQ
  "PlaneOrientationSequence" |
  // Temporal Position Index / 00209128 / UL
  "TemporalPositionIndex" |
  // Nominal Cardiac Trigger Delay Time / 00209153 / FD
  "NominalCardiacTriggerDelayTime" |
  // Nominal Cardiac Trigger Time Prior To R-Peak / 00209154 / FL
  "NominalCardiacTriggerTimePriorToRPeak" |
  // Actual Cardiac Trigger Time Prior To R-Peak / 00209155 / FL
  "ActualCardiacTriggerTimePriorToRPeak" |
  // Frame Acquisition Number / 00209156 / US
  "FrameAcquisitionNumber" |
  // Dimension Index Values / 00209157 / UL
  "DimensionIndexValues" |
  // Frame Comments / 00209158 / LT
  "FrameComments" |
  // Concatenation UID / 00209161 / UI
  "ConcatenationUID" |
  // In-concatenation Number / 00209162 / US
  "InConcatenationNumber" |
  // In-concatenation Total Number / 00209163 / US
  "InConcatenationTotalNumber" |
  // Dimension Organization UID / 00209164 / UI
  "DimensionOrganizationUID" |
  // Dimension Index Pointer / 00209165 / AT
  "DimensionIndexPointer" |
  // Functional Group Pointer / 00209167 / AT
  "FunctionalGroupPointer" |
  // Unassigned Shared Converted Attributes Sequence / 00209170 / SQ
  "UnassignedSharedConvertedAttributesSequence" |
  // Unassigned Per-Frame Converted Attributes Sequence / 00209171 / SQ
  "UnassignedPerFrameConvertedAttributesSequence" |
  // Conversion Source Attributes Sequence / 00209172 / SQ
  "ConversionSourceAttributesSequence" |
  // Dimension Index Private Creator / 00209213 / LO
  "DimensionIndexPrivateCreator" |
  // Dimension Organization Sequence / 00209221 / SQ
  "DimensionOrganizationSequence" |
  // Dimension Index Sequence / 00209222 / SQ
  "DimensionIndexSequence" |
  // Concatenation Frame Offset Number / 00209228 / UL
  "ConcatenationFrameOffsetNumber" |
  // Functional Group Private Creator / 00209238 / LO
  "FunctionalGroupPrivateCreator" |
  // Nominal Percentage of Cardiac Phase / 00209241 / FL
  "NominalPercentageOfCardiacPhase" |
  // Nominal Percentage of Respiratory Phase / 00209245 / FL
  "NominalPercentageOfRespiratoryPhase" |
  // Starting Respiratory Amplitude / 00209246 / FL
  "StartingRespiratoryAmplitude" |
  // Starting Respiratory Phase / 00209247 / CS
  "StartingRespiratoryPhase" |
  // Ending Respiratory Amplitude / 00209248 / FL
  "EndingRespiratoryAmplitude" |
  // Ending Respiratory Phase / 00209249 / CS
  "EndingRespiratoryPhase" |
  // Respiratory Trigger Type / 00209250 / CS
  "RespiratoryTriggerType" |
  // R-R Interval Time Nominal / 00209251 / FD
  "RRIntervalTimeNominal" |
  // Actual Cardiac Trigger Delay Time / 00209252 / FD
  "ActualCardiacTriggerDelayTime" |
  // Respiratory Synchronization Sequence / 00209253 / SQ
  "RespiratorySynchronizationSequence" |
  // Respiratory Interval Time / 00209254 / FD
  "RespiratoryIntervalTime" |
  // Nominal Respiratory Trigger Delay Time / 00209255 / FD
  "NominalRespiratoryTriggerDelayTime" |
  // Respiratory Trigger Delay Threshold / 00209256 / FD
  "RespiratoryTriggerDelayThreshold" |
  // Actual Respiratory Trigger Delay Time / 00209257 / FD
  "ActualRespiratoryTriggerDelayTime" |
  // Image Position (Volume) / 00209301 / FD
  "ImagePositionVolume" |
  // Image Orientation (Volume) / 00209302 / FD
  "ImageOrientationVolume" |
  // Ultrasound Acquisition Geometry / 00209307 / CS
  "UltrasoundAcquisitionGeometry" |
  // Apex Position / 00209308 / FD
  "ApexPosition" |
  // Volume to Transducer Mapping Matrix / 00209309 / FD
  "VolumeToTransducerMappingMatrix" |
  // Volume to Table Mapping Matrix / 0020930A / FD
  "VolumeToTableMappingMatrix" |
  // Volume to Transducer Relationship / 0020930B / CS
  "VolumeToTransducerRelationship" |
  // Patient Frame of Reference Source / 0020930C / CS
  "PatientFrameOfReferenceSource" |
  // Temporal Position Time Offset / 0020930D / FD
  "TemporalPositionTimeOffset" |
  // Plane Position (Volume) Sequence / 0020930E / SQ
  "PlanePositionVolumeSequence" |
  // Plane Orientation (Volume) Sequence / 0020930F / SQ
  "PlaneOrientationVolumeSequence" |
  // Temporal Position Sequence / 00209310 / SQ
  "TemporalPositionSequence" |
  // Dimension Organization Type / 00209311 / CS
  "DimensionOrganizationType" |
  // Volume Frame of Reference UID / 00209312 / UI
  "VolumeFrameOfReferenceUID" |
  // Table Frame of Reference UID / 00209313 / UI
  "TableFrameOfReferenceUID" |
  // Dimension Description Label / 00209421 / LO
  "DimensionDescriptionLabel" |
  // Patient Orientation in Frame Sequence / 00209450 / SQ
  "PatientOrientationInFrameSequence" |
  // Frame Label / 00209453 / LO
  "FrameLabel" |
  // Acquisition Index / 00209518 / US
  "AcquisitionIndex" |
  // Contributing SOP Instances Reference Sequence / 00209529 / SQ
  "ContributingSOPInstancesReferenceSequence" |
  // Reconstruction Index / 00209536 / US
  "ReconstructionIndex" |
  // Light Path Filter Pass-Through Wavelength / 00220001 / US
  "LightPathFilterPassThroughWavelength" |
  // Light Path Filter Pass Band / 00220002 / US
  "LightPathFilterPassBand" |
  // Image Path Filter Pass-Through Wavelength / 00220003 / US
  "ImagePathFilterPassThroughWavelength" |
  // Image Path Filter Pass Band / 00220004 / US
  "ImagePathFilterPassBand" |
  // Patient Eye Movement Commanded / 00220005 / CS
  "PatientEyeMovementCommanded" |
  // Patient Eye Movement Command Code Sequence / 00220006 / SQ
  "PatientEyeMovementCommandCodeSequence" |
  // Spherical Lens Power / 00220007 / FL
  "SphericalLensPower" |
  // Cylinder Lens Power / 00220008 / FL
  "CylinderLensPower" |
  // Cylinder Axis / 00220009 / FL
  "CylinderAxis" |
  // Emmetropic Magnification / 0022000A / FL
  "EmmetropicMagnification" |
  // Intra Ocular Pressure / 0022000B / FL
  "IntraOcularPressure" |
  // Horizontal Field of View / 0022000C / FL
  "HorizontalFieldOfView" |
  // Pupil Dilated / 0022000D / CS
  "PupilDilated" |
  // Degree of Dilation / 0022000E / FL
  "DegreeOfDilation" |
  // Stereo Baseline Angle / 00220010 / FL
  "StereoBaselineAngle" |
  // Stereo Baseline Displacement / 00220011 / FL
  "StereoBaselineDisplacement" |
  // Stereo Horizontal Pixel Offset / 00220012 / FL
  "StereoHorizontalPixelOffset" |
  // Stereo Vertical Pixel Offset / 00220013 / FL
  "StereoVerticalPixelOffset" |
  // Stereo Rotation / 00220014 / FL
  "StereoRotation" |
  // Acquisition Device Type Code Sequence / 00220015 / SQ
  "AcquisitionDeviceTypeCodeSequence" |
  // Illumination Type Code Sequence / 00220016 / SQ
  "IlluminationTypeCodeSequence" |
  // Light Path Filter Type Stack Code Sequence / 00220017 / SQ
  "LightPathFilterTypeStackCodeSequence" |
  // Image Path Filter Type Stack Code Sequence / 00220018 / SQ
  "ImagePathFilterTypeStackCodeSequence" |
  // Lenses Code Sequence / 00220019 / SQ
  "LensesCodeSequence" |
  // Channel Description Code Sequence / 0022001A / SQ
  "ChannelDescriptionCodeSequence" |
  // Refractive State Sequence / 0022001B / SQ
  "RefractiveStateSequence" |
  // Mydriatic Agent Code Sequence / 0022001C / SQ
  "MydriaticAgentCodeSequence" |
  // Relative Image Position Code Sequence / 0022001D / SQ
  "RelativeImagePositionCodeSequence" |
  // Camera Angle of View / 0022001E / FL
  "CameraAngleOfView" |
  // Stereo Pairs Sequence / 00220020 / SQ
  "StereoPairsSequence" |
  // Left Image Sequence / 00220021 / SQ
  "LeftImageSequence" |
  // Right Image Sequence / 00220022 / SQ
  "RightImageSequence" |
  // Stereo Pairs Present / 00220028 / CS
  "StereoPairsPresent" |
  // Axial Length of the Eye / 00220030 / FL
  "AxialLengthOfTheEye" |
  // Ophthalmic Frame Location Sequence / 00220031 / SQ
  "OphthalmicFrameLocationSequence" |
  // Reference Coordinates / 00220032 / FL
  "ReferenceCoordinates" |
  // Depth Spatial Resolution / 00220035 / FL
  "DepthSpatialResolution" |
  // Maximum Depth Distortion / 00220036 / FL
  "MaximumDepthDistortion" |
  // Along-scan Spatial Resolution / 00220037 / FL
  "AlongScanSpatialResolution" |
  // Maximum Along-scan Distortion / 00220038 / FL
  "MaximumAlongScanDistortion" |
  // Ophthalmic Image Orientation / 00220039 / CS
  "OphthalmicImageOrientation" |
  // Depth of Transverse Image / 00220041 / FL
  "DepthOfTransverseImage" |
  // Mydriatic Agent Concentration Units Sequence / 00220042 / SQ
  "MydriaticAgentConcentrationUnitsSequence" |
  // Across-scan Spatial Resolution / 00220048 / FL
  "AcrossScanSpatialResolution" |
  // Maximum Across-scan Distortion / 00220049 / FL
  "MaximumAcrossScanDistortion" |
  // Mydriatic Agent Concentration / 0022004E / DS
  "MydriaticAgentConcentration" |
  // Illumination Wave Length / 00220055 / FL
  "IlluminationWaveLength" |
  // Illumination Power / 00220056 / FL
  "IlluminationPower" |
  // Illumination Bandwidth / 00220057 / FL
  "IlluminationBandwidth" |
  // Mydriatic Agent Sequence / 00220058 / SQ
  "MydriaticAgentSequence" |
  // Ophthalmic Axial Measurements Right Eye Sequence / 00221007 / SQ
  "OphthalmicAxialMeasurementsRightEyeSequence" |
  // Ophthalmic Axial Measurements Left Eye Sequence / 00221008 / SQ
  "OphthalmicAxialMeasurementsLeftEyeSequence" |
  // Ophthalmic Axial Measurements Device Type / 00221009 / CS
  "OphthalmicAxialMeasurementsDeviceType" |
  // Ophthalmic Axial Length Measurements Type / 00221010 / CS
  "OphthalmicAxialLengthMeasurementsType" |
  // Ophthalmic Axial Length Sequence / 00221012 / SQ
  "OphthalmicAxialLengthSequence" |
  // Ophthalmic Axial Length / 00221019 / FL
  "OphthalmicAxialLength" |
  // Lens Status Code Sequence / 00221024 / SQ
  "LensStatusCodeSequence" |
  // Vitreous Status Code Sequence / 00221025 / SQ
  "VitreousStatusCodeSequence" |
  // IOL Formula Code Sequence / 00221028 / SQ
  "IOLFormulaCodeSequence" |
  // IOL Formula Detail / 00221029 / LO
  "IOLFormulaDetail" |
  // Keratometer Index / 00221033 / FL
  "KeratometerIndex" |
  // Source of Ophthalmic Axial Length Code Sequence / 00221035 / SQ
  "SourceOfOphthalmicAxialLengthCodeSequence" |
  // Source of Corneal Size Data Code Sequence / 00221036 / SQ
  "SourceOfCornealSizeDataCodeSequence" |
  // Target Refraction / 00221037 / FL
  "TargetRefraction" |
  // Refractive Procedure Occurred / 00221039 / CS
  "RefractiveProcedureOccurred" |
  // Refractive Surgery Type Code Sequence / 00221040 / SQ
  "RefractiveSurgeryTypeCodeSequence" |
  // Ophthalmic Ultrasound Method Code Sequence / 00221044 / SQ
  "OphthalmicUltrasoundMethodCodeSequence" |
  // Surgically Induced Astigmatism Sequence / 00221045 / SQ
  "SurgicallyInducedAstigmatismSequence" |
  // Type of Optical Correction / 00221046 / CS
  "TypeOfOpticalCorrection" |
  // Toric IOL Power Sequence / 00221047 / SQ
  "ToricIOLPowerSequence" |
  // Predicted Toric Error Sequence / 00221048 / SQ
  "PredictedToricErrorSequence" |
  // Pre-Selected for Implantation / 00221049 / CS
  "PreSelectedForImplantation" |
  // Toric IOL Power for Exact Emmetropia Sequence / 0022104A / SQ
  "ToricIOLPowerForExactEmmetropiaSequence" |
  // Toric IOL Power for Exact Target Refraction Sequence / 0022104B / SQ
  "ToricIOLPowerForExactTargetRefractionSequence" |
  // Ophthalmic Axial Length Measurements Sequence / 00221050 / SQ
  "OphthalmicAxialLengthMeasurementsSequence" |
  // IOL Power / 00221053 / FL
  "IOLPower" |
  // Predicted Refractive Error / 00221054 / FL
  "PredictedRefractiveError" |
  // Ophthalmic Axial Length Velocity / 00221059 / FL
  "OphthalmicAxialLengthVelocity" |
  // Lens Status Description / 00221065 / LO
  "LensStatusDescription" |
  // Vitreous Status Description / 00221066 / LO
  "VitreousStatusDescription" |
  // IOL Power Sequence / 00221090 / SQ
  "IOLPowerSequence" |
  // Lens Constant Sequence / 00221092 / SQ
  "LensConstantSequence" |
  // IOL Manufacturer / 00221093 / LO
  "IOLManufacturer" |
  // Lens Constant Description / 00221094 / LO
  "LensConstantDescription" |
  // Implant Name / 00221095 / LO
  "ImplantName" |
  // Keratometry Measurement Type Code Sequence / 00221096 / SQ
  "KeratometryMeasurementTypeCodeSequence" |
  // Implant Part Number / 00221097 / LO
  "ImplantPartNumber" |
  // Referenced Ophthalmic Axial Measurements Sequence / 00221100 / SQ
  "ReferencedOphthalmicAxialMeasurementsSequence" |
  // Ophthalmic Axial Length Measurements Segment Name Code Sequence / 00221101 / SQ
  "OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence" |
  // Refractive Error Before Refractive Surgery Code Sequence / 00221103 / SQ
  "RefractiveErrorBeforeRefractiveSurgeryCodeSequence" |
  // IOL Power For Exact Emmetropia / 00221121 / FL
  "IOLPowerForExactEmmetropia" |
  // IOL Power For Exact Target Refraction / 00221122 / FL
  "IOLPowerForExactTargetRefraction" |
  // Anterior Chamber Depth Definition Code Sequence / 00221125 / SQ
  "AnteriorChamberDepthDefinitionCodeSequence" |
  // Lens Thickness Sequence / 00221127 / SQ
  "LensThicknessSequence" |
  // Anterior Chamber Depth Sequence / 00221128 / SQ
  "AnteriorChamberDepthSequence" |
  // Calculation Comment Sequence / 0022112A / SQ
  "CalculationCommentSequence" |
  // Calculation Comment Type / 0022112B / CS
  "CalculationCommentType" |
  // Calculation Comment / 0022112C / LT
  "CalculationComment" |
  // Lens Thickness / 00221130 / FL
  "LensThickness" |
  // Anterior Chamber Depth / 00221131 / FL
  "AnteriorChamberDepth" |
  // Source of Lens Thickness Data Code Sequence / 00221132 / SQ
  "SourceOfLensThicknessDataCodeSequence" |
  // Source of Anterior Chamber Depth Data Code Sequence / 00221133 / SQ
  "SourceOfAnteriorChamberDepthDataCodeSequence" |
  // Source of Refractive Measurements Sequence / 00221134 / SQ
  "SourceOfRefractiveMeasurementsSequence" |
  // Source of Refractive Measurements Code Sequence / 00221135 / SQ
  "SourceOfRefractiveMeasurementsCodeSequence" |
  // Ophthalmic Axial Length Measurement Modified / 00221140 / CS
  "OphthalmicAxialLengthMeasurementModified" |
  // Ophthalmic Axial Length Data Source Code Sequence / 00221150 / SQ
  "OphthalmicAxialLengthDataSourceCodeSequence" |
  // Ophthalmic Axial Length Acquisition Method Code Sequence / 00221153 / SQ
  "OphthalmicAxialLengthAcquisitionMethodCodeSequence" |
  // Signal to Noise Ratio / 00221155 / FL
  "SignalToNoiseRatio" |
  // Ophthalmic Axial Length Data Source Description / 00221159 / LO
  "OphthalmicAxialLengthDataSourceDescription" |
  // Ophthalmic Axial Length Measurements Total Length Sequence / 00221210 / SQ
  "OphthalmicAxialLengthMeasurementsTotalLengthSequence" |
  // Ophthalmic Axial Length Measurements Segmental Length Sequence / 00221211 / SQ
  "OphthalmicAxialLengthMeasurementsSegmentalLengthSequence" |
  // Ophthalmic Axial Length Measurements Length Summation Sequence / 00221212 / SQ
  "OphthalmicAxialLengthMeasurementsLengthSummationSequence" |
  // Ultrasound Ophthalmic Axial Length Measurements Sequence / 00221220 / SQ
  "UltrasoundOphthalmicAxialLengthMeasurementsSequence" |
  // Optical Ophthalmic Axial Length Measurements Sequence / 00221225 / SQ
  "OpticalOphthalmicAxialLengthMeasurementsSequence" |
  // Ultrasound Selected Ophthalmic Axial Length Sequence / 00221230 / SQ
  "UltrasoundSelectedOphthalmicAxialLengthSequence" |
  // Ophthalmic Axial Length Selection Method Code Sequence / 00221250 / SQ
  "OphthalmicAxialLengthSelectionMethodCodeSequence" |
  // Optical Selected Ophthalmic Axial Length Sequence / 00221255 / SQ
  "OpticalSelectedOphthalmicAxialLengthSequence" |
  // Selected Segmental Ophthalmic Axial Length Sequence / 00221257 / SQ
  "SelectedSegmentalOphthalmicAxialLengthSequence" |
  // Selected Total Ophthalmic Axial Length Sequence / 00221260 / SQ
  "SelectedTotalOphthalmicAxialLengthSequence" |
  // Ophthalmic Axial Length Quality Metric Sequence / 00221262 / SQ
  "OphthalmicAxialLengthQualityMetricSequence" |
  // Ophthalmic Axial Length Quality Metric Type Code Sequence / 00221265 / SQ
  "OphthalmicAxialLengthQualityMetricTypeCodeSequence" |
  // Ophthalmic Axial Length Quality Metric Type Description / 00221273 / LO
  "OphthalmicAxialLengthQualityMetricTypeDescription" |
  // Intraocular Lens Calculations Right Eye Sequence / 00221300 / SQ
  "IntraocularLensCalculationsRightEyeSequence" |
  // Intraocular Lens Calculations Left Eye Sequence / 00221310 / SQ
  "IntraocularLensCalculationsLeftEyeSequence" |
  // Referenced Ophthalmic Axial Length Measurement QC Image Sequence / 00221330 / SQ
  "ReferencedOphthalmicAxialLengthMeasurementQCImageSequence" |
  // Ophthalmic Mapping Device Type / 00221415 / CS
  "OphthalmicMappingDeviceType" |
  // Acquisition Method Code Sequence / 00221420 / SQ
  "AcquisitionMethodCodeSequence" |
  // Acquisition Method Algorithm Sequence / 00221423 / SQ
  "AcquisitionMethodAlgorithmSequence" |
  // Ophthalmic Thickness Map Type Code Sequence / 00221436 / SQ
  "OphthalmicThicknessMapTypeCodeSequence" |
  // Ophthalmic Thickness Mapping Normals Sequence / 00221443 / SQ
  "OphthalmicThicknessMappingNormalsSequence" |
  // Retinal Thickness Definition Code Sequence / 00221445 / SQ
  "RetinalThicknessDefinitionCodeSequence" |
  // Pixel Value Mapping to Coded Concept Sequence / 00221450 / SQ
  "PixelValueMappingToCodedConceptSequence" |
  // Mapped Pixel Value / 00221452 / US/SS
  "MappedPixelValue" |
  // Pixel Value Mapping Explanation / 00221454 / LO
  "PixelValueMappingExplanation" |
  // Ophthalmic Thickness Map Quality Threshold Sequence / 00221458 / SQ
  "OphthalmicThicknessMapQualityThresholdSequence" |
  // Ophthalmic Thickness Map Threshold Quality Rating / 00221460 / FL
  "OphthalmicThicknessMapThresholdQualityRating" |
  // Anatomic Structure Reference Point / 00221463 / FL
  "AnatomicStructureReferencePoint" |
  // Registration to Localizer Sequence / 00221465 / SQ
  "RegistrationToLocalizerSequence" |
  // Registered Localizer Units / 00221466 / CS
  "RegisteredLocalizerUnits" |
  // Registered Localizer Top Left Hand Corner / 00221467 / FL
  "RegisteredLocalizerTopLeftHandCorner" |
  // Registered Localizer Bottom Right Hand Corner / 00221468 / FL
  "RegisteredLocalizerBottomRightHandCorner" |
  // Ophthalmic Thickness Map Quality Rating Sequence / 00221470 / SQ
  "OphthalmicThicknessMapQualityRatingSequence" |
  // Relevant OPT Attributes Sequence / 00221472 / SQ
  "RelevantOPTAttributesSequence" |
  // Transformation Method Code Sequence / 00221512 / SQ
  "TransformationMethodCodeSequence" |
  // Transformation Algorithm Sequence / 00221513 / SQ
  "TransformationAlgorithmSequence" |
  // Ophthalmic Axial Length Method / 00221515 / CS
  "OphthalmicAxialLengthMethod" |
  // Ophthalmic FOV / 00221517 / FL
  "OphthalmicFOV" |
  // Two Dimensional to Three Dimensional Map Sequence / 00221518 / SQ
  "TwoDimensionalToThreeDimensionalMapSequence" |
  // Wide Field Ophthalmic Photography Quality Rating Sequence / 00221525 / SQ
  "WideFieldOphthalmicPhotographyQualityRatingSequence" |
  // Wide Field Ophthalmic Photography Quality Threshold Sequence / 00221526 / SQ
  "WideFieldOphthalmicPhotographyQualityThresholdSequence" |
  // Wide Field Ophthalmic Photography Threshold Quality Rating / 00221527 / FL
  "WideFieldOphthalmicPhotographyThresholdQualityRating" |
  // X Coordinates Center Pixel View Angle / 00221528 / FL
  "XCoordinatesCenterPixelViewAngle" |
  // Y Coordinates Center Pixel View Angle / 00221529 / FL
  "YCoordinatesCenterPixelViewAngle" |
  // Number of Map Points / 00221530 / UL
  "NumberOfMapPoints" |
  // Two Dimensional to Three Dimensional Map Data / 00221531 / OF
  "TwoDimensionalToThreeDimensionalMapData" |
  // Derivation Algorithm Sequence / 00221612 / SQ
  "DerivationAlgorithmSequence" |
  // Ophthalmic Image Type Code Sequence / 00221615 / SQ
  "OphthalmicImageTypeCodeSequence" |
  // Ophthalmic Image Type Description / 00221616 / LO
  "OphthalmicImageTypeDescription" |
  // Scan Pattern Type Code Sequence / 00221618 / SQ
  "ScanPatternTypeCodeSequence" |
  // Referenced Surface Mesh Identification Sequence / 00221620 / SQ
  "ReferencedSurfaceMeshIdentificationSequence" |
  // Ophthalmic Volumetric Properties Flag / 00221622 / CS
  "OphthalmicVolumetricPropertiesFlag" |
  // Ophthalmic Anatomic Reference Point X-Coordinate / 00221624 / FL
  "OphthalmicAnatomicReferencePointXCoordinate" |
  // Ophthalmic Anatomic Reference Point Y-Coordinate / 00221626 / FL
  "OphthalmicAnatomicReferencePointYCoordinate" |
  // Ophthalmic En Face Image Quality Rating Sequence / 00221628 / SQ
  "OphthalmicEnFaceImageQualityRatingSequence" |
  // Quality Threshold / 00221630 / DS
  "QualityThreshold" |
  // OCT B-scan Analysis Acquisition Parameters Sequence / 00221640 / SQ
  "OCTBscanAnalysisAcquisitionParametersSequence" |
  // Number of B-scans Per Frame / 00221642 / UL
  "NumberOfBscansPerFrame" |
  // B-scan Slab Thickness / 00221643 / FL
  "BscanSlabThickness" |
  // Distance Between B-scan Slabs / 00221644 / FL
  "DistanceBetweenBscanSlabs" |
  // B-scan Cycle Time / 00221645 / FL
  "BscanCycleTime" |
  // B-scan Cycle Time Vector / 00221646 / FL
  "BscanCycleTimeVector" |
  // A-scan Rate / 00221649 / FL
  "AscanRate" |
  // B-scan Rate / 00221650 / FL
  "BscanRate" |
  // Surface Mesh Z-Pixel Offset / 00221658 / UL
  "SurfaceMeshZPixelOffset" |
  // Visual Field Horizontal Extent / 00240010 / FL
  "VisualFieldHorizontalExtent" |
  // Visual Field Vertical Extent / 00240011 / FL
  "VisualFieldVerticalExtent" |
  // Visual Field Shape / 00240012 / CS
  "VisualFieldShape" |
  // Screening Test Mode Code Sequence / 00240016 / SQ
  "ScreeningTestModeCodeSequence" |
  // Maximum Stimulus Luminance / 00240018 / FL
  "MaximumStimulusLuminance" |
  // Background Luminance / 00240020 / FL
  "BackgroundLuminance" |
  // Stimulus Color Code Sequence / 00240021 / SQ
  "StimulusColorCodeSequence" |
  // Background Illumination Color Code Sequence / 00240024 / SQ
  "BackgroundIlluminationColorCodeSequence" |
  // Stimulus Area / 00240025 / FL
  "StimulusArea" |
  // Stimulus Presentation Time / 00240028 / FL
  "StimulusPresentationTime" |
  // Fixation Sequence / 00240032 / SQ
  "FixationSequence" |
  // Fixation Monitoring Code Sequence / 00240033 / SQ
  "FixationMonitoringCodeSequence" |
  // Visual Field Catch Trial Sequence / 00240034 / SQ
  "VisualFieldCatchTrialSequence" |
  // Fixation Checked Quantity / 00240035 / US
  "FixationCheckedQuantity" |
  // Patient Not Properly Fixated Quantity / 00240036 / US
  "PatientNotProperlyFixatedQuantity" |
  // Presented Visual Stimuli Data Flag / 00240037 / CS
  "PresentedVisualStimuliDataFlag" |
  // Number of Visual Stimuli / 00240038 / US
  "NumberOfVisualStimuli" |
  // Excessive Fixation Losses Data Flag / 00240039 / CS
  "ExcessiveFixationLossesDataFlag" |
  // Excessive Fixation Losses / 00240040 / CS
  "ExcessiveFixationLosses" |
  // Stimuli Retesting Quantity / 00240042 / US
  "StimuliRetestingQuantity" |
  // Comments on Patient's Performance of Visual Field / 00240044 / LT
  "CommentsOnPatientPerformanceOfVisualField" |
  // False Negatives Estimate Flag / 00240045 / CS
  "FalseNegativesEstimateFlag" |
  // False Negatives Estimate / 00240046 / FL
  "FalseNegativesEstimate" |
  // Negative Catch Trials Quantity / 00240048 / US
  "NegativeCatchTrialsQuantity" |
  // False Negatives Quantity / 00240050 / US
  "FalseNegativesQuantity" |
  // Excessive False Negatives Data Flag / 00240051 / CS
  "ExcessiveFalseNegativesDataFlag" |
  // Excessive False Negatives / 00240052 / CS
  "ExcessiveFalseNegatives" |
  // False Positives Estimate Flag / 00240053 / CS
  "FalsePositivesEstimateFlag" |
  // False Positives Estimate / 00240054 / FL
  "FalsePositivesEstimate" |
  // Catch Trials Data Flag / 00240055 / CS
  "CatchTrialsDataFlag" |
  // Positive Catch Trials Quantity / 00240056 / US
  "PositiveCatchTrialsQuantity" |
  // Test Point Normals Data Flag / 00240057 / CS
  "TestPointNormalsDataFlag" |
  // Test Point Normals Sequence / 00240058 / SQ
  "TestPointNormalsSequence" |
  // Global Deviation Probability Normals Flag / 00240059 / CS
  "GlobalDeviationProbabilityNormalsFlag" |
  // False Positives Quantity / 00240060 / US
  "FalsePositivesQuantity" |
  // Excessive False Positives Data Flag / 00240061 / CS
  "ExcessiveFalsePositivesDataFlag" |
  // Excessive False Positives / 00240062 / CS
  "ExcessiveFalsePositives" |
  // Visual Field Test Normals Flag / 00240063 / CS
  "VisualFieldTestNormalsFlag" |
  // Results Normals Sequence / 00240064 / SQ
  "ResultsNormalsSequence" |
  // Age Corrected Sensitivity Deviation Algorithm Sequence / 00240065 / SQ
  "AgeCorrectedSensitivityDeviationAlgorithmSequence" |
  // Global Deviation From Normal / 00240066 / FL
  "GlobalDeviationFromNormal" |
  // Generalized Defect Sensitivity Deviation Algorithm Sequence / 00240067 / SQ
  "GeneralizedDefectSensitivityDeviationAlgorithmSequence" |
  // Localized Deviation From Normal / 00240068 / FL
  "LocalizedDeviationFromNormal" |
  // Patient Reliability Indicator / 00240069 / LO
  "PatientReliabilityIndicator" |
  // Visual Field Mean Sensitivity / 00240070 / FL
  "VisualFieldMeanSensitivity" |
  // Global Deviation Probability / 00240071 / FL
  "GlobalDeviationProbability" |
  // Local Deviation Probability Normals Flag / 00240072 / CS
  "LocalDeviationProbabilityNormalsFlag" |
  // Localized Deviation Probability / 00240073 / FL
  "LocalizedDeviationProbability" |
  // Short Term Fluctuation Calculated / 00240074 / CS
  "ShortTermFluctuationCalculated" |
  // Short Term Fluctuation / 00240075 / FL
  "ShortTermFluctuation" |
  // Short Term Fluctuation Probability Calculated / 00240076 / CS
  "ShortTermFluctuationProbabilityCalculated" |
  // Short Term Fluctuation Probability / 00240077 / FL
  "ShortTermFluctuationProbability" |
  // Corrected Localized Deviation From Normal Calculated / 00240078 / CS
  "CorrectedLocalizedDeviationFromNormalCalculated" |
  // Corrected Localized Deviation From Normal / 00240079 / FL
  "CorrectedLocalizedDeviationFromNormal" |
  // Corrected Localized Deviation From Normal Probability Calculated / 00240080 / CS
  "CorrectedLocalizedDeviationFromNormalProbabilityCalculated" |
  // Corrected Localized Deviation From Normal Probability / 00240081 / FL
  "CorrectedLocalizedDeviationFromNormalProbability" |
  // Global Deviation Probability Sequence / 00240083 / SQ
  "GlobalDeviationProbabilitySequence" |
  // Localized Deviation Probability Sequence / 00240085 / SQ
  "LocalizedDeviationProbabilitySequence" |
  // Foveal Sensitivity Measured / 00240086 / CS
  "FovealSensitivityMeasured" |
  // Foveal Sensitivity / 00240087 / FL
  "FovealSensitivity" |
  // Visual Field Test Duration / 00240088 / FL
  "VisualFieldTestDuration" |
  // Visual Field Test Point Sequence / 00240089 / SQ
  "VisualFieldTestPointSequence" |
  // Visual Field Test Point X-Coordinate / 00240090 / FL
  "VisualFieldTestPointXCoordinate" |
  // Visual Field Test Point Y-Coordinate / 00240091 / FL
  "VisualFieldTestPointYCoordinate" |
  // Age Corrected Sensitivity Deviation Value / 00240092 / FL
  "AgeCorrectedSensitivityDeviationValue" |
  // Stimulus Results / 00240093 / CS
  "StimulusResults" |
  // Sensitivity Value / 00240094 / FL
  "SensitivityValue" |
  // Retest Stimulus Seen / 00240095 / CS
  "RetestStimulusSeen" |
  // Retest Sensitivity Value / 00240096 / FL
  "RetestSensitivityValue" |
  // Visual Field Test Point Normals Sequence / 00240097 / SQ
  "VisualFieldTestPointNormalsSequence" |
  // Quantified Defect / 00240098 / FL
  "QuantifiedDefect" |
  // Age Corrected Sensitivity Deviation Probability Value / 00240100 / FL
  "AgeCorrectedSensitivityDeviationProbabilityValue" |
  // Generalized Defect Corrected Sensitivity Deviation Flag / 00240102 / CS
  "GeneralizedDefectCorrectedSensitivityDeviationFlag" |
  // Generalized Defect Corrected Sensitivity Deviation Value / 00240103 / FL
  "GeneralizedDefectCorrectedSensitivityDeviationValue" |
  // Generalized Defect Corrected Sensitivity Deviation Probability Value / 00240104 / FL
  "GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue" |
  // Minimum Sensitivity Value / 00240105 / FL
  "MinimumSensitivityValue" |
  // Blind Spot Localized / 00240106 / CS
  "BlindSpotLocalized" |
  // Blind Spot X-Coordinate / 00240107 / FL
  "BlindSpotXCoordinate" |
  // Blind Spot Y-Coordinate / 00240108 / FL
  "BlindSpotYCoordinate" |
  // Visual Acuity Measurement Sequence / 00240110 / SQ
  "VisualAcuityMeasurementSequence" |
  // Refractive Parameters Used on Patient Sequence / 00240112 / SQ
  "RefractiveParametersUsedOnPatientSequence" |
  // Measurement Laterality / 00240113 / CS
  "MeasurementLaterality" |
  // Ophthalmic Patient Clinical Information Left Eye Sequence / 00240114 / SQ
  "OphthalmicPatientClinicalInformationLeftEyeSequence" |
  // Ophthalmic Patient Clinical Information Right Eye Sequence / 00240115 / SQ
  "OphthalmicPatientClinicalInformationRightEyeSequence" |
  // Foveal Point Normative Data Flag / 00240117 / CS
  "FovealPointNormativeDataFlag" |
  // Foveal Point Probability Value / 00240118 / FL
  "FovealPointProbabilityValue" |
  // Screening Baseline Measured / 00240120 / CS
  "ScreeningBaselineMeasured" |
  // Screening Baseline Measured Sequence / 00240122 / SQ
  "ScreeningBaselineMeasuredSequence" |
  // Screening Baseline Type / 00240124 / CS
  "ScreeningBaselineType" |
  // Screening Baseline Value / 00240126 / FL
  "ScreeningBaselineValue" |
  // Algorithm Source / 00240202 / LO
  "AlgorithmSource" |
  // Data Set Name / 00240306 / LO
  "DataSetName" |
  // Data Set Version / 00240307 / LO
  "DataSetVersion" |
  // Data Set Source / 00240308 / LO
  "DataSetSource" |
  // Data Set Description / 00240309 / LO
  "DataSetDescription" |
  // Visual Field Test Reliability Global Index Sequence / 00240317 / SQ
  "VisualFieldTestReliabilityGlobalIndexSequence" |
  // Visual Field Global Results Index Sequence / 00240320 / SQ
  "VisualFieldGlobalResultsIndexSequence" |
  // Data Observation Sequence / 00240325 / SQ
  "DataObservationSequence" |
  // Index Normals Flag / 00240338 / CS
  "IndexNormalsFlag" |
  // Index Probability / 00240341 / FL
  "IndexProbability" |
  // Index Probability Sequence / 00240344 / SQ
  "IndexProbabilitySequence" |
  // Samples per Pixel / 00280002 / US
  "SamplesPerPixel" |
  // Samples per Pixel Used / 00280003 / US
  "SamplesPerPixelUsed" |
  // Photometric Interpretation / 00280004 / CS
  "PhotometricInterpretation" |
  // Image Dimensions / 00280005 / US
  "ImageDimensions" |
  // Planar Configuration / 00280006 / US
  "PlanarConfiguration" |
  // Number of Frames / 00280008 / IS
  "NumberOfFrames" |
  // Frame Increment Pointer / 00280009 / AT
  "FrameIncrementPointer" |
  // Frame Dimension Pointer / 0028000A / AT
  "FrameDimensionPointer" |
  // Rows / 00280010 / US
  "Rows" |
  // Columns / 00280011 / US
  "Columns" |
  // Planes / 00280012 / US
  "Planes" |
  // Ultrasound Color Data Present / 00280014 / US
  "UltrasoundColorDataPresent" |
  // Pixel Spacing / 00280030 / DS
  "PixelSpacing" |
  // Zoom Factor / 00280031 / DS
  "ZoomFactor" |
  // Zoom Center / 00280032 / DS
  "ZoomCenter" |
  // Pixel Aspect Ratio / 00280034 / IS
  "PixelAspectRatio" |
  // Image Format / 00280040 / CS
  "ImageFormat" |
  // Manipulated Image / 00280050 / LO
  "ManipulatedImage" |
  // Corrected Image / 00280051 / CS
  "CorrectedImage" |
  // Compression Recognition Code / 0028005F / LO
  "CompressionRecognitionCode" |
  // Compression Code / 00280060 / CS
  "CompressionCode" |
  // Compression Originator / 00280061 / SH
  "CompressionOriginator" |
  // Compression Label / 00280062 / LO
  "CompressionLabel" |
  // Compression Description / 00280063 / SH
  "CompressionDescription" |
  // Compression Sequence / 00280065 / CS
  "CompressionSequence" |
  // Compression Step Pointers / 00280066 / AT
  "CompressionStepPointers" |
  // Repeat Interval / 00280068 / US
  "RepeatInterval" |
  // Bits Grouped / 00280069 / US
  "BitsGrouped" |
  // Perimeter Table / 00280070 / US
  "PerimeterTable" |
  // Perimeter Value / 00280071 / US/SS
  "PerimeterValue" |
  // Predictor Rows / 00280080 / US
  "PredictorRows" |
  // Predictor Columns / 00280081 / US
  "PredictorColumns" |
  // Predictor Constants / 00280082 / US
  "PredictorConstants" |
  // Blocked Pixels / 00280090 / CS
  "BlockedPixels" |
  // Block Rows / 00280091 / US
  "BlockRows" |
  // Block Columns / 00280092 / US
  "BlockColumns" |
  // Row Overlap / 00280093 / US
  "RowOverlap" |
  // Column Overlap / 00280094 / US
  "ColumnOverlap" |
  // Bits Allocated / 00280100 / US
  "BitsAllocated" |
  // Bits Stored / 00280101 / US
  "BitsStored" |
  // High Bit / 00280102 / US
  "HighBit" |
  // Pixel Representation / 00280103 / US
  "PixelRepresentation" |
  // Smallest Valid Pixel Value / 00280104 / US/SS
  "SmallestValidPixelValue" |
  // Largest Valid Pixel Value / 00280105 / US/SS
  "LargestValidPixelValue" |
  // Smallest Image Pixel Value / 00280106 / US/SS
  "SmallestImagePixelValue" |
  // Largest Image Pixel Value / 00280107 / US/SS
  "LargestImagePixelValue" |
  // Smallest Pixel Value in Series / 00280108 / US/SS
  "SmallestPixelValueInSeries" |
  // Largest Pixel Value in Series / 00280109 / US/SS
  "LargestPixelValueInSeries" |
  // Smallest Image Pixel Value in Plane / 00280110 / US/SS
  "SmallestImagePixelValueInPlane" |
  // Largest Image Pixel Value in Plane / 00280111 / US/SS
  "LargestImagePixelValueInPlane" |
  // Pixel Padding Value / 00280120 / US/SS
  "PixelPaddingValue" |
  // Pixel Padding Range Limit / 00280121 / US/SS
  "PixelPaddingRangeLimit" |
  // Float Pixel Padding Value / 00280122 / FL
  "FloatPixelPaddingValue" |
  // Double Float Pixel Padding Value / 00280123 / FD
  "DoubleFloatPixelPaddingValue" |
  // Float Pixel Padding Range Limit / 00280124 / FL
  "FloatPixelPaddingRangeLimit" |
  // Double Float Pixel Padding Range Limit / 00280125 / FD
  "DoubleFloatPixelPaddingRangeLimit" |
  // Image Location / 00280200 / US
  "ImageLocation" |
  // Quality Control Image / 00280300 / CS
  "QualityControlImage" |
  // Burned In Annotation / 00280301 / CS
  "BurnedInAnnotation" |
  // Recognizable Visual Features / 00280302 / CS
  "RecognizableVisualFeatures" |
  // Longitudinal Temporal Information Modified / 00280303 / CS
  "LongitudinalTemporalInformationModified" |
  // Referenced Color Palette Instance UID / 00280304 / UI
  "ReferencedColorPaletteInstanceUID" |
  // Transform Label / 00280400 / LO
  "TransformLabel" |
  // Transform Version Number / 00280401 / LO
  "TransformVersionNumber" |
  // Number of Transform Steps / 00280402 / US
  "NumberOfTransformSteps" |
  // Sequence of Compressed Data / 00280403 / LO
  "SequenceOfCompressedData" |
  // Details of Coefficients / 00280404 / AT
  "DetailsOfCoefficients" |
  // Rows For Nth Order Coefficients / 002804x0 / US
  "RowsForNthOrderCoefficients" |
  // Columns For Nth Order Coefficients / 002804x1 / US
  "ColumnsForNthOrderCoefficients" |
  // Coefficient Coding / 002804x2 / LO
  "CoefficientCoding" |
  // Coefficient Coding Pointers / 002804x3 / AT
  "CoefficientCodingPointers" |
  // DCT Label / 00280700 / LO
  "DCTLabel" |
  // Data Block Description / 00280701 / CS
  "DataBlockDescription" |
  // Data Block / 00280702 / AT
  "DataBlock" |
  // Normalization Factor Format / 00280710 / US
  "NormalizationFactorFormat" |
  // Zonal Map Number Format / 00280720 / US
  "ZonalMapNumberFormat" |
  // Zonal Map Location / 00280721 / AT
  "ZonalMapLocation" |
  // Zonal Map Format / 00280722 / US
  "ZonalMapFormat" |
  // Adaptive Map Format / 00280730 / US
  "AdaptiveMapFormat" |
  // Code Number Format / 00280740 / US
  "CodeNumberFormat" |
  // Code Label / 002808x0 / CS
  "CodeLabel" |
  // Number of Tables / 002808x2 / US
  "NumberOfTables" |
  // Code Table Location / 002808x3 / AT
  "CodeTableLocation" |
  // Bits For Code Word / 002808x4 / US
  "BitsForCodeWord" |
  // Image Data Location / 002808x8 / AT
  "ImageDataLocation" |
  // Pixel Spacing Calibration Type / 00280A02 / CS
  "PixelSpacingCalibrationType" |
  // Pixel Spacing Calibration Description / 00280A04 / LO
  "PixelSpacingCalibrationDescription" |
  // Pixel Intensity Relationship / 00281040 / CS
  "PixelIntensityRelationship" |
  // Pixel Intensity Relationship Sign / 00281041 / SS
  "PixelIntensityRelationshipSign" |
  // Window Center / 00281050 / DS
  "WindowCenter" |
  // Window Width / 00281051 / DS
  "WindowWidth" |
  // Rescale Intercept / 00281052 / DS
  "RescaleIntercept" |
  // Rescale Slope / 00281053 / DS
  "RescaleSlope" |
  // Rescale Type / 00281054 / LO
  "RescaleType" |
  // Window Center & Width Explanation / 00281055 / LO
  "WindowCenterWidthExplanation" |
  // VOI LUT Function / 00281056 / CS
  "VOILUTFunction" |
  // Gray Scale / 00281080 / CS
  "GrayScale" |
  // Recommended Viewing Mode / 00281090 / CS
  "RecommendedViewingMode" |
  // Gray Lookup Table Descriptor / 00281100 / US/SS
  "GrayLookupTableDescriptor" |
  // Red Palette Color Lookup Table Descriptor / 00281101 / US/SS
  "RedPaletteColorLookupTableDescriptor" |
  // Green Palette Color Lookup Table Descriptor / 00281102 / US/SS
  "GreenPaletteColorLookupTableDescriptor" |
  // Blue Palette Color Lookup Table Descriptor / 00281103 / US/SS
  "BluePaletteColorLookupTableDescriptor" |
  // Alpha Palette Color Lookup Table Descriptor / 00281104 / US
  "AlphaPaletteColorLookupTableDescriptor" |
  // Large Red Palette Color Lookup Table Descriptor / 00281111 / US/SS
  "LargeRedPaletteColorLookupTableDescriptor" |
  // Large Green Palette Color Lookup Table Descriptor / 00281112 / US/SS
  "LargeGreenPaletteColorLookupTableDescriptor" |
  // Large Blue Palette Color Lookup Table Descriptor / 00281113 / US/SS
  "LargeBluePaletteColorLookupTableDescriptor" |
  // Palette Color Lookup Table UID / 00281199 / UI
  "PaletteColorLookupTableUID" |
  // Gray Lookup Table Data / 00281200 / US/SS/OW
  "GrayLookupTableData" |
  // Red Palette Color Lookup Table Data / 00281201 / OW
  "RedPaletteColorLookupTableData" |
  // Green Palette Color Lookup Table Data / 00281202 / OW
  "GreenPaletteColorLookupTableData" |
  // Blue Palette Color Lookup Table Data / 00281203 / OW
  "BluePaletteColorLookupTableData" |
  // Alpha Palette Color Lookup Table Data / 00281204 / OW
  "AlphaPaletteColorLookupTableData" |
  // Large Red Palette Color Lookup Table Data / 00281211 / OW
  "LargeRedPaletteColorLookupTableData" |
  // Large Green Palette Color Lookup Table Data / 00281212 / OW
  "LargeGreenPaletteColorLookupTableData" |
  // Large Blue Palette Color Lookup Table Data / 00281213 / OW
  "LargeBluePaletteColorLookupTableData" |
  // Large Palette Color Lookup Table UID / 00281214 / UI
  "LargePaletteColorLookupTableUID" |
  // Segmented Red Palette Color Lookup Table Data / 00281221 / OW
  "SegmentedRedPaletteColorLookupTableData" |
  // Segmented Green Palette Color Lookup Table Data / 00281222 / OW
  "SegmentedGreenPaletteColorLookupTableData" |
  // Segmented Blue Palette Color Lookup Table Data / 00281223 / OW
  "SegmentedBluePaletteColorLookupTableData" |
  // Segmented Alpha Palette Color Lookup Table Data / 00281224 / OW
  "SegmentedAlphaPaletteColorLookupTableData" |
  // Stored Value Color Range Sequence / 00281230 / SQ
  "StoredValueColorRangeSequence" |
  // Minimum Stored Value Mapped / 00281231 / FD
  "MinimumStoredValueMapped" |
  // Maximum Stored Value Mapped / 00281232 / FD
  "MaximumStoredValueMapped" |
  // Breast Implant Present / 00281300 / CS
  "BreastImplantPresent" |
  // Partial View / 00281350 / CS
  "PartialView" |
  // Partial View Description / 00281351 / ST
  "PartialViewDescription" |
  // Partial View Code Sequence / 00281352 / SQ
  "PartialViewCodeSequence" |
  // Spatial Locations Preserved / 0028135A / CS
  "SpatialLocationsPreserved" |
  // Data Frame Assignment Sequence / 00281401 / SQ
  "DataFrameAssignmentSequence" |
  // Data Path Assignment / 00281402 / CS
  "DataPathAssignment" |
  // Bits Mapped to Color Lookup Table / 00281403 / US
  "BitsMappedToColorLookupTable" |
  // Blending LUT 1 Sequence / 00281404 / SQ
  "BlendingLUT1Sequence" |
  // Blending LUT 1 Transfer Function / 00281405 / CS
  "BlendingLUT1TransferFunction" |
  // Blending Weight Constant / 00281406 / FD
  "BlendingWeightConstant" |
  // Blending Lookup Table Descriptor / 00281407 / US
  "BlendingLookupTableDescriptor" |
  // Blending Lookup Table Data / 00281408 / OW
  "BlendingLookupTableData" |
  // Enhanced Palette Color Lookup Table Sequence / 0028140B / SQ
  "EnhancedPaletteColorLookupTableSequence" |
  // Blending LUT 2 Sequence / 0028140C / SQ
  "BlendingLUT2Sequence" |
  // Blending LUT 2 Transfer Function / 0028140D / CS
  "BlendingLUT2TransferFunction" |
  // Data Path ID / 0028140E / CS
  "DataPathID" |
  // RGB LUT Transfer Function / 0028140F / CS
  "RGBLUTTransferFunction" |
  // Alpha LUT Transfer Function / 00281410 / CS
  "AlphaLUTTransferFunction" |
  // ICC Profile / 00282000 / OB
  "ICCProfile" |
  // Color Space / 00282002 / CS
  "ColorSpace" |
  // Lossy Image Compression / 00282110 / CS
  "LossyImageCompression" |
  // Lossy Image Compression Ratio / 00282112 / DS
  "LossyImageCompressionRatio" |
  // Lossy Image Compression Method / 00282114 / CS
  "LossyImageCompressionMethod" |
  // Modality LUT Sequence / 00283000 / SQ
  "ModalityLUTSequence" |
  // LUT Descriptor / 00283002 / US/SS
  "LUTDescriptor" |
  // LUT Explanation / 00283003 / LO
  "LUTExplanation" |
  // Modality LUT Type / 00283004 / LO
  "ModalityLUTType" |
  // LUT Data / 00283006 / US/OW
  "LUTData" |
  // VOI LUT Sequence / 00283010 / SQ
  "VOILUTSequence" |
  // Softcopy VOI LUT Sequence / 00283110 / SQ
  "SoftcopyVOILUTSequence" |
  // Image Presentation Comments / 00284000 / LT
  "ImagePresentationComments" |
  // Bi-Plane Acquisition Sequence / 00285000 / SQ
  "BiPlaneAcquisitionSequence" |
  // Representative Frame Number / 00286010 / US
  "RepresentativeFrameNumber" |
  // Frame Numbers of Interest (FOI) / 00286020 / US
  "FrameNumbersOfInterest" |
  // Frame of Interest Description / 00286022 / LO
  "FrameOfInterestDescription" |
  // Frame of Interest Type / 00286023 / CS
  "FrameOfInterestType" |
  // Mask Pointer(s) / 00286030 / US
  "MaskPointers" |
  // R Wave Pointer / 00286040 / US
  "RWavePointer" |
  // Mask Subtraction Sequence / 00286100 / SQ
  "MaskSubtractionSequence" |
  // Mask Operation / 00286101 / CS
  "MaskOperation" |
  // Applicable Frame Range / 00286102 / US
  "ApplicableFrameRange" |
  // Mask Frame Numbers / 00286110 / US
  "MaskFrameNumbers" |
  // Contrast Frame Averaging / 00286112 / US
  "ContrastFrameAveraging" |
  // Mask Sub-pixel Shift / 00286114 / FL
  "MaskSubPixelShift" |
  // TID Offset / 00286120 / SS
  "TIDOffset" |
  // Mask Operation Explanation / 00286190 / ST
  "MaskOperationExplanation" |
  // Equipment Administrator Sequence / 00287000 / SQ
  "EquipmentAdministratorSequence" |
  // Number of Display Subsystems / 00287001 / US
  "NumberOfDisplaySubsystems" |
  // Current Configuration ID / 00287002 / US
  "CurrentConfigurationID" |
  // Display Subsystem ID / 00287003 / US
  "DisplaySubsystemID" |
  // Display Subsystem Name / 00287004 / SH
  "DisplaySubsystemName" |
  // Display Subsystem Description / 00287005 / LO
  "DisplaySubsystemDescription" |
  // System Status / 00287006 / CS
  "SystemStatus" |
  // System Status Comment / 00287007 / LO
  "SystemStatusComment" |
  // Target Luminance Characteristics Sequence / 00287008 / SQ
  "TargetLuminanceCharacteristicsSequence" |
  // Luminance Characteristics ID / 00287009 / US
  "LuminanceCharacteristicsID" |
  // Display Subsystem Configuration Sequence / 0028700A / SQ
  "DisplaySubsystemConfigurationSequence" |
  // Configuration ID / 0028700B / US
  "ConfigurationID" |
  // Configuration Name / 0028700C / SH
  "ConfigurationName" |
  // Configuration Description / 0028700D / LO
  "ConfigurationDescription" |
  // Referenced Target Luminance Characteristics ID / 0028700E / US
  "ReferencedTargetLuminanceCharacteristicsID" |
  // QA Results Sequence / 0028700F / SQ
  "QAResultsSequence" |
  // Display Subsystem QA Results Sequence / 00287010 / SQ
  "DisplaySubsystemQAResultsSequence" |
  // Configuration QA Results Sequence / 00287011 / SQ
  "ConfigurationQAResultsSequence" |
  // Measurement Equipment Sequence / 00287012 / SQ
  "MeasurementEquipmentSequence" |
  // Measurement Functions / 00287013 / CS
  "MeasurementFunctions" |
  // Measurement Equipment Type / 00287014 / CS
  "MeasurementEquipmentType" |
  // Visual Evaluation Result Sequence / 00287015 / SQ
  "VisualEvaluationResultSequence" |
  // Display Calibration Result Sequence / 00287016 / SQ
  "DisplayCalibrationResultSequence" |
  // DDL Value / 00287017 / US
  "DDLValue" |
  // CIExy White Point / 00287018 / FL
  "CIExyWhitePoint" |
  // Display Function Type / 00287019 / CS
  "DisplayFunctionType" |
  // Gamma Value / 0028701A / FL
  "GammaValue" |
  // Number of Luminance Points / 0028701B / US
  "NumberOfLuminancePoints" |
  // Luminance Response Sequence / 0028701C / SQ
  "LuminanceResponseSequence" |
  // Target Minimum Luminance / 0028701D / FL
  "TargetMinimumLuminance" |
  // Target Maximum Luminance / 0028701E / FL
  "TargetMaximumLuminance" |
  // Luminance Value / 0028701F / FL
  "LuminanceValue" |
  // Luminance Response Description / 00287020 / LO
  "LuminanceResponseDescription" |
  // White Point Flag / 00287021 / CS
  "WhitePointFlag" |
  // Display Device Type Code Sequence / 00287022 / SQ
  "DisplayDeviceTypeCodeSequence" |
  // Display Subsystem Sequence / 00287023 / SQ
  "DisplaySubsystemSequence" |
  // Luminance Result Sequence / 00287024 / SQ
  "LuminanceResultSequence" |
  // Ambient Light Value Source / 00287025 / CS
  "AmbientLightValueSource" |
  // Measured Characteristics / 00287026 / CS
  "MeasuredCharacteristics" |
  // Luminance Uniformity Result Sequence / 00287027 / SQ
  "LuminanceUniformityResultSequence" |
  // Visual Evaluation Test Sequence / 00287028 / SQ
  "VisualEvaluationTestSequence" |
  // Test Result / 00287029 / CS
  "TestResult" |
  // Test Result Comment / 0028702A / LO
  "TestResultComment" |
  // Test Image Validation / 0028702B / CS
  "TestImageValidation" |
  // Test Pattern Code Sequence / 0028702C / SQ
  "TestPatternCodeSequence" |
  // Measurement Pattern Code Sequence / 0028702D / SQ
  "MeasurementPatternCodeSequence" |
  // Visual Evaluation Method Code Sequence / 0028702E / SQ
  "VisualEvaluationMethodCodeSequence" |
  // Pixel Data Provider URL / 00287FE0 / UR
  "PixelDataProviderURL" |
  // Data Point Rows / 00289001 / UL
  "DataPointRows" |
  // Data Point Columns / 00289002 / UL
  "DataPointColumns" |
  // Signal Domain Columns / 00289003 / CS
  "SignalDomainColumns" |
  // Largest Monochrome Pixel Value / 00289099 / US
  "LargestMonochromePixelValue" |
  // Data Representation / 00289108 / CS
  "DataRepresentation" |
  // Pixel Measures Sequence / 00289110 / SQ
  "PixelMeasuresSequence" |
  // Frame VOI LUT Sequence / 00289132 / SQ
  "FrameVOILUTSequence" |
  // Pixel Value Transformation Sequence / 00289145 / SQ
  "PixelValueTransformationSequence" |
  // Signal Domain Rows / 00289235 / CS
  "SignalDomainRows" |
  // Display Filter Percentage / 00289411 / FL
  "DisplayFilterPercentage" |
  // Frame Pixel Shift Sequence / 00289415 / SQ
  "FramePixelShiftSequence" |
  // Subtraction Item ID / 00289416 / US
  "SubtractionItemID" |
  // Pixel Intensity Relationship LUT Sequence / 00289422 / SQ
  "PixelIntensityRelationshipLUTSequence" |
  // Frame Pixel Data Properties Sequence / 00289443 / SQ
  "FramePixelDataPropertiesSequence" |
  // Geometrical Properties / 00289444 / CS
  "GeometricalProperties" |
  // Geometric Maximum Distortion / 00289445 / FL
  "GeometricMaximumDistortion" |
  // Image Processing Applied / 00289446 / CS
  "ImageProcessingApplied" |
  // Mask Selection Mode / 00289454 / CS
  "MaskSelectionMode" |
  // LUT Function / 00289474 / CS
  "LUTFunction" |
  // Mask Visibility Percentage / 00289478 / FL
  "MaskVisibilityPercentage" |
  // Pixel Shift Sequence / 00289501 / SQ
  "PixelShiftSequence" |
  // Region Pixel Shift Sequence / 00289502 / SQ
  "RegionPixelShiftSequence" |
  // Vertices of the Region / 00289503 / SS
  "VerticesOfTheRegion" |
  // Multi-frame Presentation Sequence / 00289505 / SQ
  "MultiFramePresentationSequence" |
  // Pixel Shift Frame Range / 00289506 / US
  "PixelShiftFrameRange" |
  // LUT Frame Range / 00289507 / US
  "LUTFrameRange" |
  // Image to Equipment Mapping Matrix / 00289520 / DS
  "ImageToEquipmentMappingMatrix" |
  // Equipment Coordinate System Identification / 00289537 / CS
  "EquipmentCoordinateSystemIdentification" |
  // Study Status ID / 0032000A / CS
  "StudyStatusID" |
  // Study Priority ID / 0032000C / CS
  "StudyPriorityID" |
  // Study ID Issuer / 00320012 / LO
  "StudyIDIssuer" |
  // Study Verified Date / 00320032 / DA
  "StudyVerifiedDate" |
  // Study Verified Time / 00320033 / TM
  "StudyVerifiedTime" |
  // Study Read Date / 00320034 / DA
  "StudyReadDate" |
  // Study Read Time / 00320035 / TM
  "StudyReadTime" |
  // Scheduled Study Start Date / 00321000 / DA
  "ScheduledStudyStartDate" |
  // Scheduled Study Start Time / 00321001 / TM
  "ScheduledStudyStartTime" |
  // Scheduled Study Stop Date / 00321010 / DA
  "ScheduledStudyStopDate" |
  // Scheduled Study Stop Time / 00321011 / TM
  "ScheduledStudyStopTime" |
  // Scheduled Study Location / 00321020 / LO
  "ScheduledStudyLocation" |
  // Scheduled Study Location AE Title / 00321021 / AE
  "ScheduledStudyLocationAETitle" |
  // Reason for Study / 00321030 / LO
  "ReasonForStudy" |
  // Requesting Physician Identification Sequence / 00321031 / SQ
  "RequestingPhysicianIdentificationSequence" |
  // Requesting Physician / 00321032 / PN
  "RequestingPhysician" |
  // Requesting Service / 00321033 / LO
  "RequestingService" |
  // Requesting Service Code Sequence / 00321034 / SQ
  "RequestingServiceCodeSequence" |
  // Study Arrival Date / 00321040 / DA
  "StudyArrivalDate" |
  // Study Arrival Time / 00321041 / TM
  "StudyArrivalTime" |
  // Study Completion Date / 00321050 / DA
  "StudyCompletionDate" |
  // Study Completion Time / 00321051 / TM
  "StudyCompletionTime" |
  // Study Component Status ID / 00321055 / CS
  "StudyComponentStatusID" |
  // Requested Procedure Description / 00321060 / LO
  "RequestedProcedureDescription" |
  // Requested Procedure Code Sequence / 00321064 / SQ
  "RequestedProcedureCodeSequence" |
  // Requested Laterality Code Sequence / 00321065 / SQ
  "RequestedLateralityCodeSequence" |
  // Reason for Visit / 00321066 / UT
  "ReasonForVisit" |
  // Reason for Visit Code Sequence / 00321067 / SQ
  "ReasonForVisitCodeSequence" |
  // Requested Contrast Agent / 00321070 / LO
  "RequestedContrastAgent" |
  // Study Comments / 00324000 / LT
  "StudyComments" |
  // Flow Identifier Sequence / 00340001 / SQ
  "FlowIdentifierSequence" |
  // Flow Identifier / 00340002 / OB
  "FlowIdentifier" |
  // Flow Transfer Syntax UID / 00340003 / UI
  "FlowTransferSyntaxUID" |
  // Flow RTP Sampling Rate / 00340004 / UL
  "FlowRTPSamplingRate" |
  // Source Identifier / 00340005 / OB
  "SourceIdentifier" |
  // Frame Origin Timestamp / 00340007 / OB
  "FrameOriginTimestamp" |
  // Includes Imaging Subject / 00340008 / CS
  "IncludesImagingSubject" |
  // Frame Usefulness Group Sequence / 00340009 / SQ
  "FrameUsefulnessGroupSequence" |
  // Real-Time Bulk Data Flow Sequence / 0034000A / SQ
  "RealTimeBulkDataFlowSequence" |
  // Camera Position Group Sequence / 0034000B / SQ
  "CameraPositionGroupSequence" |
  // Includes Information / 0034000C / CS
  "IncludesInformation" |
  // Time of Frame Group Sequence / 0034000D / SQ
  "TimeOfFrameGroupSequence" |
  // Referenced Patient Alias Sequence / 00380004 / SQ
  "ReferencedPatientAliasSequence" |
  // Visit Status ID / 00380008 / CS
  "VisitStatusID" |
  // Admission ID / 00380010 / LO
  "AdmissionID" |
  // Issuer of Admission ID / 00380011 / LO
  "IssuerOfAdmissionID" |
  // Issuer of Admission ID Sequence / 00380014 / SQ
  "IssuerOfAdmissionIDSequence" |
  // Route of Admissions / 00380016 / LO
  "RouteOfAdmissions" |
  // Scheduled Admission Date / 0038001A / DA
  "ScheduledAdmissionDate" |
  // Scheduled Admission Time / 0038001B / TM
  "ScheduledAdmissionTime" |
  // Scheduled Discharge Date / 0038001C / DA
  "ScheduledDischargeDate" |
  // Scheduled Discharge Time / 0038001D / TM
  "ScheduledDischargeTime" |
  // Scheduled Patient Institution Residence / 0038001E / LO
  "ScheduledPatientInstitutionResidence" |
  // Admitting Date / 00380020 / DA
  "AdmittingDate" |
  // Admitting Time / 00380021 / TM
  "AdmittingTime" |
  // Discharge Date / 00380030 / DA
  "DischargeDate" |
  // Discharge Time / 00380032 / TM
  "DischargeTime" |
  // Discharge Diagnosis Description / 00380040 / LO
  "DischargeDiagnosisDescription" |
  // Discharge Diagnosis Code Sequence / 00380044 / SQ
  "DischargeDiagnosisCodeSequence" |
  // Special Needs / 00380050 / LO
  "SpecialNeeds" |
  // Service Episode ID / 00380060 / LO
  "ServiceEpisodeID" |
  // Issuer of Service Episode ID / 00380061 / LO
  "IssuerOfServiceEpisodeID" |
  // Service Episode Description / 00380062 / LO
  "ServiceEpisodeDescription" |
  // Issuer of Service Episode ID Sequence / 00380064 / SQ
  "IssuerOfServiceEpisodeIDSequence" |
  // Pertinent Documents Sequence / 00380100 / SQ
  "PertinentDocumentsSequence" |
  // Pertinent Resources Sequence / 00380101 / SQ
  "PertinentResourcesSequence" |
  // Resource Description / 00380102 / LO
  "ResourceDescription" |
  // Current Patient Location / 00380300 / LO
  "CurrentPatientLocation" |
  // Patient's Institution Residence / 00380400 / LO
  "PatientInstitutionResidence" |
  // Patient State / 00380500 / LO
  "PatientState" |
  // Patient Clinical Trial Participation Sequence / 00380502 / SQ
  "PatientClinicalTrialParticipationSequence" |
  // Visit Comments / 00384000 / LT
  "VisitComments" |
  // Waveform Originality / 003A0004 / CS
  "WaveformOriginality" |
  // Number of Waveform Channels / 003A0005 / US
  "NumberOfWaveformChannels" |
  // Number of Waveform Samples / 003A0010 / UL
  "NumberOfWaveformSamples" |
  // Sampling Frequency / 003A001A / DS
  "SamplingFrequency" |
  // Multiplex Group Label / 003A0020 / SH
  "MultiplexGroupLabel" |
  // Channel Definition Sequence / 003A0200 / SQ
  "ChannelDefinitionSequence" |
  // Waveform Channel Number / 003A0202 / IS
  "WaveformChannelNumber" |
  // Channel Label / 003A0203 / SH
  "ChannelLabel" |
  // Channel Status / 003A0205 / CS
  "ChannelStatus" |
  // Channel Source Sequence / 003A0208 / SQ
  "ChannelSourceSequence" |
  // Channel Source Modifiers Sequence / 003A0209 / SQ
  "ChannelSourceModifiersSequence" |
  // Source Waveform Sequence / 003A020A / SQ
  "SourceWaveformSequence" |
  // Channel Derivation Description / 003A020C / LO
  "ChannelDerivationDescription" |
  // Channel Sensitivity / 003A0210 / DS
  "ChannelSensitivity" |
  // Channel Sensitivity Units Sequence / 003A0211 / SQ
  "ChannelSensitivityUnitsSequence" |
  // Channel Sensitivity Correction Factor / 003A0212 / DS
  "ChannelSensitivityCorrectionFactor" |
  // Channel Baseline / 003A0213 / DS
  "ChannelBaseline" |
  // Channel Time Skew / 003A0214 / DS
  "ChannelTimeSkew" |
  // Channel Sample Skew / 003A0215 / DS
  "ChannelSampleSkew" |
  // Channel Offset / 003A0218 / DS
  "ChannelOffset" |
  // Waveform Bits Stored / 003A021A / US
  "WaveformBitsStored" |
  // Filter Low Frequency / 003A0220 / DS
  "FilterLowFrequency" |
  // Filter High Frequency / 003A0221 / DS
  "FilterHighFrequency" |
  // Notch Filter Frequency / 003A0222 / DS
  "NotchFilterFrequency" |
  // Notch Filter Bandwidth / 003A0223 / DS
  "NotchFilterBandwidth" |
  // Waveform Data Display Scale / 003A0230 / FL
  "WaveformDataDisplayScale" |
  // Waveform Display Background CIELab Value / 003A0231 / US
  "WaveformDisplayBackgroundCIELabValue" |
  // Waveform Presentation Group Sequence / 003A0240 / SQ
  "WaveformPresentationGroupSequence" |
  // Presentation Group Number / 003A0241 / US
  "PresentationGroupNumber" |
  // Channel Display Sequence / 003A0242 / SQ
  "ChannelDisplaySequence" |
  // Channel Recommended Display CIELab Value / 003A0244 / US
  "ChannelRecommendedDisplayCIELabValue" |
  // Channel Position / 003A0245 / FL
  "ChannelPosition" |
  // Display Shading Flag / 003A0246 / CS
  "DisplayShadingFlag" |
  // Fractional Channel Display Scale / 003A0247 / FL
  "FractionalChannelDisplayScale" |
  // Absolute Channel Display Scale / 003A0248 / FL
  "AbsoluteChannelDisplayScale" |
  // Multiplexed Audio Channels Description Code Sequence / 003A0300 / SQ
  "MultiplexedAudioChannelsDescriptionCodeSequence" |
  // Channel Identification Code / 003A0301 / IS
  "ChannelIdentificationCode" |
  // Channel Mode / 003A0302 / CS
  "ChannelMode" |
  // Multiplex Group UID / 003A0310 / UI
  "MultiplexGroupUID" |
  // Powerline Frequency / 003A0311 / DS
  "PowerlineFrequency" |
  // Channel Impedance Sequence / 003A0312 / SQ
  "ChannelImpedanceSequence" |
  // Impedance Value / 003A0313 / DS
  "ImpedanceValue" |
  // Impedance Measurement DateTime / 003A0314 / DT
  "ImpedanceMeasurementDateTime" |
  // Impedance Measurement Frequency / 003A0315 / DS
  "ImpedanceMeasurementFrequency" |
  // Impedance Measurement Current Type / 003A0316 / CS
  "ImpedanceMeasurementCurrentType" |
  // Waveform Amplifier Type / 003A0317 / CS
  "WaveformAmplifierType" |
  // Filter Low Frequency Characteristics Sequence / 003A0318 / SQ
  "FilterLowFrequencyCharacteristicsSequence" |
  // Filter High Frequency Characteristics Sequence / 003A0319 / SQ
  "FilterHighFrequencyCharacteristicsSequence" |
  // Summarized Filter Lookup Table Sequence / 003A0320 / SQ
  "SummarizedFilterLookupTable" |
  // Notch Filter Characteristics Sequence / 003A0321 / SQ
  "NotchFilterCharacteristicsSequence" |
  // Waveform Filter Type / 003A0322 / CS
  "WaveformFilterType" |
  // Analog Filter Characteristics Sequence / 003A0323 / SQ
  "AnalogFilterCharacteristicsSequence" |
  // Analog Filter Roll Off  / 003A0324 / DS
  "AnalogFilterRollOff" |
  // Analog Filter Type Code Sequence / 003A0325 / SQ
  "AnalogFilterType" |
  // Digital Filter Characteristics Sequence / 003A0326 / SQ
  "DigitalFilterCharacteristicsSequence" |
  // Digital Filter Order / 003A0327 / IS
  "DigitalFilterOrder" |
  // Digital Filter Type Code Sequence / 003A0328 / SQ
  "DigitalFilterTypeCodeSequence" |
  // Waveform Filter Description / 003A0329 / ST
  "WaveformFilterDescription" |
  // Filter Lookup Table Sequence / 003A032A / SQ
  "FilterLookupTableSequence" |
  // Filter Lookup Table Description / 003A032B / ST
  "FilterLookupTableDescription" |
  // Frequency Encoding Code Sequence / 003A032C / SQ
  "FrequencyEncodingCodeSequence" |
  // Magnitude Encoding Code Sequence / 003A032D / SQ
  "MagnitudeEncodingCodeSequence" |
  // Filter Lookup Table Data / 003A032E / OD
  "FilterLookupTableData" |
  // Scheduled Station AE Title / 00400001 / AE
  "ScheduledStationAETitle" |
  // Scheduled Procedure Step Start Date / 00400002 / DA
  "ScheduledProcedureStepStartDate" |
  // Scheduled Procedure Step Start Time / 00400003 / TM
  "ScheduledProcedureStepStartTime" |
  // Scheduled Procedure Step End Date / 00400004 / DA
  "ScheduledProcedureStepEndDate" |
  // Scheduled Procedure Step End Time / 00400005 / TM
  "ScheduledProcedureStepEndTime" |
  // Scheduled Performing Physician's Name / 00400006 / PN
  "ScheduledPerformingPhysicianName" |
  // Scheduled Procedure Step Description / 00400007 / LO
  "ScheduledProcedureStepDescription" |
  // Scheduled Protocol Code Sequence / 00400008 / SQ
  "ScheduledProtocolCodeSequence" |
  // Scheduled Procedure Step ID / 00400009 / SH
  "ScheduledProcedureStepID" |
  // Stage Code Sequence / 0040000A / SQ
  "StageCodeSequence" |
  // Scheduled Performing Physician Identification Sequence / 0040000B / SQ
  "ScheduledPerformingPhysicianIdentificationSequence" |
  // Scheduled Station Name / 00400010 / SH
  "ScheduledStationName" |
  // Scheduled Procedure Step Location / 00400011 / SH
  "ScheduledProcedureStepLocation" |
  // Pre-Medication / 00400012 / LO
  "PreMedication" |
  // Scheduled Procedure Step Status / 00400020 / CS
  "ScheduledProcedureStepStatus" |
  // Order Placer Identifier Sequence / 00400026 / SQ
  "OrderPlacerIdentifierSequence" |
  // Order Filler Identifier Sequence / 00400027 / SQ
  "OrderFillerIdentifierSequence" |
  // Local Namespace Entity ID / 00400031 / UT
  "LocalNamespaceEntityID" |
  // Universal Entity ID / 00400032 / UT
  "UniversalEntityID" |
  // Universal Entity ID Type / 00400033 / CS
  "UniversalEntityIDType" |
  // Identifier Type Code / 00400035 / CS
  "IdentifierTypeCode" |
  // Assigning Facility Sequence / 00400036 / SQ
  "AssigningFacilitySequence" |
  // Assigning Jurisdiction Code Sequence / 00400039 / SQ
  "AssigningJurisdictionCodeSequence" |
  // Assigning Agency or Department Code Sequence / 0040003A / SQ
  "AssigningAgencyOrDepartmentCodeSequence" |
  // Scheduled Procedure Step Sequence / 00400100 / SQ
  "ScheduledProcedureStepSequence" |
  // Referenced Non-Image Composite SOP Instance Sequence / 00400220 / SQ
  "ReferencedNonImageCompositeSOPInstanceSequence" |
  // Performed Station AE Title / 00400241 / AE
  "PerformedStationAETitle" |
  // Performed Station Name / 00400242 / SH
  "PerformedStationName" |
  // Performed Location / 00400243 / SH
  "PerformedLocation" |
  // Performed Procedure Step Start Date / 00400244 / DA
  "PerformedProcedureStepStartDate" |
  // Performed Procedure Step Start Time / 00400245 / TM
  "PerformedProcedureStepStartTime" |
  // Performed Procedure Step End Date / 00400250 / DA
  "PerformedProcedureStepEndDate" |
  // Performed Procedure Step End Time / 00400251 / TM
  "PerformedProcedureStepEndTime" |
  // Performed Procedure Step Status / 00400252 / CS
  "PerformedProcedureStepStatus" |
  // Performed Procedure Step ID / 00400253 / SH
  "PerformedProcedureStepID" |
  // Performed Procedure Step Description / 00400254 / LO
  "PerformedProcedureStepDescription" |
  // Performed Procedure Type Description / 00400255 / LO
  "PerformedProcedureTypeDescription" |
  // Performed Protocol Code Sequence / 00400260 / SQ
  "PerformedProtocolCodeSequence" |
  // Performed Protocol Type / 00400261 / CS
  "PerformedProtocolType" |
  // Scheduled Step Attributes Sequence / 00400270 / SQ
  "ScheduledStepAttributesSequence" |
  // Request Attributes Sequence / 00400275 / SQ
  "RequestAttributesSequence" |
  // Comments on the Performed Procedure Step / 00400280 / ST
  "CommentsOnThePerformedProcedureStep" |
  // Performed Procedure Step Discontinuation Reason Code Sequence / 00400281 / SQ
  "PerformedProcedureStepDiscontinuationReasonCodeSequence" |
  // Quantity Sequence / 00400293 / SQ
  "QuantitySequence" |
  // Quantity / 00400294 / DS
  "Quantity" |
  // Measuring Units Sequence / 00400295 / SQ
  "MeasuringUnitsSequence" |
  // Billing Item Sequence / 00400296 / SQ
  "BillingItemSequence" |
  // Total Time of Fluoroscopy / 00400300 / US
  "TotalTimeOfFluoroscopy" |
  // Total Number of Exposures / 00400301 / US
  "TotalNumberOfExposures" |
  // Entrance Dose / 00400302 / US
  "EntranceDose" |
  // Exposed Area / 00400303 / US
  "ExposedArea" |
  // Distance Source to Entrance / 00400306 / DS
  "DistanceSourceToEntrance" |
  // Distance Source to Support / 00400307 / DS
  "DistanceSourceToSupport" |
  // Exposure Dose Sequence / 0040030E / SQ
  "ExposureDoseSequence" |
  // Comments on Radiation Dose / 00400310 / ST
  "CommentsOnRadiationDose" |
  // X-Ray Output / 00400312 / DS
  "XRayOutput" |
  // Half Value Layer / 00400314 / DS
  "HalfValueLayer" |
  // Organ Dose / 00400316 / DS
  "OrganDose" |
  // Organ Exposed / 00400318 / CS
  "OrganExposed" |
  // Billing Procedure Step Sequence / 00400320 / SQ
  "BillingProcedureStepSequence" |
  // Film Consumption Sequence / 00400321 / SQ
  "FilmConsumptionSequence" |
  // Billing Supplies and Devices Sequence / 00400324 / SQ
  "BillingSuppliesAndDevicesSequence" |
  // Referenced Procedure Step Sequence / 00400330 / SQ
  "ReferencedProcedureStepSequence" |
  // Performed Series Sequence / 00400340 / SQ
  "PerformedSeriesSequence" |
  // Comments on the Scheduled Procedure Step / 00400400 / LT
  "CommentsOnTheScheduledProcedureStep" |
  // Protocol Context Sequence / 00400440 / SQ
  "ProtocolContextSequence" |
  // Content Item Modifier Sequence / 00400441 / SQ
  "ContentItemModifierSequence" |
  // Scheduled Specimen Sequence / 00400500 / SQ
  "ScheduledSpecimenSequence" |
  // Specimen Accession Number / 0040050A / LO
  "SpecimenAccessionNumber" |
  // Container Identifier / 00400512 / LO
  "ContainerIdentifier" |
  // Issuer of the Container Identifier Sequence / 00400513 / SQ
  "IssuerOfTheContainerIdentifierSequence" |
  // Alternate Container Identifier Sequence / 00400515 / SQ
  "AlternateContainerIdentifierSequence" |
  // Container Type Code Sequence / 00400518 / SQ
  "ContainerTypeCodeSequence" |
  // Container Description / 0040051A / LO
  "ContainerDescription" |
  // Container Component Sequence / 00400520 / SQ
  "ContainerComponentSequence" |
  // Specimen Sequence / 00400550 / SQ
  "SpecimenSequence" |
  // Specimen Identifier / 00400551 / LO
  "SpecimenIdentifier" |
  // Specimen Description Sequence (Trial) / 00400552 / SQ
  "SpecimenDescriptionSequenceTrial" |
  // Specimen Description (Trial) / 00400553 / ST
  "SpecimenDescriptionTrial" |
  // Specimen UID / 00400554 / UI
  "SpecimenUID" |
  // Acquisition Context Sequence / 00400555 / SQ
  "AcquisitionContextSequence" |
  // Acquisition Context Description / 00400556 / ST
  "AcquisitionContextDescription" |
  // Specimen Type Code Sequence / 0040059A / SQ
  "SpecimenTypeCodeSequence" |
  // Specimen Description Sequence / 00400560 / SQ
  "SpecimenDescriptionSequence" |
  // Issuer of the Specimen Identifier Sequence / 00400562 / SQ
  "IssuerOfTheSpecimenIdentifierSequence" |
  // Specimen Short Description / 00400600 / LO
  "SpecimenShortDescription" |
  // Specimen Detailed Description / 00400602 / UT
  "SpecimenDetailedDescription" |
  // Specimen Preparation Sequence / 00400610 / SQ
  "SpecimenPreparationSequence" |
  // Specimen Preparation Step Content Item Sequence / 00400612 / SQ
  "SpecimenPreparationStepContentItemSequence" |
  // Specimen Localization Content Item Sequence / 00400620 / SQ
  "SpecimenLocalizationContentItemSequence" |
  // Slide Identifier / 004006FA / LO
  "SlideIdentifier" |
  // Whole Slide Microscopy Image Frame Type Sequence / 00400710 / SQ
  "WholeSlideMicroscopyImageFrameTypeSequence" |
  // Image Center Point Coordinates Sequence / 0040071A / SQ
  "ImageCenterPointCoordinatesSequence" |
  // X Offset in Slide Coordinate System / 0040072A / DS
  "XOffsetInSlideCoordinateSystem" |
  // Y Offset in Slide Coordinate System / 0040073A / DS
  "YOffsetInSlideCoordinateSystem" |
  // Z Offset in Slide Coordinate System / 0040074A / DS
  "ZOffsetInSlideCoordinateSystem" |
  // Pixel Spacing Sequence / 004008D8 / SQ
  "PixelSpacingSequence" |
  // Coordinate System Axis Code Sequence / 004008DA / SQ
  "CoordinateSystemAxisCodeSequence" |
  // Measurement Units Code Sequence / 004008EA / SQ
  "MeasurementUnitsCodeSequence" |
  // Vital Stain Code Sequence (Trial) / 004009F8 / SQ
  "VitalStainCodeSequenceTrial" |
  // Requested Procedure ID / 00401001 / SH
  "RequestedProcedureID" |
  // Reason for the Requested Procedure / 00401002 / LO
  "ReasonForTheRequestedProcedure" |
  // Requested Procedure Priority / 00401003 / SH
  "RequestedProcedurePriority" |
  // Patient Transport Arrangements / 00401004 / LO
  "PatientTransportArrangements" |
  // Requested Procedure Location / 00401005 / LO
  "RequestedProcedureLocation" |
  // Placer Order Number / Procedure / 00401006 / SH
  "PlacerOrderNumberProcedure" |
  // Filler Order Number / Procedure / 00401007 / SH
  "FillerOrderNumberProcedure" |
  // Confidentiality Code / 00401008 / LO
  "ConfidentialityCode" |
  // Reporting Priority / 00401009 / SH
  "ReportingPriority" |
  // Reason for Requested Procedure Code Sequence / 0040100A / SQ
  "ReasonForRequestedProcedureCodeSequence" |
  // Names of Intended Recipients of Results / 00401010 / PN
  "NamesOfIntendedRecipientsOfResults" |
  // Intended Recipients of Results Identification Sequence / 00401011 / SQ
  "IntendedRecipientsOfResultsIdentificationSequence" |
  // Reason For Performed Procedure Code Sequence / 00401012 / SQ
  "ReasonForPerformedProcedureCodeSequence" |
  // Requested Procedure Description (Trial) / 00401060 / LO
  "RequestedProcedureDescriptionTrial" |
  // Person Identification Code Sequence / 00401101 / SQ
  "PersonIdentificationCodeSequence" |
  // Person's Address / 00401102 / ST
  "PersonAddress" |
  // Person's Telephone Numbers / 00401103 / LO
  "PersonTelephoneNumbers" |
  // Person's Telecom Information / 00401104 / LT
  "PersonTelecomInformation" |
  // Requested Procedure Comments / 00401400 / LT
  "RequestedProcedureComments" |
  // Reason for the Imaging Service Request / 00402001 / LO
  "ReasonForTheImagingServiceRequest" |
  // Issue Date of Imaging Service Request / 00402004 / DA
  "IssueDateOfImagingServiceRequest" |
  // Issue Time of Imaging Service Request / 00402005 / TM
  "IssueTimeOfImagingServiceRequest" |
  // Placer Order Number / Imaging Service Request (Retired) / 00402006 / SH
  "PlacerOrderNumberImagingServiceRequestRetired" |
  // Filler Order Number / Imaging Service Request (Retired) / 00402007 / SH
  "FillerOrderNumberImagingServiceRequestRetired" |
  // Order Entered By / 00402008 / PN
  "OrderEnteredBy" |
  // Order Enterer's Location / 00402009 / SH
  "OrderEntererLocation" |
  // Order Callback Phone Number / 00402010 / SH
  "OrderCallbackPhoneNumber" |
  // Order Callback Telecom Information / 00402011 / LT
  "OrderCallbackTelecomInformation" |
  // Placer Order Number / Imaging Service Request / 00402016 / LO
  "PlacerOrderNumberImagingServiceRequest" |
  // Filler Order Number / Imaging Service Request / 00402017 / LO
  "FillerOrderNumberImagingServiceRequest" |
  // Imaging Service Request Comments / 00402400 / LT
  "ImagingServiceRequestComments" |
  // Confidentiality Constraint on Patient Data Description / 00403001 / LO
  "ConfidentialityConstraintOnPatientDataDescription" |
  // General Purpose Scheduled Procedure Step Status / 00404001 / CS
  "GeneralPurposeScheduledProcedureStepStatus" |
  // General Purpose Performed Procedure Step Status / 00404002 / CS
  "GeneralPurposePerformedProcedureStepStatus" |
  // General Purpose Scheduled Procedure Step Priority / 00404003 / CS
  "GeneralPurposeScheduledProcedureStepPriority" |
  // Scheduled Processing Applications Code Sequence / 00404004 / SQ
  "ScheduledProcessingApplicationsCodeSequence" |
  // Scheduled Procedure Step Start DateTime / 00404005 / DT
  "ScheduledProcedureStepStartDateTime" |
  // Multiple Copies Flag / 00404006 / CS
  "MultipleCopiesFlag" |
  // Performed Processing Applications Code Sequence / 00404007 / SQ
  "PerformedProcessingApplicationsCodeSequence" |
  // Scheduled Procedure Step Expiration DateTime / 00404008 / DT
  "ScheduledProcedureStepExpirationDateTime" |
  // Human Performer Code Sequence / 00404009 / SQ
  "HumanPerformerCodeSequence" |
  // Scheduled Procedure Step Modification DateTime / 00404010 / DT
  "ScheduledProcedureStepModificationDateTime" |
  // Expected Completion DateTime / 00404011 / DT
  "ExpectedCompletionDateTime" |
  // Resulting General Purpose Performed Procedure Steps Sequence / 00404015 / SQ
  "ResultingGeneralPurposePerformedProcedureStepsSequence" |
  // Referenced General Purpose Scheduled Procedure Step Sequence / 00404016 / SQ
  "ReferencedGeneralPurposeScheduledProcedureStepSequence" |
  // Scheduled Workitem Code Sequence / 00404018 / SQ
  "ScheduledWorkitemCodeSequence" |
  // Performed Workitem Code Sequence / 00404019 / SQ
  "PerformedWorkitemCodeSequence" |
  // Input Availability Flag / 00404020 / CS
  "InputAvailabilityFlag" |
  // Input Information Sequence / 00404021 / SQ
  "InputInformationSequence" |
  // Relevant Information Sequence / 00404022 / SQ
  "RelevantInformationSequence" |
  // Referenced General Purpose Scheduled Procedure Step Transaction UID / 00404023 / UI
  "ReferencedGeneralPurposeScheduledProcedureStepTransactionUID" |
  // Scheduled Station Name Code Sequence / 00404025 / SQ
  "ScheduledStationNameCodeSequence" |
  // Scheduled Station Class Code Sequence / 00404026 / SQ
  "ScheduledStationClassCodeSequence" |
  // Scheduled Station Geographic Location Code Sequence / 00404027 / SQ
  "ScheduledStationGeographicLocationCodeSequence" |
  // Performed Station Name Code Sequence / 00404028 / SQ
  "PerformedStationNameCodeSequence" |
  // Performed Station Class Code Sequence / 00404029 / SQ
  "PerformedStationClassCodeSequence" |
  // Performed Station Geographic Location Code Sequence / 00404030 / SQ
  "PerformedStationGeographicLocationCodeSequence" |
  // Requested Subsequent Workitem Code Sequence / 00404031 / SQ
  "RequestedSubsequentWorkitemCodeSequence" |
  // Non-DICOM Output Code Sequence / 00404032 / SQ
  "NonDICOMOutputCodeSequence" |
  // Output Information Sequence / 00404033 / SQ
  "OutputInformationSequence" |
  // Scheduled Human Performers Sequence / 00404034 / SQ
  "ScheduledHumanPerformersSequence" |
  // Actual Human Performers Sequence / 00404035 / SQ
  "ActualHumanPerformersSequence" |
  // Human Performer's Organization / 00404036 / LO
  "HumanPerformerOrganization" |
  // Human Performer's Name / 00404037 / PN
  "HumanPerformerName" |
  // Raw Data Handling / 00404040 / CS
  "RawDataHandling" |
  // Input Readiness State / 00404041 / CS
  "InputReadinessState" |
  // Performed Procedure Step Start DateTime / 00404050 / DT
  "PerformedProcedureStepStartDateTime" |
  // Performed Procedure Step End DateTime / 00404051 / DT
  "PerformedProcedureStepEndDateTime" |
  // Procedure Step Cancellation DateTime / 00404052 / DT
  "ProcedureStepCancellationDateTime" |
  // Output Destination Sequence / 00404070 / SQ
  "OutputDestinationSequence" |
  // DICOM Storage Sequence / 00404071 / SQ
  "DICOMStorageSequence" |
  // STOW-RS Storage Sequence / 00404072 / SQ
  "STOWRSStorageSequence" |
  // Storage URL / 00404073 / UR
  "StorageURL" |
  // XDS Storage Sequence / 00404074 / SQ
  "XDSStorageSequence" |
  // Entrance Dose in mGy / 00408302 / DS
  "EntranceDoseInmGy" |
  // Entrance Dose Derivation / 00408303 / CS
  "EntranceDoseDerivation" |
  // Parametric Map Frame Type Sequence / 00409092 / SQ
  "ParametricMapFrameTypeSequence" |
  // Referenced Image Real World Value Mapping Sequence / 00409094 / SQ
  "ReferencedImageRealWorldValueMappingSequence" |
  // Real World Value Mapping Sequence / 00409096 / SQ
  "RealWorldValueMappingSequence" |
  // Pixel Value Mapping Code Sequence / 00409098 / SQ
  "PixelValueMappingCodeSequence" |
  // LUT Label / 00409210 / SH
  "LUTLabel" |
  // Real World Value Last Value Mapped / 00409211 / US/SS
  "RealWorldValueLastValueMapped" |
  // Real World Value LUT Data / 00409212 / FD
  "RealWorldValueLUTData" |
  // Double Float Real World Value Last Value Mapped / 00409213 / FD
  "DoubleFloatRealWorldValueLastValueMapped" |
  // Double Float Real World Value First Value Mapped / 00409214 / FD
  "DoubleFloatRealWorldValueFirstValueMapped" |
  // Real World Value First Value Mapped / 00409216 / US/SS
  "RealWorldValueFirstValueMapped" |
  // Quantity Definition Sequence / 00409220 / SQ
  "QuantityDefinitionSequence" |
  // Real World Value Intercept / 00409224 / FD
  "RealWorldValueIntercept" |
  // Real World Value Slope / 00409225 / FD
  "RealWorldValueSlope" |
  // Findings Flag (Trial) / 0040A007 / CS
  "FindingsFlagTrial" |
  // Relationship Type / 0040A010 / CS
  "RelationshipType" |
  // Findings Sequence (Trial) / 0040A020 / SQ
  "FindingsSequenceTrial" |
  // Findings Group UID (Trial) / 0040A021 / UI
  "FindingsGroupUIDTrial" |
  // Referenced Findings Group UID (Trial) / 0040A022 / UI
  "ReferencedFindingsGroupUIDTrial" |
  // Findings Group Recording Date (Trial) / 0040A023 / DA
  "FindingsGroupRecordingDateTrial" |
  // Findings Group Recording Time (Trial) / 0040A024 / TM
  "FindingsGroupRecordingTimeTrial" |
  // Findings Source Category Code Sequence (Trial) / 0040A026 / SQ
  "FindingsSourceCategoryCodeSequenceTrial" |
  // Verifying Organization / 0040A027 / LO
  "VerifyingOrganization" |
  // Documenting Organization Identifier Code Sequence (Trial) / 0040A028 / SQ
  "DocumentingOrganizationIdentifierCodeSequenceTrial" |
  // Verification DateTime / 0040A030 / DT
  "VerificationDateTime" |
  // Observation DateTime / 0040A032 / DT
  "ObservationDateTime" |
  // Observation Start DateTime / 0040A033 / DT
  "ObservationStartDateTime" |
  // Value Type / 0040A040 / CS
  "ValueType" |
  // Concept Name Code Sequence / 0040A043 / SQ
  "ConceptNameCodeSequence" |
  // Measurement Precision Description (Trial) / 0040A047 / LO
  "MeasurementPrecisionDescriptionTrial" |
  // Continuity Of Content / 0040A050 / CS
  "ContinuityOfContent" |
  // Urgency or Priority Alerts (Trial) / 0040A057 / CS
  "UrgencyOrPriorityAlertsTrial" |
  // Sequencing Indicator (Trial) / 0040A060 / LO
  "SequencingIndicatorTrial" |
  // Document Identifier Code Sequence (Trial) / 0040A066 / SQ
  "DocumentIdentifierCodeSequenceTrial" |
  // Document Author (Trial) / 0040A067 / PN
  "DocumentAuthorTrial" |
  // Document Author Identifier Code Sequence (Trial) / 0040A068 / SQ
  "DocumentAuthorIdentifierCodeSequenceTrial" |
  // Identifier Code Sequence (Trial) / 0040A070 / SQ
  "IdentifierCodeSequenceTrial" |
  // Verifying Observer Sequence / 0040A073 / SQ
  "VerifyingObserverSequence" |
  // Object Binary Identifier (Trial) / 0040A074 / OB
  "ObjectBinaryIdentifierTrial" |
  // Verifying Observer Name / 0040A075 / PN
  "VerifyingObserverName" |
  // Documenting Observer Identifier Code Sequence (Trial) / 0040A076 / SQ
  "DocumentingObserverIdentifierCodeSequenceTrial" |
  // Author Observer Sequence / 0040A078 / SQ
  "AuthorObserverSequence" |
  // Participant Sequence / 0040A07A / SQ
  "ParticipantSequence" |
  // Custodial Organization Sequence / 0040A07C / SQ
  "CustodialOrganizationSequence" |
  // Participation Type / 0040A080 / CS
  "ParticipationType" |
  // Participation DateTime / 0040A082 / DT
  "ParticipationDateTime" |
  // Observer Type / 0040A084 / CS
  "ObserverType" |
  // Procedure Identifier Code Sequence (Trial) / 0040A085 / SQ
  "ProcedureIdentifierCodeSequenceTrial" |
  // Verifying Observer Identification Code Sequence / 0040A088 / SQ
  "VerifyingObserverIdentificationCodeSequence" |
  // Object Directory Binary Identifier (Trial) / 0040A089 / OB
  "ObjectDirectoryBinaryIdentifierTrial" |
  // Equivalent CDA Document Sequence / 0040A090 / SQ
  "EquivalentCDADocumentSequence" |
  // Referenced Waveform Channels / 0040A0B0 / US
  "ReferencedWaveformChannels" |
  // Date of Document or Verbal Transaction (Trial) / 0040A110 / DA
  "DateOfDocumentOrVerbalTransactionTrial" |
  // Time of Document Creation or Verbal Transaction (Trial) / 0040A112 / TM
  "TimeOfDocumentCreationOrVerbalTransactionTrial" |
  // DateTime / 0040A120 / DT
  "DateTime" |
  // Date / 0040A121 / DA
  "Date" |
  // Time / 0040A122 / TM
  "Time" |
  // Person Name / 0040A123 / PN
  "PersonName" |
  // UID / 0040A124 / UI
  "UID" |
  // Report Status ID (Trial) / 0040A125 / CS
  "ReportStatusIDTrial" |
  // Temporal Range Type / 0040A130 / CS
  "TemporalRangeType" |
  // Referenced Sample Positions / 0040A132 / UL
  "ReferencedSamplePositions" |
  // Referenced Frame Numbers / 0040A136 / US
  "ReferencedFrameNumbers" |
  // Referenced Time Offsets / 0040A138 / DS
  "ReferencedTimeOffsets" |
  // Referenced DateTime / 0040A13A / DT
  "ReferencedDateTime" |
  // Text Value / 0040A160 / UT
  "TextValue" |
  // Floating Point Value / 0040A161 / FD
  "FloatingPointValue" |
  // Rational Numerator Value / 0040A162 / SL
  "RationalNumeratorValue" |
  // Rational Denominator Value / 0040A163 / UL
  "RationalDenominatorValue" |
  // Observation Category Code Sequence (Trial) / 0040A167 / SQ
  "ObservationCategoryCodeSequenceTrial" |
  // Concept Code Sequence / 0040A168 / SQ
  "ConceptCodeSequence" |
  // Bibliographic Citation (Trial) / 0040A16A / ST
  "BibliographicCitationTrial" |
  // Purpose of Reference Code Sequence / 0040A170 / SQ
  "PurposeOfReferenceCodeSequence" |
  // Observation UID / 0040A171 / UI
  "ObservationUID" |
  // Referenced Observation UID (Trial) / 0040A172 / UI
  "ReferencedObservationUIDTrial" |
  // Referenced Observation Class (Trial) / 0040A173 / CS
  "ReferencedObservationClassTrial" |
  // Referenced Object Observation Class (Trial) / 0040A174 / CS
  "ReferencedObjectObservationClassTrial" |
  // Annotation Group Number / 0040A180 / US
  "AnnotationGroupNumber" |
  // Observation Date (Trial) / 0040A192 / DA
  "ObservationDateTrial" |
  // Observation Time (Trial) / 0040A193 / TM
  "ObservationTimeTrial" |
  // Measurement Automation (Trial) / 0040A194 / CS
  "MeasurementAutomationTrial" |
  // Modifier Code Sequence / 0040A195 / SQ
  "ModifierCodeSequence" |
  // Identification Description (Trial) / 0040A224 / ST
  "IdentificationDescriptionTrial" |
  // Coordinates Set Geometric Type (Trial) / 0040A290 / CS
  "CoordinatesSetGeometricTypeTrial" |
  // Algorithm Code Sequence (Trial) / 0040A296 / SQ
  "AlgorithmCodeSequenceTrial" |
  // Algorithm Description (Trial) / 0040A297 / ST
  "AlgorithmDescriptionTrial" |
  // Pixel Coordinates Set (Trial) / 0040A29A / SL
  "PixelCoordinatesSetTrial" |
  // Measured Value Sequence / 0040A300 / SQ
  "MeasuredValueSequence" |
  // Numeric Value Qualifier Code Sequence / 0040A301 / SQ
  "NumericValueQualifierCodeSequence" |
  // Current Observer (Trial) / 0040A307 / PN
  "CurrentObserverTrial" |
  // Numeric Value / 0040A30A / DS
  "NumericValue" |
  // Referenced Accession Sequence (Trial) / 0040A313 / SQ
  "ReferencedAccessionSequenceTrial" |
  // Report Status Comment (Trial) / 0040A33A / ST
  "ReportStatusCommentTrial" |
  // Procedure Context Sequence (Trial) / 0040A340 / SQ
  "ProcedureContextSequenceTrial" |
  // Verbal Source (Trial) / 0040A352 / PN
  "VerbalSourceTrial" |
  // Address (Trial) / 0040A353 / ST
  "AddressTrial" |
  // Telephone Number (Trial) / 0040A354 / LO
  "TelephoneNumberTrial" |
  // Verbal Source Identifier Code Sequence (Trial) / 0040A358 / SQ
  "VerbalSourceIdentifierCodeSequenceTrial" |
  // Predecessor Documents Sequence / 0040A360 / SQ
  "PredecessorDocumentsSequence" |
  // Referenced Request Sequence / 0040A370 / SQ
  "ReferencedRequestSequence" |
  // Performed Procedure Code Sequence / 0040A372 / SQ
  "PerformedProcedureCodeSequence" |
  // Current Requested Procedure Evidence Sequence / 0040A375 / SQ
  "CurrentRequestedProcedureEvidenceSequence" |
  // Report Detail Sequence (Trial) / 0040A380 / SQ
  "ReportDetailSequenceTrial" |
  // Pertinent Other Evidence Sequence / 0040A385 / SQ
  "PertinentOtherEvidenceSequence" |
  // HL7 Structured Document Reference Sequence / 0040A390 / SQ
  "HL7StructuredDocumentReferenceSequence" |
  // Observation Subject UID (Trial) / 0040A402 / UI
  "ObservationSubjectUIDTrial" |
  // Observation Subject Class (Trial) / 0040A403 / CS
  "ObservationSubjectClassTrial" |
  // Observation Subject Type Code Sequence (Trial) / 0040A404 / SQ
  "ObservationSubjectTypeCodeSequenceTrial" |
  // Completion Flag / 0040A491 / CS
  "CompletionFlag" |
  // Completion Flag Description / 0040A492 / LO
  "CompletionFlagDescription" |
  // Verification Flag / 0040A493 / CS
  "VerificationFlag" |
  // Archive Requested / 0040A494 / CS
  "ArchiveRequested" |
  // Preliminary Flag / 0040A496 / CS
  "PreliminaryFlag" |
  // Content Template Sequence / 0040A504 / SQ
  "ContentTemplateSequence" |
  // Identical Documents Sequence / 0040A525 / SQ
  "IdenticalDocumentsSequence" |
  // Observation Subject Context Flag (Trial) / 0040A600 / CS
  "ObservationSubjectContextFlagTrial" |
  // Observer Context Flag (Trial) / 0040A601 / CS
  "ObserverContextFlagTrial" |
  // Procedure Context Flag (Trial) / 0040A603 / CS
  "ProcedureContextFlagTrial" |
  // Content Sequence / 0040A730 / SQ
  "ContentSequence" |
  // Relationship Sequence (Trial) / 0040A731 / SQ
  "RelationshipSequenceTrial" |
  // Relationship Type Code Sequence (Trial) / 0040A732 / SQ
  "RelationshipTypeCodeSequenceTrial" |
  // Language Code Sequence (Trial) / 0040A744 / SQ
  "LanguageCodeSequenceTrial" |
  // Tabulated Values Sequence / 0040A801 / SQ
  "TabulatedValuesSequence" |
  // Number of Table Rows / 0040A802 / UL
  "NumberOfTableRows" |
  // Number of Table Columns / 0040A803 / UL
  "NumberOfTableColumns" |
  // Table Row Number / 0040A804 / UL
  "TableRowNumber" |
  // Table Column Number / 0040A805 / UL
  "TableColumnNumber" |
  // Table Row Definition Sequence / 0040A806 / SQ
  "TableRowDefinitionSequence" |
  // Table Column Definition Sequence / 0040A807 / SQ
  "TableColumnDefinitionSequence" |
  // Cell Values Sequence / 0040A808 / SQ
  "CellValuesSequence" |
  // Uniform Resource Locator (Trial) / 0040A992 / ST
  "UniformResourceLocatorTrial" |
  // Waveform Annotation Sequence / 0040B020 / SQ
  "WaveformAnnotationSequence" |
  // Template Identifier / 0040DB00 / CS
  "TemplateIdentifier" |
  // Template Version / 0040DB06 / DT
  "TemplateVersion" |
  // Template Local Version / 0040DB07 / DT
  "TemplateLocalVersion" |
  // Template Extension Flag / 0040DB0B / CS
  "TemplateExtensionFlag" |
  // Template Extension Organization UID / 0040DB0C / UI
  "TemplateExtensionOrganizationUID" |
  // Template Extension Creator UID / 0040DB0D / UI
  "TemplateExtensionCreatorUID" |
  // Referenced Content Item Identifier / 0040DB73 / UL
  "ReferencedContentItemIdentifier" |
  // HL7 Instance Identifier / 0040E001 / ST
  "HL7InstanceIdentifier" |
  // HL7 Document Effective Time / 0040E004 / DT
  "HL7DocumentEffectiveTime" |
  // HL7 Document Type Code Sequence / 0040E006 / SQ
  "HL7DocumentTypeCodeSequence" |
  // Document Class Code Sequence / 0040E008 / SQ
  "DocumentClassCodeSequence" |
  // Retrieve URI / 0040E010 / UR
  "RetrieveURI" |
  // Retrieve Location UID / 0040E011 / UI
  "RetrieveLocationUID" |
  // Type of Instances / 0040E020 / CS
  "TypeOfInstances" |
  // DICOM Retrieval Sequence / 0040E021 / SQ
  "DICOMRetrievalSequence" |
  // DICOM Media Retrieval Sequence / 0040E022 / SQ
  "DICOMMediaRetrievalSequence" |
  // WADO Retrieval Sequence / 0040E023 / SQ
  "WADORetrievalSequence" |
  // XDS Retrieval Sequence / 0040E024 / SQ
  "XDSRetrievalSequence" |
  // WADO-RS Retrieval Sequence / 0040E025 / SQ
  "WADORSRetrievalSequence" |
  // Repository Unique ID / 0040E030 / UI
  "RepositoryUniqueID" |
  // Home Community ID / 0040E031 / UI
  "HomeCommunityID" |
  // Document Title / 00420010 / ST
  "DocumentTitle" |
  // Encapsulated Document / 00420011 / OB
  "EncapsulatedDocument" |
  // MIME Type of Encapsulated Document / 00420012 / LO
  "MIMETypeOfEncapsulatedDocument" |
  // Source Instance Sequence / 00420013 / SQ
  "SourceInstanceSequence" |
  // List of MIME Types / 00420014 / LO
  "ListOfMIMETypes" |
  // Encapsulated Document Length / 00420015 / UL
  "EncapsulatedDocumentLength" |
  // Product Package Identifier / 00440001 / ST
  "ProductPackageIdentifier" |
  // Substance Administration Approval / 00440002 / CS
  "SubstanceAdministrationApproval" |
  // Approval Status Further Description / 00440003 / LT
  "ApprovalStatusFurtherDescription" |
  // Approval Status DateTime / 00440004 / DT
  "ApprovalStatusDateTime" |
  // Product Type Code Sequence / 00440007 / SQ
  "ProductTypeCodeSequence" |
  // Product Name / 00440008 / LO
  "ProductName" |
  // Product Description / 00440009 / LT
  "ProductDescription" |
  // Product Lot Identifier / 0044000A / LO
  "ProductLotIdentifier" |
  // Product Expiration DateTime / 0044000B / DT
  "ProductExpirationDateTime" |
  // Substance Administration DateTime / 00440010 / DT
  "SubstanceAdministrationDateTime" |
  // Substance Administration Notes / 00440011 / LO
  "SubstanceAdministrationNotes" |
  // Substance Administration Device ID / 00440012 / LO
  "SubstanceAdministrationDeviceID" |
  // Product Parameter Sequence / 00440013 / SQ
  "ProductParameterSequence" |
  // Substance Administration Parameter Sequence / 00440019 / SQ
  "SubstanceAdministrationParameterSequence" |
  // Approval Sequence / 00440100 / SQ
  "ApprovalSequence" |
  // Assertion Code Sequence / 00440101 / SQ
  "AssertionCodeSequence" |
  // Assertion UID / 00440102 / UI
  "AssertionUID" |
  // Asserter Identification Sequence / 00440103 / SQ
  "AsserterIdentificationSequence" |
  // Assertion DateTime / 00440104 / DT
  "AssertionDateTime" |
  // Assertion Expiration DateTime / 00440105 / DT
  "AssertionExpirationDateTime" |
  // Assertion Comments / 00440106 / UT
  "AssertionComments" |
  // Related Assertion Sequence / 00440107 / SQ
  "RelatedAssertionSequence" |
  // Referenced Assertion UID / 00440108 / UI
  "ReferencedAssertionUID" |
  // Approval Subject Sequence / 00440109 / SQ
  "ApprovalSubjectSequence" |
  // Organizational Role Code Sequence / 0044010A / SQ
  "OrganizationalRoleCodeSequence" |
  // Lens Description / 00460012 / LO
  "LensDescription" |
  // Right Lens Sequence / 00460014 / SQ
  "RightLensSequence" |
  // Left Lens Sequence / 00460015 / SQ
  "LeftLensSequence" |
  // Unspecified Laterality Lens Sequence / 00460016 / SQ
  "UnspecifiedLateralityLensSequence" |
  // Cylinder Sequence / 00460018 / SQ
  "CylinderSequence" |
  // Prism Sequence / 00460028 / SQ
  "PrismSequence" |
  // Horizontal Prism Power / 00460030 / FD
  "HorizontalPrismPower" |
  // Horizontal Prism Base / 00460032 / CS
  "HorizontalPrismBase" |
  // Vertical Prism Power / 00460034 / FD
  "VerticalPrismPower" |
  // Vertical Prism Base / 00460036 / CS
  "VerticalPrismBase" |
  // Lens Segment Type / 00460038 / CS
  "LensSegmentType" |
  // Optical Transmittance / 00460040 / FD
  "OpticalTransmittance" |
  // Channel Width / 00460042 / FD
  "ChannelWidth" |
  // Pupil Size / 00460044 / FD
  "PupilSize" |
  // Corneal Size / 00460046 / FD
  "CornealSize" |
  // Corneal Size Sequence / 00460047 / SQ
  "CornealSizeSequence" |
  // Autorefraction Right Eye Sequence / 00460050 / SQ
  "AutorefractionRightEyeSequence" |
  // Autorefraction Left Eye Sequence / 00460052 / SQ
  "AutorefractionLeftEyeSequence" |
  // Distance Pupillary Distance / 00460060 / FD
  "DistancePupillaryDistance" |
  // Near Pupillary Distance / 00460062 / FD
  "NearPupillaryDistance" |
  // Intermediate Pupillary Distance / 00460063 / FD
  "IntermediatePupillaryDistance" |
  // Other Pupillary Distance / 00460064 / FD
  "OtherPupillaryDistance" |
  // Keratometry Right Eye Sequence / 00460070 / SQ
  "KeratometryRightEyeSequence" |
  // Keratometry Left Eye Sequence / 00460071 / SQ
  "KeratometryLeftEyeSequence" |
  // Steep Keratometric Axis Sequence / 00460074 / SQ
  "SteepKeratometricAxisSequence" |
  // Radius of Curvature / 00460075 / FD
  "RadiusOfCurvature" |
  // Keratometric Power / 00460076 / FD
  "KeratometricPower" |
  // Keratometric Axis / 00460077 / FD
  "KeratometricAxis" |
  // Flat Keratometric Axis Sequence / 00460080 / SQ
  "FlatKeratometricAxisSequence" |
  // Background Color / 00460092 / CS
  "BackgroundColor" |
  // Optotype / 00460094 / CS
  "Optotype" |
  // Optotype Presentation / 00460095 / CS
  "OptotypePresentation" |
  // Subjective Refraction Right Eye Sequence / 00460097 / SQ
  "SubjectiveRefractionRightEyeSequence" |
  // Subjective Refraction Left Eye Sequence / 00460098 / SQ
  "SubjectiveRefractionLeftEyeSequence" |
  // Add Near Sequence / 00460100 / SQ
  "AddNearSequence" |
  // Add Intermediate Sequence / 00460101 / SQ
  "AddIntermediateSequence" |
  // Add Other Sequence / 00460102 / SQ
  "AddOtherSequence" |
  // Add Power / 00460104 / FD
  "AddPower" |
  // Viewing Distance / 00460106 / FD
  "ViewingDistance" |
  // Cornea Measurements Sequence / 00460110 / SQ
  "CorneaMeasurementsSequence" |
  // Source of Cornea Measurement Data Code Sequence / 00460111 / SQ
  "SourceOfCorneaMeasurementDataCodeSequence" |
  // Steep Corneal Axis Sequence / 00460112 / SQ
  "SteepCornealAxisSequence" |
  // Flat Corneal Axis Sequence / 00460113 / SQ
  "FlatCornealAxisSequence" |
  // Corneal Power / 00460114 / FD
  "CornealPower" |
  // Corneal Axis / 00460115 / FD
  "CornealAxis" |
  // Cornea Measurement Method Code Sequence / 00460116 / SQ
  "CorneaMeasurementMethodCodeSequence" |
  // Refractive Index of Cornea / 00460117 / FL
  "RefractiveIndexOfCornea" |
  // Refractive Index of Aqueous Humor / 00460118 / FL
  "RefractiveIndexOfAqueousHumor" |
  // Visual Acuity Type Code Sequence / 00460121 / SQ
  "VisualAcuityTypeCodeSequence" |
  // Visual Acuity Right Eye Sequence / 00460122 / SQ
  "VisualAcuityRightEyeSequence" |
  // Visual Acuity Left Eye Sequence / 00460123 / SQ
  "VisualAcuityLeftEyeSequence" |
  // Visual Acuity Both Eyes Open Sequence / 00460124 / SQ
  "VisualAcuityBothEyesOpenSequence" |
  // Viewing Distance Type / 00460125 / CS
  "ViewingDistanceType" |
  // Visual Acuity Modifiers / 00460135 / SS
  "VisualAcuityModifiers" |
  // Decimal Visual Acuity / 00460137 / FD
  "DecimalVisualAcuity" |
  // Optotype Detailed Definition / 00460139 / LO
  "OptotypeDetailedDefinition" |
  // Referenced Refractive Measurements Sequence / 00460145 / SQ
  "ReferencedRefractiveMeasurementsSequence" |
  // Sphere Power / 00460146 / FD
  "SpherePower" |
  // Cylinder Power / 00460147 / FD
  "CylinderPower" |
  // Corneal Topography Surface / 00460201 / CS
  "CornealTopographySurface" |
  // Corneal Vertex Location / 00460202 / FL
  "CornealVertexLocation" |
  // Pupil Centroid X-Coordinate / 00460203 / FL
  "PupilCentroidXCoordinate" |
  // Pupil Centroid Y-Coordinate / 00460204 / FL
  "PupilCentroidYCoordinate" |
  // Equivalent Pupil Radius / 00460205 / FL
  "EquivalentPupilRadius" |
  // Corneal Topography Map Type Code Sequence / 00460207 / SQ
  "CornealTopographyMapTypeCodeSequence" |
  // Vertices of the Outline of Pupil / 00460208 / IS
  "VerticesOfTheOutlineOfPupil" |
  // Corneal Topography Mapping Normals Sequence / 00460210 / SQ
  "CornealTopographyMappingNormalsSequence" |
  // Maximum Corneal Curvature Sequence / 00460211 / SQ
  "MaximumCornealCurvatureSequence" |
  // Maximum Corneal Curvature / 00460212 / FL
  "MaximumCornealCurvature" |
  // Maximum Corneal Curvature Location / 00460213 / FL
  "MaximumCornealCurvatureLocation" |
  // Minimum Keratometric Sequence / 00460215 / SQ
  "MinimumKeratometricSequence" |
  // Simulated Keratometric Cylinder Sequence / 00460218 / SQ
  "SimulatedKeratometricCylinderSequence" |
  // Average Corneal Power / 00460220 / FL
  "AverageCornealPower" |
  // Corneal I-S Value / 00460224 / FL
  "CornealISValue" |
  // Analyzed Area / 00460227 / FL
  "AnalyzedArea" |
  // Surface Regularity Index / 00460230 / FL
  "SurfaceRegularityIndex" |
  // Surface Asymmetry Index / 00460232 / FL
  "SurfaceAsymmetryIndex" |
  // Corneal Eccentricity Index / 00460234 / FL
  "CornealEccentricityIndex" |
  // Keratoconus Prediction Index / 00460236 / FL
  "KeratoconusPredictionIndex" |
  // Decimal Potential Visual Acuity / 00460238 / FL
  "DecimalPotentialVisualAcuity" |
  // Corneal Topography Map Quality Evaluation / 00460242 / CS
  "CornealTopographyMapQualityEvaluation" |
  // Source Image Corneal Processed Data Sequence / 00460244 / SQ
  "SourceImageCornealProcessedDataSequence" |
  // Corneal Point Location / 00460247 / FL
  "CornealPointLocation" |
  // Corneal Point Estimated / 00460248 / CS
  "CornealPointEstimated" |
  // Axial Power / 00460249 / FL
  "AxialPower" |
  // Tangential Power / 00460250 / FL
  "TangentialPower" |
  // Refractive Power / 00460251 / FL
  "RefractivePower" |
  // Relative Elevation / 00460252 / FL
  "RelativeElevation" |
  // Corneal Wavefront / 00460253 / FL
  "CornealWavefront" |
  // Imaged Volume Width / 00480001 / FL
  "ImagedVolumeWidth" |
  // Imaged Volume Height / 00480002 / FL
  "ImagedVolumeHeight" |
  // Imaged Volume Depth / 00480003 / FL
  "ImagedVolumeDepth" |
  // Total Pixel Matrix Columns / 00480006 / UL
  "TotalPixelMatrixColumns" |
  // Total Pixel Matrix Rows / 00480007 / UL
  "TotalPixelMatrixRows" |
  // Total Pixel Matrix Origin Sequence / 00480008 / SQ
  "TotalPixelMatrixOriginSequence" |
  // Specimen Label in Image / 00480010 / CS
  "SpecimenLabelInImage" |
  // Focus Method / 00480011 / CS
  "FocusMethod" |
  // Extended Depth of Field / 00480012 / CS
  "ExtendedDepthOfField" |
  // Number of Focal Planes / 00480013 / US
  "NumberOfFocalPlanes" |
  // Distance Between Focal Planes / 00480014 / FL
  "DistanceBetweenFocalPlanes" |
  // Recommended Absent Pixel CIELab Value / 00480015 / US
  "RecommendedAbsentPixelCIELabValue" |
  // Illuminator Type Code Sequence / 00480100 / SQ
  "IlluminatorTypeCodeSequence" |
  // Image Orientation (Slide) / 00480102 / DS
  "ImageOrientationSlide" |
  // Optical Path Sequence / 00480105 / SQ
  "OpticalPathSequence" |
  // Optical Path Identifier / 00480106 / SH
  "OpticalPathIdentifier" |
  // Optical Path Description / 00480107 / ST
  "OpticalPathDescription" |
  // Illumination Color Code Sequence / 00480108 / SQ
  "IlluminationColorCodeSequence" |
  // Specimen Reference Sequence / 00480110 / SQ
  "SpecimenReferenceSequence" |
  // Condenser Lens Power / 00480111 / DS
  "CondenserLensPower" |
  // Objective Lens Power / 00480112 / DS
  "ObjectiveLensPower" |
  // Objective Lens Numerical Aperture / 00480113 / DS
  "ObjectiveLensNumericalAperture" |
  // Palette Color Lookup Table Sequence / 00480120 / SQ
  "PaletteColorLookupTableSequence" |
  // Referenced Image Navigation Sequence / 00480200 / SQ
  "ReferencedImageNavigationSequence" |
  // Top Left Hand Corner of Localizer Area / 00480201 / US
  "TopLeftHandCornerOfLocalizerArea" |
  // Bottom Right Hand Corner of Localizer Area / 00480202 / US
  "BottomRightHandCornerOfLocalizerArea" |
  // Optical Path Identification Sequence / 00480207 / SQ
  "OpticalPathIdentificationSequence" |
  // Plane Position (Slide) Sequence / 0048021A / SQ
  "PlanePositionSlideSequence" |
  // Column Position In Total Image Pixel Matrix / 0048021E / SL
  "ColumnPositionInTotalImagePixelMatrix" |
  // Row Position In Total Image Pixel Matrix / 0048021F / SL
  "RowPositionInTotalImagePixelMatrix" |
  // Pixel Origin Interpretation / 00480301 / CS
  "PixelOriginInterpretation" |
  // Number of Optical Paths / 00480302 / UL
  "NumberOfOpticalPaths" |
  // Total Pixel Matrix Focal Planes / 00480303 / UL
  "TotalPixelMatrixFocalPlanes" |
  // Calibration Image / 00500004 / CS
  "CalibrationImage" |
  // Device Sequence / 00500010 / SQ
  "DeviceSequence" |
  // Container Component Type Code Sequence / 00500012 / SQ
  "ContainerComponentTypeCodeSequence" |
  // Container Component Thickness / 00500013 / FD
  "ContainerComponentThickness" |
  // Device Length / 00500014 / DS
  "DeviceLength" |
  // Container Component Width / 00500015 / FD
  "ContainerComponentWidth" |
  // Device Diameter / 00500016 / DS
  "DeviceDiameter" |
  // Device Diameter Units / 00500017 / CS
  "DeviceDiameterUnits" |
  // Device Volume / 00500018 / DS
  "DeviceVolume" |
  // Inter-Marker Distance / 00500019 / DS
  "InterMarkerDistance" |
  // Container Component Material / 0050001A / CS
  "ContainerComponentMaterial" |
  // Container Component ID / 0050001B / LO
  "ContainerComponentID" |
  // Container Component Length / 0050001C / FD
  "ContainerComponentLength" |
  // Container Component Diameter / 0050001D / FD
  "ContainerComponentDiameter" |
  // Container Component Description / 0050001E / LO
  "ContainerComponentDescription" |
  // Device Description / 00500020 / LO
  "DeviceDescription" |
  // Long Device Description / 00500021 / ST
  "LongDeviceDescription" |
  // Contrast/Bolus Ingredient Percent by Volume / 00520001 / FL
  "ContrastBolusIngredientPercentByVolume" |
  // OCT Focal Distance / 00520002 / FD
  "OCTFocalDistance" |
  // Beam Spot Size / 00520003 / FD
  "BeamSpotSize" |
  // Effective Refractive Index / 00520004 / FD
  "EffectiveRefractiveIndex" |
  // OCT Acquisition Domain / 00520006 / CS
  "OCTAcquisitionDomain" |
  // OCT Optical Center Wavelength / 00520007 / FD
  "OCTOpticalCenterWavelength" |
  // Axial Resolution / 00520008 / FD
  "AxialResolution" |
  // Ranging Depth / 00520009 / FD
  "RangingDepth" |
  // A-line Rate / 00520011 / FD
  "ALineRate" |
  // A-lines Per Frame / 00520012 / US
  "ALinesPerFrame" |
  // Catheter Rotational Rate / 00520013 / FD
  "CatheterRotationalRate" |
  // A-line Pixel Spacing / 00520014 / FD
  "ALinePixelSpacing" |
  // Mode of Percutaneous Access Sequence / 00520016 / SQ
  "ModeOfPercutaneousAccessSequence" |
  // Intravascular OCT Frame Type Sequence / 00520025 / SQ
  "IntravascularOCTFrameTypeSequence" |
  // OCT Z Offset Applied / 00520026 / CS
  "OCTZOffsetApplied" |
  // Intravascular Frame Content Sequence / 00520027 / SQ
  "IntravascularFrameContentSequence" |
  // Intravascular Longitudinal Distance / 00520028 / FD
  "IntravascularLongitudinalDistance" |
  // Intravascular OCT Frame Content Sequence / 00520029 / SQ
  "IntravascularOCTFrameContentSequence" |
  // OCT Z Offset Correction / 00520030 / SS
  "OCTZOffsetCorrection" |
  // Catheter Direction of Rotation / 00520031 / CS
  "CatheterDirectionOfRotation" |
  // Seam Line Location / 00520033 / FD
  "SeamLineLocation" |
  // First A-line Location / 00520034 / FD
  "FirstALineLocation" |
  // Seam Line Index / 00520036 / US
  "SeamLineIndex" |
  // Number of Padded A-lines / 00520038 / US
  "NumberOfPaddedALines" |
  // Interpolation Type / 00520039 / CS
  "InterpolationType" |
  // Refractive Index Applied / 0052003A / CS
  "RefractiveIndexApplied" |
  // Energy Window Vector / 00540010 / US
  "EnergyWindowVector" |
  // Number of Energy Windows / 00540011 / US
  "NumberOfEnergyWindows" |
  // Energy Window Information Sequence / 00540012 / SQ
  "EnergyWindowInformationSequence" |
  // Energy Window Range Sequence / 00540013 / SQ
  "EnergyWindowRangeSequence" |
  // Energy Window Lower Limit / 00540014 / DS
  "EnergyWindowLowerLimit" |
  // Energy Window Upper Limit / 00540015 / DS
  "EnergyWindowUpperLimit" |
  // Radiopharmaceutical Information Sequence / 00540016 / SQ
  "RadiopharmaceuticalInformationSequence" |
  // Residual Syringe Counts / 00540017 / IS
  "ResidualSyringeCounts" |
  // Energy Window Name / 00540018 / SH
  "EnergyWindowName" |
  // Detector Vector / 00540020 / US
  "DetectorVector" |
  // Number of Detectors / 00540021 / US
  "NumberOfDetectors" |
  // Detector Information Sequence / 00540022 / SQ
  "DetectorInformationSequence" |
  // Phase Vector / 00540030 / US
  "PhaseVector" |
  // Number of Phases / 00540031 / US
  "NumberOfPhases" |
  // Phase Information Sequence / 00540032 / SQ
  "PhaseInformationSequence" |
  // Number of Frames in Phase / 00540033 / US
  "NumberOfFramesInPhase" |
  // Phase Delay / 00540036 / IS
  "PhaseDelay" |
  // Pause Between Frames / 00540038 / IS
  "PauseBetweenFrames" |
  // Phase Description / 00540039 / CS
  "PhaseDescription" |
  // Rotation Vector / 00540050 / US
  "RotationVector" |
  // Number of Rotations / 00540051 / US
  "NumberOfRotations" |
  // Rotation Information Sequence / 00540052 / SQ
  "RotationInformationSequence" |
  // Number of Frames in Rotation / 00540053 / US
  "NumberOfFramesInRotation" |
  // R-R Interval Vector / 00540060 / US
  "RRIntervalVector" |
  // Number of R-R Intervals / 00540061 / US
  "NumberOfRRIntervals" |
  // Gated Information Sequence / 00540062 / SQ
  "GatedInformationSequence" |
  // Data Information Sequence / 00540063 / SQ
  "DataInformationSequence" |
  // Time Slot Vector / 00540070 / US
  "TimeSlotVector" |
  // Number of Time Slots / 00540071 / US
  "NumberOfTimeSlots" |
  // Time Slot Information Sequence / 00540072 / SQ
  "TimeSlotInformationSequence" |
  // Time Slot Time / 00540073 / DS
  "TimeSlotTime" |
  // Slice Vector / 00540080 / US
  "SliceVector" |
  // Number of Slices / 00540081 / US
  "NumberOfSlices" |
  // Angular View Vector / 00540090 / US
  "AngularViewVector" |
  // Time Slice Vector / 00540100 / US
  "TimeSliceVector" |
  // Number of Time Slices / 00540101 / US
  "NumberOfTimeSlices" |
  // Start Angle / 00540200 / DS
  "StartAngle" |
  // Type of Detector Motion / 00540202 / CS
  "TypeOfDetectorMotion" |
  // Trigger Vector / 00540210 / IS
  "TriggerVector" |
  // Number of Triggers in Phase / 00540211 / US
  "NumberOfTriggersInPhase" |
  // View Code Sequence / 00540220 / SQ
  "ViewCodeSequence" |
  // View Modifier Code Sequence / 00540222 / SQ
  "ViewModifierCodeSequence" |
  // Radionuclide Code Sequence / 00540300 / SQ
  "RadionuclideCodeSequence" |
  // Administration Route Code Sequence / 00540302 / SQ
  "AdministrationRouteCodeSequence" |
  // Radiopharmaceutical Code Sequence / 00540304 / SQ
  "RadiopharmaceuticalCodeSequence" |
  // Calibration Data Sequence / 00540306 / SQ
  "CalibrationDataSequence" |
  // Energy Window Number / 00540308 / US
  "EnergyWindowNumber" |
  // Image ID / 00540400 / SH
  "ImageID" |
  // Patient Orientation Code Sequence / 00540410 / SQ
  "PatientOrientationCodeSequence" |
  // Patient Orientation Modifier Code Sequence / 00540412 / SQ
  "PatientOrientationModifierCodeSequence" |
  // Patient Gantry Relationship Code Sequence / 00540414 / SQ
  "PatientGantryRelationshipCodeSequence" |
  // Slice Progression Direction / 00540500 / CS
  "SliceProgressionDirection" |
  // Scan Progression Direction / 00540501 / CS
  "ScanProgressionDirection" |
  // Series Type / 00541000 / CS
  "SeriesType" |
  // Units / 00541001 / CS
  "Units" |
  // Counts Source / 00541002 / CS
  "CountsSource" |
  // Reprojection Method / 00541004 / CS
  "ReprojectionMethod" |
  // SUV Type / 00541006 / CS
  "SUVType" |
  // Randoms Correction Method / 00541100 / CS
  "RandomsCorrectionMethod" |
  // Attenuation Correction Method / 00541101 / LO
  "AttenuationCorrectionMethod" |
  // Decay Correction / 00541102 / CS
  "DecayCorrection" |
  // Reconstruction Method / 00541103 / LO
  "ReconstructionMethod" |
  // Detector Lines of Response Used / 00541104 / LO
  "DetectorLinesOfResponseUsed" |
  // Scatter Correction Method / 00541105 / LO
  "ScatterCorrectionMethod" |
  // Axial Acceptance / 00541200 / DS
  "AxialAcceptance" |
  // Axial Mash / 00541201 / IS
  "AxialMash" |
  // Transverse Mash / 00541202 / IS
  "TransverseMash" |
  // Detector Element Size / 00541203 / DS
  "DetectorElementSize" |
  // Coincidence Window Width / 00541210 / DS
  "CoincidenceWindowWidth" |
  // Secondary Counts Type / 00541220 / CS
  "SecondaryCountsType" |
  // Frame Reference Time / 00541300 / DS
  "FrameReferenceTime" |
  // Primary (Prompts) Counts Accumulated / 00541310 / IS
  "PrimaryPromptsCountsAccumulated" |
  // Secondary Counts Accumulated / 00541311 / IS
  "SecondaryCountsAccumulated" |
  // Slice Sensitivity Factor / 00541320 / DS
  "SliceSensitivityFactor" |
  // Decay Factor / 00541321 / DS
  "DecayFactor" |
  // Dose Calibration Factor / 00541322 / DS
  "DoseCalibrationFactor" |
  // Scatter Fraction Factor / 00541323 / DS
  "ScatterFractionFactor" |
  // Dead Time Factor / 00541324 / DS
  "DeadTimeFactor" |
  // Image Index / 00541330 / US
  "ImageIndex" |
  // Counts Included / 00541400 / CS
  "CountsIncluded" |
  // Dead Time Correction Flag / 00541401 / CS
  "DeadTimeCorrectionFlag" |
  // Histogram Sequence / 00603000 / SQ
  "HistogramSequence" |
  // Histogram Number of Bins / 00603002 / US
  "HistogramNumberOfBins" |
  // Histogram First Bin Value / 00603004 / US/SS
  "HistogramFirstBinValue" |
  // Histogram Last Bin Value / 00603006 / US/SS
  "HistogramLastBinValue" |
  // Histogram Bin Width / 00603008 / US
  "HistogramBinWidth" |
  // Histogram Explanation / 00603010 / LO
  "HistogramExplanation" |
  // Histogram Data / 00603020 / UL
  "HistogramData" |
  // Segmentation Type / 00620001 / CS
  "SegmentationType" |
  // Segment Sequence / 00620002 / SQ
  "SegmentSequence" |
  // Segmented Property Category Code Sequence / 00620003 / SQ
  "SegmentedPropertyCategoryCodeSequence" |
  // Segment Number / 00620004 / US
  "SegmentNumber" |
  // Segment Label / 00620005 / LO
  "SegmentLabel" |
  // Segment Description / 00620006 / ST
  "SegmentDescription" |
  // Segmentation Algorithm Identification Sequence / 00620007 / SQ
  "SegmentationAlgorithmIdentificationSequence" |
  // Segment Algorithm Type / 00620008 / CS
  "SegmentAlgorithmType" |
  // Segment Algorithm Name / 00620009 / LO
  "SegmentAlgorithmName" |
  // Segment Identification Sequence / 0062000A / SQ
  "SegmentIdentificationSequence" |
  // Referenced Segment Number / 0062000B / US
  "ReferencedSegmentNumber" |
  // Recommended Display Grayscale Value / 0062000C / US
  "RecommendedDisplayGrayscaleValue" |
  // Recommended Display CIELab Value / 0062000D / US
  "RecommendedDisplayCIELabValue" |
  // Maximum Fractional Value / 0062000E / US
  "MaximumFractionalValue" |
  // Segmented Property Type Code Sequence / 0062000F / SQ
  "SegmentedPropertyTypeCodeSequence" |
  // Segmentation Fractional Type / 00620010 / CS
  "SegmentationFractionalType" |
  // Segmented Property Type Modifier Code Sequence / 00620011 / SQ
  "SegmentedPropertyTypeModifierCodeSequence" |
  // Used Segments Sequence / 00620012 / SQ
  "UsedSegmentsSequence" |
  // Segments Overlap / 00620013 / CS
  "SegmentsOverlap" |
  // Tracking ID / 00620020 / UT
  "TrackingID" |
  // Tracking UID / 00620021 / UI
  "TrackingUID" |
  // Deformable Registration Sequence / 00640002 / SQ
  "DeformableRegistrationSequence" |
  // Source Frame of Reference UID / 00640003 / UI
  "SourceFrameOfReferenceUID" |
  // Deformable Registration Grid Sequence / 00640005 / SQ
  "DeformableRegistrationGridSequence" |
  // Grid Dimensions / 00640007 / UL
  "GridDimensions" |
  // Grid Resolution / 00640008 / FD
  "GridResolution" |
  // Vector Grid Data / 00640009 / OF
  "VectorGridData" |
  // Pre Deformation Matrix Registration Sequence / 0064000F / SQ
  "PreDeformationMatrixRegistrationSequence" |
  // Post Deformation Matrix Registration Sequence / 00640010 / SQ
  "PostDeformationMatrixRegistrationSequence" |
  // Number of Surfaces / 00660001 / UL
  "NumberOfSurfaces" |
  // Surface Sequence / 00660002 / SQ
  "SurfaceSequence" |
  // Surface Number / 00660003 / UL
  "SurfaceNumber" |
  // Surface Comments / 00660004 / LT
  "SurfaceComments" |
  // Surface Processing / 00660009 / CS
  "SurfaceProcessing" |
  // Surface Processing Ratio / 0066000A / FL
  "SurfaceProcessingRatio" |
  // Surface Processing Description / 0066000B / LO
  "SurfaceProcessingDescription" |
  // Recommended Presentation Opacity / 0066000C / FL
  "RecommendedPresentationOpacity" |
  // Recommended Presentation Type / 0066000D / CS
  "RecommendedPresentationType" |
  // Finite Volume / 0066000E / CS
  "FiniteVolume" |
  // Manifold / 00660010 / CS
  "Manifold" |
  // Surface Points Sequence / 00660011 / SQ
  "SurfacePointsSequence" |
  // Surface Points Normals Sequence / 00660012 / SQ
  "SurfacePointsNormalsSequence" |
  // Surface Mesh Primitives Sequence / 00660013 / SQ
  "SurfaceMeshPrimitivesSequence" |
  // Number of Surface Points / 00660015 / UL
  "NumberOfSurfacePoints" |
  // Point Coordinates Data / 00660016 / OF
  "PointCoordinatesData" |
  // Point Position Accuracy / 00660017 / FL
  "PointPositionAccuracy" |
  // Mean Point Distance / 00660018 / FL
  "MeanPointDistance" |
  // Maximum Point Distance / 00660019 / FL
  "MaximumPointDistance" |
  // Points Bounding Box Coordinates / 0066001A / FL
  "PointsBoundingBoxCoordinates" |
  // Axis of Rotation / 0066001B / FL
  "AxisOfRotation" |
  // Center of Rotation / 0066001C / FL
  "CenterOfRotation" |
  // Number of Vectors / 0066001E / UL
  "NumberOfVectors" |
  // Vector Dimensionality / 0066001F / US
  "VectorDimensionality" |
  // Vector Accuracy / 00660020 / FL
  "VectorAccuracy" |
  // Vector Coordinate Data / 00660021 / OF
  "VectorCoordinateData" |
  // Double Point Coordinates Data / 00660022 / OD
  "DoublePointCoordinatesData" |
  // Triangle Point Index List / 00660023 / OW
  "TrianglePointIndexList" |
  // Edge Point Index List / 00660024 / OW
  "EdgePointIndexList" |
  // Vertex Point Index List / 00660025 / OW
  "VertexPointIndexList" |
  // Triangle Strip Sequence / 00660026 / SQ
  "TriangleStripSequence" |
  // Triangle Fan Sequence / 00660027 / SQ
  "TriangleFanSequence" |
  // Line Sequence / 00660028 / SQ
  "LineSequence" |
  // Primitive Point Index List / 00660029 / OW
  "PrimitivePointIndexList" |
  // Surface Count / 0066002A / UL
  "SurfaceCount" |
  // Referenced Surface Sequence / 0066002B / SQ
  "ReferencedSurfaceSequence" |
  // Referenced Surface Number / 0066002C / UL
  "ReferencedSurfaceNumber" |
  // Segment Surface Generation Algorithm Identification Sequence / 0066002D / SQ
  "SegmentSurfaceGenerationAlgorithmIdentificationSequence" |
  // Segment Surface Source Instance Sequence / 0066002E / SQ
  "SegmentSurfaceSourceInstanceSequence" |
  // Algorithm Family Code Sequence / 0066002F / SQ
  "AlgorithmFamilyCodeSequence" |
  // Algorithm Name Code Sequence / 00660030 / SQ
  "AlgorithmNameCodeSequence" |
  // Algorithm Version / 00660031 / LO
  "AlgorithmVersion" |
  // Algorithm Parameters / 00660032 / LT
  "AlgorithmParameters" |
  // Facet Sequence / 00660034 / SQ
  "FacetSequence" |
  // Surface Processing Algorithm Identification Sequence / 00660035 / SQ
  "SurfaceProcessingAlgorithmIdentificationSequence" |
  // Algorithm Name / 00660036 / LO
  "AlgorithmName" |
  // Recommended Point Radius / 00660037 / FL
  "RecommendedPointRadius" |
  // Recommended Line Thickness / 00660038 / FL
  "RecommendedLineThickness" |
  // Long Primitive Point Index List / 00660040 / OL
  "LongPrimitivePointIndexList" |
  // Long Triangle Point Index List / 00660041 / OL
  "LongTrianglePointIndexList" |
  // Long Edge Point Index List / 00660042 / OL
  "LongEdgePointIndexList" |
  // Long Vertex Point Index List / 00660043 / OL
  "LongVertexPointIndexList" |
  // Track Set Sequence / 00660101 / SQ
  "TrackSetSequence" |
  // Track Sequence / 00660102 / SQ
  "TrackSequence" |
  // Recommended Display CIELab Value List / 00660103 / OW
  "RecommendedDisplayCIELabValueList" |
  // Tracking Algorithm Identification Sequence / 00660104 / SQ
  "TrackingAlgorithmIdentificationSequence" |
  // Track Set Number / 00660105 / UL
  "TrackSetNumber" |
  // Track Set Label / 00660106 / LO
  "TrackSetLabel" |
  // Track Set Description / 00660107 / UT
  "TrackSetDescription" |
  // Track Set Anatomical Type Code Sequence / 00660108 / SQ
  "TrackSetAnatomicalTypeCodeSequence" |
  // Measurements Sequence / 00660121 / SQ
  "MeasurementsSequence" |
  // Track Set Statistics Sequence / 00660124 / SQ
  "TrackSetStatisticsSequence" |
  // Floating Point Values / 00660125 / OF
  "FloatingPointValues" |
  // Track Point Index List / 00660129 / OL
  "TrackPointIndexList" |
  // Track Statistics Sequence / 00660130 / SQ
  "TrackStatisticsSequence" |
  // Measurement Values Sequence / 00660132 / SQ
  "MeasurementValuesSequence" |
  // Diffusion Acquisition Code Sequence / 00660133 / SQ
  "DiffusionAcquisitionCodeSequence" |
  // Diffusion Model Code Sequence / 00660134 / SQ
  "DiffusionModelCodeSequence" |
  // Implant Size / 00686210 / LO
  "ImplantSize" |
  // Implant Template Version / 00686221 / LO
  "ImplantTemplateVersion" |
  // Replaced Implant Template Sequence / 00686222 / SQ
  "ReplacedImplantTemplateSequence" |
  // Implant Type / 00686223 / CS
  "ImplantType" |
  // Derivation Implant Template Sequence / 00686224 / SQ
  "DerivationImplantTemplateSequence" |
  // Original Implant Template Sequence / 00686225 / SQ
  "OriginalImplantTemplateSequence" |
  // Effective DateTime / 00686226 / DT
  "EffectiveDateTime" |
  // Implant Target Anatomy Sequence / 00686230 / SQ
  "ImplantTargetAnatomySequence" |
  // Information From Manufacturer Sequence / 00686260 / SQ
  "InformationFromManufacturerSequence" |
  // Notification From Manufacturer Sequence / 00686265 / SQ
  "NotificationFromManufacturerSequence" |
  // Information Issue DateTime / 00686270 / DT
  "InformationIssueDateTime" |
  // Information Summary / 00686280 / ST
  "InformationSummary" |
  // Implant Regulatory Disapproval Code Sequence / 006862A0 / SQ
  "ImplantRegulatoryDisapprovalCodeSequence" |
  // Overall Template Spatial Tolerance / 006862A5 / FD
  "OverallTemplateSpatialTolerance" |
  // HPGL Document Sequence / 006862C0 / SQ
  "HPGLDocumentSequence" |
  // HPGL Document ID / 006862D0 / US
  "HPGLDocumentID" |
  // HPGL Document Label / 006862D5 / LO
  "HPGLDocumentLabel" |
  // View Orientation Code Sequence / 006862E0 / SQ
  "ViewOrientationCodeSequence" |
  // View Orientation Modifier Code Sequence / 006862F0 / SQ
  "ViewOrientationModifierCodeSequence" |
  // HPGL Document Scaling / 006862F2 / FD
  "HPGLDocumentScaling" |
  // HPGL Document / 00686300 / OB
  "HPGLDocument" |
  // HPGL Contour Pen Number / 00686310 / US
  "HPGLContourPenNumber" |
  // HPGL Pen Sequence / 00686320 / SQ
  "HPGLPenSequence" |
  // HPGL Pen Number / 00686330 / US
  "HPGLPenNumber" |
  // HPGL Pen Label / 00686340 / LO
  "HPGLPenLabel" |
  // HPGL Pen Description / 00686345 / ST
  "HPGLPenDescription" |
  // Recommended Rotation Point / 00686346 / FD
  "RecommendedRotationPoint" |
  // Bounding Rectangle / 00686347 / FD
  "BoundingRectangle" |
  // Implant Template 3D Model Surface Number / 00686350 / US
  "ImplantTemplate3DModelSurfaceNumber" |
  // Surface Model Description Sequence / 00686360 / SQ
  "SurfaceModelDescriptionSequence" |
  // Surface Model Label / 00686380 / LO
  "SurfaceModelLabel" |
  // Surface Model Scaling Factor / 00686390 / FD
  "SurfaceModelScalingFactor" |
  // Materials Code Sequence / 006863A0 / SQ
  "MaterialsCodeSequence" |
  // Coating Materials Code Sequence / 006863A4 / SQ
  "CoatingMaterialsCodeSequence" |
  // Implant Type Code Sequence / 006863A8 / SQ
  "ImplantTypeCodeSequence" |
  // Fixation Method Code Sequence / 006863AC / SQ
  "FixationMethodCodeSequence" |
  // Mating Feature Sets Sequence / 006863B0 / SQ
  "MatingFeatureSetsSequence" |
  // Mating Feature Set ID / 006863C0 / US
  "MatingFeatureSetID" |
  // Mating Feature Set Label / 006863D0 / LO
  "MatingFeatureSetLabel" |
  // Mating Feature Sequence / 006863E0 / SQ
  "MatingFeatureSequence" |
  // Mating Feature ID / 006863F0 / US
  "MatingFeatureID" |
  // Mating Feature Degree of Freedom Sequence / 00686400 / SQ
  "MatingFeatureDegreeOfFreedomSequence" |
  // Degree of Freedom ID / 00686410 / US
  "DegreeOfFreedomID" |
  // Degree of Freedom Type / 00686420 / CS
  "DegreeOfFreedomType" |
  // 2D Mating Feature Coordinates Sequence / 00686430 / SQ
  "TwoDMatingFeatureCoordinatesSequence" |
  // Referenced HPGL Document ID / 00686440 / US
  "ReferencedHPGLDocumentID" |
  // 2D Mating Point / 00686450 / FD
  "TwoDMatingPoint" |
  // 2D Mating Axes / 00686460 / FD
  "TwoDMatingAxes" |
  // 2D Degree of Freedom Sequence / 00686470 / SQ
  "TwoDDegreeOfFreedomSequence" |
  // 3D Degree of Freedom Axis / 00686490 / FD
  "ThreeDDegreeOfFreedomAxis" |
  // Range of Freedom / 006864A0 / FD
  "RangeOfFreedom" |
  // 3D Mating Point / 006864C0 / FD
  "ThreeDMatingPoint" |
  // 3D Mating Axes / 006864D0 / FD
  "ThreeDMatingAxes" |
  // 2D Degree of Freedom Axis / 006864F0 / FD
  "TwoDDegreeOfFreedomAxis" |
  // Planning Landmark Point Sequence / 00686500 / SQ
  "PlanningLandmarkPointSequence" |
  // Planning Landmark Line Sequence / 00686510 / SQ
  "PlanningLandmarkLineSequence" |
  // Planning Landmark Plane Sequence / 00686520 / SQ
  "PlanningLandmarkPlaneSequence" |
  // Planning Landmark ID / 00686530 / US
  "PlanningLandmarkID" |
  // Planning Landmark Description / 00686540 / LO
  "PlanningLandmarkDescription" |
  // Planning Landmark Identification Code Sequence / 00686545 / SQ
  "PlanningLandmarkIdentificationCodeSequence" |
  // 2D Point Coordinates Sequence / 00686550 / SQ
  "TwoDPointCoordinatesSequence" |
  // 2D Point Coordinates / 00686560 / FD
  "TwoDPointCoordinates" |
  // 3D Point Coordinates / 00686590 / FD
  "ThreeDPointCoordinates" |
  // 2D Line Coordinates Sequence / 006865A0 / SQ
  "TwoDLineCoordinatesSequence" |
  // 2D Line Coordinates / 006865B0 / FD
  "TwoDLineCoordinates" |
  // 3D Line Coordinates / 006865D0 / FD
  "ThreeDLineCoordinates" |
  // 2D Plane Coordinates Sequence / 006865E0 / SQ
  "TwoDPlaneCoordinatesSequence" |
  // 2D Plane Intersection / 006865F0 / FD
  "TwoDPlaneIntersection" |
  // 3D Plane Origin / 00686610 / FD
  "ThreeDPlaneOrigin" |
  // 3D Plane Normal / 00686620 / FD
  "ThreeDPlaneNormal" |
  // Model Modification / 00687001 / CS
  "ModelModification" |
  // Model Mirroring / 00687002 / CS
  "ModelMirroring" |
  // Model Usage Code Sequence / 00687003 / SQ
  "ModelUsageCodeSequence" |
  // Model Group UID / 00687004 / UI
  "ModelGroupUID" |
  // Relative URI Reference Within Encapsulated Document / 00687005 / UR
  "RelativeURIReferenceWithinEncapsulatedDocument" |
  // Annotation Coordinate Type / 006A0001 / CS
  "AnnotationCoordinateType" |
  // Annotation Group Sequence / 006A0002 / SQ
  "AnnotationGroupSequence" |
  // Annotation Group UID / 006A0003 / UI
  "AnnotationGroupUID" |
  // Annotation Group Label / 006A0005 / LO
  "AnnotationGroupLabel" |
  // Annotation Group Description / 006A0006 / UT
  "AnnotationGroupDescription" |
  // Annotation Group Generation Type / 006A0007 / CS
  "AnnotationGroupGenerationType" |
  // Annotation Group Algorithm Identification Sequence / 006A0008 / SQ
  "AnnotationGroupAlgorithmIdentificationSequence" |
  // Annotation Property Category Code Sequence / 006A0009 / SQ
  "AnnotationPropertyCategoryCodeSequence" |
  // Annotation Property Type Code Sequence / 006A000A / SQ
  "AnnotationPropertyTypeCodeSequence" |
  // Annotation Property Type Modifier Code Sequence / 006A000B / SQ
  "AnnotationPropertyTypeModifierCodeSequence" |
  // Number of Annotations / 006A000C / UL
  "NumberOfAnnotations" |
  // Annotation Applies to All Optical Paths / 006A000D / CS
  "AnnotationAppliesToAllOpticalPaths" |
  // Referenced Optical Path Identifier / 006A000E / SH
  "ReferencedOpticalPathIdentifier" |
  // Annotation Applies to All Z Planes / 006A000F / CS
  "AnnotationAppliesToAllZPlanes" |
  // Common Z Coordinate Value / 006A0010 / FD
  "CommonZCoordinateValue" |
  // Annotation Index List / 006A0011 / OL
  "AnnotationIndexList" |
  // Graphic Annotation Sequence / 00700001 / SQ
  "GraphicAnnotationSequence" |
  // Graphic Layer / 00700002 / CS
  "GraphicLayer" |
  // Bounding Box Annotation Units / 00700003 / CS
  "BoundingBoxAnnotationUnits" |
  // Anchor Point Annotation Units / 00700004 / CS
  "AnchorPointAnnotationUnits" |
  // Graphic Annotation Units / 00700005 / CS
  "GraphicAnnotationUnits" |
  // Unformatted Text Value / 00700006 / ST
  "UnformattedTextValue" |
  // Text Object Sequence / 00700008 / SQ
  "TextObjectSequence" |
  // Graphic Object Sequence / 00700009 / SQ
  "GraphicObjectSequence" |
  // Bounding Box Top Left Hand Corner / 00700010 / FL
  "BoundingBoxTopLeftHandCorner" |
  // Bounding Box Bottom Right Hand Corner / 00700011 / FL
  "BoundingBoxBottomRightHandCorner" |
  // Bounding Box Text Horizontal Justification / 00700012 / CS
  "BoundingBoxTextHorizontalJustification" |
  // Anchor Point / 00700014 / FL
  "AnchorPoint" |
  // Anchor Point Visibility / 00700015 / CS
  "AnchorPointVisibility" |
  // Graphic Dimensions / 00700020 / US
  "GraphicDimensions" |
  // Number of Graphic Points / 00700021 / US
  "NumberOfGraphicPoints" |
  // Graphic Data / 00700022 / FL
  "GraphicData" |
  // Graphic Type / 00700023 / CS
  "GraphicType" |
  // Graphic Filled / 00700024 / CS
  "GraphicFilled" |
  // Image Rotation (Retired) / 00700040 / IS
  "ImageRotationRetired" |
  // Image Horizontal Flip / 00700041 / CS
  "ImageHorizontalFlip" |
  // Image Rotation / 00700042 / US
  "ImageRotation" |
  // Displayed Area Top Left Hand Corner (Trial) / 00700050 / US
  "DisplayedAreaTopLeftHandCornerTrial" |
  // Displayed Area Bottom Right Hand Corner (Trial) / 00700051 / US
  "DisplayedAreaBottomRightHandCornerTrial" |
  // Displayed Area Top Left Hand Corner / 00700052 / SL
  "DisplayedAreaTopLeftHandCorner" |
  // Displayed Area Bottom Right Hand Corner / 00700053 / SL
  "DisplayedAreaBottomRightHandCorner" |
  // Displayed Area Selection Sequence / 0070005A / SQ
  "DisplayedAreaSelectionSequence" |
  // Graphic Layer Sequence / 00700060 / SQ
  "GraphicLayerSequence" |
  // Graphic Layer Order / 00700062 / IS
  "GraphicLayerOrder" |
  // Graphic Layer Recommended Display Grayscale Value / 00700066 / US
  "GraphicLayerRecommendedDisplayGrayscaleValue" |
  // Graphic Layer Recommended Display RGB Value / 00700067 / US
  "GraphicLayerRecommendedDisplayRGBValue" |
  // Graphic Layer Description / 00700068 / LO
  "GraphicLayerDescription" |
  // Content Label / 00700080 / CS
  "ContentLabel" |
  // Content Description / 00700081 / LO
  "ContentDescription" |
  // Presentation Creation Date / 00700082 / DA
  "PresentationCreationDate" |
  // Presentation Creation Time / 00700083 / TM
  "PresentationCreationTime" |
  // Content Creator's Name / 00700084 / PN
  "ContentCreatorName" |
  // Content Creator's Identification Code Sequence / 00700086 / SQ
  "ContentCreatorIdentificationCodeSequence" |
  // Alternate Content Description Sequence / 00700087 / SQ
  "AlternateContentDescriptionSequence" |
  // Presentation Size Mode / 00700100 / CS
  "PresentationSizeMode" |
  // Presentation Pixel Spacing / 00700101 / DS
  "PresentationPixelSpacing" |
  // Presentation Pixel Aspect Ratio / 00700102 / IS
  "PresentationPixelAspectRatio" |
  // Presentation Pixel Magnification Ratio / 00700103 / FL
  "PresentationPixelMagnificationRatio" |
  // Graphic Group Label / 00700207 / LO
  "GraphicGroupLabel" |
  // Graphic Group Description / 00700208 / ST
  "GraphicGroupDescription" |
  // Compound Graphic Sequence / 00700209 / SQ
  "CompoundGraphicSequence" |
  // Compound Graphic Instance ID / 00700226 / UL
  "CompoundGraphicInstanceID" |
  // Font Name / 00700227 / LO
  "FontName" |
  // Font Name Type / 00700228 / CS
  "FontNameType" |
  // CSS Font Name / 00700229 / LO
  "CSSFontName" |
  // Rotation Angle / 00700230 / FD
  "RotationAngle" |
  // Text Style Sequence / 00700231 / SQ
  "TextStyleSequence" |
  // Line Style Sequence / 00700232 / SQ
  "LineStyleSequence" |
  // Fill Style Sequence / 00700233 / SQ
  "FillStyleSequence" |
  // Graphic Group Sequence / 00700234 / SQ
  "GraphicGroupSequence" |
  // Text Color CIELab Value / 00700241 / US
  "TextColorCIELabValue" |
  // Horizontal Alignment / 00700242 / CS
  "HorizontalAlignment" |
  // Vertical Alignment / 00700243 / CS
  "VerticalAlignment" |
  // Shadow Style / 00700244 / CS
  "ShadowStyle" |
  // Shadow Offset X / 00700245 / FL
  "ShadowOffsetX" |
  // Shadow Offset Y / 00700246 / FL
  "ShadowOffsetY" |
  // Shadow Color CIELab Value / 00700247 / US
  "ShadowColorCIELabValue" |
  // Underlined / 00700248 / CS
  "Underlined" |
  // Bold / 00700249 / CS
  "Bold" |
  // Italic / 00700250 / CS
  "Italic" |
  // Pattern On Color CIELab Value / 00700251 / US
  "PatternOnColorCIELabValue" |
  // Pattern Off Color CIELab Value / 00700252 / US
  "PatternOffColorCIELabValue" |
  // Line Thickness / 00700253 / FL
  "LineThickness" |
  // Line Dashing Style / 00700254 / CS
  "LineDashingStyle" |
  // Line Pattern / 00700255 / UL
  "LinePattern" |
  // Fill Pattern / 00700256 / OB
  "FillPattern" |
  // Fill Mode / 00700257 / CS
  "FillMode" |
  // Shadow Opacity / 00700258 / FL
  "ShadowOpacity" |
  // Gap Length / 00700261 / FL
  "GapLength" |
  // Diameter of Visibility / 00700262 / FL
  "DiameterOfVisibility" |
  // Rotation Point / 00700273 / FL
  "RotationPoint" |
  // Tick Alignment / 00700274 / CS
  "TickAlignment" |
  // Show Tick Label / 00700278 / CS
  "ShowTickLabel" |
  // Tick Label Alignment / 00700279 / CS
  "TickLabelAlignment" |
  // Compound Graphic Units / 00700282 / CS
  "CompoundGraphicUnits" |
  // Pattern On Opacity / 00700284 / FL
  "PatternOnOpacity" |
  // Pattern Off Opacity / 00700285 / FL
  "PatternOffOpacity" |
  // Major Ticks Sequence / 00700287 / SQ
  "MajorTicksSequence" |
  // Tick Position / 00700288 / FL
  "TickPosition" |
  // Tick Label / 00700289 / SH
  "TickLabel" |
  // Compound Graphic Type / 00700294 / CS
  "CompoundGraphicType" |
  // Graphic Group ID / 00700295 / UL
  "GraphicGroupID" |
  // Shape Type / 00700306 / CS
  "ShapeType" |
  // Registration Sequence / 00700308 / SQ
  "RegistrationSequence" |
  // Matrix Registration Sequence / 00700309 / SQ
  "MatrixRegistrationSequence" |
  // Matrix Sequence / 0070030A / SQ
  "MatrixSequence" |
  // Frame of Reference to Displayed Coordinate System Transformation Matrix / 0070030B / FD
  "FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix" |
  // Frame of Reference Transformation Matrix Type / 0070030C / CS
  "FrameOfReferenceTransformationMatrixType" |
  // Registration Type Code Sequence / 0070030D / SQ
  "RegistrationTypeCodeSequence" |
  // Fiducial Description / 0070030F / ST
  "FiducialDescription" |
  // Fiducial Identifier / 00700310 / SH
  "FiducialIdentifier" |
  // Fiducial Identifier Code Sequence / 00700311 / SQ
  "FiducialIdentifierCodeSequence" |
  // Contour Uncertainty Radius / 00700312 / FD
  "ContourUncertaintyRadius" |
  // Used Fiducials Sequence / 00700314 / SQ
  "UsedFiducialsSequence" |
  // Used RT Structure Set ROI Sequence / 00700315 / SQ
  "UsedRTStructureSetROISequence" |
  // Graphic Coordinates Data Sequence / 00700318 / SQ
  "GraphicCoordinatesDataSequence" |
  // Fiducial UID / 0070031A / UI
  "FiducialUID" |
  // Referenced Fiducial UID / 0070031B / UI
  "ReferencedFiducialUID" |
  // Fiducial Set Sequence / 0070031C / SQ
  "FiducialSetSequence" |
  // Fiducial Sequence / 0070031E / SQ
  "FiducialSequence" |
  // Fiducials Property Category Code Sequence / 0070031F / SQ
  "FiducialsPropertyCategoryCodeSequence" |
  // Graphic Layer Recommended Display CIELab Value / 00700401 / US
  "GraphicLayerRecommendedDisplayCIELabValue" |
  // Blending Sequence / 00700402 / SQ
  "BlendingSequence" |
  // Relative Opacity / 00700403 / FL
  "RelativeOpacity" |
  // Referenced Spatial Registration Sequence / 00700404 / SQ
  "ReferencedSpatialRegistrationSequence" |
  // Blending Position / 00700405 / CS
  "BlendingPosition" |
  // Presentation Display Collection UID / 00701101 / UI
  "PresentationDisplayCollectionUID" |
  // Presentation Sequence Collection UID / 00701102 / UI
  "PresentationSequenceCollectionUID" |
  // Presentation Sequence Position Index / 00701103 / US
  "PresentationSequencePositionIndex" |
  // Rendered Image Reference Sequence / 00701104 / SQ
  "RenderedImageReferenceSequence" |
  // Volumetric Presentation State Input Sequence / 00701201 / SQ
  "VolumetricPresentationStateInputSequence" |
  // Presentation Input Type / 00701202 / CS
  "PresentationInputType" |
  // Input Sequence Position Index / 00701203 / US
  "InputSequencePositionIndex" |
  // Crop / 00701204 / CS
  "Crop" |
  // Cropping Specification Index / 00701205 / US
  "CroppingSpecificationIndex" |
  // Compositing Method / 00701206 / CS
  "CompositingMethod" |
  // Volumetric Presentation Input Number / 00701207 / US
  "VolumetricPresentationInputNumber" |
  // Image Volume Geometry / 00701208 / CS
  "ImageVolumeGeometry" |
  // Volumetric Presentation Input Set UID / 00701209 / UI
  "VolumetricPresentationInputSetUID" |
  // Volumetric Presentation Input Set Sequence / 0070120A / SQ
  "VolumetricPresentationInputSetSequence" |
  // Global Crop / 0070120B / CS
  "GlobalCrop" |
  // Global Cropping Specification Index / 0070120C / US
  "GlobalCroppingSpecificationIndex" |
  // Rendering Method / 0070120D / CS
  "RenderingMethod" |
  // Volume Cropping Sequence / 00701301 / SQ
  "VolumeCroppingSequence" |
  // Volume Cropping Method / 00701302 / CS
  "VolumeCroppingMethod" |
  // Bounding Box Crop / 00701303 / FD
  "BoundingBoxCrop" |
  // Oblique Cropping Plane Sequence / 00701304 / SQ
  "ObliqueCroppingPlaneSequence" |
  // Plane / 00701305 / FD
  "Plane" |
  // Plane Normal / 00701306 / FD
  "PlaneNormal" |
  // Cropping Specification Number / 00701309 / US
  "CroppingSpecificationNumber" |
  // Multi-Planar Reconstruction Style / 00701501 / CS
  "MultiPlanarReconstructionStyle" |
  // MPR Thickness Type / 00701502 / CS
  "MPRThicknessType" |
  // MPR Slab Thickness / 00701503 / FD
  "MPRSlabThickness" |
  // MPR Top Left Hand Corner / 00701505 / FD
  "MPRTopLeftHandCorner" |
  // MPR View Width Direction / 00701507 / FD
  "MPRViewWidthDirection" |
  // MPR View Width / 00701508 / FD
  "MPRViewWidth" |
  // Number of Volumetric Curve Points / 0070150C / UL
  "NumberOfVolumetricCurvePoints" |
  // Volumetric Curve Points / 0070150D / OD
  "VolumetricCurvePoints" |
  // MPR View Height Direction / 00701511 / FD
  "MPRViewHeightDirection" |
  // MPR View Height / 00701512 / FD
  "MPRViewHeight" |
  // Render Projection / 00701602 / CS
  "RenderProjection" |
  // Viewpoint Position / 00701603 / FD
  "ViewpointPosition" |
  // Viewpoint LookAt Point / 00701604 / FD
  "ViewpointLookAtPoint" |
  // Viewpoint Up Direction / 00701605 / FD
  "ViewpointUpDirection" |
  // Render Field of View / 00701606 / FD
  "RenderFieldOfView" |
  // Sampling Step Size / 00701607 / FD
  "SamplingStepSize" |
  // Shading Style / 00701701 / CS
  "ShadingStyle" |
  // Ambient Reflection Intensity / 00701702 / FD
  "AmbientReflectionIntensity" |
  // Light Direction / 00701703 / FD
  "LightDirection" |
  // Diffuse Reflection Intensity / 00701704 / FD
  "DiffuseReflectionIntensity" |
  // Specular Reflection Intensity / 00701705 / FD
  "SpecularReflectionIntensity" |
  // Shininess / 00701706 / FD
  "Shininess" |
  // Presentation State Classification Component Sequence / 00701801 / SQ
  "PresentationStateClassificationComponentSequence" |
  // Component Type / 00701802 / CS
  "ComponentType" |
  // Component Input Sequence / 00701803 / SQ
  "ComponentInputSequence" |
  // Volumetric Presentation Input Index / 00701804 / US
  "VolumetricPresentationInputIndex" |
  // Presentation State Compositor Component Sequence / 00701805 / SQ
  "PresentationStateCompositorComponentSequence" |
  // Weighting Transfer Function Sequence / 00701806 / SQ
  "WeightingTransferFunctionSequence" |
  // Weighting Lookup Table Descriptor / 00701807 / US
  "WeightingLookupTableDescriptor" |
  // Weighting Lookup Table Data / 00701808 / OB
  "WeightingLookupTableData" |
  // Volumetric Annotation Sequence / 00701901 / SQ
  "VolumetricAnnotationSequence" |
  // Referenced Structured Context Sequence / 00701903 / SQ
  "ReferencedStructuredContextSequence" |
  // Referenced Content Item / 00701904 / UI
  "ReferencedContentItem" |
  // Volumetric Presentation Input Annotation Sequence / 00701905 / SQ
  "VolumetricPresentationInputAnnotationSequence" |
  // Annotation Clipping / 00701907 / CS
  "AnnotationClipping" |
  // Presentation Animation Style / 00701A01 / CS
  "PresentationAnimationStyle" |
  // Recommended Animation Rate / 00701A03 / FD
  "RecommendedAnimationRate" |
  // Animation Curve Sequence / 00701A04 / SQ
  "AnimationCurveSequence" |
  // Animation Step Size / 00701A05 / FD
  "AnimationStepSize" |
  // Swivel Range / 00701A06 / FD
  "SwivelRange" |
  // Volumetric Curve Up Directions / 00701A07 / OD
  "VolumetricCurveUpDirections" |
  // Volume Stream Sequence / 00701A08 / SQ
  "VolumeStreamSequence" |
  // RGBA Transfer Function Description / 00701A09 / LO
  "RGBATransferFunctionDescription" |
  // Advanced Blending Sequence / 00701B01 / SQ
  "AdvancedBlendingSequence" |
  // Blending Input Number / 00701B02 / US
  "BlendingInputNumber" |
  // Blending Display Input Sequence / 00701B03 / SQ
  "BlendingDisplayInputSequence" |
  // Blending Display Sequence / 00701B04 / SQ
  "BlendingDisplaySequence" |
  // Blending Mode / 00701B06 / CS
  "BlendingMode" |
  // Time Series Blending / 00701B07 / CS
  "TimeSeriesBlending" |
  // Geometry for Display / 00701B08 / CS
  "GeometryForDisplay" |
  // Threshold Sequence / 00701B11 / SQ
  "ThresholdSequence" |
  // Threshold Value Sequence / 00701B12 / SQ
  "ThresholdValueSequence" |
  // Threshold Type / 00701B13 / CS
  "ThresholdType" |
  // Threshold Value / 00701B14 / FD
  "ThresholdValue" |
  // Hanging Protocol Name / 00720002 / SH
  "HangingProtocolName" |
  // Hanging Protocol Description / 00720004 / LO
  "HangingProtocolDescription" |
  // Hanging Protocol Level / 00720006 / CS
  "HangingProtocolLevel" |
  // Hanging Protocol Creator / 00720008 / LO
  "HangingProtocolCreator" |
  // Hanging Protocol Creation DateTime / 0072000A / DT
  "HangingProtocolCreationDateTime" |
  // Hanging Protocol Definition Sequence / 0072000C / SQ
  "HangingProtocolDefinitionSequence" |
  // Hanging Protocol User Identification Code Sequence / 0072000E / SQ
  "HangingProtocolUserIdentificationCodeSequence" |
  // Hanging Protocol User Group Name / 00720010 / LO
  "HangingProtocolUserGroupName" |
  // Source Hanging Protocol Sequence / 00720012 / SQ
  "SourceHangingProtocolSequence" |
  // Number of Priors Referenced / 00720014 / US
  "NumberOfPriorsReferenced" |
  // Image Sets Sequence / 00720020 / SQ
  "ImageSetsSequence" |
  // Image Set Selector Sequence / 00720022 / SQ
  "ImageSetSelectorSequence" |
  // Image Set Selector Usage Flag / 00720024 / CS
  "ImageSetSelectorUsageFlag" |
  // Selector Attribute / 00720026 / AT
  "SelectorAttribute" |
  // Selector Value Number / 00720028 / US
  "SelectorValueNumber" |
  // Time Based Image Sets Sequence / 00720030 / SQ
  "TimeBasedImageSetsSequence" |
  // Image Set Number / 00720032 / US
  "ImageSetNumber" |
  // Image Set Selector Category / 00720034 / CS
  "ImageSetSelectorCategory" |
  // Relative Time / 00720038 / US
  "RelativeTime" |
  // Relative Time Units / 0072003A / CS
  "RelativeTimeUnits" |
  // Abstract Prior Value / 0072003C / SS
  "AbstractPriorValue" |
  // Abstract Prior Code Sequence / 0072003E / SQ
  "AbstractPriorCodeSequence" |
  // Image Set Label / 00720040 / LO
  "ImageSetLabel" |
  // Selector Attribute VR / 00720050 / CS
  "SelectorAttributeVR" |
  // Selector Sequence Pointer / 00720052 / AT
  "SelectorSequencePointer" |
  // Selector Sequence Pointer Private Creator / 00720054 / LO
  "SelectorSequencePointerPrivateCreator" |
  // Selector Attribute Private Creator / 00720056 / LO
  "SelectorAttributePrivateCreator" |
  // Selector AE Value / 0072005E / AE
  "SelectorAEValue" |
  // Selector AS Value / 0072005F / AS
  "SelectorASValue" |
  // Selector AT Value / 00720060 / AT
  "SelectorATValue" |
  // Selector DA Value / 00720061 / DA
  "SelectorDAValue" |
  // Selector CS Value / 00720062 / CS
  "SelectorCSValue" |
  // Selector DT Value / 00720063 / DT
  "SelectorDTValue" |
  // Selector IS Value / 00720064 / IS
  "SelectorISValue" |
  // Selector OB Value / 00720065 / OB
  "SelectorOBValue" |
  // Selector LO Value / 00720066 / LO
  "SelectorLOValue" |
  // Selector OF Value / 00720067 / OF
  "SelectorOFValue" |
  // Selector LT Value / 00720068 / LT
  "SelectorLTValue" |
  // Selector OW Value / 00720069 / OW
  "SelectorOWValue" |
  // Selector PN Value / 0072006A / PN
  "SelectorPNValue" |
  // Selector TM Value / 0072006B / TM
  "SelectorTMValue" |
  // Selector SH Value / 0072006C / SH
  "SelectorSHValue" |
  // Selector UN Value / 0072006D / UN
  "SelectorUNValue" |
  // Selector ST Value / 0072006E / ST
  "SelectorSTValue" |
  // Selector UC Value / 0072006F / UC
  "SelectorUCValue" |
  // Selector UT Value / 00720070 / UT
  "SelectorUTValue" |
  // Selector UR Value / 00720071 / UR
  "SelectorURValue" |
  // Selector DS Value / 00720072 / DS
  "SelectorDSValue" |
  // Selector OD Value / 00720073 / OD
  "SelectorODValue" |
  // Selector FD Value / 00720074 / FD
  "SelectorFDValue" |
  // Selector OL Value / 00720075 / OL
  "SelectorOLValue" |
  // Selector FL Value / 00720076 / FL
  "SelectorFLValue" |
  // Selector UL Value / 00720078 / UL
  "SelectorULValue" |
  // Selector US Value / 0072007A / US
  "SelectorUSValue" |
  // Selector SL Value / 0072007C / SL
  "SelectorSLValue" |
  // Selector SS Value / 0072007E / SS
  "SelectorSSValue" |
  // Selector UI Value / 0072007F / UI
  "SelectorUIValue" |
  // Selector Code Sequence Value / 00720080 / SQ
  "SelectorCodeSequenceValue" |
  // Selector OV Value / 00720081 / OV
  "SelectorOVValue" |
  // Selector SV Value / 00720082 / SV
  "SelectorSVValue" |
  // Selector UV Value / 00720083 / UV
  "SelectorUVValue" |
  // Number of Screens / 00720100 / US
  "NumberOfScreens" |
  // Nominal Screen Definition Sequence / 00720102 / SQ
  "NominalScreenDefinitionSequence" |
  // Number of Vertical Pixels / 00720104 / US
  "NumberOfVerticalPixels" |
  // Number of Horizontal Pixels / 00720106 / US
  "NumberOfHorizontalPixels" |
  // Display Environment Spatial Position / 00720108 / FD
  "DisplayEnvironmentSpatialPosition" |
  // Screen Minimum Grayscale Bit Depth / 0072010A / US
  "ScreenMinimumGrayscaleBitDepth" |
  // Screen Minimum Color Bit Depth / 0072010C / US
  "ScreenMinimumColorBitDepth" |
  // Application Maximum Repaint Time / 0072010E / US
  "ApplicationMaximumRepaintTime" |
  // Display Sets Sequence / 00720200 / SQ
  "DisplaySetsSequence" |
  // Display Set Number / 00720202 / US
  "DisplaySetNumber" |
  // Display Set Label / 00720203 / LO
  "DisplaySetLabel" |
  // Display Set Presentation Group / 00720204 / US
  "DisplaySetPresentationGroup" |
  // Display Set Presentation Group Description / 00720206 / LO
  "DisplaySetPresentationGroupDescription" |
  // Partial Data Display Handling / 00720208 / CS
  "PartialDataDisplayHandling" |
  // Synchronized Scrolling Sequence / 00720210 / SQ
  "SynchronizedScrollingSequence" |
  // Display Set Scrolling Group / 00720212 / US
  "DisplaySetScrollingGroup" |
  // Navigation Indicator Sequence / 00720214 / SQ
  "NavigationIndicatorSequence" |
  // Navigation Display Set / 00720216 / US
  "NavigationDisplaySet" |
  // Reference Display Sets / 00720218 / US
  "ReferenceDisplaySets" |
  // Image Boxes Sequence / 00720300 / SQ
  "ImageBoxesSequence" |
  // Image Box Number / 00720302 / US
  "ImageBoxNumber" |
  // Image Box Layout Type / 00720304 / CS
  "ImageBoxLayoutType" |
  // Image Box Tile Horizontal Dimension / 00720306 / US
  "ImageBoxTileHorizontalDimension" |
  // Image Box Tile Vertical Dimension / 00720308 / US
  "ImageBoxTileVerticalDimension" |
  // Image Box Scroll Direction / 00720310 / CS
  "ImageBoxScrollDirection" |
  // Image Box Small Scroll Type / 00720312 / CS
  "ImageBoxSmallScrollType" |
  // Image Box Small Scroll Amount / 00720314 / US
  "ImageBoxSmallScrollAmount" |
  // Image Box Large Scroll Type / 00720316 / CS
  "ImageBoxLargeScrollType" |
  // Image Box Large Scroll Amount / 00720318 / US
  "ImageBoxLargeScrollAmount" |
  // Image Box Overlap Priority / 00720320 / US
  "ImageBoxOverlapPriority" |
  // Cine Relative to Real-Time / 00720330 / FD
  "CineRelativeToRealTime" |
  // Filter Operations Sequence / 00720400 / SQ
  "FilterOperationsSequence" |
  // Filter-by Category / 00720402 / CS
  "FilterByCategory" |
  // Filter-by Attribute Presence / 00720404 / CS
  "FilterByAttributePresence" |
  // Filter-by Operator / 00720406 / CS
  "FilterByOperator" |
  // Structured Display Background CIELab Value / 00720420 / US
  "StructuredDisplayBackgroundCIELabValue" |
  // Empty Image Box CIELab Value / 00720421 / US
  "EmptyImageBoxCIELabValue" |
  // Structured Display Image Box Sequence / 00720422 / SQ
  "StructuredDisplayImageBoxSequence" |
  // Structured Display Text Box Sequence / 00720424 / SQ
  "StructuredDisplayTextBoxSequence" |
  // Referenced First Frame Sequence / 00720427 / SQ
  "ReferencedFirstFrameSequence" |
  // Image Box Synchronization Sequence / 00720430 / SQ
  "ImageBoxSynchronizationSequence" |
  // Synchronized Image Box List / 00720432 / US
  "SynchronizedImageBoxList" |
  // Type of Synchronization / 00720434 / CS
  "TypeOfSynchronization" |
  // Blending Operation Type / 00720500 / CS
  "BlendingOperationType" |
  // Reformatting Operation Type / 00720510 / CS
  "ReformattingOperationType" |
  // Reformatting Thickness / 00720512 / FD
  "ReformattingThickness" |
  // Reformatting Interval / 00720514 / FD
  "ReformattingInterval" |
  // Reformatting Operation Initial View Direction / 00720516 / CS
  "ReformattingOperationInitialViewDirection" |
  // 3D Rendering Type / 00720520 / CS
  "ThreeDRenderingType" |
  // Sorting Operations Sequence / 00720600 / SQ
  "SortingOperationsSequence" |
  // Sort-by Category / 00720602 / CS
  "SortByCategory" |
  // Sorting Direction / 00720604 / CS
  "SortingDirection" |
  // Display Set Patient Orientation / 00720700 / CS
  "DisplaySetPatientOrientation" |
  // VOI Type / 00720702 / CS
  "VOIType" |
  // Pseudo-Color Type / 00720704 / CS
  "PseudoColorType" |
  // Pseudo-Color Palette Instance Reference Sequence / 00720705 / SQ
  "PseudoColorPaletteInstanceReferenceSequence" |
  // Show Grayscale Inverted / 00720706 / CS
  "ShowGrayscaleInverted" |
  // Show Image True Size Flag / 00720710 / CS
  "ShowImageTrueSizeFlag" |
  // Show Graphic Annotation Flag / 00720712 / CS
  "ShowGraphicAnnotationFlag" |
  // Show Patient Demographics Flag / 00720714 / CS
  "ShowPatientDemographicsFlag" |
  // Show Acquisition Techniques Flag / 00720716 / CS
  "ShowAcquisitionTechniquesFlag" |
  // Display Set Horizontal Justification / 00720717 / CS
  "DisplaySetHorizontalJustification" |
  // Display Set Vertical Justification / 00720718 / CS
  "DisplaySetVerticalJustification" |
  // Continuation Start Meterset / 00740120 / FD
  "ContinuationStartMeterset" |
  // Continuation End Meterset / 00740121 / FD
  "ContinuationEndMeterset" |
  // Procedure Step State / 00741000 / CS
  "ProcedureStepState" |
  // Procedure Step Progress Information Sequence / 00741002 / SQ
  "ProcedureStepProgressInformationSequence" |
  // Procedure Step Progress / 00741004 / DS
  "ProcedureStepProgress" |
  // Procedure Step Progress Description / 00741006 / ST
  "ProcedureStepProgressDescription" |
  // Procedure Step Progress Parameters Sequence / 00741007 / SQ
  "ProcedureStepProgressParametersSequence" |
  // Procedure Step Communications URI Sequence / 00741008 / SQ
  "ProcedureStepCommunicationsURISequence" |
  // Contact URI / 0074100A / UR
  "ContactURI" |
  // Contact Display Name / 0074100C / LO
  "ContactDisplayName" |
  // Procedure Step Discontinuation Reason Code Sequence / 0074100E / SQ
  "ProcedureStepDiscontinuationReasonCodeSequence" |
  // Beam Task Sequence / 00741020 / SQ
  "BeamTaskSequence" |
  // Beam Task Type / 00741022 / CS
  "BeamTaskType" |
  // Beam Order Index (Trial) / 00741024 / IS
  "BeamOrderIndexTrial" |
  // Autosequence Flag / 00741025 / CS
  "AutosequenceFlag" |
  // Table Top Vertical Adjusted Position / 00741026 / FD
  "TableTopVerticalAdjustedPosition" |
  // Table Top Longitudinal Adjusted Position / 00741027 / FD
  "TableTopLongitudinalAdjustedPosition" |
  // Table Top Lateral Adjusted Position / 00741028 / FD
  "TableTopLateralAdjustedPosition" |
  // Patient Support Adjusted Angle / 0074102A / FD
  "PatientSupportAdjustedAngle" |
  // Table Top Eccentric Adjusted Angle / 0074102B / FD
  "TableTopEccentricAdjustedAngle" |
  // Table Top Pitch Adjusted Angle / 0074102C / FD
  "TableTopPitchAdjustedAngle" |
  // Table Top Roll Adjusted Angle / 0074102D / FD
  "TableTopRollAdjustedAngle" |
  // Delivery Verification Image Sequence / 00741030 / SQ
  "DeliveryVerificationImageSequence" |
  // Verification Image Timing / 00741032 / CS
  "VerificationImageTiming" |
  // Double Exposure Flag / 00741034 / CS
  "DoubleExposureFlag" |
  // Double Exposure Ordering / 00741036 / CS
  "DoubleExposureOrdering" |
  // Double Exposure Meterset (Trial) / 00741038 / DS
  "DoubleExposureMetersetTrial" |
  // Double Exposure Field Delta (Trial) / 0074103A / DS
  "DoubleExposureFieldDeltaTrial" |
  // Related Reference RT Image Sequence / 00741040 / SQ
  "RelatedReferenceRTImageSequence" |
  // General Machine Verification Sequence / 00741042 / SQ
  "GeneralMachineVerificationSequence" |
  // Conventional Machine Verification Sequence / 00741044 / SQ
  "ConventionalMachineVerificationSequence" |
  // Ion Machine Verification Sequence / 00741046 / SQ
  "IonMachineVerificationSequence" |
  // Failed Attributes Sequence / 00741048 / SQ
  "FailedAttributesSequence" |
  // Overridden Attributes Sequence / 0074104A / SQ
  "OverriddenAttributesSequence" |
  // Conventional Control Point Verification Sequence / 0074104C / SQ
  "ConventionalControlPointVerificationSequence" |
  // Ion Control Point Verification Sequence / 0074104E / SQ
  "IonControlPointVerificationSequence" |
  // Attribute Occurrence Sequence / 00741050 / SQ
  "AttributeOccurrenceSequence" |
  // Attribute Occurrence Pointer / 00741052 / AT
  "AttributeOccurrencePointer" |
  // Attribute Item Selector / 00741054 / UL
  "AttributeItemSelector" |
  // Attribute Occurrence Private Creator / 00741056 / LO
  "AttributeOccurrencePrivateCreator" |
  // Selector Sequence Pointer Items / 00741057 / IS
  "SelectorSequencePointerItems" |
  // Scheduled Procedure Step Priority / 00741200 / CS
  "ScheduledProcedureStepPriority" |
  // Worklist Label / 00741202 / LO
  "WorklistLabel" |
  // Procedure Step Label / 00741204 / LO
  "ProcedureStepLabel" |
  // Scheduled Processing Parameters Sequence / 00741210 / SQ
  "ScheduledProcessingParametersSequence" |
  // Performed Processing Parameters Sequence / 00741212 / SQ
  "PerformedProcessingParametersSequence" |
  // Unified Procedure Step Performed Procedure Sequence / 00741216 / SQ
  "UnifiedProcedureStepPerformedProcedureSequence" |
  // Related Procedure Step Sequence / 00741220 / SQ
  "RelatedProcedureStepSequence" |
  // Procedure Step Relationship Type / 00741222 / LO
  "ProcedureStepRelationshipType" |
  // Replaced Procedure Step Sequence / 00741224 / SQ
  "ReplacedProcedureStepSequence" |
  // Deletion Lock / 00741230 / LO
  "DeletionLock" |
  // Receiving AE / 00741234 / AE
  "ReceivingAE" |
  // Requesting AE / 00741236 / AE
  "RequestingAE" |
  // Reason for Cancellation / 00741238 / LT
  "ReasonForCancellation" |
  // SCP Status / 00741242 / CS
  "SCPStatus" |
  // Subscription List Status / 00741244 / CS
  "SubscriptionListStatus" |
  // Unified Procedure Step List Status / 00741246 / CS
  "UnifiedProcedureStepListStatus" |
  // Beam Order Index / 00741324 / UL
  "BeamOrderIndex" |
  // Double Exposure Meterset / 00741338 / FD
  "DoubleExposureMeterset" |
  // Double Exposure Field Delta / 0074133A / FD
  "DoubleExposureFieldDelta" |
  // Brachy Task Sequence / 00741401 / SQ
  "BrachyTaskSequence" |
  // Continuation Start Total Reference Air Kerma / 00741402 / DS
  "ContinuationStartTotalReferenceAirKerma" |
  // Continuation End Total Reference Air Kerma / 00741403 / DS
  "ContinuationEndTotalReferenceAirKerma" |
  // Continuation Pulse Number / 00741404 / IS
  "ContinuationPulseNumber" |
  // Channel Delivery Order Sequence / 00741405 / SQ
  "ChannelDeliveryOrderSequence" |
  // Referenced Channel Number / 00741406 / IS
  "ReferencedChannelNumber" |
  // Start Cumulative Time Weight / 00741407 / DS
  "StartCumulativeTimeWeight" |
  // End Cumulative Time Weight / 00741408 / DS
  "EndCumulativeTimeWeight" |
  // Omitted Channel Sequence / 00741409 / SQ
  "OmittedChannelSequence" |
  // Reason for Channel Omission / 0074140A / CS
  "ReasonForChannelOmission" |
  // Reason for Channel Omission Description / 0074140B / LO
  "ReasonForChannelOmissionDescription" |
  // Channel Delivery Order Index / 0074140C / IS
  "ChannelDeliveryOrderIndex" |
  // Channel Delivery Continuation Sequence / 0074140D / SQ
  "ChannelDeliveryContinuationSequence" |
  // Omitted Application Setup Sequence / 0074140E / SQ
  "OmittedApplicationSetupSequence" |
  // Implant Assembly Template Name / 00760001 / LO
  "ImplantAssemblyTemplateName" |
  // Implant Assembly Template Issuer / 00760003 / LO
  "ImplantAssemblyTemplateIssuer" |
  // Implant Assembly Template Version / 00760006 / LO
  "ImplantAssemblyTemplateVersion" |
  // Replaced Implant Assembly Template Sequence / 00760008 / SQ
  "ReplacedImplantAssemblyTemplateSequence" |
  // Implant Assembly Template Type / 0076000A / CS
  "ImplantAssemblyTemplateType" |
  // Original Implant Assembly Template Sequence / 0076000C / SQ
  "OriginalImplantAssemblyTemplateSequence" |
  // Derivation Implant Assembly Template Sequence / 0076000E / SQ
  "DerivationImplantAssemblyTemplateSequence" |
  // Implant Assembly Template Target Anatomy Sequence / 00760010 / SQ
  "ImplantAssemblyTemplateTargetAnatomySequence" |
  // Procedure Type Code Sequence / 00760020 / SQ
  "ProcedureTypeCodeSequence" |
  // Surgical Technique / 00760030 / LO
  "SurgicalTechnique" |
  // Component Types Sequence / 00760032 / SQ
  "ComponentTypesSequence" |
  // Component Type Code Sequence / 00760034 / SQ
  "ComponentTypeCodeSequence" |
  // Exclusive Component Type / 00760036 / CS
  "ExclusiveComponentType" |
  // Mandatory Component Type / 00760038 / CS
  "MandatoryComponentType" |
  // Component Sequence / 00760040 / SQ
  "ComponentSequence" |
  // Component ID / 00760055 / US
  "ComponentID" |
  // Component Assembly Sequence / 00760060 / SQ
  "ComponentAssemblySequence" |
  // Component 1 Referenced ID / 00760070 / US
  "Component1ReferencedID" |
  // Component 1 Referenced Mating Feature Set ID / 00760080 / US
  "Component1ReferencedMatingFeatureSetID" |
  // Component 1 Referenced Mating Feature ID / 00760090 / US
  "Component1ReferencedMatingFeatureID" |
  // Component 2 Referenced ID / 007600A0 / US
  "Component2ReferencedID" |
  // Component 2 Referenced Mating Feature Set ID / 007600B0 / US
  "Component2ReferencedMatingFeatureSetID" |
  // Component 2 Referenced Mating Feature ID / 007600C0 / US
  "Component2ReferencedMatingFeatureID" |
  // Implant Template Group Name / 00780001 / LO
  "ImplantTemplateGroupName" |
  // Implant Template Group Description / 00780010 / ST
  "ImplantTemplateGroupDescription" |
  // Implant Template Group Issuer / 00780020 / LO
  "ImplantTemplateGroupIssuer" |
  // Implant Template Group Version / 00780024 / LO
  "ImplantTemplateGroupVersion" |
  // Replaced Implant Template Group Sequence / 00780026 / SQ
  "ReplacedImplantTemplateGroupSequence" |
  // Implant Template Group Target Anatomy Sequence / 00780028 / SQ
  "ImplantTemplateGroupTargetAnatomySequence" |
  // Implant Template Group Members Sequence / 0078002A / SQ
  "ImplantTemplateGroupMembersSequence" |
  // Implant Template Group Member ID / 0078002E / US
  "ImplantTemplateGroupMemberID" |
  // 3D Implant Template Group Member Matching Point / 00780050 / FD
  "ThreeDImplantTemplateGroupMemberMatchingPoint" |
  // 3D Implant Template Group Member Matching Axes / 00780060 / FD
  "ThreeDImplantTemplateGroupMemberMatchingAxes" |
  // Implant Template Group Member Matching 2D Coordinates Sequence / 00780070 / SQ
  "ImplantTemplateGroupMemberMatching2DCoordinatesSequence" |
  // 2D Implant Template Group Member Matching Point / 00780090 / FD
  "TwoDImplantTemplateGroupMemberMatchingPoint" |
  // 2D Implant Template Group Member Matching Axes / 007800A0 / FD
  "TwoDImplantTemplateGroupMemberMatchingAxes" |
  // Implant Template Group Variation Dimension Sequence / 007800B0 / SQ
  "ImplantTemplateGroupVariationDimensionSequence" |
  // Implant Template Group Variation Dimension Name / 007800B2 / LO
  "ImplantTemplateGroupVariationDimensionName" |
  // Implant Template Group Variation Dimension Rank Sequence / 007800B4 / SQ
  "ImplantTemplateGroupVariationDimensionRankSequence" |
  // Referenced Implant Template Group Member ID / 007800B6 / US
  "ReferencedImplantTemplateGroupMemberID" |
  // Implant Template Group Variation Dimension Rank / 007800B8 / US
  "ImplantTemplateGroupVariationDimensionRank" |
  // Surface Scan Acquisition Type Code Sequence / 00800001 / SQ
  "SurfaceScanAcquisitionTypeCodeSequence" |
  // Surface Scan Mode Code Sequence / 00800002 / SQ
  "SurfaceScanModeCodeSequence" |
  // Registration Method Code Sequence / 00800003 / SQ
  "RegistrationMethodCodeSequence" |
  // Shot Duration Time / 00800004 / FD
  "ShotDurationTime" |
  // Shot Offset Time / 00800005 / FD
  "ShotOffsetTime" |
  // Surface Point Presentation Value Data / 00800006 / US
  "SurfacePointPresentationValueData" |
  // Surface Point Color CIELab Value Data / 00800007 / US
  "SurfacePointColorCIELabValueData" |
  // UV Mapping Sequence / 00800008 / SQ
  "UVMappingSequence" |
  // Texture Label / 00800009 / SH
  "TextureLabel" |
  // U Value Data / 00800010 / OF
  "UValueData" |
  // V Value Data / 00800011 / OF
  "VValueData" |
  // Referenced Texture Sequence / 00800012 / SQ
  "ReferencedTextureSequence" |
  // Referenced Surface Data Sequence / 00800013 / SQ
  "ReferencedSurfaceDataSequence" |
  // Assessment Summary / 00820001 / CS
  "AssessmentSummary" |
  // Assessment Summary Description / 00820003 / UT
  "AssessmentSummaryDescription" |
  // Assessed SOP Instance Sequence / 00820004 / SQ
  "AssessedSOPInstanceSequence" |
  // Referenced Comparison SOP Instance Sequence / 00820005 / SQ
  "ReferencedComparisonSOPInstanceSequence" |
  // Number of Assessment Observations / 00820006 / UL
  "NumberOfAssessmentObservations" |
  // Assessment Observations Sequence / 00820007 / SQ
  "AssessmentObservationsSequence" |
  // Observation Significance / 00820008 / CS
  "ObservationSignificance" |
  // Observation Description / 0082000A / UT
  "ObservationDescription" |
  // Structured Constraint Observation Sequence / 0082000C / SQ
  "StructuredConstraintObservationSequence" |
  // Assessed Attribute Value Sequence / 00820010 / SQ
  "AssessedAttributeValueSequence" |
  // Assessment Set ID / 00820016 / LO
  "AssessmentSetID" |
  // Assessment Requester Sequence / 00820017 / SQ
  "AssessmentRequesterSequence" |
  // Selector Attribute Name / 00820018 / LO
  "SelectorAttributeName" |
  // Selector Attribute Keyword / 00820019 / LO
  "SelectorAttributeKeyword" |
  // Assessment Type Code Sequence / 00820021 / SQ
  "AssessmentTypeCodeSequence" |
  // Observation Basis Code Sequence / 00820022 / SQ
  "ObservationBasisCodeSequence" |
  // Assessment Label / 00820023 / LO
  "AssessmentLabel" |
  // Constraint Type / 00820032 / CS
  "ConstraintType" |
  // Specification Selection Guidance / 00820033 / UT
  "SpecificationSelectionGuidance" |
  // Constraint Value Sequence / 00820034 / SQ
  "ConstraintValueSequence" |
  // Recommended Default Value Sequence / 00820035 / SQ
  "RecommendedDefaultValueSequence" |
  // Constraint Violation Significance / 00820036 / CS
  "ConstraintViolationSignificance" |
  // Constraint Violation Condition / 00820037 / UT
  "ConstraintViolationCondition" |
  // Modifiable Constraint Flag / 00820038 / CS
  "ModifiableConstraintFlag" |
  // Storage Media File-set ID / 00880130 / SH
  "StorageMediaFileSetID" |
  // Storage Media File-set UID / 00880140 / UI
  "StorageMediaFileSetUID" |
  // Icon Image Sequence / 00880200 / SQ
  "IconImageSequence" |
  // Topic Title / 00880904 / LO
  "TopicTitle" |
  // Topic Subject / 00880906 / ST
  "TopicSubject" |
  // Topic Author / 00880910 / LO
  "TopicAuthor" |
  // Topic Keywords / 00880912 / LO
  "TopicKeywords" |
  // SOP Instance Status / 01000410 / CS
  "SOPInstanceStatus" |
  // SOP Authorization DateTime / 01000420 / DT
  "SOPAuthorizationDateTime" |
  // SOP Authorization Comment / 01000424 / LT
  "SOPAuthorizationComment" |
  // Authorization Equipment Certification Number / 01000426 / LO
  "AuthorizationEquipmentCertificationNumber" |
  // MAC ID Number / 04000005 / US
  "MACIDNumber" |
  // MAC Calculation Transfer Syntax UID / 04000010 / UI
  "MACCalculationTransferSyntaxUID" |
  // MAC Algorithm / 04000015 / CS
  "MACAlgorithm" |
  // Data Elements Signed / 04000020 / AT
  "DataElementsSigned" |
  // Digital Signature UID / 04000100 / UI
  "DigitalSignatureUID" |
  // Digital Signature DateTime / 04000105 / DT
  "DigitalSignatureDateTime" |
  // Certificate Type / 04000110 / CS
  "CertificateType" |
  // Certificate of Signer / 04000115 / OB
  "CertificateOfSigner" |
  // Signature / 04000120 / OB
  "Signature" |
  // Certified Timestamp Type / 04000305 / CS
  "CertifiedTimestampType" |
  // Certified Timestamp / 04000310 / OB
  "CertifiedTimestamp" |
  // Digital Signature Purpose Code Sequence / 04000401 / SQ
  "DigitalSignaturePurposeCodeSequence" |
  // Referenced Digital Signature Sequence / 04000402 / SQ
  "ReferencedDigitalSignatureSequence" |
  // Referenced SOP Instance MAC Sequence / 04000403 / SQ
  "ReferencedSOPInstanceMACSequence" |
  // MAC / 04000404 / OB
  "MAC" |
  // Encrypted Attributes Sequence / 04000500 / SQ
  "EncryptedAttributesSequence" |
  // Encrypted Content Transfer Syntax UID / 04000510 / UI
  "EncryptedContentTransferSyntaxUID" |
  // Encrypted Content / 04000520 / OB
  "EncryptedContent" |
  // Modified Attributes Sequence / 04000550 / SQ
  "ModifiedAttributesSequence" |
  // Nonconforming Modified Attributes Sequence / 04000551 / SQ
  "NonconformingModifiedAttributesSequence" |
  // Nonconforming Data Element Value / 04000552 / OB
  "NonconformingDataElementValue" |
  // Original Attributes Sequence / 04000561 / SQ
  "OriginalAttributesSequence" |
  // Attribute Modification DateTime / 04000562 / DT
  "AttributeModificationDateTime" |
  // Modifying System / 04000563 / LO
  "ModifyingSystem" |
  // Source of Previous Values / 04000564 / LO
  "SourceOfPreviousValues" |
  // Reason for the Attribute Modification / 04000565 / CS
  "ReasonForTheAttributeModification" |
  // Instance Origin Status / 04000600 / CS
  "InstanceOriginStatus" |
  // Escape Triplet / 1000xxx0 / US
  "EscapeTriplet" |
  // Run Length Triplet / 1000xxx1 / US
  "RunLengthTriplet" |
  // Huffman Table Size / 1000xxx2 / US
  "HuffmanTableSize" |
  // Huffman Table Triplet / 1000xxx3 / US
  "HuffmanTableTriplet" |
  // Shift Table Size / 1000xxx4 / US
  "ShiftTableSize" |
  // Shift Table Triplet / 1000xxx5 / US
  "ShiftTableTriplet" |
  // Zonal Map / 1010xxxx / US
  "ZonalMap" |
  // Number of Copies / 20000010 / IS
  "NumberOfCopies" |
  // Printer Configuration Sequence / 2000001E / SQ
  "PrinterConfigurationSequence" |
  // Print Priority / 20000020 / CS
  "PrintPriority" |
  // Medium Type / 20000030 / CS
  "MediumType" |
  // Film Destination / 20000040 / CS
  "FilmDestination" |
  // Film Session Label / 20000050 / LO
  "FilmSessionLabel" |
  // Memory Allocation / 20000060 / IS
  "MemoryAllocation" |
  // Maximum Memory Allocation / 20000061 / IS
  "MaximumMemoryAllocation" |
  // Color Image Printing Flag / 20000062 / CS
  "ColorImagePrintingFlag" |
  // Collation Flag / 20000063 / CS
  "CollationFlag" |
  // Annotation Flag / 20000065 / CS
  "AnnotationFlag" |
  // Image Overlay Flag / 20000067 / CS
  "ImageOverlayFlag" |
  // Presentation LUT Flag / 20000069 / CS
  "PresentationLUTFlag" |
  // Image Box Presentation LUT Flag / 2000006A / CS
  "ImageBoxPresentationLUTFlag" |
  // Memory Bit Depth / 200000A0 / US
  "MemoryBitDepth" |
  // Printing Bit Depth / 200000A1 / US
  "PrintingBitDepth" |
  // Media Installed Sequence / 200000A2 / SQ
  "MediaInstalledSequence" |
  // Other Media Available Sequence / 200000A4 / SQ
  "OtherMediaAvailableSequence" |
  // Supported Image Display Formats Sequence / 200000A8 / SQ
  "SupportedImageDisplayFormatsSequence" |
  // Referenced Film Box Sequence / 20000500 / SQ
  "ReferencedFilmBoxSequence" |
  // Referenced Stored Print Sequence / 20000510 / SQ
  "ReferencedStoredPrintSequence" |
  // Image Display Format / 20100010 / ST
  "ImageDisplayFormat" |
  // Annotation Display Format ID / 20100030 / CS
  "AnnotationDisplayFormatID" |
  // Film Orientation / 20100040 / CS
  "FilmOrientation" |
  // Film Size ID / 20100050 / CS
  "FilmSizeID" |
  // Printer Resolution ID / 20100052 / CS
  "PrinterResolutionID" |
  // Default Printer Resolution ID / 20100054 / CS
  "DefaultPrinterResolutionID" |
  // Magnification Type / 20100060 / CS
  "MagnificationType" |
  // Smoothing Type / 20100080 / CS
  "SmoothingType" |
  // Default Magnification Type / 201000A6 / CS
  "DefaultMagnificationType" |
  // Other Magnification Types Available / 201000A7 / CS
  "OtherMagnificationTypesAvailable" |
  // Default Smoothing Type / 201000A8 / CS
  "DefaultSmoothingType" |
  // Other Smoothing Types Available / 201000A9 / CS
  "OtherSmoothingTypesAvailable" |
  // Border Density / 20100100 / CS
  "BorderDensity" |
  // Empty Image Density / 20100110 / CS
  "EmptyImageDensity" |
  // Min Density / 20100120 / US
  "MinDensity" |
  // Max Density / 20100130 / US
  "MaxDensity" |
  // Trim / 20100140 / CS
  "Trim" |
  // Configuration Information / 20100150 / ST
  "ConfigurationInformation" |
  // Configuration Information Description / 20100152 / LT
  "ConfigurationInformationDescription" |
  // Maximum Collated Films / 20100154 / IS
  "MaximumCollatedFilms" |
  // Illumination / 2010015E / US
  "Illumination" |
  // Reflected Ambient Light / 20100160 / US
  "ReflectedAmbientLight" |
  // Printer Pixel Spacing / 20100376 / DS
  "PrinterPixelSpacing" |
  // Referenced Film Session Sequence / 20100500 / SQ
  "ReferencedFilmSessionSequence" |
  // Referenced Image Box Sequence / 20100510 / SQ
  "ReferencedImageBoxSequence" |
  // Referenced Basic Annotation Box Sequence / 20100520 / SQ
  "ReferencedBasicAnnotationBoxSequence" |
  // Image Box Position / 20200010 / US
  "ImageBoxPosition" |
  // Polarity / 20200020 / CS
  "Polarity" |
  // Requested Image Size / 20200030 / DS
  "RequestedImageSize" |
  // Requested Decimate/Crop Behavior / 20200040 / CS
  "RequestedDecimateCropBehavior" |
  // Requested Resolution ID / 20200050 / CS
  "RequestedResolutionID" |
  // Requested Image Size Flag / 202000A0 / CS
  "RequestedImageSizeFlag" |
  // Decimate/Crop Result / 202000A2 / CS
  "DecimateCropResult" |
  // Basic Grayscale Image Sequence / 20200110 / SQ
  "BasicGrayscaleImageSequence" |
  // Basic Color Image Sequence / 20200111 / SQ
  "BasicColorImageSequence" |
  // Referenced Image Overlay Box Sequence / 20200130 / SQ
  "ReferencedImageOverlayBoxSequence" |
  // Referenced VOI LUT Box Sequence / 20200140 / SQ
  "ReferencedVOILUTBoxSequence" |
  // Annotation Position / 20300010 / US
  "AnnotationPosition" |
  // Text String / 20300020 / LO
  "TextString" |
  // Referenced Overlay Plane Sequence / 20400010 / SQ
  "ReferencedOverlayPlaneSequence" |
  // Referenced Overlay Plane Groups / 20400011 / US
  "ReferencedOverlayPlaneGroups" |
  // Overlay Pixel Data Sequence / 20400020 / SQ
  "OverlayPixelDataSequence" |
  // Overlay Magnification Type / 20400060 / CS
  "OverlayMagnificationType" |
  // Overlay Smoothing Type / 20400070 / CS
  "OverlaySmoothingType" |
  // Overlay or Image Magnification / 20400072 / CS
  "OverlayOrImageMagnification" |
  // Magnify to Number of Columns / 20400074 / US
  "MagnifyToNumberOfColumns" |
  // Overlay Foreground Density / 20400080 / CS
  "OverlayForegroundDensity" |
  // Overlay Background Density / 20400082 / CS
  "OverlayBackgroundDensity" |
  // Overlay Mode / 20400090 / CS
  "OverlayMode" |
  // Threshold Density / 20400100 / CS
  "ThresholdDensity" |
  // Referenced Image Box Sequence (Retired) / 20400500 / SQ
  "ReferencedImageBoxSequenceRetired" |
  // Presentation LUT Sequence / 20500010 / SQ
  "PresentationLUTSequence" |
  // Presentation LUT Shape / 20500020 / CS
  "PresentationLUTShape" |
  // Referenced Presentation LUT Sequence / 20500500 / SQ
  "ReferencedPresentationLUTSequence" |
  // Print Job ID / 21000010 / SH
  "PrintJobID" |
  // Execution Status / 21000020 / CS
  "ExecutionStatus" |
  // Execution Status Info / 21000030 / CS
  "ExecutionStatusInfo" |
  // Creation Date / 21000040 / DA
  "CreationDate" |
  // Creation Time / 21000050 / TM
  "CreationTime" |
  // Originator / 21000070 / AE
  "Originator" |
  // Destination AE / 21000140 / AE
  "DestinationAE" |
  // Owner ID / 21000160 / SH
  "OwnerID" |
  // Number of Films / 21000170 / IS
  "NumberOfFilms" |
  // Referenced Print Job Sequence (Pull Stored Print) / 21000500 / SQ
  "ReferencedPrintJobSequencePullStoredPrint" |
  // Printer Status / 21100010 / CS
  "PrinterStatus" |
  // Printer Status Info / 21100020 / CS
  "PrinterStatusInfo" |
  // Printer Name / 21100030 / LO
  "PrinterName" |
  // Print Queue ID / 21100099 / SH
  "PrintQueueID" |
  // Queue Status / 21200010 / CS
  "QueueStatus" |
  // Print Job Description Sequence / 21200050 / SQ
  "PrintJobDescriptionSequence" |
  // Referenced Print Job Sequence / 21200070 / SQ
  "ReferencedPrintJobSequence" |
  // Print Management Capabilities Sequence / 21300010 / SQ
  "PrintManagementCapabilitiesSequence" |
  // Printer Characteristics Sequence / 21300015 / SQ
  "PrinterCharacteristicsSequence" |
  // Film Box Content Sequence / 21300030 / SQ
  "FilmBoxContentSequence" |
  // Image Box Content Sequence / 21300040 / SQ
  "ImageBoxContentSequence" |
  // Annotation Content Sequence / 21300050 / SQ
  "AnnotationContentSequence" |
  // Image Overlay Box Content Sequence / 21300060 / SQ
  "ImageOverlayBoxContentSequence" |
  // Presentation LUT Content Sequence / 21300080 / SQ
  "PresentationLUTContentSequence" |
  // Proposed Study Sequence / 213000A0 / SQ
  "ProposedStudySequence" |
  // Original Image Sequence / 213000C0 / SQ
  "OriginalImageSequence" |
  // Label Using Information Extracted From Instances / 22000001 / CS
  "LabelUsingInformationExtractedFromInstances" |
  // Label Text / 22000002 / UT
  "LabelText" |
  // Label Style Selection / 22000003 / CS
  "LabelStyleSelection" |
  // Media Disposition / 22000004 / LT
  "MediaDisposition" |
  // Barcode Value / 22000005 / LT
  "BarcodeValue" |
  // Barcode Symbology / 22000006 / CS
  "BarcodeSymbology" |
  // Allow Media Splitting / 22000007 / CS
  "AllowMediaSplitting" |
  // Include Non-DICOM Objects / 22000008 / CS
  "IncludeNonDICOMObjects" |
  // Include Display Application / 22000009 / CS
  "IncludeDisplayApplication" |
  // Preserve Composite Instances After Media Creation / 2200000A / CS
  "PreserveCompositeInstancesAfterMediaCreation" |
  // Total Number of Pieces of Media Created / 2200000B / US
  "TotalNumberOfPiecesOfMediaCreated" |
  // Requested Media Application Profile / 2200000C / LO
  "RequestedMediaApplicationProfile" |
  // Referenced Storage Media Sequence / 2200000D / SQ
  "ReferencedStorageMediaSequence" |
  // Failure Attributes / 2200000E / AT
  "FailureAttributes" |
  // Allow Lossy Compression / 2200000F / CS
  "AllowLossyCompression" |
  // Request Priority / 22000020 / CS
  "RequestPriority" |
  // RT Image Label / 30020002 / SH
  "RTImageLabel" |
  // RT Image Name / 30020003 / LO
  "RTImageName" |
  // RT Image Description / 30020004 / ST
  "RTImageDescription" |
  // Reported Values Origin / 3002000A / CS
  "ReportedValuesOrigin" |
  // RT Image Plane / 3002000C / CS
  "RTImagePlane" |
  // X-Ray Image Receptor Translation / 3002000D / DS
  "XRayImageReceptorTranslation" |
  // X-Ray Image Receptor Angle / 3002000E / DS
  "XRayImageReceptorAngle" |
  // RT Image Orientation / 30020010 / DS
  "RTImageOrientation" |
  // Image Plane Pixel Spacing / 30020011 / DS
  "ImagePlanePixelSpacing" |
  // RT Image Position / 30020012 / DS
  "RTImagePosition" |
  // Radiation Machine Name / 30020020 / SH
  "RadiationMachineName" |
  // Radiation Machine SAD / 30020022 / DS
  "RadiationMachineSAD" |
  // Radiation Machine SSD / 30020024 / DS
  "RadiationMachineSSD" |
  // RT Image SID / 30020026 / DS
  "RTImageSID" |
  // Source to Reference Object Distance / 30020028 / DS
  "SourceToReferenceObjectDistance" |
  // Fraction Number / 30020029 / IS
  "FractionNumber" |
  // Exposure Sequence / 30020030 / SQ
  "ExposureSequence" |
  // Meterset Exposure / 30020032 / DS
  "MetersetExposure" |
  // Diaphragm Position / 30020034 / DS
  "DiaphragmPosition" |
  // Fluence Map Sequence / 30020040 / SQ
  "FluenceMapSequence" |
  // Fluence Data Source / 30020041 / CS
  "FluenceDataSource" |
  // Fluence Data Scale / 30020042 / DS
  "FluenceDataScale" |
  // Primary Fluence Mode Sequence / 30020050 / SQ
  "PrimaryFluenceModeSequence" |
  // Fluence Mode / 30020051 / CS
  "FluenceMode" |
  // Fluence Mode ID / 30020052 / SH
  "FluenceModeID" |
  // DVH Type / 30040001 / CS
  "DVHType" |
  // Dose Units / 30040002 / CS
  "DoseUnits" |
  // Dose Type / 30040004 / CS
  "DoseType" |
  // Spatial Transform of Dose / 30040005 / CS
  "SpatialTransformOfDose" |
  // Dose Comment / 30040006 / LO
  "DoseComment" |
  // Normalization Point / 30040008 / DS
  "NormalizationPoint" |
  // Dose Summation Type / 3004000A / CS
  "DoseSummationType" |
  // Grid Frame Offset Vector / 3004000C / DS
  "GridFrameOffsetVector" |
  // Dose Grid Scaling / 3004000E / DS
  "DoseGridScaling" |
  // RT Dose ROI Sequence / 30040010 / SQ
  "RTDoseROISequence" |
  // Dose Value / 30040012 / DS
  "DoseValue" |
  // Tissue Heterogeneity Correction / 30040014 / CS
  "TissueHeterogeneityCorrection" |
  // DVH Normalization Point / 30040040 / DS
  "DVHNormalizationPoint" |
  // DVH Normalization Dose Value / 30040042 / DS
  "DVHNormalizationDoseValue" |
  // DVH Sequence / 30040050 / SQ
  "DVHSequence" |
  // DVH Dose Scaling / 30040052 / DS
  "DVHDoseScaling" |
  // DVH Volume Units / 30040054 / CS
  "DVHVolumeUnits" |
  // DVH Number of Bins / 30040056 / IS
  "DVHNumberOfBins" |
  // DVH Data / 30040058 / DS
  "DVHData" |
  // DVH Referenced ROI Sequence / 30040060 / SQ
  "DVHReferencedROISequence" |
  // DVH ROI Contribution Type / 30040062 / CS
  "DVHROIContributionType" |
  // DVH Minimum Dose / 30040070 / DS
  "DVHMinimumDose" |
  // DVH Maximum Dose / 30040072 / DS
  "DVHMaximumDose" |
  // DVH Mean Dose / 30040074 / DS
  "DVHMeanDose" |
  // Structure Set Label / 30060002 / SH
  "StructureSetLabel" |
  // Structure Set Name / 30060004 / LO
  "StructureSetName" |
  // Structure Set Description / 30060006 / ST
  "StructureSetDescription" |
  // Structure Set Date / 30060008 / DA
  "StructureSetDate" |
  // Structure Set Time / 30060009 / TM
  "StructureSetTime" |
  // Referenced Frame of Reference Sequence / 30060010 / SQ
  "ReferencedFrameOfReferenceSequence" |
  // RT Referenced Study Sequence / 30060012 / SQ
  "RTReferencedStudySequence" |
  // RT Referenced Series Sequence / 30060014 / SQ
  "RTReferencedSeriesSequence" |
  // Contour Image Sequence / 30060016 / SQ
  "ContourImageSequence" |
  // Predecessor Structure Set Sequence / 30060018 / SQ
  "PredecessorStructureSetSequence" |
  // Structure Set ROI Sequence / 30060020 / SQ
  "StructureSetROISequence" |
  // ROI Number / 30060022 / IS
  "ROINumber" |
  // Referenced Frame of Reference UID / 30060024 / UI
  "ReferencedFrameOfReferenceUID" |
  // ROI Name / 30060026 / LO
  "ROIName" |
  // ROI Description / 30060028 / ST
  "ROIDescription" |
  // ROI Display Color / 3006002A / IS
  "ROIDisplayColor" |
  // ROI Volume / 3006002C / DS
  "ROIVolume" |
  // RT Related ROI Sequence / 30060030 / SQ
  "RTRelatedROISequence" |
  // RT ROI Relationship / 30060033 / CS
  "RTROIRelationship" |
  // ROI Generation Algorithm / 30060036 / CS
  "ROIGenerationAlgorithm" |
  // ROI Derivation Algorithm Identification Sequence / 30060037 / SQ
  "ROIDerivationAlgorithmIdentificationSequence" |
  // ROI Generation Description / 30060038 / LO
  "ROIGenerationDescription" |
  // ROI Contour Sequence / 30060039 / SQ
  "ROIContourSequence" |
  // Contour Sequence / 30060040 / SQ
  "ContourSequence" |
  // Contour Geometric Type / 30060042 / CS
  "ContourGeometricType" |
  // Contour Slab Thickness / 30060044 / DS
  "ContourSlabThickness" |
  // Contour Offset Vector / 30060045 / DS
  "ContourOffsetVector" |
  // Number of Contour Points / 30060046 / IS
  "NumberOfContourPoints" |
  // Contour Number / 30060048 / IS
  "ContourNumber" |
  // Attached Contours / 30060049 / IS
  "AttachedContours" |
  // Source Pixel Planes Characteristics Sequence / 3006004A / SQ
  "SourcePixelPlanesCharacteristicsSequence" |
  // Contour Data / 30060050 / DS
  "ContourData" |
  // RT ROI Observations Sequence / 30060080 / SQ
  "RTROIObservationsSequence" |
  // Observation Number / 30060082 / IS
  "ObservationNumber" |
  // Referenced ROI Number / 30060084 / IS
  "ReferencedROINumber" |
  // ROI Observation Label / 30060085 / SH
  "ROIObservationLabel" |
  // RT ROI Identification Code Sequence / 30060086 / SQ
  "RTROIIdentificationCodeSequence" |
  // ROI Observation Description / 30060088 / ST
  "ROIObservationDescription" |
  // Related RT ROI Observations Sequence / 300600A0 / SQ
  "RelatedRTROIObservationsSequence" |
  // RT ROI Interpreted Type / 300600A4 / CS
  "RTROIInterpretedType" |
  // ROI Interpreter / 300600A6 / PN
  "ROIInterpreter" |
  // ROI Physical Properties Sequence / 300600B0 / SQ
  "ROIPhysicalPropertiesSequence" |
  // ROI Physical Property / 300600B2 / CS
  "ROIPhysicalProperty" |
  // ROI Physical Property Value / 300600B4 / DS
  "ROIPhysicalPropertyValue" |
  // ROI Elemental Composition Sequence / 300600B6 / SQ
  "ROIElementalCompositionSequence" |
  // ROI Elemental Composition Atomic Number / 300600B7 / US
  "ROIElementalCompositionAtomicNumber" |
  // ROI Elemental Composition Atomic Mass Fraction / 300600B8 / FL
  "ROIElementalCompositionAtomicMassFraction" |
  // Additional RT ROI Identification Code Sequence / 300600B9 / SQ
  "AdditionalRTROIIdentificationCodeSequence" |
  // Frame of Reference Relationship Sequence / 300600C0 / SQ
  "FrameOfReferenceRelationshipSequence" |
  // Related Frame of Reference UID / 300600C2 / UI
  "RelatedFrameOfReferenceUID" |
  // Frame of Reference Transformation Type / 300600C4 / CS
  "FrameOfReferenceTransformationType" |
  // Frame of Reference Transformation Matrix / 300600C6 / DS
  "FrameOfReferenceTransformationMatrix" |
  // Frame of Reference Transformation Comment / 300600C8 / LO
  "FrameOfReferenceTransformationComment" |
  // Patient Location Coordinates Sequence / 300600C9 / SQ
  "PatientLocationCoordinatesSequence" |
  // Patient Location Coordinates Code Sequence / 300600CA / SQ
  "PatientLocationCoordinatesCodeSequence" |
  // Patient Support Position Sequence / 300600CB / SQ
  "PatientSupportPositionSequence" |
  // Measured Dose Reference Sequence / 30080010 / SQ
  "MeasuredDoseReferenceSequence" |
  // Measured Dose Description / 30080012 / ST
  "MeasuredDoseDescription" |
  // Measured Dose Type / 30080014 / CS
  "MeasuredDoseType" |
  // Measured Dose Value / 30080016 / DS
  "MeasuredDoseValue" |
  // Treatment Session Beam Sequence / 30080020 / SQ
  "TreatmentSessionBeamSequence" |
  // Treatment Session Ion Beam Sequence / 30080021 / SQ
  "TreatmentSessionIonBeamSequence" |
  // Current Fraction Number / 30080022 / IS
  "CurrentFractionNumber" |
  // Treatment Control Point Date / 30080024 / DA
  "TreatmentControlPointDate" |
  // Treatment Control Point Time / 30080025 / TM
  "TreatmentControlPointTime" |
  // Treatment Termination Status / 3008002A / CS
  "TreatmentTerminationStatus" |
  // Treatment Termination Code / 3008002B / SH
  "TreatmentTerminationCode" |
  // Treatment Verification Status / 3008002C / CS
  "TreatmentVerificationStatus" |
  // Referenced Treatment Record Sequence / 30080030 / SQ
  "ReferencedTreatmentRecordSequence" |
  // Specified Primary Meterset / 30080032 / DS
  "SpecifiedPrimaryMeterset" |
  // Specified Secondary Meterset / 30080033 / DS
  "SpecifiedSecondaryMeterset" |
  // Delivered Primary Meterset / 30080036 / DS
  "DeliveredPrimaryMeterset" |
  // Delivered Secondary Meterset / 30080037 / DS
  "DeliveredSecondaryMeterset" |
  // Specified Treatment Time / 3008003A / DS
  "SpecifiedTreatmentTime" |
  // Delivered Treatment Time / 3008003B / DS
  "DeliveredTreatmentTime" |
  // Control Point Delivery Sequence / 30080040 / SQ
  "ControlPointDeliverySequence" |
  // Ion Control Point Delivery Sequence / 30080041 / SQ
  "IonControlPointDeliverySequence" |
  // Specified Meterset / 30080042 / DS
  "SpecifiedMeterset" |
  // Delivered Meterset / 30080044 / DS
  "DeliveredMeterset" |
  // Meterset Rate Set / 30080045 / FL
  "MetersetRateSet" |
  // Meterset Rate Delivered / 30080046 / FL
  "MetersetRateDelivered" |
  // Scan Spot Metersets Delivered / 30080047 / FL
  "ScanSpotMetersetsDelivered" |
  // Dose Rate Delivered / 30080048 / DS
  "DoseRateDelivered" |
  // Treatment Summary Calculated Dose Reference Sequence / 30080050 / SQ
  "TreatmentSummaryCalculatedDoseReferenceSequence" |
  // Cumulative Dose to Dose Reference / 30080052 / DS
  "CumulativeDoseToDoseReference" |
  // First Treatment Date / 30080054 / DA
  "FirstTreatmentDate" |
  // Most Recent Treatment Date / 30080056 / DA
  "MostRecentTreatmentDate" |
  // Number of Fractions Delivered / 3008005A / IS
  "NumberOfFractionsDelivered" |
  // Override Sequence / 30080060 / SQ
  "OverrideSequence" |
  // Parameter Sequence Pointer / 30080061 / AT
  "ParameterSequencePointer" |
  // Override Parameter Pointer / 30080062 / AT
  "OverrideParameterPointer" |
  // Parameter Item Index / 30080063 / IS
  "ParameterItemIndex" |
  // Measured Dose Reference Number / 30080064 / IS
  "MeasuredDoseReferenceNumber" |
  // Parameter Pointer / 30080065 / AT
  "ParameterPointer" |
  // Override Reason / 30080066 / ST
  "OverrideReason" |
  // Parameter Value Number / 30080067 / US
  "ParameterValueNumber" |
  // Corrected Parameter Sequence / 30080068 / SQ
  "CorrectedParameterSequence" |
  // Correction Value / 3008006A / FL
  "CorrectionValue" |
  // Calculated Dose Reference Sequence / 30080070 / SQ
  "CalculatedDoseReferenceSequence" |
  // Calculated Dose Reference Number / 30080072 / IS
  "CalculatedDoseReferenceNumber" |
  // Calculated Dose Reference Description / 30080074 / ST
  "CalculatedDoseReferenceDescription" |
  // Calculated Dose Reference Dose Value / 30080076 / DS
  "CalculatedDoseReferenceDoseValue" |
  // Start Meterset / 30080078 / DS
  "StartMeterset" |
  // End Meterset / 3008007A / DS
  "EndMeterset" |
  // Referenced Measured Dose Reference Sequence / 30080080 / SQ
  "ReferencedMeasuredDoseReferenceSequence" |
  // Referenced Measured Dose Reference Number / 30080082 / IS
  "ReferencedMeasuredDoseReferenceNumber" |
  // Referenced Calculated Dose Reference Sequence / 30080090 / SQ
  "ReferencedCalculatedDoseReferenceSequence" |
  // Referenced Calculated Dose Reference Number / 30080092 / IS
  "ReferencedCalculatedDoseReferenceNumber" |
  // Beam Limiting Device Leaf Pairs Sequence / 300800A0 / SQ
  "BeamLimitingDeviceLeafPairsSequence" |
  // Recorded Wedge Sequence / 300800B0 / SQ
  "RecordedWedgeSequence" |
  // Recorded Compensator Sequence / 300800C0 / SQ
  "RecordedCompensatorSequence" |
  // Recorded Block Sequence / 300800D0 / SQ
  "RecordedBlockSequence" |
  // Recorded Block Slab Sequence / 300800D1 / SQ
  "RecordedBlockSlabSequence" |
  // Treatment Summary Measured Dose Reference Sequence / 300800E0 / SQ
  "TreatmentSummaryMeasuredDoseReferenceSequence" |
  // Recorded Snout Sequence / 300800F0 / SQ
  "RecordedSnoutSequence" |
  // Recorded Range Shifter Sequence / 300800F2 / SQ
  "RecordedRangeShifterSequence" |
  // Recorded Lateral Spreading Device Sequence / 300800F4 / SQ
  "RecordedLateralSpreadingDeviceSequence" |
  // Recorded Range Modulator Sequence / 300800F6 / SQ
  "RecordedRangeModulatorSequence" |
  // Recorded Source Sequence / 30080100 / SQ
  "RecordedSourceSequence" |
  // Source Serial Number / 30080105 / LO
  "SourceSerialNumber" |
  // Treatment Session Application Setup Sequence / 30080110 / SQ
  "TreatmentSessionApplicationSetupSequence" |
  // Application Setup Check / 30080116 / CS
  "ApplicationSetupCheck" |
  // Recorded Brachy Accessory Device Sequence / 30080120 / SQ
  "RecordedBrachyAccessoryDeviceSequence" |
  // Referenced Brachy Accessory Device Number / 30080122 / IS
  "ReferencedBrachyAccessoryDeviceNumber" |
  // Recorded Channel Sequence / 30080130 / SQ
  "RecordedChannelSequence" |
  // Specified Channel Total Time / 30080132 / DS
  "SpecifiedChannelTotalTime" |
  // Delivered Channel Total Time / 30080134 / DS
  "DeliveredChannelTotalTime" |
  // Specified Number of Pulses / 30080136 / IS
  "SpecifiedNumberOfPulses" |
  // Delivered Number of Pulses / 30080138 / IS
  "DeliveredNumberOfPulses" |
  // Specified Pulse Repetition Interval / 3008013A / DS
  "SpecifiedPulseRepetitionInterval" |
  // Delivered Pulse Repetition Interval / 3008013C / DS
  "DeliveredPulseRepetitionInterval" |
  // Recorded Source Applicator Sequence / 30080140 / SQ
  "RecordedSourceApplicatorSequence" |
  // Referenced Source Applicator Number / 30080142 / IS
  "ReferencedSourceApplicatorNumber" |
  // Recorded Channel Shield Sequence / 30080150 / SQ
  "RecordedChannelShieldSequence" |
  // Referenced Channel Shield Number / 30080152 / IS
  "ReferencedChannelShieldNumber" |
  // Brachy Control Point Delivered Sequence / 30080160 / SQ
  "BrachyControlPointDeliveredSequence" |
  // Safe Position Exit Date / 30080162 / DA
  "SafePositionExitDate" |
  // Safe Position Exit Time / 30080164 / TM
  "SafePositionExitTime" |
  // Safe Position Return Date / 30080166 / DA
  "SafePositionReturnDate" |
  // Safe Position Return Time / 30080168 / TM
  "SafePositionReturnTime" |
  // Pulse Specific Brachy Control Point Delivered Sequence / 30080171 / SQ
  "PulseSpecificBrachyControlPointDeliveredSequence" |
  // Pulse Number / 30080172 / US
  "PulseNumber" |
  // Brachy Pulse Control Point Delivered Sequence / 30080173 / SQ
  "BrachyPulseControlPointDeliveredSequence" |
  // Current Treatment Status / 30080200 / CS
  "CurrentTreatmentStatus" |
  // Treatment Status Comment / 30080202 / ST
  "TreatmentStatusComment" |
  // Fraction Group Summary Sequence / 30080220 / SQ
  "FractionGroupSummarySequence" |
  // Referenced Fraction Number / 30080223 / IS
  "ReferencedFractionNumber" |
  // Fraction Group Type / 30080224 / CS
  "FractionGroupType" |
  // Beam Stopper Position / 30080230 / CS
  "BeamStopperPosition" |
  // Fraction Status Summary Sequence / 30080240 / SQ
  "FractionStatusSummarySequence" |
  // Treatment Date / 30080250 / DA
  "TreatmentDate" |
  // Treatment Time / 30080251 / TM
  "TreatmentTime" |
  // RT Plan Label / 300A0002 / SH
  "RTPlanLabel" |
  // RT Plan Name / 300A0003 / LO
  "RTPlanName" |
  // RT Plan Description / 300A0004 / ST
  "RTPlanDescription" |
  // RT Plan Date / 300A0006 / DA
  "RTPlanDate" |
  // RT Plan Time / 300A0007 / TM
  "RTPlanTime" |
  // Treatment Protocols / 300A0009 / LO
  "TreatmentProtocols" |
  // Plan Intent / 300A000A / CS
  "PlanIntent" |
  // Treatment Sites / 300A000B / LO
  "TreatmentSites" |
  // RT Plan Geometry / 300A000C / CS
  "RTPlanGeometry" |
  // Prescription Description / 300A000E / ST
  "PrescriptionDescription" |
  // Dose Reference Sequence / 300A0010 / SQ
  "DoseReferenceSequence" |
  // Dose Reference Number / 300A0012 / IS
  "DoseReferenceNumber" |
  // Dose Reference UID / 300A0013 / UI
  "DoseReferenceUID" |
  // Dose Reference Structure Type / 300A0014 / CS
  "DoseReferenceStructureType" |
  // Nominal Beam Energy Unit / 300A0015 / CS
  "NominalBeamEnergyUnit" |
  // Dose Reference Description / 300A0016 / LO
  "DoseReferenceDescription" |
  // Dose Reference Point Coordinates / 300A0018 / DS
  "DoseReferencePointCoordinates" |
  // Nominal Prior Dose / 300A001A / DS
  "NominalPriorDose" |
  // Dose Reference Type / 300A0020 / CS
  "DoseReferenceType" |
  // Constraint Weight / 300A0021 / DS
  "ConstraintWeight" |
  // Delivery Warning Dose / 300A0022 / DS
  "DeliveryWarningDose" |
  // Delivery Maximum Dose / 300A0023 / DS
  "DeliveryMaximumDose" |
  // Target Minimum Dose / 300A0025 / DS
  "TargetMinimumDose" |
  // Target Prescription Dose / 300A0026 / DS
  "TargetPrescriptionDose" |
  // Target Maximum Dose / 300A0027 / DS
  "TargetMaximumDose" |
  // Target Underdose Volume Fraction / 300A0028 / DS
  "TargetUnderdoseVolumeFraction" |
  // Organ at Risk Full-volume Dose / 300A002A / DS
  "OrganAtRiskFullVolumeDose" |
  // Organ at Risk Limit Dose / 300A002B / DS
  "OrganAtRiskLimitDose" |
  // Organ at Risk Maximum Dose / 300A002C / DS
  "OrganAtRiskMaximumDose" |
  // Organ at Risk Overdose Volume Fraction / 300A002D / DS
  "OrganAtRiskOverdoseVolumeFraction" |
  // Tolerance Table Sequence / 300A0040 / SQ
  "ToleranceTableSequence" |
  // Tolerance Table Number / 300A0042 / IS
  "ToleranceTableNumber" |
  // Tolerance Table Label / 300A0043 / SH
  "ToleranceTableLabel" |
  // Gantry Angle Tolerance / 300A0044 / DS
  "GantryAngleTolerance" |
  // Beam Limiting Device Angle Tolerance / 300A0046 / DS
  "BeamLimitingDeviceAngleTolerance" |
  // Beam Limiting Device Tolerance Sequence / 300A0048 / SQ
  "BeamLimitingDeviceToleranceSequence" |
  // Beam Limiting Device Position Tolerance / 300A004A / DS
  "BeamLimitingDevicePositionTolerance" |
  // Snout Position Tolerance / 300A004B / FL
  "SnoutPositionTolerance" |
  // Patient Support Angle Tolerance / 300A004C / DS
  "PatientSupportAngleTolerance" |
  // Table Top Eccentric Angle Tolerance / 300A004E / DS
  "TableTopEccentricAngleTolerance" |
  // Table Top Pitch Angle Tolerance / 300A004F / FL
  "TableTopPitchAngleTolerance" |
  // Table Top Roll Angle Tolerance / 300A0050 / FL
  "TableTopRollAngleTolerance" |
  // Table Top Vertical Position Tolerance / 300A0051 / DS
  "TableTopVerticalPositionTolerance" |
  // Table Top Longitudinal Position Tolerance / 300A0052 / DS
  "TableTopLongitudinalPositionTolerance" |
  // Table Top Lateral Position Tolerance / 300A0053 / DS
  "TableTopLateralPositionTolerance" |
  // RT Plan Relationship / 300A0055 / CS
  "RTPlanRelationship" |
  // Fraction Group Sequence / 300A0070 / SQ
  "FractionGroupSequence" |
  // Fraction Group Number / 300A0071 / IS
  "FractionGroupNumber" |
  // Fraction Group Description / 300A0072 / LO
  "FractionGroupDescription" |
  // Number of Fractions Planned / 300A0078 / IS
  "NumberOfFractionsPlanned" |
  // Number of Fraction Pattern Digits Per Day / 300A0079 / IS
  "NumberOfFractionPatternDigitsPerDay" |
  // Repeat Fraction Cycle Length / 300A007A / IS
  "RepeatFractionCycleLength" |
  // Fraction Pattern / 300A007B / LT
  "FractionPattern" |
  // Number of Beams / 300A0080 / IS
  "NumberOfBeams" |
  // Beam Dose Specification Point / 300A0082 / DS
  "BeamDoseSpecificationPoint" |
  // Referenced Dose Reference UID / 300A0083 / UI
  "ReferencedDoseReferenceUID" |
  // Beam Dose / 300A0084 / DS
  "BeamDose" |
  // Beam Meterset / 300A0086 / DS
  "BeamMeterset" |
  // Beam Dose Point Depth / 300A0088 / FL
  "BeamDosePointDepth" |
  // Beam Dose Point Equivalent Depth / 300A0089 / FL
  "BeamDosePointEquivalentDepth" |
  // Beam Dose Point SSD / 300A008A / FL
  "BeamDosePointSSD" |
  // Beam Dose Meaning / 300A008B / CS
  "BeamDoseMeaning" |
  // Beam Dose Verification Control Point Sequence / 300A008C / SQ
  "BeamDoseVerificationControlPointSequence" |
  // Average Beam Dose Point Depth / 300A008D / FL
  "AverageBeamDosePointDepth" |
  // Average Beam Dose Point Equivalent Depth / 300A008E / FL
  "AverageBeamDosePointEquivalentDepth" |
  // Average Beam Dose Point SSD / 300A008F / FL
  "AverageBeamDosePointSSD" |
  // Beam Dose Type / 300A0090 / CS
  "BeamDoseType" |
  // Alternate Beam Dose / 300A0091 / DS
  "AlternateBeamDose" |
  // Alternate Beam Dose Type / 300A0092 / CS
  "AlternateBeamDoseType" |
  // Depth Value Averaging Flag / 300A0093 / CS
  "DepthValueAveragingFlag" |
  // Beam Dose Point Source to External Contour Distance / 300A0094 / DS
  "BeamDosePointSourceToExternalContourDistance" |
  // Number of Brachy Application Setups / 300A00A0 / IS
  "NumberOfBrachyApplicationSetups" |
  // Brachy Application Setup Dose Specification Point / 300A00A2 / DS
  "BrachyApplicationSetupDoseSpecificationPoint" |
  // Brachy Application Setup Dose / 300A00A4 / DS
  "BrachyApplicationSetupDose" |
  // Beam Sequence / 300A00B0 / SQ
  "BeamSequence" |
  // Treatment Machine Name / 300A00B2 / SH
  "TreatmentMachineName" |
  // Primary Dosimeter Unit / 300A00B3 / CS
  "PrimaryDosimeterUnit" |
  // Source-Axis Distance / 300A00B4 / DS
  "SourceAxisDistance" |
  // Beam Limiting Device Sequence / 300A00B6 / SQ
  "BeamLimitingDeviceSequence" |
  // RT Beam Limiting Device Type / 300A00B8 / CS
  "RTBeamLimitingDeviceType" |
  // Source to Beam Limiting Device Distance / 300A00BA / DS
  "SourceToBeamLimitingDeviceDistance" |
  // Isocenter to Beam Limiting Device Distance / 300A00BB / FL
  "IsocenterToBeamLimitingDeviceDistance" |
  // Number of Leaf/Jaw Pairs / 300A00BC / IS
  "NumberOfLeafJawPairs" |
  // Leaf Position Boundaries / 300A00BE / DS
  "LeafPositionBoundaries" |
  // Beam Number / 300A00C0 / IS
  "BeamNumber" |
  // Beam Name / 300A00C2 / LO
  "BeamName" |
  // Beam Description / 300A00C3 / ST
  "BeamDescription" |
  // Beam Type / 300A00C4 / CS
  "BeamType" |
  // Beam Delivery Duration Limit / 300A00C5 / FD
  "BeamDeliveryDurationLimit" |
  // Radiation Type / 300A00C6 / CS
  "RadiationType" |
  // High-Dose Technique Type / 300A00C7 / CS
  "HighDoseTechniqueType" |
  // Reference Image Number / 300A00C8 / IS
  "ReferenceImageNumber" |
  // Planned Verification Image Sequence / 300A00CA / SQ
  "PlannedVerificationImageSequence" |
  // Imaging Device-Specific Acquisition Parameters / 300A00CC / LO
  "ImagingDeviceSpecificAcquisitionParameters" |
  // Treatment Delivery Type / 300A00CE / CS
  "TreatmentDeliveryType" |
  // Number of Wedges / 300A00D0 / IS
  "NumberOfWedges" |
  // Wedge Sequence / 300A00D1 / SQ
  "WedgeSequence" |
  // Wedge Number / 300A00D2 / IS
  "WedgeNumber" |
  // Wedge Type / 300A00D3 / CS
  "WedgeType" |
  // Wedge ID / 300A00D4 / SH
  "WedgeID" |
  // Wedge Angle / 300A00D5 / IS
  "WedgeAngle" |
  // Wedge Factor / 300A00D6 / DS
  "WedgeFactor" |
  // Total Wedge Tray Water-Equivalent Thickness / 300A00D7 / FL
  "TotalWedgeTrayWaterEquivalentThickness" |
  // Wedge Orientation / 300A00D8 / DS
  "WedgeOrientation" |
  // Isocenter to Wedge Tray Distance / 300A00D9 / FL
  "IsocenterToWedgeTrayDistance" |
  // Source to Wedge Tray Distance / 300A00DA / DS
  "SourceToWedgeTrayDistance" |
  // Wedge Thin Edge Position / 300A00DB / FL
  "WedgeThinEdgePosition" |
  // Bolus ID / 300A00DC / SH
  "BolusID" |
  // Bolus Description / 300A00DD / ST
  "BolusDescription" |
  // Effective Wedge Angle / 300A00DE / DS
  "EffectiveWedgeAngle" |
  // Number of Compensators / 300A00E0 / IS
  "NumberOfCompensators" |
  // Material ID / 300A00E1 / SH
  "MaterialID" |
  // Total Compensator Tray Factor / 300A00E2 / DS
  "TotalCompensatorTrayFactor" |
  // Compensator Sequence / 300A00E3 / SQ
  "CompensatorSequence" |
  // Compensator Number / 300A00E4 / IS
  "CompensatorNumber" |
  // Compensator ID / 300A00E5 / SH
  "CompensatorID" |
  // Source to Compensator Tray Distance / 300A00E6 / DS
  "SourceToCompensatorTrayDistance" |
  // Compensator Rows / 300A00E7 / IS
  "CompensatorRows" |
  // Compensator Columns / 300A00E8 / IS
  "CompensatorColumns" |
  // Compensator Pixel Spacing / 300A00E9 / DS
  "CompensatorPixelSpacing" |
  // Compensator Position / 300A00EA / DS
  "CompensatorPosition" |
  // Compensator Transmission Data / 300A00EB / DS
  "CompensatorTransmissionData" |
  // Compensator Thickness Data / 300A00EC / DS
  "CompensatorThicknessData" |
  // Number of Boli / 300A00ED / IS
  "NumberOfBoli" |
  // Compensator Type / 300A00EE / CS
  "CompensatorType" |
  // Compensator Tray ID / 300A00EF / SH
  "CompensatorTrayID" |
  // Number of Blocks / 300A00F0 / IS
  "NumberOfBlocks" |
  // Total Block Tray Factor / 300A00F2 / DS
  "TotalBlockTrayFactor" |
  // Total Block Tray Water-Equivalent Thickness / 300A00F3 / FL
  "TotalBlockTrayWaterEquivalentThickness" |
  // Block Sequence / 300A00F4 / SQ
  "BlockSequence" |
  // Block Tray ID / 300A00F5 / SH
  "BlockTrayID" |
  // Source to Block Tray Distance / 300A00F6 / DS
  "SourceToBlockTrayDistance" |
  // Isocenter to Block Tray Distance / 300A00F7 / FL
  "IsocenterToBlockTrayDistance" |
  // Block Type / 300A00F8 / CS
  "BlockType" |
  // Accessory Code / 300A00F9 / LO
  "AccessoryCode" |
  // Block Divergence / 300A00FA / CS
  "BlockDivergence" |
  // Block Mounting Position / 300A00FB / CS
  "BlockMountingPosition" |
  // Block Number / 300A00FC / IS
  "BlockNumber" |
  // Block Name / 300A00FE / LO
  "BlockName" |
  // Block Thickness / 300A0100 / DS
  "BlockThickness" |
  // Block Transmission / 300A0102 / DS
  "BlockTransmission" |
  // Block Number of Points / 300A0104 / IS
  "BlockNumberOfPoints" |
  // Block Data / 300A0106 / DS
  "BlockData" |
  // Applicator Sequence / 300A0107 / SQ
  "ApplicatorSequence" |
  // Applicator ID / 300A0108 / SH
  "ApplicatorID" |
  // Applicator Type / 300A0109 / CS
  "ApplicatorType" |
  // Applicator Description / 300A010A / LO
  "ApplicatorDescription" |
  // Cumulative Dose Reference Coefficient / 300A010C / DS
  "CumulativeDoseReferenceCoefficient" |
  // Final Cumulative Meterset Weight / 300A010E / DS
  "FinalCumulativeMetersetWeight" |
  // Number of Control Points / 300A0110 / IS
  "NumberOfControlPoints" |
  // Control Point Sequence / 300A0111 / SQ
  "ControlPointSequence" |
  // Control Point Index / 300A0112 / IS
  "ControlPointIndex" |
  // Nominal Beam Energy / 300A0114 / DS
  "NominalBeamEnergy" |
  // Dose Rate Set / 300A0115 / DS
  "DoseRateSet" |
  // Wedge Position Sequence / 300A0116 / SQ
  "WedgePositionSequence" |
  // Wedge Position / 300A0118 / CS
  "WedgePosition" |
  // Beam Limiting Device Position Sequence / 300A011A / SQ
  "BeamLimitingDevicePositionSequence" |
  // Leaf/Jaw Positions / 300A011C / DS
  "LeafJawPositions" |
  // Gantry Angle / 300A011E / DS
  "GantryAngle" |
  // Gantry Rotation Direction / 300A011F / CS
  "GantryRotationDirection" |
  // Beam Limiting Device Angle / 300A0120 / DS
  "BeamLimitingDeviceAngle" |
  // Beam Limiting Device Rotation Direction / 300A0121 / CS
  "BeamLimitingDeviceRotationDirection" |
  // Patient Support Angle / 300A0122 / DS
  "PatientSupportAngle" |
  // Patient Support Rotation Direction / 300A0123 / CS
  "PatientSupportRotationDirection" |
  // Table Top Eccentric Axis Distance / 300A0124 / DS
  "TableTopEccentricAxisDistance" |
  // Table Top Eccentric Angle / 300A0125 / DS
  "TableTopEccentricAngle" |
  // Table Top Eccentric Rotation Direction / 300A0126 / CS
  "TableTopEccentricRotationDirection" |
  // Table Top Vertical Position / 300A0128 / DS
  "TableTopVerticalPosition" |
  // Table Top Longitudinal Position / 300A0129 / DS
  "TableTopLongitudinalPosition" |
  // Table Top Lateral Position / 300A012A / DS
  "TableTopLateralPosition" |
  // Isocenter Position / 300A012C / DS
  "IsocenterPosition" |
  // Surface Entry Point / 300A012E / DS
  "SurfaceEntryPoint" |
  // Source to Surface Distance / 300A0130 / DS
  "SourceToSurfaceDistance" |
  // Average Beam Dose Point Source to External Contour Distance / 300A0131 / FL
  "AverageBeamDosePointSourceToExternalContourDistance" |
  // Source to External Contour Distance / 300A0132 / FL
  "SourceToExternalContourDistance" |
  // External Contour Entry Point / 300A0133 / FL
  "ExternalContourEntryPoint" |
  // Cumulative Meterset Weight / 300A0134 / DS
  "CumulativeMetersetWeight" |
  // Table Top Pitch Angle / 300A0140 / FL
  "TableTopPitchAngle" |
  // Table Top Pitch Rotation Direction / 300A0142 / CS
  "TableTopPitchRotationDirection" |
  // Table Top Roll Angle / 300A0144 / FL
  "TableTopRollAngle" |
  // Table Top Roll Rotation Direction / 300A0146 / CS
  "TableTopRollRotationDirection" |
  // Head Fixation Angle / 300A0148 / FL
  "HeadFixationAngle" |
  // Gantry Pitch Angle / 300A014A / FL
  "GantryPitchAngle" |
  // Gantry Pitch Rotation Direction / 300A014C / CS
  "GantryPitchRotationDirection" |
  // Gantry Pitch Angle Tolerance / 300A014E / FL
  "GantryPitchAngleTolerance" |
  // Fixation Eye / 300A0150 / CS
  "FixationEye" |
  // Chair Head Frame Position / 300A0151 / DS
  "ChairHeadFramePosition" |
  // Head Fixation Angle Tolerance / 300A0152 / DS
  "HeadFixationAngleTolerance" |
  // Chair Head Frame Position Tolerance / 300A0153 / DS
  "ChairHeadFramePositionTolerance" |
  // Fixation Light Azimuthal Angle Tolerance / 300A0154 / DS
  "FixationLightAzimuthalAngleTolerance" |
  // Fixation Light Polar Angle Tolerance / 300A0155 / DS
  "FixationLightPolarAngleTolerance" |
  // Patient Setup Sequence / 300A0180 / SQ
  "PatientSetupSequence" |
  // Patient Setup Number / 300A0182 / IS
  "PatientSetupNumber" |
  // Patient Setup Label / 300A0183 / LO
  "PatientSetupLabel" |
  // Patient Additional Position / 300A0184 / LO
  "PatientAdditionalPosition" |
  // Fixation Device Sequence / 300A0190 / SQ
  "FixationDeviceSequence" |
  // Fixation Device Type / 300A0192 / CS
  "FixationDeviceType" |
  // Fixation Device Label / 300A0194 / SH
  "FixationDeviceLabel" |
  // Fixation Device Description / 300A0196 / ST
  "FixationDeviceDescription" |
  // Fixation Device Position / 300A0198 / SH
  "FixationDevicePosition" |
  // Fixation Device Pitch Angle / 300A0199 / FL
  "FixationDevicePitchAngle" |
  // Fixation Device Roll Angle / 300A019A / FL
  "FixationDeviceRollAngle" |
  // Shielding Device Sequence / 300A01A0 / SQ
  "ShieldingDeviceSequence" |
  // Shielding Device Type / 300A01A2 / CS
  "ShieldingDeviceType" |
  // Shielding Device Label / 300A01A4 / SH
  "ShieldingDeviceLabel" |
  // Shielding Device Description / 300A01A6 / ST
  "ShieldingDeviceDescription" |
  // Shielding Device Position / 300A01A8 / SH
  "ShieldingDevicePosition" |
  // Setup Technique / 300A01B0 / CS
  "SetupTechnique" |
  // Setup Technique Description / 300A01B2 / ST
  "SetupTechniqueDescription" |
  // Setup Device Sequence / 300A01B4 / SQ
  "SetupDeviceSequence" |
  // Setup Device Type / 300A01B6 / CS
  "SetupDeviceType" |
  // Setup Device Label / 300A01B8 / SH
  "SetupDeviceLabel" |
  // Setup Device Description / 300A01BA / ST
  "SetupDeviceDescription" |
  // Setup Device Parameter / 300A01BC / DS
  "SetupDeviceParameter" |
  // Setup Reference Description / 300A01D0 / ST
  "SetupReferenceDescription" |
  // Table Top Vertical Setup Displacement / 300A01D2 / DS
  "TableTopVerticalSetupDisplacement" |
  // Table Top Longitudinal Setup Displacement / 300A01D4 / DS
  "TableTopLongitudinalSetupDisplacement" |
  // Table Top Lateral Setup Displacement / 300A01D6 / DS
  "TableTopLateralSetupDisplacement" |
  // Brachy Treatment Technique / 300A0200 / CS
  "BrachyTreatmentTechnique" |
  // Brachy Treatment Type / 300A0202 / CS
  "BrachyTreatmentType" |
  // Treatment Machine Sequence / 300A0206 / SQ
  "TreatmentMachineSequence" |
  // Source Sequence / 300A0210 / SQ
  "SourceSequence" |
  // Source Number / 300A0212 / IS
  "SourceNumber" |
  // Source Type / 300A0214 / CS
  "SourceType" |
  // Source Manufacturer / 300A0216 / LO
  "SourceManufacturer" |
  // Active Source Diameter / 300A0218 / DS
  "ActiveSourceDiameter" |
  // Active Source Length / 300A021A / DS
  "ActiveSourceLength" |
  // Source Model ID / 300A021B / SH
  "SourceModelID" |
  // Source Description / 300A021C / LO
  "SourceDescription" |
  // Source Encapsulation Nominal Thickness / 300A0222 / DS
  "SourceEncapsulationNominalThickness" |
  // Source Encapsulation Nominal Transmission / 300A0224 / DS
  "SourceEncapsulationNominalTransmission" |
  // Source Isotope Name / 300A0226 / LO
  "SourceIsotopeName" |
  // Source Isotope Half Life / 300A0228 / DS
  "SourceIsotopeHalfLife" |
  // Source Strength Units / 300A0229 / CS
  "SourceStrengthUnits" |
  // Reference Air Kerma Rate / 300A022A / DS
  "ReferenceAirKermaRate" |
  // Source Strength / 300A022B / DS
  "SourceStrength" |
  // Source Strength Reference Date / 300A022C / DA
  "SourceStrengthReferenceDate" |
  // Source Strength Reference Time / 300A022E / TM
  "SourceStrengthReferenceTime" |
  // Application Setup Sequence / 300A0230 / SQ
  "ApplicationSetupSequence" |
  // Application Setup Type / 300A0232 / CS
  "ApplicationSetupType" |
  // Application Setup Number / 300A0234 / IS
  "ApplicationSetupNumber" |
  // Application Setup Name / 300A0236 / LO
  "ApplicationSetupName" |
  // Application Setup Manufacturer / 300A0238 / LO
  "ApplicationSetupManufacturer" |
  // Template Number / 300A0240 / IS
  "TemplateNumber" |
  // Template Type / 300A0242 / SH
  "TemplateType" |
  // Template Name / 300A0244 / LO
  "TemplateName" |
  // Total Reference Air Kerma / 300A0250 / DS
  "TotalReferenceAirKerma" |
  // Brachy Accessory Device Sequence / 300A0260 / SQ
  "BrachyAccessoryDeviceSequence" |
  // Brachy Accessory Device Number / 300A0262 / IS
  "BrachyAccessoryDeviceNumber" |
  // Brachy Accessory Device ID / 300A0263 / SH
  "BrachyAccessoryDeviceID" |
  // Brachy Accessory Device Type / 300A0264 / CS
  "BrachyAccessoryDeviceType" |
  // Brachy Accessory Device Name / 300A0266 / LO
  "BrachyAccessoryDeviceName" |
  // Brachy Accessory Device Nominal Thickness / 300A026A / DS
  "BrachyAccessoryDeviceNominalThickness" |
  // Brachy Accessory Device Nominal Transmission / 300A026C / DS
  "BrachyAccessoryDeviceNominalTransmission" |
  // Channel Effective Length / 300A0271 / DS
  "ChannelEffectiveLength" |
  // Channel Inner Length / 300A0272 / DS
  "ChannelInnerLength" |
  // Afterloader Channel ID / 300A0273 / SH
  "AfterloaderChannelID" |
  // Source Applicator Tip Length / 300A0274 / DS
  "SourceApplicatorTipLength" |
  // Channel Sequence / 300A0280 / SQ
  "ChannelSequence" |
  // Channel Number / 300A0282 / IS
  "ChannelNumber" |
  // Channel Length / 300A0284 / DS
  "ChannelLength" |
  // Channel Total Time / 300A0286 / DS
  "ChannelTotalTime" |
  // Source Movement Type / 300A0288 / CS
  "SourceMovementType" |
  // Number of Pulses / 300A028A / IS
  "NumberOfPulses" |
  // Pulse Repetition Interval / 300A028C / DS
  "PulseRepetitionInterval" |
  // Source Applicator Number / 300A0290 / IS
  "SourceApplicatorNumber" |
  // Source Applicator ID / 300A0291 / SH
  "SourceApplicatorID" |
  // Source Applicator Type / 300A0292 / CS
  "SourceApplicatorType" |
  // Source Applicator Name / 300A0294 / LO
  "SourceApplicatorName" |
  // Source Applicator Length / 300A0296 / DS
  "SourceApplicatorLength" |
  // Source Applicator Manufacturer / 300A0298 / LO
  "SourceApplicatorManufacturer" |
  // Source Applicator Wall Nominal Thickness / 300A029C / DS
  "SourceApplicatorWallNominalThickness" |
  // Source Applicator Wall Nominal Transmission / 300A029E / DS
  "SourceApplicatorWallNominalTransmission" |
  // Source Applicator Step Size / 300A02A0 / DS
  "SourceApplicatorStepSize" |
  // Applicator Shape Referenced ROI Number / 300A02A1 / IS
  "ApplicatorShapeReferencedROINumber" |
  // Transfer Tube Number / 300A02A2 / IS
  "TransferTubeNumber" |
  // Transfer Tube Length / 300A02A4 / DS
  "TransferTubeLength" |
  // Channel Shield Sequence / 300A02B0 / SQ
  "ChannelShieldSequence" |
  // Channel Shield Number / 300A02B2 / IS
  "ChannelShieldNumber" |
  // Channel Shield ID / 300A02B3 / SH
  "ChannelShieldID" |
  // Channel Shield Name / 300A02B4 / LO
  "ChannelShieldName" |
  // Channel Shield Nominal Thickness / 300A02B8 / DS
  "ChannelShieldNominalThickness" |
  // Channel Shield Nominal Transmission / 300A02BA / DS
  "ChannelShieldNominalTransmission" |
  // Final Cumulative Time Weight / 300A02C8 / DS
  "FinalCumulativeTimeWeight" |
  // Brachy Control Point Sequence / 300A02D0 / SQ
  "BrachyControlPointSequence" |
  // Control Point Relative Position / 300A02D2 / DS
  "ControlPointRelativePosition" |
  // Control Point 3D Position / 300A02D4 / DS
  "ControlPoint3DPosition" |
  // Cumulative Time Weight / 300A02D6 / DS
  "CumulativeTimeWeight" |
  // Compensator Divergence / 300A02E0 / CS
  "CompensatorDivergence" |
  // Compensator Mounting Position / 300A02E1 / CS
  "CompensatorMountingPosition" |
  // Source to Compensator Distance / 300A02E2 / DS
  "SourceToCompensatorDistance" |
  // Total Compensator Tray Water-Equivalent Thickness / 300A02E3 / FL
  "TotalCompensatorTrayWaterEquivalentThickness" |
  // Isocenter to Compensator Tray Distance / 300A02E4 / FL
  "IsocenterToCompensatorTrayDistance" |
  // Compensator Column Offset / 300A02E5 / FL
  "CompensatorColumnOffset" |
  // Isocenter to Compensator Distances / 300A02E6 / FL
  "IsocenterToCompensatorDistances" |
  // Compensator Relative Stopping Power Ratio / 300A02E7 / FL
  "CompensatorRelativeStoppingPowerRatio" |
  // Compensator Milling Tool Diameter / 300A02E8 / FL
  "CompensatorMillingToolDiameter" |
  // Ion Range Compensator Sequence / 300A02EA / SQ
  "IonRangeCompensatorSequence" |
  // Compensator Description / 300A02EB / LT
  "CompensatorDescription" |
  // Radiation Mass Number / 300A0302 / IS
  "RadiationMassNumber" |
  // Radiation Atomic Number / 300A0304 / IS
  "RadiationAtomicNumber" |
  // Radiation Charge State / 300A0306 / SS
  "RadiationChargeState" |
  // Scan Mode / 300A0308 / CS
  "ScanMode" |
  // Modulated Scan Mode Type / 300A0309 / CS
  "ModulatedScanModeType" |
  // Virtual Source-Axis Distances / 300A030A / FL
  "VirtualSourceAxisDistances" |
  // Snout Sequence / 300A030C / SQ
  "SnoutSequence" |
  // Snout Position / 300A030D / FL
  "SnoutPosition" |
  // Snout ID / 300A030F / SH
  "SnoutID" |
  // Number of Range Shifters / 300A0312 / IS
  "NumberOfRangeShifters" |
  // Range Shifter Sequence / 300A0314 / SQ
  "RangeShifterSequence" |
  // Range Shifter Number / 300A0316 / IS
  "RangeShifterNumber" |
  // Range Shifter ID / 300A0318 / SH
  "RangeShifterID" |
  // Range Shifter Type / 300A0320 / CS
  "RangeShifterType" |
  // Range Shifter Description / 300A0322 / LO
  "RangeShifterDescription" |
  // Number of Lateral Spreading Devices / 300A0330 / IS
  "NumberOfLateralSpreadingDevices" |
  // Lateral Spreading Device Sequence / 300A0332 / SQ
  "LateralSpreadingDeviceSequence" |
  // Lateral Spreading Device Number / 300A0334 / IS
  "LateralSpreadingDeviceNumber" |
  // Lateral Spreading Device ID / 300A0336 / SH
  "LateralSpreadingDeviceID" |
  // Lateral Spreading Device Type / 300A0338 / CS
  "LateralSpreadingDeviceType" |
  // Lateral Spreading Device Description / 300A033A / LO
  "LateralSpreadingDeviceDescription" |
  // Lateral Spreading Device Water Equivalent Thickness / 300A033C / FL
  "LateralSpreadingDeviceWaterEquivalentThickness" |
  // Number of Range Modulators / 300A0340 / IS
  "NumberOfRangeModulators" |
  // Range Modulator Sequence / 300A0342 / SQ
  "RangeModulatorSequence" |
  // Range Modulator Number / 300A0344 / IS
  "RangeModulatorNumber" |
  // Range Modulator ID / 300A0346 / SH
  "RangeModulatorID" |
  // Range Modulator Type / 300A0348 / CS
  "RangeModulatorType" |
  // Range Modulator Description / 300A034A / LO
  "RangeModulatorDescription" |
  // Beam Current Modulation ID / 300A034C / SH
  "BeamCurrentModulationID" |
  // Patient Support Type / 300A0350 / CS
  "PatientSupportType" |
  // Patient Support ID / 300A0352 / SH
  "PatientSupportID" |
  // Patient Support Accessory Code / 300A0354 / LO
  "PatientSupportAccessoryCode" |
  // Tray Accessory Code / 300A0355 / LO
  "TrayAccessoryCode" |
  // Fixation Light Azimuthal Angle / 300A0356 / FL
  "FixationLightAzimuthalAngle" |
  // Fixation Light Polar Angle / 300A0358 / FL
  "FixationLightPolarAngle" |
  // Meterset Rate / 300A035A / FL
  "MetersetRate" |
  // Range Shifter Settings Sequence / 300A0360 / SQ
  "RangeShifterSettingsSequence" |
  // Range Shifter Setting / 300A0362 / LO
  "RangeShifterSetting" |
  // Isocenter to Range Shifter Distance / 300A0364 / FL
  "IsocenterToRangeShifterDistance" |
  // Range Shifter Water Equivalent Thickness / 300A0366 / FL
  "RangeShifterWaterEquivalentThickness" |
  // Lateral Spreading Device Settings Sequence / 300A0370 / SQ
  "LateralSpreadingDeviceSettingsSequence" |
  // Lateral Spreading Device Setting / 300A0372 / LO
  "LateralSpreadingDeviceSetting" |
  // Isocenter to Lateral Spreading Device Distance / 300A0374 / FL
  "IsocenterToLateralSpreadingDeviceDistance" |
  // Range Modulator Settings Sequence / 300A0380 / SQ
  "RangeModulatorSettingsSequence" |
  // Range Modulator Gating Start Value / 300A0382 / FL
  "RangeModulatorGatingStartValue" |
  // Range Modulator Gating Stop Value / 300A0384 / FL
  "RangeModulatorGatingStopValue" |
  // Range Modulator Gating Start Water Equivalent Thickness / 300A0386 / FL
  "RangeModulatorGatingStartWaterEquivalentThickness" |
  // Range Modulator Gating Stop Water Equivalent Thickness / 300A0388 / FL
  "RangeModulatorGatingStopWaterEquivalentThickness" |
  // Isocenter to Range Modulator Distance / 300A038A / FL
  "IsocenterToRangeModulatorDistance" |
  // Scan Spot Time Offset / 300A038F / FL
  "ScanSpotTimeOffset" |
  // Scan Spot Tune ID / 300A0390 / SH
  "ScanSpotTuneID" |
  // Scan Spot Prescribed Indices / 300A0391 / IS
  "ScanSpotPrescribedIndices" |
  // Number of Scan Spot Positions / 300A0392 / IS
  "NumberOfScanSpotPositions" |
  // Scan Spot Reordered / 300A0393 / CS
  "ScanSpotReordered" |
  // Scan Spot Position Map / 300A0394 / FL
  "ScanSpotPositionMap" |
  // Scan Spot Reordering Allowed / 300A0395 / CS
  "ScanSpotReorderingAllowed" |
  // Scan Spot Meterset Weights / 300A0396 / FL
  "ScanSpotMetersetWeights" |
  // Scanning Spot Size / 300A0398 / FL
  "ScanningSpotSize" |
  // Scan Spot Sizes Delivered / 300A0399 / FL
  "ScanSpotSizesDelivered" |
  // Number of Paintings / 300A039A / IS
  "NumberOfPaintings" |
  // Ion Tolerance Table Sequence / 300A03A0 / SQ
  "IonToleranceTableSequence" |
  // Ion Beam Sequence / 300A03A2 / SQ
  "IonBeamSequence" |
  // Ion Beam Limiting Device Sequence / 300A03A4 / SQ
  "IonBeamLimitingDeviceSequence" |
  // Ion Block Sequence / 300A03A6 / SQ
  "IonBlockSequence" |
  // Ion Control Point Sequence / 300A03A8 / SQ
  "IonControlPointSequence" |
  // Ion Wedge Sequence / 300A03AA / SQ
  "IonWedgeSequence" |
  // Ion Wedge Position Sequence / 300A03AC / SQ
  "IonWedgePositionSequence" |
  // Referenced Setup Image Sequence / 300A0401 / SQ
  "ReferencedSetupImageSequence" |
  // Setup Image Comment / 300A0402 / ST
  "SetupImageComment" |
  // Motion Synchronization Sequence / 300A0410 / SQ
  "MotionSynchronizationSequence" |
  // Control Point Orientation / 300A0412 / FL
  "ControlPointOrientation" |
  // General Accessory Sequence / 300A0420 / SQ
  "GeneralAccessorySequence" |
  // General Accessory ID / 300A0421 / SH
  "GeneralAccessoryID" |
  // General Accessory Description / 300A0422 / ST
  "GeneralAccessoryDescription" |
  // General Accessory Type / 300A0423 / CS
  "GeneralAccessoryType" |
  // General Accessory Number / 300A0424 / IS
  "GeneralAccessoryNumber" |
  // Source to General Accessory Distance / 300A0425 / FL
  "SourceToGeneralAccessoryDistance" |
  // Isocenter to General Accessory Distance / 300A0426 / DS
  "IsocenterToGeneralAccessoryDistance" |
  // Applicator Geometry Sequence / 300A0431 / SQ
  "ApplicatorGeometrySequence" |
  // Applicator Aperture Shape / 300A0432 / CS
  "ApplicatorApertureShape" |
  // Applicator Opening / 300A0433 / FL
  "ApplicatorOpening" |
  // Applicator Opening X / 300A0434 / FL
  "ApplicatorOpeningX" |
  // Applicator Opening Y / 300A0435 / FL
  "ApplicatorOpeningY" |
  // Source to Applicator Mounting Position Distance / 300A0436 / FL
  "SourceToApplicatorMountingPositionDistance" |
  // Number of Block Slab Items / 300A0440 / IS
  "NumberOfBlockSlabItems" |
  // Block Slab Sequence / 300A0441 / SQ
  "BlockSlabSequence" |
  // Block Slab Thickness / 300A0442 / DS
  "BlockSlabThickness" |
  // Block Slab Number / 300A0443 / US
  "BlockSlabNumber" |
  // Device Motion Control Sequence / 300A0450 / SQ
  "DeviceMotionControlSequence" |
  // Device Motion Execution Mode / 300A0451 / CS
  "DeviceMotionExecutionMode" |
  // Device Motion Observation Mode / 300A0452 / CS
  "DeviceMotionObservationMode" |
  // Device Motion Parameter Code Sequence / 300A0453 / SQ
  "DeviceMotionParameterCodeSequence" |
  // Distal Depth Fraction / 300A0501 / FL
  "DistalDepthFraction" |
  // Distal Depth / 300A0502 / FL
  "DistalDepth" |
  // Nominal Range Modulation Fractions / 300A0503 / FL
  "NominalRangeModulationFractions" |
  // Nominal Range Modulated Region Depths / 300A0504 / FL
  "NominalRangeModulatedRegionDepths" |
  // Depth Dose Parameters Sequence / 300A0505 / SQ
  "DepthDoseParametersSequence" |
  // Delivered Depth Dose Parameters Sequence / 300A0506 / SQ
  "DeliveredDepthDoseParametersSequence" |
  // Delivered Distal Depth Fraction / 300A0507 / FL
  "DeliveredDistalDepthFraction" |
  // Delivered Distal Depth / 300A0508 / FL
  "DeliveredDistalDepth" |
  // Delivered Nominal Range Modulation Fractions / 300A0509 / FL
  "DeliveredNominalRangeModulationFractions" |
  // Delivered Nominal Range Modulated Region Depths / 300A0510 / FL
  "DeliveredNominalRangeModulatedRegionDepths" |
  // Delivered Reference Dose Definition / 300A0511 / CS
  "DeliveredReferenceDoseDefinition" |
  // Reference Dose Definition / 300A0512 / CS
  "ReferenceDoseDefinition" |
  // RT Control Point Index / 300A0600 / US
  "RTControlPointIndex" |
  // Radiation Generation Mode Index / 300A0601 / US
  "RadiationGenerationModeIndex" |
  // Referenced Defined Device Index / 300A0602 / US
  "ReferencedDefinedDeviceIndex" |
  // Radiation Dose Identification Index / 300A0603 / US
  "RadiationDoseIdentificationIndex" |
  // Number of RT Control Points / 300A0604 / US
  "NumberOfRTControlPoints" |
  // Referenced Radiation Generation Mode Index / 300A0605 / US
  "ReferencedRadiationGenerationModeIndex" |
  // Treatment Position Index / 300A0606 / US
  "TreatmentPositionIndex" |
  // Referenced Device Index / 300A0607 / US
  "ReferencedDeviceIndex" |
  // Treatment Position Group Label / 300A0608 / LO
  "TreatmentPositionGroupLabel" |
  // Treatment Position Group UID / 300A0609 / UI
  "TreatmentPositionGroupUID" |
  // Treatment Position Group Sequence / 300A060A / SQ
  "TreatmentPositionGroupSequence" |
  // Referenced Treatment Position Index / 300A060B / US
  "ReferencedTreatmentPositionIndex" |
  // Referenced Radiation Dose Identification Index / 300A060C / US
  "ReferencedRadiationDoseIdentificationIndex" |
  // RT Accessory Holder Water-Equivalent Thickness / 300A060D / FD
  "RTAccessoryHolderWaterEquivalentThickness" |
  // Referenced RT Accessory Holder Device Index / 300A060E / US
  "ReferencedRTAccessoryHolderDeviceIndex" |
  // RT Accessory Holder Slot Existence Flag / 300A060F / CS
  "RTAccessoryHolderSlotExistenceFlag" |
  // RT Accessory Holder Slot Sequence / 300A0610 / SQ
  "RTAccessoryHolderSlotSequence" |
  // RT Accessory Holder Slot ID / 300A0611 / LO
  "RTAccessoryHolderSlotID" |
  // RT Accessory Holder Slot Distance / 300A0612 / FD
  "RTAccessoryHolderSlotDistance" |
  // RT Accessory Slot Distance / 300A0613 / FD
  "RTAccessorySlotDistance" |
  // RT Accessory Holder Definition Sequence / 300A0614 / SQ
  "RTAccessoryHolderDefinitionSequence" |
  // RT Accessory Device Slot ID / 300A0615 / LO
  "RTAccessoryDeviceSlotID" |
  // RT Radiation Sequence / 300A0616 / SQ
  "RTRadiationSequence" |
  // Radiation Dose Sequence / 300A0617 / SQ
  "RadiationDoseSequence" |
  // Radiation Dose Identification Sequence / 300A0618 / SQ
  "RadiationDoseIdentificationSequence" |
  // Radiation Dose Identification Label / 300A0619 / LO
  "RadiationDoseIdentificationLabel" |
  // Reference Dose Type / 300A061A / CS
  "ReferenceDoseType" |
  // Primary Dose Value Indicator / 300A061B / CS
  "PrimaryDoseValueIndicator" |
  // Dose Values Sequence / 300A061C / SQ
  "DoseValuesSequence" |
  // Dose Value Purpose / 300A061D / CS
  "DoseValuePurpose" |
  // Reference Dose Point Coordinates / 300A061E / FD
  "ReferenceDosePointCoordinates" |
  // Radiation Dose Values Parameters Sequence / 300A061F / SQ
  "RadiationDoseValuesParametersSequence" |
  // Meterset to Dose Mapping Sequence / 300A0620 / SQ
  "MetersetToDoseMappingSequence" |
  // Expected In-Vivo Measurement Values Sequence / 300A0621 / SQ
  "ExpectedInVivoMeasurementValuesSequence" |
  // Expected In-Vivo Measurement Value Index / 300A0622 / US
  "ExpectedInVivoMeasurementValueIndex" |
  // Radiation Dose In-Vivo Measurement Label / 300A0623 / LO
  "RadiationDoseInVivoMeasurementLabel" |
  // Radiation Dose Central Axis Displacement / 300A0624 / FD
  "RadiationDoseCentralAxisDisplacement" |
  // Radiation Dose Value / 300A0625 / FD
  "RadiationDoseValue" |
  // Radiation Dose Source to Skin Distance / 300A0626 / FD
  "RadiationDoseSourceToSkinDistance" |
  // Radiation Dose Measurement Point Coordinates / 300A0627 / FD
  "RadiationDoseMeasurementPointCoordinates" |
  // Radiation Dose Source to External Contour Distance / 300A0628 / FD
  "RadiationDoseSourceToExternalContourDistance" |
  // RT Tolerance Set Sequence / 300A0629 / SQ
  "RTToleranceSetSequence" |
  // RT Tolerance Set Label / 300A062A / LO
  "RTToleranceSetLabel" |
  // Attribute Tolerance Values Sequence / 300A062B / SQ
  "AttributeToleranceValuesSequence" |
  // Tolerance Value / 300A062C / FD
  "ToleranceValue" |
  // Patient Support Position Tolerance Sequence / 300A062D / SQ
  "PatientSupportPositionToleranceSequence" |
  // Treatment Time Limit / 300A062E / FD
  "TreatmentTimeLimit" |
  // C-Arm Photon-Electron Control Point Sequence / 300A062F / SQ
  "CArmPhotonElectronControlPointSequence" |
  // Referenced RT Radiation Sequence / 300A0630 / SQ
  "ReferencedRTRadiationSequence" |
  // Referenced RT Instance Sequence / 300A0631 / SQ
  "ReferencedRTInstanceSequence" |
  // Referenced RT Patient Setup Sequence / 300A0632 / SQ
  "ReferencedRTPatientSetupSequence" |
  // Source to Patient Surface Distance / 300A0634 / FD
  "SourceToPatientSurfaceDistance" |
  // Treatment Machine Special Mode Code Sequence / 300A0635 / SQ
  "TreatmentMachineSpecialModeCodeSequence" |
  // Intended Number of Fractions / 300A0636 / US
  "IntendedNumberOfFractions" |
  // RT Radiation Set Intent / 300A0637 / CS
  "RTRadiationSetIntent" |
  // RT Radiation Physical and Geometric Content Detail Flag / 300A0638 / CS
  "RTRadiationPhysicalAndGeometricContentDetailFlag" |
  // RT Record Flag / 300A0639 / CS
  "RTRecordFlag" |
  // Treatment Device Identification Sequence / 300A063A / SQ
  "TreatmentDeviceIdentificationSequence" |
  // Referenced RT Physician Intent Sequence / 300A063B / SQ
  "ReferencedRTPhysicianIntentSequence" |
  // Cumulative Meterset / 300A063C / FD
  "CumulativeMeterset" |
  // Delivery Rate / 300A063D / FD
  "DeliveryRate" |
  // Delivery Rate Unit Sequence / 300A063E / SQ
  "DeliveryRateUnitSequence" |
  // Treatment Position Sequence / 300A063F / SQ
  "TreatmentPositionSequence" |
  // Radiation Source-Axis Distance / 300A0640 / FD
  "RadiationSourceAxisDistance" |
  // Number of RT Beam Limiting Devices / 300A0641 / US
  "NumberOfRTBeamLimitingDevices" |
  // RT Beam Limiting Device Proximal Distance / 300A0642 / FD
  "RTBeamLimitingDeviceProximalDistance" |
  // RT Beam Limiting Device Distal Distance / 300A0643 / FD
  "RTBeamLimitingDeviceDistalDistance" |
  // Parallel RT Beam Delimiter Device Orientation Label Code Sequence / 300A0644 / SQ
  "ParallelRTBeamDelimiterDeviceOrientationLabelCodeSequence" |
  // Beam Modifier Orientation Angle / 300A0645 / FD
  "BeamModifierOrientationAngle" |
  // Fixed RT Beam Delimiter Device Sequence / 300A0646 / SQ
  "FixedRTBeamDelimiterDeviceSequence" |
  // Parallel RT Beam Delimiter Device Sequence / 300A0647 / SQ
  "ParallelRTBeamDelimiterDeviceSequence" |
  // Number of Parallel RT Beam Delimiters / 300A0648 / US
  "NumberOfParallelRTBeamDelimiters" |
  // Parallel RT Beam Delimiter Boundaries / 300A0649 / FD
  "ParallelRTBeamDelimiterBoundaries" |
  // Parallel RT Beam Delimiter Positions / 300A064A / FD
  "ParallelRTBeamDelimiterPositions" |
  // RT Beam Limiting Device Offset / 300A064B / FD
  "RTBeamLimitingDeviceOffset" |
  // RT Beam Delimiter Geometry Sequence / 300A064C / SQ
  "RTBeamDelimiterGeometrySequence" |
  // RT Beam Limiting Device Definition Sequence / 300A064D / SQ
  "RTBeamLimitingDeviceDefinitionSequence" |
  // Parallel RT Beam Delimiter Opening Mode / 300A064E / CS
  "ParallelRTBeamDelimiterOpeningMode" |
  // Parallel RT Beam Delimiter Leaf Mounting Side / 300A064F / CS
  "ParallelRTBeamDelimiterLeafMountingSide" |
  // Patient Setup UID / 300A0650 / UI
  "PatientSetupUID" |
  // Wedge Definition Sequence / 300A0651 / SQ
  "WedgeDefinitionSequence" |
  // Radiation Beam Wedge Angle / 300A0652 / FD
  "RadiationBeamWedgeAngle" |
  // Radiation Beam Wedge Thin Edge Distance / 300A0653 / FD
  "RadiationBeamWedgeThinEdgeDistance" |
  // Radiation Beam Effective Wedge Angle / 300A0654 / FD
  "RadiationBeamEffectiveWedgeAngle" |
  // Number of Wedge Positions / 300A0655 / US
  "NumberOfWedgePositions" |
  // RT Beam Limiting Device Opening Sequence / 300A0656 / SQ
  "RTBeamLimitingDeviceOpeningSequence" |
  // Number of RT Beam Limiting Device Openings / 300A0657 / US
  "NumberOfRTBeamLimitingDeviceOpenings" |
  // Radiation Dosimeter Unit Sequence / 300A0658 / SQ
  "RadiationDosimeterUnitSequence" |
  // RT Device Distance Reference Location Code Sequence / 300A0659 / SQ
  "RTDeviceDistanceReferenceLocationCodeSequence" |
  // Radiation Device Configuration and Commissioning Key Sequence / 300A065A / SQ
  "RadiationDeviceConfigurationAndCommissioningKeySequence" |
  // Patient Support Position Parameter Sequence / 300A065B / SQ
  "PatientSupportPositionParameterSequence" |
  // Patient Support Position Specification Method / 300A065C / CS
  "PatientSupportPositionSpecificationMethod" |
  // Patient Support Position Device Parameter Sequence / 300A065D / SQ
  "PatientSupportPositionDeviceParameterSequence" |
  // Device Order Index / 300A065E / US
  "DeviceOrderIndex" |
  // Patient Support Position Parameter Order Index / 300A065F / US
  "PatientSupportPositionParameterOrderIndex" |
  // Patient Support Position Device Tolerance Sequence / 300A0660 / SQ
  "PatientSupportPositionDeviceToleranceSequence" |
  // Patient Support Position Tolerance Order Index / 300A0661 / US
  "PatientSupportPositionToleranceOrderIndex" |
  // Compensator Definition Sequence / 300A0662 / SQ
  "CompensatorDefinitionSequence" |
  // Compensator Map Orientation / 300A0663 / CS
  "CompensatorMapOrientation" |
  // Compensator Proximal Thickness Map / 300A0664 / OF
  "CompensatorProximalThicknessMap" |
  // Compensator Distal Thickness Map / 300A0665 / OF
  "CompensatorDistalThicknessMap" |
  // Compensator Base Plane Offset / 300A0666 / FD
  "CompensatorBasePlaneOffset" |
  // Compensator Shape Fabrication Code Sequence / 300A0667 / SQ
  "CompensatorShapeFabricationCodeSequence" |
  // Compensator Shape Sequence / 300A0668 / SQ
  "CompensatorShapeSequence" |
  // Radiation Beam Compensator Milling Tool Diameter / 300A0669 / FD
  "RadiationBeamCompensatorMillingToolDiameter" |
  // Block Definition Sequence / 300A066A / SQ
  "BlockDefinitionSequence" |
  // Block Edge Data / 300A066B / OF
  "BlockEdgeData" |
  // Block Orientation / 300A066C / CS
  "BlockOrientation" |
  // Radiation Beam Block Thickness / 300A066D / FD
  "RadiationBeamBlockThickness" |
  // Radiation Beam Block Slab Thickness / 300A066E / FD
  "RadiationBeamBlockSlabThickness" |
  // Block Edge Data Sequence / 300A066F / SQ
  "BlockEdgeDataSequence" |
  // Number of RT Accessory Holders / 300A0670 / US
  "NumberOfRTAccessoryHolders" |
  // General Accessory Definition Sequence / 300A0671 / SQ
  "GeneralAccessoryDefinitionSequence" |
  // Number of General Accessories / 300A0672 / US
  "NumberOfGeneralAccessories" |
  // Bolus Definition Sequence / 300A0673 / SQ
  "BolusDefinitionSequence" |
  // Number of Boluses / 300A0674 / US
  "NumberOfBoluses" |
  // Equipment Frame of Reference UID / 300A0675 / UI
  "EquipmentFrameOfReferenceUID" |
  // Equipment Frame of Reference Description / 300A0676 / ST
  "EquipmentFrameOfReferenceDescription" |
  // Equipment Reference Point Coordinates Sequence / 300A0677 / SQ
  "EquipmentReferencePointCoordinatesSequence" |
  // Equipment Reference Point Code Sequence / 300A0678 / SQ
  "EquipmentReferencePointCodeSequence" |
  // RT Beam Limiting Device Angle / 300A0679 / FD
  "RTBeamLimitingDeviceAngle" |
  // Source Roll Angle / 300A067A / FD
  "SourceRollAngle" |
  // Radiation GenerationMode Sequence / 300A067B / SQ
  "RadiationGenerationModeSequence" |
  // Radiation GenerationMode Label / 300A067C / SH
  "RadiationGenerationModeLabel" |
  // Radiation GenerationMode Description / 300A067D / ST
  "RadiationGenerationModeDescription" |
  // Radiation GenerationMode Machine Code Sequence / 300A067E / SQ
  "RadiationGenerationModeMachineCodeSequence" |
  // Radiation Type Code Sequence / 300A067F / SQ
  "RadiationTypeCodeSequence" |
  // Nominal Energy / 300A0680 / DS
  "NominalEnergy" |
  // Minimum Nominal Energy / 300A0681 / DS
  "MinimumNominalEnergy" |
  // Maximum Nominal Energy / 300A0682 / DS
  "MaximumNominalEnergy" |
  // Radiation Fluence Modifier Code Sequence / 300A0683 / SQ
  "RadiationFluenceModifierCodeSequence" |
  // Energy Unit Code Sequence / 300A0684 / SQ
  "EnergyUnitCodeSequence" |
  // Number of Radiation GenerationModes / 300A0685 / US
  "NumberOfRadiationGenerationModes" |
  // Patient Support Devices Sequence / 300A0686 / SQ
  "PatientSupportDevicesSequence" |
  // Number of Patient Support Devices / 300A0687 / US
  "NumberOfPatientSupportDevices" |
  // RT Beam Modifier Definition Distance / 300A0688 / FD
  "RTBeamModifierDefinitionDistance" |
  // Beam Area Limit Sequence / 300A0689 / SQ
  "BeamAreaLimitSequence" |
  // Referenced RT Prescription Sequence / 300A068A / SQ
  "ReferencedRTPrescriptionSequence" |
  // Treatment Session UID / 300A0700 / UI
  "TreatmentSessionUID" |
  // RT Radiation Usage / 300A0701 / CS
  "RTRadiationUsage" |
  // Referenced RT Radiation Set Sequence / 300A0702 / SQ
  "ReferencedRTRadiationSetSequence" |
  // Referenced RT Radiation Record Sequence / 300A0703 / SQ
  "ReferencedRTRadiationRecordSequence" |
  // RT Radiation Set Delivery Number / 300A0704 / US
  "RTRadiationSetDeliveryNumber" |
  // Clinical Fraction Number / 300A0705 / US
  "ClinicalFractionNumber" |
  // RT Treatment Fraction Completion Status / 300A0706 / CS
  "RTTreatmentFractionCompletionStatus" |
  // RT Radiation Set Usage / 300A0707 / CS
  "RTRadiationSetUsage" |
  // Treatment Delivery Continuation Flag / 300A0708 / CS
  "TreatmentDeliveryContinuationFlag" |
  // Treatment Record Content Origin / 300A0709 / CS
  "TreatmentRecordContentOrigin" |
  // RT Treatment Termination Status / 300A0714 / CS
  "RTTreatmentTerminationStatus" |
  // RT Treatment Termination Reason Code Sequence / 300A0715 / SQ
  "RTTreatmentTerminationReasonCodeSequence" |
  // Machine-Specific Treatment Termination Code Sequence / 300A0716 / SQ
  "MachineSpecificTreatmentTerminationCodeSequence" |
  // RT Radiation Salvage Record Control Point Sequence / 300A0722 / SQ
  "RTRadiationSalvageRecordControlPointSequence" |
  // Starting Meterset Value Known Flag / 300A0723 / CS
  "StartingMetersetValueKnownFlag" |
  // Treatment Termination Description / 300A0730 / ST
  "TreatmentTerminationDescription" |
  // Treatment Tolerance Violation Sequence / 300A0731 / SQ
  "TreatmentToleranceViolationSequence" |
  // Treatment Tolerance Violation Category / 300A0732 / CS
  "TreatmentToleranceViolationCategory" |
  // Treatment Tolerance Violation Attribute Sequence / 300A0733 / SQ
  "TreatmentToleranceViolationAttributeSequence" |
  // Treatment Tolerance Violation Description / 300A0734 / ST
  "TreatmentToleranceViolationDescription" |
  // Treatment Tolerance Violation Identification / 300A0735 / ST
  "TreatmentToleranceViolationIdentification" |
  // Treatment Tolerance Violation DateTime / 300A0736 / DT
  "TreatmentToleranceViolationDateTime" |
  // Recorded RT Control Point DateTime / 300A073A / DT
  "RecordedRTControlPointDateTime" |
  // Referenced Radiation RT Control Point Index / 300A073B / US
  "ReferencedRadiationRTControlPointIndex" |
  // Alternate Value Sequence / 300A073E / SQ
  "AlternateValueSequence" |
  // Confirmation Sequence / 300A073F / SQ
  "ConfirmationSequence" |
  // Interlock Sequence / 300A0740 / SQ
  "InterlockSequence" |
  // Interlock DateTime / 300A0741 / DT
  "InterlockDateTime" |
  // Interlock Description / 300A0742 / ST
  "InterlockDescription" |
  // Interlock Originating Device Sequence / 300A0743 / SQ
  "InterlockOriginatingDeviceSequence" |
  // Interlock Code Sequence / 300A0744 / SQ
  "InterlockCodeSequence" |
  // Interlock Resolution Code Sequence / 300A0745 / SQ
  "InterlockResolutionCodeSequence" |
  // Interlock Resolution User Sequence / 300A0746 / SQ
  "InterlockResolutionUserSequence" |
  // Override DateTime / 300A0760 / DT
  "OverrideDateTime" |
  // Treatment Tolerance Violation Type Code Sequence / 300A0761 / SQ
  "TreatmentToleranceViolationTypeCodeSequence" |
  // Treatment Tolerance Violation Cause Code Sequence / 300A0762 / SQ
  "TreatmentToleranceViolationCauseCodeSequence" |
  // Measured Meterset to Dose Mapping Sequence / 300A0772 / SQ
  "MeasuredMetersetToDoseMappingSequence" |
  // Referenced Expected In-Vivo Measurement Value Index / 300A0773 / US
  "ReferencedExpectedInVivoMeasurementValueIndex" |
  // Dose Measurement Device Code Sequence / 300A0774 / SQ
  "DoseMeasurementDeviceCodeSequence" |
  // Additional Parameter Recording Instance Sequence / 300A0780 / SQ
  "AdditionalParameterRecordingInstanceSequence" |
  // Interlock Origin Description / 300A0783 / ST
  "InterlockOriginDescription" |
  // RT Patient Position Scope Sequence / 300A0784 / SQ
  "RTPatientPositionScopeSequence" |
  // Referenced Treatment Position Group UID / 300A0785 / UI
  "ReferencedTreatmentPositionGroupUID" |
  // Radiation Order Index / 300A0786 / US
  "RadiationOrderIndex" |
  // Omitted Radiation Sequence / 300A0787 / SQ
  "OmittedRadiationSequence" |
  // Reason for Omission Code Sequence / 300A0788 / SQ
  "ReasonForOmissionCodeSequence" |
  // RT Delivery Start Patient Position Sequence / 300A0789 / SQ
  "RTDeliveryStartPatientPositionSequence" |
  // RT Treatment Preparation Patient Position Sequence / 300A078A / SQ
  "RTTreatmentPreparationPatientPositionSequence" |
  // Referenced RT Treatment Preparation Sequence / 300A078B / SQ
  "ReferencedRTTreatmentPreparationSequence" |
  // Referenced Patient Setup Photo Sequence / 300A078C / SQ
  "ReferencedPatientSetupPhotoSequence" |
  // Patient Treatment Preparation Method Code Sequence / 300A078D / SQ
  "PatientTreatmentPreparationMethodCodeSequence" |
  // Patient Treatment Preparation Procedure Parameter Description / 300A078E / LT
  "PatientTreatmentPreparationProcedureParameterDescription" |
  // Patient Treatment Preparation Device Sequence / 300A078F / SQ
  "PatientTreatmentPreparationDeviceSequence" |
  // Patient Treatment Preparation Procedure Sequence  / 300A0790 / SQ
  "PatientTreatmentPreparationProcedureSequence" |
  // Patient Treatment Preparation Procedure Code Sequence / 300A0791 / SQ
  "PatientTreatmentPreparationProcedureCodeSequence" |
  // Patient Treatment Preparation Method Description / 300A0792 / LT
  "PatientTreatmentPreparationMethodDescription" |
  // Patient Treatment Preparation Procedure Parameter Sequence / 300A0793 / SQ
  "PatientTreatmentPreparationProcedureParameterSequence" |
  // Patient Setup Photo Description / 300A0794 / LT
  "PatientSetupPhotoDescription" |
  // Patient Treatment Preparation Procedure Index / 300A0795 / US
  "PatientTreatmentPreparationProcedureIndex" |
  // Referenced Patient Setup Procedure Index / 300A0796 / US
  "ReferencedPatientSetupProcedureIndex" |
  // RT Radiation Task Sequence / 300A0797 / SQ
  "RTRadiationTaskSequence" |
  // RT Patient Position Displacement Sequence / 300A0798 / SQ
  "RTPatientPositionDisplacementSequence" |
  // RT Patient Position Sequence / 300A0799 / SQ
  "RTPatientPositionSequence" |
  // Displacement Reference Label / 300A079A / LO
  "DisplacementReferenceLabel" |
  // Displacement Matrix / 300A079B / FD
  "DisplacementMatrix" |
  // Patient Support Displacement Sequence / 300A079C / SQ
  "PatientSupportDisplacementSequence" |
  // Displacement Reference Location Code Sequence / 300A079D / SQ
  "DisplacementReferenceLocationCodeSequence" |
  // RT Radiation Set Delivery Usage / 300A079E / CS
  "RTRadiationSetDeliveryUsage" |
  // Referenced RT Plan Sequence / 300C0002 / SQ
  "ReferencedRTPlanSequence" |
  // Referenced Beam Sequence / 300C0004 / SQ
  "ReferencedBeamSequence" |
  // Referenced Beam Number / 300C0006 / IS
  "ReferencedBeamNumber" |
  // Referenced Reference Image Number / 300C0007 / IS
  "ReferencedReferenceImageNumber" |
  // Start Cumulative Meterset Weight / 300C0008 / DS
  "StartCumulativeMetersetWeight" |
  // End Cumulative Meterset Weight / 300C0009 / DS
  "EndCumulativeMetersetWeight" |
  // Referenced Brachy Application Setup Sequence / 300C000A / SQ
  "ReferencedBrachyApplicationSetupSequence" |
  // Referenced Brachy Application Setup Number / 300C000C / IS
  "ReferencedBrachyApplicationSetupNumber" |
  // Referenced Source Number / 300C000E / IS
  "ReferencedSourceNumber" |
  // Referenced Fraction Group Sequence / 300C0020 / SQ
  "ReferencedFractionGroupSequence" |
  // Referenced Fraction Group Number / 300C0022 / IS
  "ReferencedFractionGroupNumber" |
  // Referenced Verification Image Sequence / 300C0040 / SQ
  "ReferencedVerificationImageSequence" |
  // Referenced Reference Image Sequence / 300C0042 / SQ
  "ReferencedReferenceImageSequence" |
  // Referenced Dose Reference Sequence / 300C0050 / SQ
  "ReferencedDoseReferenceSequence" |
  // Referenced Dose Reference Number / 300C0051 / IS
  "ReferencedDoseReferenceNumber" |
  // Brachy Referenced Dose Reference Sequence / 300C0055 / SQ
  "BrachyReferencedDoseReferenceSequence" |
  // Referenced Structure Set Sequence / 300C0060 / SQ
  "ReferencedStructureSetSequence" |
  // Referenced Patient Setup Number / 300C006A / IS
  "ReferencedPatientSetupNumber" |
  // Referenced Dose Sequence / 300C0080 / SQ
  "ReferencedDoseSequence" |
  // Referenced Tolerance Table Number / 300C00A0 / IS
  "ReferencedToleranceTableNumber" |
  // Referenced Bolus Sequence / 300C00B0 / SQ
  "ReferencedBolusSequence" |
  // Referenced Wedge Number / 300C00C0 / IS
  "ReferencedWedgeNumber" |
  // Referenced Compensator Number / 300C00D0 / IS
  "ReferencedCompensatorNumber" |
  // Referenced Block Number / 300C00E0 / IS
  "ReferencedBlockNumber" |
  // Referenced Control Point Index / 300C00F0 / IS
  "ReferencedControlPointIndex" |
  // Referenced Control Point Sequence / 300C00F2 / SQ
  "ReferencedControlPointSequence" |
  // Referenced Start Control Point Index / 300C00F4 / IS
  "ReferencedStartControlPointIndex" |
  // Referenced Stop Control Point Index / 300C00F6 / IS
  "ReferencedStopControlPointIndex" |
  // Referenced Range Shifter Number / 300C0100 / IS
  "ReferencedRangeShifterNumber" |
  // Referenced Lateral Spreading Device Number / 300C0102 / IS
  "ReferencedLateralSpreadingDeviceNumber" |
  // Referenced Range Modulator Number / 300C0104 / IS
  "ReferencedRangeModulatorNumber" |
  // Omitted Beam Task Sequence / 300C0111 / SQ
  "OmittedBeamTaskSequence" |
  // Reason for Omission / 300C0112 / CS
  "ReasonForOmission" |
  // Reason for Omission Description / 300C0113 / LO
  "ReasonForOmissionDescription" |
  // Prescription Overview Sequence / 300C0114 / SQ
  "PrescriptionOverviewSequence" |
  // Total Prescription Dose / 300C0115 / FL
  "TotalPrescriptionDose" |
  // Plan Overview Sequence / 300C0116 / SQ
  "PlanOverviewSequence" |
  // Plan Overview Index / 300C0117 / US
  "PlanOverviewIndex" |
  // Referenced Plan Overview Index / 300C0118 / US
  "ReferencedPlanOverviewIndex" |
  // Number of Fractions Included / 300C0119 / US
  "NumberOfFractionsIncluded" |
  // Dose Calibration Conditions Sequence / 300C0120 / SQ
  "DoseCalibrationConditionsSequence" |
  // Absorbed Dose to Meterset Ratio / 300C0121 / FD
  "AbsorbedDoseToMetersetRatio" |
  // Delineated Radiation Field Size / 300C0122 / FD
  "DelineatedRadiationFieldSize" |
  // Dose Calibration Conditions Verified Flag / 300C0123 / CS
  "DoseCalibrationConditionsVerifiedFlag" |
  // Calibration Reference Point Depth / 300C0124 / FD
  "CalibrationReferencePointDepth" |
  // Gating Beam Hold Transition Sequence / 300C0125 / SQ
  "GatingBeamHoldTransitionSequence" |
  // Beam Hold Transition / 300C0126 / CS
  "BeamHoldTransition" |
  // Beam Hold Transition DateTime / 300C0127 / DT
  "BeamHoldTransitionDateTime" |
  // Beam Hold Originating Device Sequence / 300C0128 / SQ
  "BeamHoldOriginatingDeviceSequence" |
  // Approval Status / 300E0002 / CS
  "ApprovalStatus" |
  // Review Date / 300E0004 / DA
  "ReviewDate" |
  // Review Time / 300E0005 / TM
  "ReviewTime" |
  // Reviewer Name / 300E0008 / PN
  "ReviewerName" |
  // Radiobiological Dose Effect Sequence / 30100001 / SQ
  "RadiobiologicalDoseEffectSequence" |
  // Radiobiological Dose Effect Flag / 30100002 / CS
  "RadiobiologicalDoseEffectFlag" |
  // Effective Dose Calculation Method Category Code Sequence / 30100003 / SQ
  "EffectiveDoseCalculationMethodCategoryCodeSequence" |
  // Effective Dose Calculation Method Code Sequence / 30100004 / SQ
  "EffectiveDoseCalculationMethodCodeSequence" |
  // Effective Dose Calculation Method Description / 30100005 / LO
  "EffectiveDoseCalculationMethodDescription" |
  // Conceptual Volume UID / 30100006 / UI
  "ConceptualVolumeUID" |
  // Originating SOP Instance Reference Sequence / 30100007 / SQ
  "OriginatingSOPInstanceReferenceSequence" |
  // Conceptual Volume Constituent Sequence / 30100008 / SQ
  "ConceptualVolumeConstituentSequence" |
  // Equivalent Conceptual Volume Instance Reference Sequence / 30100009 / SQ
  "EquivalentConceptualVolumeInstanceReferenceSequence" |
  // Equivalent Conceptual Volumes Sequence / 3010000A / SQ
  "EquivalentConceptualVolumesSequence" |
  // Referenced Conceptual Volume UID / 3010000B / UI
  "ReferencedConceptualVolumeUID" |
  // Conceptual Volume Combination Expression / 3010000C / UT
  "ConceptualVolumeCombinationExpression" |
  // Conceptual Volume Constituent Index / 3010000D / US
  "ConceptualVolumeConstituentIndex" |
  // Conceptual Volume Combination Flag / 3010000E / CS
  "ConceptualVolumeCombinationFlag" |
  // Conceptual Volume Combination Description / 3010000F / ST
  "ConceptualVolumeCombinationDescription" |
  // Conceptual Volume Segmentation Defined Flag / 30100010 / CS
  "ConceptualVolumeSegmentationDefinedFlag" |
  // Conceptual Volume Segmentation Reference Sequence / 30100011 / SQ
  "ConceptualVolumeSegmentationReferenceSequence" |
  // Conceptual Volume Constituent Segmentation Reference Sequence / 30100012 / SQ
  "ConceptualVolumeConstituentSegmentationReferenceSequence" |
  // Constituent Conceptual Volume UID / 30100013 / UI
  "ConstituentConceptualVolumeUID" |
  // Derivation Conceptual Volume Sequence / 30100014 / SQ
  "DerivationConceptualVolumeSequence" |
  // Source Conceptual Volume UID / 30100015 / UI
  "SourceConceptualVolumeUID" |
  // Conceptual Volume Derivation Algorithm Sequence / 30100016 / SQ
  "ConceptualVolumeDerivationAlgorithmSequence" |
  // Conceptual Volume Description / 30100017 / ST
  "ConceptualVolumeDescription" |
  // Source Conceptual Volume Sequence / 30100018 / SQ
  "SourceConceptualVolumeSequence" |
  // Author Identification Sequence / 30100019 / SQ
  "AuthorIdentificationSequence" |
  // Manufacturer's Model Version / 3010001A / LO
  "ManufacturerModelVersion" |
  // Device Alternate Identifier / 3010001B / UC
  "DeviceAlternateIdentifier" |
  // Device Alternate Identifier Type / 3010001C / CS
  "DeviceAlternateIdentifierType" |
  // Device Alternate Identifier Format / 3010001D / LT
  "DeviceAlternateIdentifierFormat" |
  // Segmentation Creation Template Label / 3010001E / LO
  "SegmentationCreationTemplateLabel" |
  // Segmentation Template UID / 3010001F / UI
  "SegmentationTemplateUID" |
  // Referenced Segment Reference Index / 30100020 / US
  "ReferencedSegmentReferenceIndex" |
  // Segment Reference Sequence / 30100021 / SQ
  "SegmentReferenceSequence" |
  // Segment Reference Index / 30100022 / US
  "SegmentReferenceIndex" |
  // Direct Segment Reference Sequence / 30100023 / SQ
  "DirectSegmentReferenceSequence" |
  // Combination Segment Reference Sequence / 30100024 / SQ
  "CombinationSegmentReferenceSequence" |
  // Conceptual Volume Sequence / 30100025 / SQ
  "ConceptualVolumeSequence" |
  // Segmented RT Accessory Device Sequence / 30100026 / SQ
  "SegmentedRTAccessoryDeviceSequence" |
  // Segment Characteristics Sequence / 30100027 / SQ
  "SegmentCharacteristicsSequence" |
  // Related Segment Characteristics Sequence / 30100028 / SQ
  "RelatedSegmentCharacteristicsSequence" |
  // Segment Characteristics Precedence / 30100029 / US
  "SegmentCharacteristicsPrecedence" |
  // RT Segment Annotation Sequence / 3010002A / SQ
  "RTSegmentAnnotationSequence" |
  // Segment Annotation Category Code Sequence / 3010002B / SQ
  "SegmentAnnotationCategoryCodeSequence" |
  // Segment Annotation Type Code Sequence / 3010002C / SQ
  "SegmentAnnotationTypeCodeSequence" |
  // Device Label / 3010002D / LO
  "DeviceLabel" |
  // Device Type Code Sequence / 3010002E / SQ
  "DeviceTypeCodeSequence" |
  // Segment Annotation Type Modifier Code Sequence / 3010002F / SQ
  "SegmentAnnotationTypeModifierCodeSequence" |
  // Patient Equipment Relationship Code Sequence / 30100030 / SQ
  "PatientEquipmentRelationshipCodeSequence" |
  // Referenced Fiducials UID / 30100031 / UI
  "ReferencedFiducialsUID" |
  // Patient Treatment Orientation Sequence / 30100032 / SQ
  "PatientTreatmentOrientationSequence" |
  // User Content Label / 30100033 / SH
  "UserContentLabel" |
  // User Content Long Label / 30100034 / LO
  "UserContentLongLabel" |
  // Entity Label / 30100035 / SH
  "EntityLabel" |
  // Entity Name / 30100036 / LO
  "EntityName" |
  // Entity Description / 30100037 / ST
  "EntityDescription" |
  // Entity Long Label / 30100038 / LO
  "EntityLongLabel" |
  // Device Index / 30100039 / US
  "DeviceIndex" |
  // RT Treatment Phase Index / 3010003A / US
  "RTTreatmentPhaseIndex" |
  // RT Treatment Phase UID / 3010003B / UI
  "RTTreatmentPhaseUID" |
  // RT Prescription Index / 3010003C / US
  "RTPrescriptionIndex" |
  // RT Segment Annotation Index / 3010003D / US
  "RTSegmentAnnotationIndex" |
  // Basis RT Treatment Phase Index / 3010003E / US
  "BasisRTTreatmentPhaseIndex" |
  // Related RT Treatment Phase Index / 3010003F / US
  "RelatedRTTreatmentPhaseIndex" |
  // Referenced RT Treatment Phase Index / 30100040 / US
  "ReferencedRTTreatmentPhaseIndex" |
  // Referenced RT Prescription Index / 30100041 / US
  "ReferencedRTPrescriptionIndex" |
  // Referenced Parent RT Prescription Index / 30100042 / US
  "ReferencedParentRTPrescriptionIndex" |
  // Manufacturer's Device Identifier / 30100043 / ST
  "ManufacturerDeviceIdentifier" |
  // Instance-Level Referenced Performed Procedure Step Sequence / 30100044 / SQ
  "InstanceLevelReferencedPerformedProcedureStepSequence" |
  // RT Treatment Phase Intent Presence Flag / 30100045 / CS
  "RTTreatmentPhaseIntentPresenceFlag" |
  // Radiotherapy Treatment Type / 30100046 / CS
  "RadiotherapyTreatmentType" |
  // Teletherapy Radiation Type / 30100047 / CS
  "TeletherapyRadiationType" |
  // Brachytherapy Source Type / 30100048 / CS
  "BrachytherapySourceType" |
  // Referenced RT Treatment Phase Sequence / 30100049 / SQ
  "ReferencedRTTreatmentPhaseSequence" |
  // Referenced Direct Segment Instance Sequence / 3010004A / SQ
  "ReferencedDirectSegmentInstanceSequence" |
  // Intended RT Treatment Phase Sequence / 3010004B / SQ
  "IntendedRTTreatmentPhaseSequence" |
  // Intended Phase Start Date / 3010004C / DA
  "IntendedPhaseStartDate" |
  // Intended Phase End Date / 3010004D / DA
  "IntendedPhaseEndDate" |
  // RT Treatment Phase Interval Sequence / 3010004E / SQ
  "RTTreatmentPhaseIntervalSequence" |
  // Temporal Relationship Interval Anchor / 3010004F / CS
  "TemporalRelationshipIntervalAnchor" |
  // Minimum Number of Interval Days / 30100050 / FD
  "MinimumNumberOfIntervalDays" |
  // Maximum Number of Interval Days / 30100051 / FD
  "MaximumNumberOfIntervalDays" |
  // Pertinent SOP Classes in Study / 30100052 / UI
  "PertinentSOPClassesInStudy" |
  // Pertinent SOP Classes in Series / 30100053 / UI
  "PertinentSOPClassesInSeries" |
  // RT Prescription Label / 30100054 / LO
  "RTPrescriptionLabel" |
  // RT Physician Intent Predecessor Sequence / 30100055 / SQ
  "RTPhysicianIntentPredecessorSequence" |
  // RT Treatment Approach Label / 30100056 / LO
  "RTTreatmentApproachLabel" |
  // RT Physician Intent Sequence / 30100057 / SQ
  "RTPhysicianIntentSequence" |
  // RT Physician Intent Index / 30100058 / US
  "RTPhysicianIntentIndex" |
  // RT Treatment Intent Type / 30100059 / CS
  "RTTreatmentIntentType" |
  // RT Physician Intent Narrative / 3010005A / UT
  "RTPhysicianIntentNarrative" |
  // RT Protocol Code Sequence / 3010005B / SQ
  "RTProtocolCodeSequence" |
  // Reason for Superseding / 3010005C / ST
  "ReasonForSuperseding" |
  // RT Diagnosis Code Sequence / 3010005D / SQ
  "RTDiagnosisCodeSequence" |
  // Referenced RT Physician Intent Index / 3010005E / US
  "ReferencedRTPhysicianIntentIndex" |
  // RT Physician Intent Input Instance Sequence / 3010005F / SQ
  "RTPhysicianIntentInputInstanceSequence" |
  // RT Anatomic Prescription Sequence / 30100060 / SQ
  "RTAnatomicPrescriptionSequence" |
  // Prior Treatment Dose Description / 30100061 / UT
  "PriorTreatmentDoseDescription" |
  // Prior Treatment Reference Sequence / 30100062 / SQ
  "PriorTreatmentReferenceSequence" |
  // Dosimetric Objective Evaluation Scope / 30100063 / CS
  "DosimetricObjectiveEvaluationScope" |
  // Therapeutic Role Category Code Sequence / 30100064 / SQ
  "TherapeuticRoleCategoryCodeSequence" |
  // Therapeutic Role Type Code Sequence / 30100065 / SQ
  "TherapeuticRoleTypeCodeSequence" |
  // Conceptual Volume Optimization Precedence / 30100066 / US
  "ConceptualVolumeOptimizationPrecedence" |
  // Conceptual Volume Category Code Sequence / 30100067 / SQ
  "ConceptualVolumeCategoryCodeSequence" |
  // Conceptual Volume Blocking Constraint / 30100068 / CS
  "ConceptualVolumeBlockingConstraint" |
  // Conceptual Volume Type Code Sequence / 30100069 / SQ
  "ConceptualVolumeTypeCodeSequence" |
  // Conceptual Volume Type Modifier Code Sequence / 3010006A / SQ
  "ConceptualVolumeTypeModifierCodeSequence" |
  // RT Prescription Sequence / 3010006B / SQ
  "RTPrescriptionSequence" |
  // Dosimetric Objective Sequence / 3010006C / SQ
  "DosimetricObjectiveSequence" |
  // Dosimetric Objective Type Code Sequence / 3010006D / SQ
  "DosimetricObjectiveTypeCodeSequence" |
  // Dosimetric Objective UID / 3010006E / UI
  "DosimetricObjectiveUID" |
  // Referenced Dosimetric Objective UID / 3010006F / UI
  "ReferencedDosimetricObjectiveUID" |
  // Dosimetric Objective Parameter Sequence / 30100070 / SQ
  "DosimetricObjectiveParameterSequence" |
  // Referenced Dosimetric Objectives Sequence / 30100071 / SQ
  "ReferencedDosimetricObjectivesSequence" |
  // Absolute Dosimetric Objective Flag / 30100073 / CS
  "AbsoluteDosimetricObjectiveFlag" |
  // Dosimetric Objective Weight / 30100074 / FD
  "DosimetricObjectiveWeight" |
  // Dosimetric Objective Purpose / 30100075 / CS
  "DosimetricObjectivePurpose" |
  // Planning Input Information Sequence / 30100076 / SQ
  "PlanningInputInformationSequence" |
  // Treatment Site / 30100077 / LO
  "TreatmentSite" |
  // Treatment Site Code Sequence / 30100078 / SQ
  "TreatmentSiteCodeSequence" |
  // Fraction Pattern Sequence / 30100079 / SQ
  "FractionPatternSequence" |
  // Treatment Technique Notes / 3010007A / UT
  "TreatmentTechniqueNotes" |
  // Prescription Notes / 3010007B / UT
  "PrescriptionNotes" |
  // Number of Interval Fractions / 3010007C / IS
  "NumberOfIntervalFractions" |
  // Number of Fractions / 3010007D / US
  "NumberOfFractions" |
  // Intended Delivery Duration / 3010007E / US
  "IntendedDeliveryDuration" |
  // Fractionation Notes / 3010007F / UT
  "FractionationNotes" |
  // RT Treatment Technique Code Sequence / 30100080 / SQ
  "RTTreatmentTechniqueCodeSequence" |
  // Prescription Notes Sequence / 30100081 / SQ
  "PrescriptionNotesSequence" |
  // Fraction-Based Relationship Sequence / 30100082 / SQ
  "FractionBasedRelationshipSequence" |
  // Fraction-Based Relationship Interval Anchor / 30100083 / CS
  "FractionBasedRelationshipIntervalAnchor" |
  // Minimum Hours between Fractions / 30100084 / FD
  "MinimumHoursBetweenFractions" |
  // Intended Fraction Start Time / 30100085 / TM
  "IntendedFractionStartTime" |
  // Intended Start Day of Week / 30100086 / LT
  "IntendedStartDayOfWeek" |
  // Weekday Fraction Pattern Sequence / 30100087 / SQ
  "WeekdayFractionPatternSequence" |
  // Delivery Time Structure Code Sequence / 30100088 / SQ
  "DeliveryTimeStructureCodeSequence" |
  // Treatment Site Modifier Code Sequence / 30100089 / SQ
  "TreatmentSiteModifierCodeSequence" |
  // Robotic Base Location Indicator / 30100090 / CS
  "RoboticBaseLocationIndicator" |
  // Robotic Path Node Set Code Sequence / 30100091 / SQ
  "RoboticPathNodeSetCodeSequence" |
  // Robotic Node Identifier / 30100092 / UL
  "RoboticNodeIdentifier" |
  // RT Treatment Source Coordinates / 30100093 / FD
  "RTTreatmentSourceCoordinates" |
  // Radiation Source Coordinate SystemYaw Angle / 30100094 / FD
  "RadiationSourceCoordinateSystemYawAngle" |
  // Radiation Source Coordinate SystemRoll Angle / 30100095 / FD
  "RadiationSourceCoordinateSystemRollAngle" |
  // Radiation Source Coordinate System Pitch Angle / 30100096 / FD
  "RadiationSourceCoordinateSystemPitchAngle" |
  // Robotic Path Control Point Sequence / 30100097 / SQ
  "RoboticPathControlPointSequence" |
  // Tomotherapeutic Control Point Sequence / 30100098 / SQ
  "TomotherapeuticControlPointSequence" |
  // Tomotherapeutic Leaf Open Durations / 30100099 / FD
  "TomotherapeuticLeafOpenDurations" |
  // Tomotherapeutic Leaf Initial Closed Durations / 3010009A / FD
  "TomotherapeuticLeafInitialClosedDurations" |
  // Conceptual Volume Identification Sequence / 301000A0 / SQ
  "ConceptualVolumeIdentificationSequence" |
  // Arbitrary / 40000010 / LT
  "Arbitrary" |
  // Text Comments / 40004000 / LT
  "TextComments" |
  // Results ID / 40080040 / SH
  "ResultsID" |
  // Results ID Issuer / 40080042 / LO
  "ResultsIDIssuer" |
  // Referenced Interpretation Sequence / 40080050 / SQ
  "ReferencedInterpretationSequence" |
  // Report Production Status (Trial) / 400800FF / CS
  "ReportProductionStatusTrial" |
  // Interpretation Recorded Date / 40080100 / DA
  "InterpretationRecordedDate" |
  // Interpretation Recorded Time / 40080101 / TM
  "InterpretationRecordedTime" |
  // Interpretation Recorder / 40080102 / PN
  "InterpretationRecorder" |
  // Reference to Recorded Sound / 40080103 / LO
  "ReferenceToRecordedSound" |
  // Interpretation Transcription Date / 40080108 / DA
  "InterpretationTranscriptionDate" |
  // Interpretation Transcription Time / 40080109 / TM
  "InterpretationTranscriptionTime" |
  // Interpretation Transcriber / 4008010A / PN
  "InterpretationTranscriber" |
  // Interpretation Text / 4008010B / ST
  "InterpretationText" |
  // Interpretation Author / 4008010C / PN
  "InterpretationAuthor" |
  // Interpretation Approver Sequence / 40080111 / SQ
  "InterpretationApproverSequence" |
  // Interpretation Approval Date / 40080112 / DA
  "InterpretationApprovalDate" |
  // Interpretation Approval Time / 40080113 / TM
  "InterpretationApprovalTime" |
  // Physician Approving Interpretation / 40080114 / PN
  "PhysicianApprovingInterpretation" |
  // Interpretation Diagnosis Description / 40080115 / LT
  "InterpretationDiagnosisDescription" |
  // Interpretation Diagnosis Code Sequence / 40080117 / SQ
  "InterpretationDiagnosisCodeSequence" |
  // Results Distribution List Sequence / 40080118 / SQ
  "ResultsDistributionListSequence" |
  // Distribution Name / 40080119 / PN
  "DistributionName" |
  // Distribution Address / 4008011A / LO
  "DistributionAddress" |
  // Interpretation ID / 40080200 / SH
  "InterpretationID" |
  // Interpretation ID Issuer / 40080202 / LO
  "InterpretationIDIssuer" |
  // Interpretation Type ID / 40080210 / CS
  "InterpretationTypeID" |
  // Interpretation Status ID / 40080212 / CS
  "InterpretationStatusID" |
  // Impressions / 40080300 / ST
  "Impressions" |
  // Results Comments / 40084000 / ST
  "ResultsComments" |
  // Low Energy Detectors / 40100001 / CS
  "LowEnergyDetectors" |
  // High Energy Detectors / 40100002 / CS
  "HighEnergyDetectors" |
  // Detector Geometry Sequence / 40100004 / SQ
  "DetectorGeometrySequence" |
  // Threat ROI Voxel Sequence / 40101001 / SQ
  "ThreatROIVoxelSequence" |
  // Threat ROI Base / 40101004 / FL
  "ThreatROIBase" |
  // Threat ROI Extents / 40101005 / FL
  "ThreatROIExtents" |
  // Threat ROI Bitmap / 40101006 / OB
  "ThreatROIBitmap" |
  // Route Segment ID / 40101007 / SH
  "RouteSegmentID" |
  // Gantry Type / 40101008 / CS
  "GantryType" |
  // OOI Owner Type / 40101009 / CS
  "OOIOwnerType" |
  // Route Segment Sequence / 4010100A / SQ
  "RouteSegmentSequence" |
  // Potential Threat Object ID / 40101010 / US
  "PotentialThreatObjectID" |
  // Threat Sequence / 40101011 / SQ
  "ThreatSequence" |
  // Threat Category / 40101012 / CS
  "ThreatCategory" |
  // Threat Category Description / 40101013 / LT
  "ThreatCategoryDescription" |
  // ATD Ability Assessment / 40101014 / CS
  "ATDAbilityAssessment" |
  // ATD Assessment Flag / 40101015 / CS
  "ATDAssessmentFlag" |
  // ATD Assessment Probability / 40101016 / FL
  "ATDAssessmentProbability" |
  // Mass / 40101017 / FL
  "Mass" |
  // Density / 40101018 / FL
  "Density" |
  // Z Effective / 40101019 / FL
  "ZEffective" |
  // Boarding Pass ID / 4010101A / SH
  "BoardingPassID" |
  // Center of Mass / 4010101B / FL
  "CenterOfMass" |
  // Center of PTO / 4010101C / FL
  "CenterOfPTO" |
  // Bounding Polygon / 4010101D / FL
  "BoundingPolygon" |
  // Route Segment Start Location ID / 4010101E / SH
  "RouteSegmentStartLocationID" |
  // Route Segment End Location ID / 4010101F / SH
  "RouteSegmentEndLocationID" |
  // Route Segment Location ID Type / 40101020 / CS
  "RouteSegmentLocationIDType" |
  // Abort Reason / 40101021 / CS
  "AbortReason" |
  // Volume of PTO / 40101023 / FL
  "VolumeOfPTO" |
  // Abort Flag / 40101024 / CS
  "AbortFlag" |
  // Route Segment Start Time / 40101025 / DT
  "RouteSegmentStartTime" |
  // Route Segment End Time / 40101026 / DT
  "RouteSegmentEndTime" |
  // TDR Type / 40101027 / CS
  "TDRType" |
  // International Route Segment / 40101028 / CS
  "InternationalRouteSegment" |
  // Threat Detection Algorithm and Version / 40101029 / LO
  "ThreatDetectionAlgorithmAndVersion" |
  // Assigned Location / 4010102A / SH
  "AssignedLocation" |
  // Alarm Decision Time / 4010102B / DT
  "AlarmDecisionTime" |
  // Alarm Decision / 40101031 / CS
  "AlarmDecision" |
  // Number of Total Objects / 40101033 / US
  "NumberOfTotalObjects" |
  // Number of Alarm Objects / 40101034 / US
  "NumberOfAlarmObjects" |
  // PTO Representation Sequence / 40101037 / SQ
  "PTORepresentationSequence" |
  // ATD Assessment Sequence / 40101038 / SQ
  "ATDAssessmentSequence" |
  // TIP Type / 40101039 / CS
  "TIPType" |
  // DICOS Version / 4010103A / CS
  "DICOSVersion" |
  // OOI Owner Creation Time / 40101041 / DT
  "OOIOwnerCreationTime" |
  // OOI Type / 40101042 / CS
  "OOIType" |
  // OOI Size / 40101043 / FL
  "OOISize" |
  // Acquisition Status / 40101044 / CS
  "AcquisitionStatus" |
  // Basis Materials Code Sequence / 40101045 / SQ
  "BasisMaterialsCodeSequence" |
  // Phantom Type / 40101046 / CS
  "PhantomType" |
  // OOI Owner Sequence / 40101047 / SQ
  "OOIOwnerSequence" |
  // Scan Type / 40101048 / CS
  "ScanType" |
  // Itinerary ID / 40101051 / LO
  "ItineraryID" |
  // Itinerary ID Type / 40101052 / SH
  "ItineraryIDType" |
  // Itinerary ID Assigning Authority / 40101053 / LO
  "ItineraryIDAssigningAuthority" |
  // Route ID / 40101054 / SH
  "RouteID" |
  // Route ID Assigning Authority / 40101055 / SH
  "RouteIDAssigningAuthority" |
  // Inbound Arrival Type / 40101056 / CS
  "InboundArrivalType" |
  // Carrier ID / 40101058 / SH
  "CarrierID" |
  // Carrier ID Assigning Authority / 40101059 / CS
  "CarrierIDAssigningAuthority" |
  // Source Orientation / 40101060 / FL
  "SourceOrientation" |
  // Source Position / 40101061 / FL
  "SourcePosition" |
  // Belt Height / 40101062 / FL
  "BeltHeight" |
  // Algorithm Routing Code Sequence / 40101064 / SQ
  "AlgorithmRoutingCodeSequence" |
  // Transport Classification / 40101067 / CS
  "TransportClassification" |
  // OOI Type Descriptor / 40101068 / LT
  "OOITypeDescriptor" |
  // Total Processing Time / 40101069 / FL
  "TotalProcessingTime" |
  // Detector Calibration Data / 4010106C / OB
  "DetectorCalibrationData" |
  // Additional Screening Performed / 4010106D / CS
  "AdditionalScreeningPerformed" |
  // Additional Inspection Selection Criteria / 4010106E / CS
  "AdditionalInspectionSelectionCriteria" |
  // Additional Inspection Method Sequence / 4010106F / SQ
  "AdditionalInspectionMethodSequence" |
  // AIT Device Type / 40101070 / CS
  "AITDeviceType" |
  // QR Measurements Sequence / 40101071 / SQ
  "QRMeasurementsSequence" |
  // Target Material Sequence / 40101072 / SQ
  "TargetMaterialSequence" |
  // SNR Threshold / 40101073 / FD
  "SNRThreshold" |
  // Image Scale Representation / 40101075 / DS
  "ImageScaleRepresentation" |
  // Referenced PTO Sequence / 40101076 / SQ
  "ReferencedPTOSequence" |
  // Referenced TDR Instance Sequence / 40101077 / SQ
  "ReferencedTDRInstanceSequence" |
  // PTO Location Description / 40101078 / ST
  "PTOLocationDescription" |
  // Anomaly Locator Indicator Sequence / 40101079 / SQ
  "AnomalyLocatorIndicatorSequence" |
  // Anomaly Locator Indicator / 4010107A / FL
  "AnomalyLocatorIndicator" |
  // PTO Region Sequence / 4010107B / SQ
  "PTORegionSequence" |
  // Inspection Selection Criteria / 4010107C / CS
  "InspectionSelectionCriteria" |
  // Secondary Inspection Method Sequence / 4010107D / SQ
  "SecondaryInspectionMethodSequence" |
  // PRCS to RCS Orientation / 4010107E / DS
  "PRCSToRCSOrientation" |
  // MAC Parameters Sequence / 4FFE0001 / SQ
  "MACParametersSequence" |
  // Curve Dimensions / 50xx0005 / US
  "CurveDimensions" |
  // Number of Points / 50xx0010 / US
  "NumberOfPoints" |
  // Type of Data / 50xx0020 / CS
  "TypeOfData" |
  // Curve Description / 50xx0022 / LO
  "CurveDescription" |
  // Axis Units / 50xx0030 / SH
  "AxisUnits" |
  // Axis Labels / 50xx0040 / SH
  "AxisLabels" |
  // Data Value Representation / 50xx0103 / US
  "DataValueRepresentation" |
  // Minimum Coordinate Value / 50xx0104 / US
  "MinimumCoordinateValue" |
  // Maximum Coordinate Value / 50xx0105 / US
  "MaximumCoordinateValue" |
  // Curve Range / 50xx0106 / SH
  "CurveRange" |
  // Curve Data Descriptor / 50xx0110 / US
  "CurveDataDescriptor" |
  // Coordinate Start Value / 50xx0112 / US
  "CoordinateStartValue" |
  // Coordinate Step Value / 50xx0114 / US
  "CoordinateStepValue" |
  // Curve Activation Layer / 50xx1001 / CS
  "CurveActivationLayer" |
  // Audio Type / 50xx2000 / US
  "AudioType" |
  // Audio Sample Format / 50xx2002 / US
  "AudioSampleFormat" |
  // Number of Channels / 50xx2004 / US
  "NumberOfChannels" |
  // Number of Samples / 50xx2006 / UL
  "NumberOfSamples" |
  // Sample Rate / 50xx2008 / UL
  "SampleRate" |
  // Total Time / 50xx200A / UL
  "TotalTime" |
  // Audio Sample Data / 50xx200C / OB/OW
  "AudioSampleData" |
  // Audio Comments / 50xx200E / LT
  "AudioComments" |
  // Curve Label / 50xx2500 / LO
  "CurveLabel" |
  // Curve Referenced Overlay Sequence / 50xx2600 / SQ
  "CurveReferencedOverlaySequence" |
  // Curve Referenced Overlay Group / 50xx2610 / US
  "CurveReferencedOverlayGroup" |
  // Curve Data / 50xx3000 / OB/OW
  "CurveData" |
  // Shared Functional Groups Sequence / 52009229 / SQ
  "SharedFunctionalGroupsSequence" |
  // Per-frame Functional Groups Sequence / 52009230 / SQ
  "PerFrameFunctionalGroupsSequence" |
  // Waveform Sequence / 54000100 / SQ
  "WaveformSequence" |
  // Channel Minimum Value / 54000110 / OB/OW
  "ChannelMinimumValue" |
  // Channel Maximum Value / 54000112 / OB/OW
  "ChannelMaximumValue" |
  // Waveform Bits Allocated / 54001004 / US
  "WaveformBitsAllocated" |
  // Waveform Sample Interpretation / 54001006 / CS
  "WaveformSampleInterpretation" |
  // Waveform Padding Value / 5400100A / OB/OW
  "WaveformPaddingValue" |
  // Waveform Data / 54001010 / OB/OW
  "WaveformData" |
  // First Order Phase Correction Angle / 56000010 / OF
  "FirstOrderPhaseCorrectionAngle" |
  // Spectroscopy Data / 56000020 / OF
  "SpectroscopyData" |
  // Overlay Rows / 60xx0010 / US
  "OverlayRows" |
  // Overlay Columns / 60xx0011 / US
  "OverlayColumns" |
  // Overlay Planes / 60xx0012 / US
  "OverlayPlanes" |
  // Number of Frames in Overlay / 60xx0015 / IS
  "NumberOfFramesInOverlay" |
  // Overlay Description / 60xx0022 / LO
  "OverlayDescription" |
  // Overlay Type / 60xx0040 / CS
  "OverlayType" |
  // Overlay Subtype / 60xx0045 / LO
  "OverlaySubtype" |
  // Overlay Origin / 60xx0050 / SS
  "OverlayOrigin" |
  // Image Frame Origin / 60xx0051 / US
  "ImageFrameOrigin" |
  // Overlay Plane Origin / 60xx0052 / US
  "OverlayPlaneOrigin" |
  // Overlay Compression Code / 60xx0060 / CS
  "OverlayCompressionCode" |
  // Overlay Compression Originator / 60xx0061 / SH
  "OverlayCompressionOriginator" |
  // Overlay Compression Label / 60xx0062 / SH
  "OverlayCompressionLabel" |
  // Overlay Compression Description / 60xx0063 / CS
  "OverlayCompressionDescription" |
  // Overlay Compression Step Pointers / 60xx0066 / AT
  "OverlayCompressionStepPointers" |
  // Overlay Repeat Interval / 60xx0068 / US
  "OverlayRepeatInterval" |
  // Overlay Bits Grouped / 60xx0069 / US
  "OverlayBitsGrouped" |
  // Overlay Bits Allocated / 60xx0100 / US
  "OverlayBitsAllocated" |
  // Overlay Bit Position / 60xx0102 / US
  "OverlayBitPosition" |
  // Overlay Format / 60xx0110 / CS
  "OverlayFormat" |
  // Overlay Location / 60xx0200 / US
  "OverlayLocation" |
  // Overlay Code Label / 60xx0800 / CS
  "OverlayCodeLabel" |
  // Overlay Number of Tables / 60xx0802 / US
  "OverlayNumberOfTables" |
  // Overlay Code Table Location / 60xx0803 / AT
  "OverlayCodeTableLocation" |
  // Overlay Bits For Code Word / 60xx0804 / US
  "OverlayBitsForCodeWord" |
  // Overlay Activation Layer / 60xx1001 / CS
  "OverlayActivationLayer" |
  // Overlay Descriptor - Gray / 60xx1100 / US
  "OverlayDescriptorGray" |
  // Overlay Descriptor - Red / 60xx1101 / US
  "OverlayDescriptorRed" |
  // Overlay Descriptor - Green / 60xx1102 / US
  "OverlayDescriptorGreen" |
  // Overlay Descriptor - Blue / 60xx1103 / US
  "OverlayDescriptorBlue" |
  // Overlays - Gray / 60xx1200 / US
  "OverlaysGray" |
  // Overlays - Red / 60xx1201 / US
  "OverlaysRed" |
  // Overlays - Green / 60xx1202 / US
  "OverlaysGreen" |
  // Overlays - Blue / 60xx1203 / US
  "OverlaysBlue" |
  // ROI Area / 60xx1301 / IS
  "ROIArea" |
  // ROI Mean / 60xx1302 / DS
  "ROIMean" |
  // ROI Standard Deviation / 60xx1303 / DS
  "ROIStandardDeviation" |
  // Overlay Label / 60xx1500 / LO
  "OverlayLabel" |
  // Overlay Data / 60xx3000 / OB/OW
  "OverlayData" |
  // Overlay Comments / 60xx4000 / LT
  "OverlayComments" |
  // Extended Offset Table / 7FE00001 / OV
  "ExtendedOffsetTable" |
  // Extended Offset Table Lengths / 7FE00002 / OV
  "ExtendedOffsetTableLengths" |
  // Encapsulated Pixel Data Value Total Length / 7FE00003 / UV
  "EncapsulatedPixelDataValueTotalLength" |
  // Float Pixel Data / 7FE00008 / OF
  "FloatPixelData" |
  // Double Float Pixel Data / 7FE00009 / OD
  "DoubleFloatPixelData" |
  // Pixel Data / 7FE00010 / OB/OW
  "PixelData" |
  // Coefficients SDVN / 7FE00020 / OW
  "CoefficientsSDVN" |
  // Coefficients SDHN / 7FE00030 / OW
  "CoefficientsSDHN" |
  // Coefficients SDDN / 7FE00040 / OW
  "CoefficientsSDDN" |
  // Variable Pixel Data / 7Fxx0010 / OB/OW
  "VariablePixelData" |
  // Variable Next Data Group / 7Fxx0011 / US
  "VariableNextDataGroup" |
  // Variable Coefficients SDVN / 7Fxx0020 / OW
  "VariableCoefficientsSDVN" |
  // Variable Coefficients SDHN / 7Fxx0030 / OW
  "VariableCoefficientsSDHN" |
  // Variable Coefficients SDDN / 7Fxx0040 / OW
  "VariableCoefficientsSDDN" |
  // Digital Signatures Sequence / FFFAFFFA / SQ
  "DigitalSignaturesSequence" |
  // Data Set Trailing Padding / FFFCFFFC / OB
  "DataSetTrailingPadding" |
  // Item / FFFEE000 / 
  "Item" |
  // Item Delimitation Item / FFFEE00D / 
  "ItemDelimitationItem" |
  // Sequence Delimitation Item / FFFEE0DD / 
  "SequenceDelimitationItem" |
  // Current Frame Functional Groups Sequence / 00060001 / SQ
  "CurrentFrameFunctionalGroupsSequence"

