import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
    job: (root, { id }) => Job.findById(id),
    company: (root, { id }) => Company.findById(id),
  },
  Mutation: {
    createJob: (root, { title, companyId, description }) => {
      return Job.create({ title, companyId, description });
    },
  },
  Company: {
    jobs: (company) => {
      return Job.findAll((job) => job.companyId === company.id);
    },
  },
  Job: {
    company: (job) => {
      return Company.findById(job.companyId);
    },
  },
};
