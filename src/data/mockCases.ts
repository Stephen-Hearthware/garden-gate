export interface GardenCase {
  id: string;
  memberName: string;
  incident: string;
  date: string; // ISO string
  severity: 'low' | 'medium' | 'high';
  repeatOffense: boolean;
  nudge: string | null;
}

export const cases: GardenCase[] = [
  {
    id: 'c1',
    memberName: 'Alice Green',
    incident: 'Planted tomatoes in a shared plot without permission.',
    date: '2025-07-01',
    severity: 'low',
    repeatOffense: false,
    nudge: 'Discuss plot sharing',
  },
  {
    id: 'c2',
    memberName: 'Bob Stone',
    incident: 'Left tools scattered around the communal area.',
    date: '2025-06-22',
    severity: 'medium',
    repeatOffense: false,
    nudge: 'Ask for tidiness',
  },
  {
    id: 'c3',
    memberName: 'Carol Bloom',
    incident: "Overwatered neighbor's plants causing mildew.",
    date: '2025-06-18',
    severity: 'high',
    repeatOffense: true,
    nudge: null,
  },
  {
    id: 'c4',
    memberName: 'Dana Moss',
    incident: 'Repeatedly failed to attend mandatory work sessions.',
    date: '2025-07-01',
    severity: 'high',
    repeatOffense: true,
    nudge: 'Consider formal probation period before removal decision.',
  },
];
