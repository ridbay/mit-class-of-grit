-- Add the missing screen column to the device_logs table
ALTER TABLE public.device_logs ADD COLUMN screen TEXT;
