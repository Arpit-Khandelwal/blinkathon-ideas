import {supabase} from '@/utils/supabase';

export const fetchIdeas = async () => {
  const { data, error } = await supabase
    .from('ideas')
    .select('*');

    console.log("Data from supabase: ",data);

  if (error) console.error('Error fetching ideas:', error);
  return data;
}
