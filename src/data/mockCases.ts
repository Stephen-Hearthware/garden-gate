export interface GardenCase {
  id: string;
  memberName: string;
  age: number;
  charge: string;
  description: string;
  date: string;
  repeatOffense: boolean;
  nudge: string | null;
}

export const cases: GardenCase[] = [
  {
    id: "c1",
    memberName: "Alice Green",
    age: 34,
    charge: "Unauthorized Use of Shared Space",
    description: "Planted tomatoes in a communal plot without approval.",
    date: "2025-07-01",
    repeatOffense: false,
    nudge: "Discuss plot sharing.",
  },
  {
    id: "c2",
    memberName: "Bob Stone",
    age: 41,
    charge: "Negligent Use of Tools",
    description: "Left tools scattered in the shared path for multiple hours.",
    date: "2025-06-22",
    repeatOffense: false,
    nudge: "Ask for tidiness.",
  },
  {
    id: "c3",
    memberName: "Carol Bloom",
    age: 29,
    charge: "Damage to Neighboring Plot",
    description: "Overwatered a neighboring plot, resulting in mildew on kale.",
    date: "2025-06-18",
    repeatOffense: true,
    nudge: null,
  },
  {
    id: "c4",
    memberName: "Dana Moss",
    age: 52,
    charge: "Non-Participation",
    description: "Missed three consecutive required work days without notice.",
    date: "2025-07-01",
    repeatOffense: true,
    nudge: "Consider formal probation period before removal decision.",
  },
];
