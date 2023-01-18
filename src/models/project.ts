import { z } from 'zod';

export const ProjectTypeEnum = z.enum(['Node', 'NPM', 'Server', 'Course']);

export const ProjectSchema = z.object({
    type: ProjectTypeEnum,
    name: z.string(),
    url: z.string().url(),
    description: z.string().or(z.array(z.string())),
    startDate: z.string(),
    endDate: z.string().optional().nullable().default(null),
});

export type ProjectType = z.infer<typeof ProjectTypeEnum>;
export type Project = z.infer<typeof ProjectSchema>;
