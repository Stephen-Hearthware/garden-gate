export interface GardenCase {
  id: number;
  memberName: string;
  incident: string;
  date: string; // ISO string
  severity: string;
  nudges: string[];
}

export const cases: GardenCase[] = [
  {
    id: 1,
    memberName: "Alice Green",
    incident: "Planted tomatoes in a shared plot without permission.",
    date: "2025-07-01",
    severity: "low",
    nudges: ["Discuss plot sharing", "Remind guidelines"],
  },
  {
    id: 2,
    memberName: "Bob Stone",
    incident: "Left tools scattered around the communal area.",
    date: "2025-06-22",
    severity: "medium",
    nudges: ["Ask for tidiness", "Offer storage help"],
  },
  {
    id: 3,
    memberName: "Carol Bloom",
    incident: "Overwatered neighbor's plants causing mildew.",
    date: "2025-06-18",
    severity: "high",
    nudges: ["Coordinate watering", "Provide mildew treatment"],
  },
];
