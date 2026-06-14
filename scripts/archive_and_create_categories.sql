-- Archive the old tables
ALTER TABLE categories RENAME TO categories_archive_v1;
ALTER TABLE nominations RENAME TO nominations_archive_v1;

-- Create the new categories table
CREATE TABLE public.categories (
    id TEXT PRIMARY KEY,
    group_name TEXT,
    name TEXT,
    description TEXT
);

-- Note: Ensure that the permissions and policies (RLS) on the new categories table
-- match what was previously set. E.g.
-- ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Enable read access for all users" ON public.categories FOR SELECT USING (true);

-- Create the new nominations table (matching existing schema structure and adding the foreign key)
CREATE TABLE public.nominations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_matric TEXT UNIQUE NOT NULL REFERENCES public.students(matric) ON DELETE CASCADE,
    selections JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS and policies for nominations if necessary
-- ALTER TABLE public.nominations ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Enable insert for authenticated users only" ON public.nominations FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Enable update for users based on student_matric" ON public.nominations FOR UPDATE USING (true);
