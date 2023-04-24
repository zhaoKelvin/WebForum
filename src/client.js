import { createClient } from '@supabase/supabase-js'

// Password: LWGbcuTvlBq3k5KZ

const URL = 'https://nlussinisxajiahymiiu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdXNzaW5pc3hhamlhaHltaWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNzI2OTUsImV4cCI6MTk5Nzk0ODY5NX0.FcNvE0_a630Q0NValOF_TgBJ1yLxTxi96S4WJtXFKSQ'

export const supabase = createClient(URL, API_KEY);
