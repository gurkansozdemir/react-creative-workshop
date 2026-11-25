type JobState = "queued" | "running" | "done" | "failed";

export function JobStatus({ state }: { state: JobState }) {
  return <p role="status">Job status: {state}</p>;
}
