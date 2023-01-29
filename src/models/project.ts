import { z } from 'zod';
import { Timestamp } from 'firebase/firestore';

export const ProjectTypeEnum = z.enum(['NPM', 'Scripting', 'Server', 'Course']);

export const ProjectSchema = z.object({
    type: ProjectTypeEnum,
    name: z.string(),
    packageName: z.string().optional(),
    repoSlug: z.string().optional(),
    url: z.string().url(),
    description: z.string().or(z.array(z.string())),
    startDate: z.instanceof(Timestamp).transform((timestamp) => timestamp.toDate()),
    endDate: z.instanceof(Timestamp).nullable().default(null).transform((timestamp) => timestamp ? timestamp.toDate() : timestamp),
});

export type ProjectType = z.infer<typeof ProjectTypeEnum>;
export type Project = z.infer<typeof ProjectSchema>;
