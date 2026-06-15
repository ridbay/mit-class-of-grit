-- Archive the old device_logs table
ALTER TABLE device_logs RENAME TO device_logs_archive_v1;

-- Create the new device_logs table
CREATE TABLE public.device_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_matric TEXT UNIQUE NOT NULL REFERENCES public.students(matric) ON DELETE CASCADE,
    device_id TEXT NOT NULL,
    ip_address TEXT,
    country TEXT,
    region TEXT,
    city TEXT,
    isp TEXT,
    lat_lng TEXT,
    connection_type TEXT,
    os_info TEXT,
    browser_info TEXT,
    user_agent TEXT,
    device_type TEXT,
    device_model TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: Ensure that the permissions and policies (RLS) on the new device_logs table
-- match what was previously set. E.g.
-- ALTER TABLE public.device_logs ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Enable read access for all users" ON public.device_logs FOR SELECT USING (true);
-- CREATE POLICY "Enable insert for authenticated users only" ON public.device_logs FOR INSERT WITH CHECK (true);
