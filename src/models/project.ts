import { z } from 'zod';

export const ProjectTypeEnum = z.enum(['NPM', 'Scripting', 'Server', 'Course']);

export const ProjectSchema = z.object({
    type: ProjectTypeEnum,
    name: z.string(),
    url: z.string().url(),
    description: z.string().or(z.array(z.string())),
    startDate: z.string(),
    endDate: z.string().nullable().default(null),
});

export type ProjectType = z.infer<typeof ProjectTypeEnum>;
export type Project = z.infer<typeof ProjectSchema>;
