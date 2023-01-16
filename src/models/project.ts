import { z } from 'zod';

const ProjectTypeEnum = z.enum(['NPM', 'Server', 'Course']);

export const ProjectSchema = z.object({
    type: ProjectTypeEnum,
    name: z.string(),
    url: z.string().url(),
    description: z.string().or(z.array(z.string())),
    startDate: z.string(),
    endDate: z.string().optional().nullable().default(null),
});

export type ProjectTypeEnum = z.infer<typeof ProjectTypeEnum>;
export type Project = z.infer<typeof ProjectSchema>;
