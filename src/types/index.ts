export type EnrolmentStatus = 'Validated' | 'Needs Review' | 'Rejected' | 'Active' | 'Under Review' | 'Awaiting Correction';

export interface Institution {
  id: string;
  name: string;
  code: string;
  type: string;
  state: string;
  programmesCount: number;
  enrolledStudents: number;
  approvedIntake: number;
  lastSubmission: string;
  status: 'Compliant' | 'Needs Review' | 'Pending Submission';
  contactPerson: string;
  email: string;
}

export interface SubmissionBatch {
  id: string;
  institutionId: string;
  institutionName: string;
  fileName: string;
  fileSize: string;
  date: string;
  recordsCount: number;
  academicYear: string;
  programme?: string;
  status: 'Validated' | 'Needs Review' | 'Rejected';
  submissionType: 'New Submission' | 'Correction Submission';
  remarks?: string;
}

export interface ValidationFinding {
  id: string;
  institutionId: string;
  institutionName: string;
  apaarRef: string;
  studentName: string;
  findingType: 'Missing APAAR ID' | 'Duplicate Records' | 'Intake Exceeded' | 'Invalid Format' | 'Conflicting Enrolment';
  ruleRef: string;
  ruleVersion: string;
  severity: 'High' | 'Medium' | 'Low';
  academicYear: string;
  dateCreated: string;
  reviewStatus: 'Needs Review' | 'Under Review' | 'Resolved' | 'Awaiting Clarification';
  description: string;
  caseId?: string;
}

export interface CaseRecord {
  caseId: string;
  apaarRef: string;
  studentName: string;
  dob: string;
  gender: string;
  formatStatus: 'Valid format' | 'Invalid format';
  status: 'Needs Review' | 'Under Review' | 'Marked Resolved' | 'Clarification Requested';
  summary: string;
  ruleTriggered: {
    code: string;
    version: string;
    title: string;
    text: string;
  };
  institutionA: {
    institutionId: string;
    institutionName: string;
    programme: string;
    academicYear: string;
    admissionDate: string;
    enrolmentStatus: 'Active' | 'Withdrawn' | 'Provisional';
    submissionId: string;
  };
  institutionB: {
    institutionId: string;
    institutionName: string;
    programme: string;
    academicYear: string;
    admissionDate: string;
    enrolmentStatus: 'Active' | 'Withdrawn' | 'Provisional';
    submissionId: string;
  };
  timeline: Array<{
    timestamp: string;
    event: string;
    actor?: string;
    details?: string;
  }>;
}

export interface RuleDefinition {
  id: string;
  code: string;
  name: string;
  category: 'Enrolment' | 'Identity' | 'Intake' | 'Sanctions';
  version: string;
  status: 'Active' | 'Draft' | 'Deprecated';
  description: string;
  sourceReference: string;
  lastUpdated: string;
  parameters: Record<string, string | number>;
  sampleInput: string;
  sampleOutput: string;
}

export interface IntakeRecord {
  id: string;
  institutionId: string;
  institutionName: string;
  academicYear: string;
  programme: string;
  approvedIntake: number;
  enrolledCount: number;
  variance: number;
  status: 'Normal' | 'Intake Exceeded' | 'Underfilled';
}

export interface CorrectionRequest {
  id: string;
  submissionId: string;
  caseId?: string;
  institutionName: string;
  reason: string;
  requestedBy: string;
  dateCreated: string;
  status: 'Awaiting Correction' | 'Under Review' | 'Approved' | 'Declined';
  notes?: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  entityType: string;
  entityReference: string;
  outcome: 'Success' | 'Flagged' | 'Rejected' | 'Pending';
  details: string;
}

