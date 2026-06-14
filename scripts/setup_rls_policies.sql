-- Enable RLS on both tables
ALTER TABLE public.nominations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.device_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- 1. Policies for NOMINATIONS
-- Allow anyone to read nominations
CREATE POLICY "Allow public select on nominations" 
ON public.nominations FOR SELECT 
TO public USING (true);

-- Allow anyone to insert nominations
CREATE POLICY "Allow public insert on nominations" 
ON public.nominations FOR INSERT 
TO public WITH CHECK (true);

-- Allow anyone to update their own nominations (based on the payload)
CREATE POLICY "Allow public update on nominations" 
ON public.nominations FOR UPDATE 
TO public USING (true);

-- 2. Policies for DEVICE_LOGS
-- Allow anyone to read device_logs
CREATE POLICY "Allow public select on device_logs" 
ON public.device_logs FOR SELECT 
TO public USING (true);

-- Allow anyone to insert device_logs
CREATE POLICY "Allow public insert on device_logs" 
ON public.device_logs FOR INSERT 
TO public WITH CHECK (true);

-- 3. Policies for CATEGORIES
-- Allow anyone to read categories
CREATE POLICY "Allow public select on categories" 
ON public.categories FOR SELECT 
TO public USING (true);
