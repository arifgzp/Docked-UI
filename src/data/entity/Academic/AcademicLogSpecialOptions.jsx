const activities = [
	{
		id: "activities",
		name: "Activity",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "DidacticLecture",
				name: "Didactic Lecture",
				nodeType: "leaf",
			},
			{
				id: "Integrated Lecture",
				name: "Integrated Lecture",
				nodeType: "leaf",
			},
			{
				id: "Journal Club",
				name: "Journal club",
				nodeType: "leaf",
			},
			{
				id: "SubjectSeminar",
				name: "Subject Seminar",
				nodeType: "leaf",
			},
			{
				id: "SlideSeminar",
				name: "Slide Seminar",
				nodeType: "leaf",
			},
			{
				id: "Symposium",
				name: "Symposium",
				nodeType: "leaf",
			},
			{
				id: "StatisticsMeet",
				name: "Statistics Meet",
				nodeType: "leaf",
			},
			{
				id: "MortalityMeet",
				name: "Mortality Meet",
				nodeType: "leaf",
			},
			{
				id: "Ethicallectures",
				name: "Ethical lectures",
				nodeType: "leaf",
			},
			{
				id: "Medico-legaldiscussions",
				name: "Medico-legal discussions",
				nodeType: "leaf",
			},
			{
				id: "WardServiceround",
				name: "Ward Service round",
				nodeType: "leaf",
			},
			{
				id: "WardTeachinground",
				name: "Ward Teaching round",
				nodeType: "leaf",
			},
			{
				id: "GroupDiscussion",
				name: "Group Discussion",
				nodeType: "leaf",
			},
			{
				id: "ClinicalCasepresentation",
				name: "Clinical Case presentation",
				nodeType: "leaf",
			},
			{
				id: "Clinico-pathologicalConference",
				name: "Clinico-pathological conference",
				nodeType: "leaf",
			},
			{
				id: "Inter-departmentalClinicalMeeting",
				name: "Inter-departmental clinical meeting",
				nodeType: "leaf",
			},
			{
				id: "Pathology",
				name: "Pathology",
				nodeType: "leaf",
			},
			{
				id: "Radio-diagnosis",
				name: "Radio-diagnosis",
				nodeType: "leaf",
			},
			{
				id: "TransplantMeet",
				name: "Transplant Meet",
				nodeType: "leaf",
			},
			{
				id: "Pre-clinicalteaching",
				name: "Pre-clinical teaching",
				nodeType: "leaf",
			},
			{
				id: "Teaching ",
				name: "Teaching",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Undergraduate",
						name: "Undergraduate",
						nodeType: "leaf",
					},
					{
						id: "Interns",
						name: "Interns",
						nodeType: "leaf",
					},
					{
						id: "Post-graduate",
						name: "Post-graduate",
						nodeType: "leaf",
					},
					{
						id: "Super-specialistPG",
						name: "Super-specialist PG",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "CME|CDE",
				name: "CME/ CDE",
				nodeType: "leaf",
			},
			{
				id: "Conference",
				name: "Conference",
				nodeType: "parent",
				selectType: "multiple",
				children: [
					{
						id: "Posterpresentation",
						name: "Poster presentation",
						nodeType: "leaf",
					},
					{
						id: "Paperpresentation",
						name: "Paper presentation",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Workshop",
				name: "Workshop",
				nodeType: "leaf",
			},
			{
				id: "Other",
				name: "Other",
				nodeType: "leaf",
				inputType: "text",
			},
		],
	},
];

const supervision = [
	{
		id: "supervision",
		name: "Supervision",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Presented",
				name: "Presented",
				nodeType: "leaf",
			},
			{
				id: "Moderator",
				name: "Moderator",
				nodeType: "leaf",
			},
			{
				id: "Panelist",
				name: "Panelist",
				nodeType: "leaf",
			},
			{
				id: "Conducted",
				name: "Conducted",
				nodeType: "leaf",
			},
			{
				id: "Organised",
				name: "Organised",
				nodeType: "leaf",
			},
			{
				id: "Attended",
				name: "Attended",
				nodeType: "leaf",
			},
			{
				id: "Hands-on",
				name: "Hands-on",
				nodeType: "leaf",
			},
			{
				id: "GuestSpeaker",
				name: "Guest speaker",
				nodeType: "leaf",
			},
			{
				id: "Other",
				name: "Other",
				nodeType: "leaf",
				inputType: "text",
			},
		],
	},
];
export default {
	activities,
	supervision,
};
