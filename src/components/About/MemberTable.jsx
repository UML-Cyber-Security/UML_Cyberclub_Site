import React from 'react';
import {
	Avatar,
	Badge,
	Table,
	Group,
	Text,
	Anchor,
	ScrollArea,
	useMantineTheme,
} from '@mantine/core';


const jobColors = {
	president: 'cyan',
	secretary: 'pink',
	treasurer: 'green',
	coordinator: 'red',
	hackerlord: 'orange'
};

export function UsersTable() {
	const theme = useMantineTheme();

	const data = [
		{
			img: "",
			name: "Rosemarie O'Riorden",
			title: "President",
			email: 'placeholder@student.uml.edu',
			year: "Sophomore"
		},
		{
			img: "",
			name: "Justin Marwad",
			title: "Vice President",
			email: 'placeholder@student.uml.edu',
			year: "Junior"
		},
		{
			img: "",
			name: "Beth Sullivan",
			title: "Secretary",
			email: 'placeholder@student.uml.edu',
			year: "Sophomore"
		},
		{
			img: "",
			name: "Ahmed Shaheen",
			title: "Treasurer",
			email: 'placeholder@student.uml.edu',
			year: "???",
		},
		{
			img: "",
			name: "Eduardo Alvernaz",
			title: "Coordinator",
			email: 'placeholder@student.uml.edu',
			year: "???",
		},
		{
			img: "https://media-exp1.licdn.com/dms/image/C4D03AQEvzlyDM_QsAw/profile-displayphoto-shrink_200_200/0/1645294102854?e=1655942400&v=beta&t=Sa38sXzR1DqM1Q2Ww8t0fww60jFTS2O6mdXu7Uk-c50",
			name: "Bryan Montalvan",
			title: "HackerLord",
			email: 'bryan_montalvanarevalo@student.uml.edu',
			year: "Sophomore",
		}
	]


	const rows = data.map((item) => (
		<tr>
			<td>
				<Group spacing="sm">
					<Avatar size={30} src={item.img} radius={30} />
					<Text size="sm" weight={500}>
						{item.name}
					</Text>
				</Group>
			</td>
			<td>
				<Badge
					color={jobColors[item.title.toLowerCase()]}
					variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
				>
					{item.title}
				</Badge>
			</td>
			<td>
				<Anchor size="sm" href="#" onClick={(event) => event.preventDefault()}>
					{item.email}
				</Anchor>
			</td>
			<td>
				<Text size="sm" color="gray">
					{item.year}
				</Text>
			</td>
		</tr>
	));

	return (
		<ScrollArea >
			<Table sx={{ minWidth: 800 }} verticalSpacing="sm">
				<thead>
					<tr>
						<th>Member</th>
						<th>Position</th>
						<th>Email</th>
						<th>School Year</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</Table>
		</ScrollArea>
	);
}