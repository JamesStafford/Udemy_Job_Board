import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
    job: (root, { id }) => Job.findById(id),
    company: (root, { id }) => Company.findById(id),
  },
  Job: {
    company: (job) => {
      return Company.findById(job.companyId);
    },
  },
};
