CREATE TABLE `students` (
	`id` text PRIMARY KEY NOT NULL,
	`matric` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `students_matric_unique` ON `students` (`matric`);--> statement-breakpoint
CREATE TABLE `vote_logs` (
	`id` text PRIMARY KEY NOT NULL,
	`ip_address` text,
	`browser_fingerprint` text,
	`student_matric` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `votes` (
	`id` text PRIMARY KEY NOT NULL,
	`student_matric` text NOT NULL,
	`selections` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `votes_student_matric_unique` ON `votes` (`student_matric`);