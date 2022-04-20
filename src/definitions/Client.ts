import {
  TaskModule,
  ProjectModule,
  SectionModule,
  LabelModule,
  CommentModule,
  ExtrasModule,
} from ".";

export interface AuthHeader {
  Authorization: string;
}

export interface TDSClient {
  apiToken: string;
  task: TaskModule;
  project: ProjectModule;
  section: SectionModule;
  label: LabelModule;
  comment: CommentModule;
  extras: ExtrasModule;
}

export interface ClientConstructor {
  (apiToken?: string): TDSClient;
}
